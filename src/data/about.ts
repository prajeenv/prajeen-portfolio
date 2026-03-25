export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
  type: 'work' | 'education'
}

export interface Achievement {
  icon: string
  title: string
  description: string
}

export interface Tool {
  category: string
  items: string[]
}

export const experiences: Experience[] = [
  {
    id: 'dogq',
    company: 'DogQ',
    role: 'Head of Product',
    period: '2024 - Present',
    location: 'Berlin, Germany',
    description: 'Leading product strategy for an AI-powered testing platform.',
    highlights: [
      '#1 Product Hunt launch',
      '+25% user activation improvement',
      'AI-driven test automation',
    ],
    type: 'work',
  },
  {
    id: 'abb',
    company: 'ABB E-mobility',
    role: 'Principal Product Manager',
    period: 'June 2022 - Feb 2024',
    location: 'Berlin, Germany',
    description: 'Built two AI-powered E-mobility products from 0-to-1.',
    highlights: [
      '0-to-1 AI B2B SaaS products',
      'Secured first paying customers',
      '+50% charging efficiency improvement',
    ],
    type: 'work',
  },
  {
    id: 'sap',
    company: 'SAP Labs',
    role: 'Senior Product Manager',
    period: '2015 - 2020',
    location: 'Berlin, Germany',
    description: 'Led €200M cloud migration program for enterprise customers.',
    highlights: [
      '€200M program management',
      '12,000+ customers migrated',
      '95% migration success rate',
    ],
    type: 'work',
  },
  {
    id: 'sap-dev',
    company: 'SAP Labs',
    role: 'Software Developer → Technical Lead',
    period: '2008 - 2015',
    location: 'Bangalore, India → Berlin, Germany',
    description: 'Started as developer, grew into technical leadership.',
    highlights: [
      'Full-stack development',
      'Technical architecture',
      'Team leadership',
    ],
    type: 'work',
  },
]

export const achievements: Achievement[] = [
  {
    icon: '🏆',
    title: '#1 Product Hunt',
    description: 'Launched DogQ to #1 Product of the Day',
  },
  {
    icon: '💰',
    title: '€200M Program',
    description: 'Led enterprise cloud migration at SAP',
  },
  {
    icon: '🚀',
    title: '4 AI Products',
    description: 'Built and shipped AI-powered products',
  },
  {
    icon: '🎯',
    title: '2x 0-to-1',
    description: 'Took products from concept to market',
  },
  {
    icon: '👥',
    title: '12,000+ Customers',
    description: 'Impacted enterprise customers globally',
  },
  {
    icon: '📈',
    title: '+25% Growth',
    description: 'Consistent activation improvements',
  },
]

export const tools: Tool[] = [
  {
    category: 'Product Management',
    items: ['Jira', 'Confluence', 'Notion', 'Linear', 'Productboard', 'Amplitude'],
  },
  {
    category: 'Design & Research',
    items: ['Figma', 'Miro', 'Maze', 'Hotjar', 'UserTesting', 'Dovetail'],
  },
  {
    category: 'Data & Analytics',
    items: ['SQL', 'Mixpanel', 'Google Analytics', 'Looker', 'Tableau', 'Python'],
  },
  {
    category: 'Technical',
    items: ['Git', 'REST APIs', 'GraphQL', 'AWS', 'Docker', 'CI/CD'],
  },
  {
    category: 'AI/ML',
    items: ['OpenAI', 'Prompt Engineering', 'ML Fundamentals', 'LangChain', 'Vector DBs'],
  },
  {
    category: 'Collaboration',
    items: ['Slack', 'Zoom', 'Loom', 'Google Workspace', 'Microsoft 365'],
  },
]

export const aboutContent = {
  intro: {
    headline: 'AI Product Leader',
    subheadline: '15+ years shipping products from 0-to-1 at startups to €200M programs at enterprise scale',
    paragraphs: [
      'Over my career, I\'ve shipped products across the full spectrum — from building 0-to-1 AI products at startups to managing €200M enterprise cloud migrations at SAP. What connects it all is a relentless focus on understanding users deeply and building products that create measurable impact.',
      'Today, I specialize in AI-powered products. Having shipped 4 AI products, I bring hands-on expertise in AI architecture decisions, cost-aware model selection, and designing pricing models that align user value with API economics.',
      'I don\'t just define product strategy — I can validate and ship end-to-end. My latest side project, ReviewFlow, is a live AI-powered SaaS platform I took from problem identification through production deployment.',
    ],
  },
  philosophy: [
    {
      title: 'User-First, Always',
      description: 'Every product decision starts with understanding the user. I\'ve spent countless hours in the field — shadowing nurses, observing fleet operators, interviewing enterprise admins. This deep empathy shapes everything I build.',
    },
    {
      title: 'Data-Informed, Not Data-Paralyzed',
      description: 'I believe in using data to guide decisions, not dictate them. Metrics tell you what\'s happening; user research tells you why. The best products come from combining both.',
    },
    {
      title: 'Ship, Learn, Iterate',
      description: 'Perfect is the enemy of good. I\'d rather ship something valuable quickly and iterate than spend months building something users don\'t want. Speed of learning is the ultimate competitive advantage.',
    },
    {
      title: 'Technical Depth Matters',
      description: 'With a strong technical foundation, I can dive into architecture discussions, review technical specs, and understand trade-offs. This credibility with engineering teams accelerates delivery.',
    },
  ],
}
