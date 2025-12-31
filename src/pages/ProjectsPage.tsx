import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/layout/Navigation'
import ProjectCard from '../components/home/ProjectCard'
import { projects } from '../data/projects'

type FilterType = 'all' | 'professional' | 'side-projects'
type SortType = 'recent' | 'oldest'

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'professional', label: 'Professional' },
  { value: 'side-projects', label: 'Side Projects' },
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
        {/* Header */}
        <section className="bg-white section-padding pb-8">
          <div className="container-custom">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link to="/" className="text-text-secondary hover:text-primary transition-colors">
                Home
              </Link>
              <span className="text-text-secondary">/</span>
              <span className="text-text-primary font-medium">Projects</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-2xl sm:text-3xl lg:text-h1 text-text-primary mb-3 sm:mb-4">
                Projects & Case Studies
              </h1>
              <p className="text-base sm:text-body-lg text-text-secondary">
                A collection of products I've built across my career — from 0-to-1 AI products
                to enterprise-scale migrations, professional work to passion projects.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="bg-slate-50 border-y border-gray-200 sticky top-20 z-40">
          <div className="container-custom py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors min-h-[44px] ${
                      activeFilter === filter.value
                        ? 'bg-primary text-white'
                        : 'bg-white text-text-secondary hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Search & Sort */}
              <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto">
                {/* Search */}
                <div className="relative flex-1 md:flex-none">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:w-64 pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-card bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
                  />
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortType)}
                  className="px-3 py-2 text-sm border border-gray-200 rounded-card bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
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
        <section className="bg-white section-padding">
          <div className="container-custom">
            {/* Results count */}
            <p className="text-sm text-text-secondary mb-6">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {searchQuery && ` for "${searchQuery}"`}
            </p>

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 sm:py-16">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
                <h3 className="text-lg sm:text-h3 text-text-primary mb-2">No projects found</h3>
                <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6">
                  Try adjusting your filters or search query.
                </p>
                <button
                  onClick={() => {
                    setActiveFilter('all')
                    setSearchQuery('')
                  }}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-dark section-padding">
          <div className="container-custom text-center">
            <h2 className="text-xl sm:text-2xl lg:text-h2 text-white mb-4">Want to know more?</h2>
            <p className="text-base sm:text-body-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Each project taught me something valuable. I'd love to share the stories behind these products.
            </p>
            <Link
              to="/#contact"
              className="btn-primary bg-white text-primary hover:bg-gray-100"
            >
              Let's Talk
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
