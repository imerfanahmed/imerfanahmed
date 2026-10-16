/**
 * Progressive-enhancement behaviours for the whole page.
 * Everything degrades gracefully: with JS off the site is fully readable.
 */
(() => {
  const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const prefersReduced = () => reduceQuery.matches;

  /* ------------------------------------------------------------------ *
   * 1. Scroll reveal
   * ------------------------------------------------------------------ */
  const revealables = document.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window) || prefersReduced()) {
    revealables.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    revealables.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------ *
   * 2. Nav: scroll progress, active section spy, back-to-top
   * ------------------------------------------------------------------ */
  const nav = document.querySelector('[data-nav]');
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
  const progress = document.querySelector('[data-progress]');
  const toTop = document.querySelector('[data-to-top]');

  if (nav) {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        nav.classList.toggle('is-stuck', y > 12);

        if (progress) {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          const pct = max > 0 ? Math.min(y / max, 1) : 0;
          progress.style.transform = `scaleX(${pct})`;
        }

        if (toTop) toTop.classList.toggle('is-shown', y > window.innerHeight * 0.9);
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Map nav links to their target sections using `data-section`, which is
  // stable across pages. Parsing the href instead would break on sub-pages,
  // where links are absolute (`/imerfanahmed/#about`).
  const sectionLinks = navLinks.filter((l) => l.dataset.section);

  const sections = sectionLinks
    .map((link) => document.getElementById(link.dataset.section))
    .filter((el) => el instanceof HTMLElement);

  if (sections.length && sectionLinks.length && 'IntersectionObserver' in window) {
    const byId = new Map();
    for (const link of sectionLinks) byId.set(link.dataset.section, link);

    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          // Only clear links this observer owns, so the Blog link's
          // `is-active` on sub-pages isn't wiped by a stray callback.
          sectionLinks.forEach((l) => l.classList.remove('is-active'));
          byId.get(entry.target.id)?.classList.add('is-active');
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ------------------------------------------------------------------ *
   * 3. Theme Toggle (Carbon Dark <-> Warm Paper Light)
   * ------------------------------------------------------------------ */
  const themeBtn = document.querySelector('[data-theme-toggle]');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const root = document.documentElement;
      const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('site-theme', next);
      } catch (e) {}
    });
  }

  /* ------------------------------------------------------------------ *
   * 4. Copy email action in the Hero segmented bar
   * ------------------------------------------------------------------ */
  const copyBtn = document.querySelector('[data-copy-email]');
  if (copyBtn) {
    const label = copyBtn.querySelector('[data-copy-label]');
    const email = copyBtn.getAttribute('data-copy-email');
    copyBtn.addEventListener('click', async () => {
      if (!email) return;
      try {
        await navigator.clipboard.writeText(email);
        if (label) {
          const prev = label.textContent;
          label.textContent = 'Copied!';
          setTimeout(() => {
            label.textContent = prev;
          }, 1800);
        }
      } catch (e) {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  /* ------------------------------------------------------------------ *
   * 5. Mobile menu
   * ------------------------------------------------------------------ */
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');

  if (toggle && menu) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
      document.body.classList.toggle('is-locked', open);
    };

    toggle.addEventListener('click', () => {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    menu.addEventListener('click', (e) => {
      if (e.target instanceof Element && e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    window.matchMedia('(min-width: 921px)').addEventListener('change', (e) => {
      if (e.matches) setOpen(false);
    });
  }

  /* ------------------------------------------------------------------ *
   * 6. Back to top
   * ------------------------------------------------------------------ */
  toTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReduced() ? 'auto' : 'smooth' });
  });

  /* ------------------------------------------------------------------ *
   * 7. Footer year
   * ------------------------------------------------------------------ */
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();