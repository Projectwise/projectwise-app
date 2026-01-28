# Market Research

> Summary of research conducted on the open source commercialization landscape.

---

## Table of Contents

1. [Open Source Market Overview](#open-source-market-overview)
2. [The WordPress Ecosystem Model](#the-wordpress-ecosystem-model)
3. [Competitor Analysis](#competitor-analysis)
4. [Business Models in Open Source](#business-models-in-open-source)
5. [The Maintainer Crisis](#the-maintainer-crisis)
6. [AI's Impact on the Ecosystem](#ais-impact-on-the-ecosystem)
7. [Directory Site Case Study: OpenAlternative](#directory-site-case-study-openalternative)
8. [Key Insights](#key-insights)

---

## Open Source Market Overview

### Market Size

| Metric | Value | Source |
|--------|-------|--------|
| Annual value of OSS | **$8.8 trillion** | Harvard Study |
| Organizations using OSS | **96%** increased or maintained use | OSI 2025 |
| SaaS market (2025) | **$300 billion** | Industry estimates |
| SaaS market (2032) | **$1.13 trillion** | Projected |

### Key Trends

1. **Open source is mission-critical** — 96% of organizations depend on it
2. **Governance lags adoption** — Most lack frameworks to manage OSS dependency
3. **Security underinvestment** — Companies take more than they give back
4. **Funding innovation** — New models emerging (Open Source Endowment, etc.)

---

## The WordPress Ecosystem Model

### Why WordPress Matters

WordPress represents the most successful open source commercialization ever:

| Metric | Value |
|--------|-------|
| Market share (all websites) | **43.4%** |
| Market share (CMS) | **62.8%** |
| Total websites powered | **518+ million** |
| Ecosystem value | **$596.7 billion** |
| Active plugins | **59,000+** |
| Free themes | **13,000+** |
| Agencies worldwide | **50,000+** |

### The Layered Ecosystem

```
┌─────────────────────────────────────────────────────────────┐
│                   WORDPRESS ECOSYSTEM                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Layer 1: PLATFORM (Free)                                   │
│  └── WordPress.org - GPL licensed, free forever             │
│                                                             │
│  Layer 2: MANAGED HOSTING ($156B+ market)                   │
│  └── WP Engine, Kinsta, Flywheel, WordPress.com             │
│                                                             │
│  Layer 3: AGENCIES (50,000+)                                │
│  └── WP VIP Partners, implementation specialists            │
│                                                             │
│  Layer 4: FREELANCERS                                       │
│  └── Codeable, Upwork specialists ($20-100/hr)              │
│                                                             │
│  Layer 5: END CUSTOMERS                                     │
│  └── Businesses paying $0 to $10,000+ for solutions         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Key Lesson

WordPress.org (the foundation) didn't build hosting, agencies, or marketplaces. They emerged organically because the platform was:
- Free and open
- Easy to extend
- Had clear documentation
- Built trust over time

**Our opportunity:** Accelerate this for modern OSS projects.

---

## Competitor Analysis

### Direct Competitors (Directories)

| Platform | Focus | Monetization | Gap We Fill |
|----------|-------|--------------|-------------|
| [OpenAlternative](https://openalternative.co) | OSS alternatives to SaaS | Sponsored listings ($3.5k/mo) | No expert network, no commercial focus |
| [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) | Self-hosted software | None (GitHub list) | No curation, no commercial info |
| [AlternativeTo](https://alternativeto.net) | All software alternatives | Ads | Not OSS-focused, no implementation help |
| [Product Hunt](https://producthunt.com) | All products | Promoted listings | Not OSS-focused |

### Adjacent Competitors (Expert Networks)

| Platform | Focus | Model | Gap We Fill |
|----------|-------|-------|-------------|
| [Codeable](https://codeable.io) | WordPress developers | 17.5% commission | Only WordPress |
| [Toptal](https://toptal.com) | Elite freelancers | Premium pricing | Not OSS-specific |
| [Upwork](https://upwork.com) | All freelance | 5-20% commission | No OSS verification |

### Adjacent Competitors (Hosting/Deployment)

| Platform | Focus | Model | Gap We Fill |
|----------|-------|-------|-------------|
| [Coolify](https://coolify.io) | Self-hosting PaaS | Free + Cloud tier | No discovery, no experts |
| [Elestio](https://elest.io) | Managed OSS hosting | Per-service fees | No local operators, no revenue share |
| [Railway](https://railway.app) | App deployment | Usage-based | No OSS curation |

### Adjacent Competitors (Funding)

| Platform | Focus | Model | Gap We Fill |
|----------|-------|-------|-------------|
| [Open Collective](https://opencollective.com) | OSS funding | 10% of transactions | Donations, not commercial |
| [GitHub Sponsors](https://github.com/sponsors) | Developer funding | Direct donations | No business connection |
| [Tidelift](https://tidelift.com) | Enterprise subscriptions | $100-150/dev/year | B2B only, no individual operators |

### Competitive Positioning

```
                        COMMERCIAL FOCUS
                              ▲
                              │
                    Projectwise ●
                              │
         Tidelift ●           │          ● Codeable
                              │
    ──────────────────────────┼──────────────────────────►
    GENERAL                   │                    SPECIALIZED
                              │
         OpenAlternative ●    │
                              │
    awesome-selfhosted ●      │          ● Coolify
                              │
                              │
                        TECHNICAL FOCUS
```

**Our position:** Commercial focus + Specialized (OSS only)

---

## Business Models in Open Source

### Open Core Model

Used by: Cal.com, Dub.co, GitLab, Metabase

```
┌─────────────────────────────────────┐
│         OPEN CORE MODEL             │
├─────────────────────────────────────┤
│                                     │
│   Core (99%)        Enterprise (1%) │
│   ───────────       ─────────────── │
│   AGPL/MIT          Commercial      │
│   Self-hostable     SSO, SAML       │
│   Full features     Multi-tenant    │
│   Community         Priority support│
│                                     │
└─────────────────────────────────────┘
```

### Fair Source / Business Source License

Used by: Sentry, CockroachDB, MariaDB

- Free for limited use
- Paid for commercial scale
- Converts to open source after time delay (e.g., 3 years)

### Managed Hosting Model

Used by: Ghost, Plausible, Umami

```
Self-hosted: Free (you run it)
Cloud/Managed: Paid (they run it)
```

### Support/Services Model

Used by: Red Hat, Canonical

- Software is free
- Pay for support, consulting, training

### White-Label Model (Emerging)

Used by: Dittofeed, n8n, Appsmith

- Core is open source
- Paid license for embedding/white-labeling
- Target: SaaS companies wanting to add features

**This is our primary focus.**

---

## The Maintainer Crisis

### Key Statistics

| Statistic | Source |
|-----------|--------|
| 60% of maintainers are unpaid | ByteIota 2025 |
| 60% have quit or considered quitting | ByteIota 2025 |
| 44% cite burnout as reason | ByteIota 2025 |
| 45% say burnout is #1 challenge | Intel Survey |

### Notable Burnout Cases (2024-2025)

| Project | Impact |
|---------|--------|
| Kubernetes Ingress NGINX | Retired, no security patches after March 2026 |
| External Secrets Operator | Down to 1 active maintainer |
| Asahi Linux | Lead developer quit |
| ESLint | Funding crisis, near shutdown |

### The Core Problem

> "Money doesn't write code. Money doesn't review pull requests. Companies owe projects both financial resources AND engineering hours."

### What's Being Tried

| Solution | Approach | Limitation |
|----------|----------|------------|
| Open Collective | Donations | Not sustainable income |
| GitHub Sponsors | Direct funding | Low adoption |
| Tidelift | Enterprise subscriptions | Only works for big projects |
| Open Source Endowment | Grants up to $250k | Limited reach |

### Our Angle

Instead of asking companies to donate, we create a **commercial ecosystem** where:
1. Operators pay experts for implementation
2. Experts become advocates for projects
3. Projects get adoption without support burden
4. Optional: Revenue sharing back to maintainers

---

## AI's Impact on the Ecosystem

### Design/UI Generation

| Tool | What It Does |
|------|--------------|
| [v0 by Vercel](https://v0.app) | Text → React/Tailwind components |
| [Figma AI](https://figma.com) | Prompt → Figma designs |
| [Galileo](https://usegalileo.ai) | AI-generated UI screens |

**Impact:** "Need a designer for OSS" is less relevant. AI can generate UI.

### Code Generation

| Tool | Impact |
|------|--------|
| GitHub Copilot | Autocomplete, boilerplate |
| Cursor | AI-native IDE |
| Claude Code | Full implementation assistance |

**Impact:** Building is easier, but understanding existing codebases still requires human expertise.

### What AI CAN'T Replace (Yet)

1. **Domain expertise** — Knowing why a project works a certain way
2. **Integration** — Connecting OSS to specific business contexts
3. **Customization** — Adapting for unique requirements
4. **Trust** — Verified humans for critical deployments

**Our opportunity:** The "last mile" of OSS implementation still needs humans.

---

## Directory Site Case Study: OpenAlternative

### Background

- **Founder:** Piotr Kulpinski
- **Launched:** 2024
- **Built in:** 48 hours
- **Stack:** Astro → Next.js, Cloudflare

### Growth Metrics

| Metric | Value |
|--------|-------|
| Week 1 visitors | 100,000 |
| Product Hunt | 3rd place, 500+ upvotes |
| Hacker News | #1 for several hours |
| Current monthly visitors | 70,000 |
| Current monthly revenue | $3,000-3,500 |
| MRR from featured listings | $1,200 |
| Total visitors (2025) | 1M+ |

### What Worked

1. **Programmatic SEO** — Generated pages from Airtable data (categories, tags)
2. **Simple MVP** — No search/filtering initially, just listings
3. **Free hosting** — Cloudflare static site ($0/month)
4. **Consistency** — Daily updates, automation
5. **Community launch** — Product Hunt + HN on same day

### Key Quote

> "The best competitive advantage is consistency and showing up every day. With AI capable of cloning any website within minutes, the only way to maintain an edge is by being persistent."

### What We Learn

- Start simple (48 hours to MVP)
- Programmatic SEO works
- Featured listings = revenue
- Community launch matters
- Consistency > perfection

---

## Key Insights

### 1. The Market is Validated

- WordPress proves the model ($600B ecosystem)
- OpenAlternative proves demand (1M+ visitors)
- Maintainer crisis proves the need

### 2. The Gap is Real

No platform currently:
- Focuses on **commercial** OSS
- Connects **experts** with **operators**
- Provides **business ideas** for each project
- Offers **verified** contributor status

### 3. Timing is Right

- AI disruption creating displaced experts
- Maintainer burnout at crisis levels
- "Build in public" culture normalized
- Remote work enables global operators

### 4. Distribution Strategy is Key

With 500 followers, we can't rely on audience. We must:
- Get projects to share (borrowed audience)
- Build SEO moat (programmatic pages)
- Be consistent (daily content)
- Provide genuine value first

---

## Sources

- [WordPress Economy Study - WP Engine](https://wpengine.com/resources/value-of-wordpress-worlds-first-study-of-wordpress-economy/)
- [WordPress Market Share 2025 - ThemeHunk](https://themehunk.com/wordpress-market-share/)
- [Open Source Maintainer Crisis - ByteIota](https://byteiota.com/open-source-maintainer-crisis-60-unpaid-burnout-hits-44/)
- [OpenAlternative Launch - Piotr Kulpinski](https://kulpinski.dev/posts/openalternative-launch/)
- [Headless CMS Comparison](https://www.glukhov.org/post/2025/11/headless-cms-comparison-strapi-directus-payload/)
- [Payload CMS 3.0 Announcement](https://payloadcms.com/posts/blog/payload-30-the-first-cms-that-installs-directly-into-any-nextjs-app)
- [Dittofeed - YC](https://www.ycombinator.com/companies/dittofeed)

---

*Last updated: January 2026*
