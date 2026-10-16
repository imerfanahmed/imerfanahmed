import type { APIContext } from 'astro';
import { buildMarkdownProfile } from '../lib/markdown';

/**
 * Serves the whole profile as `text/markdown` at `/markdown.md`.
 *
 * This is the URL to hand to LLM crawlers, RAG indexers and agents: plain
 * Markdown, no HTML, a keyword block, and stable section headings.
 *
 * `prerender = true` because the build is fully static — the file is emitted
 * once at build time and served as a normal asset.
 */
export const prerender = true;

export function GET({ site }: APIContext) {
  return new Response(buildMarkdownProfile({ site: site?.href }), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      // Agents are explicitly welcome to index this.
      'X-Robots-Tag': 'all',
    },
  });
}