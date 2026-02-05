# New Features: AI Prompts, Showcase, Stacks

> Three features that differentiate Projectwise from static directories like OpenAlternative.

---

## Table of Contents

1. [Feature A: AI Setup Prompts](#feature-a-ai-setup-prompts)
2. [Feature B: Project Showcase](#feature-b-project-showcase)
3. [Feature C: Stacks & Interlinking](#feature-c-stacks--interlinking)
4. [Data Models](#data-models)
5. [Page Designs](#page-designs)
6. [Phasing](#phasing)

---

## Feature A: AI Setup Prompts

### The Idea

Every project page includes a "Deploy with AI" section — copy-paste prompts for Claude Code, Cursor, and Codex that set up the project in a local folder, ready to customize and deploy.

This is the key differentiator: instead of just listing projects, we help people **actually start building** with them.

### Why This Works

- `AGENTS.md` is becoming the universal standard for AI-assisted project setup
- Cursor Directory (cursor.directory) has proven demand for framework-specific AI prompts
- Awesome CursorRules (github.com/PatrickJS/awesome-cursorrules) curates `.cursorrules` for many stacks
- The gap: nobody provides prompts scoped to **deploying OSS as a business**

### Prompt Types

Each project gets three prompt variants:

#### 1. Quick Start Prompt
> "Get this running locally in 5 minutes"

```markdown
## Quick Start — [Project Name]

Use this prompt with Claude Code, Cursor, or Codex:

---

Set up [Project Name] in a new folder called `my-[project]`.
Use Docker Compose for the application and PostgreSQL database.
Include a Caddy reverse proxy config for production.
Add a .env.example with all required environment variables documented.
Make sure the app runs on localhost:3000 after `docker compose up`.
```

#### 2. Business Setup Prompt
> "Deploy this as a SaaS you can sell"

```markdown
## Deploy as SaaS — [Project Name]

Use this prompt with Claude Code, Cursor, or Codex:

---

Set up [Project Name] as a multi-tenant SaaS in a new folder called `my-[project]-saas`.

Requirements:
- Docker Compose with [Project], PostgreSQL, Redis, and Caddy
- Multi-tenant configuration (subdomain-based routing)
- Stripe integration for billing (use test keys)
- Custom branding support (logo, colors, domain)
- Backup script for the database (daily cron)
- Production-ready .env.example with all variables documented
- README with deployment instructions for a VPS (Ubuntu 22.04)
```

#### 3. Full Stack Prompt
> "Complete business stack with complementary OSS"

```markdown
## Full Stack — [Project Name] + [Related Projects]

Use this prompt with Claude Code, Cursor, or Codex:

---

Set up a complete [use case] stack in a new folder called `my-[use-case]-stack`:

- [Project A] for [core function]
- [Project B] for [authentication]
- [Project C] for [email/notifications]
- Caddy as reverse proxy
- PostgreSQL as shared database

All services should run via Docker Compose.
Include inter-service networking so [Project A] can authenticate via [Project B].
Add a landing page with Next.js that connects to all services.
```

### Prompt Quality Standards

Each prompt must:

| Requirement | Why |
|-------------|-----|
| Work on first try | Trust is everything — broken prompts kill credibility |
| Be tool-agnostic | Should work with Claude Code, Cursor, Codex, or any LLM |
| Include Docker Compose | Consistent, reproducible setup |
| Have documented .env | No guessing at config |
| Be tested before publishing | We verify each prompt ourselves |

### How Prompts Are Stored

Prompts are content in Payload CMS, linked to projects:

```
Project Page
├── Overview
├── Features
├── Business Ideas
├── AI Setup Prompts        ← NEW
│   ├── Quick Start
│   ├── Business Setup
│   └── Full Stack
├── Showcase
└── Related Projects
```

### SEO Value

Each prompt creates targetable content:

- "how to deploy [project] with docker"
- "set up [project] as saas"
- "[project] self hosted setup guide"
- "deploy [project] on vps"

---

## Feature B: Project Showcase

### The Idea

A "Built With" gallery on each project page showing real businesses, sites, and apps built using that OSS project. Proves the commercial viability claim with real-world evidence.

### Research: How Others Do It

| Platform | Approach | Submissions | Quality |
|----------|----------|-------------|---------|
| **Next.js** | Curated by Vercel team | GitHub discussions | High (editorial) |
| **Tailwind CSS** | Curated, multiple screenshots | Invite-only | Very high |
| **Strapi** | Community via GitHub PRs | Open PRs | Medium |
| **Made with Tailwind** | Community-driven directory | Open form | Variable |

### Our Approach: Hybrid

1. **Seed with existing showcases** — Many OSS projects already have showcase pages. Scrape/curate the best entries as initial data.
2. **Community submissions** — Simple form: URL, screenshot, description, tech stack.
3. **Editorial quality control** — All submissions reviewed before publishing. Reject low-quality or spam.

### Showcase Entry Data

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | Business/project name |
| url | string | Yes | Live URL |
| screenshot | upload | Yes | Full-page or hero screenshot |
| description | string | Yes | What it does (max 250 chars) |
| project | relationship | Yes | Which OSS project it uses |
| additionalProjects | relationship[] | No | Other OSS projects in the stack |
| industry | select | No | SaaS, Agency, E-commerce, etc. |
| revenue | select | No | Pre-revenue, $1-10k, $10k-100k, $100k+ MRR |
| techStack | array | No | Other technologies used |
| submittedBy | string | Yes | Name or GitHub username |
| featured | boolean | No | Staff pick |
| status | select | Yes | pending, approved, rejected |

### Showcase Sources for Seeding

| OSS Project | Existing Showcase URL | Est. Entries |
|-------------|----------------------|--------------|
| Next.js | nextjs.org/showcase | 100+ |
| Tailwind CSS | tailwindcss.com/showcase | 200+ |
| Strapi | strapi.io/showcases | 50+ |
| Ghost | ghost.org/explore | 100+ |
| Payload CMS | payloadcms.com/case-studies | 20+ |
| Medusa | medusajs.com/showcase | 30+ |
| Cal.com | cal.com/customers | 10+ |

We don't copy all of these — we pick the best 3-5 per project that demonstrate commercial use.

### Page Structure

**Project detail page — Showcase section:**

```
## Built with [Project Name]

[Grid of 3-6 showcase entries]
- Screenshot thumbnail
- Name
- One-line description
- Industry tag

[View all →] (links to full showcase page)
```

**Dedicated showcase page:** `/projects/[slug]/showcase`

```
## Companies & Projects Built with [Project Name]

[Filter by: Industry | Revenue | Featured]

[Card grid with all approved entries]
```

**Global showcase page:** `/showcase`

```
## Built with Open Source

Browse real businesses built on commercial-ready open source.

[Filter by: Project | Industry | Revenue]

[All showcase entries across all projects]
```

### Submission Flow

```
User clicks "Submit your project" on any project page
  → Simple form (name, URL, screenshot, description)
  → Submission saved with status: "pending"
  → Admin reviews in Payload dashboard
  → If approved: appears on project page + global showcase
  → If featured: highlighted with "Staff Pick" badge
```

### Growth Loop

The showcase creates a self-reinforcing growth loop:

```
We feature a project
  → Businesses built on it submit to showcase
  → We share the showcase entries on Twitter
  → The businesses reshare (borrowed audience)
  → More builders discover Projectwise
  → More submissions
```

---

## Feature C: Stacks & Interlinking

### The Idea

Projects don't exist in isolation. A real deployment usually combines 3-5 OSS tools. We model these relationships and surface them as curated "stacks."

### Relationship Types

| Type | Description | Example |
|------|-------------|---------|
| **works-with** | Commonly used together | Medusa + MinIO (e-commerce + file storage) |
| **depends-on** | Technical dependency | Chatwoot depends on PostgreSQL + Redis |
| **alternative-to** | Same problem, different solution | Plausible ↔ Umami (both analytics) |
| **extends** | Plugin/addon relationship | WooCommerce extends WordPress |

### Curated Stacks

Pre-built combinations for common business use cases:

#### Example Stacks

**E-commerce Stack**
```
Medusa (storefront) + MinIO (file storage) + Authentik (auth)
+ Listmonk (email) + Plausible (analytics)

Use case: Run a headless e-commerce store
Estimated monthly cost: $20-50 (VPS)
```

**SaaS Starter Stack**
```
Next.js (frontend) + Payload CMS (backend/admin)
+ Authentik (auth) + Dub.co (link management)
+ PostHog (analytics) + Resend (email)

Use case: Launch a SaaS product
Estimated monthly cost: $15-30 (VPS)
```

**Agency Stack**
```
WordPress + WooCommerce (client sites)
+ Mautic (marketing automation) + Matomo (analytics)
+ Invoice Ninja (billing) + Chatwoot (support)

Use case: Run a digital agency on fully OSS tools
Estimated monthly cost: $30-60 (VPS)
```

**Community Platform Stack**
```
Ghost (content) + Rocket.Chat (messaging)
+ Cal.com (events/booking) + Formbricks (surveys)
+ Plausible (analytics)

Use case: Build a community with content, chat, and events
Estimated monthly cost: $25-45 (VPS)
```

### Stack Data Model

```typescript
// Stacks collection
{
  name: string;            // "E-commerce Stack"
  slug: string;
  description: richText;
  useCase: string;         // One-line use case
  projects: array [        // Ordered list of projects in the stack
    {
      project: relationship;
      role: string;        // "Storefront", "Authentication", etc.
    }
  ];
  estimatedCost: string;   // "$20-50/month"
  difficulty: select;      // Easy, Medium, Advanced
  deployPrompt: text;      // AI prompt to deploy the entire stack
  featured: boolean;
}

// ProjectRelationships collection
{
  projectA: relationship;
  projectB: relationship;
  type: select;            // works-with, depends-on, alternative-to, extends
  description: string;     // Why they're related
  bidirectional: boolean;  // true for works-with and alternative-to
}
```

### Page Structure

**Project detail page — Related section:**

```
## Works Well With
[3-4 related projects with relationship badges]

## Part of These Stacks
[Cards for stacks that include this project]

## Alternatives
[Other projects solving the same problem]
```

**Stack detail page:** `/stacks/[slug]`

```
## [Stack Name]

[Description]
[Visual diagram: Project A → Project B → Project C]

### Projects in This Stack
[Each project with its role, linked to project page]

### Deploy This Stack
[AI prompt to set up the entire stack]

### Estimated Cost
[Monthly VPS cost breakdown]
```

**Stacks index page:** `/stacks`

```
## Curated OSS Stacks

Pre-built combinations of open source tools for common use cases.

[Filter by: Use Case | Difficulty | Cost]

[Stack cards in grid]
```

### Interlinking Benefits

| Benefit | How |
|---------|-----|
| **SEO** | Internal links boost page authority; stack pages target "best open source stack for [use case]" |
| **Engagement** | Users discover more projects, spend more time on site |
| **AI Prompts** | Stack prompts are the most valuable — deploy 5 projects at once |
| **Differentiation** | No other directory offers curated, deployable stacks |

### Data Sources for Relationships

| Source | What We Get |
|--------|-------------|
| **Manual curation** | High-quality "works-with" relationships |
| **Docker Compose files** | What services projects depend on |
| **GitHub README** | Often mentions complementary tools |
| **Libraries.io API** | Package-level dependencies (npm, pip, etc.) |
| **awesome-selfhosted** | Cross-referenced categories |

---

## Data Models

### New Payload Collections (Summary)

| Collection | Phase | Fields |
|------------|-------|--------|
| **Prompts** | V2 | project, type (quick/business/stack), content, tested |
| **Showcases** | V3 | name, url, screenshot, project, industry, revenue, status |
| **Stacks** | V3 | name, projects[], useCase, cost, deployPrompt |
| **ProjectRelationships** | V3 | projectA, projectB, type, description |

### Schema Additions

```typescript
// Prompts collection
{
  project: relationship;          // Which project this prompt is for
  type: select;                   // 'quick-start' | 'business-setup' | 'full-stack'
  title: string;                  // "Deploy Listmonk as Email SaaS"
  prompt: textarea;               // The actual AI prompt
  tools: select[];                // 'claude-code' | 'cursor' | 'codex' | 'any'
  stack: relationship[];          // Related projects (for full-stack prompts)
  tested: boolean;                // Has this been verified to work?
  testedDate: date;
  difficulty: select;             // Easy, Medium, Advanced
}

// Showcases collection
{
  name: string;
  url: string;
  screenshot: upload;
  description: string;            // Max 250 chars
  project: relationship;          // Primary OSS project
  additionalProjects: relationship[];
  industry: select;               // SaaS, Agency, E-commerce, Education, etc.
  revenue: select;                // Pre-revenue, $1-10k, $10k-100k, $100k+ MRR
  techStack: array;               // Other technologies
  submittedBy: string;
  email: string;                  // For follow-up
  featured: boolean;
  status: select;                 // pending, approved, rejected
}

// Stacks collection
{
  name: string;
  slug: string;
  description: richText;
  useCase: string;
  projects: array [{
    project: relationship;
    role: string;
  }];
  estimatedCost: string;
  difficulty: select;
  deployPrompt: textarea;         // AI prompt for entire stack
  featured: boolean;
}

// ProjectRelationships collection
{
  projectA: relationship;
  projectB: relationship;
  type: select;                   // works-with, depends-on, alternative-to, extends
  description: string;
  bidirectional: boolean;
}
```

---

## Page Designs

### Updated Project Detail Page Layout

```
/projects/[slug]

├── Hero (name, logo, tagline, tier badge)
├── Overview (description, license, links)
├── Key Features
├── Commercial Readiness (tier explanation)
│
├── 🆕 Deploy with AI
│   ├── Quick Start prompt (copy button)
│   ├── Business Setup prompt (copy button)
│   └── Full Stack prompt (copy button, links to stack)
│
├── Business Ideas (3-5 ideas)
│
├── 🆕 Built With [Project]
│   ├── Featured showcase entries (3-6 cards)
│   └── "View all" → /projects/[slug]/showcase
│   └── "Submit yours" → submission form
│
├── 🆕 Works Well With
│   ├── Related projects (works-with, depends-on)
│   └── Part of stacks (link to stack pages)
│
├── 🆕 Alternatives
│   └── Other projects solving same problem
│
├── Contributors (GitHub)
└── Interest Forms (expert/operator)
```

### New Top-Level Pages

| Page | URL | Description |
|------|-----|-------------|
| Showcase index | `/showcase` | All approved showcase entries |
| Stacks index | `/stacks` | All curated stacks |
| Stack detail | `/stacks/[slug]` | Individual stack page |
| Project showcase | `/projects/[slug]/showcase` | All showcases for one project |

---

## Phasing

### V2 Addition: AI Setup Prompts

| Task | Priority |
|------|----------|
| Add Prompts collection to Payload | P1 |
| Build "Deploy with AI" section on project pages | P1 |
| Write + test prompts for first 20 projects (quick-start only) | P1 |
| Add copy-to-clipboard functionality | P1 |
| Write business-setup prompts for Tier 1 projects | P2 |

### V3 Additions: Showcase + Stacks

| Task | Priority |
|------|----------|
| Add Showcases collection to Payload | P1 |
| Build showcase submission form | P1 |
| Seed showcase with entries from existing project showcases | P1 |
| Add Stacks collection to Payload | P1 |
| Create 5 curated stacks with deploy prompts | P1 |
| Add ProjectRelationships collection | P2 |
| Build stacks index + detail pages | P2 |
| Write full-stack AI prompts for each stack | P2 |
| Build global `/showcase` page | P2 |

---

## Competitive Advantage

| Feature | OpenAlternative | Awesome-Selfhosted | **Projectwise** |
|---------|----------------|---------------------|-----------------|
| Project listings | Yes | Yes | Yes |
| AI setup prompts | No | No | **Yes** |
| Showcase gallery | No | No | **Yes** |
| Curated stacks | Has /stacks page | No | **Yes (deployable)** |
| Deploy prompts | No | No | **Yes** |
| Business ideas | No | No | Yes |
| Expert network | No | No | Yes |

The combination of **"here's a project" + "here's proof others built with it" + "here's an AI prompt to start right now"** is unique. No other directory closes the gap from discovery to deployment.

---

*Last updated: January 2026*
