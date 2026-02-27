# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Prajeen Vijayan — a product manager portfolio showcasing projects, skills, and professional experience. Static single-page-style app with client-side routing.

## Commands

```bash
npm run dev        # Start Vite dev server (localhost:5173)
npm run build      # TypeScript check (tsc -b) + Vite production build
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

No test framework is configured.

## Tech Stack

- **React 19** + **TypeScript 5.9** (strict mode) + **Vite 7**
- **React Router DOM 7** for client-side routing
- **Tailwind CSS 3** with `tailwindcss-animate` plugin
- **CVA** (class-variance-authority) for component variants
- **Lucide React** for icons
- `cn()` utility (`clsx` + `tailwind-merge`) in `src/lib/utils.ts`

## Architecture

### Routing (`src/App.tsx`)

| Route | Page | Description |
|---|---|---|
| `/` | `Home` | Landing page with 7 scrollable sections |
| `/projects` | `ProjectsPage` | All projects listing |
| `/projects/:projectId` | `ProjectPage` | Individual project case study |
| `/about` | `AboutPage` | About / experience page |

A `ScrollToTop` wrapper resets scroll on route changes.

### Key Directories

- `src/components/ui/` — Base primitives (button, card, badge) using CVA variants + `React.forwardRef`
- `src/components/home/` — Home page sections (Hero, FeaturedProjects, MetricsBar, About, Capabilities, ProductPhilosophy, Contact)
- `src/components/common/` — Shared components (`AnimatedSection` for scroll-triggered animations)
- `src/components/layout/` — Navigation
- `src/data/` — All content as typed TypeScript objects (projects, skills, metrics, about)
- `src/types/` — Shared type definitions (`Project`, `ProjectDetailData`, `SectionId`, etc.)
- `src/hooks/` — Custom hooks
- `src/pages/` — Route-level page components

### Data-Driven Content

All portfolio content lives in `src/data/` as typed TS exports. To update projects, skills, or metrics, edit these files — components consume them directly via imports. No CMS or API calls.

### Custom Hooks

- **`useScrollTo`** — Manages section refs, smooth-scrolls to sections with fixed-nav offset (80px), handles hash-based navigation on page load.
- **`useInView`** — Intersection Observer wrapper for triggering entrance animations.

### Styling Conventions

- Tailwind utilities with custom CSS properties (HSL format) defined in `src/styles/index.css`
- Custom utility classes: `container-custom`, `section-padding`, `gradient-primary`, `gradient-mesh`, `glass`, `shadow-soft`, `text-gradient`, `hover-scale`, `hover-lift`
- Custom animations: `fade-up`, `fade-in`, `slide-in-right`, `shimmer` with delay utilities (`animation-delay-100` through `animation-delay-600`)
- `prefers-reduced-motion` is respected globally
- Section scroll-margin: 80px (accounts for fixed navbar)

### Path Alias

`@/*` maps to `src/*` (configured in both `tsconfig.json` and `vite.config.ts`).

## Design Reference

`docs/` contains the original design specs and wireframes:
- `FINAL_APPROVED_STRUCTURE.md` — Detailed content specifications
- `SMOOTH_SCROLL_IMPLEMENTATION.md` — Navigation scroll behavior spec
- `homepage_wireframe_updated.html` — Visual wireframe
