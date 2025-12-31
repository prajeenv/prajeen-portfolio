import AnimatedSection from '../common/AnimatedSection'

const highlightCards = [
  {
    icon: '🎯',
    title: 'Unique Value',
    description: 'Developer-turned-PM with deep technical understanding and business acumen',
  },
  {
    icon: '🏢',
    title: 'Domain Experience',
    description: 'Enterprise SaaS, E-mobility, AI/ML, Developer Tools',
  },
  {
    icon: '📈',
    title: 'Career Trajectory',
    description: 'SAP Labs → ABB E-mobility → DogQ (Startup)',
  },
  {
    icon: '📍',
    title: 'Location',
    description: 'Berlin, Germany | Open to remote opportunities',
  },
]

export default function About() {
  return (
    <div className="bg-white section-padding">
      <div className="container-custom">
        {/* Section Header - responsive */}
        <AnimatedSection className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-h2 text-text-primary mb-3 sm:mb-4">About Me</h2>
        </AnimatedSection>

        {/* Two Column Layout - responsive gap */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Column - Narrative (60%) */}
          <AnimatedSection className="lg:col-span-3 space-y-4 sm:space-y-6" animation="fade-left">
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              I started my career as a software developer, building systems from the ground up.
              That technical foundation became my superpower when I transitioned into product management
              — I speak fluent developer while translating business needs into technical solutions.
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Over 15+ years, I've led products across the spectrum: from 0-to-1 AI products at
              startups to €200M enterprise migrations at SAP. What drives me is the challenge of
              turning complex problems into elegant solutions that users love and businesses can measure.
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Today, I'm particularly passionate about AI-powered products — I've shipped 4 AI products
              and believe deeply in building AI that augments human capabilities rather than replacing them.
            </p>
          </AnimatedSection>

          {/* Right Column - Highlight Cards (40%) - responsive grid */}
          <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            {highlightCards.map((card, index) => (
              <AnimatedSection key={card.title} animation="fade-right" delay={index * 100}>
                <div className="bg-slate-50 rounded-card p-3 sm:p-4 border border-gray-100 hover:shadow-card hover:-translate-y-1 transition-all duration-default h-full">
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{card.icon}</div>
                  <h4 className="font-semibold text-text-primary mb-1 text-sm sm:text-base">{card.title}</h4>
                  <p className="text-xs sm:text-sm text-text-secondary">{card.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
