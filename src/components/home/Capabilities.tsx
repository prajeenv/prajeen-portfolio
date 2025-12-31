import { Check, Target, Bot, Settings, Search, BarChart3, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import AnimatedSection from '../common/AnimatedSection'
import { cn } from '@/lib/utils'

const skillsData = [
  {
    id: 'strategy',
    title: 'Product Strategy & Execution',
    icon: Target,
    description: 'From vision to roadmap to delivery',
    gradient: 'from-blue-500 to-cyan-500',
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
    icon: Bot,
    description: 'Building intelligent products',
    gradient: 'from-violet-500 to-purple-500',
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
    icon: Settings,
    description: 'Developer background, technical depth',
    gradient: 'from-slate-600 to-slate-800',
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
    icon: Search,
    description: 'Understanding and solving user problems',
    gradient: 'from-rose-500 to-pink-500',
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
    icon: BarChart3,
    description: 'Data-driven decision making',
    gradient: 'from-emerald-500 to-teal-500',
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
    icon: Users,
    description: 'Aligning teams towards shared goals',
    gradient: 'from-amber-500 to-orange-500',
    items: [
      'Stakeholder Management',
      'Team Leadership',
      'Agile/Scrum',
      'Executive Communication',
      'Conflict Resolution',
    ],
  },
]

export default function Capabilities() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Expertise
          </span>
          <h2 className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4",
            "tracking-tight"
          )}>
            Skills & Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Core competencies developed across 15+ years of building products
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <AnimatedSection key={skill.id} delay={index * 100}>
              <Card hover className="h-full group">
                <CardContent className="p-6">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                      "bg-gradient-to-br",
                      skill.gradient,
                      "transition-transform duration-300 group-hover:scale-110"
                    )}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {skill.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-2.5">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
