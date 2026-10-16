/**
 * Starfield with layered parallax.
 *
 * Three depth bands drift at different rates against scroll and pointer
 * movement, which is what sells the parallax. Rendered on a canvas so a few
 * hundred stars cost one draw pass instead of hundreds of DOM nodes.
 *
 * Bails out entirely when the user prefers reduced motion.
 */
(() => {
  const canvas = document.querySelector('[data-stars]');
  if (!(canvas instanceof HTMLCanvasElement)) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce.matches) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  /** Depth bands: [parallax factor, radius range, alpha range, population share] */
  const BANDS = [
    { factor: 0.12, r: [0.4, 0.9], a: [0.14, 0.34], share: 0.5 },
    { factor: 0.3, r: [0.7, 1.5], a: [0.2, 0.5], share: 0.34 },
    { factor: 0.58, r: [1.1, 2.2], a: [0.3, 0.8], share: 0.16 },
  ];

  const DENSITY = 1 / 7200; // stars per px²
  const HUE = [172, 205, 265]; // teal, blue, violet — matches the accents

  let dpr = 1;
  let w = 0;
  let h = 0;
  let stars = [];

  let scrollY = window.scrollY;
  let targetX = 0;
  let targetY = 0;
  let curX = 0;
  let curY = 0;
  let raf = 0;
  let running = false;

  function seed() {
    const count = Math.round(w * h * DENSITY);
    stars = [];
    for (let i = 0; i < count; i += 1) {
      // pick a band by cumulative share
      const roll = Math.random();
      let acc = 0;
      let band = BANDS[0];
      for (const b of BANDS) {
        acc += b.share;
        if (roll <= acc) {
          band = b;
          break;
        }
      }
      const [rMin, rMax] = band.r;
      const [aMin, aMax] = band.a;
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: rMin + Math.random() * (rMax - rMin),
        a: aMin + Math.random() * (aMax - aMin),
        factor: band.factor,
        hue: HUE[(Math.random() * HUE.length) | 0],
        // slow independent twinkle, per-star phase so they never sync up
        phase: Math.random() * Math.PI * 2,
        speed: 0.25 + Math.random() * 0.75,
      });
    }
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
    paint(performance.now());
  }

  function paint(now) {
    ctx.clearRect(0, 0, w, h);

    // ease the pointer offset so movement feels weighted, not jittery
    curX += (targetX - curX) * 0.055;
    curY += (targetY - curY) * 0.055;

    // wrap scroll so the field is effectively infinite
    const sy = scrollY % h;

    for (const s of stars) {
      // vertical parallax: nearer bands travel further
      let y = s.y - sy * s.factor - curY * s.factor * 26;
      y = ((y % h) + h) % h;

      let x = s.x + curX * s.factor * 34;
      x = ((x % w) + w) % w;

      const twinkle = 0.62 + 0.38 * Math.sin(now * 0.0011 * s.speed + s.phase);

      ctx.beginPath();
      ctx.arc(x, y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${s.hue} 85% 78% / ${s.a * twinkle})`;
      ctx.fill();
    }
  }

  function loop(now) {
    paint(now);
    if (running) raf = requestAnimationFrame(loop);
  }

  function start() {
    if (running) return;
    running = true;
    raf = requestAnimationFrame(loop);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  }, { passive: true });

  window.addEventListener('pointermove', (e) => {
    targetX = e.clientX / window.innerWidth - 0.5;
    targetY = e.clientY / window.innerHeight - 0.5;
  }, { passive: true });

  window.addEventListener('resize', resize, { passive: true });

  // stop burning frames when the tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  reduce.addEventListener('change', (e) => {
    if (e.matches) {
      stop();
      ctx.clearRect(0, 0, w, h);
    } else {
      resize();
      start();
    }
  });

  resize();
  start();
})();