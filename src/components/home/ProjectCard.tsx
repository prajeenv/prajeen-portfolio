import { Link } from 'react-router-dom'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    company,
    type,
    description,
    isHeroProject,
    isSideProject,
    link,
    metrics,
  } = project

  return (
    <Link
      to={link}
      className={`card block p-6 h-full ${
        isHeroProject
          ? 'border-2 border-primary ring-2 ring-primary/20'
          : 'border border-gray-200'
      }`}
    >
      {/* Badges */}
      <div className="flex items-center gap-2 mb-4">
        {isHeroProject && (
          <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full">
            ⭐ Hero Project
          </span>
        )}
        {isSideProject && (
          <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-secondary-100 text-secondary-700 rounded-full">
            🚀 Side Project
          </span>
        )}
        <span className="text-xs text-text-secondary">{type}</span>
      </div>

      {/* Title & Company */}
      <h3 className="text-h3 text-text-primary mb-1">{title}</h3>
      <p className="text-sm text-primary font-medium mb-3">{company}</p>

      {/* Description */}
      <p className="text-body text-text-secondary mb-4 line-clamp-3">
        {description}
      </p>

      {/* Metrics */}
      {metrics && metrics.length > 0 && (
        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="text-lg font-bold text-primary">{metric.value}</span>
              <span className="text-xs text-text-secondary">{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Arrow indicator */}
      <div className="mt-4 flex items-center text-primary font-medium text-sm">
        View Case Study
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
