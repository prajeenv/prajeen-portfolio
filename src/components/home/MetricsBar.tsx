import { impactMetrics } from '../../data/metrics'
import AnimatedSection from '../common/AnimatedSection'
import { cn } from '@/lib/utils'

export default function MetricsBar() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-primary" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {impactMetrics.map((metric, index) => (
            <AnimatedSection key={metric.label} delay={index * 100} animation="fade-up">
              <div className="text-center group">
                <div className={cn(
                  "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2",
                  "transition-transform duration-300 group-hover:scale-110"
                )}>
                  {metric.value}
                </div>
                <div className="text-sm sm:text-base text-white/80 font-medium">
                  {metric.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
    </section>
  )
}
