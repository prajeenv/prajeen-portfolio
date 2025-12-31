import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, FolderOpen, Briefcase, Rocket, ArrowRight } from 'lucide-react'
import Navigation from '../components/layout/Navigation'
import ProjectCard from '../components/home/ProjectCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { projects } from '../data/projects'

type FilterType = 'all' | 'professional' | 'side-projects'
type SortType = 'recent' | 'oldest'

const filters: { value: FilterType; label: string; icon: typeof FolderOpen }[] = [
  { value: 'all', label: 'All Projects', icon: FolderOpen },
  { value: 'professional', label: 'Professional', icon: Briefcase },
  { value: 'side-projects', label: 'Side Projects', icon: Rocket },
]

const sortOptions: { value: SortType; label: string }[] = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'oldest', label: 'Oldest First' },
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [sortBy, setSortBy] = useState<SortType>('recent')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    let result = [...projects]

    // Apply filter
    if (activeFilter === 'professional') {
      result = result.filter((p) => !p.isSideProject)
    } else if (activeFilter === 'side-projects') {
      result = result.filter((p) => p.isSideProject)
    }

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.company.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags?.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    // Apply sort (by period - extracting year)
    result.sort((a, b) => {
      const yearA = parseInt(a.period.match(/\d{4}/)?.[0] || '0')
      const yearB = parseInt(b.period.match(/\d{4}/)?.[0] || '0')
      return sortBy === 'recent' ? yearB - yearA : yearA - yearB
    })

    return result
  }, [activeFilter, sortBy, searchQuery])

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-mesh" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">Projects</span>
            </nav>

            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5">
                <FolderOpen className="w-3.5 h-3.5 mr-1.5 text-primary" />
                Portfolio
              </Badge>
              <h1 className={cn(
                "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
                "text-foreground mb-4"
              )}>
                Projects & <span className="text-gradient">Case Studies</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                A collection of products I've built across my career — from{' '}
                <span className="text-foreground font-medium">0-to-1 AI products</span> to{' '}
                <span className="text-foreground font-medium">enterprise-scale migrations</span>,
                professional work to passion projects.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="bg-muted/50 border-y border-border sticky top-20 z-40 backdrop-blur-sm">
          <div className="container-custom py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all min-h-[44px]",
                      activeFilter === filter.value
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-background text-muted-foreground hover:bg-accent hover:text-foreground border border-border"
                    )}
                  >
                    <filter.icon className="w-4 h-4" />
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Search & Sort */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                {/* Search */}
                <div className="relative flex-1 md:flex-none">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={cn(
                      "w-full md:w-64 pl-10 pr-4 py-2 text-sm rounded-lg",
                      "bg-background border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                      "min-h-[44px] transition-all"
                    )}
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortType)}
                  className={cn(
                    "px-4 py-2 text-sm rounded-lg",
                    "bg-background border border-border",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                    "min-h-[44px]"
                  )}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            {/* Results count */}
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {searchQuery && ` for "${searchQuery}"`}
            </p>

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search query.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setActiveFilter('all')
                    setSearchQuery('')
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="container-custom relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Want to know more?
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Each project taught me something valuable. I'd love to share the stories behind these products.
            </p>
            <Button variant="gradient" size="lg" asChild className="group">
              <Link to="/#contact">
                Let's Talk
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
