import { Link } from 'react-router-dom'
import { ArrowRight, Star, Rocket, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
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
    <Link to={link} className="block h-full group">
      <Card
        hover
        glow={isHeroProject}
        className={cn(
          "h-full overflow-hidden",
          isHeroProject && "border-primary/50 ring-1 ring-primary/20"
        )}
      >
        {/* Gradient accent bar */}
        <div className={cn(
          "h-1 w-full",
          isHeroProject
            ? "bg-gradient-to-r from-primary via-blue-500 to-primary"
            : isSideProject
            ? "bg-gradient-to-r from-amber-400 to-orange-500"
            : "bg-gradient-to-r from-slate-200 to-slate-300"
        )} />

        <CardContent className="p-6">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {isHeroProject && (
              <Badge variant="gradient" className="gap-1">
                <Star className="w-3 h-3" />
                Hero Project
              </Badge>
            )}
            {isSideProject && (
              <Badge variant="warning" className="gap-1">
                <Rocket className="w-3 h-3" />
                Side Project
              </Badge>
            )}
            <Badge variant="secondary" className="font-normal">
              {type}
            </Badge>
          </div>

          {/* Title & Company */}
          <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm font-medium text-primary mb-3">{company}</p>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>

          {/* Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="flex flex-wrap gap-4 pt-4 border-t border-border mb-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-foreground">{metric.value}</span>
                    <span className="text-xs text-muted-foreground">{metric.label}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Arrow indicator */}
          <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
            View Case Study
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
