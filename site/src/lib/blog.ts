import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/**
 * All published posts, newest first.
 *
 * Drafts are filtered here rather than in each page so the index, the RSS
 * feed and any future listing can't drift out of sync. In `astro dev` drafts
 * are kept visible so you can preview them — production builds drop them.
 */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

/** Every tag used across published posts, with counts, most used first. */
export async function getTags(): Promise<{ tag: string; count: number }[]> {
  const posts = await getPublishedPosts();
  const counts = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/** Approximate reading time in minutes, assuming ~220 words per minute. */
export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

/**
 * Format a date deterministically.
 *
 * `toLocaleDateString` output varies with the build machine's ICU data and
 * timezone, which makes builds non-reproducible. Formatting the parts
 * explicitly keeps the output stable everywhere.
 */
export function formatDate(date: Date): string {
  return `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/** ISO date for `datetime` attributes and feeds. */
export function isoDate(date: Date): string {
  return date.toISOString();
}

/** Position of a post within the full published list, for prev/next links. */
export function neighbours(posts: Post[], current: Post) {
  const i = posts.findIndex((p) => p.id === current.id);
  return {
    // Older post (further down the date-sorted list).
    prev: i >= 0 && i < posts.length - 1 ? posts[i + 1] : undefined,
    // Newer post.
    next: i > 0 ? posts[i - 1] : undefined,
  };
}