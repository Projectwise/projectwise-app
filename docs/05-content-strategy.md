# Content & Launch Strategy

> How we'll grow Projectwise with limited audience through SEO, borrowed audiences, and consistent content.

---

## Table of Contents

1. [The Challenge](#the-challenge)
2. [SEO Strategy](#seo-strategy)
3. [Programmatic Pages](#programmatic-pages)
4. [Social Media Strategy](#social-media-strategy)
5. [Build in Public](#build-in-public)
6. [Launch Playbook](#launch-playbook)
7. [Content Calendar](#content-calendar)
8. [Outreach Strategy](#outreach-strategy)

---

## The Challenge

### Starting Position

| Asset | Current State |
|-------|---------------|
| Twitter followers | ~500 |
| Email list | 0 |
| Domain authority | 0 (new domain) |
| Budget for ads | $0 |

### What This Means

We cannot rely on existing audience. We must:
1. **Borrow audiences** — Get projects to share when featured
2. **Build SEO moat** — Programmatic pages for long-tail keywords
3. **Be consistent** — Daily content compounds over time
4. **Provide value first** — Earn attention through usefulness

---

## SEO Strategy

### Target Keywords

#### Primary Keywords (High Intent)

| Keyword | Volume | Difficulty | Intent |
|---------|--------|------------|--------|
| open source saas alternatives | Medium | Medium | Commercial |
| white label software | Medium | High | Commercial |
| self hosted [category] | High | Medium | Technical |
| open source [product] alternative | Medium | Low | Commercial |

#### Long-Tail Keywords (Low Competition)

| Pattern | Example |
|---------|---------|
| "best open source [category] 2026" | "best open source crm 2026" |
| "[product] self hosted alternative" | "mailchimp self hosted alternative" |
| "open source [product] vs [competitor]" | "cal.com vs calendly" |
| "how to start a [category] saas" | "how to start an analytics saas" |
| "[country] saas market" | "india saas market opportunities" |

### On-Page SEO Checklist

```markdown
Every page should have:
- [ ] Unique title tag (< 60 chars)
- [ ] Meta description (< 160 chars)
- [ ] H1 matching search intent
- [ ] Internal links to related pages
- [ ] External links to authoritative sources
- [ ] Schema markup (Product, Organization)
- [ ] Open Graph tags for social sharing
- [ ] Alt text on all images
```

### Technical SEO

| Requirement | Implementation |
|-------------|----------------|
| Sitemap | Auto-generated via Next.js |
| Robots.txt | Allow all, block admin |
| Canonical URLs | Self-referencing canonicals |
| Page speed | Target > 90 Lighthouse |
| Mobile-first | Responsive design |
| HTTPS | Enforced via Vercel |

---

## Programmatic Pages

### Category Pages

Generate pages for each category:

```
/categories/analytics
/categories/crm
/categories/cms
/categories/email-marketing
/categories/ecommerce
/categories/project-management
...
```

**Content template:**
- H1: "Best Open Source [Category] Software (2026)"
- Intro paragraph with category overview
- List of projects in category
- Comparison table
- FAQ section

### Alternative Pages

Generate "alternative to" pages:

```
/alternatives/mailchimp
/alternatives/hubspot
/alternatives/shopify
/alternatives/calendly
...
```

**Content template:**
- H1: "Open Source Alternatives to [Product]"
- Why switch from [Product]
- Top 3-5 alternatives with comparison
- Feature comparison table
- Migration guide link

### Country Pages

Generate pages for target markets:

```
/markets/india
/markets/brazil
/markets/nigeria
/markets/indonesia
/markets/philippines
...
```

**Content template:**
- H1: "Best Open Source Software for [Country] Market"
- Market overview and opportunity
- Projects with local success stories
- Pricing considerations
- Local payment integration notes

### Tier Pages

```
/tiers/reseller-ready
/tiers/operator-friendly
/tiers/technically-possible
```

---

## Social Media Strategy

### Twitter/X (@projectwise_in)

#### Content Pillars

| Pillar | Percentage | Example |
|--------|------------|---------|
| Project features | 40% | "🔍 [Project] makes it easy to..." |
| Business ideas | 25% | "💡 Business idea: Run [X] as SaaS for [market]" |
| Build in public | 20% | "📊 Week 3 update: X visitors, Y signups" |
| Industry insights | 15% | "The OSS maintainer crisis is real..." |

#### Posting Schedule

| Day | Content Type | Time (IST) |
|-----|--------------|------------|
| Monday | Project feature | 10:00 AM |
| Tuesday | Business idea | 10:00 AM |
| Wednesday | Build in public | 10:00 AM |
| Thursday | Project feature | 10:00 AM |
| Friday | Weekly roundup | 10:00 AM |
| Saturday | Industry insight | 11:00 AM |
| Sunday | Rest / engagement | - |

#### Tweet Templates

**Project Feature:**
```
🔍 Featured: [Project Name]

[One-line description]

✅ Self-hostable
✅ White-label ready
✅ [Key feature]

Perfect for: [Use case]

→ projectwise.io/projects/[slug]
```

**Business Idea:**
```
💡 Business idea #[X]:

Run [Project] as a SaaS for [market]

Target: [Customer type]
Pricing: $[X]-[Y]/month
Competition: [Low/Medium]

Why it works: [1 sentence]

More ideas → projectwise.io/ideas
```

**Build in Public:**
```
📊 Projectwise Week [X] Update

Visitors: [X] (+Y%)
Projects listed: [X]
Expert signups: [X]
Operator interests: [X]

What we shipped:
• [Feature 1]
• [Feature 2]

Next week: [Focus]
```

### LinkedIn (Future)

- Repurpose Twitter content
- Focus on business/entrepreneur angle
- Target: Agency owners, technical founders

### Reddit (Careful)

| Subreddit | Strategy |
|-----------|----------|
| r/selfhosted | Share genuinely useful resources |
| r/startups | Participate, don't promote |
| r/opensource | Community engagement |
| r/SaaS | Answer questions, build reputation |

**Rule:** Never spam. Only share when genuinely helpful.

---

## Build in Public

### Why Build in Public

1. **Accountability** — Public commitment drives action
2. **Audience building** — People follow journeys
3. **Feedback** — Early users help shape product
4. **Trust** — Transparency builds credibility

### What to Share

| Category | Examples |
|----------|----------|
| Metrics | Visitors, signups, revenue |
| Decisions | Tech choices, pivots |
| Struggles | Bugs, delays, challenges |
| Wins | Launches, milestones |
| Learnings | What worked, what didn't |

### What NOT to Share

- Sensitive user data
- Security vulnerabilities
- Internal conflicts
- Unverified claims

### Build in Public Calendar

| Week | Focus | Share |
|------|-------|-------|
| 1 | Setup | Stack decisions, first commit |
| 2 | V1 | Soft launch, first 20 projects |
| 3 | Forms | Interest form conversions |
| 4 | V2 | First expert signups |
| 5 | Ideas | Ideas feature launch |
| 6 | Growth | Traffic milestones |
| 7 | Prep | Launch preparation |
| 8 | Launch | Full launch metrics |

---

## Launch Playbook

### Pre-Launch (Week 7)

#### Product Hunt Preparation

| Task | Status |
|------|--------|
| Create maker profile | Pending |
| Prepare screenshots (5+) | Pending |
| Write tagline (< 60 chars) | Pending |
| Write description (< 260 chars) | Pending |
| Create launch GIF | Pending |
| Line up "hunter" (optional) | Pending |
| Prepare first comment | Pending |

**Tagline ideas:**
- "Build a business on open source"
- "Commercial-ready OSS directory"
- "The WordPress model for modern OSS"

#### Hacker News Preparation

| Task | Status |
|------|--------|
| Write "Show HN" post | Pending |
| Prepare to answer questions | Pending |
| Have technical details ready | Pending |
| Time the post (9-10 AM EST) | Pending |

**Show HN template:**
```
Show HN: Projectwise – A directory of commercial-ready open source software

Hey HN, I built Projectwise to help people discover open source projects
that can be self-hosted, white-labeled, and turned into SaaS businesses.

The problem: There's no central place to find OSS that's actually
"commercial-ready" - meaning it has permissive licenses, self-hosting
support, and potential for white-labeling.

Features:
- 50+ curated projects across categories (CRM, analytics, CMS, etc.)
- Commercial "tiers" (Reseller-Ready, Operator-Friendly, etc.)
- Business ideas for each project
- Connect with implementation experts

Tech stack: Next.js 15 + Payload CMS 3.0 + PostgreSQL

Would love feedback on what projects to add or features to build next.
```

### Launch Day (Week 8)

#### Timeline

| Time | Action |
|------|--------|
| 12:01 AM PT | Product Hunt goes live |
| 6:00 AM | Wake up, engage with comments |
| 8:00 AM | Share on Twitter |
| 9:00 AM | Post to Hacker News |
| 10:00 AM | Email newsletter |
| Throughout | Respond to ALL comments |
| Evening | Twitter thread recap |

#### Engagement Rules

1. **Respond to every comment** — Within 1 hour if possible
2. **Be genuine** — No fake enthusiasm
3. **Thank supporters** — Personally acknowledge upvotes
4. **Ask questions** — "What projects would you want to see?"
5. **Don't ask for upvotes** — Against PH rules

### Post-Launch (Week 9+)

| Task | Timeline |
|------|----------|
| Compile feedback | Day 2 |
| Prioritize feature requests | Day 3 |
| Send thank you emails | Day 3 |
| Write launch retrospective | Day 7 |
| Plan V5 based on feedback | Week 9 |

---

## Content Calendar

### Weekly Template

| Day | Content | Platform |
|-----|---------|----------|
| Mon | Project feature | Twitter |
| Tue | Business idea | Twitter |
| Wed | Build in public | Twitter |
| Thu | Project feature | Twitter |
| Fri | Weekly newsletter | Email |
| Sat | Industry insight | Twitter |
| Sun | Engagement only | Twitter |

### Monthly Goals

| Month | Content Target |
|-------|----------------|
| Month 1 | 20 projects, 10 ideas, 4 newsletters |
| Month 2 | 50 projects, 50 ideas, 4 newsletters |
| Month 3 | 100 projects, 100 ideas, 4 newsletters |

---

## Outreach Strategy

### Projects Outreach

When featuring a project, reach out to maintainers:

**Email template:**
```
Subject: Featured [Project Name] on Projectwise

Hi [Name],

I just featured [Project] on Projectwise (projectwise.io),
a directory of commercial-ready open source software.

Here's the listing: [link]

I highlighted [specific feature] and noted the [license]
makes it great for [use case].

Would love your feedback on the listing. And if you'd like
to share it with your community, that would mean a lot!

Best,
[Your name]
```

### Expert Outreach

Reach out to GitHub contributors:

**DM template:**
```
Hey [Name]! I noticed you've contributed to [Project].

I'm building Projectwise, a platform connecting OSS experts
with people who want to deploy these projects.

Would you be interested in being listed as an expert for
[Project]? It's free and could lead to paid consulting gigs.

Let me know if you'd like to learn more!
```

### Newsletter Outreach

Pitch to relevant newsletters:

| Newsletter | Angle |
|------------|-------|
| TLDR | New OSS discovery tool |
| Bytes | Developer-focused |
| Console | OSS curation |
| Indie Hackers | Business opportunity |

---

## Metrics to Track

### Weekly Dashboard

| Metric | Target (Week 4) | Target (Week 8) |
|--------|-----------------|-----------------|
| Unique visitors | 500 | 10,000 |
| Page views | 2,000 | 50,000 |
| Avg. session duration | 1:30 | 2:00 |
| Bounce rate | < 60% | < 50% |
| Expert signups | 20 | 100 |
| Operator interests | 10 | 75 |
| Newsletter subscribers | 50 | 500 |
| Twitter followers | 600 | 1,000 |

### Tools

| Purpose | Tool |
|---------|------|
| Web analytics | Plausible or Umami |
| Social analytics | Twitter native |
| SEO tracking | Google Search Console |
| Email metrics | Buttondown/ConvertKit |
| Uptime | Vercel built-in |

---

*Last updated: January 2026*
