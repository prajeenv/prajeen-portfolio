import { Link } from 'react-router-dom'
import type { ProjectDetailData } from '../../types/project'
import Navigation from '../layout/Navigation'

interface ProjectDetailProps {
  project: ProjectDetailData
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const {
    title,
    company,
    role,
    period,
    type,
    isHeroProject,
    isSideProject,
    heroImage,
    tagline,
    overview,
    challenge,
    responsibilities,
    approach,
    keyDecisions,
    results,
    learnings,
    gallery,
    nextProject,
    prevProject,
  } = project

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-gray-100">
          <div className="container-custom py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-text-secondary hover:text-primary transition-colors">
                Home
              </Link>
              <span className="text-text-secondary">/</span>
              <Link to="/#projects" className="text-text-secondary hover:text-primary transition-colors">
                Projects
              </Link>
              <span className="text-text-secondary">/</span>
              <span className="text-text-primary font-medium">{title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Projects
              </Link>

              {/* Badges */}
              <div className="flex items-center gap-3 mb-4">
                {isHeroProject && (
                  <span className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-primary text-white rounded-full">
                    ⭐ Hero Project
                  </span>
                )}
                {isSideProject && (
                  <span className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-secondary-100 text-secondary-700 rounded-full">
                    🚀 Side Project
                  </span>
                )}
                <span className="text-sm text-text-secondary bg-slate-100 px-3 py-1 rounded-full">
                  {type}
                </span>
              </div>

              {/* Title & Meta */}
              <h1 className="text-h1 text-text-primary mb-2">{title}</h1>
              <p className="text-xl text-primary font-medium mb-2">{company}</p>
              <p className="text-body-lg text-text-secondary mb-4">
                {role} • {period}
              </p>

              {/* Tagline */}
              <p className="text-xl text-text-secondary leading-relaxed">
                {tagline}
              </p>
            </div>

            {/* Hero Image */}
            {heroImage && (
              <div className="mt-12 max-w-5xl mx-auto">
                <img
                  src={heroImage}
                  alt={`${title} hero`}
                  className="w-full rounded-card shadow-card"
                />
              </div>
            )}
          </div>
        </section>

        {/* Overview & Challenge */}
        <section className="bg-slate-50 section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Overview */}
                <div>
                  <h2 className="text-h3 text-text-primary mb-4 flex items-center gap-2">
                    <span className="text-2xl">📋</span> Overview
                  </h2>
                  <p className="text-body-lg text-text-secondary leading-relaxed">
                    {overview}
                  </p>
                </div>

                {/* Challenge */}
                <div>
                  <h2 className="text-h3 text-text-primary mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span> Challenge
                  </h2>
                  <p className="text-body-lg text-text-secondary leading-relaxed">
                    {challenge}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Role & Responsibilities */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 text-text-primary mb-8 text-center">
                Role & Responsibilities
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {responsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 bg-slate-50 rounded-card p-4"
                  >
                    <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-body text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Approach & Process */}
        <section className="bg-slate-50 section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 text-text-primary mb-8 text-center">
                Approach & Process
              </h2>
              <div className="space-y-6">
                {approach.map((step, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-card p-6 border border-gray-100"
                  >
                    {/* Step Number */}
                    <div className="absolute -left-4 top-6 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-h3 text-text-primary mb-2">{step.title}</h3>
                      <p className="text-body text-text-secondary">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Decisions */}
        {keyDecisions.length > 0 && (
          <section className="bg-white section-padding">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-h2 text-text-primary mb-8 text-center">
                  Key Decisions
                </h2>
                <div className="space-y-8">
                  {keyDecisions.map((decision, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 rounded-card p-6 border-l-4 border-primary"
                    >
                      <h3 className="text-h3 text-text-primary mb-3">
                        {decision.decision}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-1">
                            Rationale
                          </p>
                          <p className="text-body text-text-secondary">
                            {decision.rationale}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-success uppercase tracking-wide mb-1">
                            Outcome
                          </p>
                          <p className="text-body text-text-secondary">
                            {decision.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Results & Impact */}
        <section className="bg-primary section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-h2 text-white mb-12">
                Results & Impact
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {result.value}
                    </div>
                    <div className="text-primary-200 font-medium">
                      {result.metric}
                    </div>
                    {result.description && (
                      <p className="text-sm text-primary-300 mt-1">
                        {result.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 text-text-primary mb-8 text-center">
                Key Learnings
              </h2>
              <ul className="space-y-4">
                {learnings.map((learning, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-card"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-body-lg text-text-secondary pt-1">
                      {learning}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery */}
        {gallery && gallery.length > 0 && (
          <section className="bg-slate-50 section-padding">
            <div className="container-custom">
              <h2 className="text-h2 text-text-primary mb-8 text-center">
                Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {gallery.map((image, index) => (
                  <figure key={index} className="bg-white rounded-card overflow-hidden shadow-card">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover"
                    />
                    {image.caption && (
                      <figcaption className="p-4 text-sm text-text-secondary text-center">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Project Navigation */}
        <section className="bg-white border-t border-gray-100">
          <div className="container-custom">
            <div className="flex items-center justify-between py-8">
              {/* Previous Project */}
              {prevProject ? (
                <Link
                  to={`/projects/${prevProject.id}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors group"
                >
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wide text-text-secondary">Previous</p>
                    <p className="font-medium">{prevProject.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {/* Back to all projects */}
              <Link
                to="/#projects"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:text-primary border border-gray-200 rounded-card hover:border-primary transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                All Projects
              </Link>

              {/* Next Project */}
              {nextProject ? (
                <Link
                  to={`/projects/${nextProject.id}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors group"
                >
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wide text-text-secondary">Next</p>
                    <p className="font-medium">{nextProject.title}</p>
                  </div>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-dark section-padding">
          <div className="container-custom text-center">
            <h2 className="text-h2 text-white mb-4">Interested in working together?</h2>
            <p className="text-body-lg text-gray-400 mb-8">
              Let's discuss how I can help with your next product challenge.
            </p>
            <Link
              to="/#contact"
              className="btn-primary bg-white text-primary hover:bg-gray-100"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
