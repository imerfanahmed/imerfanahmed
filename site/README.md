# imerfanahmed.github.io

Personal portfolio site for **Erfan Ahmed Siam** — a single-page, dark, terminal-flavoured
site with a parallax starfield background, built with [Astro](https://astro.build) and
deployed to GitHub Pages.

**Live:** https://imerfanahmed.github.io/imerfanahmed/

---

## Quick start

```bash
cd site
npm install
npm run dev        # http://localhost:4321/imerfanahmed/
```

| Command           | Does                                  |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Dev server with hot reload            |
| `npm run build`   | Production build into `site/dist/`    |
| `npm run preview` | Serve the built output locally        |

---

## Editing content

**All content lives in one file:** [`site/src/data/cv.ts`](site/src/data/cv.ts).

That is the only file you need to touch for routine updates. It exports:

| Export       | Controls                                       |
| ------------ | ---------------------------------------------- |
| `profile`    | Name, role, tagline, location, contact, summary, "What I'm proud of" cards |
| `socials`    | GitHub / LinkedIn / LeetCode / Email links + icons |
| `experience` | Work timeline, in the order you list them      |
| `projects`   | Selected projects, metrics, tags               |
| `skills`     | Skill groups and their items                   |
| `education`  | Degrees                                        |
| `awards`     | Competition results                            |
| `nav`        | Nav bar entries (must match section `id`s)     |

Components in `site/src/components/` are presentation only — they read from `cv.ts`.

### Common edits

**Add a job** — append an object to `experience`:

```ts
{
  role: 'Senior Engineer',
  company: 'Acme',
  location: 'Remote',
  period: 'Jan 2026 — Present',
  kind: 'Full-time',      // 'Full-time' | 'Part-time' | 'Contract'
  current: true,          // shows the pulsing "now" marker
  blurb: 'One-line summary shown in an accent-bordered block.',
  points: ['Bullet one', 'Bullet two'],

  // Optional company logo (see "Company logos" below).
  logo: { src: '/assets/logos/acme.svg', alt: 'Acme', plate: 'light' },
  href: 'https://acme.example',
}
```

The first entry is rendered as the newest role, so keep the most recent job at the top.

### Company logos

Drop the file in `site/public/assets/logos/` and reference it as
`{ src: '/assets/logos/<file>.svg', alt: '...' }`. The `src` is **not** prefixed with
`/imerfanahmed` — the component adds the base path for you. Omit `logo` entirely and the
entry renders without one.

`plate` controls the backdrop:

| Value | Use for |
| --- | --- |
| `'light'` (default) | Dark/monochrome logos — shown on a light plate so they stay legible |
| `'none'` | Light or full-colour logos that already work on a dark background |

The University of Warwick wordmark lives at `public/assets/logos/warwick.svg`, fetched
from Warwick's own CDN.

**Add a project** — append to `projects`. The first entry is rendered as the wide
feature card, so keep the most impressive one first. Set `href` for a GitHub/repo link,
`metrics` for the stats panel, and `stack` for the tag row.

---

## Adding your photo

Drop a portrait at **`site/public/assets/photo.jpg`** — roughly 5:6 aspect ratio
(e.g. 1000×1200) works best. That's it; no code change needed.

Until the file exists, the hero shows a gradient `EA` monogram instead, so the site
never looks broken. If you'd rather keep a different filename, update the `src` in
[`site/src/components/Hero.astro`](site/src/components/Hero.astro).

---

## The CV PDF

The hero, nav, and contact sections link to the CV, which is served from
`site/public/assets/erfan_cv.pdf`. To update it, just overwrite that file.

`public/robots.txt` deliberately disallows the PDF so it doesn't turn up in search
results — it should be shared deliberately, not scraped.

---

## Deployment

Deployed automatically via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) on every push to `main`
that touches `site/**`.

**One-time setup on GitHub:**

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main`. The workflow builds and publishes the site.

### Custom domain later

If you move to a custom domain (or a `<user>.github.io` root repo):

1. In `site/astro.config.mjs`, set `site` to the new URL and `base: '/'`.
2. Update `start_url` / `scope` in `site/public/site.webmanifest`.
3. Add a `site/public/CNAME` file containing the bare domain.

With `base: '/'`, delete the `base` prefixing in the components — search for
`BASE_URL` in `site/src/`.

---

## How the parallax works

| Layer                                 | File                                  | Behaviour |
| ------------------------------------- | ------------------------------------- | --------- |
| Ambient glows, perspective grid, grain | `components/Background.astro`        | Pure CSS, fixed to the viewport |
| Starfield                             | `scripts/starfield.js`                | Canvas; three depth bands drift at different rates against scroll and pointer |
| Section reveal                        | `scripts/behaviours.js`               | `IntersectionObserver` fade-up |
| Cursor sheen on cards                 | `scripts/behaviours.js`               | Sets `--mx`/`--my` custom properties |
| Hero portrait tilt                    | `scripts/behaviours.js`               | Pointer-tracked 3D rotation |

Every effect is **skipped or disabled** under `prefers-reduced-motion: reduce`, and the
page is fully readable and navigable with JavaScript disabled.

---

## Accessibility & performance notes

- Semantic landmarks, a skip link, and `aria-*` on all interactive controls.
- Visible `:focus-visible` rings everywhere, including on the starfield-free fallback.
- Zero client-side framework; the only JS is two small vanilla modules
  (~7 kB total, ~3 kB gzipped).
- No web fonts are downloaded by default — the stack uses system fonts, so there is
  no layout shift and no blocking request. If you want real Inter/JetBrains Mono,
  self-host them rather than adding a Google Fonts `<link>`.

---

## Project layout

```
site/
├── astro.config.mjs        # site/base URLs, sitemap, prefetch
├── public/
│   ├── assets/
│   │   ├── erfan_cv.pdf    # the downloadable CV
│   │   └── photo.jpg       # ← add your portrait here (optional)
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
└── src/
    ├── data/cv.ts          # ← all content
    ├── layouts/Base.astro  # <head>, SEO, JSON-LD, background, nav
    ├── pages/index.astro   # section order
    ├── components/         # one file per section
    ├── scripts/            # starfield + interactions
    └── styles/global.css   # design tokens and shared utilities
```