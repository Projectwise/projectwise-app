# Projectwise Documentation

> **Domain:** projectwise.io
> **Twitter:** @projectwise_in (to be updated)
> **Tagline:** Build a business on open source

---

## Quick Links

| Document | Description |
|----------|-------------|
| [01 - Vision & Problem](./01-vision.md) | What we're building and why |
| [02 - Market Research](./02-market-research.md) | Industry analysis, competitors, opportunity |
| [03 - Architecture](./03-architecture.md) | Tech stack, data models, infrastructure |
| [04 - Roadmap](./04-roadmap.md) | V1, V2, V3 phases with deliverables |
| [05 - Content & Launch Strategy](./05-content-strategy.md) | SEO, social media, build in public |
| [06 - Project Seed List](./06-project-seed-list.md) | 100 open source projects to feature |

---

## Project Status

| Phase | Status | Target |
|-------|--------|--------|
| **V1: MVP Directory** | 🔄 Planning | Week 1-2 |
| **V2: Contributors + Forms** | ⏳ Planned | Week 3-4 |
| **V3: Ideas Feature** | ⏳ Planned | Week 5-6 |
| **V4: Launch Campaign** | ⏳ Planned | Week 7-8 |

---

## The Elevator Pitch

**Projectwise** is a curated directory of commercial-ready open source software — projects you can self-host, white-label, and build a business on.

We connect three audiences:
1. **Projects** — Open source with permissive licenses and commercial potential
2. **Experts** — Contributors who can deploy and customize these projects
3. **Operators** — Entrepreneurs who want to run OSS as SaaS businesses

---

## Why Now?

- **60% of OSS maintainers are unpaid**, 44% cite burnout
- **AI disruption** is killing traditional developer education/Stack Overflow
- **WordPress proved the model** — $600B ecosystem from open source
- **No platform exists** that connects commercial OSS with implementation experts

---

## Quick Start (For Development)

```bash
# Clone the repo
git clone https://github.com/Projectwise/projectwise-app.git
cd projectwise-app

# Install dependencies (after migration to new stack)
pnpm install

# Set up environment
cp .env.example .env.local

# Run development server
pnpm dev
```

---

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Framework** | Next.js 15 + Payload CMS 3.0 | Single deployment, TypeScript native |
| **Database** | PostgreSQL (Neon) | Free tier, Vercel integration |
| **Hosting** | Vercel | Free tier, instant deploys |
| **Domain** | projectwise.io | Available, professional |
| **Architecture** | Single repo | Simpler for MVP, can split later |

---

## Contributing

This project is in active development. See [04-roadmap.md](./04-roadmap.md) for current priorities.

---

*Last updated: January 2026*
