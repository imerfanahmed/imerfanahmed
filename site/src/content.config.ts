import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog posts.
 *
 * Add a `.md` file to `src/content/blog/` with this frontmatter and it
 * appears on the site automatically — no registry to update.
 *
 * Files starting with `_` are ignored, so `_template.md` is a safe place
 * to keep a scaffold without publishing it.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    title: z.string().max(120),
    /** Used for the index card, the meta description and the RSS item. */
    description: z.string().max(300),
    /** Coerced, so `2026-10-16` and `'Oct 16 2026'` both work. */
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** Set true to keep a post in the repo but out of the build output. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };