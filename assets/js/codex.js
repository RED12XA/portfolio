/* =====================================================================
   Fig. I — "Vigintisex basium planum vacuum"
   The hollow rhombicuboctahedron from Leonardo's plates for Luca
   Pacioli's De divina proportione (1509): a skeleton of beams hanging
   from a bridle and thread. Canvas 2D, no library: 24 vertices,
   48 beams drawn far to near, each beam a lit face and a gilded face.
   Distant beams cool toward blue and soften (Leonardo's aerial
   perspective); near beams are warm and sharp.
   ===================================================================== */
(() => {
  'use strict';

  const canvas = document.querySelector('[data-codex]');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  const plate = canvas.closest('.plate');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- palette ---------- */
  const css = getComputedStyle(document.documentElement);
  const hexRgb = (name, fallback) => {
    const hex = (css.getPropertyValue(name).trim() || fallback).replace('#', '');
    const n = parseInt(hex, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };
  const INK = hexRgb('--ink', '#1b1916').join(',');
  const GILT = [226, 208, 170];      // gold leaf seen in shadow
  const DISTANT = [214, 220, 238];   // the same face, far away (sfumato blue)
  const PAPER_NEAR = [255, 255, 255];
  const PAPER_FAR = [241, 242, 246];
  const mix = (a, b, t) => a.map((v, k) => Math.round(v + (b[k] - v) * t)).join(',');

  /* ---------- geometry ---------- */
  const K = 1 + Math.SQRT2;                 // vertices: permutations of (±1, ±1, ±K)
  const V = [];
  for (const a of [-1, 1]) for (const b of [-1, 1]) for (const c of [-1, 1]) {
    V.push([a * K, b, c], [a, b * K, c], [a, b, c * K]);
  }
  const eq = (p, q) => Math.abs(p - q) < 1e-6;
  const where = test => V.reduce((out, v, i) => (test(v) && out.push(i), out), []);
  const faces = [];
  for (let ax = 0; ax < 3; ax++) for (const s of [-1, 1]) faces.push(where(v => eq(v[ax], s * K)));
  for (const a of [-1, 1]) for (const b of [-1, 1]) for (const c of [-1, 1]) {
    faces.push(where(v =>
      (eq(v[0], a * K) && eq(v[1], b) && eq(v[2], c)) ||
      (eq(v[0], a) && eq(v[1], b * K) && eq(v[2], c)) ||
      (eq(v[0], a) && eq(v[1], b) && eq(v[2], c * K))));
  }
  for (const [p, q] of [[0, 1], [0, 2], [1, 2]]) for (const sp of [-1, 1]) for (const sq of [-1, 1]) {
    faces.push(where(v => (eq(v[p], sp * K) && eq(v[q], sq)) || (eq(v[p], sp) && eq(v[q], sq * K))));
  }
  // order each face around its centre, then collect the 48 unique edges
  const EDGES = [];
  const seen = new Set();
  for (const idx of faces) {
    const c = idx.reduce((m, i) => [m[0] + V[i][0], m[1] + V[i][1], m[2] + V[i][2]], [0, 0, 0]).map(x => x / idx.length);
    const len = Math.hypot(...c);
    const n = c.map(x => x / len);
    const u0 = [V[idx[0]][0] - c[0], V[idx[0]][1] - c[1], V[idx[0]][2] - c[2]];
    const w = [n[1] * u0[2] - n[2] * u0[1], n[2] * u0[0] - n[0] * u0[2], n[0] * u0[1] - n[1] * u0[0]];
    const ang = i => {
      const d = [V[i][0] - c[0], V[i][1] - c[1], V[i][2] - c[2]];
      return Math.atan2(d[0] * w[0] + d[1] * w[1] + d[2] * w[2], d[0] * u0[0] + d[1] * u0[1] + d[2] * u0[2]);
    };
    idx.sort((i, j) => ang(i) - ang(j));
    idx.forEach((a, k) => {
      const b = idx[(k + 1) % idx.length];
      const key = a < b ? `${a}-${b}` : `${b}-${a}`;
      if (!seen.has(key)) { seen.add(key); EDGES.push([a, b]); }
    });
  }
  const TOP = where(v => eq(v[1], K));      // the four corners the bridle holds
  const RADIUS = Math.hypot(1, 1, K);       // ≈ 2.80
  const BEAM = 0.21;                        // beam width, in model units
  const KNOT = K + 0.95;                    // where the bridle meets the thread
  const LIGHT = [-0.6, -0.8];               // screen-space light: upper left

  /* ---------- state ---------- */
  const IDLE = 0.2;                          // rad/s, one turn in about 30 s
  const REST_PITCH = 0.4;
  let yaw = 0.35, spin = 0;
  let pitch = REST_PITCH, pitchV = 0;
  let swing = 0, swingV = 0;
  let drop = reduced.matches ? 0 : 1, dropStart = null, settledKick = false;
  let dragging = false, lastX = 0, lastY = 0, lastT = 0;
  let size = 0, dpr = 1, visible = true, raf = 0, prev = 0;

  function resize() {
    const r = canvas.getBoundingClientRect();
    if (!r.width) return;
    dpr = Math.min(2, window.devicePixelRatio || 1);
    size = r.width;
    canvas.width = Math.round(r.width * dpr);
    canvas.height = Math.round(r.height * dpr);
    draw();
  }

  /* ---------- physics ---------- */
  const idleSpeed = () => (reduced.matches ? 0 : IDLE);
  function step(dt) {
    if (!dragging) {
      spin += (idleSpeed() - spin) * (1 - Math.exp(-dt * 1.1));
      pitchV += (-(pitch - REST_PITCH) * 26 - pitchV * 6.5) * dt;   // spring back to rest
      pitch += pitchV * dt;
    }
    yaw += spin * dt;
    swingV += (-swing * 7.5 - swingV * 1.4) * dt;                     // damped pendulum
    swing += swingV * dt;
    if (dropStart !== null && drop > 0) {
      const t = Math.min(1, (performance.now() - dropStart) / 1250);
      drop = 1 - (1 - Math.pow(1 - t, 3));
      if (t >= 1 && !settledKick) { settledKick = true; swingV += 0.09; }
    }
  }
  const settled = () => !dragging && drop <= 0 &&
    Math.abs(spin - idleSpeed()) < 1e-3 && Math.abs(swing) < 1e-3 && Math.abs(swingV) < 1e-3 &&
    Math.abs(pitch - REST_PITCH) < 1e-3 && Math.abs(pitchV) < 1e-3;

  /* ---------- render ---------- */
  function draw() {
    if (!size) return;
    const W = size;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, W);

    const scale = (W * 0.34) / RADIUS;
    const cx = W / 2, cy = W * 0.53;
    const D = 14;                                    // camera distance
    const pivotY = cy / scale;                       // the thread's anchor, at the canvas top
    const lift = drop * 1.6;                         // lowered into place on load
    const cyw = Math.cos(yaw), syw = Math.sin(yaw);
    const cp = Math.cos(pitch), sp = Math.sin(pitch);
    const cs = Math.cos(swing), ss = Math.sin(swing);

    const transform = p => {
      let x = p[0] * cyw + p[2] * syw, z = -p[0] * syw + p[2] * cyw, y = p[1];  // spin on the thread
      const y1 = y * cp - z * sp; z = y * sp + z * cp; y = y1 + lift;          // seen from a little above
      const dy = y - pivotY;                                                   // swing about the anchor
      return [x * cs - dy * ss, pivotY + x * ss + dy * cs, z];
    };
    const project = q => { const k = D / (D - q[2]); return [cx + q[0] * scale * k, cy - q[1] * scale * k, k]; };

    const P = V.map(transform);
    const S = P.map(project);

    // thread and bridle
    const knot = project(transform([0, KNOT, 0]));
    ctx.lineWidth = 1;
    ctx.strokeStyle = `rgba(${INK},.62)`;
    ctx.beginPath();
    ctx.moveTo(cx, 0);
    ctx.lineTo(knot[0], knot[1]);
    TOP.forEach(i => { ctx.moveTo(knot[0], knot[1]); ctx.lineTo(S[i][0], S[i][1]); });
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(knot[0], knot[1], 2.6, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.stroke();

    // beams, far to near
    const beams = EDGES.map(([i, j]) => ({ i, j, z: (P[i][2] + P[j][2]) / 2 })).sort((a, b) => a.z - b.z);
    for (const { i, j, z } of beams) {
      const A = S[i], B = S[j];
      let dx = B[0] - A[0], dy = B[1] - A[1];
      const len = Math.hypot(dx, dy) || 1;
      dx /= len; dy /= len;
      const nx = -dy, ny = dx;
      const wa = (BEAM * scale * A[2]) / 2, wb = (BEAM * scale * B[2]) / 2;
      const ax = A[0] - dx * wa, ay = A[1] - dy * wa;               // run past the joint
      const bx = B[0] + dx * wb, by = B[1] + dy * wb;
      const side = nx * LIGHT[0] + ny * LIGHT[1] > 0 ? 1 : -1;       // which half faces the light
      const near = Math.max(0, Math.min(1, (z + RADIUS) / (2 * RADIUS)));
      const far = 1 - near;

      ctx.beginPath();                                               // lit face
      ctx.moveTo(ax, ay); ctx.lineTo(bx, by);
      ctx.lineTo(bx + nx * wb * side, by + ny * wb * side);
      ctx.lineTo(ax + nx * wa * side, ay + ny * wa * side);
      ctx.closePath();
      ctx.fillStyle = `rgb(${mix(PAPER_NEAR, PAPER_FAR, far)})`;
      ctx.fill();

      ctx.beginPath();                                               // gilded face in shadow
      ctx.moveTo(ax, ay); ctx.lineTo(bx, by);
      ctx.lineTo(bx - nx * wb * side, by - ny * wb * side);
      ctx.lineTo(ax - nx * wa * side, ay - ny * wa * side);
      ctx.closePath();
      ctx.fillStyle = `rgb(${mix(GILT, DISTANT, far)})`;
      ctx.fill();

      ctx.beginPath();                                               // outline and ridge
      ctx.moveTo(ax + nx * wa, ay + ny * wa); ctx.lineTo(bx + nx * wb, by + ny * wb);
      ctx.moveTo(ax - nx * wa, ay - ny * wa); ctx.lineTo(bx - nx * wb, by - ny * wb);
      ctx.strokeStyle = `rgba(${INK},${0.3 + 0.62 * near})`;
      ctx.lineWidth = 0.8 + 0.5 * near;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(ax, ay); ctx.lineTo(bx, by);
      ctx.strokeStyle = `rgba(${INK},${0.08 + 0.2 * near})`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
    }
  }

  /* ---------- loop ---------- */
  function frame(t) {
    const dt = Math.min(0.05, (t - (prev || t)) / 1000);
    prev = t;
    step(dt);
    draw();
    raf = (visible && !document.hidden && !(reduced.matches && settled())) ? requestAnimationFrame(frame) : 0;
  }
  function wake() {
    if (!raf && visible && !document.hidden) { prev = 0; raf = requestAnimationFrame(frame); }
  }

  /* ---------- input: drag to spin and tilt, arrows for keyboard ---------- */
  canvas.addEventListener('pointerdown', e => {
    dragging = true; lastX = e.clientX; lastY = e.clientY; lastT = performance.now();
    canvas.setPointerCapture(e.pointerId);
    wake();
  });
  canvas.addEventListener('pointermove', e => {
    if (!dragging) return;
    const now = performance.now(), dt = Math.max(8, now - lastT) / 1000;
    const dx = e.clientX - lastX, dy = e.clientY - lastY;
    yaw += dx * 0.011;
    spin = spin * 0.4 + (dx * 0.011 / dt) * 0.6;
    pitch = Math.max(-0.3, Math.min(1.1, pitch + dy * 0.006));
    swingV += dx * 0.0018;
    lastX = e.clientX; lastY = e.clientY; lastT = now;
  });
  const release = e => {
    if (!dragging) return;
    dragging = false;
    spin = Math.max(-7, Math.min(7, spin));
    if (e && canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
    wake();
  };
  canvas.addEventListener('pointerup', release);
  canvas.addEventListener('pointercancel', release);
  canvas.addEventListener('lostpointercapture', () => { dragging = false; });
  canvas.addEventListener('keydown', e => {
    const k = e.key;
    if (k === 'ArrowLeft' || k === 'ArrowRight') {
      const s = k === 'ArrowLeft' ? -1 : 1;
      spin += 2.2 * s; swingV += 0.2 * s;
    } else if (k === 'ArrowUp' || k === 'ArrowDown') {
      pitchV += k === 'ArrowUp' ? -2.4 : 2.4;
    } else return;
    e.preventDefault();
    wake();
  });

  /* ---------- lifecycle ---------- */
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) wake(); }).observe(canvas);
  document.addEventListener('visibilitychange', wake);
  reduced.addEventListener?.('change', wake);

  resize();
  if (reduced.matches) {
    plate?.classList.add('is-live');
    draw();
  } else {
    setTimeout(() => {
      plate?.classList.add('is-live');
      dropStart = performance.now();
      spin = IDLE;
      wake();
    }, 1100);
  }
  wake();
})();
