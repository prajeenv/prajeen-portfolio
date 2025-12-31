import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects() {
  return (
    <div className="bg-white section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-h2 text-text-primary mb-4">Featured Projects</h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            A selection of products I've built, from 0-to-1 launches to enterprise-scale transformations
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
