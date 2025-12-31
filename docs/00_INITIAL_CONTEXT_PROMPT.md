# INITIAL CONTEXT PROMPT - Portfolio Website Project

## Copy and paste this entire prompt to Claude Code / Cursor to begin

---

I want to build a professional portfolio website for a Product Manager with 15+ years of experience. This is a complete web development project from scratch.

## PROJECT OVERVIEW

**Purpose:** Personal portfolio website showcasing product management expertise
**Target Audience:** Hiring managers, recruiters, potential collaborators
**Tech Stack:** React + TypeScript + Vite + Tailwind CSS
**Deployment:** Vercel
**Build Approach:** Vibe coding with sequential prompts

## DOCUMENTATION AVAILABLE

I have comprehensive documentation in the `/docs` folder:

1. **vibe_coding_prompts.md** - 24 sequential prompts for building the entire site
2. **FINAL_APPROVED_STRUCTURE.md** - Complete content and structure specification
3. **homepage_wireframe_updated.html** - Visual wireframe (can be opened in browser)
4. **SMOOTH_SCROLL_IMPLEMENTATION.md** - Technical guide for navigation

## HOMEPAGE STRUCTURE (7 Sections)

1. **Hero Section**
   - Headline: "I build AI-powered products that turn complex problems into measurable growth"
   - Sub: "From 0-to-1 launches to enterprise scale | €200M migrations • +25% activation • #1 Product Hunt | 15+ years in B2B SaaS"
   - CTAs: "View Featured Work" (scroll to projects), "Contact Me" (scroll to contact)

2. **Featured Projects** (4-card grid)
   - PANION at ABB E-mobility (Hero Project) - 0-to-1 AI B2B SaaS
   - SAP Cloud Migration - Enterprise scale, €200M
   - Voize Nursing App (Side Project) - Voice AI + Healthcare
   - DogQ AI Testing (Current) - #1 Product Hunt

3. **Impact Metrics Bar**
   - 2 x 0-to-1 Products | €200M Enterprise Scale | 4 AI Products | +25% Avg Growth

4. **About Me** (Enhanced - Two column layout)
   - Left: Professional narrative (developer → product leader)
   - Right: 4 highlight cards (Unique Value, Domain Experience, Career Trajectory, Location)

5. **Skills & Capabilities** (6-card grid)
   - Product Strategy & Execution
   - AI/ML Products
   - Technical Leadership
   - User Research & Design
   - Data & Metrics
   - Cross-Functional Leadership

6. **Product Philosophy** (4 principles, 2x2 grid)
   1. User-Obsessed Approach
   2. Data-Driven Decisions
   3. Cross-Functional Collaboration
   4. Execution Excellence

7. **Contact Section**
   - Dark background
   - "Let's build something together"
   - Links: LinkedIn, Email, GitHub

## DESIGN SPECIFICATIONS

**Colors:**
- Primary: #2563eb (Blue)
- Secondary: #f59e0b (Amber)
- Success: #10b981 (Green)
- Backgrounds: White, #f8fafc, #fafafa, #1a1a1a (dark)
- Text: #1a1a1a, #666666

**Typography:**
- H1: 48px | H2: 42px | H3: 24px | Body: 16-18px
- Line height: 1.6-1.8
- Font: Inter or system font stack

**Layout:**
- Container max-width: 1400px
- Section padding: 60-80px vertical
- Grid gaps: 30-40px
- Rounded corners: 12px
- Smooth transitions: 200-300ms

**Responsive:**
- Desktop (>1024px): Full layouts
- Tablet (640-1024px): Adjusted grids
- Mobile (<640px): Stacked layouts

## KEY FEATURES

1. **Smooth Scroll Navigation**
   - Hero CTAs scroll to sections
   - Navigation bar also scrolls smoothly
   - Use React Refs implementation

2. **Project Highlighting**
   - PANION is the "Hero Project" (special border/badge)
   - Voize is marked as "Side Project"
   - Hover effects on all cards

3. **Section Backgrounds**
   - Alternating pattern: White → White → Gray → White → Gray → White → Dark
   - Creates visual rhythm

4. **Responsive Design**
   - Mobile-first approach
   - All sections adapt to screen size
   - Touch-friendly on mobile

## FOLDER STRUCTURE EXPECTATIONS

```
portfolio-website/
├── docs/                    # Documentation (already exists)
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── MetricsBar.tsx
│   │   ├── About.tsx
│   │   ├── Capabilities.tsx
│   │   ├── ProductPhilosophy.tsx
│   │   └── Contact.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── ProjectDetail.tsx (for later)
│   ├── assets/              # Images, icons
│   ├── styles/              # Global CSS
│   └── App.tsx
├── public/
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## BUILD PHASES

**Phase 1: Setup (Prompt 1-3)**
- Initialize Vite + React + TypeScript
- Configure Tailwind CSS
- Create design system
- Build Navigation component

**Phase 2: Homepage Sections (Prompt 4-10)**
- Hero with CTAs
- Project cards and grid
- Metrics bar
- About Me (enhanced)
- Skills & Capabilities
- Product Philosophy
- Contact section
- Assemble complete homepage

**Phase 3: Project Pages (Prompt 11-13)**
- Project detail page template
- PANION case study (most detailed)
- Other project pages

**Phase 4: Additional Pages (Prompt 14-15)**
- Full About page
- Projects listing page

**Phase 5: Polish (Prompt 16-20)**
- Responsive design refinement
- Animations and interactions
- SEO optimization
- Performance optimization
- Deployment setup

## WHAT I NEED FROM YOU NOW

Please analyze this project and create a detailed **BUILD PLAN** that includes:

1. **Project Assessment**
   - Complexity level
   - Estimated build time
   - Key technical challenges
   - Recommended order of implementation

2. **Technology Stack Validation**
   - Confirm Vite + React + TypeScript + Tailwind is appropriate
   - Suggest any additional dependencies needed
   - Highlight any potential issues

3. **File Structure Plan**
   - Recommended folder organization
   - Component hierarchy
   - Shared utilities/types needed

4. **Phase-by-Phase Breakdown**
   - What to build in each phase
   - Dependencies between phases
   - Testing checkpoints

5. **Risk Assessment**
   - Potential pitfalls
   - Complex features that need extra attention
   - Areas where debugging might be needed

6. **Development Workflow**
   - How to use the vibe_coding_prompts.md effectively
   - When to reference other documentation
   - Iteration strategy

7. **Success Criteria**
   - What "done" looks like for each phase
   - Quality checkpoints
   - Performance targets

8. **Next Steps**
   - Immediate action items
   - Command to run to start
   - First prompt to execute

## CONSTRAINTS & PREFERENCES

- ✅ Keep it simple and maintainable
- ✅ Follow React best practices
- ✅ Use TypeScript for type safety
- ✅ Mobile-first responsive design
- ✅ Accessibility considerations
- ✅ Fast load times (target: <3 seconds)
- ✅ Clean, professional aesthetic
- ❌ No backend needed (static site)
- ❌ No authentication
- ❌ No database (all content hardcoded)

## DESIGN INSPIRATION

The design is inspired by:
- **Mark Progano's portfolio** (mprogano.com) - Clean, professional, capability cards
- **Sherlaine's portfolio** (sherlaine.com) - Personality, work showcase

## ADDITIONAL CONTEXT

**About the Client (Me):**
- Product Manager with technical background (former developer)
- 15+ years experience: SAP Labs → ABB E-mobility → DogQ
- Expertise in AI/ML products, 0-to-1 launches, enterprise scale
- Based in Berlin, Germany
- Looking to showcase both professional work and side projects

**Portfolio Goals:**
1. Demonstrate product leadership across spectrum (enterprise to startup)
2. Highlight AI expertise (4 AI products)
3. Show 0-to-1 capability (PANION as hero)
4. Prove technical credibility (developer background)
5. Display measurable impact (specific metrics)
6. Exhibit continuous learning (side projects)

## YOUR TASK

Based on all this context:

1. **Confirm you understand the project scope**
2. **Create a comprehensive build plan** addressing all points above
3. **Identify any clarifications needed** before we start
4. **Recommend the first action** to take

After you provide the plan, I'll start feeding you the sequential prompts from `docs/vibe_coding_prompts.md`.

---

Ready? Please create the build plan now.
