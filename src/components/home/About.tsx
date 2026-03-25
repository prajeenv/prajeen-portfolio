import { Target, Building2, TrendingUp, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import AnimatedSection from '../common/AnimatedSection'
import { cn } from '@/lib/utils'

const highlightCards = [
  {
    icon: Target,
    title: 'AI Product Expertise',
    description: '4 AI products shipped — from 0-to-1 builds to enterprise-scale platforms',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Building2,
    title: 'Domain Breadth',
    description: 'Enterprise SaaS, E-mobility, AI/ML, Developer Tools, Review Management',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Career Trajectory',
    description: 'SAP Labs → ABB E-mobility → DogQ → ReviewFlow',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Berlin, Germany | Open to remote opportunities',
    gradient: 'from-emerald-500 to-teal-500',
  },
]

export default function About() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            About Me
          </span>
          <h2 className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4",
            "tracking-tight"
          )}>
            AI Product Leader
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            15+ years building products across startups and enterprise
          </p>
        </AnimatedSection>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left Column - Narrative */}
          <AnimatedSection className="lg:col-span-3 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over 15+ years, I've shipped products across the full spectrum — from <span className="text-foreground font-medium">0-to-1 AI products</span> at
                startups to <span className="text-foreground font-medium">€200M enterprise migrations</span> at SAP. Today, I lead product strategy at DogQ, an
                AI-powered testing platform that launched to <span className="text-foreground font-medium">#1 on Product Hunt</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What sets me apart is hands-on AI product expertise. I've shipped <span className="text-foreground font-medium">4 AI products</span>, making
                architecture decisions that directly impact unit economics — like choosing dual-AI strategies to optimize cost
                and quality independently, or designing credit-based pricing models that align user value with API costs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I don't just spec products — I can validate and ship them end-to-end. My latest side project,{' '}
                <span className="text-foreground font-medium">ReviewFlow</span>, is a live AI-powered SaaS platform I built from
                problem identification through deployment, applying the same product rigor I bring to team environments.
              </p>
            </div>

            {/* Visual separator with quote */}
            <blockquote className="relative pl-6 border-l-4 border-primary">
              <p className="text-xl italic text-foreground">
                "The best AI products come from PMs who understand both the model's capabilities and the user's problem."
              </p>
            </blockquote>
          </AnimatedSection>

          {/* Right Column - Highlight Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlightCards.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 100}>
                <Card hover className="h-full overflow-hidden group">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                        "bg-gradient-to-br",
                        card.gradient,
                        "transition-transform duration-300 group-hover:scale-110"
                      )}>
                        <card.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {card.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
