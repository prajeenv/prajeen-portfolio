import type { RefObject } from 'react'

export type SectionId = 'hero' | 'projects' | 'metrics' | 'about' | 'capabilities' | 'philosophy' | 'contact'

export interface NavLink {
  label: string
  href: string
  sectionId?: SectionId
}

export interface ScrollContextValue {
  scrollToSection: (sectionId: SectionId) => void
  sectionRefs: Record<SectionId, RefObject<HTMLDivElement | null>>
}
