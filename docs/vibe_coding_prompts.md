# Portfolio Website - Vibe Coding Prompts for VS Code + Claude

## Overview
Building a modern, responsive portfolio website for a Product Manager with AI expertise. The site will showcase professional projects and demonstrate product leadership capabilities.

---

## PHASE 1: PROJECT SETUP

### Prompt 1: Initialize Project
```
I want to build a modern portfolio website using React, TypeScript, and Tailwind CSS. 

Requirements:
- Use Vite for fast development
- TypeScript for type safety
- Tailwind CSS for styling
- React Router for navigation
- Responsive design (mobile-first)
- Modern, professional aesthetic

Please:
1. Set up the project structure with Vite
2. Configure TypeScript
3. Set up Tailwind CSS
4. Create the basic folder structure:
   - src/components/
   - src/pages/
   - src/assets/
   - src/styles/
5. Set up React Router with routes for: Home, Projects, About, Contact

Create all necessary configuration files (vite.config.ts, tailwind.config.js, tsconfig.json).
```

---

## PHASE 2: DESIGN SYSTEM & COMPONENTS

### Prompt 2: Design System Setup
```
Create a design system for the portfolio with the following specifications:

Color Palette:
- Primary: #2563eb (Blue)
- Secondary: #f59e0b (Amber/Orange)
- Success: #10b981 (Green)
- Background: #ffffff (White)
- Surface: #f8fafc (Light Gray)
- Text Primary: #1a1a1a
- Text Secondary: #666666

Typography:
- Headings: Inter or similar modern sans-serif
- Body: System font stack for performance
- H1: 48px
- H2: 36px
- H3: 24px
- Body: 16-18px

Spacing:
- Use Tailwind's default spacing scale
- Container max-width: 1400px

Please create:
1. A tailwind.config.js with these custom colors and typography
2. A global CSS file with base styles
3. A reusable Button component with variants (primary, secondary, outline)
4. A Container component for consistent page width
```

### Prompt 3: Navigation Component
```
Create a professional Navigation component with:

Features:
- Logo on the left (text: "PRAJEEN MV")
- Navigation links: Home, Projects, About, Contact
- Status badge on the right: "🟢 Currently at DogQ | 📍 Berlin"
- Sticky navigation on scroll
- Smooth transitions
- Mobile responsive with hamburger menu

Design:
- Clean, minimal design
- Subtle border bottom
- Background: white with slight transparency on scroll
- Active link highlighting

Please create the Navigation component with TypeScript and Tailwind CSS.
```

---

## PHASE 3: HOMEPAGE SECTIONS

### Prompt 4: Hero Section
```
Create the homepage Hero section with:

Content:
- Main headline: "I build AI-powered products that turn complex problems into measurable growth"
- Sub-headline: "From 0-to-1 launches to enterprise scale | €200M migrations • +25% activation • #1 Product Hunt | 15+ years in B2B SaaS"
- Two CTA buttons: "View Featured Work" (primary), "Contact Me" (secondary)

Navigation:
- "View Featured Work" button → Smooth scroll to Featured Projects section (Section 2)
- "Contact Me" button → Smooth scroll to Contact section (Section 7)

Design:
- Center-aligned text
- Generous padding (80px top and bottom)
- Maximum width: 900px for headline, 800px for sub
- Gradient or subtle background pattern (optional)
- Smooth scroll behavior with offset for fixed navigation

Animation:
- Fade in on page load
- Subtle hover effects on buttons
- Smooth scroll animation (not instant jump)

Technical:
- Use React refs or IDs for scroll targets
- Implement smooth scroll with proper offset for sticky nav
- Example: onClick={() => scrollToSection('projects')}

Please create the Hero component with TypeScript and Tailwind CSS, including the scroll functionality.
```

### Prompt 5: Project Card Component
```
Create a reusable ProjectCard component with:

Props:
- title: string
- company: string
- role: string
- type: string (e.g., "0-to-1 AI B2B SaaS")
- description: string
- image: string (URL or import)
- isHeroProject?: boolean (for highlighting)
- isSideProject?: boolean (for labeling)
- link: string (for navigation)

Design:
- Card with rounded corners (12px)
- Hover effect: slight lift and shadow
- Image placeholder at top (gradient background)
- Badge for "HERO PROJECT" or "SIDE PROJECT"
- Title, role, type, description stacked vertically
- "View Project" link at bottom
- Border highlighting for hero project (blue)

Please create the ProjectCard component with TypeScript and Tailwind CSS.
Include hover animations and proper TypeScript types.
```

### Prompt 6: Featured Projects Grid
```
Create the Featured Projects section for the homepage with:

Layout:
- 2x2 grid of project cards
- Cards arranged as:
  Top-left: PANION (Hero Project)
  Top-right: SAP Cloud Migration
  Bottom-left: Voize (Side Project)
  Bottom-right: DogQ

Projects Data:
1. PANION at ABB E-mobility
   - Role: Principal PM
   - Type: 0-to-1 AI B2B SaaS
   - Description: "Built two AI-powered products from scratch. Secured first paying customer. 50% charging improvement, 30% fewer complaints."
   - isHeroProject: true

2. SAP Cloud Migration
   - Role: Lead PM
   - Type: Enterprise Scale
   - Description: "Led €200M customer base migration to cloud. 60% efficiency gain via AI/ML pipeline. 12,000+ customers."

3. Voize Nursing App
   - Role: Side Project
   - Type: Voice AI + Healthcare
   - Description: "Voice-to-text nursing documentation. Full-stack React app with AI integration. Live demo available."
   - isSideProject: true

4. DogQ AI Testing
   - Role: Product & AI Collaboration
   - Type: Current
   - Description: "#1 Product Hunt launch. +25% activation, +30% onboarding completion. 400+ signups week 1."

Responsive:
- 2 columns on desktop
- 1 column on mobile
- Proper gap spacing

Please create the FeaturedProjects component using the ProjectCard component.
```

### Prompt 7: Metrics Bar
```
Create a Metrics Bar section with:

Metrics (4 columns):
1. 0-to-1 Products
   - Value: "2"
   - Detail: "(PANION, DogQ)"

2. Enterprise Scale
   - Value: "€200M"
   - Detail: "(SAP Migration)"

3. AI Products
   - Value: "4"
   - Detail: "(All projects)"

4. Avg Growth
   - Value: "+25%"
   - Detail: "(Activation gains)"

Design:
- Light gray background (#f8fafc)
- 4-column grid on desktop, 2-column on tablet, 1-column on mobile
- Large numbers (48px) in primary blue
- Label and detail text below
- Center-aligned text
- Generous padding

Animation:
- Count-up animation for numbers when section comes into view (optional)

Please create the MetricsBar component with TypeScript and Tailwind CSS.
```
```
Create an enhanced About Me section with a two-column layout:

Content:
- Heading: "From Developer to Product Leader"
- Subtitle: "15+ years bridging technical teams and business outcomes"

Left Column - About Text:
1. "I'm a product leader with a technical foundation. Starting as a software developer, I've spent 15+ years building AI-powered solutions—from enterprise platforms serving 12,000+ customers to startup MVPs finding product-market fit."

2. "My background in software development gives me the technical credibility to collaborate deeply with engineering teams, while my track record at companies like SAP and ABB demonstrates my ability to drive strategic initiatives and deliver measurable business impact."

3. "Based in Berlin, I'm passionate about systems thinking, continuous learning, and building products that solve real problems for real users."

Right Column - Highlight Cards (4 cards):
1. 🎯 Unique Value
   "Technical foundation (former developer) + AI/ML expertise + 0-to-1 product launches"

2. 🏢 Domain Experience
   "Enterprise SaaS (SAP), B2B AI products (ABB), Healthcare tech (Voize)"

3. 📈 Career Trajectory
   "From software developer to leading product teams building AI solutions used by thousands"

4. 📍 Based in Berlin
   "Open to product leadership opportunities"

Design:
- Two-column grid (60/40 split)
- Max-width: 1000px
- Highlight cards with left border accent
- Light background for cards (#f8fafc)
- Responsive: stack on mobile

Please create the About component with this enhanced layout.
```

### Prompt 8a: Skills & Capabilities Section
```
Create a Skills & Capabilities section inspired by Mark Progano's "Capabilities" section:

Content:
- Heading: "Where I Excel"
- Subtitle: "Core competencies honed across enterprise and startup environments"

6 Capability Cards (3-column grid):

1. 🎯 Product Strategy & Execution
   - 0-to-1 product development
   - Product roadmap planning & prioritization
   - Agile/Scrum leadership (sprint planning to reviews)
   - Stakeholder management (C-suite to engineering)

2. 🤖 AI/ML Products
   - AI roadmap creation
   - Collaboration with data scientists/ML engineers
   - Data pipeline architecture
   - Model evaluation & metrics

3. ⚙️ Technical Leadership
   - Former software developer (Core Java, SQL)
   - Architecture & system design
   - Technical specification writing
   - API integration strategy

4. 👥 User Research & Design
   - User persona development
   - Journey mapping
   - A/B testing & experimentation
   - Customer interviews & validation

5. 📊 Data & Metrics
   - KPI definition and monitoring
   - Analytics-driven decision making
   - Success metrics tracking
   - Business impact measurement

6. 🤝 Cross-Functional Leadership
   - Bridge engineers, designers, business stakeholders
   - Team building & mentorship
   - Conflict resolution
   - Culture of deep collaboration

Design:
- Light background (#fafafa)
- 3-column grid on desktop, 2 on tablet, 1 on mobile
- White cards with hover effect (lift + blue border)
- Icons for each category
- Bullet points with arrow markers (→)
- Professional, scannable layout

Please create the Capabilities component.
```

### Prompt 8b: Product Philosophy Section
```
Create a Product Philosophy section inspired by Mark Progano's "Craft" section:

Content:
- Heading: "How I Build Products"
- Subtitle: "My approach to creating products that matter"

4 Philosophy Principles (2x2 grid):

1. User-Obsessed Approach
   Quote: "Great products come from deep user understanding"
   Details:
   ✓ Countless hours in care facilities understanding operators
   ✓ Direct customer feedback loops
   ✓ Journey mapping and pain point validation
   ✓ Build with users, not for users

2. Data-Driven Decisions
   Description: "Define success criteria before building, iterate based on evidence"
   Details:
   ✓ Set clear success metrics upfront
   ✓ Track what matters, not vanity metrics
   ✓ A/B test assumptions before scaling
   ✓ Let data guide, but don't ignore intuition

3. Cross-Functional Collaboration
   Description: "Bridge between engineers, designers, and business stakeholders"
   Details:
   ✓ Foster culture of deep collaboration
   ✓ Translate between technical and business language
   ✓ Empower teams with context and ownership
   ✓ Build alignment through shared objectives

4. Execution Excellence
   Description: "Move fast, take ownership, ship results"
   Details:
   ✓ Sprint planning to delivery ownership
   ✓ Balance speed with quality
   ✓ Ship MVPs, learn, iterate quickly
   ✓ Take calculated risks, fail fast, learn faster

Design:
- White background
- 2x2 grid layout
- Each card has a numbered badge (1, 2, 3, 4) in blue circle
- Cards aligned left with number on the left
- Checkmark bullets (✓) in green
- Clean typography hierarchy
- Responsive: stack on mobile

Please create the ProductPhilosophy component.
```

### Prompt 9: Contact Section
```
Create the Contact section with:

Content:
- Dark background (#1a1a1a)
- White text
- Heading: "Let's build something together"
- Subtext: "Open to product leadership opportunities"
- Contact links: LinkedIn, Email, GitHub

Design:
- Dark theme contrast
- Links styled as white buttons/cards
- Centered layout
- Icons for each platform (optional)
- Hover effects on links

Please create the Contact component with links and styling.
```

### Prompt 10: Assemble Homepage
```
Now, assemble the complete Homepage by:

1. Importing all sections in order:
   - Hero
   - FeaturedProjects
   - MetricsBar
   - About (Enhanced with two-column layout)
   - Capabilities (Skills & Capabilities)
   - ProductPhilosophy (How I Build Products)
   - Contact

2. Create the Home page component that renders all sections in order

3. Add smooth scroll behavior

4. Add proper spacing between sections (no spacing needed as each section has internal padding)

5. Ensure responsive design works across all sections

6. Section backgrounds should alternate for visual interest:
   - Hero: White
   - FeaturedProjects: White
   - MetricsBar: Light gray (#f8fafc)
   - About: White
   - Capabilities: Light gray (#fafafa)
   - ProductPhilosophy: White
   - Contact: Dark (#1a1a1a)

Please create the complete Home page component with all 7 sections.
```

---

## PHASE 4: PROJECT DETAIL PAGES

### Prompt 11: Project Detail Page Template
```
Create a reusable ProjectDetail page template with:

Sections:
1. Hero section with project title, company, role, dates
2. Overview/Challenge section
3. Role & Responsibilities
4. Approach & Process
5. Key Decisions
6. Results & Impact (with metrics)
7. Learnings
8. Gallery/Screenshots (if available)
9. Navigation to next project

Design:
- Clean, readable layout
- Max-width: 900px for text content
- Wider for images/galleries
- Breadcrumb navigation at top
- Back button
- Proper typography hierarchy

Please create the ProjectDetail template component.
```

### Prompt 12: PANION Project Page
```
Create the detailed PANION project page using the ProjectDetail template with:

Content structure:
1. Hero:
   - Title: "PANION at ABB E-mobility"
   - Subtitle: "Building AI-Powered E-Mobility Products from 0-to-1"
   - Role: Principal Product Manager
   - Duration: June 2022 - Feb 2024

2. Challenge:
   - Two undefined AI-based B2B SaaS products (0-to-1)
   - Fast-paced startup environment
   - No existing customers, uncertain product-market fit
   - Mission: Help EV charging operators optimize operations

3. Approach:
   - Countless hours with operators in care facilities
   - 30+ operator interviews
   - Journey mapping and pain point identification
   - Data-driven decision making
   - Agile sprint planning and execution

4. Results (highlight these metrics):
   - ✅ Secured first paying customer
   - ✅ 50% improvement in charging time
   - ✅ 30% reduction in delivery complaints
   - ✅ 35% increase in team efficiency
   - ✅ Minimized employee attrition

5. Cross-functional leadership:
   - Engineering & Data Science
   - Sales & GTM
   - Design & Research
   - Executive team

Please create the PANION project detail page with proper formatting and visual hierarchy.
```

### Prompt 13: Other Project Pages
```
Create project detail pages for:

1. SAP Cloud Migration
2. Voize Nursing App (with link to live demo)
3. DogQ

Use the ProjectDetail template and follow similar structure to PANION page.
For each, include: Challenge, Role, Approach, Results, Learnings.

I'll provide specific content for each project once the template is ready.
```

---

## PHASE 5: ADDITIONAL PAGES

### Prompt 14: About Page
```
Create a full About page with:

Sections:
1. Professional introduction
2. Experience timeline (visual timeline component)
3. Skills & Competencies
4. Philosophy/Approach
5. Achievements & Recognition
6. Tools & Technologies

Design:
- Engaging layout with images
- Timeline visualization
- Skill categories in cards
- Professional but personable tone

Please create the About page component.
```

### Prompt 15: Projects List Page
```
Create a Projects listing page with:

Features:
- Grid of all projects (not just featured 4)
- Filter/sort options: All, Professional, Side Projects, By Year
- Search functionality (optional)
- Each project as a card

Design:
- Similar cards to homepage
- 3-column grid on desktop
- Filters at top
- Clean, browsable layout

Please create the Projects page with filtering functionality.
```

---

## PHASE 6: POLISH & OPTIMIZATION

### Prompt 16: Responsive Design
```
Review and optimize all components for responsive design:

Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Ensure:
- Navigation works on mobile (hamburger menu)
- Project grid adapts (1, 2, 3 columns)
- Metrics bar stacks properly
- Typography scales appropriately
- Touch targets are 44px minimum on mobile
- Images are responsive

Please audit all components and fix any responsive issues.
```

### Prompt 17: Animations & Interactions
```
Add subtle animations and interactions:

1. Fade-in animations for sections on scroll (using Intersection Observer)
2. Hover effects on all interactive elements
3. Smooth scroll behavior
4. Page transition animations
5. Loading states

Keep animations subtle and professional. Use CSS transforms for performance.

Please add appropriate animations throughout the site.
```
### =======  Done until HERE ====== ##### 
### Prompt 18: SEO & Meta Tags
```
Add SEO optimization:

1. Create a custom <Head> component for meta tags
2. Add proper title and description for each page
3. Open Graph tags for social sharing
4. Structured data (JSON-LD) for personal/professional info
5. Proper semantic HTML (h1, h2, etc.)

Meta content:
- Site Title: "Prajeen MV - Product Leader | AI • B2B SaaS • 0-to-1"
- Description: "Product leader with 15+ years building AI-powered products. From enterprise scale to startup 0-to-1 launches."

Please implement SEO best practices.
```

### Prompt 19: Performance Optimization
```
Optimize the site for performance:

1. Lazy load images
2. Code splitting for routes
3. Optimize bundle size
4. Use proper image formats (WebP with fallbacks)
5. Minimize CSS/JS
6. Add loading skeletons for async content

Target: 90+ Lighthouse score

Please implement performance optimizations.
```

### Prompt 20: Deployment Setup
```
Set up the project for deployment to Vercel:

1. Create vercel.json configuration
2. Set up build scripts in package.json
3. Add environment variables setup (if needed)
4. Create a deployment guide in README.md
5. Ensure all routes work with SPA routing

Please prepare the project for Vercel deployment.
```

---

## BONUS: ADVANCED FEATURES

### Prompt 21: Dark Mode (Optional)
```
Add dark mode support:

1. Create a theme context
2. Add toggle in navigation
3. Define dark color palette
4. Update all components to support dark mode
5. Save preference to localStorage

Please implement dark mode functionality.
```

### Prompt 22: Contact Form (Optional)
```
Add a working contact form:

1. Form with fields: Name, Email, Message
2. Form validation
3. Integration with FormSpree or similar service
4. Success/error states
5. Loading indicator

Please create a functional contact form.
```

### Prompt 23: Analytics (Optional)
```
Add analytics tracking:

1. Google Analytics 4 setup
2. Track page views
3. Track button clicks (CTA, project views)
4. Privacy-friendly implementation

Please set up analytics tracking.
```

---

## CHECKLIST FOR COMPLETION

After completing all prompts, verify:

- [ ] All pages are responsive (mobile, tablet, desktop)
- [ ] Navigation works correctly on all pages
- [ ] All links and buttons are functional
- [ ] Images load properly
- [ ] Typography is consistent
- [ ] Colors match design system
- [ ] Animations are smooth and subtle
- [ ] SEO meta tags are in place
- [ ] Site loads quickly (< 3 seconds)
- [ ] No console errors
- [ ] Accessible (keyboard navigation, ARIA labels)
- [ ] Works on Chrome, Safari, Firefox
- [ ] Deployed successfully to Vercel

---

## FINAL PROMPT: Review & Launch

### Prompt 24: Final Review
```
Please do a final review of the entire portfolio website:

1. Check all pages for consistency
2. Verify all links work
3. Test responsive design on different screen sizes
4. Check for any console errors
5. Verify all content is accurate
6. Run Lighthouse audit
7. Test on different browsers

Fix any issues found and prepare for launch.
```

---

## USAGE INSTRUCTIONS

1. **Sequential Execution**: Use these prompts in order, as later prompts build on earlier work
2. **Iterative Refinement**: After each prompt, review the output and provide feedback
3. **Customization**: Adjust prompts based on your specific preferences
4. **Testing**: Test each component before moving to the next
5. **Version Control**: Commit after completing each phase

## ESTIMATED TIMELINE

- Phase 1 (Setup): 30 minutes
- Phase 2 (Design System): 1 hour
- Phase 3 (Homepage - 7 sections): 3-4 hours
- Phase 4 (Project Pages): 2-3 hours
- Phase 5 (Additional Pages): 1-2 hours
- Phase 6 (Polish): 2-3 hours

**Total: 10-14 hours of development time**

---

## TOOLS NEEDED

- VS Code with Claude Code extension (or similar AI coding assistant)
- Node.js 18+
- Git for version control
- Browser for testing
- Vercel account for deployment

## ALTERNATIVE: CURSOR EDITOR APPROACH

If using Cursor instead of VS Code + Claude Code:

1. Open the prompts in Cursor
2. Use Cursor's AI chat to execute each prompt
3. Review and iterate on generated code
4. Cursor will handle file creation and updates automatically

---

Good luck building your portfolio! 🚀
