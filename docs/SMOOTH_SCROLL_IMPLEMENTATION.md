# Smooth Scroll Navigation - Implementation Guide

## Overview
The homepage uses smooth scroll navigation to create a seamless user experience when clicking CTA buttons.

---

## Navigation Map

### Hero Section CTAs:
1. **"View Featured Work"** → Scrolls to Section 2 (Featured Projects)
2. **"Contact Me"** → Scrolls to Section 7 (Contact)

### Navigation Bar Links:
- **Home** → Scrolls to top (Hero)
- **Projects** → Scrolls to Section 2 (Featured Projects)
- **About** → Scrolls to Section 4 (About Me)
- **Contact** → Scrolls to Section 7 (Contact)

---

## Implementation Approaches

### Option 1: React Refs (Recommended)
```typescript
// In Home page component
import { useRef } from 'react';

function HomePage() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Hero 
        onViewWork={() => scrollToSection(projectsRef)}
        onContact={() => scrollToSection(contactRef)}
      />
      <div ref={projectsRef}>
        <FeaturedProjects />
      </div>
      <MetricsBar />
      <div ref={aboutRef}>
        <About />
      </div>
      <Capabilities />
      <ProductPhilosophy />
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}
```

### Option 2: ID-based Scrolling
```typescript
// Add IDs to sections
<section id="hero">
  <Hero />
</section>
<section id="projects">
  <FeaturedProjects />
</section>
<section id="about">
  <About />
</section>
<section id="contact">
  <Contact />
</section>

// Scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
};

// In Hero component
<button onClick={() => scrollToSection('projects')}>
  View Featured Work
</button>
<button onClick={() => scrollToSection('contact')}>
  Contact Me
</button>
```

### Option 3: React Router Hash Links (Alternative)
```typescript
// Install: npm install react-router-hash-link

import { HashLink } from 'react-router-hash-link';

<HashLink 
  smooth 
  to="/#projects"
  className="btn btn-primary"
>
  View Featured Work
</HashLink>
```

---

## Handling Fixed Navigation

If navigation is sticky/fixed, add offset to prevent content hiding behind nav:

```typescript
const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
  if (!ref.current) return;
  
  const navHeight = 80; // Height of fixed navigation
  const elementPosition = ref.current.offsetTop;
  const offsetPosition = elementPosition - navHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};
```

---

## CSS for Smooth Scroll (Global)

Add to your global CSS or index.css:

```css
html {
  scroll-behavior: smooth;
}

/* Optional: Offset for fixed header */
section {
  scroll-margin-top: 80px;
}
```

---

## Accessibility Considerations

1. **Keyboard Navigation**: Ensure buttons are keyboard accessible
2. **Focus Management**: Move focus to scrolled section for screen readers
3. **Reduced Motion**: Respect user's motion preferences

```typescript
const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  ref.current?.scrollIntoView({ 
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start'
  });
  
  // Set focus for accessibility
  ref.current?.focus({ preventScroll: true });
};
```

---

## Testing Checklist

- [ ] "View Featured Work" scrolls to projects section
- [ ] "Contact Me" scrolls to contact section
- [ ] Navigation links scroll to correct sections
- [ ] Smooth animation works (not jumpy)
- [ ] Works with fixed navigation (no content hiding)
- [ ] Keyboard navigation works
- [ ] Works on mobile devices
- [ ] Respects prefers-reduced-motion
- [ ] No console errors

---

## Recommended: Option 1 (React Refs)

**Pros:**
- Type-safe with TypeScript
- No dependency on DOM IDs
- Better React patterns
- Easy to pass scroll handlers to child components

**Implementation in Vibe Coding:**
- Use Prompt 4 (Hero) to implement scroll handlers
- Use Prompt 10 (Assemble Homepage) to set up refs
- Pass scroll functions as props to Hero component

---

## Example: Complete Hero Component

```typescript
interface HeroProps {
  onViewWork: () => void;
  onContact: () => void;
}

export function Hero({ onViewWork, onContact }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <h1>I build AI-powered products that turn complex problems into measurable growth</h1>
        <p className="subtitle">
          From 0-to-1 launches to enterprise scale | €200M migrations • +25% activation • #1 Product Hunt | 15+ years in B2B SaaS
        </p>
        <div className="hero-cta">
          <button 
            onClick={onViewWork}
            className="btn btn-primary"
          >
            View Featured Work
          </button>
          <button 
            onClick={onContact}
            className="btn btn-secondary"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
```

---

## Navigation Component with Scroll Links

```typescript
interface NavigationProps {
  onNavigate: (section: 'home' | 'projects' | 'about' | 'contact') => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  return (
    <nav className="navigation">
      <div className="logo">PRAJEEN MV</div>
      <div className="nav-links">
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('projects')}>Projects</button>
        <button onClick={() => onNavigate('about')}>About</button>
        <button onClick={() => onNavigate('contact')}>Contact</button>
      </div>
      <div className="status-badge">
        🟢 Currently at DogQ | 📍 Berlin
      </div>
    </nav>
  );
}
```

---

This approach provides smooth, accessible navigation that enhances the user experience without requiring page reloads or complex routing.
