import { useRef, useCallback } from 'react'
import type { RefObject } from 'react'
import type { SectionId } from '../types/navigation'

const NAV_HEIGHT = 80

export function useScrollTo() {
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

  return {
    sectionRefs,
    scrollToSection,
    scrollToRef,
  }
}
