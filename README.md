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

- [ ] **Initialize Next.js 15 + Payload CMS 3.0** · [#7](https://github.com/Projectwise/projectwise-app/issues/7)
  - [ ] Create Next.js 15 project with TypeScript and Tailwind CSS
  - [ ] Install and configure Payload CMS 3.0 inside `/app`
  - [ ] Set up PostgreSQL connection (Neon)
  - [ ] Configure ESLint, Prettier, project structure
  - [ ] Add `CLAUDE.md` / `AGENTS.md` for AI-assisted development

- [ ] **Configure Deployment** · [#8](https://github.com/Projectwise/projectwise-app/issues/8)
  - [ ] Vercel project setup with environment variables
  - [ ] Neon PostgreSQL provisioning (dev + production branches)
  - [ ] Custom domain configuration
  - [ ] CI/CD: build + lint on PR, deploy on merge to main

- [ ] **Define Core Payload Collections** · [#9](https://github.com/Projectwise/projectwise-app/issues/9)
  - [ ] Projects collection (name, slug, tagline, description, logo, tier, license, URLs, flags)
  - [ ] Categories collection (name, slug, description, icon)
  - [ ] Seed script for initial data
  - [ ] Admin panel configuration and access roles

### V1: MVP Directory

- [ ] **Build Project Listing Page** · [#10](https://github.com/Projectwise/projectwise-app/issues/10)
  - [ ] `/projects` route with grid/list view toggle
  - [ ] Filter by category, tier, license type
  - [ ] Search by project name
  - [ ] Pagination or infinite scroll
  - [ ] Sort by: featured, name, newest

- [ ] **Build Project Detail Page** · [#11](https://github.com/Projectwise/projectwise-app/issues/11)
  - [ ] `/projects/[slug]` route
  - [ ] Hero section: logo, name, tagline, tier badge, links
  - [ ] Overview: description, license, key features
  - [ ] Commercial readiness section (tier explanation)
  - [ ] Sidebar: quick stats, GitHub stars, links
  - [ ] SEO: meta tags, Open Graph, JSON-LD schema

- [ ] **Build Category Pages** · [#12](https://github.com/Projectwise/projectwise-app/issues/12)
  - [ ] `/categories/[slug]` route
  - [ ] Category description and icon
  - [ ] Filtered project grid for that category
  - [ ] Cross-links to related categories

- [ ] **Build Homepage** · [#13](https://github.com/Projectwise/projectwise-app/issues/13)
  - [ ] Hero section with value proposition
  - [ ] Featured projects (3-6 staff picks)
  - [ ] Category grid with project counts
  - [ ] "How it works" section
  - [ ] CTA for experts and operators
  - [ ] Latest additions section

- [ ] **Site-Wide Layout and Navigation** · [#14](https://github.com/Projectwise/projectwise-app/issues/14)
  - [ ] Responsive header with nav links and search
  - [ ] Footer with links, newsletter signup placeholder
  - [ ] Mobile hamburger menu
  - [ ] Breadcrumbs on inner pages
  - [ ] Dark/light mode toggle
  - [ ] 404 and error pages

- [ ] **Seed 20 Projects** · [#15](https://github.com/Projectwise/projectwise-app/issues/15)
  - [ ] Select top 20 from seed list (balanced across categories)
  - [ ] Write descriptions, taglines, feature lists for each
  - [ ] Collect logos and screenshots
  - [ ] Assign tiers (Tier 1, 2, or 3)
  - [ ] Create seed script or Payload migration

- [ ] **Programmatic SEO Pages** · [#16](https://github.com/Projectwise/projectwise-app/issues/16)
  - [ ] `/alternatives/[slug]` — "Open source alternative to [Product]"
  - [ ] Dynamic sitemap.xml generation
  - [ ] Meta tags and OG images for all page types
  - [ ] JSON-LD structured data (SoftwareApplication schema)
  - [ ] Robots.txt configuration

### V2: Contributors + Forms + AI Prompts

- [ ] **Expert Interest Form + Collection** · [#17](https://github.com/Projectwise/projectwise-app/issues/17)
  - [ ] Experts Payload collection (name, email, GitHub, skills, rate, availability)
  - [ ] "I can help with this project" form on project detail page
  - [ ] Form validation and submission handling
  - [ ] Admin review workflow (pending → verified → rejected)
  - [ ] Email notification on new submission

- [ ] **Operator Interest Form + Collection** · [#18](https://github.com/Projectwise/projectwise-app/issues/18)
  - [ ] Interests Payload collection (name, email, project, budget, timeline, message)
  - [ ] "I want to run this as SaaS" form on project detail page
  - [ ] Form validation and submission handling
  - [ ] Admin notification on new submission
  - [ ] Thank you / next steps page

- [ ] **AI Setup Prompts** · [#19](https://github.com/Projectwise/projectwise-app/issues/19)
  - [ ] Prompts Payload collection (project, type, title, prompt text, tested flag)
  - [ ] "Deploy with AI" section on project detail page
  - [ ] Three prompt types: Quick Start, Business Setup, Full Stack
  - [ ] Copy-to-clipboard functionality
  - [ ] Write and test prompts for all 20 seed projects

- [ ] **GitHub Contributors Integration** · [#20](https://github.com/Projectwise/projectwise-app/issues/20)
  - [ ] Fetch contributors via GitHub API for each project
  - [ ] Display contributor avatars on project detail page
  - [ ] Cache results to avoid rate limits
  - [ ] Link to contributor GitHub profiles

- [ ] **Newsletter Signup** · [#21](https://github.com/Projectwise/projectwise-app/issues/21)
  - [ ] Integrate Buttondown or ConvertKit
  - [ ] Email capture in footer and homepage CTA
  - [ ] Welcome email automation
  - [ ] Double opt-in flow

### V3: Ideas, Showcase, Stacks

- [ ] **Business Ideas Collection + Pages** · [#22](https://github.com/Projectwise/projectwise-app/issues/22)
  - [ ] Ideas Payload collection (title, project, description, target market, pricing, competitors, difficulty, MRR potential)
  - [ ] Ideas section on project detail page (3-5 per project)
  - [ ] `/ideas` index page with filtering
  - [ ] `/ideas/[slug]` detail page
  - [ ] Write 60-100 ideas across seed projects

- [ ] **Project Showcase + Submissions** · [#23](https://github.com/Projectwise/projectwise-app/issues/23)
  - [ ] Showcases Payload collection (name, URL, screenshot, project, industry, revenue, status)
  - [ ] "Built with [Project]" section on project detail page
  - [ ] Showcase submission form with screenshot upload
  - [ ] Admin review workflow (pending → approved → rejected)
  - [ ] `/showcase` global index page
  - [ ] `/projects/[slug]/showcase` per-project showcase page
  - [ ] "Staff Pick" featured badge

- [ ] **Curated Stacks + Pages** · [#24](https://github.com/Projectwise/projectwise-app/issues/24)
  - [ ] Stacks Payload collection (name, projects with roles, use case, cost, deploy prompt)
  - [ ] `/stacks` index page
  - [ ] `/stacks/[slug]` detail page with project list and deploy prompt
  - [ ] "Part of these stacks" section on project detail page
  - [ ] Create 5 initial stacks (E-commerce, SaaS Starter, Agency, Community, DevOps)

- [ ] **Project Interlinking + Relationships** · [#25](https://github.com/Projectwise/projectwise-app/issues/25)
  - [ ] ProjectRelationships Payload collection (projectA, projectB, type, description)
  - [ ] Relationship types: works-with, depends-on, alternative-to, extends
  - [ ] "Works Well With" section on project detail page
  - [ ] "Alternatives" section on project detail page
  - [ ] Bidirectional display (if A works-with B, show on both pages)

- [ ] **Seed Showcase Data** · [#26](https://github.com/Projectwise/projectwise-app/issues/26)
  - [ ] Collect 3-5 showcase entries per Tier 1 project from existing showcases
  - [ ] Sources: Next.js showcase, Tailwind showcase, Strapi showcase, Ghost explore
  - [ ] Screenshots and descriptions for each entry
  - [ ] Import via seed script or Payload admin

### V4: Launch Campaign

- [ ] **Seed 50 Projects + Full Content** · [#27](https://github.com/Projectwise/projectwise-app/issues/27)
  - [ ] Expand from 20 to 50 projects
  - [ ] AI prompts for all 50 projects
  - [ ] Business ideas for all 50 projects
  - [ ] Relationship mappings between all projects
  - [ ] Quality pass: descriptions, logos, screenshots

- [ ] **Analytics Setup** · [#28](https://github.com/Projectwise/projectwise-app/issues/28)
  - [ ] Integrate Plausible or Umami (self-hosted)
  - [ ] Track page views, top pages, referrers
  - [ ] Custom events: form submissions, prompt copies, search queries
  - [ ] Dashboard access for team

- [ ] **Performance Optimization + Launch Prep** · [#29](https://github.com/Projectwise/projectwise-app/issues/29)
  - [ ] Lighthouse score > 90 on all page types
  - [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
  - [ ] Image optimization (Next.js Image, WebP, lazy loading)
  - [ ] Bundle analysis and code splitting
  - [ ] Load testing with 100 concurrent users
  - [ ] Final QA pass across devices

---

## Dependency Graph

```
#7 Setup
├── #8 Deployment
└── #9 Collections
    ├── #10 Listings ─────┐
    ├── #11 Detail Page ──┤
    ├── #12 Categories ───┤── #13 Homepage
    ├── #14 Layout        │
    ├── #15 Seed 20 ──────┘
    └── #16 SEO Pages
                          V1 COMPLETE
    ├── #17 Experts       ┐
    ├── #18 Operators      │
    ├── #19 AI Prompts     ├── parallel
    ├── #20 GitHub API     │
    └── #21 Newsletter    ┘
                          V2 COMPLETE
    ├── #22 Ideas         ┐
    ├── #23 Showcase       │
    ├── #24 Stacks         ├── parallel
    ├── #25 Interlinking   │
    └── #26 Seed Showcase ┘
                          V3 COMPLETE
    ├── #27 Seed 50       ┐
    ├── #28 Analytics      ├── parallel
    └── #29 Performance   ┘
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
