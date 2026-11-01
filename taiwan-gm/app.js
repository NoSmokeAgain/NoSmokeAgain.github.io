'use strict';
/* ---------- helpers ---------- */
const $ = id => document.getElementById(id);
const money = n => (n / 10).toFixed(1);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const isDesktop = () => matchMedia('(min-width:960px)').matches;

/* ---------- board layout ---------- */
const GROUPS = [
  { key: 'head', name: '元首', sub: '總統', slots: [0] },
  { key: 'core', name: '核心', sub: '副總統・兩院院長', slots: [1, 2, 3] },
  { key: 'cab', name: '內閣', sub: '十大部會', slots: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
  { key: 'city', name: '六都', sub: '直轄市長', slots: [14, 15, 16, 17, 18, 19] }
];
const SHORT = ['總統', '副總統', '行政院長', '立法院長', '國防', '外交', '經濟', '財政', '內政', '法務', '教育', '衛福', '交通', '勞動', '台北', '新北', '桃園', '台中', '台南', '高雄'];
const groupOf = i => GROUPS.find(g => g.slots.includes(i));
const FIT_NAME = { president: '領航型', legislator: '議政型', mayor: '城市型' };

/* ---------- party builder data ---------- */
const NAME_A = ['島嶼', '新世代', '公民', '務實', '未來', '繁榮', '和平', '民生', '共好', '前進', '青年', '海洋', '安居', '晨曦'];
const NAME_B = ['聯盟', '行動', '改革', '希望', '願景', '同行', '陣線'];
const EMBLEMS = ['⭐', '🕊️', '⚖️', '🌾', '🌱', '☀️', '🌊', '⛰️', '🔥', '⚡', '🏛️', '🤝', '🦅', '🌸', '🐯', '🐟'];
const COLORS = [
  { n: '紫', c: '#6d4ae0' }, { n: '紅', c: '#d9412f' }, { n: '橙', c: '#e8890c' }, { n: '藍', c: '#1f7fd1' },
  { n: '綠', c: '#2c9b58' }, { n: '粉', c: '#d94b86' }, { n: '青', c: '#109a9a' }, { n: '墨', c: '#30353f' }
];
const PLANK_GROUPS = {
  '經濟': ['基本工資調升至月薪 3 萬 5', '中小企業營所稅降至 15%', '鬆綁法規，擴大吸引外資', '半導體之外再造新護國產業'],
  '居住': ['社會住宅十年倍增', '囤房稅全面加重', '青年首購房貸利息補貼', '都更危老審查時程減半'],
  '少子化・社福': ['0 到 18 歲每月育兒津貼 5 千', '公托公幼名額倍增', '長照服務 24 小時到府', '年金改革，確保制度不破產'],
  '教育': ['國立大學學費減半', '技職教育與產業雙軌接軌', '偏鄉學校師資加給倍增', '中小學雙語教育全面普及'],
  '國防・外交': ['國防預算提高至 GDP 3%', '全民防衛動員常態化', '恢復兩岸制度化對話', '爭取加入 CPTPP'],
  '能源・環境': ['2050 淨零碳排如期達標', '重新評估核電延役', '綠能與儲能裝置量倍增', '空污 PM2.5 再降三成'],
  '交通': ['高鐵延伸屏東與宜蘭', '偏鄉公車班次全額補貼', '路口全面改善，終結行人地獄', '機車駕訓免費化'],
  '治理・司法': ['打詐專責機關，詐團重刑', '擴大國民法官適用範圍', '18 歲公民權入憲', '政府預算資料全面公開']
};
const FUN_PLANKS = ['全國週休三日', '颱風假由全民投票決定', '珍珠奶茶列為國飲', '每月發放鹹酥雞券', '下班已讀不回合法化',
  '生日當天放假一天', '氣溫破 35 度自動放假', '午睡時間正式入法', '週五下午三點全民下午茶', '毛小孩可進所有餐廳',
  '每條巷口保證一間早餐店', '手搖飲杯杯送珍珠', '夏天冷氣電費全免', '世界盃讓台灣隊踢進去', '年終保底三個月', '捷運週末 24 小時營運'];
PLANK_GROUPS['北爛'] = FUN_PLANKS;
const SERIOUS_GROUPS = Object.keys(PLANK_GROUPS).filter(k => k !== '北爛');
const PLANKS = Object.values(PLANK_GROUPS).flat();
const FUN_NAMES = ['週休三日', '珍奶', '躺平', '準時下班', '鹹酥雞', '早餐店', '颱風假', '滷肉飯', '全糖', '宵夜', '貓奴', '加班退散', '午睡', '雞排', '薪水翻倍', '厭世', '小確幸', '睡飽', '發大財', '已讀不回', '無糖去冰'];
const randomName = () => { let n; do n = Math.random() < .5 ? pick(FUN_NAMES) : pick(NAME_A) + pick(NAME_B); while (n === partyState.name); return n; };

/* ---------- Taiwan map (六都) ---------- */
// viewBox 0 0 100 120; simple equirectangular projection of the main island
const proj = (lon, lat) => [20.3 + (lon - 119.95) * 28.3, 6 + (25.35 - lat) * 30.86];
const COAST = [[121.537, 25.297], [121.64, 25.23], [121.69, 25.21], [121.74, 25.15], [121.92, 25.13], [122, 25.01], [121.84, 24.86], [121.87, 24.7], [121.87, 24.59], [121.8, 24.45], [121.75, 24.3], [121.68, 24.2], [121.62, 23.98], [121.52, 23.6], [121.51, 23.48], [121.45, 23.33], [121.38, 23.1], [121.3, 22.97], [121.15, 22.75], [121, 22.6], [120.9, 22.34], [120.88, 22.2], [120.85, 21.9], [120.72, 21.93], [120.65, 22.25], [120.58, 22.37], [120.45, 22.46], [120.28, 22.6], [120.18, 22.88], [120.15, 23], [120.08, 23.15], [120.12, 23.27], [120.15, 23.38], [120.15, 23.58], [120.2, 23.78], [120.3, 23.97], [120.4, 24.08], [120.5, 24.25], [120.58, 24.38], [120.67, 24.5], [120.85, 24.7], [120.9, 24.83], [121, 24.92], [121.1, 25.05], [121.2, 25.1], [121.32, 25.13], [121.4, 25.18], [121.5, 25.28]];
const TW_PATH = 'M' + COAST.map(c => proj(...c).map(v => v.toFixed(1)).join(' ')).join('L') + 'Z';
// slot: [dot lon, dot lat, tile x, tile y] (tile coords in viewBox units)
const CITY = { 14: [121.56, 25.04, 84, 16], 15: [121.47, 24.95, 84, 52], 16: [121.30, 24.99, 25, 16], 17: [120.68, 24.14, 16, 54], 18: [120.21, 22.99, 15, 90], 19: [120.31, 22.63, 72, 102] };
function mapSVG() {
  const lines = Object.values(CITY).map(([lo, la, x, y]) => { const [dx, dy] = proj(lo, la); return `<line x1="${dx}" y1="${dy}" x2="${x}" y2="${y}"/>`; }).join('');
  const dots = Object.values(CITY).map(([lo, la]) => { const [dx, dy] = proj(lo, la); return `<circle cx="${dx}" cy="${dy}" r="1.6"/>`; }).join('');
  return `<svg class="tw-svg" viewBox="0 0 100 120" aria-hidden="true"><path d="${TW_PATH}"/><g class="tw-lines">${lines}</g><g class="tw-dots">${dots}</g></svg>`;
}
function formation(T) {
  const sec = (g, body) => `<div class="f-sec fs-${g.key}"><div class="f-tag"><b>${g.name}</b><small>${g.sub}</small></div>${body}</div>`;
  return `<div class="formation">
    ${sec(GROUPS[0], `<div class="fx-head">${T(0, 'xl')}</div>`)}
    ${sec(GROUPS[1], `<div class="fx-core">${[1, 2, 3].map(i => T(i, 'lg')).join('')}</div>`)}
    ${sec(GROUPS[2], `<div class="fx-cab">${GROUPS[2].slots.map(i => T(i, 'sm')).join('')}</div>`)}
    ${sec(GROUPS[3], `<div class="tw-map">${mapSVG()}${GROUPS[3].slots.map(i => `<div class="tw-slot" style="left:${CITY[i][2]}%;top:${CITY[i][3] / 1.2}%">${T(i, 'md')}</div>`).join('')}</div>`)}
  </div>`;
}
function card(i, size) {
  const p = person(lineup[i]);
  if (!p) return `<div class="pc ${size} none" data-i="${i}"><span class="pc-role">${SHORT[i]}</span><b>—</b></div>`;
  return `<div class="pc ${size}" data-i="${i}" style="--pc:${p.color}">${portrait(p)}<span class="pc-role">${SHORT[i]}</span><b>${p.name}</b></div>`;
}

/* ---------- state ---------- */
const STORAGE = 'taiwan-gm-v4';
let lineup = Array(20).fill(null), target = 0, sort = 'recommended', query = '', party = 'all', only2026 = false;
let partyState = { name: '', emblem: 0, color: 0, planks: [] };
let customEmblem = null; // data URL, kept on this device only
let friendView = false, lastAdded = -1, toastTimer, shareURL;

const person = id => Number.isInteger(id) ? PEOPLE[id] : null;
const spent = (a = lineup) => a.reduce((s, id) => s + (person(id)?.price || 0), 0);
const filled = (a = lineup) => a.filter(x => x !== null).length;
const totalPower = (a = lineup) => Math.round(a.reduce((s, id, i) => s + rolePower(person(id), ROLES[i]), 0) * 10) / 10;
const BY_PRICE = [...PEOPLE].sort((a, b) => a.price - b.price);

/* cheapest possible cost to fill every remaining empty slot */
function minFill(a) {
  let need = a.filter(x => x === null).length, sum = 0;
  for (const p of BY_PRICE) { if (!need) break; if (!a.includes(p.id)) { sum += p.price; need--; } }
  return sum;
}
function prospective(id, slot = target) {
  const a = [...lineup], old = a.indexOf(id);
  if (old === slot) return a;
  if (old >= 0) [a[slot], a[old]] = [a[old], a[slot]]; else a[slot] = id;
  return a;
}
/* returns '' if ok, otherwise a short reason */
function blockReason(id, slot = target) {
  const a = prospective(id, slot), need = spent(a) + minFill(a) - BUDGET;
  return need > 0 ? `差 ${money(need)} 點` : '';
}
/* full sentence for the toast */
function blockDetail(id, slot = target) {
  const a = prospective(id, slot), p = PEOPLE[id], left = BUDGET - spent(a), empty = a.filter(x => x === null).length;
  if (left < 0) return `${p.name} 要 ${money(p.price)} 點，預算不夠`;
  return `選${p.name}後剩 ${money(left)} 點，後面 ${empty} 個空位最便宜也要 ${money(minFill(a))} 點`;
}

/* rating & grade (calibrated on reachable range ≈ 1250–1432) */
function rating(p = totalPower()) { return Math.max(0, Math.min(100, Math.round((p - 1250) / (1432 - 1250) * 100))); }
function grade(r) { return r >= 95 ? 'S' : r >= 80 ? 'A' : r >= 60 ? 'B' : r >= 40 ? 'C' : 'D'; }

function traits(a = lineup) {
  const ps = a.map(person).filter(Boolean), t = [];
  const parties = {}; ps.forEach(p => parties[p.party] = (parties[p.party] || 0) + 1);
  const types = { president: 0, mayor: 0, legislator: 0, new: 0, guest: 0 }; ps.forEach(p => types[p.type]++);
  const fits = a.filter((id, i) => fitBonus(person(id), ROLES[i]) >= 6).length;
  const left = BUDGET - spent(a);
  if (Object.keys(parties).length >= 5) t.push('跨黨大聯盟');
  if (Math.max(0, ...Object.values(parties)) >= 14) t.push('一條心');
  if (fits >= 16) t.push('適才適所');
  if (types.president >= 5) t.push('總統俱樂部');
  if (types.legislator >= 9) t.push('國會戰將');
  if (types.mayor >= 8) t.push('地方諸侯');
  if (ps.filter(p => p.race).length >= 6) t.push('2026 新血');
  if (left <= 5) t.push('預算用到滿');
  else if (left >= 40) t.push('精打細算');
  return t.length ? t.slice(0, 3) : ['均衡陣容'];
}

/* ---------- persistence ---------- */
function save() {
  if (friendView) return;
  try { localStorage.setItem(STORAGE, JSON.stringify({ lineup, partyState })); } catch { }
}
function validLineup(a) {
  return Array.isArray(a) && a.length === 20 && a.every(x => x === null || (Number.isInteger(x) && x >= 0 && x < PEOPLE.length))
    && new Set(a.filter(x => x !== null)).size === filled(a) && spent(a) <= BUDGET;
}
function cleanParty(p) {
  const out = { name: '', emblem: 0, color: 0, planks: [] };
  if (!p) return out;
  out.name = String(p.name || '').replace(/黨$/, '').slice(0, 8);
  out.emblem = Math.min(EMBLEMS.length - 1, Math.max(-1, parseInt(p.emblem) || 0));
  out.color = Math.min(COLORS.length - 1, Math.max(0, parseInt(p.color) || 0));
  out.planks = (Array.isArray(p.planks) ? p.planks : []).map(s => String(s).trim().slice(0, 18)).filter(Boolean).slice(0, 3);
  return out;
}
function restore() {
  try {
    const h = new URLSearchParams(location.hash.slice(1));
    if (h.has('t')) {
      const a = h.get('t').split('.').map(x => x === 'x' ? null : Number(x));
      if (validLineup(a)) {
        lineup = a;
        partyState = cleanParty({ name: h.get('n'), emblem: h.get('e'), color: h.get('c'), planks: (h.get('p') || '').split('|') });
        friendView = true;
        return 'friend';
      }
    }
    // older v2 link format
    if (h.has('team')) {
      const a = h.get('team').split('.').map(x => x === 'x' ? null : Number(x));
      if (validLineup(a)) { lineup = a; return 'draft'; }
    }
    const raw = JSON.parse(localStorage.getItem(STORAGE) || 'null');
    if (raw) {
      let a = raw.lineup;
      if (Array.isArray(a) && a.length === 18) a = [null, null, ...a];
      if (validLineup(a)) lineup = a;
      partyState = cleanParty(raw.partyState);
    }
  } catch { }
  target = Math.max(0, lineup.indexOf(null));
  return 'intro';
}

/* ---------- screens ---------- */
function show(name) {
  ['Intro', 'Draft', 'Party'].forEach(s => $('screen' + s).hidden = s !== name);
  document.body.dataset.screen = name.toLowerCase();
  window.scrollTo(0, 0);
  if (name === 'Intro') renderIntro();
  if (name === 'Draft') render();
  if (name === 'Party') renderParty();
}

/* ---------- rendering ---------- */
const portraitStyle = p => `--atlas:url('assets/atlas-${p.atlas}.webp');--x:${(p.cell % 4) * 100 / 3}%;--y:${Math.floor(p.cell / 4) * 100 / 3}%`;
const portrait = (p, cls = '') => p.atlas === null
  ? `<div class="portrait txt ${cls}" role="img" aria-label="${p.name}"><span>${p.name}</span></div>`
  : `<div class="portrait ${cls}" role="img" aria-label="${p.name}" style="${portraitStyle(p)}"></div>`;

function toast(msg) {
  $('toast').textContent = msg; $('toast').classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => $('toast').classList.remove('show'), 2200);
}

function renderIntro() {
  const ids = [...PEOPLE.keys()];
  const row = list => `<div class="marquee-track">${[...list, ...list].map(i => portrait(PEOPLE[i])).join('')}</div>`;
  $('introCards').innerHTML = `<div class="marquee">${row(ids.slice(0, 24))}</div><div class="marquee rev">${row(ids.slice(24))}</div>`;
  const n = filled();
  $('start').innerHTML = '開始選秀 <span>→</span>';
  $('resume').hidden = !n || friendView;
  $('resume').textContent = `繼續上次的陣容（${n}/20）`;
}

function renderHud() {
  const used = spent(), n = filled();
  $('hudBudget').textContent = money(BUDGET - used);
  $('hudPower').textContent = totalPower().toFixed(0);
  $('hudCount').innerHTML = `${n}<em>/20</em>`;
  $('budgetFill').style.width = Math.min(100, used / BUDGET * 100) + '%';
  $('toParty').disabled = n < 20;
  $('dockHint').innerHTML = n === 20
    ? `<b>戰力 ${totalPower().toFixed(0)}・評級 ${grade(rating())}</b><br>陣容到齊，可以建黨了`
    : `還差 <b>${20 - n}</b> 人・每席平均可花 <b>${money((BUDGET - used) / (20 - n))}</b> 點`;
}

function renderBoard() { $('board').innerHTML = formation(tile); }
function tile(i, size = '') {
  const p = person(lineup[i]), bonus = p ? fitBonus(p, ROLES[i]) : 0;
  return `<button class="tile ${size} ${p ? 'has' : 'empty'} ${i === target ? 'active' : ''} ${i === lastAdded ? 'pop' : ''}" data-slot="${i}" style="${p ? '--pc:' + p.color : ''}" aria-label="${ROLES[i].name}${p ? '：' + p.name : '，空缺'}">
    ${p ? portrait(p) : '<span class="plus">＋</span>'}
    <span class="tile-role">${SHORT[i]}</span>
    ${p ? `<span class="tile-name">${p.name}</span>` : ''}
    ${bonus >= 4 ? `<span class="tile-fit">+${bonus}</span>` : ''}
  </button>`;
}

function fitTag(p, role) {
  const b = fitBonus(p, role);
  if (b === 6) return '<span class="fit good">最搭 +6</span>';
  if (b === 4) return '<span class="fit new">新秀 +4</span>';
  if (b === 3) return '<span class="fit ok">+3</span>';
  return '';
}

function renderPicker() {
  const role = ROLES[target], g = groupOf(target), cur = person(lineup[target]);
  $('pickerGroup').textContent = `${g.name}・${g.sub}`;
  $('pickerRole').textContent = role.name;
  const n = filled(), left = BUDGET - spent();
  $('pickerHint').innerHTML = cur
    ? `目前是 <b>${cur.name}</b>，點其他人可以換掉。`
    : `<b>${FIT_NAME[role.fit]}</b>最搭（＋6）・剩 ${money(left)} 點，平均每席 ${money(left / Math.max(1, 20 - n))} 點`;

  let list = PEOPLE.filter(p => (!query || p.name.includes(query)) && (party === 'all' || p.party === party) && (!only2026 || p.race));
  const info = new Map(list.map(p => [p.id, blockReason(p.id)]));
  list.sort((a, b) => b.score - a.score || a.price - b.price); // strictly by power, high to low

  if (!list.length) { $('list').innerHTML = '<div class="empty">找不到人。換個名字或清除篩選試試。</div>'; return; }
  $('list').innerHTML = list.map(p => {
    const at = lineup.indexOf(p.id), reason = info.get(p.id), here = at === target;
    const state = here ? '<span class="state on">在場上</span>' : at >= 0 ? `<span class="state swap">從${SHORT[at]}調來</span>` : '';
    const record = p.type === 'guest' ? p.election : p.type === 'new' ? `${p.election}・暫定卡` : `${p.year} ${p.election.replace('候選人', '')}${p.won ? '' : '（落選）'}`;
    return `<div class="row ${here ? 'here' : ''} ${reason ? 'locked' : ''}" style="--pc:${p.color}">
      <button class="row-main" data-pick="${p.id}" ${here ? 'disabled' : ''} aria-label="${here ? p.name + '已在此位置' : reason ? p.name + '：' + reason : '選 ' + p.name + ' 當' + role.name}">
        ${portrait(p)}
        <span class="row-text">
          <span class="row-name">${p.name} ${fitTag(p, role)} ${state}</span>
          <span class="row-sub"><i class="dot"></i>${p.party}・${record}</span>
        </span>
        <span class="row-num pow"><b>${p.score.toFixed(0)}</b><small>戰力</small></span>
        <span class="row-num cost"><b>${money(p.price)}</b><small>${reason || '點'}</small></span>
      </button>
      <button class="row-info" data-detail="${p.id}" aria-label="${p.name} 詳細資料">i</button>
    </div>`;
  }).join('');
}

const PARTY_ORDER = ['民進黨', '國民黨', '民眾黨', '時代力量', '社民黨', '台灣基進', '無黨籍', '外援'];
function renderPartyChips() {
  const count = k => PEOPLE.filter(p => p.party === k).length;
  $('partyChips').innerHTML = [['all', '全部', PEOPLE.length], ...PARTY_ORDER.filter(count).map(k => [k, k, count(k)])]
    .map(([k, label, n]) => `<button role="tab" aria-selected="${party === k}" class="${party === k ? 'on' : ''}" data-party="${k}" style="${k !== 'all' ? '--pc:' + (PARTY_COLORS[k] || '#708577') : ''}">${k !== 'all' ? '<i class="dot"></i>' : ''}${label}<small>（${n}）</small></button>`).join('');
}
function render() { renderHud(); renderBoard(); renderPicker(); save(); lastAdded = -1; }

/* ---------- picker sheet (mobile) ---------- */
function openSheet() { if (isDesktop()) return; $('picker').classList.add('open'); $('scrim').hidden = false; document.body.classList.add('sheet-open'); }
function closeSheet() { $('picker').classList.remove('open'); $('scrim').hidden = true; document.body.classList.remove('sheet-open'); }

function selectSlot(i) { Sound.play('tap'); target = i; render(); $('list').scrollTop = 0; openSheet(); }

function assign(id, slot = target) {
  const reason = blockReason(id, slot);
  if (reason) { Sound.play('error'); toast(blockDetail(id, slot)); return false; }
  const old = lineup.indexOf(id);
  if (old === slot) return false;
  lineup = prospective(id, slot);
  lastAdded = slot;
  const name = PEOPLE[id].name;
  let next = lineup.findIndex((v, i) => v === null && i > slot);
  if (next < 0) next = lineup.indexOf(null);
  target = next < 0 ? slot : next;
  render();
  $('list').scrollTop = 0;
  if (filled() === 20) {
    closeSheet();
    Sound.play('full'); Sound.say(`${ROLES[slot].name}，${name}！全員到齊`);
    toast(`全員到齊！戰力 ${totalPower().toFixed(0)}・評級 ${grade(rating())}`);
    $('toParty').classList.add('pulse');
  } else {
    Sound.play(old >= 0 ? 'swap' : 'pick'); Sound.say(`${ROLES[slot].name}，${name}！`);
    toast(old >= 0 ? `${name} 調任${ROLES[slot].name}` : `${name} 加入！`);
  }
  return true;
}

function autoFill() {
  const a = [...lineup], empty = a.map((v, i) => v === null ? i : -1).filter(i => i >= 0);
  if (!empty.length) { toast('20 個位置都滿了'); return; }
  if (spent(a) + minFill(a) > BUDGET) { toast('預算不夠補滿，先換掉幾位高身價的人'); return; }
  // random but sensible: only picks that keep the lineup completable, leaning toward good fits
  for (const i of empty.sort(() => Math.random() - .5)) {
    const opts = [];
    for (const p of PEOPLE) {
      if (a.includes(p.id)) continue;
      const b = [...a]; b[i] = p.id;
      if (spent(b) + minFill(b) > BUDGET) continue;
      const w = fitBonus(p, ROLES[i]) >= 4 ? 4 : 1;
      for (let k = 0; k < w; k++) opts.push(p.id);
    }
    a[i] = pick(opts);
  }
  lineup = a; target = 0; closeSheet(); render(); Sound.play('full');
  toast(`補滿了！評級 ${grade(rating())}，點任一格換人衝更高分`);
  $('toParty').classList.add('pulse');
}

function askReset() {
  $('infoContent').innerHTML = modalHead('重新選秀？') + `<div class="modal-body"><p>會清空 20 個位置，預算回到 220 點。</p>
    <div class="modal-actions"><button class="chip-btn" data-close>先不要</button><button class="cta small" id="confirmReset">清空重來</button></div></div>`;
  $('info').showModal();
  $('confirmReset').onclick = () => { lineup = Array(20).fill(null); target = 0; $('info').close(); closeSheet(); render(); toast('新一輪選秀開始'); };
}

/* ---------- detail & rules ---------- */
function modalHead(t) { return `<div class="modal-head"><h2>${t}</h2><button class="x" data-close aria-label="關閉">×</button></div>`; }
function partyBadge(p) {
  if (p.type === 'guest') return `<span class="party-pill" style="--pc:${p.color}"><span class="emblem">援</span>外援卡<small>非選舉人物</small></span>`;
  const a = PARTY_ASSETS[p.party];
  return `<span class="party-pill" style="--pc:${p.color}"><span class="emblem">${a?.icon ? `<img src="${a.icon}" alt="" loading="lazy" referrerpolicy="no-referrer">` : '無'}</span>${p.party}<small>${p.year} 當次</small></span>`;
}
function breakdown(p) {
  if (p.type === 'guest') return `<p>外援卡沒有選票，統一戰力 ${GUEST_SCORE}，身價套同一條公式：4＋16×(0.7)² ≈ ${money(p.price)} 點。放哪個位置都沒有加成。</p>`;
  if (p.type === 'new') return `<p>沒有個人選舉票數，統一暫定戰力 55、身價 8.5 點。任何位置都有新秀 +4。</p>`;
  const e = p.voteIndex;
  return `<div class="calc">
    <div><span>票數 ÷ 基準</span><b>${p.votes.toLocaleString('zh-TW')} ÷ ${p.reference.toLocaleString('zh-TW')}</b></div>
    <div><span>票數指數 × 60%</span><b>${(e * .6).toFixed(1)}</b></div>
    <div><span>選舉層級 × 30%</span><b>${p.tier * .3}</b></div>
    <div><span>${p.won ? '當選' : '落選'}</span><b>+${p.won ? 10 : 0}</b></div>
    <div class="sum"><span>基礎戰力</span><b>${p.score.toFixed(1)}</b></div>
    <div class="sum"><span>身價 4＋16×(戰力÷100)²</span><b>${money(p.price)} 點</b></div>
  </div>`;
}
/* ---------- pre-game pricing explainer ---------- */
const RULES_SEEN = 'taiwan-gm-rules-seen';
const fmtVotes = v => v >= 10000 ? (v / 10000).toFixed(v >= 1e6 ? 0 : 1) + ' 萬' : v.toLocaleString('zh-TW');
function exampleCard(p) {
  if (p.type === 'new' || p.type === 'guest') return '';
  const e = p.voteIndex;
  return `<div class="ex" style="--pc:${p.color}">
    <div class="ex-head">${portrait(p)}<div><b>${p.name}</b><small>${p.year} ${p.election}・${p.won ? '當選' : '落選'}</small></div><span class="ex-price">${money(p.price)}<small>點</small></span></div>
    <div class="ex-row"><span>得票表現</span><span>√(${fmtVotes(p.votes)} ÷ ${fmtVotes(p.reference)}) → ${e.toFixed(0)} 分 × 60%</span><b>${(e * .6).toFixed(1)}</b></div>
    <div class="ex-row"><span>選舉層級</span><span>${{ president: '總統', mayor: '首長', legislator: '立委' }[p.type]} ${p.tier} 分 × 30%</span><b>${(p.tier * .3).toFixed(1)}</b></div>
    <div class="ex-row"><span>當選加分</span><span>${p.won ? '當選' : '落選'}</span><b>+${p.won ? 10 : 0}</b></div>
    <div class="ex-row total"><span>戰力</span><span></span><b>${p.score.toFixed(1)}</b></div>
  </div>`;
}
function priceTable(q = '') {
  const rows = [...PEOPLE].filter(p => !q || p.name.includes(q)).sort((a, b) => b.price - a.price);
  return rows.map(p => `<tr><td><span class="dot" style="--pc:${p.color}"></span>${p.name}</td><td>${p.type === 'guest' ? p.election + '・外援' : p.type === 'new' ? '2026 參選・無個人票' : `${p.year} ${p.election}${p.won ? '' : '・落選'}`}<br><small>${p.votes ? fmtVotes(p.votes) + ' 票' + (p.type === 'president' ? '（聯名）' : '') : '暫定值'}</small></td><td>${p.score.toFixed(1)}</td><td><b>${money(p.price)}</b></td></tr>`).join('') || '<tr><td colspan="4">找不到</td></tr>';
}
function openRules(beforeStart = false) {
  const ex = [7, 11, 12, 28].map(i => PEOPLE[i]).filter(Boolean);
  $('rulesContent').innerHTML = modalHead('選秀前 30 秒') + `<div class="modal-body rules2">
    <h3 class="rules-title">身價只看<span class="hot">選票</span>，<br>不看黨派、不看人氣。</h3>
    <div class="rule-steps">
      <div><i>1</i><p>每人採<b>一次代表性選舉</b>的得票，卡面有寫年份。</p></div>
      <div><i>2</i><p><b>戰力</b> ＝ 得票表現 60% ＋ 選舉層級 30% ＋ 當選 10 分</p></div>
      <div><i>3</i><p><b>身價</b>跟著戰力走，越強越貴：戰力 99 約 19.6 點，戰力 60 約 9.8 點。</p></div>
    </div>
    <div class="bases"><div><small>總統</small><b>850 萬票</b><span>層級 100</span></div><div><small>縣市長</small><b>120 萬票</b><span>層級 80</span></div><div><small>立委</small><b>16 萬票</b><span>層級 60</span></div></div>
    <p class="fine">得票表現 ＝ √(得票 ÷ 基準) × 100，最高 100。開根號是為了讓大小選舉能放在一起比。</p>

    <h4>誰能入選？</h4>
    <div class="rule-steps">
      <div><i>A</i><p><b>${PEOPLE.filter(p => p.type !== 'guest').length} 位精選政治人物</b>，從陳水扁時代到 2026 六都選戰，<b>不是</b>歷屆參選人完整名冊。</p></div>
      <div><i>B</i><p>歷史卡要有一次個人直選紀錄，且達門檻：總統（聯名）<b>50 萬票</b>、縣市長 <b>5 萬票</b>、立委 <b>3 萬票</b>。當選或落選都可以。</p></div>
      <div><i>C</i><p>2026 六都收錄 <b>${PEOPLE.filter(p => p.race).length} 位</b>主要登記參選人。沒有個人直選票的（${PEOPLE.filter(p => p.type === 'new').map(p => p.name).join('、')}）列為新秀卡，固定 8.5 點。</p></div>
      <div><i>D</i><p>不分區立委的政黨票不算個人票。副總統聯名票也不算個人票，所以呂秀蓮採 1997 年桃園縣長的得票。</p></div>
      <div><i>E</i><p><b>外援卡 ${PEOPLE.filter(p => p.type === 'guest').length} 位</b>：${PEOPLE.filter(p => p.type === 'guest').map(p => p.name).join('、')}。不是選舉人物，沒有票可算，一律戰力 ${GUEST_SCORE}、身價 ${money(PEOPLE.find(p => p.type === 'guest').price)} 點，放哪都沒有加成。純屬娛樂，不代表本人意願或政治立場。</p></div>
    </div>
    <p class="fine">卡面黨籍是「那次選舉」時的黨籍，之後換黨不會更新。漏了誰歡迎回報，之後補卡。</p>

    <h4>實際算給你看</h4>
    <div class="examples">${ex.map(exampleCard).join('')}</div>

    <h4>常見疑問</h4>
    <div class="faq">
      <details><summary>為什麼總統候選人有的很便宜？</summary><p>總統票是跟 850 萬比。三腳督分票、或落選少了 10 分，戰力就會掉。例如 369 萬票只有基準的 43%，開根號後約 66 分。</p></details>
      <details><summary>為什麼立委可以比總統候選人貴？</summary><p>立委只跟 16 萬票比。一席拿到 15 萬票，等於幾乎滿分的得票表現，再加當選 10 分。</p></details>
      <details><summary>黨派、聲量、民調有算進去嗎？</summary><p>沒有。公式裡只有票數、選舉種類、有沒有當選。卡面黨籍只是當次選舉的身分。</p></details>
      <details><summary>沈伯洋、李四川怎麼算？</summary><p>還沒有個人直選票數，統一給暫定戰力 55、身價 8.5 點，任何位置都有新秀 +4。</p></details>
      <details><summary>那放對位置的加成呢？</summary><p>另外算，不影響身價：總統卡當總統／副總統／閣揆 +6，市長卡當市長 +6，立委卡當部長或立法院長 +6。</p></details>
    </div>
    <p class="fine">這是遊戲平衡設定，不是能力或政績評價。資料來源可在每張卡的「i」查看。</p>

    <h4>${PEOPLE.length} 人身價表</h4>
    <input class="table-search" id="tableSearch" type="search" placeholder="搜尋名字">
    <div class="table-wrap"><table class="price-table"><thead><tr><th>人物</th><th>採用紀錄</th><th>戰力</th><th>身價</th></tr></thead><tbody id="priceRows">${priceTable()}</tbody></table></div>
  </div>
  <div class="rules-foot">${beforeStart ? '<button class="cta small wide" id="rulesGo">懂了，開始選秀 →</button>' : '<button class="chip-btn" data-close>關閉</button>'}</div>`;
  $('rules').showModal();
  $('tableSearch').oninput = e => { $('priceRows').innerHTML = priceTable(e.target.value.trim()); };
  if (beforeStart) $('rulesGo').onclick = () => { try { localStorage.setItem(RULES_SEEN, '1'); } catch { } $('rules').close(); startDraft(); };
}
function startDraft() { show('Draft'); if (filled() < 20) openSheet(); }

function openDetail(id) {
  const p = PEOPLE[id], role = ROLES[target], reason = blockReason(id), at = lineup.indexOf(id);
  $('detailContent').innerHTML = modalHead('球員卡') + `<div class="modal-body">
    <div class="card-top" style="--pc:${p.color}">${portrait(p, 'big')}<div>
      <h3>${p.name}</h3>${partyBadge(p)}
      <p>${p.type === 'guest' ? p.election + '・外援卡（非選舉人物）' : p.type === 'new' ? p.election + '（尚無結果）' : `${p.year} ${p.election}・${p.votes.toLocaleString('zh-TW')} 票・${p.won ? '當選' : '落選'}`}${p.type === 'president' ? '<br><small>總統票為正副聯名票</small>' : ''}</p>
    </div></div>
    <div class="stat3">
      <div><b>${p.score.toFixed(1)}</b><small>基礎戰力</small></div>
      <div><b>+${fitBonus(p, role)}</b><small>當${SHORT[target]}加成</small></div>
      <div><b>${money(p.price)}</b><small>身價（點）</small></div>
    </div>
    <details open><summary>身價怎麼算的？</summary>${breakdown(p)}
      ${p.type === 'guest' ? '<p class="fine">外援卡純屬娛樂，不代表本人意願或政治立場。</p>' : `<p class="fine">${p.trait}。黨籍為 ${p.year} 年該次選舉身分，可能與現在不同。${p.id === 1 ? '呂秀蓮採 1997 桃園縣長個人票，避免把副總統聯名票算成個人票。' : ''}<a href="${p.source}" target="_blank" rel="noopener noreferrer">票數來源 ↗</a></p>`}
    </details>
    <div class="modal-actions">
      <button class="cta small wide" id="detailPick" ${reason || at === target ? 'disabled' : ''}>${at === target ? `已經是${role.name}` : reason ? reason : `選他當${role.name}`}</button>
    </div></div>`;
  $('detail').showModal();
  $('detailPick').onclick = () => { if (assign(id)) $('detail').close(); };
}
function openInfo() {
  $('infoContent').innerHTML = modalHead('玩法 / 計分') + `<div class="modal-body rules">
    <button class="price-teaser inline" id="infoToRules"><b>身價怎麼算？</b><span>看公式、實例與完整身價表 →</span></button>
    <ol class="how">
      <li><b>點空位</b>，從名單挑一個人。挑完自動跳下一格。</li>
      <li><b>220 點</b>要塞滿 20 人。綠色「最搭」代表放對位置有加成。</li>
      <li><b>全員到齊</b>就能建黨：取黨名、選黨徽、寫三條黨綱，產生分享圖。</li>
    </ol>
    <h4>位置加成</h4>
    <p>總統卡（領航型）當總統、副總統、行政院長 +6；市長卡（城市型）當市長 +6、當總統／副總統／行政院長 +3；立委卡（議政型）當立法院長、部長 +6；新秀卡任何位置 +4。</p>
    <details><summary>戰力與身價公式</summary>
      <div class="formula">票數指數 E = 100 × min(1, √(票數 ÷ R))
基礎戰力 S = 0.6E + 0.3T + 當選 10
身價 = 4 + 16 × (S ÷ 100)²

總統：R = 850 萬，T = 100（聯名票）
首長：R = 120 萬，T = 80
立委：R = 16 萬，T = 60
新秀：S = 55，身價 8.5（無個人票）</div>
      <p>R、T 是遊戲平衡參數，不是官方數字。政黨不影響分數。每人採一筆代表性選舉紀錄，不是生涯巔峰。</p>
    </details>
    <details><summary>資料來源與授權</summary>
      <div class="sources">
        <a href="${SOURCES.cec}" target="_blank" rel="noopener noreferrer">中選會選舉資料庫 ↗</a>
        <a href="${SOURCES.p2020}" target="_blank" rel="noopener noreferrer">2020 總統結果 ↗</a>
        <a href="${SOURCES.p2024}" target="_blank" rel="noopener noreferrer">2024 總統結果 ↗</a>
        <a href="${SOURCES.l2024}" target="_blank" rel="noopener noreferrer">2024 選舉統計 ↗</a>
        <a href="${SOURCES.race2026}" target="_blank" rel="noopener noreferrer">2026 六都登記名單 ↗</a>
      </div>
      <p class="fine">黨徽：${Object.entries(PARTY_ASSETS).filter(([, v]) => v.source).map(([k, v]) => `<a href="${v.source}" target="_blank" rel="noopener noreferrer">${k}</a>（${v.credit}）`).join('、')}。<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>。</p>
      <p class="fine">資料基準日 2026-10-31。卡面黨籍為該次選舉身分。頭像為 AI 漫畫創作；遊戲數值不代表真實施政、道德或能力評價。市長任命為架空玩法。</p>
    </details>
  </div>`;
  $('info').showModal();
  if ($('infoToRules')) $('infoToRules').onclick = () => { $('info').close(); openRules(false); };
}

/* ---------- party builder ---------- */
function emblemHTML() {
  return partyState.emblem === -1 && customEmblem ? `<img src="${customEmblem}" alt="黨徽">` : EMBLEMS[Math.max(0, partyState.emblem)];
}
const loadImg = src => new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = src; });
async function uploadEmblem(file) {
  if (!file || !file.type.startsWith('image/')) return toast('請選一張圖片');
  try {
    const url = URL.createObjectURL(file), im = await loadImg(url);
    const S = 256, cv = document.createElement('canvas'); cv.width = cv.height = S;
    const c = cv.getContext('2d'), side = Math.min(im.naturalWidth, im.naturalHeight);
    c.fillStyle = '#fff8ea'; c.fillRect(0, 0, S, S);
    c.drawImage(im, (im.naturalWidth - side) / 2, (im.naturalHeight - side) / 2, side, side, 0, 0, S, S); // center square crop
    URL.revokeObjectURL(url);
    customEmblem = cv.toDataURL('image/jpeg', .85);
    try { localStorage.setItem(STORAGE + '-emblem', customEmblem); } catch { }
    partyState.emblem = -1; renderParty(); Sound.play('stamp'); toast('黨徽已換上');
  } catch { toast('這張圖讀不到，換一張試試'); }
}
function partyFullName() { return (partyState.name || '無名') + '黨'; }
function renderParty() {
  $('friendBanner').hidden = !friendView;
  document.body.classList.toggle('friend', friendView);
  $('partyName').value = partyState.name;
  $('emblems').innerHTML = `<label class="upload ${partyState.emblem === -1 ? 'on' : ''}" title="上傳自己的黨徽">${customEmblem ? `<img src="${customEmblem}" alt="自訂黨徽">` : '<span>＋</span><small>上傳</small>'}<input type="file" id="emblemFile" accept="image/*" hidden></label>`
    + EMBLEMS.map((e, i) => `<button class="${i === partyState.emblem ? 'on' : ''}" data-emblem="${i}" aria-label="黨徽 ${e}">${e}</button>`).join('')
    + (customEmblem ? '<button class="clear-up" data-clear-emblem aria-label="移除上傳的黨徽">移除上傳</button>' : '');
  $('emblemFile').onchange = e => uploadEmblem(e.target.files[0]);
  $('swatches').innerHTML = COLORS.map((c, i) => `<button class="${i === partyState.color ? 'on' : ''}" data-color="${i}" style="--sw:${c.c}" aria-label="${c.n}"></button>`).join('');
  const custom = partyState.planks.filter(p => !PLANKS.includes(p));
  const btn = p => { const n = partyState.planks.indexOf(p); return `<button class="${n >= 0 ? 'on' : ''}" data-plank="${esc(p)}">${n >= 0 ? `<i>${n + 1}</i>` : ''}${esc(p)}</button>`; };
  const groups = { ...(custom.length ? { '自訂': custom } : {}), '北爛': FUN_PLANKS, ...Object.fromEntries(SERIOUS_GROUPS.map(k => [k, PLANK_GROUPS[k]])) };
  $('planks').innerHTML = Object.entries(groups).map(([g, list]) => `<div class="plank-group ${g === '北爛' ? 'fun' : ''}"><small>${g}</small><div>${list.map(btn).join('')}</div></div>`).join('');
  $('plankCount').textContent = `已選 ${partyState.planks.length} / 3`;
  renderPoster();
  save();
}
function renderPoster() {
  const col = COLORS[partyState.color].c, r = rating(), pl = partyState.planks;
  $('poster').style.setProperty('--pc', col);
  $('poster').innerHTML = `
    <div class="poster-top">
      <span class="poster-emblem">${emblemHTML()}</span>
      <div class="poster-name"><small>台灣總教頭・2026 建黨</small><h3>${esc(partyFullName())}</h3></div>
      <div class="poster-grade"><b>${grade(r)}</b><small>評級</small></div>
    </div>
    <div class="poster-planks">
      <small>政策主張</small>
      ${pl.length ? `<ol>${pl.map(p => `<li>${esc(p)}</li>`).join('')}</ol>` : '<p class="muted">還沒選黨綱，從左邊挑 3 條</p>'}
    </div>
    <div class="poster-stats"><span>戰力 <b>${totalPower().toFixed(0)}</b></span><span>評分 <b>${r}</b></span>${traits().map(t => `<span class="trait">${t}</span>`).join('')}</div>
    <div class="poster-formation">${formation(card)}</div>`;
  $('imageOutput').innerHTML = '';
}
function togglePlank(text) {
  const i = partyState.planks.indexOf(text);
  if (i >= 0) partyState.planks.splice(i, 1);
  else if (partyState.planks.length >= 3) { toast('黨綱最多 3 條，先取消一條'); return; }
  else partyState.planks.push(text);
  renderParty();
}
function rollAll(onlyPlanks) {
  if (!onlyPlanks) partyState.name = randomName();
  // two serious categories + one 北爛
  const cats = [...SERIOUS_GROUPS].sort(() => Math.random() - .5).slice(0, 2).map(k => PLANK_GROUPS[k]).concat([FUN_PLANKS]).sort(() => Math.random() - .5);
  if (onlyPlanks || !partyState.planks.length) partyState.planks = cats.map(l => pick(l));
  renderParty();
}

/* ---------- share ---------- */
function shareLink() {
  const q = new URLSearchParams({ t: lineup.map(x => x === null ? 'x' : x).join('.'), n: partyState.name, e: Math.max(0, partyState.emblem), c: partyState.color, p: partyState.planks.join('|') });
  return location.origin + location.pathname + '#' + q;
}
async function copyLink() {
  const url = shareLink();
  try { await navigator.clipboard.writeText(url); toast('連結已複製，朋友點開就看得到你的黨'); }
  catch { $('imageOutput').innerHTML = `<textarea class="copybox" readonly>${esc(url)}</textarea>`; }
}
const atlasImgs = [0, 1, 2, 3].map(i => { const im = new Image(); im.src = `assets/atlas-${i}.webp`; return im; });
const ready = im => im.complete && im.naturalWidth ? Promise.resolve(im) : new Promise((res, rej) => { im.onload = () => res(im); im.onerror = () => rej(new Error('頭像載入失敗，重新整理再試一次')); });

function fitText(c, text, max, size, weight = 900) {
  let s = size; c.font = `${weight} ${s}px "Noto Sans TC",sans-serif`;
  while (c.measureText(text).width > max && s > 24) { s -= 2; c.font = `${weight} ${s}px "Noto Sans TC",sans-serif`; }
}
function drawCard(c, i, x, y, w, h, ps, ns, big = false) {
  const p = person(lineup[i]); if (!p) return;
  c.save();
  if (big) { c.shadowColor = 'rgba(255,201,60,.55)'; c.shadowBlur = 60; }
  c.fillStyle = '#fff8ea'; c.beginPath(); c.roundRect(x, y, w, h, big ? 28 : 18); c.fill();
  c.restore();
  if (big) { c.strokeStyle = '#ffc93c'; c.lineWidth = 6; c.beginPath(); c.roundRect(x, y, w, h, 28); c.stroke(); }
  c.fillStyle = p.color; c.beginPath(); c.roundRect(x, y, w, 8, [big ? 28 : 18, big ? 28 : 18, 0, 0]); c.fill();
  const px = x + (w - ps) / 2, py = y + 18;
  if (p.atlas === null) {
    c.fillStyle = p.color; c.beginPath(); c.arc(px + ps / 2, py + ps / 2, ps / 2, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#fff'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = `900 ${Math.round(ps * (p.name.length > 2 ? .26 : .34))}px "Noto Sans TC",sans-serif`;
    c.fillText(p.name, px + ps / 2, py + ps / 2 + 2); c.textBaseline = 'alphabetic';
  } else {
    const im = atlasImgs[p.atlas], sw = im.naturalWidth / 4, sh = im.naturalHeight / 4;
    c.save(); c.beginPath(); c.arc(px + ps / 2, py + ps / 2, ps / 2, 0, Math.PI * 2); c.clip();
    c.drawImage(im, (p.cell % 4) * sw, Math.floor(p.cell / 4) * sh, sw, sh, px, py, ps, ps); c.restore();
  }
  c.textAlign = 'center';
  c.fillStyle = '#7a7f86'; c.font = `700 ${Math.round(ns * .55)}px "Noto Sans TC",sans-serif`; c.fillText(SHORT[i], x + w / 2, py + ps + ns * .75);
  c.fillStyle = '#10151d'; fitText(c, p.name, w - 24, ns, 900); c.fillText(p.name, x + w / 2, py + ps + ns * 1.75);
  c.textAlign = 'left';
}
function secTag(c, title, sub, y) {
  c.textAlign = 'center'; c.fillStyle = '#ffc93c'; c.font = '900 30px "Noto Sans TC",sans-serif'; c.fillText(title, 540, y);
  c.fillStyle = 'rgba(255,255,255,.45)'; c.font = '500 20px "Noto Sans TC",sans-serif'; c.fillText(sub, 540, y + 30); c.textAlign = 'left';
}
async function drawShare() {
  await Promise.all(atlasImgs.map(ready)); await document.fonts.ready;
  const W = 1080, H = 2860, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const c = cv.getContext('2d'), col = COLORS[partyState.color].c, r = rating();
  c.fillStyle = '#10151d'; c.fillRect(0, 0, W, H);
  const g = c.createLinearGradient(0, 0, 0, 640); g.addColorStop(0, col); g.addColorStop(.55, col + 'aa'); g.addColorStop(1, '#10151d');
  c.fillStyle = g; c.fillRect(0, 0, W, 640);
  // emblem + name + grade
  c.fillStyle = '#fff8ea'; c.beginPath(); c.arc(130, 140, 78, 0, Math.PI * 2); c.fill();
  c.font = '84px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
  if (partyState.emblem === -1 && customEmblem) {
    const im = await loadImg(customEmblem);
    c.save(); c.beginPath(); c.arc(130, 140, 74, 0, Math.PI * 2); c.clip(); c.drawImage(im, 56, 66, 148, 148); c.restore();
  } else c.fillText(EMBLEMS[Math.max(0, partyState.emblem)], 130, 146);
  c.textAlign = 'left'; c.textBaseline = 'alphabetic';
  c.fillStyle = 'rgba(255,255,255,.75)'; c.font = '700 26px "Noto Sans TC",sans-serif'; c.fillText('台灣總教頭・2026 建黨宣言', 240, 100);
  c.fillStyle = '#fff'; fitText(c, partyFullName(), 600, 96); c.fillText(partyFullName(), 236, 200);
  c.fillStyle = '#ffc93c'; c.beginPath(); c.arc(970, 140, 74, 0, Math.PI * 2); c.fill();
  c.fillStyle = '#10151d'; c.textAlign = 'center'; c.font = '800 104px "Barlow Condensed",sans-serif'; c.fillText(grade(r), 970, 176);
  c.font = '700 22px "Noto Sans TC",sans-serif'; c.fillStyle = '#ffc93c'; c.fillText(`評分 ${r}`, 970, 248); c.textAlign = 'left';
  // planks
  c.fillStyle = 'rgba(255,255,255,.6)'; c.font = '700 24px "Noto Sans TC",sans-serif'; c.fillText('政策主張', 72, 300);
  (partyState.planks.length ? partyState.planks : ['（尚未訂定）']).forEach((t, i) => {
    const y = 362 + i * 64;
    c.fillStyle = '#ffc93c'; c.beginPath(); c.arc(92, y - 14, 22, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#10151d'; c.textAlign = 'center'; c.font = '800 30px "Barlow Condensed",sans-serif'; c.fillText(i + 1, 92, y - 3); c.textAlign = 'left';
    c.fillStyle = '#fff'; fitText(c, t, 900, 42, 900); c.fillText(t, 132, y);
  });
  let x = 72; const sy = 580;
  const chip = (txt, bg, fg) => { c.font = '700 26px "Noto Sans TC",sans-serif'; const w = c.measureText(txt).width + 40; c.fillStyle = bg; c.beginPath(); c.roundRect(x, sy - 36, w, 52, 26); c.fill(); c.fillStyle = fg; c.fillText(txt, x + 20, sy - 1); x += w + 12; };
  chip(`戰力 ${totalPower().toFixed(0)}`, '#ffc93c', '#10151d');
  traits().forEach(t => chip(t, 'rgba(255,255,255,.12)', '#fff'));
  // president with spotlight
  const sp = c.createRadialGradient(540, 840, 20, 540, 840, 420); sp.addColorStop(0, 'rgba(255,201,60,.28)'); sp.addColorStop(1, 'rgba(255,201,60,0)');
  c.fillStyle = sp; c.fillRect(0, 620, W, 480);
  secTag(c, '元　首', '總統', 668);
  drawCard(c, 0, 380, 720, 320, 360, 230, 52, true);
  secTag(c, '核　心', '副總統・行政院長・立法院長', 1150);
  [1, 2, 3].forEach((i, k) => drawCard(c, i, 80 + k * 315, 1200, 290, 270, 160, 38));
  secTag(c, '內　閣', '十大部會', 1540);
  GROUPS[2].slots.forEach((i, k) => drawCard(c, i, 48 + (k % 5) * 200, 1590 + Math.floor(k / 5) * 206, 184, 190, 104, 30));
  secTag(c, '六　都', '直轄市長', 2060);
  // map
  const K = 5.2, ox = 540 - 50 * K, oy = 2100, P = (lo, la) => { const [a, b] = proj(lo, la); return [ox + a * K, oy + b * K]; };
  c.beginPath(); COAST.forEach((pt, k) => { const [a, b] = P(...pt); k ? c.lineTo(a, b) : c.moveTo(a, b); }); c.closePath();
  c.fillStyle = 'rgba(255,255,255,.07)'; c.fill(); c.strokeStyle = 'rgba(255,255,255,.3)'; c.lineWidth = 3; c.stroke();
  c.setLineDash([8, 8]); c.strokeStyle = 'rgba(255,201,60,.7)'; c.lineWidth = 2;
  Object.values(CITY).forEach(([lo, la, tx, ty]) => { const [a, b] = P(lo, la); c.beginPath(); c.moveTo(a, b); c.lineTo(ox + tx * K, oy + ty * K); c.stroke(); });
  c.setLineDash([]);
  Object.values(CITY).forEach(([lo, la]) => { const [a, b] = P(lo, la); c.fillStyle = '#ffc93c'; c.beginPath(); c.arc(a, b, 8, 0, Math.PI * 2); c.fill(); });
  GROUPS[3].slots.forEach(i => { const [, , tx, ty] = CITY[i], w = 150, h = 166; drawCard(c, i, ox + tx * K - w / 2, oy + ty * K - h / 2, w, h, 86, 26); });
  c.fillStyle = 'rgba(255,255,255,.85)'; c.font = '900 30px "Noto Sans TC",sans-serif'; c.fillText('你也來組一隊、建一個黨 →', 72, H - 66);
  c.fillStyle = 'rgba(255,255,255,.45)'; c.font = '500 20px "Noto Sans TC",sans-serif'; c.fillText('台灣總教頭・娛樂架空組隊，數值不代表真實能力，黨籍為該次選舉身分', 72, H - 30);
  return cv;
}

/* ---------- lineup reveal ---------- */
let revealTimers = [];
function revealCard(i, big) {
  const el = $('revealStage').querySelector(`.pc[data-i="${i}"]`); if (!el) return;
  el.classList.add('in'); Sound.play(big ? 'hit' : 'card');
  el.scrollIntoView({ behavior: 'smooth', block: big ? 'center' : 'nearest' });
}
function finishReveal() {
  revealTimers.forEach(clearTimeout); revealTimers = [];
  $('revealStage').querySelectorAll('.pc').forEach(e => e.classList.add('in'));
  $('revealStage').classList.add('done');
  const r = rating();
  $('revealGrade').innerHTML = `<span class="stamp">${grade(r)}</span><div><b>戰力 ${totalPower().toFixed(0)}・評分 ${r}</b><small>${traits().join('・')}</small></div>`;
  $('revealBar').classList.add('show');
}
function runReveal() {
  revealTimers.forEach(clearTimeout); revealTimers = [];
  $('revealStage').classList.remove('done');
  $('revealStage').innerHTML = formation(card);
  $('revealBar').classList.remove('show');
  $('reveal').hidden = false; document.body.classList.add('reveal-open');
  requestAnimationFrame(() => { $('revealStage').scrollTop = $('revealStage').scrollHeight; });
  const at = (ms, fn) => revealTimers.push(setTimeout(fn, ms));
  let t = 500;
  at(t, () => Sound.say('陣容公布！'));
  t += 700;
  GROUPS[3].slots.forEach(i => { at(t, () => revealCard(i)); t += 240; });
  t += 250;
  GROUPS[2].slots.forEach(i => { at(t, () => revealCard(i)); t += 150; });
  t += 350;
  [3, 2, 1].forEach(i => { at(t, () => revealCard(i)); t += 520; });
  at(t, () => { $('revealStage').scrollTo({ top: 0, behavior: 'smooth' }); Sound.drumroll(1.7); });
  t += 1800;
  at(t, () => { revealCard(0, true); Sound.say(`總統，${PEOPLE[lineup[0]].name}！`); });
  t += 1500;
  at(t, () => { finishReveal(); Sound.play('stamp'); });
}
function closeReveal() { revealTimers.forEach(clearTimeout); revealTimers = []; $('reveal').hidden = true; document.body.classList.remove('reveal-open'); }

async function makeImage() {
  const b = $('makeImage'); b.disabled = true; b.textContent = '製作中…';
  try {
    const cv = await drawShare();
    const blob = await new Promise((res, rej) => cv.toBlob(v => v ? res(v) : rej(new Error('圖片產生失敗')), 'image/png'));
    if (shareURL) URL.revokeObjectURL(shareURL);
    shareURL = URL.createObjectURL(blob);
    const file = 'party-' + Date.now() + '.png';
    $('imageOutput').innerHTML = `<img class="share-img" src="${shareURL}" alt="${esc(partyFullName())}分享圖">
      <p class="fine center">手機可長按圖片儲存</p>
      <div class="share-actions"><a class="cta small" href="${shareURL}" download="${file}">下載圖片</a><button class="chip-btn" id="nativeShare">分享</button></div>`;
    $('nativeShare').onclick = async () => {
      const f = new File([blob], file, { type: 'image/png' });
      try {
        if (navigator.canShare && navigator.canShare({ files: [f] })) await navigator.share({ files: [f], title: partyFullName(), text: `我組了「${partyFullName()}」，戰力 ${totalPower().toFixed(0)}。你呢？` });
        else toast('這個瀏覽器不支援直接分享，請下載或長按圖片');
      } catch (e) { if (e.name !== 'AbortError') toast('分享沒成功，請下載圖片'); }
    };
    $('imageOutput').scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (e) { toast(e.message || '圖片產生失敗'); }
  finally { b.disabled = false; b.textContent = '重新產生分享圖'; }
}

/* ---------- events ---------- */
$('home').onclick = () => show('Intro');
$('help').onclick = openInfo;
function newGame() { lineup = Array(20).fill(null); target = 0; lastAdded = -1; partyState = cleanParty(null); save(); }
$('resume').onclick = () => startDraft();
$('start').onclick = () => { newGame(); let seen = false; try { seen = !!localStorage.getItem(RULES_SEEN); } catch { } seen ? startDraft() : openRules(true); };
$('introRules').onclick = () => openRules(false);
$('introAuto').onclick = () => { newGame(); show('Draft'); autoFill(); };
$('autofill').onclick = autoFill;
$('reset').onclick = askReset;
$('toParty').onclick = () => { $('toParty').classList.remove('pulse'); if (!partyState.name && !partyState.planks.length) rollAll(false); runReveal(); };
$('skipReveal').onclick = finishReveal;
$('replay').onclick = runReveal;
$('goParty').onclick = () => { closeReveal(); show('Party'); };
const syncSoundBtns = () => {
  $('musicBtn').classList.toggle('off', !Sound.music); $('musicBtn').setAttribute('aria-pressed', Sound.music);
  $('sfxBtn').classList.toggle('off', !Sound.sfx); $('sfxBtn').setAttribute('aria-pressed', Sound.sfx);
};
$('musicBtn').onclick = () => { Sound.toggleMusic(); syncSoundBtns(); };
$('sfxBtn').onclick = () => { Sound.toggleSfx(); syncSoundBtns(); };
syncSoundBtns();
document.addEventListener('pointerdown', () => Sound.unlock(), { once: true });
$('backDraft').onclick = () => show('Draft');
$('closePicker').onclick = closeSheet;
$('scrim').onclick = closeSheet;
$('myTurn').onclick = () => {
  friendView = false; history.replaceState(null, '', location.pathname + location.search);
  lineup = Array(20).fill(null); target = 0; partyState = cleanParty(null); document.body.classList.remove('friend');
  save(); show('Intro');
};

$('board').addEventListener('click', e => { const t = e.target.closest('[data-slot]'); if (t) selectSlot(Number(t.dataset.slot)); });
$('list').addEventListener('click', e => {
  const d = e.target.closest('[data-detail]'); if (d) return openDetail(Number(d.dataset.detail));
  const p = e.target.closest('[data-pick]'); if (p) assign(Number(p.dataset.pick));
});
$('partyChips').addEventListener('click', e => {
  const b = e.target.closest('[data-party]'); if (!b) return;
  party = b.dataset.party; Sound.play('tap'); renderPartyChips(); renderPicker(); $('list').scrollTop = 0;
});

$('partyName').oninput = e => { partyState.name = e.target.value.replace(/黨$/, '').trim().slice(0, 8); renderPoster(); save(); };
$('rollName').onclick = () => rollAll(false);
$('rollPlanks').onclick = () => rollAll(true);
$('emblems').addEventListener('click', e => {
  if (e.target.closest('[data-clear-emblem]')) { customEmblem = null; try { localStorage.removeItem(STORAGE + '-emblem'); } catch { } if (partyState.emblem === -1) partyState.emblem = 0; return renderParty(); }
  const up = e.target.closest('.upload'); if (up && customEmblem && partyState.emblem !== -1 && e.target.tagName !== 'INPUT') { e.preventDefault(); partyState.emblem = -1; return renderParty(); }
  const b = e.target.closest('[data-emblem]'); if (b) { partyState.emblem = Number(b.dataset.emblem); renderParty(); }
});
$('swatches').addEventListener('click', e => { const b = e.target.closest('[data-color]'); if (b) { partyState.color = Number(b.dataset.color); renderParty(); } });
$('planks').addEventListener('click', e => { const b = e.target.closest('[data-plank]'); if (b) togglePlank(b.dataset.plank); });
const addCustom = () => {
  const v = $('customPlank').value.trim().slice(0, 18); if (!v) return;
  if (partyState.planks.length >= 3) { toast('黨綱最多 3 條，先取消一條'); return; }
  if (!partyState.planks.includes(v)) partyState.planks.push(v);
  $('customPlank').value = ''; renderParty();
};
$('addPlank').onclick = addCustom;
$('customPlank').onkeydown = e => { if (e.key === 'Enter') addCustom(); };
$('makeImage').onclick = makeImage;
$('copyLink').onclick = copyLink;

document.querySelectorAll('dialog').forEach(d => d.addEventListener('click', e => { if (e.target.closest('[data-close]') || e.target === d) d.close(); }));
addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });
matchMedia('(min-width:960px)').addEventListener('change', closeSheet);

/* ---------- boot ---------- */
try { customEmblem = localStorage.getItem(STORAGE + '-emblem'); } catch { }
renderPartyChips();
const mode = restore();
if (partyState.emblem === -1 && (!customEmblem || friendView)) partyState.emblem = 0;
show(mode === 'friend' ? 'Party' : mode === 'draft' ? 'Draft' : 'Intro');
