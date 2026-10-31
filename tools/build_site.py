#!/usr/bin/env python3
"""三分鐘遊樂場 site builder.

Drop a folder with an index.html at the repo root (optionally a game.json) and run this.
It fills in game.json, injects share meta, makes thumbnail + share image, and rebuilds
the home feed, sitemap, robots.txt and 404 page.
"""
import os, re, json, html, hashlib, datetime, sys, base64, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
CONF = json.loads((ROOT / "site.json").read_text(encoding="utf-8"))
BASE = os.environ.get("SITE_BASE", CONF["base"]).rstrip("/")
BRAND = CONF["brand"]
TZ = datetime.timezone(datetime.timedelta(hours=8))
SKIP = {"assets", "tools", ".github", "redirects", "node_modules"}
M0, M1 = "<!--site:meta-->", "<!--/site:meta-->"
ICON = "data:image/svg+xml," + html.escape('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="#111"/><text x="32" y="45" font-size="36" text-anchor="middle" fill="#fff" font-family="sans-serif" font-weight="900">3</text></svg>', quote=True)
SKEL = '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>'

def now(): return datetime.datetime.now(TZ).replace(microsecond=0)

def games_dirs():
    for d in sorted(ROOT.iterdir()):
        if d.is_dir() and d.name not in SKIP and not d.name.startswith(".") and (d / "index.html").exists():
            yield d

def meta_block(slug, g):
    url = f"{BASE}/{slug}/"
    t = html.escape(g["title"]); ds = html.escape(g["desc"])
    return (f'{M0}\n<meta name="description" content="{ds}">\n<link rel="canonical" href="{url}">\n<link rel="icon" href="{ICON}">\n'
            f'<meta property="og:type" content="website">\n<meta property="og:site_name" content="{BRAND}">\n'
            f'<meta property="og:title" content="{t}｜{BRAND}">\n<meta property="og:description" content="{ds}">\n'
            f'<meta property="og:url" content="{url}">\n<meta property="og:image" content="{url}og.png">\n'
            f'<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">\n'
            f'<meta name="twitter:card" content="summary_large_image">\n{M1}')

def normalize(path, slug, g):
    s = path.read_text(encoding="utf-8")
    if M0 in s:
        s = re.sub(re.escape(M0) + r".*?" + re.escape(M1), lambda m: meta_block(slug, g), s, flags=re.S)
    else:
        s = re.sub(r'<meta\s+(property|name)="(og:[^"]+|twitter:[^"]+|description)"[^>]*>\s*', "", s)
        s = re.sub(r'<link\s+rel="canonical"[^>]*>\s*', "", s)
        s = re.sub(r'<meta name="claude:viewport-fit-sides"[^>]*>\s*', "", s)
        if re.match(r"\s*<!doctype", s, re.I):
            if re.search(r"<meta\s+charset", s, re.I):
                s = re.sub(r"(<meta\s+charset[^>]*>)", lambda m: m.group(1) + "\n" + meta_block(slug, g), s, count=1, flags=re.I)
            else:
                s = re.sub(r"(<head[^>]*>)", lambda m: m.group(1) + '\n<meta charset="utf-8">\n' + meta_block(slug, g), s, count=1, flags=re.I)
        else:  # artifact-style fragment: wrap it in a full document
            i = s.lower().find("</style>"); cut = i + 8 if i >= 0 else 0
            s = ('<!doctype html>\n<html lang="zh-Hant">\n<head>\n<meta charset="utf-8">\n'
                 '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
                 + meta_block(slug, g) + "\n" + SKEL + "\n" + s[:cut] + "\n</head>\n<body>\n" + s[cut:] + "\n</body>\n</html>\n")
    path.write_text(s, encoding="utf-8")
    return s

def read_title_desc(s):
    t = re.search(r"<title>([^<]*)</title>", s)
    t = (t.group(1) if t else "新遊戲").split("｜")[0].strip()
    d = re.search(r'<meta\s+name="description"\s+content="([^"]*)"', s)
    return t, (d.group(1) if d else "")

def load_games():
    out = []
    for d in games_dirs():
        slug = d.name; gj = d / "game.json"; idx = d / "index.html"
        raw = idx.read_text(encoding="utf-8")
        g = json.loads(gj.read_text(encoding="utf-8")) if gj.exists() else {}
        t, ds = read_title_desc(raw)
        g.setdefault("title", t); g.setdefault("desc", ds or f"點開就能玩的{t}")
        g.setdefault("cat", "新作"); g.setdefault("date", now().isoformat())
        s = normalize(idx, slug, g)
        h = hashlib.sha1(s.encode()).hexdigest()[:12]
        g["_dirty"] = g.get("hash") != h or not (ROOT / "assets/thumbs" / f"{slug}.jpg").exists() or not (d / "og.png").exists()
        g["hash"] = h; g["slug"] = slug
        gj.write_text(json.dumps({k: v for k, v in g.items() if not k.startswith("_") and k != "slug"}, ensure_ascii=False, indent=1), encoding="utf-8")
        out.append(g)
    out.sort(key=lambda g: g["date"], reverse=True)
    return out

def make_images(games):
    todo = [g for g in games if g["_dirty"]]
    if not todo: return
    from playwright.sync_api import sync_playwright
    from PIL import Image
    (ROOT / "assets/thumbs").mkdir(parents=True, exist_ok=True)
    tmp = ROOT / "assets/.shot.png"
    with sync_playwright() as pw:
        b = pw.chromium.launch(args=["--autoplay-policy=no-user-gesture-required"])
        for g in todo:
            p = b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2)
            try:
                p.goto((ROOT / g["slug"] / "index.html").as_uri(), timeout=30000)
            except Exception as e:
                print("warn", g["slug"], e)
            p.wait_for_timeout(2600); p.screenshot(path=str(tmp)); p.close()
            im = Image.open(tmp).convert("RGB")
            im.crop((0, 0, 780, 1200)).resize((390, 600), Image.LANCZOS).save(ROOT / "assets/thumbs" / f"{g['slug']}.jpg", quality=80, optimize=True, progressive=True)
            shot = "data:image/png;base64," + base64.b64encode(tmp.read_bytes()).decode()
            fs = 84 if len(g["title"]) <= 6 else 62
            q = b.new_page(viewport={"width": 1200, "height": 630})
            q.set_content(OG_TPL.replace("{{SHOT}}", shot).replace("{{TITLE}}", html.escape(g["title"])).replace("{{DESC}}", html.escape(g["desc"])).replace("{{FS}}", str(fs)).replace("{{BRAND}}", BRAND))
            q.wait_for_timeout(150); q.screenshot(path=str(ROOT / g["slug"] / "og.png")); q.close()
            print("images", g["slug"])
        b.close()
    tmp.unlink(missing_ok=True)

OG_TPL = """<!doctype html><html><head><meta charset="utf-8"><style>
body{margin:0;width:1200px;height:630px;overflow:hidden;font-family:"Noto Sans CJK TC","Noto Sans TC",sans-serif;background:#fff;position:relative;color:#111}
.l{position:absolute;left:72px;top:0;bottom:0;width:560px;display:flex;flex-direction:column;justify-content:center;gap:18px}
.br{display:flex;align-items:center;gap:12px;font-weight:900;font-size:26px}.br i{width:46px;height:46px;border-radius:50%;background:#111;color:#fff;font-style:normal;display:grid;place-items:center;font-size:26px}
h1{margin:0;font-weight:900;font-size:{{FS}}px;line-height:1.15}p{margin:0;font-size:30px;color:#666;line-height:1.5}
.cta{align-self:flex-start;border:2px solid #111;font-weight:900;font-size:24px;padding:10px 22px;border-radius:999px}
.ph{position:absolute;right:110px;top:36px;width:300px;height:620px;border-radius:44px;background:#111;padding:12px;box-sizing:border-box;transform:rotate(5deg);box-shadow:0 30px 60px rgba(0,0,0,.25)}
.ph div{width:100%;height:100%;border-radius:34px;overflow:hidden}.ph img{width:100%;display:block}
</style></head><body><div class="l"><div class="br"><i>3</i>{{BRAND}}</div><h1>{{TITLE}}</h1><p>{{DESC}}</p><div class="cta">點開就能玩 →</div></div>
<div class="ph"><div><img src="{{SHOT}}"></div></div></body></html>"""

def write_home(games):
    data = [{k: g[k] for k in ("slug", "title", "desc", "cat", "date")} for g in games]
    t = (ROOT / "tools/home.tpl.html").read_text(encoding="utf-8")
    t = t.replace("{{BASE}}", BASE).replace("{{ICON}}", ICON).replace("{{BRAND}}", BRAND).replace("{{GAMES}}", json.dumps(data, ensure_ascii=False))
    (ROOT / "index.html").write_text(t, encoding="utf-8")
    today = now().date().isoformat()
    urls = [(f"{BASE}/", today)] + [(f"{BASE}/{g['slug']}/", g["date"][:10]) for g in games]
    (ROOT / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "".join(f"  <url><loc>{u}</loc><lastmod>{d}</lastmod></url>\n" for u, d in urls) + "</urlset>\n", encoding="utf-8")
    (ROOT / "robots.txt").write_text(f"User-agent: *\nAllow: /\nSitemap: {BASE}/sitemap.xml\n", encoding="utf-8")
    (ROOT / ".nojekyll").write_text("", encoding="utf-8")
    if CONF.get("domain"): (ROOT / "CNAME").write_text(CONF["domain"] + "\n", encoding="utf-8")

if __name__ == "__main__":
    games = load_games()
    make_images(games)
    write_home(games)
    print(f"{len(games)} games, base={BASE}")
