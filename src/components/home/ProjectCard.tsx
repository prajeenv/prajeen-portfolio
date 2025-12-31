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
      className={`card block p-4 sm:p-6 h-full ${
        isHeroProject
          ? 'border-2 border-primary ring-2 ring-primary/20'
          : 'border border-gray-200'
      }`}
    >
      {/* Badges - responsive wrap */}
      <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
        {isHeroProject && (
          <span className="inline-flex items-center px-2 sm:px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full">
            ⭐ Hero Project
          </span>
        )}
        {isSideProject && (
          <span className="inline-flex items-center px-2 sm:px-3 py-1 text-xs font-semibold bg-secondary-100 text-secondary-700 rounded-full">
            🚀 Side Project
          </span>
        )}
        <span className="text-xs text-text-secondary">{type}</span>
      </div>

      {/* Title & Company - responsive */}
      <h3 className="text-lg sm:text-h3 text-text-primary mb-1">{title}</h3>
      <p className="text-sm text-primary font-medium mb-2 sm:mb-3">{company}</p>

      {/* Description */}
      <p className="text-sm sm:text-base text-text-secondary mb-4 line-clamp-3">
        {description}
      </p>

      {/* Metrics - responsive gap */}
      {metrics && metrics.length > 0 && (
        <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-100">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-primary">{metric.value}</span>
              <span className="text-xs text-text-secondary">{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Arrow indicator - touch target */}
      <div className="mt-4 flex items-center text-primary font-medium text-sm min-h-[44px] sm:min-h-0">
        View Case Study
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
