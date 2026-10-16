# Erfan Ahmed Siam

Graduate AI Developer at the University of Warwick. I work on applied LLM
systems, agentic engineering and production infrastructure.

[Website](https://imerfanahmed.github.io/imerfanahmed/) ·
[Blog](https://imerfanahmed.github.io/imerfanahmed/blog/) ·
[CV](https://imerfanahmed.github.io/imerfanahmed/assets/erfan_cv.pdf)

Stoke-on-Trent, United Kingdom · erfan.siam98@gmail.com

## Now

**Graduate AI Developer** — University of Warwick · Aug 2026 to present
Part-time, remote.

Research-led engineering within the university. I research emerging LLM
architectures and evaluation methods, act as solution architect for internal AI
initiatives, and build agentic systems that automate real team workflows.

## Before

**Full Stack Developer, PHP** — Agora Studio · Apr 2025 to Jun 2026
Animation community platform on the TALL stack. FFmpeg and Discord video
pipelines, Stripe subscriptions, S3 asset storage, ISO-aligned data handling.

**Software Engineer** — Magic Office · Jan 2020 to Dec 2025
Lead engineer for a cloud restaurant POS ecosystem serving 100+ UK clients.
Migrated Laravel 5.6 to 12 across 100+ deployments without downtime, replaced
Pusher with a Go WebSocket engine, held 99.9% uptime on self-managed Linux.

**Infrastructure Consultant** — Data Envelope · Jan 2024 to Dec 2025
High-scale migrations. Moved a 1.4TB+ newspaper ecosystem between hosts, fixed
MySQL memory exhaustion, recovered a system after a security breach.

**Lead PHP Developer** — Kodezen · Dec 2023 to Nov 2024
High-scale WordPress e-commerce and LMS systems, with conditional pricing and
PCI-compliant recurring billing.

**PHP Developer** — Developer Look · Jul 2025 to Aug 2025

## Selected work

**Agentic Workflow Automation** — University of Warwick
Agentic LLM systems that plan, call tools and orchestrate multi-step tasks.
Retrieval grounding, evaluation harnesses, end-to-end process automation.

**RadInsight** — vision-language model
Fine-tuned Llama 3.2 Vision 11B with LoRA on 750k+ radiology image-text pairs.
ROUGE-L 0.78, BLEU-4 0.62, CIDEr 1.21, trained under 12GB VRAM.

**Gusher** — Go WebSocket pub/sub server, built as a lightweight Pusher
replacement. https://github.com/imerfanahmed/gusher

**AvroPHP** — Trie-based Bangla transliteration engine in PHP.
https://github.com/imerfanahmed/avro-php

## Stack

Applied AI — LLM architecture research, agentic systems, tool calling, RAG,
prompt engineering and evaluation, LoRA / QLoRA fine-tuning, MCP, solution
architecture.

Languages — PHP (Laravel), Go, Python, SQL, JavaScript.

Frontend — TALL stack, Tailwind, Alpine.js, Livewire, Vue, Blade, Vite.

Cloud and infrastructure — AWS (S3, EC2, Lambda, Aurora), Azure, Cloudflare,
Nginx, load balancing, DNS, Linux.

DevOps — Docker, Terraform, GitHub Actions, Bitbucket Pipelines, Git.

Data — MySQL, PostgreSQL, vector databases, knowledge graphs.

## Education

**MSc Cloud & Network Computing Engineering** — University of Staffordshire,
Feb 2026 to present

**BSc Computer Science & Engineering** — University of Dhaka, 2020 to 2025
CGPA 3.63 / 4.00

## Elsewhere

GitHub — https://github.com/imerfanahmed
LinkedIn — https://www.linkedin.com/in/imerfan
LeetCode — https://leetcode.com/u/imerfanahmed
Email — erfan.siam98@gmail.com

## This site

The portfolio and blog are an Astro project in [`site/`](site/), deployed to
GitHub Pages by the workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

All site content lives in
[`site/src/data/cv.ts`](site/src/data/cv.ts) — components are presentation
only. Blog posts are markdown files in
[`site/src/content/blog/`](site/src/content/blog/); add one, push, and it
publishes automatically. See [`site/README.md`](site/README.md) for the
content schemas and deployment notes.