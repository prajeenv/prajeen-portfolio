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
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-h2 text-text-primary mb-4">About Me</h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Narrative (60%) */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-body-lg text-text-secondary">
              I started my career as a software developer, building systems from the ground up.
              That technical foundation became my superpower when I transitioned into product management
              — I speak fluent developer while translating business needs into technical solutions.
            </p>
            <p className="text-body-lg text-text-secondary">
              Over 15+ years, I've led products across the spectrum: from 0-to-1 AI products at
              startups to €200M enterprise migrations at SAP. What drives me is the challenge of
              turning complex problems into elegant solutions that users love and businesses can measure.
            </p>
            <p className="text-body-lg text-text-secondary">
              Today, I'm particularly passionate about AI-powered products — I've shipped 4 AI products
              and believe deeply in building AI that augments human capabilities rather than replacing them.
            </p>
          </div>

          {/* Right Column - Highlight Cards (40%) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlightCards.map((card) => (
              <div
                key={card.title}
                className="bg-slate-50 rounded-card p-4 border border-gray-100"
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <h4 className="font-semibold text-text-primary mb-1">{card.title}</h4>
                <p className="text-sm text-text-secondary">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
