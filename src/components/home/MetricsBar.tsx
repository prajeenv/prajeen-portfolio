import { impactMetrics } from '../../data/metrics'

export default function MetricsBar() {
  return (
    <div className="bg-slate-50 section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-body text-text-secondary">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
