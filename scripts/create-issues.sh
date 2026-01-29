#!/bin/bash
# Creates all 23 GitHub issues for Projectwise.ai
# Run: chmod +x scripts/create-issues.sh && ./scripts/create-issues.sh
#
# Prerequisites: gh auth login

REPO="Projectwise/projectwise-app"

# Create labels first
gh label create "setup" --color "0E8A16" --description "Project setup and infrastructure" --repo "$REPO" 2>/dev/null
gh label create "v1" --color "1D76DB" --description "V1: MVP Directory" --repo "$REPO" 2>/dev/null
gh label create "v2" --color "5319E7" --description "V2: Contributors + Forms + AI Prompts" --repo "$REPO" 2>/dev/null
gh label create "v3" --color "D93F0B" --description "V3: Ideas, Showcase, Stacks" --repo "$REPO" 2>/dev/null
gh label create "v4" --color "FBCA04" --description "V4: Launch Campaign" --repo "$REPO" 2>/dev/null
gh label create "feature" --color "A2EEEF" --description "New feature" --repo "$REPO" 2>/dev/null
gh label create "content" --color "F9D0C4" --description "Content and seed data" --repo "$REPO" 2>/dev/null
echo "✓ Labels created"

# --- SETUP ---

gh issue create --repo "$REPO" --title "#1 — Initialize Next.js 15 + Payload CMS 3.0" --label "setup" --body "$(cat <<'ISSUE_EOF'
## Description

Set up the fresh monorepo with Next.js 15, Payload CMS 3.0, TypeScript, and Tailwind CSS. This replaces the legacy React 16 + CRA frontend entirely.

Payload 3.0 installs directly into the Next.js `/app` directory — no separate backend needed.

**Phase:** Setup · **Depends on:** Nothing · **Blocks:** All other issues

## Tasks

- [ ] Create Next.js 15 project with TypeScript (`create-next-app@latest`)
- [ ] Install Tailwind CSS v4 and configure
- [ ] Install and configure Payload CMS 3.0 inside `/app`
  - `@payloadcms/next` and `@payloadcms/db-postgres`
  - Set up Payload config at `payload.config.ts`
  - Add Payload admin route at `/app/(payload)/admin/`
- [ ] Set up PostgreSQL connection string (Neon-compatible)
- [ ] Configure ESLint and Prettier
- [ ] Set up project folder structure:
  ```
  ├── app/
  │   ├── (frontend)/       # Public pages
  │   ├── (payload)/        # Payload admin
  │   └── api/              # API routes
  ├── collections/          # Payload collections
  ├── components/           # React components
  ├── lib/                  # Utilities
  └── docs/                 # Documentation (existing)
  ```
- [ ] Add `CLAUDE.md` / `AGENTS.md` with project conventions
- [ ] Verify `pnpm dev` starts both Next.js and Payload admin
- [ ] Verify production build works

## Acceptance Criteria

- `pnpm dev` serves the app on `localhost:3000`
- `/admin` shows Payload CMS dashboard
- TypeScript compiles without errors
- Tailwind classes work in components
- PostgreSQL connection works (can create/read records)

## References

- [Architecture Doc](./docs/03-architecture.md)
- [Payload 3.0 Docs](https://payloadcms.com/docs)
ISSUE_EOF
)"
echo "✓ Issue #1 created"

gh issue create --repo "$REPO" --title "#2 — Configure Deployment" --label "setup" --body "$(cat <<'ISSUE_EOF'
## Description

Set up deployment pipeline: Vercel hosting, Neon PostgreSQL, environment variables, and CI/CD.

**Phase:** Setup · **Depends on:** #1 · **Blocks:** Domain go-live

## Tasks

- [ ] Create Vercel project linked to this repo
- [ ] Configure environment variables (DATABASE_URL, PAYLOAD_SECRET, etc.)
- [ ] Provision Neon PostgreSQL (dev + production branches)
- [ ] Set up custom domain (projectwise.ai or projectwise.io)
- [ ] Configure CI/CD:
  - Build + lint on every PR
  - Preview deployments on PR branches
  - Auto-deploy to production on merge to `main`
- [ ] Set up branch-based database previews (Neon branching)

## Acceptance Criteria

- Push to `main` auto-deploys to production URL
- PR branches get preview deployments
- Database is accessible from deployed app
- Environment variables are properly configured (not exposed)
- Custom domain serves the site with HTTPS

## References

- [Architecture Doc](./docs/03-architecture.md)
- [Vercel Docs](https://vercel.com/docs)
- [Neon Docs](https://neon.tech/docs)
ISSUE_EOF
)"
echo "✓ Issue #2 created"

gh issue create --repo "$REPO" --title "#3 — Define Core Payload Collections" --label "setup" --body "$(cat <<'ISSUE_EOF'
## Description

Create the foundational Payload CMS collections: Projects and Categories. These are the core data model everything else builds on.

**Phase:** Setup · **Depends on:** #1 · **Blocks:** #4-#10

## Tasks

- [ ] Create Projects collection with fields:
  - `name` (text, required)
  - `slug` (text, auto-generated from name, unique)
  - `tagline` (text, max 120 chars)
  - `description` (rich text)
  - `logo` (upload)
  - `category` (relationship to Categories)
  - `tier` (select: Tier 1 / Tier 2 / Tier 3)
  - `license` (text, e.g., "MIT", "AGPL-3.0")
  - `githubUrl` (text, URL)
  - `websiteUrl` (text, URL)
  - `selfHostable` (checkbox)
  - `whiteLabelReady` (checkbox)
  - `featured` (checkbox)
- [ ] Create Categories collection with fields:
  - `name` (text, required)
  - `slug` (text, auto-generated, unique)
  - `description` (text)
  - `icon` (text — icon name or SVG)
- [ ] Configure admin panel views:
  - Projects list: show name, category, tier, featured
  - Categories list: show name, project count
- [ ] Set up access control (admin-only write, public read)
- [ ] Create seed script to populate initial categories:
  - Analytics, CRM, Email & Marketing, CMS, E-commerce, Project Management, Scheduling, Forms, Auth, Automation, Communication, Dev Tools, File Storage, Design, Finance
- [ ] Verify REST API endpoints work (`/api/projects`, `/api/categories`)

## Acceptance Criteria

- Can create, read, update, delete Projects via admin panel
- Can create, read, update, delete Categories via admin panel
- Projects are linked to Categories via relationship field
- REST API returns JSON for both collections
- Seed script populates 15 categories
- Slug auto-generates from name

## References

- [Architecture Doc](./docs/03-architecture.md) — Data model section
- [Payload Collections Docs](https://payloadcms.com/docs/configuration/collections)
ISSUE_EOF
)"
echo "✓ Issue #3 created"

# --- V1 ---

gh issue create --repo "$REPO" --title "#4 — Build Project Listing Page" --label "v1,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Build the `/projects` page — the main directory view where users browse all listed OSS projects.

**Phase:** V1 · **Depends on:** #3 · **Blocks:** #7

## Tasks

- [ ] Create `/projects` route in `app/(frontend)/projects/page.tsx`
- [ ] Grid/list view toggle (persist preference in localStorage)
- [ ] Project card component:
  - Logo, name, tagline, tier badge
  - Category tag
  - "Self-hostable" / "White-label" badges
  - Link to detail page
- [ ] Filter sidebar or top bar:
  - Filter by category (multi-select)
  - Filter by tier (Tier 1, 2, 3)
  - Filter by license type
  - Filter by flags (self-hostable, white-label ready)
- [ ] Search by project name (client-side for V1, server-side later)
- [ ] Sort by: Featured, Name (A-Z), Newest
- [ ] Pagination or infinite scroll
- [ ] Empty state when no results match filters
- [ ] SEO: meta title "Open Source Projects Directory | Projectwise"

## Acceptance Criteria

- Page displays all projects from Payload
- Filters narrow results correctly
- Search finds projects by name
- Grid and list views both work
- Responsive on mobile (single column)
- Page loads in < 2 seconds

## References

- [Architecture Doc](./docs/03-architecture.md) — Page structure
- [Roadmap](./docs/04-roadmap.md) — V1 deliverables
ISSUE_EOF
)"
echo "✓ Issue #4 created"

gh issue create --repo "$REPO" --title "#5 — Build Project Detail Page" --label "v1,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Build the `/projects/[slug]` page — the most important page on the site. This is where users learn about a project, see its commercial potential, and (later) access prompts, ideas, and showcases.

**Phase:** V1 · **Depends on:** #3 · **Blocks:** #7, #11-#20

## Tasks

- [ ] Create `/projects/[slug]` route with dynamic rendering
- [ ] Hero section:
  - Project logo (large)
  - Name and tagline
  - Tier badge (color-coded: Tier 1 green, Tier 2 blue, Tier 3 gray)
  - GitHub link, website link
  - Star count (fetched from GitHub or static)
- [ ] Overview section:
  - Rich text description
  - License info with explanation
  - Key features list
- [ ] Commercial Readiness section:
  - Tier explanation (why this tier)
  - Self-hostable / White-label badges
  - "What you can build with this" paragraph
- [ ] Sidebar:
  - Quick stats (stars, license, tier)
  - External links (GitHub, website, docs)
  - Category link
- [ ] Section placeholders for V2/V3 features:
  - "Deploy with AI" (placeholder, implemented in #13)
  - "Business Ideas" (placeholder, implemented in #16)
  - "Built With" showcase (placeholder, implemented in #17)
  - "Works Well With" (placeholder, implemented in #19)
- [ ] SEO:
  - Dynamic meta title: "[Project] — Open Source [Category] | Projectwise"
  - Meta description from tagline
  - Open Graph image (auto-generated or project logo)
  - JSON-LD SoftwareApplication schema

## Acceptance Criteria

- Page renders correctly for any valid project slug
- 404 for invalid slugs
- All sections display correct data
- Placeholder sections are visually present but noted as "coming soon"
- OG image works when shared on Twitter/LinkedIn
- Page loads in < 2 seconds
- Mobile responsive

## References

- [Architecture Doc](./docs/03-architecture.md)
- [New Features Doc](./docs/07-new-features.md) — Page layout section
ISSUE_EOF
)"
echo "✓ Issue #5 created"

gh issue create --repo "$REPO" --title "#6 — Build Category Pages" --label "v1,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Build `/categories/[slug]` pages that list all projects in a given category.

**Phase:** V1 · **Depends on:** #3 · **Blocks:** #7

## Tasks

- [ ] Create `/categories/[slug]` route
- [ ] Category header: name, icon, description, project count
- [ ] Filtered project grid (reuse project card component from #4)
- [ ] Sort by: Featured, Name, Newest
- [ ] Cross-links to related categories (sidebar or bottom section)
- [ ] `/categories` index page listing all categories with project counts
- [ ] SEO: "Best Open Source [Category] Software (2026) | Projectwise"

## Acceptance Criteria

- Each category page shows only projects in that category
- Category index shows all categories with counts
- 404 for invalid category slugs
- Cross-links navigate correctly
- Responsive layout

## References

- [Content Strategy](./docs/05-content-strategy.md) — Programmatic pages section
ISSUE_EOF
)"
echo "✓ Issue #6 created"

gh issue create --repo "$REPO" --title "#7 — Build Homepage" --label "v1,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Build the homepage — the entry point that communicates what Projectwise is and guides users to projects.

**Phase:** V1 · **Depends on:** #4, #5, #6

## Tasks

- [ ] Hero section:
  - Headline: "Build a Business on Open Source"
  - Subheadline explaining the value prop
  - CTA: "Browse Projects" → /projects
  - Secondary CTA: "I'm an Expert" / "I'm an Operator" (placeholder for V2)
- [ ] Featured projects section (3-6 staff picks)
  - Reuse project card component
  - "View all" link to /projects
- [ ] Category grid:
  - Icon, name, project count for each category
  - Links to category pages
- [ ] "How it works" section:
  1. Browse commercial-ready OSS
  2. Get AI setup prompts
  3. Launch your business
- [ ] Latest additions section (newest projects)
- [ ] SEO:
  - Title: "Projectwise — Build a Business on Open Source"
  - Meta description
  - OG image (branded)

## Acceptance Criteria

- Homepage loads in < 1.5 seconds
- All sections render with real data from Payload
- CTAs link to correct pages
- Responsive across mobile, tablet, desktop
- Visually polished — this is the first impression

## References

- [Vision Doc](./docs/01-vision.md) — Elevator pitch
ISSUE_EOF
)"
echo "✓ Issue #7 created"

gh issue create --repo "$REPO" --title "#8 — Site-Wide Layout and Navigation" --label "v1,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Build the shared layout: navigation, footer, responsive behavior, and utility pages.

**Phase:** V1 · **Depends on:** #1

## Tasks

- [ ] Responsive header/navbar:
  - Logo (left)
  - Nav links: Projects, Categories, Stacks (placeholder), Ideas (placeholder)
  - Search icon/input
  - Mobile hamburger menu
- [ ] Footer:
  - Links: About, Projects, Categories
  - Social: Twitter, GitHub
  - Newsletter signup placeholder (implemented in #15)
  - Copyright
- [ ] Breadcrumbs on inner pages (Projects > Category > Project Name)
- [ ] Dark/light mode toggle (persist in localStorage)
- [ ] 404 page with helpful navigation
- [ ] Error boundary page (500)
- [ ] Loading states / skeleton screens
- [ ] Global styles: typography, spacing, colors

## Acceptance Criteria

- Nav works on mobile and desktop
- Dark/light mode persists across page loads
- Breadcrumbs show correct hierarchy
- 404 page is helpful, not a dead end
- Consistent styling across all pages

## References

- [Architecture Doc](./docs/03-architecture.md) — Project structure
ISSUE_EOF
)"
echo "✓ Issue #8 created"

gh issue create --repo "$REPO" --title "#9 — Seed 20 Projects" --label "v1,content" --body "$(cat <<'ISSUE_EOF'
## Description

Add the first 20 projects to the database. These should be the strongest commercial-ready OSS projects, balanced across categories.

**Phase:** V1 · **Depends on:** #3

## Tasks

- [ ] Select top 20 from [seed list](./docs/06-project-seed-list.md), balanced across categories:
  - Analytics: Plausible, Umami, PostHog
  - CRM: Twenty, Erxes
  - Email: Listmonk, Dittofeed
  - CMS: Payload, Strapi
  - E-commerce: Medusa, Saleor
  - Project Mgmt: Plane, AppFlowy
  - Scheduling: Cal.com
  - Forms: Formbricks, Typebot
  - Auth: Authentik, SuperTokens
  - Automation: n8n, Activepieces
- [ ] For each project, write:
  - Tagline (max 120 chars)
  - Description (2-3 paragraphs, rich text)
  - Key features list (5-8 bullet points)
  - Assign tier (1, 2, or 3)
  - Set flags (selfHostable, whiteLabelReady)
- [ ] Collect logos (SVG preferred, PNG fallback)
- [ ] Create seed script or Payload migration to import all 20
- [ ] Verify all projects display correctly on listing and detail pages

## Acceptance Criteria

- 20 projects in the database
- Each has: name, tagline, description, logo, category, tier, license, URLs
- Balanced category distribution (no category empty)
- At least 8 Tier 1 projects
- Seed script is repeatable (can re-run without duplicates)

## References

- [Project Seed List](./docs/06-project-seed-list.md) — Full 100-project list
ISSUE_EOF
)"
echo "✓ Issue #9 created"

gh issue create --repo "$REPO" --title "#10 — Programmatic SEO Pages" --label "v1,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Create programmatic pages for SEO: "alternative to" pages, sitemap, meta tags, structured data.

**Phase:** V1 · **Depends on:** #5

## Tasks

- [ ] `/alternatives/[slug]` pages:
  - "Open Source Alternatives to [Product]"
  - List of OSS projects that replace the proprietary product
  - Comparison table (features, pricing, license)
  - Create pages for: Mailchimp, HubSpot, Calendly, Shopify, Notion, Jira, Intercom, Auth0, Zapier, Google Analytics
- [ ] Dynamic `sitemap.xml`:
  - All project pages
  - All category pages
  - All alternative pages
  - Auto-updates when content changes
- [ ] Meta tags for all page types:
  - Unique title (< 60 chars)
  - Meta description (< 160 chars)
  - Canonical URL
- [ ] Open Graph tags:
  - og:title, og:description, og:image
  - Twitter card meta tags
- [ ] JSON-LD structured data:
  - `SoftwareApplication` schema on project pages
  - `ItemList` schema on listing pages
  - `BreadcrumbList` schema on all pages
- [ ] `robots.txt`: allow all, block `/admin`

## Acceptance Criteria

- `/alternatives/mailchimp` (and 9 others) render correctly
- `sitemap.xml` includes all public pages
- Google Rich Results Test passes for structured data
- OG tags render previews on Twitter and LinkedIn
- `robots.txt` is accessible at `/robots.txt`

## References

- [Content Strategy](./docs/05-content-strategy.md) — SEO and programmatic pages
ISSUE_EOF
)"
echo "✓ Issue #10 created"

# --- V2 ---

gh issue create --repo "$REPO" --title "#11 — Expert Interest Form + Collection" --label "v2,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Add the Experts collection and "I can help with this project" form on project detail pages.

**Phase:** V2 · **Depends on:** #5

## Tasks

- [ ] Create Experts Payload collection:
  - `name` (text, required)
  - `email` (email, required)
  - `githubUsername` (text)
  - `projects` (relationship to Projects, hasMany)
  - `skills` (array of text)
  - `rate` (number, optional — $/hour)
  - `availability` (select: Full-time, Part-time, Occasional)
  - `portfolio` (text, URL)
  - `status` (select: pending, verified, rejected — default: pending)
- [ ] Build form UI on project detail page
  - "I can help deploy this project" CTA
  - Modal or inline form
  - Fields: name, email, GitHub username, skills, rate, message
  - Client-side validation
- [ ] Form submission handler (Next.js Server Action or API route)
- [ ] Admin review workflow in Payload:
  - List view shows pending submissions
  - Admin can change status to verified/rejected
- [ ] Email notification to admin on new submission
- [ ] Success confirmation message to user

## Acceptance Criteria

- Form submits successfully and creates Expert record
- Admin sees new submissions in Payload dashboard
- Validation prevents empty/invalid submissions
- Email notification fires on submission
- Form is accessible (keyboard nav, screen readers)

## References

- [Architecture Doc](./docs/03-architecture.md) — Experts collection schema
- [Roadmap](./docs/04-roadmap.md) — V2 deliverables
ISSUE_EOF
)"
echo "✓ Issue #11 created"

gh issue create --repo "$REPO" --title "#12 — Operator Interest Form + Collection" --label "v2,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Add the Interests collection and "I want to run this as SaaS" form on project detail pages.

**Phase:** V2 · **Depends on:** #5

## Tasks

- [ ] Create Interests Payload collection:
  - `name` (text, required)
  - `email` (email, required)
  - `project` (relationship to Projects)
  - `type` (select: expert, operator — default: operator)
  - `message` (textarea)
  - `budget` (select: \$500-1k, \$1k-5k, \$5k-10k, \$10k+)
  - `timeline` (select: ASAP, 1-3 months, 3-6 months, Just exploring)
  - `createdAt` (date, auto)
- [ ] Build form UI on project detail page
  - "I want to run this as a business" CTA
  - Fields: name, email, budget, timeline, message
- [ ] Form submission handler
- [ ] Admin notification on submission
- [ ] Thank you page with next steps info

## Acceptance Criteria

- Form creates Interest record linked to the correct project
- Admin sees submissions with project context
- Budget and timeline selections work
- Confirmation shown after submission

## References

- [Architecture Doc](./docs/03-architecture.md) — Interests collection
ISSUE_EOF
)"
echo "✓ Issue #12 created"

gh issue create --repo "$REPO" --title "#13 — AI Setup Prompts" --label "v2,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Add the Prompts collection and "Deploy with AI" section on project detail pages. This is a key differentiator — copy-paste prompts for Claude Code, Cursor, and Codex.

**Phase:** V2 · **Depends on:** #5

## Tasks

- [ ] Create Prompts Payload collection:
  - `project` (relationship to Projects)
  - `type` (select: quick-start, business-setup, full-stack)
  - `title` (text, e.g., "Deploy Listmonk as Email SaaS")
  - `prompt` (textarea — the actual AI prompt)
  - `tools` (select multiple: claude-code, cursor, codex, any)
  - `relatedProjects` (relationship to Projects, hasMany — for full-stack)
  - `tested` (checkbox)
  - `testedDate` (date)
  - `difficulty` (select: Easy, Medium, Advanced)
- [ ] Build "Deploy with AI" section on project detail page:
  - Tab or accordion for each prompt type
  - Prompt displayed in code block with syntax highlighting
  - Copy-to-clipboard button with confirmation
  - Badge showing which tools it's tested with
  - Difficulty indicator
- [ ] Write Quick Start prompts for all 20 seed projects
- [ ] Write Business Setup prompts for Tier 1 projects
- [ ] Test each prompt with at least one AI tool

## Acceptance Criteria

- Prompts display correctly on project pages
- Copy-to-clipboard works across browsers
- Each of the 20 seed projects has at least one prompt
- Tier 1 projects have both Quick Start and Business Setup prompts
- Prompts are accurate and produce working results

## References

- [New Features Doc](./docs/07-new-features.md) — Feature A: AI Setup Prompts
ISSUE_EOF
)"
echo "✓ Issue #13 created"

gh issue create --repo "$REPO" --title "#14 — GitHub Contributors Integration" --label "v2,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Fetch and display GitHub contributors for each project on the detail page.

**Phase:** V2 · **Depends on:** #5

## Tasks

- [ ] GitHub API integration:
  - Fetch top contributors for a repo (GET /repos/{owner}/{repo}/contributors)
  - Parse GitHub URL from project record to extract owner/repo
  - Handle rate limiting (authenticate with GitHub token)
- [ ] Cache layer:
  - Cache contributor data in database or file system
  - Refresh weekly or on-demand from admin
  - Fallback to cached data if API is down
- [ ] Contributors section on project detail page:
  - Avatar grid (top 10-20 contributors)
  - Link to GitHub profile on click
  - "View all on GitHub" link
  - Contribution count per contributor
- [ ] Handle edge cases:
  - Private repos (no data available)
  - Orgs vs. users
  - Bot accounts (dependabot, etc.)

## Acceptance Criteria

- Contributors show on project pages with correct avatars
- Clicking avatar goes to GitHub profile
- API rate limits are respected
- Cached data serves if API is unavailable
- Page doesn't break if GitHub data is missing

## References

- [GitHub REST API — Contributors](https://docs.github.com/en/rest/repos/repos#list-repository-contributors)
ISSUE_EOF
)"
echo "✓ Issue #14 created"

gh issue create --repo "$REPO" --title "#15 — Newsletter Signup" --label "v2,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Add email newsletter signup to capture audience for launch.

**Phase:** V2 · **Depends on:** #8

## Tasks

- [ ] Choose provider: Buttondown (simple) or ConvertKit (more features)
- [ ] Email capture form:
  - Footer placement (all pages)
  - Homepage CTA section
  - Optional: exit-intent popup
- [ ] Integration with provider API
- [ ] Double opt-in flow
- [ ] Welcome email automation
- [ ] Success/error states on form

## Acceptance Criteria

- Email signup works from footer on every page
- Submissions appear in email provider dashboard
- Double opt-in email sends correctly
- Error handling for invalid emails, duplicates
- No CORS or API issues

## References

- [Content Strategy](./docs/05-content-strategy.md) — Newsletter section
ISSUE_EOF
)"
echo "✓ Issue #15 created"

# --- V3 ---

gh issue create --repo "$REPO" --title "#16 — Business Ideas Collection + Pages" --label "v3,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Add the Ideas collection and pages — 3-5 curated business ideas per project.

**Phase:** V3 · **Depends on:** #5

## Tasks

- [ ] Create Ideas Payload collection:
  - `title` (text, e.g., "Email Marketing SaaS for E-commerce")
  - `slug` (auto from title)
  - `project` (relationship to Projects)
  - `description` (rich text)
  - `targetMarket` (array: countries, industries)
  - `suggestedPricing` (group: starter, professional, enterprise amounts)
  - `competitors` (array: names of SaaS competitors)
  - `difficulty` (select: Easy, Medium, Hard)
  - `potentialMRR` (select: \$1-5k, \$5-20k, \$20-100k, \$100k+)
  - `requirements` (array: technical requirements)
- [ ] Ideas section on project detail page (3-5 cards)
- [ ] `/ideas` index page:
  - All ideas across all projects
  - Filter by: project, difficulty, MRR potential, market
  - Card layout with key info
- [ ] `/ideas/[slug]` detail page:
  - Full description, target market, pricing, competitors
  - Link back to project
  - "Get started" CTA linking to AI prompt
- [ ] Write 60-100 ideas across seed projects

## Acceptance Criteria

- Ideas display on project pages
- Index and detail pages work
- Filters narrow results correctly
- At least 3 ideas per seed project
- SEO meta tags on all idea pages

## References

- [Roadmap](./docs/04-roadmap.md) — V3 deliverables
- [New Features Doc](./docs/07-new-features.md) — Ideas data model
ISSUE_EOF
)"
echo "✓ Issue #16 created"

gh issue create --repo "$REPO" --title "#17 — Project Showcase + Submissions" --label "v3,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Add the Showcases collection — a "Built With" gallery showing real businesses built on each OSS project. Community can submit their own projects.

**Phase:** V3 · **Depends on:** #5

## Tasks

- [ ] Create Showcases Payload collection:
  - `name` (text — business/project name)
  - `url` (text — live URL)
  - `screenshot` (upload — required)
  - `description` (text, max 250 chars)
  - `project` (relationship to Projects — primary OSS project)
  - `additionalProjects` (relationship to Projects, hasMany)
  - `industry` (select: SaaS, Agency, E-commerce, Education, Media, Other)
  - `revenue` (select: Pre-revenue, \$1-10k MRR, \$10-100k MRR, \$100k+ MRR)
  - `techStack` (array of text — other technologies)
  - `submittedBy` (text — name or GitHub username)
  - `email` (email — for follow-up)
  - `featured` (checkbox — staff pick)
  - `status` (select: pending, approved, rejected — default: pending)
- [ ] "Built with [Project]" section on project detail page:
  - Grid of 3-6 approved showcases
  - Screenshot thumbnail, name, description
  - "View all" link
- [ ] Showcase submission form:
  - Accessible from project page ("Submit your project")
  - Fields: name, URL, screenshot upload, description, tech stack
  - Form validation
  - Status: pending (requires admin approval)
- [ ] Admin review workflow:
  - List pending submissions
  - Approve/reject with one click
  - Optional: mark as "Staff Pick"
- [ ] `/showcase` global index page (all approved entries)
- [ ] `/projects/[slug]/showcase` per-project showcase page
- [ ] "Staff Pick" badge on featured entries

## Acceptance Criteria

- Submission form works with screenshot upload
- Pending submissions appear in Payload admin
- Approved entries show on project page and global page
- Staff Picks are visually highlighted
- Screenshots display correctly (proper sizing, lazy loading)

## References

- [New Features Doc](./docs/07-new-features.md) — Feature B: Project Showcase
ISSUE_EOF
)"
echo "✓ Issue #17 created"

gh issue create --repo "$REPO" --title "#18 — Curated Stacks + Pages" --label "v3,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Add the Stacks collection — curated combinations of OSS projects for common business use cases, each with an AI deploy prompt.

**Phase:** V3 · **Depends on:** #5

## Tasks

- [ ] Create Stacks Payload collection:
  - `name` (text, e.g., "E-commerce Stack")
  - `slug` (auto from name)
  - `description` (rich text)
  - `useCase` (text — one-line use case)
  - `projects` (array of groups):
    - `project` (relationship to Projects)
    - `role` (text, e.g., "Storefront", "Authentication")
  - `estimatedCost` (text, e.g., "\$20-50/month")
  - `difficulty` (select: Easy, Medium, Advanced)
  - `deployPrompt` (textarea — AI prompt for the entire stack)
  - `featured` (checkbox)
- [ ] `/stacks` index page:
  - All stacks in card grid
  - Filter by difficulty, use case
  - Show project logos for each stack
- [ ] `/stacks/[slug]` detail page:
  - Description and use case
  - List of projects with their roles (linked to project pages)
  - Estimated monthly cost breakdown
  - "Deploy This Stack" AI prompt with copy button
- [ ] "Part of these stacks" section on project detail page
- [ ] Create 5 initial stacks:
  1. **E-commerce Stack**: Medusa + MinIO + Authentik + Listmonk + Plausible
  2. **SaaS Starter**: Next.js + Payload + Authentik + PostHog
  3. **Agency Stack**: WordPress + Mautic + Matomo + Invoice Ninja + Chatwoot
  4. **Community Platform**: Ghost + Rocket.Chat + Cal.com + Formbricks + Plausible
  5. **DevOps Stack**: Gitea + Drone + Coolify + Sentry + n8n

## Acceptance Criteria

- 5 stacks created with all fields populated
- Stack pages show project list with roles
- Deploy prompts are testable and copy-able
- Project pages show "Part of these stacks" section
- Responsive layout

## References

- [New Features Doc](./docs/07-new-features.md) — Feature C: Stacks & Interlinking
ISSUE_EOF
)"
echo "✓ Issue #18 created"

gh issue create --repo "$REPO" --title "#19 — Project Interlinking + Relationships" --label "v3,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Add the ProjectRelationships collection to model how projects relate to each other: works-with, depends-on, alternative-to, extends.

**Phase:** V3 · **Depends on:** #5

## Tasks

- [ ] Create ProjectRelationships Payload collection:
  - `projectA` (relationship to Projects)
  - `projectB` (relationship to Projects)
  - `type` (select: works-with, depends-on, alternative-to, extends)
  - `description` (text — why they're related)
  - `bidirectional` (checkbox — true for works-with, alternative-to)
- [ ] "Works Well With" section on project detail page:
  - Show related projects with relationship description
  - Link to related project pages
- [ ] "Alternatives" section on project detail page:
  - Other projects solving the same problem
  - Brief comparison note
- [ ] Bidirectional display:
  - If A works-with B, show on both A and B pages
  - If A depends-on B, show "Used by A" on B's page
- [ ] Seed initial relationships:
  - At least 3 relationships per seed project
  - Mix of works-with, depends-on, and alternative-to
- [ ] Admin UI for managing relationships

## Acceptance Criteria

- Relationships display on both sides (bidirectional)
- Each relationship type renders differently (different badge/color)
- Clicking related project navigates to its page
- Admin can create/edit/delete relationships
- No duplicate relationships (A→B and B→A for bidirectional)

## References

- [New Features Doc](./docs/07-new-features.md) — Feature C: Stacks & Interlinking
ISSUE_EOF
)"
echo "✓ Issue #19 created"

gh issue create --repo "$REPO" --title "#20 — Seed Showcase Data" --label "v3,content" --body "$(cat <<'ISSUE_EOF'
## Description

Populate the showcase with real entries from existing OSS project showcases.

**Phase:** V3 · **Depends on:** #17

## Tasks

- [ ] Collect 3-5 showcase entries per Tier 1 project from existing sources:
  - Next.js showcase (nextjs.org/showcase)
  - Tailwind CSS showcase (tailwindcss.com/showcase)
  - Strapi showcase (strapi.io/showcases)
  - Ghost explore (ghost.org/explore)
  - Payload case studies (payloadcms.com/case-studies)
  - Medusa showcase (medusajs.com/showcase)
  - Cal.com customers (cal.com/customers)
- [ ] For each entry:
  - Capture screenshot (full page or hero)
  - Write description (max 250 chars)
  - Identify industry and approximate revenue tier
  - Note additional tech stack if visible
- [ ] Import via seed script or Payload admin
- [ ] Mark 5-10 entries as "Staff Pick"
- [ ] Verify all screenshots display correctly

## Acceptance Criteria

- At least 30 showcase entries total
- At least 3 entries per Tier 1 project
- All entries have screenshots, descriptions
- Staff Picks are visually highlighted
- Data import is repeatable

## References

- [New Features Doc](./docs/07-new-features.md) — Showcase sources table
ISSUE_EOF
)"
echo "✓ Issue #20 created"

# --- V4 ---

gh issue create --repo "$REPO" --title "#21 — Seed 50 Projects + Full Content" --label "v4,content" --body "$(cat <<'ISSUE_EOF'
## Description

Expand from 20 to 50 projects with complete content for all features: prompts, ideas, relationships.

**Phase:** V4 · **Depends on:** #9, #13, #16

## Tasks

- [ ] Add 30 more projects from [seed list](./docs/06-project-seed-list.md)
- [ ] For each new project:
  - Full description, tagline, features
  - Logo and tier assignment
  - At least 1 AI setup prompt
  - At least 2 business ideas
  - Relationship mappings (works-with, alternatives)
- [ ] Quality pass on all 50 projects:
  - Consistent description quality
  - All logos present and properly sized
  - Screenshots where available
  - Accurate tier assignments
- [ ] Verify all programmatic SEO pages generate correctly

## Acceptance Criteria

- 50 projects in database with full content
- All 50 have at least 1 prompt and 2 ideas
- Relationship graph covers all 50 projects
- No broken images or missing data
- All category pages populated

## References

- [Project Seed List](./docs/06-project-seed-list.md) — Full 100-project list
ISSUE_EOF
)"
echo "✓ Issue #21 created"

gh issue create --repo "$REPO" --title "#22 — Analytics Setup" --label "v4,feature" --body "$(cat <<'ISSUE_EOF'
## Description

Integrate privacy-friendly analytics to track site usage for launch.

**Phase:** V4 · **Depends on:** #2

## Tasks

- [ ] Choose and integrate: Plausible (cloud) or Umami (self-hosted)
- [ ] Track standard metrics: page views, unique visitors, referrers, top pages
- [ ] Custom events:
  - Form submissions (expert, operator, showcase)
  - AI prompt copies (which project, which prompt type)
  - Search queries
  - Filter usage
- [ ] Dashboard access for team
- [ ] Verify no PII is tracked (GDPR compliant)
- [ ] Add to all page layouts

## Acceptance Criteria

- Analytics loads on all pages without impacting performance
- Dashboard shows real-time and historical data
- Custom events fire correctly
- No cookie banner needed (privacy-first tool)
- Lighthouse score not impacted (< 50ms load time for script)

## References

- [Content Strategy](./docs/05-content-strategy.md) — Metrics section
ISSUE_EOF
)"
echo "✓ Issue #22 created"

gh issue create --repo "$REPO" --title "#23 — Performance Optimization + Launch Prep" --label "v4" --body "$(cat <<'ISSUE_EOF'
## Description

Final optimization pass and launch preparation. Ensure the site is fast, accessible, and ready for traffic.

**Phase:** V4 · **Depends on:** All previous issues

## Tasks

- [ ] Performance:
  - Lighthouse score > 90 on all page types (home, listing, detail, category)
  - Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
  - Image optimization: Next.js Image component, WebP format, lazy loading
  - Bundle analysis: identify and remove unused code
  - Code splitting: dynamic imports for heavy components
- [ ] Accessibility:
  - Keyboard navigation works on all interactive elements
  - Screen reader compatibility (ARIA labels)
  - Color contrast meets WCAG AA
  - Focus indicators visible
- [ ] Load testing:
  - Test with 100 concurrent users
  - Verify no database connection pool exhaustion
  - CDN caching configured correctly
- [ ] Final QA:
  - Test all pages across Chrome, Firefox, Safari
  - Test on mobile (iOS Safari, Android Chrome)
  - Test all forms submission flows
  - Verify all links work (no 404s)
  - Check OG images render on Twitter/LinkedIn
- [ ] Launch prep:
  - Verify custom domain and SSL
  - Set up error monitoring (Sentry or similar)
  - Database backup configured
  - Prepare rollback plan

## Acceptance Criteria

- Lighthouse > 90 on all page types
- All Core Web Vitals green
- No accessibility violations (axe-core)
- All forms work end-to-end
- Site handles 100 concurrent users without degradation
- Custom domain live with HTTPS

## References

- [Roadmap](./docs/04-roadmap.md) — V4 and performance targets
ISSUE_EOF
)"
echo "✓ Issue #23 created"

echo ""
echo "=============================="
echo "✓ All 23 issues created!"
echo "=============================="
