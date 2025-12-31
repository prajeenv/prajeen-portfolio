import { Heart, LineChart, Users2, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import AnimatedSection from '../common/AnimatedSection'
import { cn } from '@/lib/utils'

const philosophyData = [
  {
    id: 1,
    title: 'User-Obsessed Approach',
    description: 'Every decision starts with understanding user needs. I spend time with customers, analyze behavior data, and validate assumptions before building.',
    icon: Heart,
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Data-Driven Decisions',
    description: 'Intuition guides exploration, but data drives decisions. I establish clear metrics, run experiments, and let evidence shape the product direction.',
    icon: LineChart,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Cross-Functional Collaboration',
    description: 'Great products emerge from aligned teams. I foster transparent communication, shared ownership, and a culture where every voice matters.',
    icon: Users2,
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    id: 4,
    title: 'Execution Excellence',
    description: 'Strategy without execution is just a plan. I focus on shipping iteratively, learning fast, and maintaining momentum while ensuring quality.',
    icon: Zap,
    gradient: 'from-amber-500 to-orange-500',
  },
]

export default function ProductPhilosophy() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            My Approach
          </span>
          <h2 className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4",
            "tracking-tight"
          )}>
            Product Philosophy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Principles that guide how I approach product development
          </p>
        </AnimatedSection>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {philosophyData.map((philosophy, index) => (
            <AnimatedSection key={philosophy.id} delay={index * 150}>
              <Card hover className="h-full group overflow-hidden">
                {/* Gradient accent */}
                <div className={cn(
                  "h-1 w-full bg-gradient-to-r",
                  philosophy.gradient
                )} />

                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-5">
                    {/* Icon with number */}
                    <div className="relative flex-shrink-0">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center",
                        "bg-gradient-to-br",
                        philosophy.gradient,
                        "transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      )}>
                        <philosophy.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                        {philosophy.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {philosophy.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {philosophy.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
