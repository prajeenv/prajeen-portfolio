import { impactMetrics } from '../../data/metrics'

export default function MetricsBar() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16 lg:section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">
                {metric.value}
              </div>
              <div className="text-sm sm:text-base text-text-secondary">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
