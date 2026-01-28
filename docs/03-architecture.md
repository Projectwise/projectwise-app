# Architecture & Tech Stack

> Technical architecture for Projectwise — a Next.js 15 + Payload CMS 3.0 application.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Data Models](#data-models)
5. [API Design](#api-design)
6. [Authentication](#authentication)
7. [Deployment](#deployment)
8. [External Integrations](#external-integrations)

---

## Architecture Overview

### Single-App Architecture

Payload CMS 3.0 installs directly into Next.js, eliminating the need for separate frontend/backend repos.

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PROJECTWISE ARCHITECTURE                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                    NEXT.JS 15 APP                           │   │
│   ├─────────────────────────────────────────────────────────────┤   │
│   │                                                             │   │
│   │   /app                                                      │   │
│   │   ├── (frontend)/        # Public pages (SSR/SSG)           │   │
│   │   │   ├── /              # Homepage                         │   │
│   │   │   ├── /projects      # Project listings                 │   │
│   │   │   ├── /experts       # Expert profiles                  │   │
│   │   │   ├── /ideas         # Business ideas                   │   │
│   │   │   └── /category      # Category pages                   │   │
│   │   │                                                         │   │
│   │   └── (payload)/         # CMS (admin + API)                │   │
│   │       ├── /admin         # Admin panel                      │   │
│   │       └── /api           # REST + GraphQL                   │   │
│   │                                                             │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                    PAYLOAD CMS 3.0                          │   │
│   ├─────────────────────────────────────────────────────────────┤   │
│   │  Collections: Projects, Categories, Experts, Ideas, Users   │   │
│   │  Globals: Site Settings, Featured Projects                  │   │
│   │  Auth: Built-in JWT + OAuth                                 │   │
│   │  Media: Image/file handling                                 │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                    POSTGRESQL (Neon)                        │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Why Single-App?

| Benefit | Description |
|---------|-------------|
| **Simpler deployment** | One Vercel project |
| **No CORS issues** | Frontend and API same origin |
| **Shared types** | TypeScript types across app |
| **Local API** | No HTTP overhead for internal calls |
| **Faster development** | Single codebase to manage |

---

## Tech Stack

### Core Framework

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Framework** | Next.js | 15.x | React framework with App Router |
| **CMS** | Payload CMS | 3.x | Headless CMS, admin panel |
| **Language** | TypeScript | 5.x | Type safety |
| **Runtime** | Node.js | 20.x LTS | Server runtime |

### Frontend

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Styling** | Tailwind CSS 4 | Utility-first CSS |
| **Components** | shadcn/ui | Pre-built accessible components |
| **Icons** | Lucide React | Icon library |
| **Forms** | React Hook Form + Zod | Form handling + validation |
| **Data Fetching** | TanStack Query | Server state management |

### Backend/CMS

| Layer | Technology | Purpose |
|-------|------------|---------|
| **CMS** | Payload CMS 3.0 | Content management |
| **Database** | PostgreSQL | Primary data store |
| **ORM** | Drizzle (via Payload) | Database queries |
| **Auth** | Payload Auth + Auth.js | Authentication |
| **Media** | Vercel Blob / Cloudinary | Image storage |

### Infrastructure

| Service | Provider | Tier |
|---------|----------|------|
| **Hosting** | Vercel | Free |
| **Database** | Neon PostgreSQL | Free (0.5GB) |
| **Media Storage** | Vercel Blob | Free (1GB) |
| **Domain** | Cloudflare | ~$10/year |
| **Analytics** | Plausible (self-hosted) | Free |

### Development Tools

| Tool | Purpose |
|------|---------|
| **Package Manager** | pnpm | Fast, disk-efficient |
| **Linting** | ESLint + Prettier | Code quality |
| **Testing** | Vitest + Playwright | Unit + E2E tests |
| **Git Hooks** | Husky + lint-staged | Pre-commit checks |

---

## Project Structure

```
projectwise/
├── app/
│   ├── (frontend)/                 # Public routes (route group)
│   │   ├── page.tsx                # Homepage
│   │   ├── layout.tsx              # Frontend layout
│   │   ├── projects/
│   │   │   ├── page.tsx            # /projects - listing
│   │   │   └── [slug]/
│   │   │       ├── page.tsx        # /projects/[slug] - detail
│   │   │       └── ideas/
│   │   │           └── page.tsx    # /projects/[slug]/ideas
│   │   ├── category/
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # /category/[slug]
│   │   ├── alternative/
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # /alternative/[slug]
│   │   ├── experts/
│   │   │   ├── page.tsx            # /experts - listing
│   │   │   ├── join/
│   │   │   │   └── page.tsx        # /experts/join - signup form
│   │   │   └── [username]/
│   │   │       └── page.tsx        # /experts/[username] - profile
│   │   ├── ideas/
│   │   │   ├── page.tsx            # /ideas - all ideas
│   │   │   ├── country/
│   │   │   │   └── [country]/
│   │   │   │       └── page.tsx    # /ideas/country/[country]
│   │   │   └── industry/
│   │   │       └── [industry]/
│   │   │           └── page.tsx    # /ideas/industry/[industry]
│   │   ├── submit/
│   │   │   └── page.tsx            # /submit - project submission
│   │   └── about/
│   │       └── page.tsx            # /about
│   │
│   ├── (payload)/                  # Payload routes (route group)
│   │   ├── admin/
│   │   │   └── [[...segments]]/
│   │   │       └── page.tsx        # /admin - CMS admin panel
│   │   └── api/
│   │       └── [...slug]/
│   │           └── route.ts        # /api/* - REST API
│   │
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
│
├── payload/
│   ├── collections/
│   │   ├── Projects.ts             # Projects collection
│   │   ├── Categories.ts           # Categories collection
│   │   ├── Experts.ts              # Experts collection
│   │   ├── Ideas.ts                # Business ideas collection
│   │   ├── Contributors.ts         # GitHub contributors
│   │   ├── Jobs.ts                 # Job postings (V3)
│   │   ├── Interests.ts            # Waitlist signups
│   │   └── Users.ts                # Admin users
│   ├── globals/
│   │   ├── Settings.ts             # Site-wide settings
│   │   └── Featured.ts             # Featured projects
│   ├── hooks/                      # Payload hooks
│   │   └── syncGitHub.ts           # Sync GitHub stats
│   └── payload.config.ts           # Main Payload config
│
├── components/
│   ├── ui/                         # shadcn/ui components
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   └── ProjectDetail.tsx
│   ├── experts/
│   │   ├── ExpertCard.tsx
│   │   └── ExpertProfile.tsx
│   ├── ideas/
│   │   ├── IdeaCard.tsx
│   │   └── IdeaList.tsx
│   ├── forms/
│   │   ├── ExpertSignupForm.tsx
│   │   ├── OperatorInterestForm.tsx
│   │   └── ProjectSubmitForm.tsx
│   └── layout/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Sidebar.tsx
│
├── lib/
│   ├── payload.ts                  # Payload client
│   ├── github.ts                   # GitHub API helpers
│   ├── utils.ts                    # General utilities
│   └── constants.ts                # App constants
│
├── public/
│   ├── images/
│   └── fonts/
│
├── docs/                           # Documentation (this folder)
│
├── .env.example
├── .env.local
├── next.config.js
├── payload.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Data Models

### Projects Collection

```typescript
// payload/collections/Projects.ts
import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'tier', 'status', 'stars'],
  },
  fields: [
    // Basic Info
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'tagline', type: 'text', required: true, maxLength: 150 },
    { name: 'description', type: 'richText', required: true },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    { name: 'screenshot', type: 'upload', relationTo: 'media' },

    // Links
    { name: 'website_url', type: 'text', required: true },
    { name: 'github_url', type: 'text', required: true },
    { name: 'docs_url', type: 'text' },
    { name: 'demo_url', type: 'text' },

    // Classification
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
    },
    {
      name: 'alternatives_to',
      type: 'array',
      fields: [{ name: 'name', type: 'text' }],
    },

    // License
    {
      name: 'license',
      type: 'select',
      options: [
        { label: 'MIT', value: 'MIT' },
        { label: 'Apache 2.0', value: 'Apache-2.0' },
        { label: 'BSD 3-Clause', value: 'BSD-3-Clause' },
        { label: 'AGPL 3.0', value: 'AGPL-3.0' },
        { label: 'GPL 3.0', value: 'GPL-3.0' },
        { label: 'ISC', value: 'ISC' },
        { label: 'MPL 2.0', value: 'MPL-2.0' },
        { label: 'Other', value: 'Other' },
      ],
      required: true,
    },
    { name: 'license_url', type: 'text' },

    // Commercial Readiness
    {
      name: 'tier',
      type: 'select',
      options: [
        { label: 'Tier 1: Reseller-Ready', value: '1' },
        { label: 'Tier 2: Operator-Friendly', value: '2' },
        { label: 'Tier 3: Technically Possible', value: '3' },
      ],
      required: true,
    },
    { name: 'has_white_label', type: 'checkbox', defaultValue: false },
    { name: 'has_multi_tenancy', type: 'checkbox', defaultValue: false },
    { name: 'has_official_support', type: 'checkbox', defaultValue: false },
    { name: 'has_cloud_version', type: 'checkbox', defaultValue: false },
    { name: 'pricing_url', type: 'text' },

    // Deployment
    {
      name: 'deploy_options',
      type: 'group',
      fields: [
        { name: 'docker', type: 'checkbox', defaultValue: false },
        { name: 'docker_url', type: 'text' },
        { name: 'coolify', type: 'checkbox', defaultValue: false },
        { name: 'coolify_url', type: 'text' },
        { name: 'railway', type: 'checkbox', defaultValue: false },
        { name: 'railway_url', type: 'text' },
        { name: 'elestio', type: 'checkbox', defaultValue: false },
        { name: 'elestio_url', type: 'text' },
      ],
    },
    { name: 'estimated_hosting_cost', type: 'text' },

    // GitHub Stats (auto-synced)
    {
      name: 'github_stats',
      type: 'group',
      admin: { readOnly: true },
      fields: [
        { name: 'stars', type: 'number', defaultValue: 0 },
        { name: 'forks', type: 'number', defaultValue: 0 },
        { name: 'open_issues', type: 'number', defaultValue: 0 },
        { name: 'last_commit', type: 'date' },
        { name: 'language', type: 'text' },
        { name: 'contributors_count', type: 'number', defaultValue: 0 },
      ],
    },

    // Contributors
    {
      name: 'contributors',
      type: 'relationship',
      relationTo: 'contributors',
      hasMany: true,
    },

    // Metadata
    { name: 'featured', type: 'checkbox', defaultValue: false },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' },
      ],
      defaultValue: 'draft',
      required: true,
    },
  ],
}
```

### Categories Collection

```typescript
// payload/collections/Categories.ts
export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'description', type: 'textarea' },
    { name: 'icon', type: 'text' }, // Lucide icon name
    {
      name: 'projects_count',
      type: 'number',
      admin: { readOnly: true },
      defaultValue: 0,
    },
  ],
}
```

### Ideas Collection

```typescript
// payload/collections/Ideas.ts
export const Ideas: CollectionConfig = {
  slug: 'ideas',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'description', type: 'richText', required: true },

    // Linked project
    {
      name: 'project',
      type: 'relationship',
      relationTo: 'projects',
      required: true,
    },

    // Market analysis
    { name: 'target_market', type: 'text', required: true },
    { name: 'market_size', type: 'text' },
    { name: 'why_now', type: 'textarea', required: true },

    // Execution
    { name: 'suggested_pricing', type: 'text', required: true },
    { name: 'revenue_potential', type: 'text' },
    {
      name: 'difficulty',
      type: 'select',
      options: [
        { label: 'Easy', value: 'easy' },
        { label: 'Medium', value: 'medium' },
        { label: 'Hard', value: 'hard' },
      ],
      required: true,
    },
    { name: 'time_to_launch', type: 'text' },

    // Geographic
    {
      name: 'countries',
      type: 'array',
      fields: [{ name: 'country', type: 'text' }],
    },
    { name: 'country_reasons', type: 'textarea' },

    // Validation
    { name: 'search_volume', type: 'number' },
    { name: 'competitor_count', type: 'number' },
    {
      name: 'proof_signals',
      type: 'array',
      fields: [{ name: 'signal', type: 'text' }],
    },

    // SEO
    {
      name: 'keywords',
      type: 'array',
      fields: [{ name: 'keyword', type: 'text' }],
    },

    // Status
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
    },
  ],
}
```

### Experts Collection

```typescript
// payload/collections/Experts.ts
export const Experts: CollectionConfig = {
  slug: 'experts',
  auth: true, // Enables authentication for this collection
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'avatar', type: 'upload', relationTo: 'media' },
    { name: 'bio', type: 'textarea' },

    // Links
    { name: 'github_url', type: 'text', required: true },
    { name: 'linkedin_url', type: 'text' },
    { name: 'website_url', type: 'text' },
    { name: 'calendly_url', type: 'text' },

    // Expertise
    {
      name: 'projects_expertise',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
    },
    {
      name: 'experience_level',
      type: 'select',
      options: [
        { label: 'Contributor', value: 'contributor' },
        { label: 'Expert', value: 'expert' },
        { label: 'Maintainer', value: 'maintainer' },
      ],
    },

    // Availability
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Available', value: 'available' },
        { label: 'Busy', value: 'busy' },
        { label: 'Not Available', value: 'not_available' },
      ],
      defaultValue: 'available',
    },
    { name: 'hourly_rate', type: 'number' },
    { name: 'location', type: 'text' },
    { name: 'timezone', type: 'text' },
    {
      name: 'languages',
      type: 'array',
      fields: [{ name: 'language', type: 'text' }],
    },

    // Verification
    { name: 'verified_contributor', type: 'checkbox', defaultValue: false },
    { name: 'verified_at', type: 'date' },

    // Stats
    { name: 'implementations_count', type: 'number', defaultValue: 0 },

    // Approval
    {
      name: 'approval_status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
      ],
      defaultValue: 'pending',
    },
  ],
}
```

### Interest Forms Collection

```typescript
// payload/collections/Interests.ts
export const Interests: CollectionConfig = {
  slug: 'interests',
  admin: { useAsTitle: 'email' },
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Expert', value: 'expert' },
        { label: 'Operator', value: 'operator' },
        { label: 'Project', value: 'project' },
      ],
      required: true,
    },
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'github_username', type: 'text' },
    { name: 'company', type: 'text' },
    { name: 'project_interested', type: 'text' },
    { name: 'location', type: 'text' },
    { name: 'message', type: 'textarea' },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Converted', value: 'converted' },
        { label: 'Declined', value: 'declined' },
      ],
      defaultValue: 'new',
    },
  ],
}
```

---

## API Design

### REST API (Auto-generated by Payload)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/projects` | GET | List all projects |
| `/api/projects/:id` | GET | Get single project |
| `/api/projects` | POST | Create project (admin) |
| `/api/categories` | GET | List all categories |
| `/api/experts` | GET | List approved experts |
| `/api/ideas` | GET | List all ideas |
| `/api/interests` | POST | Submit interest form |

### GraphQL (Also auto-generated)

```graphql
query GetProject($slug: String!) {
  Projects(where: { slug: { equals: $slug } }) {
    docs {
      name
      tagline
      description
      categories {
        name
        slug
      }
      github_stats {
        stars
        forks
      }
      contributors {
        github_username
        avatar_url
      }
    }
  }
}
```

---

## Authentication

### Payload Built-in Auth

```typescript
// payload.config.ts
export default buildConfig({
  collections: [
    {
      slug: 'users',
      auth: {
        tokenExpiration: 7200, // 2 hours
        verify: true,
        maxLoginAttempts: 5,
        lockTime: 600000, // 10 minutes
      },
      fields: [
        {
          name: 'role',
          type: 'select',
          options: ['admin', 'editor'],
          required: true,
          defaultValue: 'editor',
        },
      ],
    },
  ],
})
```

### GitHub OAuth (V2+)

```typescript
// Using Auth.js plugin for Payload
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

## Deployment

### Vercel Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'github.com' },
    ],
  },
}

export default nextConfig
```

### Environment Variables

```bash
# .env.example

# Database
DATABASE_URI=postgresql://...

# Payload
PAYLOAD_SECRET=your-secret-key

# GitHub OAuth (V2+)
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret

# GitHub API (for stats sync)
GITHUB_TOKEN=your-github-token

# Media storage
BLOB_READ_WRITE_TOKEN=your-vercel-blob-token

# Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=projectwise.io
```

### Deployment Checklist

- [ ] Create Vercel project
- [ ] Add Neon PostgreSQL integration
- [ ] Configure environment variables
- [ ] Enable Vercel Blob storage
- [ ] Set up custom domain (projectwise.io)
- [ ] Configure Cloudflare DNS

---

## External Integrations

### GitHub API

Purpose: Sync stars, forks, contributors for each project

```typescript
// lib/github.ts
export async function getRepoStats(owner: string, repo: string) {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  )
  return response.json()
}

export async function getContributors(owner: string, repo: string) {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contributors`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  )
  return response.json()
}
```

### Screenshot API (V2+)

Purpose: Auto-capture landing page screenshots

```typescript
// lib/screenshot.ts
export async function captureScreenshot(url: string): Promise<string> {
  const apiKey = process.env.SCREENSHOTONE_API_KEY
  const screenshotUrl = `https://api.screenshotone.com/take?url=${encodeURIComponent(url)}&viewport_width=1280&viewport_height=800&format=webp&access_key=${apiKey}`

  const response = await fetch(screenshotUrl)
  const blob = await response.blob()

  // Upload to Vercel Blob
  const { url: blobUrl } = await put(`screenshots/${Date.now()}.webp`, blob, {
    access: 'public',
  })

  return blobUrl
}
```

---

## Performance Considerations

### Static Generation

Use `generateStaticParams` for project/category pages:

```typescript
// app/(frontend)/projects/[slug]/page.tsx
export async function generateStaticParams() {
  const payload = await getPayloadClient()
  const projects = await payload.find({
    collection: 'projects',
    where: { status: { equals: 'published' } },
  })

  return projects.docs.map((project) => ({
    slug: project.slug,
  }))
}
```

### Caching Strategy

| Data | Cache Duration | Revalidation |
|------|----------------|--------------|
| Project listings | 1 hour | On-demand |
| Project detail | 1 hour | On-demand |
| GitHub stats | 6 hours | Cron job |
| Categories | 24 hours | On-demand |

---

*Last updated: January 2026*
