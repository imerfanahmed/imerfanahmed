// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed as a GitHub Pages *project* site:
//   https://imerfanahmed.github.io/imerfanahmed/
// If you later move to a custom domain or a <user>.github.io repo,
// set `base` to '/' and update `site` accordingly.
export default defineConfig({
  site: 'https://imerfanahmed.github.io',
  base: '/imerfanahmed',
  output: 'static',
  compressHTML: true,
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  markdown: {
    // Dual themes so code blocks stay legible when the site's light/dark
    // toggle flips. blog.css picks the right set of CSS variables.
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-default',
      },
      defaultColor: false,
      wrap: false,
    },
  },
  devToolbar: {
    enabled: false,
  },
});