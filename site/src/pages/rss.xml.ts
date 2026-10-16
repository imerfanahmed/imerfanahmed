import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts } from '../lib/blog';
import { profile } from '../data/cv';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  // `base` is not applied automatically — every link the feed emits has to
  // carry the `/imerfanahmed` prefix or the items 404 on the project site.
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  return rss({
    title: `${profile.name} — Blog`,
    description:
      'Notes on applied AI, LLM systems, agentic engineering, and the infrastructure that keeps them running.',
    site: context.site!,
    // Declares `xmlns:atom`, required by the self-referencing `atom:link`.
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    // Matches the site's trailing-slash behaviour so feed links resolve.
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${base}/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: `<language>en-gb</language><atom:link href="${new URL(`${base}/rss.xml`, context.site!).href}" rel="self" type="application/rss+xml"/>`,
  });
}