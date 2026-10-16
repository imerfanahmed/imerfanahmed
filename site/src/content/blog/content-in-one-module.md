---
title: 'Writing this site: content in one module'
description: 'How a typed TypeScript module keeps a portfolio site editable without touching a single component, and why that mattered more than any framework choice.'
pubDate: 2026-10-16
tags: ['astro', 'typescript', 'meta']
---

Every portfolio site has the same failure mode. You ship it, it looks good, and
then you need to add a job — and you're grepping through six files looking for
the one place the old employer's name is hardcoded.

This site is built so that never happens. There is exactly one file to edit.

## One file to edit

All content lives in `src/data/cv.ts`. Jobs, projects, skills, awards, the
hero copy — all of it is data, exported as typed constants.

```ts
export const experience: Job[] = [
  {
    role: 'Graduate AI Developer',
    company: 'University of Warwick',
    location: 'Coventry, United Kingdom',
    period: 'Aug 2026 — Present',
    kind: 'Full-time',
    current: true,
    points: ['Research emerging LLM architectures…'],
  },
];
```

The components import that data and render it. They never contain content.

## Why types, not a CMS

A headless CMS solves the same problem, and for a team it's the right answer.
For a personal site it's overhead: a network dependency, a service that can go
down, and a login between you and your own content.

TypeScript gives most of the benefit with none of that. If I rename a field on
the `Job` type, the build fails at every place that still uses the old name.
That's the same safety a CMS schema gives you, except it runs in my editor
before I commit.

The other advantage is diffability. Changing a job is a three-line diff in a
text file, reviewable in a pull request, with full history. A CMS write is an
opaque API call.

## The migration that mattered

The site's first version had two CV sections: `about` and `work`. Adding a
`projects` section meant adding a file and an entry in the nav array — no
component changes, no layout surgery.

That's the test I'd apply to any content architecture: **can you add a section
without touching markup?** If the answer is no, the abstraction is leaking.

## Where the boundary sits

Not everything belongs in the data module. Reading time, date formatting, sort
order — that's logic, and it lives in `src/lib/`. Components own presentation,
including the CSS.

The rule is simple:

| Concern | Lives in |
| --- | --- |
| What the site says | `src/data/cv.ts` |
| How it's computed | `src/lib/` |
| How it looks | `src/components/*.astro` |

Content changes stay in one file. Presentation changes never touch content.
The two only meet at the import boundary.

> The best content architecture is the one where updating your CV doesn't
> require understanding your own build system six months later.

## Adding a post

Same principle. This post is a markdown file dropped into
`src/content/blog/`. The frontmatter is validated at build time, the slug comes
from the filename, and the index, the RSS feed and the previous/next links all
pick it up automatically. Nothing to register.