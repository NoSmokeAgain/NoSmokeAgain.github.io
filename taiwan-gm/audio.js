'use strict';
/* All sound is synthesized with Web Audio — no audio files needed.
   BGM: short procedural stadium loop. SFX: tap / pick / swap / error / fanfare / drumroll / hit.
   Announcer: browser speech synthesis (zh-TW) reads "位置，名字". */
const Sound = (() => {
  let ctx = null, master, bgmBus, sfxBus, noiseBuf, bgmTimer = null, nextTime = 0, step = 0;
  const pref = (() => { try { return JSON.parse(localStorage.getItem('tgm-sound') || '{}'); } catch { return {}; } })();
  let musicOn = pref.music !== false, sfxOn = pref.sfx !== false;
  const savePref = () => { try { localStorage.setItem('tgm-sound', JSON.stringify({ music: musicOn, sfx: sfxOn })); } catch { } };

  function init() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return true; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = .8; master.connect(ctx.destination);
    bgmBus = ctx.createGain(); bgmBus.gain.value = .32; bgmBus.connect(master);
    sfxBus = ctx.createGain(); sfxBus.gain.value = .7; sfxBus.connect(master);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return true;
  }
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);

  function tone(bus, t, midi, dur, { type = 'square', vol = .2, attack = .005, glide = 0, cutoff = 0 } = {}) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(hz(midi), t);
    if (glide) o.frequency.exponentialRampToValueAtTime(hz(midi + glide), t + dur);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    let node = o;
    if (cutoff) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = cutoff; o.connect(f); node = f; }
    node.connect(g); g.connect(bus); o.start(t); o.stop(t + dur + .02);
  }
  function noise(bus, t, dur, { vol = .2, hp = 6000, lp = 0 } = {}) {
    const s = ctx.createBufferSource(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    s.buffer = noiseBuf; f.type = lp ? 'lowpass' : 'highpass'; f.frequency.value = lp || hp;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(bus); s.start(t); s.stop(t + dur + .02);
  }
  function kick(bus, t, vol = .9) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(42, t + .16);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + .32);
    o.connect(g); g.connect(bus); o.start(t); o.stop(t + .35);
  }

  /* ---- BGM: 116 bpm, C – Am – F – G, 4 bars × 16 steps ---- */
  const BPM = 116, S16 = 60 / BPM / 4;
  const CHORDS = [[48, 52, 55, 60], [45, 52, 57, 60], [41, 53, 57, 60], [43, 55, 59, 62]];
  const LEAD = [72, 0, 76, 0, 79, 0, 76, 74, 72, 0, 0, 67, 69, 0, 72, 0];
  function scheduleStep(t, s) {
    const bar = Math.floor(s / 16) % 4, i = s % 16, ch = CHORDS[bar];
    if (i % 4 === 0) kick(bgmBus, t, .55);
    if (i % 8 === 4) noise(bgmBus, t, .16, { vol: .22, hp: 1800 });            // snare-ish clap
    if (i % 2 === 1) noise(bgmBus, t, .04, { vol: .07, hp: 8000 });            // hat
    if (i % 2 === 0) tone(bgmBus, t, ch[0] - 12 + (i % 4 === 2 ? 12 : 0), S16 * 1.8, { type: 'triangle', vol: .32 });
    if (i === 0 || i === 6 || i === 10) ch.slice(1).forEach(n => tone(bgmBus, t, n + 12, S16 * 3, { type: 'sawtooth', vol: .035, cutoff: 1800, attack: .01 }));
    const l = LEAD[i]; if (l && (Math.floor(s / 64) % 2 === 1)) tone(bgmBus, t, l + (bar === 3 ? 2 : bar === 2 ? -3 : 0), S16 * 1.6, { type: 'square', vol: .045, cutoff: 3200 });
  }
  function pump() {
    while (nextTime < ctx.currentTime + .15) { scheduleStep(nextTime, step); nextTime += S16; step = (step + 1) % 128; }
  }
  function startBgm() {
    if (!musicOn || !init() || bgmTimer) return;
    nextTime = ctx.currentTime + .05; step = 0;
    bgmBus.gain.cancelScheduledValues(ctx.currentTime); bgmBus.gain.setValueAtTime(.32, ctx.currentTime);
    bgmTimer = setInterval(pump, 40); pump();
  }
  function stopBgm() { clearInterval(bgmTimer); bgmTimer = null; }
  function duck(on) { if (!ctx) return; bgmBus.gain.setTargetAtTime(on ? .08 : .32, ctx.currentTime, .15); }

  /* ---- SFX ---- */
  const FX = {
    tap: t => tone(sfxBus, t, 84, .06, { type: 'square', vol: .08 }),
    pick: t => { noise(sfxBus, t, .18, { vol: .12, hp: 2500 }); [72, 79, 84].forEach((n, i) => tone(sfxBus, t + i * .06, n, .25, { type: 'square', vol: .12, cutoff: 5000 })); },
    swap: t => { tone(sfxBus, t, 76, .1, { vol: .1 }); tone(sfxBus, t + .09, 71, .1, { vol: .1 }); tone(sfxBus, t + .18, 79, .16, { vol: .1 }); },
    error: t => { tone(sfxBus, t, 40, .22, { type: 'sawtooth', vol: .16, cutoff: 900 }); tone(sfxBus, t + .12, 39, .22, { type: 'sawtooth', vol: .16, cutoff: 900 }); },
    full: t => { [60, 64, 67, 72, 76, 79, 84].forEach((n, i) => tone(sfxBus, t + i * .07, n, .5, { type: 'square', vol: .1, cutoff: 4000 })); kick(sfxBus, t + .5, .9); noise(sfxBus, t + .5, 1.2, { vol: .18, hp: 5000 }); },
    card: t => { noise(sfxBus, t, .09, { vol: .15, hp: 3000 }); tone(sfxBus, t, 88, .08, { type: 'triangle', vol: .08 }); },
    hit: t => { kick(sfxBus, t, 1); noise(sfxBus, t, 1.6, { vol: .3, hp: 4000 }); [48, 55, 60, 64, 67].forEach(n => tone(sfxBus, t, n, 1.6, { type: 'sawtooth', vol: .05, cutoff: 2400, attack: .02 })); },
    stamp: t => { kick(sfxBus, t, .8); noise(sfxBus, t, .2, { vol: .2, lp: 900 }); }
  };
  function play(name) { if (!sfxOn || !init()) return; FX[name]?.(ctx.currentTime + .01); }
  function drumroll(sec) {
    if (!sfxOn || !init()) return;
    const t0 = ctx.currentTime + .02; let t = t0, gap = .09;
    while (t < t0 + sec) { noise(sfxBus, t, .07, { vol: .06 + (t - t0) / sec * .14, lp: 2400 }); t += gap; gap = Math.max(.035, gap * .96); }
  }

  /* ---- announcer (speech synthesis) ---- */
  let voice = null;
  function pickVoice() {
    const vs = speechSynthesis.getVoices();
    voice = vs.find(v => /zh[-_]TW/i.test(v.lang)) || vs.find(v => /zh[-_](HK|Hant)/i.test(v.lang)) || vs.find(v => /^zh/i.test(v.lang)) || null;
  }
  if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function say(text, { rate = 1.08, pitch = 1, interrupt = true } = {}) {
    if (!sfxOn || !('speechSynthesis' in window)) return;
    if (interrupt) speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = voice?.lang || 'zh-TW'; if (voice) u.voice = voice; u.rate = rate; u.pitch = pitch;
    u.onstart = () => duck(true); u.onend = u.onerror = () => duck(false);
    speechSynthesis.speak(u);
  }

  return {
    unlock() { if (init()) startBgm(); },
    play, drumroll, say,
    get music() { return musicOn; }, get sfx() { return sfxOn; },
    toggleMusic() { musicOn = !musicOn; savePref(); musicOn ? (init(), startBgm()) : stopBgm(); return musicOn; },
    toggleSfx() { sfxOn = !sfxOn; savePref(); if (!sfxOn && 'speechSynthesis' in window) speechSynthesis.cancel(); return sfxOn; },
    pause() { stopBgm(); if (ctx) ctx.suspend(); },
    resume() { if (ctx) { ctx.resume(); startBgm(); } }
  };
})();
document.addEventListener('visibilitychange', () => document.hidden ? Sound.pause() : Sound.resume());
