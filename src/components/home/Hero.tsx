import { ArrowDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface HeroProps {
  onViewWork: () => void
  onContact: () => void
}

export default function Hero({ onViewWork, onContact }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse animation-delay-200" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Intro badge */}
          <div className="inline-flex items-center gap-2 mb-6 animate-fade-up">
            <Badge variant="outline" className="px-4 py-1.5 text-sm border-primary/20 bg-primary/5">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-primary" />
              Product Manager & AI Specialist
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className={cn(
            "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight",
            "text-foreground mb-6 leading-[1.1]",
            "animate-fade-up animation-delay-100"
          )}>
            I build AI-powered products that turn complex problems into{' '}
            <span className="text-gradient">measurable growth</span>
          </h1>

          {/* Sub-headline */}
          <p className={cn(
            "text-lg sm:text-xl text-muted-foreground mb-10",
            "max-w-2xl mx-auto leading-relaxed",
            "animate-fade-up animation-delay-200"
          )}>
            From 0-to-1 launches to enterprise scale
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline">
              €200M migrations • +25% activation • #1 Product Hunt
            </span>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline text-foreground font-medium">15+ years in B2B SaaS</span>
          </p>

          {/* Stats row */}
          <div className={cn(
            "flex flex-wrap justify-center gap-6 sm:gap-10 mb-10",
            "animate-fade-up animation-delay-300"
          )}>
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '4', label: 'AI Products' },
              { value: '€200M', label: 'Enterprise Scale' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4",
            "animate-fade-up animation-delay-400"
          )}>
            <Button
              onClick={onViewWork}
              variant="gradient"
              size="xl"
              className="w-full sm:w-auto group"
            >
              View Featured Work
              <ArrowDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button
              onClick={onContact}
              variant="outline"
              size="xl"
              className="w-full sm:w-auto"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
