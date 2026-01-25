# Projectwise 2026: Platform Modernization Plan

> **Mission:** Build a business on open source — connecting commercial-ready open source software with the experts who can deploy it.

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [The Evolution](#the-evolution)
3. [Platform Architecture](#platform-architecture)
4. [Tech Stack](#tech-stack)
5. [Data Model](#data-model)
6. [Features & Pages](#features--pages)
7. [Content Strategy](#content-strategy)
8. [SEO Strategy](#seo-strategy)
9. [Launch Plan](#launch-plan)
10. [Revenue Model](#revenue-model)
11. [Appendix: Project Seed List](#appendix-project-seed-list)

---

## Executive Summary

### What is Projectwise?

Projectwise is a curated directory of **commercial-ready open source software** — projects you can self-host, white-label, and build a business on. It connects three audiences:

1. **Projects** — Open source software with permissive licenses and commercial potential
2. **Experts** — Contributors and developers who can deploy/customize these projects
3. **Operators** — Entrepreneurs and agencies who want to run OSS as SaaS businesses

### Why Now?

- **Open source maintainer crisis:** 60% of maintainers are unpaid, 44% cite burnout ([source](https://byteiota.com/open-source-maintainer-crisis-60-unpaid-burnout-hits-44/))
- **AI disruption:** Traditional teaching/Stack Overflow traffic declining; developers need new income streams
- **Proven model:** WordPress ecosystem is worth $600B+ with hosting, agencies, and developers as layers
- **Market validation:** OpenAlternative reached 100k visitors in week 1, now 1M+ annually, $3.5k/month revenue

### The Opportunity

No platform currently connects:
- Commercial-ready OSS projects (with white-label support)
- Verified contributors who can implement them
- Entrepreneurs who want to build businesses on top

Projectwise fills this gap.

---

## The Evolution

### Original Projectwise (2017-2018)

> "Open source needs better design workflows. Find open source projects and help them improve their user interface and experience."

| Aspect | 2017 Version |
|--------|--------------|
| **Problem** | OSS projects need design help |
| **Solution** | Directory to connect designers with projects |
| **Tech** | React 16 + Redux + Express + MongoDB |
| **Status** | Functional but outdated |

### New Projectwise (2026)

> "Build a business on open source. Find commercial-ready software and the experts who can deploy it."

| Aspect | 2026 Version |
|--------|--------------|
| **Problem** | OSS needs sustainable business models |
| **Solution** | Marketplace connecting projects, experts, and operators |
| **Tech** | Next.js 15 + Payload CMS + PostgreSQL |
| **Model** | Directory → Interest forms → Job board → Marketplace |

---

## Platform Architecture

### Two-Repository Structure

We maintain separation between frontend and backend for flexibility and independent scaling.

```
┌─────────────────────────────────────────────────────────────────────┐
│                         PROJECTWISE PLATFORM                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   REPO 1: projectwise-app (Frontend)                                │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │  Next.js 15 (App Router)                                    │   │
│   │  • Server-side rendering for SEO                            │   │
│   │  • Static generation for programmatic pages                 │   │
│   │  • Tailwind CSS + shadcn/ui                                 │   │
│   │  • Fetches data from CMS API                                │   │
│   │  • Deployed on Vercel                                       │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              │ REST/GraphQL API                     │
│                              ▼                                      │
│   REPO 2: projectwise-server (Backend/CMS)                          │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │  Payload CMS 3.0                                            │   │
│   │  • Headless CMS with admin UI                               │   │
│   │  • TypeScript-native, code-first config                     │   │
│   │  • PostgreSQL database                                      │   │
│   │  • REST + GraphQL APIs auto-generated                       │   │
│   │  • Media handling (screenshots, logos)                      │   │
│   │  • Deployed on Railway/Render                               │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │  PostgreSQL Database                                        │   │
│   │  • Projects, Categories, Experts, Jobs, etc.                │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│   EXTERNAL INTEGRATIONS                                             │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │  • GitHub API: Stars, contributors, last commit             │   │
│   │  • Screenshot API: Landing page captures                    │   │
│   │  • Stripe Connect: Revenue verification (future)            │   │
│   │  • Formspree/Loops: Email capture                           │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Why Payload CMS?

After evaluating Strapi, Directus, and Payload ([comparison](https://www.glukhov.org/post/2025/11/headless-cms-comparison-strapi-directus-payload/)):

| CMS | Pros | Cons |
|-----|------|------|
| **Strapi** | Mature, large community, 60k+ stars | Role limits on free tier, heavier |
| **Directus** | Database-agnostic, great permissions | More complex setup, developer-oriented |
| **Payload** | TypeScript-native, Next.js integration, code-first | Newer, smaller community |

**Recommendation: Payload CMS 3.0**

- Built on Next.js — same stack as frontend
- TypeScript-native — type safety across the full stack
- Code-first configuration — version-controlled schema
- Self-hostable — no vendor lock-in
- Admin UI included — non-technical team can manage content

### Future: Monorepo Migration

After MVP validation, consider migrating to a Turborepo monorepo:

```
projectwise/
├── apps/
│   ├── web/          # Next.js frontend
│   └── cms/          # Payload CMS
├── packages/
│   ├── ui/           # Shared components
│   ├── db/           # Database schema
│   └── config/       # Shared config
└── turbo.json
```

---

## Tech Stack

### Frontend (projectwise-app)

| Layer | Technology | Reason |
|-------|------------|--------|
| **Framework** | Next.js 15 (App Router) | SSR/SSG for SEO, React Server Components |
| **Language** | TypeScript 5.x | Type safety, better DX |
| **Styling** | Tailwind CSS 4 + shadcn/ui | Rapid development, consistent design |
| **State** | TanStack Query | Server state management, caching |
| **Forms** | React Hook Form + Zod | Validation, type-safe forms |
| **Analytics** | Plausible (self-hosted) | Privacy-friendly, dogfooding |
| **Deployment** | Vercel | Free tier, instant deploys, edge functions |

### Backend (projectwise-server)

| Layer | Technology | Reason |
|-------|------------|--------|
| **CMS** | Payload CMS 3.0 | Headless, TypeScript, Next.js native |
| **Database** | PostgreSQL | Relational, robust, free on Supabase/Railway |
| **API** | REST + GraphQL (auto-generated) | Flexibility for frontend |
| **Auth** | Payload built-in + GitHub OAuth | Secure, simple |
| **Media** | Payload Media + Cloudinary | Image optimization, CDN |
| **Deployment** | Railway or Render | Simple, affordable |

### External Services

| Service | Purpose | Cost |
|---------|---------|------|
| **GitHub API** | Fetch stars, contributors, commits | Free |
| **ScreenshotOne / Urlbox** | Capture landing page screenshots | ~$20/mo |
| **Formspree or Loops** | Email capture from interest forms | Free tier |
| **Stripe Connect** | Revenue verification (future) | Usage-based |
| **Vercel** | Frontend hosting | Free tier |
| **Railway** | Backend hosting | $5/mo starter |

---

## Data Model

### Core Collections (Payload CMS)

```typescript
// ============================================
// PROJECTS COLLECTION
// ============================================
interface Project {
  id: string
  slug: string                    // URL-friendly: "plausible-analytics"

  // Basic Info
  name: string                    // "Plausible Analytics"
  tagline: string                 // "Simple, privacy-friendly analytics"
  description: string             // Rich text, detailed description
  logo: Media                     // Uploaded logo image
  screenshot: Media               // Landing page screenshot (auto-captured)

  // Links
  website_url: string
  github_url: string
  docs_url?: string
  demo_url?: string

  // Classification
  categories: Category[]          // Many-to-many
  alternatives_to: string[]       // ["Google Analytics", "Mixpanel"]

  // License & Commercial Readiness
  license: 'MIT' | 'Apache-2.0' | 'BSD-3-Clause' | 'AGPL-3.0' | 'ISC' | 'Other'
  license_url?: string
  tier: 1 | 2 | 3                 // Commercial readiness tier

  // Commercial Features
  has_white_label: boolean
  has_multi_tenancy: boolean
  has_official_support: boolean
  has_cloud_version: boolean
  pricing_url?: string

  // Deployment
  deploy_options: {
    docker: boolean
    docker_compose_url?: string
    coolify: boolean
    coolify_template_url?: string
    railway: boolean
    railway_template_url?: string
    elestio: boolean
    elestio_url?: string
  }
  estimated_hosting_cost?: string  // "$5-20/month"

  // GitHub Stats (auto-synced)
  github_stats: {
    stars: number
    forks: number
    open_issues: number
    last_commit: Date
    language: string
    contributors_count: number
  }

  // Contributors (auto-synced from GitHub)
  contributors: Contributor[]

  // Metadata
  featured: boolean
  status: 'draft' | 'published' | 'archived'
  created_at: Date
  updated_at: Date
}

// ============================================
// CATEGORIES COLLECTION
// ============================================
interface Category {
  id: string
  slug: string                    // "analytics"
  name: string                    // "Analytics"
  description: string
  icon?: string                   // Lucide icon name
  projects_count: number          // Computed
}

// ============================================
// CONTRIBUTORS COLLECTION
// ============================================
interface Contributor {
  id: string
  github_username: string
  github_id: number
  avatar_url: string
  profile_url: string

  // Stats per project
  project_contributions: {
    project: Project
    commits: number
    additions: number
    deletions: number
    is_maintainer: boolean
  }[]

  // Expert profile (claimed)
  is_claimed: boolean             // Has the person signed up?
  expert_profile?: Expert
}

// ============================================
// EXPERTS COLLECTION
// ============================================
interface Expert {
  id: string

  // Basic Info
  name: string
  email: string
  avatar: Media
  bio: string

  // Links
  github_url: string
  linkedin_url?: string
  website_url?: string
  calendly_url?: string

  // Expertise
  projects_expertise: Project[]   // Projects they can implement
  experience_level: 'contributor' | 'expert' | 'maintainer'

  // Availability
  status: 'available' | 'busy' | 'not_available'
  hourly_rate?: number
  location: string
  timezone: string
  languages: string[]             // ["English", "Spanish"]

  // Verification
  verified_contributor: boolean   // Linked to GitHub contributions
  verified_at?: Date

  // Stats
  implementations_count: number

  // Metadata
  status: 'pending' | 'approved' | 'rejected'
}

// ============================================
// JOBS COLLECTION (Job Board)
// ============================================
interface Job {
  id: string

  // Basic Info
  title: string                   // "Deploy Plausible for Marketing Agency"
  description: string

  // Project
  project: Project

  // Posted By
  posted_by: {
    name: string
    email: string
    company?: string
    location: string
  }

  // Requirements
  job_type: 'one_time' | 'ongoing' | 'full_time'
  budget_type: 'fixed' | 'hourly' | 'negotiable'
  budget_range?: {
    min: number
    max: number
    currency: string
  }

  // Details
  requirements: string[]
  timeline?: string
  remote_ok: boolean

  // Status
  status: 'open' | 'in_progress' | 'filled' | 'closed'
  applications_count: number

  // Metadata
  created_at: Date
  expires_at?: Date
}

// ============================================
// INTEREST FORMS (Waitlist)
// ============================================
interface ExpertInterest {
  id: string
  name: string
  email: string
  github_username: string
  projects_interested: string[]   // Project names
  experience: string
  submitted_at: Date
  status: 'new' | 'contacted' | 'converted'
}

interface OperatorInterest {
  id: string
  name: string
  email: string
  company?: string
  project_interested: string
  location: string
  use_case: string
  submitted_at: Date
  status: 'new' | 'contacted' | 'converted'
}

// ============================================
// ALTERNATIVES COLLECTION (For pSEO)
// ============================================
interface Alternative {
  id: string
  slug: string                    // "google-analytics"
  name: string                    // "Google Analytics"
  description: string
  logo?: Media
  website_url: string
  pricing?: string                // "Free - $150k/year"
  projects: Project[]             // OSS alternatives to this
}
```

---

## Features & Pages

### Phase 1: MVP Directory (Weeks 1-2)

| Page | URL | Description |
|------|-----|-------------|
| **Homepage** | `/` | Hero + featured projects + categories |
| **Projects List** | `/projects` | All projects, filterable |
| **Project Detail** | `/projects/[slug]` | Full project info + contributors |
| **Categories** | `/category/[slug]` | Projects by category (pSEO) |
| **Alternatives** | `/alternative/[slug]` | OSS alternatives to X (pSEO) |
| **About** | `/about` | Mission, story, team |
| **Submit Project** | `/submit` | Form to suggest new projects |

### Phase 2: Expert Network (Weeks 3-4)

| Page | URL | Description |
|------|-----|-------------|
| **Experts List** | `/experts` | Browse verified experts |
| **Expert Profile** | `/experts/[username]` | Expert details + projects |
| **Join as Expert** | `/experts/join` | Interest form + GitHub connect |
| **Claim Profile** | `/claim` | Contributors claim their profile |

### Phase 3: Job Board (Weeks 5-6)

| Page | URL | Description |
|------|-----|-------------|
| **Jobs List** | `/jobs` | Open implementation jobs |
| **Job Detail** | `/jobs/[id]` | Job details + apply |
| **Post a Job** | `/jobs/post` | Form to post implementation job |
| **My Applications** | `/dashboard/applications` | Expert's applications |

### Phase 4: Operator Dashboard (Weeks 7-8)

| Page | URL | Description |
|------|-----|-------------|
| **Operator Signup** | `/operators/join` | Interest form for operators |
| **Operator Directory** | `/operators` | People running OSS as SaaS |
| **Revenue Verification** | `/operators/verify` | Connect Stripe for verified MRR |

---

## Content Strategy

### Project Content (100 Projects Target)

Each project page needs:

1. **Hero Section**
   - Logo + name + tagline
   - Screenshot (auto-captured)
   - Key stats (stars, license, last update)
   - CTA buttons (Website, GitHub, Deploy)

2. **Overview**
   - What it does (2-3 paragraphs)
   - What SaaS it replaces
   - Why choose open source version

3. **Commercial Readiness**
   - Tier badge (1/2/3)
   - White-label support (yes/no)
   - Multi-tenancy (yes/no)
   - Official support available (yes/no)

4. **Deployment**
   - One-click deploy buttons
   - Docker instructions
   - Estimated hosting cost

5. **Contributors/Experts**
   - Top contributors from GitHub
   - Claimed expert profiles
   - "Become an expert" CTA

6. **Alternatives Comparison**
   - Proprietary alternatives with pricing
   - Feature comparison table

### Screenshot Automation

Like OpenAlternative, automatically capture screenshots:

```typescript
// Using ScreenshotOne API
async function captureScreenshot(url: string): Promise<string> {
  const response = await fetch(
    `https://api.screenshotone.com/take?url=${encodeURIComponent(url)}&viewport_width=1280&viewport_height=800&format=webp&access_key=${API_KEY}`
  )
  // Upload to Cloudinary/Payload media
  return uploadedUrl
}

// Cron job: Update screenshots weekly
```

### Content Sources

| Source | Data |
|--------|------|
| GitHub API | Stars, forks, contributors, languages, last commit |
| Project website | Description, pricing, features (manual + AI assist) |
| README.md | Installation, features, screenshots |
| ScreenshotOne | Automated landing page captures |

---

## SEO Strategy

### Programmatic SEO Pages

Following OpenAlternative's playbook:

| Page Type | Template | Count | Target Keywords |
|-----------|----------|-------|-----------------|
| **Projects** | `/projects/[slug]` | 100 | "[project name] open source" |
| **Categories** | `/category/[slug]` | 15 | "open source [category] software" |
| **Alternatives** | `/alternative/[slug]` | 50 | "[saas] open source alternative" |
| **Licenses** | `/license/[type]` | 6 | "[license] licensed software" |
| **Stacks** | `/stack/[tech]` | 20 | "open source [tech] projects" |
| **Use Cases** | `/for/[usecase]` | 10 | "white label software for [usecase]" |
| **Total** | - | **~200** | - |

### Meta Tags Template

```html
<!-- Homepage -->
<title>Projectwise | Build a Business on Open Source</title>
<meta name="description" content="Curated directory of 100+ commercial-ready open source projects. Find white-label software, connect with verified experts, launch your SaaS business.">

<!-- Project Page -->
<title>{name} - Open Source Alternative to {alternative} | Projectwise</title>
<meta name="description" content="{name} is an open source {category} with {stars}+ stars. {license} license, self-hostable, {white_label ? 'white-label ready' : 'customizable'}. Find experts to deploy it.">

<!-- Category Page -->
<title>Open Source {category} Software - {count} Projects | Projectwise</title>
<meta name="description" content="Compare {count} open source {category} tools you can self-host and white-label. MIT, Apache, BSD licensed. Build a business on open source.">

<!-- Alternative Page -->
<title>{count} Open Source Alternatives to {saas} | Projectwise</title>
<meta name="description" content="Looking for a {saas} alternative? Compare {count} open source options you can self-host. Own your data, save money, build a business.">
```

### Technical SEO

- [ ] XML Sitemap (auto-generated)
- [ ] robots.txt
- [ ] Canonical URLs
- [ ] Open Graph images (auto-generated)
- [ ] JSON-LD structured data
- [ ] Core Web Vitals optimization

---

## Launch Plan

### Pre-Launch (Week 1-2)

| Day | Task |
|-----|------|
| 1 | Set up Next.js frontend repo |
| 2 | Set up Payload CMS backend repo |
| 3 | Define collections, seed 30 projects |
| 4 | Build homepage + project list + detail pages |
| 5 | Build category + alternative pages (pSEO) |
| 6 | Add interest forms (Expert + Operator) |
| 7 | SEO optimization, sitemap, meta tags |
| 8-10 | Add 70 more projects (total 100) |
| 11 | Deploy frontend to Vercel, backend to Railway |
| 12 | Screenshot automation, final testing |
| 13 | Soft launch to friends/community |
| 14 | Collect feedback, fix issues |

### Launch Week (Week 3)

| Day | Channel | Action |
|-----|---------|--------|
| Mon | Setup | Prepare all launch assets |
| Tue | Product Hunt | Submit listing (schedule for Wed) |
| Wed | Product Hunt | Launch day, engage with comments |
| Wed | Hacker News | "Show HN: Projectwise - Build a business on open source" |
| Wed | Twitter/X | Thread about the project |
| Wed | LinkedIn | Post for professional audience |
| Thu | Reddit | r/opensource, r/selfhosted, r/SaaS, r/startups |
| Fri | Dev.to | Article: "100 Open Source Projects You Can Build a Business On" |
| Sat | Indie Hackers | Share the journey |
| Sun | Analyze | Review metrics, plan iteration |

### Post-Launch (Week 4+)

- Monitor interest form submissions
- Reach out to top contributors for expert profiles
- Contact projects about official partnerships
- Start job board based on demand
- Iterate based on user feedback

---

## Revenue Model

### Phase 1: Free (MVP)

No monetization — focus on traffic and validation.

### Phase 2: Sponsorships ($500-2k/month)

| Tier | Price | Benefits |
|------|-------|----------|
| **Featured Project** | $100/month | Highlighted in category + homepage |
| **Sponsor Banner** | $200/month | Banner on relevant pages |
| **Newsletter Sponsor** | $150/issue | Ad in weekly newsletter |

### Phase 3: Job Board (10-15% of revenue)

| Model | Fee |
|-------|-----|
| **Job Posting** | $99 one-time or free with revenue share |
| **Successful Hire** | 10% of first payment (if tracked) |

### Phase 4: Expert Subscriptions ($20-100/month)

| Tier | Price | Benefits |
|------|-------|----------|
| **Basic** | Free | Profile, limited visibility |
| **Pro** | $29/month | Featured in searches, analytics |
| **Agency** | $99/month | Multiple team members, priority placement |

### Phase 5: Revenue Sharing (Future)

Optional: Experts pledge 5-10% of implementation earnings back to maintainers through platform.

---

## Appendix: Project Seed List (100 Projects)

### Tier 1: Reseller-Ready (White-Label Support)

| # | Project | Category | Replaces | License |
|---|---------|----------|----------|---------|
| 1 | Dittofeed | Customer Engagement | Customer.io, Klaviyo | MIT |
| 2 | n8n | Automation | Zapier, Make | Sustainable Use |
| 3 | Chatwoot | Customer Support | Intercom, Zendesk | MIT |
| 4 | Appsmith | Internal Tools | Retool | Apache-2.0 |
| 5 | ToolJet | Internal Tools | Retool | AGPL-3.0 |
| 6 | Budibase | Internal Tools | Retool | GPL-3.0 |
| 7 | Metabase | BI/Analytics | Tableau, Looker | AGPL-3.0 |
| 8 | Novu | Notifications | Courier, OneSignal | MIT |
| 9 | Appwrite | BaaS | Firebase | BSD-3-Clause |
| 10 | Supabase | BaaS | Firebase | Apache-2.0 |
| 11 | Directus | Headless CMS | Contentful | GPL-3.0 |
| 12 | Strapi | Headless CMS | Contentful | MIT |
| 13 | Mautic | Marketing Automation | HubSpot, Marketo | GPL-3.0 |
| 14 | Erxes | CRM/Marketing | HubSpot | GPL-3.0 |
| 15 | Activepieces | Automation | Zapier | MIT |

### Tier 2: Operator-Friendly (Easy Deploy)

| # | Project | Category | Replaces | License |
|---|---------|----------|----------|---------|
| 16 | Plausible | Analytics | Google Analytics | AGPL-3.0 |
| 17 | Umami | Analytics | Google Analytics | MIT |
| 18 | PostHog | Product Analytics | Mixpanel, Amplitude | MIT |
| 19 | Uptime Kuma | Monitoring | Pingdom, UptimeRobot | MIT |
| 20 | Docuseal | E-Signatures | DocuSign | AGPL-3.0 |
| 21 | Formbricks | Surveys | Typeform | AGPL-3.0 |
| 22 | Typebot | Chatbots | Landbot | AGPL-3.0 |
| 23 | Cal.com | Scheduling | Calendly | AGPL-3.0 |
| 24 | Hoppscotch | API Testing | Postman | MIT |
| 25 | Infisical | Secrets Management | Vault, Doppler | MIT |
| 26 | Lago | Billing | Chargebee, Stripe Billing | AGPL-3.0 |
| 27 | Windmill | Automation | Retool, Airplane | AGPL-3.0 |
| 28 | Trigger.dev | Background Jobs | Inngest | Apache-2.0 |
| 29 | Rallly | Scheduling Polls | Doodle | AGPL-3.0 |
| 30 | Papermark | Document Sharing | DocSend | AGPL-3.0 |
| 31 | Documenso | E-Signatures | DocuSign | AGPL-3.0 |
| 32 | OpenStatus | Status Pages | Statuspage.io | MIT |
| 33 | Dub | Link Shortening | Bitly | AGPL-3.0 |
| 34 | Coolify | PaaS | Heroku, Vercel | Apache-2.0 |
| 35 | Gitea | Git Hosting | GitHub, GitLab | MIT |
| 36 | Logto | Auth | Auth0, Clerk | MPL-2.0 |
| 37 | SuperTokens | Auth | Auth0 | Apache-2.0 |
| 38 | Zitadel | Auth/IAM | Auth0, Okta | Apache-2.0 |
| 39 | Hanko | Passkeys | Auth0 | AGPL-3.0 |
| 40 | Listmonk | Newsletters | Mailchimp | AGPL-3.0 |
| 41 | Penpot | Design | Figma | MPL-2.0 |
| 42 | Teable | Database/Spreadsheet | Airtable | AGPL-3.0 |
| 43 | NocoDB | Database/Spreadsheet | Airtable | AGPL-3.0 |
| 44 | Twenty | CRM | Salesforce | AGPL-3.0 |
| 45 | Affine | Workspace | Notion | MIT |
| 46 | AppFlowy | Workspace | Notion | AGPL-3.0 |
| 47 | Plane | Project Management | Jira, Linear | AGPL-3.0 |
| 48 | Focalboard | Project Management | Trello, Asana | AGPL-3.0 |
| 49 | Heyform | Forms | Typeform | AGPL-3.0 |
| 50 | Answer | Q&A Platform | Stack Overflow | Apache-2.0 |

### Tier 2 Continued

| # | Project | Category | Replaces | License |
|---|---------|----------|----------|---------|
| 51 | Inbox Zero | Email Management | SaneBox | AGPL-3.0 |
| 52 | Requestly | API Debugging | Charles Proxy | Apache-2.0 |
| 53 | Flagsmith | Feature Flags | LaunchDarkly | BSD-3-Clause |
| 54 | GrowthBook | A/B Testing | Optimizely | MIT |
| 55 | Laudspeaker | Customer Journey | Braze | MIT |
| 56 | Webstudio | Website Builder | Webflow | MIT |
| 57 | Grist | Spreadsheet | Airtable | Apache-2.0 |
| 58 | Baserow | Database | Airtable | MIT |
| 59 | Krayin | CRM | Pipedrive | MIT |
| 60 | Monica | Personal CRM | - | AGPL-3.0 |
| 61 | Kimai | Time Tracking | Toggl, Harvest | AGPL-3.0 |
| 62 | Invoice Ninja | Invoicing | FreshBooks | AAL |
| 63 | Crater | Invoicing | Wave | AGPL-3.0 |
| 64 | Akaunting | Accounting | QuickBooks | GPL-3.0 |
| 65 | Killbill | Billing | Stripe Billing | Apache-2.0 |
| 66 | Medusa | E-commerce | Shopify | MIT |
| 67 | Saleor | E-commerce | Shopify | BSD-3-Clause |
| 68 | Vendure | E-commerce | Shopify | MIT |
| 69 | Bagisto | E-commerce | Magento | MIT |
| 70 | Sylius | E-commerce | Magento | MIT |

### Tier 2 Continued (Infrastructure)

| # | Project | Category | Replaces | License |
|---|---------|----------|----------|---------|
| 71 | MinIO | Object Storage | AWS S3 | AGPL-3.0 |
| 72 | SeaweedFS | File System | AWS EFS | Apache-2.0 |
| 73 | Meilisearch | Search | Algolia | MIT |
| 74 | Typesense | Search | Algolia | GPL-3.0 |
| 75 | Sonic | Search | Algolia | MPL-2.0 |
| 76 | Qdrant | Vector DB | Pinecone | Apache-2.0 |
| 77 | Weaviate | Vector DB | Pinecone | BSD-3-Clause |
| 78 | Milvus | Vector DB | Pinecone | Apache-2.0 |
| 79 | ClickHouse | Analytics DB | Snowflake | Apache-2.0 |
| 80 | TimescaleDB | Time Series DB | InfluxDB | Apache-2.0 |

### Tier 2 Continued (DevTools)

| # | Project | Category | Replaces | License |
|---|---------|----------|----------|---------|
| 81 | Gitpod | Cloud IDE | GitHub Codespaces | AGPL-3.0 |
| 82 | OpenHands | AI Coding | Cursor | MIT |
| 83 | Bolt.new | AI Builder | v0 | MIT |
| 84 | Firecrawl | Web Scraping | Apify | AGPL-3.0 |
| 85 | Crawlee | Web Scraping | Apify | Apache-2.0 |
| 86 | Sentry | Error Tracking | - | FSL |
| 87 | GlitchTip | Error Tracking | Sentry | MIT |
| 88 | Highlight | Session Replay | FullStory | Apache-2.0 |
| 89 | OpenReplay | Session Replay | FullStory | ELv2 |
| 90 | Aptabase | Mobile Analytics | Firebase Analytics | AGPL-3.0 |

### Tier 3: Technically Possible (Needs Negotiation)

| # | Project | Category | Replaces | License |
|---|---------|----------|----------|---------|
| 91 | Ghost | Publishing | Substack, Medium | MIT |
| 92 | Mattermost | Team Chat | Slack | MIT + EE |
| 93 | Rocket.Chat | Team Chat | Slack | MIT + EE |
| 94 | Jitsi | Video Calls | Zoom | Apache-2.0 |
| 95 | BigBlueButton | Video Conference | Zoom | LGPL-3.0 |
| 96 | GitLab | DevOps | GitHub | MIT + EE |
| 97 | Odoo | ERP | SAP, NetSuite | LGPL-3.0 |
| 98 | ERPNext | ERP | SAP | GPL-3.0 |
| 99 | Discourse | Forums | - | GPL-2.0 |
| 100 | Nextcloud | File Sync | Dropbox, GDrive | AGPL-3.0 |

---

---

## Business Ideas Feature

### Inspiration: Ideabrowser

[Ideabrowser](https://www.ideabrowser.com/) (launched May 2025) shows that curated business ideas drive massive engagement:
- 669K visits with 704% growth in July 2025
- Each idea = 50+ hours of research condensed into 10-minute read
- Includes market analysis, competitor research, execution strategies

### Ideas for Each Project

For each white-label platform, we provide curated business ideas with:

1. **Target Market** — Who would buy this?
2. **Market Size** — How big is the opportunity?
3. **Why Now** — Trends making this viable
4. **Suggested Pricing** — What to charge
5. **Countries** — Geographic opportunities (regulatory, language, etc.)
6. **Difficulty** — Easy/Medium/Hard to execute
7. **Proof Signals** — Reddit threads, search trends, competitor gaps

### Example: Plausible Analytics Ideas

| Idea | Target | Market | Countries |
|------|--------|--------|-----------|
| HIPAA-Compliant Healthcare Analytics | Hospitals, health apps | $4.2B | USA |
| GDPR Analytics for EU E-commerce | Shopify stores in EU | 1.2M stores | Germany, France, NL |
| School/University Analytics | K-12, universities | 130K US schools | USA, UK, Australia |
| Privacy Analytics for Fintech | Banking apps, trading platforms | Growing | Worldwide |

### Ideas Data Model

```typescript
interface BusinessIdea {
  id: string
  project: Project

  // Core
  title: string
  slug: string
  description: string

  // Market
  target_market: string
  market_size?: string
  why_now: string

  // Execution
  suggested_pricing: string
  revenue_potential: string
  difficulty: 'easy' | 'medium' | 'hard'
  time_to_launch: string

  // Geographic
  countries: string[]
  country_specific_reasons?: string

  // Validation
  search_volume?: number
  competitor_count?: number
  proof_signals: string[]

  // SEO
  keywords: string[]
}
```

### Additional Programmatic SEO Pages

| Page Type | URL Pattern | Count |
|-----------|-------------|-------|
| Ideas by project | `/projects/[slug]/ideas` | 100 |
| Ideas by country | `/ideas/country/[country]` | 30 |
| Ideas by industry | `/ideas/industry/[slug]` | 15 |
| Ideas by difficulty | `/ideas/difficulty/[level]` | 3 |
| Individual idea | `/ideas/[slug]` | 300+ |

**Total additional pages: 400-500**

---

## Revised Architecture: Single Next.js App

### Why Single Repo?

After researching [Payload CMS 3.0](https://payloadcms.com/posts/blog/payload-30-the-first-cms-that-installs-directly-into-any-nextjs-app), the recommended approach has changed:

> **Payload 3.0 is the first CMS that installs directly into your Next.js /app folder**

This means:
- No separate backend server needed
- No Express or Fastify required
- Built-in authentication (JWT, cookies, OAuth via Auth.js)
- Deploy entire stack to Vercel as one app
- No CORS configuration needed

### Updated Architecture

```
projectwise/                      # Single Next.js 15 + Payload 3.0 app
├── app/
│   ├── (frontend)/               # Public pages (SSR/SSG)
│   │   ├── page.tsx              # Homepage
│   │   ├── projects/
│   │   │   ├── page.tsx          # Project listing
│   │   │   └── [slug]/
│   │   │       ├── page.tsx      # Project detail
│   │   │       └── ideas/
│   │   │           └── page.tsx  # Ideas for this project
│   │   ├── ideas/
│   │   │   ├── page.tsx          # All ideas
│   │   │   ├── country/[country]/
│   │   │   └── industry/[industry]/
│   │   ├── experts/
│   │   ├── category/[slug]/
│   │   └── alternative/[slug]/
│   │
│   ├── (payload)/                # Payload CMS (admin + API)
│   │   ├── admin/[[...segments]]/
│   │   │   └── page.tsx          # Admin panel at /admin
│   │   └── api/[...slug]/
│   │       └── route.ts          # REST API at /api
│   │
│   └── layout.tsx
│
├── payload/
│   ├── collections/
│   │   ├── Projects.ts
│   │   ├── Ideas.ts              # NEW
│   │   ├── Categories.ts
│   │   ├── Experts.ts
│   │   ├── Jobs.ts
│   │   └── Users.ts
│   ├── globals/
│   │   └── Settings.ts
│   └── payload.config.ts
│
├── components/                   # Shared UI (shadcn/ui)
├── lib/                          # Utilities
├── public/                       # Static assets
├── tailwind.config.ts
├── next.config.js
└── package.json
```

### Deployment

| Component | Service | Cost |
|-----------|---------|------|
| App (Next.js + Payload) | Vercel | Free tier |
| Database | Neon PostgreSQL | Free tier (0.5GB) |
| Media/Uploads | Vercel Blob | Free tier (1GB) |
| Domain | Cloudflare | ~$10/year |

**Total MVP cost: ~$10/year** (domain only)

### Authentication (Built into Payload)

No need for separate auth service:

```typescript
// payload.config.ts
export default buildConfig({
  collections: [
    {
      slug: 'users',
      auth: {
        tokenExpiration: 7200, // 2 hours
        verify: true,         // Email verification
        maxLoginAttempts: 5,  // Lockout protection
        lockTime: 600000,     // 10 min lockout
      },
      fields: [
        { name: 'role', type: 'select', options: ['admin', 'expert', 'operator'] },
        // ...
      ],
    },
    {
      slug: 'experts',
      auth: true,  // Separate auth collection for experts
      // ...
    },
  ],
})
```

### OAuth (GitHub) via Auth.js Plugin

```typescript
// Using payload-authjs plugin
import { buildConfig } from 'payload'
import { authPlugin } from 'payload-authjs'
import GitHub from '@auth/core/providers/github'

export default buildConfig({
  plugins: [
    authPlugin({
      providers: [
        GitHub({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
      ],
    }),
  ],
})
```

---

## Next Steps

1. **Set up single repository**
   - [ ] Create new Next.js 15 project with Payload 3.0
   - [ ] Configure PostgreSQL (Neon)
   - [ ] Set up Vercel deployment

2. **Build data layer**
   - [ ] Implement Payload collections (Projects, Ideas, Categories, Experts)
   - [ ] Seed initial 30 projects with 2-3 ideas each
   - [ ] Set up GitHub API integration for stats

3. **Build frontend**
   - [ ] Homepage with featured projects
   - [ ] Project listing and detail pages
   - [ ] Ideas pages (per project, by country, by industry)
   - [ ] Interest forms (Expert + Operator waitlist)

4. **Launch**
   - [ ] Deploy to Vercel
   - [ ] Submit to Product Hunt
   - [ ] Execute launch plan

---

## Migration Path (If Needed Later)

If the single app becomes too large or we need to scale independently:

```
Phase 1: MVP (Single App)
─────────────────────────
projectwise/              # Everything in one Next.js app
Deploy: Vercel

Phase 2: Scale (If Needed)
─────────────────────────
projectwise-web/          # Frontend only (static/SSG)
projectwise-cms/          # Payload CMS (API + Admin)
Deploy: Both on Vercel with CORS config
```

This is standard practice: **start simple, split when necessary**.

---

*Document created: January 2026*
*Last updated: January 2026*
*Version: 1.1*
