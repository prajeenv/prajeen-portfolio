import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects() {
  return (
    <div className="bg-white section-padding">
      <div className="container-custom">
        {/* Section Header - responsive */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-h2 text-text-primary mb-3 sm:mb-4">Featured Projects</h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            A selection of products I've built, from 0-to-1 launches to enterprise-scale transformations
          </p>
        </div>

        {/* Project Grid - responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
