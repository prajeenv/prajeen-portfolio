import { philosophies } from '../../data/skills'

export default function ProductPhilosophy() {
  return (
    <div className="bg-white section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-h2 text-text-primary mb-4">Product Philosophy</h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Principles that guide how I approach product development
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {philosophies.map((philosophy) => (
            <div
              key={philosophy.id}
              className="relative bg-slate-50 rounded-card p-6 border border-gray-100"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {philosophy.id}
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="text-h3 text-text-primary mb-3">{philosophy.title}</h3>
                <p className="text-body text-text-secondary">{philosophy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
