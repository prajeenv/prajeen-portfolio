import { philosophies } from '../../data/skills'
import AnimatedSection from '../common/AnimatedSection'

export default function ProductPhilosophy() {
  return (
    <div className="bg-white section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-h2 text-text-primary mb-3 sm:mb-4">Product Philosophy</h2>
          <p className="text-base sm:text-body-lg text-text-secondary max-w-2xl mx-auto">
            Principles that guide how I approach product development
          </p>
        </AnimatedSection>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {philosophies.map((philosophy, index) => (
            <AnimatedSection key={philosophy.id} delay={index * 150}>
              <div className="relative bg-slate-50 rounded-card p-4 sm:p-6 border border-gray-100 ml-4 sm:ml-0 hover:shadow-card transition-shadow duration-default h-full">
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-lg">
                  {philosophy.id}
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-lg sm:text-h3 text-text-primary mb-2 sm:mb-3">{philosophy.title}</h3>
                  <p className="text-sm sm:text-body text-text-secondary">{philosophy.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
