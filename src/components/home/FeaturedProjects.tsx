import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import AnimatedSection from '../common/AnimatedSection'
import { cn } from '@/lib/utils'

export default function FeaturedProjects() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Portfolio
          </span>
          <h2 className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4",
            "tracking-tight"
          )}>
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of products I've built, from 0-to-1 launches to enterprise-scale transformations
          </p>
        </AnimatedSection>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
