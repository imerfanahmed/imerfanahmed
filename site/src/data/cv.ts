/**
 * Single source of truth for every piece of content on the site.
 * Edit this file to update the site — no component changes needed.
 *
 * NOTE: `draft: true` entries are not yet linked anywhere in the UI;
 * they are content the CV mentions but does not give a public URL for.
 */

export const profile = {
  name: 'Erfan Ahmed Siam',
  monogram: 'EA',
  role: 'Graduate AI Developer / Software Engineer',
  tagline: 'I build systems that stay up.',
  specialties: [
    'Applied LLM',
    'Agentic Engineering',
    'RAG',
    'Solution Architecture',
    'Laravel',
    'Go',
    'Cloud',
    'DevOps',
  ],
  location: 'Coventry, United Kingdom',
  locationShort: 'Coventry, UK',
  email: 'erfan.siam98@gmail.com',
  phone: '+44 7344 085666',
  summary:
    'Software engineer working at the intersection of applied AI and production infrastructure. At the University of Warwick I research LLM architectures, design agentic systems and automate internal workflows; across 5+ years before that I shipped systems for 100+ UK businesses, from architecture through CI/CD to deployment on Docker, Linux and Go.',
  highlights: [
    {
      title: 'Applied LLM research',
      body: 'At the University of Warwick I investigate model architectures and evaluation methods, turning early-stage research ideas into working prototypes the team can actually test and adopt.',
    },
    {
      title: 'Agentic engineering at scale',
      body: 'I design and ship agentic LLM systems — tool-using agents, retrieval pipelines and workflow automation — that take repetitive internal processes off people\u2019s plates and make them reproducible.',
    },
    {
      title: 'Solution architecture',
      body: 'I take ambiguous requirements and turn them into concrete system designs: model selection, data flow, evaluation strategy and the infrastructure to run it reliably.',
    },
    {
      title: 'Restaurant ecosystem at scale',
      body: 'I maintain a full restaurant management system, including POS and customer ordering, and orchestrated the migration of that legacy Laravel monolith for 100+ UK restaurants from v5.6 to v12 with zero service interruption.',
    },
    {
      title: 'Infrastructure engineering',
      body: 'I replaced a third-party Pusher dependency with a custom Go real-time engine I built from scratch, which cut infrastructure costs and noticeably lowered latency.',
    },
    {
      title: 'Zero-downtime migration',
      body: 'I led a high-stakes migration of over 1.4TB of production data using rsync, holding 100% data integrity with absolutely no downtime.',
    },
    {
      title: 'Automated media pipelines',
      body: 'I developed a custom FFmpeg pipeline in PHP that integrates with the Discord API to fetch videos, transcode and crop them for compatibility, and securely store the results in AWS S3.',
    },
    {
      title: 'Payment systems',
      body: 'I designed and deployed a multi-currency subscription system on Stripe, fully tested and reliable for global transactions.',
    },
  ],
};

export type Social = {
  label: string;
  href: string;
  handle: string;
  /** Inline SVG path data, 24x24 viewBox. */
  icon: string;
};

export const socials: Social[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/imerfanahmed',
    handle: '@imerfanahmed',
    icon: 'M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.06 10.06 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/imerfan/',
    handle: '/in/imerfan',
    icon: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 9.5h5.16V21H2.4V9.5Zm7.72 0h4.95v1.57h.07c.69-1.18 2.37-2.02 4.06-2.02 4.34 0 5.14 2.6 5.14 5.99V21h-5.16v-5.3c0-1.27-.02-2.9-1.85-2.9-1.86 0-2.14 1.38-2.14 2.81V21H10.1V9.5Z',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/imerfanahmed/',
    handle: '/u/imerfanahmed',
    icon: 'M13.48 2.4a1.3 1.3 0 0 1 1.84 1.84l-2.2 2.2 4.2 4.2a1.3 1.3 0 0 1-1.84 1.84l-4.2-4.2-3.4 3.4a2.6 2.6 0 0 0 0 3.68l3.4 3.4a2.6 2.6 0 0 0 3.68 0l1.4-1.4a1.3 1.3 0 0 1 1.84 1.84l-1.4 1.4a5.2 5.2 0 0 1-7.36 0l-3.4-3.4a5.2 5.2 0 0 1 0-7.36l3.44-3.44Z M4.6 11.2h6.6a1.3 1.3 0 0 1 0 2.6H4.6a1.3 1.3 0 0 1 0-2.6Z',
  },
  {
    label: 'Email',
    href: 'mailto:erfan.siam98@gmail.com',
    handle: 'erfan.siam98@gmail.com',
    icon: 'M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.7.3 6.3 4.72L18.3 5.8H5.7Zm13.1 1.63-6.2 4.65a1.7 1.7 0 0 1-2.02 0L4.4 7.43V18.5c0 .11.09.2.2.2h14.8c.11 0 .2-.09.2-.2V7.43Z',
  },
];

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  kind: 'Full-time' | 'Part-time' | 'Contract';
  current?: boolean;
  blurb?: string;
  points: string[];
  /**
   * Optional company logo, served from /public.
   * Rendered on a light plate so monochrome marks stay legible on the dark
   * background. Omit it and the component falls back to a monogram tile.
   */
  logo?: { src: string; alt: string; plate?: 'light' | 'none' };
  href?: string;
};

export const experience: Job[] = [
  {
    role: 'Graduate AI Developer',
    company: 'University of Warwick',
    location: 'Coventry, United Kingdom',
    period: 'Aug 2026 — Present',
    kind: 'Full-time',
    current: true,
    logo: { src: '/assets/logos/warwick.svg', alt: 'University of Warwick', plate: 'light' },
    href: 'https://warwick.ac.uk/',
    blurb:
      'Research-led engineering within the university: exploring new LLM architectures, designing agentic solutions, and automating internal team workflows.',
    points: [
      'Research emerging LLM architectures, evaluation methods and prompting strategies, then turn viable ideas into working prototypes.',
      'Act as solution architect for internal AI initiatives — scoping requirements, choosing models and data flow, and defining how success is measured.',
      'Build applied agentic LLM systems using tool calling, retrieval and multi-step orchestration to automate real internal workflows.',
      'Automate repetitive team processes end to end, replacing manual handoffs with auditable, reproducible pipelines.',
      'Work across research and delivery: communicate findings to non-specialists and ship what survives contact with real users.',
      'Collaborate with academics, professional services staff and other engineers on shared platform and data-governance decisions.',
    ],
  },
  {
    role: 'Full Stack Developer, PHP',
    company: 'Agora Studio',
    location: 'Montreal, Canada',
    period: 'Apr 2025 — Present',
    kind: 'Part-time',
    current: true,
    blurb:
      'Architecting core systems for an animation community platform (Agora.Community) on the TALL stack, with FFmpeg pipelines, Stripe and AWS.',
    points: [
      'Designed an automated video processing pipeline integrating FFmpeg and Discord for competition submissions.',
      'Collaborated to build a digital store (subscriptions + one-time purchases) using Stripe and Laravel Cashier.',
      'Implemented PHPUnit, Pest and Playwright testing integrated into Bitbucket CI/CD pipelines.',
      'Engineered scalable S3-based asset storage and optimised the delivery workflow.',
      'Modernised legacy modules to align with current Laravel architecture standards.',
      'Working in a collaborative environment in line with ISO data protection regulations.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Magic Office',
    location: 'London, United Kingdom',
    period: 'Jan 2020 — Present',
    kind: 'Part-time',
    current: true,
    blurb:
      'Lead engineer for a cloud-based restaurant POS ecosystem, supporting 100+ UK clients independently.',
    points: [
      'Migrated the core platform from Laravel 5.6 to 12, improving maintainability and scalability.',
      'Designed a dynamic table booking and merging system for high-traffic restaurant workflows.',
      'Built a complex meal-deal pricing engine handling conditional discount logic.',
      'Developed a custom print server supporting USB ESC/POS and network printers.',
      'Replaced Pusher with Go-based WebSocket (publisher/subscriber) infrastructure for real-time messaging.',
      'Managed Linux servers, automated deployments and monitoring to maintain 99.9% uptime.',
      'Built companion applications using Swift, Android and Electron JS.',
      'Ensured web accessibility (WCAG) compliance across user-facing platforms.',
    ],
  },
  {
    role: 'Infrastructure Consultant',
    company: 'Data Envelope',
    location: 'Bangladesh',
    period: 'Jan 2024 — Dec 2025',
    kind: 'Contract',
    blurb: 'Specialising in high-scale migrations and server stabilisation.',
    points: [
      'Migrated a 1.4TB+ WordPress-based newspaper ecosystem (Daily New Nation) across hosting environments.',
      'Applied a logical, problem-solving approach to resolve MySQL memory exhaustion and optimise high-concurrency performance.',
      'Recovered system integrity following a security breach involving immutable bits using low-level Linux troubleshooting.',
      'Deployed aaPanel and MailCow as professional, zero-cost management alternatives to cPanel and WHM under strict budget constraints.',
    ],
  },
  {
    role: 'PHP Developer',
    company: 'Developer Look',
    location: 'United States',
    period: 'Jul 2025 — Aug 2025',
    kind: 'Contract',
    points: [
      'Built a Laravel–Airtable integration with bi-directional webhook synchronisation.',
      'Implemented OAuth2 authentication and rate-limit handling.',
      'Designed a secure data transformation layer for legal record mapping.',
    ],
  },
  {
    role: 'Lead PHP Developer',
    company: 'Kodezen',
    location: 'Bangladesh',
    period: 'Dec 2023 — Nov 2024',
    kind: 'Full-time',
    blurb:
      'Developed high-scale WordPress e-commerce (Store Engine) and LMS (Academy LMS) systems.',
    points: [
      'Architected a modular e-commerce engine as a WooCommerce alternative.',
      'Built a dynamic pricing system supporting complex conditional rules.',
      'Integrated Stripe and PayPal for PCI-compliant recurring billing.',
      'Engineered CRM and Mailchimp synchronisation pipelines.',
      'Optimised cart and checkout state management for high traffic.',
    ],
  },
];

export type Project = {
  name: string;
  kind: string;
  href?: string;
  reportHref?: string;
  note?: string;
  stack: string[];
  points: string[];
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    name: 'Agentic Workflow Automation',
    kind: 'University of Warwick · Applied LLM / Agentic Systems',
    note: 'Internal systems work — details available on request',
    stack: [
      'LLM agents',
      'Tool calling',
      'RAG',
      'MCP',
      'Python',
      'Evaluation harnesses',
    ],
    points: [
      'Designed agentic LLM systems that plan, call tools and orchestrate multi-step tasks against real internal data.',
      'Built retrieval pipelines so agents ground their answers in source material rather than relying on model memory.',
      'Developed evaluation harnesses to compare architectures, prompts and models against measurable task outcomes.',
      'Automated internal team workflows end to end, removing manual handoffs from recurring processes.',
      'Worked as solution architect: scoping requirements, choosing models and data flow, and defining success criteria before building.',
    ],
    metrics: [
      { label: 'Focus', value: 'Agentic' },
      { label: 'Domain', value: 'Applied LLM' },
      { label: 'Role', value: 'Architect' },
      { label: 'Since', value: 'Aug 2026' },
    ],
  },
  {
    name: 'RadInsight',
    kind: 'Vision-Language Model · Llama 3.2 Vision',
    note: 'Report available on request',
    stack: ['Python', 'LoRA', 'Llama 3.2 Vision', 'MIMIC-CXR', 'CheXpert'],
    points: [
      'Fine-tuned the 11B Vision-Instruct model using LoRA.',
      'Trained on 750,000+ radiology image-text pairs (MIMIC-CXR, CheXpert).',
      'Built a WhatsApp-based automated report delivery system with 15–30 second response times.',
      'Optimised training on an RTX 3060 under 12GB VRAM.',
    ],
    metrics: [
      { label: 'ROUGE-L', value: '0.78' },
      { label: 'BLEU-4', value: '0.62' },
      { label: 'CIDEr', value: '1.21' },
      { label: 'Training pairs', value: '750k+' },
    ],
  },
  {
    name: 'Gusher',
    kind: 'Real-time messaging server',
    href: 'https://github.com/imerfanahmed/gusher',
    stack: ['Go', 'WebSockets', 'Pub/Sub'],
    points: [
      'Designed as a lightweight alternative to Pusher.',
      'Implemented connection pooling and webhook handling.',
      'Optimised for low-latency broadcasting in single-tenant environments.',
    ],
  },
  {
    name: 'AvroPHP',
    kind: 'Bangla transliteration engine',
    href: 'https://github.com/imerfanahmed/avro-php',
    stack: ['PHP', 'Trie', 'PHPUnit'],
    points: [
      'Implemented a Trie-based phonetic mapping algorithm for efficient string conversion.',
      'Optimised for low-latency server-side rendering.',
    ],
  },
];

export type SkillGroup = {
  title: string;
  icon: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: 'Applied AI & LLM',
    icon: 'M12 2a2 2 0 0 1 2 2v1.1a7 7 0 0 1 2.3 1l.8-.8a2 2 0 1 1 2.8 2.8l-.8.8c.5.7.9 1.5 1.2 2.3H21a2 2 0 1 1 0 4h-1.1c-.3.8-.7 1.6-1.2 2.3l.8.8a2 2 0 1 1-2.8 2.8l-.8-.8c-.7.4-1.5.8-2.3 1V22a2 2 0 1 1-4 0v-1.1a7 7 0 0 1-2.3-1l-.8.8a2 2 0 1 1-2.8-2.8l.8-.8a7 7 0 0 1-1.1-2.3H3a2 2 0 1 1 0-4h1.1c.3-.8.7-1.6 1.2-2.3l-.8-.8a2 2 0 1 1 2.8-2.8l.8.8c.7-.4 1.5-.8 2.3-1V4a2 2 0 0 1 2-2Zm0 6.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z',
    items: [
      'LLM architecture research',
      'Agentic LLM systems',
      'Tool calling / function calling',
      'RAG & retrieval pipelines',
      'Prompt engineering & evaluation',
      'Fine-tuning (LoRA / QLoRA)',
      'MCP servers',
      'Solution architecture',
      'Workflow automation',
    ],
  },
  {
    title: 'Languages',
    icon: 'M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z',
    items: ['PHP (Laravel)', 'Go', 'Python', 'SQL', 'JavaScript'],
  },
  {
    title: 'Frontend',
    icon: 'M3 4h18v16H3V4Zm2 2v12h14V6H5Zm2 2h4v2H7V8Zm0 4h10v2H7v-2Z',
    items: [
      'TALL Stack',
      'Tailwind',
      'Alpine.js',
      'Livewire',
      'Vue.js',
      'Blade / Twig',
      'Vite',
      'ES6',
    ],
  },
  {
    title: 'Databases',
    icon: 'M12 3c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3Zm8 7.5c0 1.66-3.58 3-8 3s-8-1.34-8-3V13c0 1.66 3.58 3 8 3s8-1.34 8-3v-2.5Zm0 6c0 1.66-3.58 3-8 3s-8-1.34-8-3V19c0 1.66 3.58 3 8 3s8-1.34 8-3v-2.5Z',
    items: ['MySQL', 'PostgreSQL', 'Vector databases', 'Knowledge graphs'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: 'M6.5 19a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 17.7 9.2 4.4 4.4 0 0 1 17.5 19h-11Z',
    items: [
      'AWS (S3, EC2, Lambda, Aurora)',
      'Azure',
      'Cloudflare',
      'Nginx / Apache',
      'Load balancing',
      'DB scaling',
      'DNS',
      'Bastion / VPN / Port security',
    ],
  },
  {
    title: 'DevOps',
    icon: 'M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.5 3.6-2.7 1.5L12 7.4 8.2 9.4 5.5 7.9 12 4.3ZM5 9.6l2.7 1.5v4.6L5 17.2V9.6Zm4.7 2.6L12 10.7l2.3 1.5v3.6L12 17.3l-2.3-1.5v-3.6Zm6.6-1.1 2.7-1.5v7.6l-2.7-1.5v-4.6Z',
    items: ['Docker', 'Terraform', 'GitHub Actions', 'Bitbucket Pipelines', 'Linux', 'Git'],
  },
  {
    title: 'Testing & Reliability',
    icon: 'M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm0 2.2 6 2.2V11c0 3.9-2.5 7.7-6 8.9C8.5 18.7 6 14.9 6 11V6.4l6-2.2Zm-1.2 9.9-2-2-1.4 1.4 3.4 3.4 5.4-5.4-1.4-1.4-4 4Z',
    items: ['PHPUnit', 'Pest', 'Playwright', 'Cypress', 'TDD'],
  },
  {
    title: 'Architecture',
    icon: 'M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm13.5 0a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z',
    items: ['Domain-Driven Design', 'REST APIs', 'SOLID', 'DRY / KISS', 'Scalability'],
  },
  {
    title: 'Monitoring & Identity',
    icon: 'M4 20V10h3v10H4Zm6.5 0V4h3v16h-3ZM17 20v-7h3v7h-3Z',
    items: ['Grafana', 'Prometheus', 'Zabbix', 'New Relic', 'Sentry', 'OAuth2', 'JWT'],
  },
  {
    title: 'AI Tooling',
    icon: 'M4 4h16v4H4V4Zm0 6h7v10H4V10Zm9 0h7v10h-7V10Z',
    items: ['Claude Code', 'Antigravity', 'Cursor', 'GitHub Copilot', 'OpenAI / Anthropic APIs'],
  },
  {
    title: 'CMS & Platforms',
    icon: 'M4 4h16v4H4V4Zm0 6h7v10H4V10Zm9 0h7v10h-7V10Z',
    items: ['WordPress', 'Shopify (Liquid)', 'Moodle', 'OpenCart', 'WooCommerce'],
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  detail?: string;
  logo?: { src: string; alt: string; plate?: 'light' | 'none' };
  href?: string;
};

export const education: Education[] = [
  {
    degree: 'MSc Cloud & Network Computing Engineering',
    school: 'University of Staffordshire',
    location: 'United Kingdom',
    period: 'Feb 2026 — Present',
  },
  {
    degree: "BSc Computer Science & Engineering",
    school: 'University of Dhaka',
    location: 'Bangladesh',
    period: '2020 — 2025',
    detail: 'CGPA 3.63 / 4.00 · Session 2019–20, delayed due to COVID-19',
  },
];

export type Award = {
  title: string;
  detail: string;
  year: string;
};

export const awards: Award[] = [
  { title: 'Runner-Up', detail: 'Code Refactoring Contest (IUT)', year: '2024' },
  { title: '3rd Place', detail: 'FEC Technofest Programming Contest', year: '2022' },
  { title: 'Regional Participant', detail: 'ICPC Asia Dhaka Regional', year: '2021 · 2022 · 2023' },
];

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

/** Path to the CV PDF, served from /public. */
export const cvPath = '/assets/erfan_cv.pdf';