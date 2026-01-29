# Projectwise.ai

> Build a business on open source. A directory of commercial-ready OSS projects with AI setup prompts, curated stacks, and a showcase of real businesses built on open source.

**Domain:** projectwise.ai (preferred) / projectwise.io (fallback)
**Stack:** Next.js 15 + Payload CMS 3.0 + PostgreSQL (Neon) + Vercel
**Twitter:** [@projectwise_in](https://twitter.com/projectwise_in)

---

## Documentation

| Doc | Description |
|-----|-------------|
| [Vision & Problem Statement](./docs/01-vision.md) | Why this exists, who it's for |
| [Market Research](./docs/02-market-research.md) | WordPress ecosystem, competitor analysis |
| [Architecture](./docs/03-architecture.md) | Tech stack, data models, API design |
| [Roadmap](./docs/04-roadmap.md) | Phased V1-V4 plan with weekly tasks |
| [Content Strategy](./docs/05-content-strategy.md) | SEO, social media, launch playbook |
| [Project Seed List](./docs/06-project-seed-list.md) | 100 curated OSS projects |
| [New Features](./docs/07-new-features.md) | AI Prompts, Showcase, Stacks specs |

---

## Implementation Plan

> Each item links to a GitHub issue with full details. Agents update both the issue and this checklist.
>
> **Status:** `[ ]` pending · `[~]` in progress · `[x]` done

### Setup

- [ ] **#1 — Initialize Next.js 15 + Payload CMS 3.0** · [Issue](../../issues/1)
  - [ ] Create Next.js 15 project with TypeScript and Tailwind CSS
  - [ ] Install and configure Payload CMS 3.0 inside `/app`
  - [ ] Set up PostgreSQL connection (Neon)
  - [ ] Configure ESLint, Prettier, project structure
  - [ ] Add `CLAUDE.md` / `AGENTS.md` for AI-assisted development

- [ ] **#2 — Configure Deployment** · [Issue](../../issues/2)
  - [ ] Vercel project setup with environment variables
  - [ ] Neon PostgreSQL provisioning (dev + production branches)
  - [ ] Custom domain configuration
  - [ ] CI/CD: build + lint on PR, deploy on merge to main

- [ ] **#3 — Define Core Payload Collections** · [Issue](../../issues/3)
  - [ ] Projects collection (name, slug, tagline, description, logo, tier, license, URLs, flags)
  - [ ] Categories collection (name, slug, description, icon)
  - [ ] Seed script for initial data
  - [ ] Admin panel configuration and access roles

### V1: MVP Directory

- [ ] **#4 — Build Project Listing Page** · [Issue](../../issues/4)
  - [ ] `/projects` route with grid/list view toggle
  - [ ] Filter by category, tier, license type
  - [ ] Search by project name
  - [ ] Pagination or infinite scroll
  - [ ] Sort by: featured, name, newest

- [ ] **#5 — Build Project Detail Page** · [Issue](../../issues/5)
  - [ ] `/projects/[slug]` route
  - [ ] Hero section: logo, name, tagline, tier badge, links
  - [ ] Overview: description, license, key features
  - [ ] Commercial readiness section (tier explanation)
  - [ ] Sidebar: quick stats, GitHub stars, links
  - [ ] SEO: meta tags, Open Graph, JSON-LD schema

- [ ] **#6 — Build Category Pages** · [Issue](../../issues/6)
  - [ ] `/categories/[slug]` route
  - [ ] Category description and icon
  - [ ] Filtered project grid for that category
  - [ ] Cross-links to related categories

- [ ] **#7 — Build Homepage** · [Issue](../../issues/7)
  - [ ] Hero section with value proposition
  - [ ] Featured projects (3-6 staff picks)
  - [ ] Category grid with project counts
  - [ ] "How it works" section
  - [ ] CTA for experts and operators
  - [ ] Latest additions section

- [ ] **#8 — Site-Wide Layout and Navigation** · [Issue](../../issues/8)
  - [ ] Responsive header with nav links and search
  - [ ] Footer with links, newsletter signup placeholder
  - [ ] Mobile hamburger menu
  - [ ] Breadcrumbs on inner pages
  - [ ] Dark/light mode toggle
  - [ ] 404 and error pages

- [ ] **#9 — Seed 20 Projects** · [Issue](../../issues/9)
  - [ ] Select top 20 from seed list (balanced across categories)
  - [ ] Write descriptions, taglines, feature lists for each
  - [ ] Collect logos and screenshots
  - [ ] Assign tiers (Tier 1, 2, or 3)
  - [ ] Create seed script or Payload migration

- [ ] **#10 — Programmatic SEO Pages** · [Issue](../../issues/10)
  - [ ] `/alternatives/[slug]` — "Open source alternative to [Product]"
  - [ ] Dynamic sitemap.xml generation
  - [ ] Meta tags and OG images for all page types
  - [ ] JSON-LD structured data (SoftwareApplication schema)
  - [ ] Robots.txt configuration

### V2: Contributors + Forms + AI Prompts

- [ ] **#11 — Expert Interest Form + Collection** · [Issue](../../issues/11)
  - [ ] Experts Payload collection (name, email, GitHub, skills, rate, availability)
  - [ ] "I can help with this project" form on project detail page
  - [ ] Form validation and submission handling
  - [ ] Admin review workflow (pending → verified → rejected)
  - [ ] Email notification on new submission

- [ ] **#12 — Operator Interest Form + Collection** · [Issue](../../issues/12)
  - [ ] Interests Payload collection (name, email, project, budget, timeline, message)
  - [ ] "I want to run this as SaaS" form on project detail page
  - [ ] Form validation and submission handling
  - [ ] Admin notification on new submission
  - [ ] Thank you / next steps page

- [ ] **#13 — AI Setup Prompts** · [Issue](../../issues/13)
  - [ ] Prompts Payload collection (project, type, title, prompt text, tested flag)
  - [ ] "Deploy with AI" section on project detail page
  - [ ] Three prompt types: Quick Start, Business Setup, Full Stack
  - [ ] Copy-to-clipboard functionality
  - [ ] Write and test prompts for all 20 seed projects

- [ ] **#14 — GitHub Contributors Integration** · [Issue](../../issues/14)
  - [ ] Fetch contributors via GitHub API for each project
  - [ ] Display contributor avatars on project detail page
  - [ ] Cache results to avoid rate limits
  - [ ] Link to contributor GitHub profiles

- [ ] **#15 — Newsletter Signup** · [Issue](../../issues/15)
  - [ ] Integrate Buttondown or ConvertKit
  - [ ] Email capture in footer and homepage CTA
  - [ ] Welcome email automation
  - [ ] Double opt-in flow

### V3: Ideas, Showcase, Stacks

- [ ] **#16 — Business Ideas Collection + Pages** · [Issue](../../issues/16)
  - [ ] Ideas Payload collection (title, project, description, target market, pricing, competitors, difficulty, MRR potential)
  - [ ] Ideas section on project detail page (3-5 per project)
  - [ ] `/ideas` index page with filtering
  - [ ] `/ideas/[slug]` detail page
  - [ ] Write 60-100 ideas across seed projects

- [ ] **#17 — Project Showcase + Submissions** · [Issue](../../issues/17)
  - [ ] Showcases Payload collection (name, URL, screenshot, project, industry, revenue, status)
  - [ ] "Built with [Project]" section on project detail page
  - [ ] Showcase submission form with screenshot upload
  - [ ] Admin review workflow (pending → approved → rejected)
  - [ ] `/showcase` global index page
  - [ ] `/projects/[slug]/showcase` per-project showcase page
  - [ ] "Staff Pick" featured badge

- [ ] **#18 — Curated Stacks + Pages** · [Issue](../../issues/18)
  - [ ] Stacks Payload collection (name, projects with roles, use case, cost, deploy prompt)
  - [ ] `/stacks` index page
  - [ ] `/stacks/[slug]` detail page with project list and deploy prompt
  - [ ] "Part of these stacks" section on project detail page
  - [ ] Create 5 initial stacks (E-commerce, SaaS Starter, Agency, Community, DevOps)

- [ ] **#19 — Project Interlinking + Relationships** · [Issue](../../issues/19)
  - [ ] ProjectRelationships Payload collection (projectA, projectB, type, description)
  - [ ] Relationship types: works-with, depends-on, alternative-to, extends
  - [ ] "Works Well With" section on project detail page
  - [ ] "Alternatives" section on project detail page
  - [ ] Bidirectional display (if A works-with B, show on both pages)

- [ ] **#20 — Seed Showcase Data** · [Issue](../../issues/20)
  - [ ] Collect 3-5 showcase entries per Tier 1 project from existing showcases
  - [ ] Sources: Next.js showcase, Tailwind showcase, Strapi showcase, Ghost explore
  - [ ] Screenshots and descriptions for each entry
  - [ ] Import via seed script or Payload admin

### V4: Launch Campaign

- [ ] **#21 — Seed 50 Projects + Full Content** · [Issue](../../issues/21)
  - [ ] Expand from 20 to 50 projects
  - [ ] AI prompts for all 50 projects
  - [ ] Business ideas for all 50 projects
  - [ ] Relationship mappings between all projects
  - [ ] Quality pass: descriptions, logos, screenshots

- [ ] **#22 — Analytics Setup** · [Issue](../../issues/22)
  - [ ] Integrate Plausible or Umami (self-hosted)
  - [ ] Track page views, top pages, referrers
  - [ ] Custom events: form submissions, prompt copies, search queries
  - [ ] Dashboard access for team

- [ ] **#23 — Performance Optimization + Launch Prep** · [Issue](../../issues/23)
  - [ ] Lighthouse score > 90 on all page types
  - [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
  - [ ] Image optimization (Next.js Image, WebP, lazy loading)
  - [ ] Bundle analysis and code splitting
  - [ ] Load testing with 100 concurrent users
  - [ ] Final QA pass across devices

---

## Dependency Graph

```
#1 Setup
├── #2 Deployment
└── #3 Collections
    ├── #4 Listings ──────┐
    ├── #5 Detail Page ───┤
    ├── #6 Categories ────┤── #7 Homepage
    ├── #8 Layout         │
    ├── #9 Seed 20 ───────┘
    └── #10 SEO Pages
                          V1 COMPLETE
    ├── #11 Experts       ┐
    ├── #12 Operators      │
    ├── #13 AI Prompts     ├── parallel
    ├── #14 GitHub API     │
    └── #15 Newsletter    ┘
                          V2 COMPLETE
    ├── #16 Ideas         ┐
    ├── #17 Showcase       │
    ├── #18 Stacks         ├── parallel
    ├── #19 Interlinking   │
    └── #20 Seed Showcase ┘
                          V3 COMPLETE
    ├── #21 Seed 50       ┐
    ├── #22 Analytics      ├── parallel
    └── #23 Performance   ┘
                          V4 LAUNCH
```

---

## For Claude Code Agents

When picking up an issue:

1. **Read the linked issue** for full requirements and acceptance criteria
2. **Create a feature branch** from `main`: `git checkout -b feat/issue-N-short-name`
3. **Reference docs** in `/docs` for architecture decisions and data models
4. **Update this README** — mark your item `[~]` when starting, `[x]` when PR is merged
5. **Comment on the issue** with progress updates
6. **PR description** should reference the issue: `Closes #N`

---

*Last updated: January 2026*
