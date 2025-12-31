import { Target, Building2, TrendingUp, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import AnimatedSection from '../common/AnimatedSection'
import { cn } from '@/lib/utils'

const highlightCards = [
  {
    icon: Target,
    title: 'Unique Value',
    description: 'Developer-turned-PM with deep technical understanding and business acumen',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Building2,
    title: 'Domain Experience',
    description: 'Enterprise SaaS, E-mobility, AI/ML, Developer Tools',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Career Trajectory',
    description: 'SAP Labs → ABB E-mobility → DogQ (Startup)',
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
            Developer-Turned Product Leader
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            15+ years of building products that matter
          </p>
        </AnimatedSection>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left Column - Narrative */}
          <AnimatedSection className="lg:col-span-3 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I started my career as a software developer, building systems from the ground up.
                That technical foundation became my superpower when I transitioned into product management
                — <span className="text-foreground font-medium">I speak fluent developer</span> while translating business needs into technical solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over 15+ years, I've led products across the spectrum: from <span className="text-foreground font-medium">0-to-1 AI products</span> at
                startups to <span className="text-foreground font-medium">€200M enterprise migrations</span> at SAP. What drives me is the challenge of
                turning complex problems into elegant solutions that users love and businesses can measure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I'm particularly passionate about AI-powered products — I've shipped <span className="text-foreground font-medium">4 AI products</span>{' '}
                and believe deeply in building AI that augments human capabilities rather than replacing them.
              </p>
            </div>

            {/* Visual separator with quote */}
            <blockquote className="relative pl-6 border-l-4 border-primary">
              <p className="text-xl italic text-foreground">
                "Great products come from understanding both the code and the customer."
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
