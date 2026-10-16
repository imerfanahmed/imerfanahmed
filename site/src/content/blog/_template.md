---
# ---------------------------------------------------------------------------
# Copy this file to a new name to publish a post. Files starting with `_`
# are ignored by the build, so this template never appears on the site.
#
# The filename becomes the URL slug:
#   my-first-post.md  ->  /blog/my-first-post/
# ---------------------------------------------------------------------------

title: 'Your post title'
description: 'One or two sentences. Used on the blog index, in the meta description and in the RSS feed.'
pubDate: 2026-01-01

# Optional:
# updatedDate: 2026-01-15
# tags: ['llm', 'agents', 'infra']
# draft: true   # keep the file in the repo but out of the published build
---

Opening paragraph. This becomes the first paragraph of the article.

## A section heading

Second-level headings appear in the table of contents when a post has four or
more of them.

### A sub-heading

Sub-headings are also picked up by the table of contents.

Regular text, **bold**, *italic*, `inline code`, and [a link](https://example.com).

- A bulleted list
- With a second item
  - And a nested item

1. A numbered list
2. With a second item

> A blockquote for pulling something out.

```php
<?php
// Code blocks get syntax highlighting in both light and dark themes.
$posts = Post::published()->latest()->get();
```

| Column | Meaning |
| --- | --- |
| `draft` | Hides the post from production builds |
| `tags` | Shown on the card and in the feed |

---

A horizontal rule above, and an image below:

![Alt text describing the image](/imerfanahmed/assets/your-image.png)