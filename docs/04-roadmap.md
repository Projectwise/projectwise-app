# Product Roadmap

> Phased approach to building Projectwise, from MVP to full marketplace.

---

## Overview

| Phase | Focus | Duration | Key Deliverable |
|-------|-------|----------|-----------------|
| **V1** | MVP Directory | Week 1-2 | Static project listings |
| **V2** | Contributors + Forms | Week 3-4 | Interest capture |
| **V3** | Ideas Feature | Week 5-6 | Business ideas per project |
| **V4** | Launch Campaign | Week 7-8 | Public launch, 50 projects |

---

## V1: MVP Directory

> **Goal:** Get something live. Validate interest with minimal effort.

### Deliverables

| Feature | Priority | Description |
|---------|----------|-------------|
| Project listings | P0 | 20 curated commercial-ready OSS projects |
| Category pages | P0 | Analytics, CRM, CMS, etc. |
| Project detail pages | P0 | Name, description, license, links, tier |
| Basic search | P1 | Filter by category, tier |
| Responsive design | P1 | Mobile-friendly |

### Technical Tasks

```
Week 1:
├── Set up Next.js 15 + Payload CMS 3.0
├── Configure PostgreSQL (Neon)
├── Deploy to Vercel
├── Create Payload collections (Projects, Categories)
└── Build basic UI components

Week 2:
├── Add 20 seed projects
├── Create category pages
├── Add project detail pages
├── Implement basic filtering
└── Launch V1 (soft launch)
```

### Data Model (V1)

```typescript
// Projects collection (minimal)
{
  name: string;
  slug: string;
  tagline: string;
  description: richText;
  logo: upload;
  category: relationship;
  tier: select; // Tier 1, 2, or 3
  license: string;
  githubUrl: string;
  websiteUrl: string;
  selfHostable: boolean;
  whiteLabelReady: boolean;
  featured: boolean;
}

// Categories collection
{
  name: string;
  slug: string;
  description: string;
  icon: string;
}
```

### Success Criteria

- [ ] 20 projects listed
- [ ] Site loads in < 2 seconds
- [ ] All pages indexed by Google
- [ ] 100 organic visitors in first week

---

## V2: Contributors + Forms

> **Goal:** Capture interest from experts and operators. Validate demand.

### Deliverables

| Feature | Priority | Description |
|---------|----------|-------------|
| Expert interest form | P0 | "I can help with this project" |
| Operator interest form | P0 | "I want to run this as SaaS" |
| Contributor badges | P1 | Show GitHub contributors on projects |
| Email capture | P1 | Newsletter signup |
| Admin dashboard | P1 | View submissions in Payload |

### Technical Tasks

```
Week 3:
├── Add Experts collection (interest form)
├── Add Interests collection (operator form)
├── Integrate GitHub API for contributors
├── Build form UI components
└── Set up email notifications

Week 4:
├── Add newsletter signup (ConvertKit/Buttondown)
├── Create admin views in Payload
├── Add contributor badges to project pages
├── Implement form validation
└── Launch V2
```

### Data Model (V2 additions)

```typescript
// Experts collection
{
  name: string;
  email: string;
  githubUsername: string;
  projects: relationship[]; // Projects they can help with
  skills: array;
  rate: number; // $/hour (optional)
  availability: select;
  portfolio: string;
  status: select; // pending, verified, rejected
}

// Interests collection
{
  email: string;
  name: string;
  project: relationship;
  type: select; // 'expert' or 'operator'
  message: text;
  budget: select; // $500-1k, $1k-5k, $5k+
  timeline: select;
  createdAt: date;
}
```

### Success Criteria

- [ ] 20 expert signups
- [ ] 10 operator interest submissions
- [ ] 50 newsletter subscribers
- [ ] At least 1 "match" (expert <-> operator)

---

## V3: Ideas Feature

> **Goal:** Add business ideas for each project. Increase engagement and SEO.

### Deliverables

| Feature | Priority | Description |
|---------|----------|-------------|
| Ideas collection | P0 | 3-5 business ideas per project |
| Ideas on project pages | P0 | Display ideas with details |
| Dedicated ideas pages | P1 | /ideas, /ideas/[slug] |
| Target market tags | P1 | Countries, industries |
| Pricing suggestions | P1 | Suggested pricing tiers |

### Technical Tasks

```
Week 5:
├── Add Ideas collection to Payload
├── Create idea detail pages
├── Add ideas section to project pages
├── Build ideas index page
└── Add country/market targeting

Week 6:
├── Add 100 ideas (3-5 per project)
├── Create programmatic SEO pages
├── Add related ideas suggestions
├── Implement idea filtering
└── Launch V3
```

### Data Model (V3 additions)

```typescript
// Ideas collection
{
  title: string;
  slug: string;
  project: relationship;
  description: richText;
  targetMarket: array; // Countries, industries
  suggestedPricing: group {
    starter: number;
    professional: number;
    enterprise: number;
  };
  competitors: array; // SaaS alternatives
  difficulty: select; // Easy, Medium, Hard
  potentialMRR: string; // "$1k-5k", "$5k-20k", etc.
  requirements: array; // Technical requirements
}
```

### Success Criteria

- [ ] 100 business ideas published
- [ ] Ideas pages ranking for long-tail keywords
- [ ] 5+ idea submissions from community
- [ ] Increased time on site (> 2 minutes avg)

---

## V4: Launch Campaign

> **Goal:** Public launch. Drive traffic. Generate buzz.

### Deliverables

| Feature | Priority | Description |
|---------|----------|-------------|
| 50 projects | P0 | Minimum for launch |
| Product Hunt launch | P0 | Coordinated launch |
| Hacker News post | P0 | "Show HN" submission |
| Twitter thread | P1 | Build in public recap |
| Featured listings | P2 | Sponsored placements (future revenue) |

### Launch Tasks

```
Week 7 (Preparation):
├── Reach 50 projects
├── Write Product Hunt copy
├── Create launch graphics
├── Email projects for cross-promotion
├── Prepare Twitter thread
└── Line up "hunters" for PH

Week 8 (Launch):
├── Monday: Soft launch to newsletter
├── Tuesday: Product Hunt launch
├── Wednesday: Hacker News "Show HN"
├── Thursday: Twitter thread recap
├── Friday: Reach out to tech newsletters
└── Weekend: Respond to feedback
```

### Success Criteria

- [ ] Product Hunt: Top 10 of the day
- [ ] Hacker News: Front page (even briefly)
- [ ] 10,000 visitors in launch week
- [ ] 100 newsletter subscribers
- [ ] Media coverage (1+ article)

---

## Future Phases (Post-Launch)

### V5: Marketplace Foundations (Week 9-12)

| Feature | Description |
|---------|-------------|
| Expert profiles | Public pages for verified experts |
| Project claiming | Maintainers claim their projects |
| Job board | Post implementation jobs |
| Reviews/ratings | Expert reviews from operators |

### V6: Monetization (Month 3+)

| Revenue Stream | Model |
|----------------|-------|
| Featured listings | $200-500/month per project |
| Expert verification | $50/year badge |
| Job posting fees | 10% of job value |
| White-label referrals | Affiliate commissions |

### V7: Platform Features (Month 6+)

| Feature | Description |
|---------|-------------|
| Escrow payments | Secure transactions |
| Project analytics | Track adoption metrics |
| Revenue sharing | Automatic splits to maintainers |
| API access | For integrations |

---

## Technical Milestones

### Infrastructure

| Milestone | Target | Status |
|-----------|--------|--------|
| Next.js 15 + Payload 3.0 setup | Week 1 | Pending |
| PostgreSQL on Neon | Week 1 | Pending |
| Vercel deployment | Week 1 | Pending |
| Custom domain (projectwise.io) | Week 2 | Pending |
| Email setup (Resend/Postmark) | Week 3 | Pending |
| Analytics (Plausible/Umami) | Week 2 | Pending |

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse score | > 90 |
| Time to First Byte | < 200ms |
| Largest Contentful Paint | < 2.5s |
| Core Web Vitals | All green |

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Low traffic at launch | Focus on SEO, borrowed audience |
| No expert signups | Personally reach out to contributors |
| No operator interest | Add more business ideas, target keywords |
| Competition copies us | Move fast, build community |
| Maintainer pushback | Always ask permission, give credit |

---

## Weekly Checklist Template

```markdown
## Week [X] Checklist

### Development
- [ ] Feature 1
- [ ] Feature 2
- [ ] Bug fixes

### Content
- [ ] Add X new projects
- [ ] Write X business ideas
- [ ] Create X SEO pages

### Marketing
- [ ] Daily tweet
- [ ] Weekly newsletter
- [ ] Outreach to X projects

### Metrics
- [ ] Visitors: ___
- [ ] Signups: ___
- [ ] Projects listed: ___
```

---

*Last updated: January 2026*
