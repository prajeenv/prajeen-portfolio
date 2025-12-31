export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  id: string
  title: string
  company: string
  role: string
  type: string
  period: string
  description: string
  image?: string
  isHeroProject?: boolean
  isSideProject?: boolean
  link: string
  metrics?: ProjectMetric[]
  tags?: string[]
}

export interface ProjectDetailSection {
  title: string
  content: string | string[]
}

export interface ProjectDetailData {
  id: string
  title: string
  company: string
  role: string
  period: string
  type: string
  isHeroProject?: boolean
  isSideProject?: boolean

  // Hero section
  heroImage?: string
  tagline: string

  // Content sections
  overview: string
  challenge: string

  responsibilities: string[]

  approach: {
    title: string
    description: string
  }[]

  keyDecisions: {
    decision: string
    rationale: string
    outcome: string
  }[]

  results: {
    metric: string
    value: string
    description?: string
  }[]

  learnings: string[]

  // Gallery
  gallery?: {
    src: string
    alt: string
    caption?: string
  }[]

  // Navigation
  nextProject?: {
    id: string
    title: string
  }
  prevProject?: {
    id: string
    title: string
  }
}

export interface Skill {
  id: string
  title: string
  icon: string
  description: string
  items: string[]
}

export interface Philosophy {
  id: number
  title: string
  description: string
}
