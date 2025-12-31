import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { SectionId } from '../../types/navigation'

interface NavigationProps {
  onScrollToSection?: (sectionId: SectionId) => void
}

const navLinks = [
  { label: 'Home', href: '/', sectionId: 'hero' as SectionId },
  { label: 'Projects', href: '/projects', sectionId: undefined },
  { label: 'About', href: '/about', sectionId: undefined },
  { label: 'Contact', href: '/#contact', sectionId: 'contact' as SectionId },
]

export default function Navigation({ onScrollToSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const handleNavClick = (e: React.MouseEvent, sectionId?: SectionId) => {
    if (isHomePage && sectionId && onScrollToSection) {
      e.preventDefault()
      onScrollToSection(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">Prajeen</span>
            <span className="hidden sm:inline-flex items-center px-2 py-1 text-xs font-medium bg-success-50 text-success-600 rounded-full">
              Open to Work
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className="text-text-secondary hover:text-primary font-medium transition-colors duration-default"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-text-secondary hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="text-text-secondary hover:text-primary font-medium transition-colors duration-default py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
