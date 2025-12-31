import { Link } from 'react-router-dom'
import Navigation from '../components/layout/Navigation'
import { experiences, achievements, tools, aboutContent } from '../data/about'
import { skills } from '../data/skills'

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm mb-8">
                <Link to="/" className="text-text-secondary hover:text-primary transition-colors">
                  Home
                </Link>
                <span className="text-text-secondary">/</span>
                <span className="text-text-primary font-medium">About</span>
              </nav>

              {/* Intro */}
              <div className="text-center mb-12">
                <h1 className="text-h1 text-text-primary mb-4">
                  {aboutContent.intro.headline}
                </h1>
                <p className="text-xl text-primary font-medium mb-8">
                  {aboutContent.intro.subheadline}
                </p>
              </div>

              {/* Profile area - placeholder for image */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Image placeholder */}
                <div className="lg:col-span-1">
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-card flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="font-semibold text-text-primary">Prajeen</p>
                    <p className="text-sm text-text-secondary">Berlin, Germany</p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-success-50 text-success-600 rounded-full">
                        Open to Work
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio paragraphs */}
                <div className="lg:col-span-2 space-y-6">
                  {aboutContent.intro.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-body-lg text-text-secondary leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="bg-slate-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-h2 text-text-primary mb-12 text-center">
                Experience Timeline
              </h2>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200" />

                {/* Timeline items */}
                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <div
                      key={exp.id}
                      className={`relative flex flex-col md:flex-row gap-8 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow" />

                      {/* Content card */}
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                        <div className="bg-white rounded-card p-6 shadow-card">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-h3 text-text-primary">{exp.role}</h3>
                              <p className="text-primary font-medium">{exp.company}</p>
                            </div>
                          </div>
                          <p className="text-sm text-text-secondary mb-3">
                            {exp.period} • {exp.location}
                          </p>
                          <p className="text-body text-text-secondary mb-4">
                            {exp.description}
                          </p>
                          <ul className="space-y-1">
                            {exp.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                                <svg className="w-4 h-4 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="hidden md:block md:w-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Competencies */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-h2 text-text-primary mb-4 text-center">
                Skills & Competencies
              </h2>
              <p className="text-body-lg text-text-secondary text-center mb-12 max-w-2xl mx-auto">
                Core capabilities developed across 15+ years of building products
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-slate-50 rounded-card p-6 border border-gray-100 hover:shadow-card transition-shadow duration-default"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{skill.icon}</span>
                      <h3 className="font-semibold text-text-primary">{skill.title}</h3>
                    </div>
                    <p className="text-sm text-text-secondary mb-4">{skill.description}</p>
                    <ul className="space-y-1">
                      {skill.items.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-slate-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-h2 text-text-primary mb-4 text-center">
                My Approach
              </h2>
              <p className="text-body-lg text-text-secondary text-center mb-12 max-w-2xl mx-auto">
                Principles that guide how I build products
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {aboutContent.philosophy.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-card p-6 border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-text-primary">{item.title}</h3>
                    </div>
                    <p className="text-body text-text-secondary">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-primary section-padding">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-h2 text-white mb-12 text-center">
                Achievements & Recognition
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur rounded-card p-4 text-center"
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <h3 className="font-bold text-white text-lg mb-1">{achievement.title}</h3>
                    <p className="text-primary-200 text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-h2 text-text-primary mb-4 text-center">
                Tools & Technologies
              </h2>
              <p className="text-body-lg text-text-secondary text-center mb-12 max-w-2xl mx-auto">
                The toolkit I use to build and ship products
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((toolCategory) => (
                  <div
                    key={toolCategory.category}
                    className="bg-slate-50 rounded-card p-6 border border-gray-100"
                  >
                    <h3 className="font-semibold text-text-primary mb-4">
                      {toolCategory.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {toolCategory.items.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-white text-text-secondary text-sm rounded-full border border-gray-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-dark section-padding">
          <div className="container-custom text-center">
            <h2 className="text-h2 text-white mb-4">Want to work together?</h2>
            <p className="text-body-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm currently open to new opportunities. Let's discuss how I can help with your next product challenge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/#contact"
                className="btn-primary bg-white text-primary hover:bg-gray-100"
              >
                Get in Touch
              </Link>
              <Link
                to="/#projects"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
              >
                View My Work
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
