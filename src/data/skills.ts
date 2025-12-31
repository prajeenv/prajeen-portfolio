import type { Skill, Philosophy } from '../types/project'

export const skills: Skill[] = [
  {
    id: 'strategy',
    title: 'Product Strategy & Execution',
    icon: '🎯',
    description: 'From vision to roadmap to delivery',
    items: [
      'Product Vision & Strategy',
      'Roadmap Planning',
      'Go-to-Market Strategy',
      'Competitive Analysis',
      'Market Research',
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI/ML Products',
    icon: '🤖',
    description: 'Building intelligent products',
    items: [
      'ML Product Development',
      'AI Feature Design',
      'Model Evaluation',
      'Prompt Engineering',
      'AI Ethics & Governance',
    ],
  },
  {
    id: 'technical',
    title: 'Technical Leadership',
    icon: '⚙️',
    description: 'Developer background, technical depth',
    items: [
      'Technical Architecture',
      'API Design',
      'System Integration',
      'Technical Debt Management',
      'Developer Experience',
    ],
  },
  {
    id: 'research',
    title: 'User Research & Design',
    icon: '🔍',
    description: 'Understanding and solving user problems',
    items: [
      'User Interviews',
      'Usability Testing',
      'Journey Mapping',
      'Prototyping',
      'Design Thinking',
    ],
  },
  {
    id: 'data',
    title: 'Data & Metrics',
    icon: '📊',
    description: 'Data-driven decision making',
    items: [
      'Analytics Strategy',
      'KPI Definition',
      'A/B Testing',
      'SQL & Data Analysis',
      'Dashboard Design',
    ],
  },
  {
    id: 'leadership',
    title: 'Cross-Functional Leadership',
    icon: '🤝',
    description: 'Aligning teams towards shared goals',
    items: [
      'Stakeholder Management',
      'Team Leadership',
      'Agile/Scrum',
      'Executive Communication',
      'Conflict Resolution',
    ],
  },
]

export const philosophies: Philosophy[] = [
  {
    id: 1,
    title: 'User-Obsessed Approach',
    description: 'Every decision starts with understanding user needs. I spend time with customers, analyze behavior data, and validate assumptions before building.',
  },
  {
    id: 2,
    title: 'Data-Driven Decisions',
    description: 'Intuition guides exploration, but data drives decisions. I establish clear metrics, run experiments, and let evidence shape the product direction.',
  },
  {
    id: 3,
    title: 'Cross-Functional Collaboration',
    description: 'Great products emerge from aligned teams. I foster transparent communication, shared ownership, and a culture where every voice matters.',
  },
  {
    id: 4,
    title: 'Execution Excellence',
    description: 'Strategy without execution is just a plan. I focus on shipping iteratively, learning fast, and maintaining momentum while ensuring quality.',
  },
]
