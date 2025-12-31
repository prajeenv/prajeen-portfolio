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
