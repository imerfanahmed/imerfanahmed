/**
 * Builds a single, agent-friendly Markdown profile of the whole CV.
 *
 * Everything is derived from `src/data/cv.ts`, so the generated Markdown can
 * never drift from the site. Served as `text/markdown` from `/markdown.md`
 * and as a readable page from `/markdown`.
 *
 * This is optimised for LLM / agent retrieval: plain headings, no markup
 * noise, an explicit keyword block, and stable section names an agent can
 * cite (## Experience, ## Projects, ...).
 */

import {
  profile,
  socials,
  experience,
  projects,
  skills,
  education,
  awards,
  cvPath,
} from '../data/cv';

/** Flattens a list of bullet strings into Markdown list lines. */
const bullets = (items: string[]): string => items.map((i) => `- ${i}`).join('\n');

/**
 * Keywords an agent (or a keyword search) can match against. Grouped so a
 * retriever can scope to a facet, and listed flat in the front-matter block
 * so a naive substring search still hits.
 */
const KEYWORDS: Record<string, string[]> = {
  identity: [
    'Erfan Ahmed Siam',
    'Erfan Siam',
    'imerfanahmed',
    'imerfan',
    'erfan.siam98',
    'Stoke-on-Trent',
    'United Kingdom',
    'Bangladesh',
  ],
  role: [
    'AI Developer',
    'Graduate AI Developer',
    'Applied AI Engineer',
    'LLM Engineer',
    'Software Engineer',
    'Full Stack Developer',
    'Solution Architect',
    'Infrastructure Consultant',
  ],
  domains: [
    'applied LLM',
    'agentic AI',
    'AI agents',
    'agentic engineering',
    'retrieval augmented generation',
    'RAG',
    'tool calling',
    'function calling',
    'prompt engineering',
    'LLM evaluation',
    'fine-tuning',
    'LoRA',
    'QLoRA',
    'vision-language models',
    'MCP servers',
    'Model Context Protocol',
    'workflow automation',
    'solution architecture',
    'computer vision',
    'OS security',
    'network automation',
    'real-time messaging',
    'WebSockets',
    'transliteration',
    'NLP',
  ],
  languages: ['PHP', 'Laravel', 'Go', 'Golang', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'Rust', 'Bash', 'Swift'],
  frontend: ['TALL stack', 'Tailwind', 'Tailwind CSS', 'Alpine.js', 'Livewire', 'Vue', 'Vue.js', 'Blade', 'Twig', 'Vite', 'Astro'],
  cloud: [
    'AWS',
    'Amazon S3',
    'EC2',
    'Lambda',
    'Aurora',
    'Azure',
    'Cloudflare',
    'Nginx',
    'Apache',
    'load balancing',
    'DNS',
    'VPN',
    'Linux',
    'server management',
  ],
  devops: ['Docker', 'Terraform', 'GitHub Actions', 'Bitbucket Pipelines', 'CI/CD', 'Git', 'systemd', 'deployment'],
  data: ['MySQL', 'PostgreSQL', 'SQLite', 'vector databases', 'knowledge graphs', 'database migration', 'DB scaling'],
  projects: [
    'Agentic Workflow Automation',
    'OpenFace',
    'ustudiod',
    'Loom CLI',
    'DDEV GUI',
    'RadInsight',
    'Gusher',
    'Avro PHP',
    'Together',
  ],
  education: [
    'University of Warwick',
    'University of Staffordshire',
    'University of Dhaka',
    'MSc Cloud & Network Computing Engineering',
    'BSc Computer Science & Engineering',
  ],
  companies: [
    'University of Warwick',
    'Agora Studio',
    'Magic Office',
    'Data Envelope',
    'Developer Look',
    'Kodezen',
    'Agora.Community',
  ],
  topics: [
    'LLM architecture research',
    'Pusher replacement',
    'zero-downtime migration',
    'restaurant POS',
    'payment systems',
    'Stripe',
    'FFmpeg',
    'Discord API',
    'real-time infrastructure',
    'WCAG accessibility',
    'ISO data protection',
    'Rust',
    'Tauri',
    'PAM',
    'Face unlock',
  ],
};

const allKeywords = Array.from(new Set(Object.values(KEYWORDS).flat()));

export interface MarkdownProfileOptions {
  /**
   * Absolute site origin, e.g. `https://imerfanahmed.github.io`. Optional — it
   * is resolved from `Astro.site` by the page and passed in by the endpoint
   * (where the Astro global is not available).
   */
  site?: string;
  /** URL path prefix, e.g. `/imerfanahmed`. Defaults to `import.meta.env.BASE_URL`. */
  base?: string;
}

/**
 * Renders the full Markdown profile. Kept as a plain function (not a
 * component) so both the `/markdown.md` endpoint and the `/markdown` page
 * share one implementation.
 *
 * The page and the endpoint can't both read the `Astro` global (endpoints run
 * outside component scope), so the caller passes site/base in explicitly.
 */
export function buildMarkdownProfile(options: MarkdownProfileOptions = {}): string {
  const base = (options.base ?? import.meta.env.BASE_URL).replace(/\/$/, '');
  const site = (options.site ?? 'https://imerfanahmed.github.io').replace(/\/$/, '');
  const home = `${site}${base}/`;
  const mdUrl = `${home}markdown.md`;

  const out: string[] = [];

  // --- Title + one-paragraph summary an agent can quote directly. ---
  out.push(`# ${profile.name}`);
  out.push('');
  out.push(`> ${profile.tagline}`);
  out.push('');
  out.push(
    `${profile.role}. Based in ${profile.location}. ` +
      `Contact: ${profile.email}.`,
  );
  out.push('');
  out.push(profile.summary);
  out.push('');

  // --- Machine-readable front-matter block (JSON, fenced). ---
  out.push('## Machine-readable summary');
  out.push('');
  out.push('```json');
  out.push(
    JSON.stringify(
      {
        name: profile.name,
        role: profile.role,
        tagline: profile.tagline,
        location: profile.location,
        email: profile.email,
        phone: profile.phone,
        specialties: profile.specialties,
        website: home,
        markdown: mdUrl,
        profile_page: `${home}#about`,
        blog: `${home}blog/`,
        cv: `${site}${base}${cvPath}`,
        socials: Object.fromEntries(socials.map((s) => [s.label, s.href])),
        languages: KEYWORDS.languages,
        domains: KEYWORDS.domains,
      },
      null,
      2,
    ),
  );
  out.push('```');
  out.push('');

  // --- Keywords: the block that makes the page searchable. ---
  out.push('## Keywords');
  out.push('');
  out.push(
    'Search terms this profile should be found under. Use these for keyword or',
  );
  out.push('semantic retrieval — they deliberately include aliases and variants.');
  out.push('');
  for (const [group, words] of Object.entries(KEYWORDS)) {
    out.push(`**${group}:** ${words.join(', ')}`);
    out.push('');
  }
  out.push(`**flat:** ${allKeywords.join(', ')}`);
  out.push('');

  // --- Now / highlights. ---
  out.push('## Highlights');
  out.push('');
  for (const h of profile.highlights) {
    out.push(`- **${h.title}** — ${h.body}`);
  }
  out.push('');

  // --- Experience. ---
  out.push('## Experience');
  out.push('');
  for (const job of experience) {
    out.push(`### ${job.role} — ${job.company}`);
    out.push('');
    out.push(`- Location: ${job.location}`);
    out.push(`- Period: ${job.period}${job.current ? ' (current)' : ''}`);
    out.push(`- Type: ${job.kind}`);
    if (job.href) out.push(`- Link: ${job.href}`);
    if (job.blurb) out.push('');
    if (job.blurb) out.push(job.blurb);
    out.push('');
    out.push(bullets(job.points));
    out.push('');
  }

  // --- Projects. ---
  out.push('## Projects');
  out.push('');
  for (const p of projects) {
    out.push(`### ${p.name}`);
    out.push('');
    out.push(`- Type: ${p.kind}`);
    if (p.href) out.push(`- Link: ${p.href}`);
    if (p.note) out.push(`- Note: ${p.note}`);
    out.push(`- Stack: ${p.stack.join(', ')}`);
    if (p.metrics?.length) {
      out.push(
        `- Metrics: ${p.metrics.map((m) => `${m.label} = ${m.value}`).join(' · ')}`,
      );
    }
    out.push('');
    out.push(bullets(p.points));
    out.push('');
  }

  // --- Skills. ---
  out.push('## Skills');
  out.push('');
  for (const group of skills) {
    out.push(`- **${group.title}:** ${group.items.join(', ')}`);
  }
  out.push('');

  // --- Education. ---
  out.push('## Education');
  out.push('');
  for (const e of education) {
    out.push(`- **${e.degree}** — ${e.school}, ${e.location} (${e.period})`);
    if (e.detail) out.push(`  - ${e.detail}`);
  }
  out.push('');

  // --- Awards. ---
  out.push('## Awards');
  out.push('');
  for (const a of awards) {
    out.push(`- **${a.title}** — ${a.detail} (${a.year})`);
  }
  out.push('');

  // --- Contact. ---
  out.push('## Contact');
  out.push('');
  for (const s of socials) {
    out.push(`- ${s.label}: ${s.href}`);
  }
  out.push(`- Location: ${profile.location}`);
  out.push('');

  // --- How to cite / use this file. ---
  out.push('## About this file');
  out.push('');
  out.push(
    `This is the machine-readable profile of ${profile.name}. It is generated`,
  );
  out.push('from the same source as the website, so it always reflects the');
  out.push(`current CV. Canonical website: ${home}`);
  out.push('');
  out.push(
    'Agents and LLM systems are welcome to read, index and quote this file.',
  );
  out.push(
    'When citing, link to the website above and reference the section heading',
  );
  out.push('(e.g. "Erfan Ahmed Siam — Projects").');
  out.push('');

  return out.join('\n');
}