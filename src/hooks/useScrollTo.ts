import { useRef, useCallback, useLayoutEffect } from 'react'
import type { RefObject } from 'react'
import { useLocation } from 'react-router-dom'
import type { SectionId } from '../types/navigation'

const NAV_HEIGHT = 80
const VALID_SECTIONS: SectionId[] = ['hero', 'projects', 'metrics', 'about', 'capabilities', 'philosophy', 'contact']

export function useScrollTo() {
  const location = useLocation()

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    metrics: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    capabilities: useRef<HTMLDivElement>(null),
    philosophy: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  const scrollToSection = useCallback((sectionId: SectionId) => {
    const ref = sectionRefs[sectionId]
    if (ref.current) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const elementPosition = ref.current.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - NAV_HEIGHT

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      })
    }
  }, [])

  const scrollToRef = useCallback((ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ref.current.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    }
  }, [])

  // Handle hash navigation when arriving from another page
  useLayoutEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && VALID_SECTIONS.includes(hash as SectionId)) {
      // Use requestAnimationFrame to scroll before paint
      requestAnimationFrame(() => {
        const ref = sectionRefs[hash as SectionId]
        if (ref.current) {
          const elementPosition = ref.current.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.scrollY - NAV_HEIGHT
          window.scrollTo({ top: offsetPosition, behavior: 'auto' })
        }
      })
    }
  }, [location.hash])

  return {
    sectionRefs,
    scrollToSection,
    scrollToRef,
  }
}
