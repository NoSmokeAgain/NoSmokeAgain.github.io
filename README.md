# 三分鐘遊樂場

## 第一次上線
1. GitHub 新增 repo，名稱：`nosmokeagain.github.io`（公開）。
2. 用電腦把這個資料夾「全部內容」上傳，包含 `.github`、`.nojekyll`、`assets`、`tools` 和每個遊戲資料夾。
   - 網頁上傳不會帶隱藏資料夾 `.github`，建議用 GitHub Desktop，或在 repo 裡手動新增檔案 `.github/workflows/build.yml`，內容照抄。
3. Settings → Pages → Deploy from a branch → `main` / `(root)`。
4. Settings → Actions → General → Workflow permissions 選 `Read and write permissions`。

## 之後上架新遊戲（自動）
1. 在 repo 根目錄新增一個資料夾，名字就是網址，例如 `pokemon-quiz`。
2. 只要放一個 `index.html`（Claude 給的遊戲檔直接放）。
3. Commit。約 2–3 分鐘後 GitHub Actions 會自動：
   - 產生 `game.json`（標題取自網頁、製造日期＝上架時間、分類先放「新作」）
   - 補上分享預覽用的 meta
   - 拍縮圖、做分享圖 `og.png`
   - 首頁動態最上面多一則貼文、更新 sitemap
4. 想改說明文字或分類，編輯該資料夾的 `game.json` 的 `desc`、`cat` 再 commit 一次。

## 換成自己的網域
1. 買網域（Cloudflare Registrar 或 Namecheap）。
2. DNS：根網域 4 筆 A → 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153；`www` CNAME → `nosmokeagain.github.io`。
3. 改 `site.json`：`"base": "https://你的網域"`、`"domain": "你的網域"`，commit。Actions 會自動重做所有分享連結、sitemap，並產生 CNAME。
4. Settings → Pages → Custom domain 確認網域，勾 Enforce HTTPS。

## 舊連結
`redirects/` 裡每個資料夾的 index.html，上傳到對應的舊 repo，舊網址會自動跳到新網址。
