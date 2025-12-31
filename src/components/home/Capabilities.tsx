import { skills } from '../../data/skills'

export default function Capabilities() {
  return (
    <div className="bg-neutral-50 section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-h2 text-text-primary mb-4">Skills & Capabilities</h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Core competencies developed across 15+ years of building products
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white rounded-card p-6 border border-gray-100 hover:shadow-card transition-shadow duration-default"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{skill.icon}</span>
                <h3 className="text-h3 text-text-primary">{skill.title}</h3>
              </div>

              {/* Description */}
              <p className="text-body text-text-secondary mb-4">{skill.description}</p>

              {/* Skills List */}
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                    <svg className="w-4 h-4 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
