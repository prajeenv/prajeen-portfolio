import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent, sectionId?: SectionId) => {
    if (isHomePage && sectionId && onScrollToSection) {
      e.preventDefault()
      onScrollToSection(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Prajeen
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 transition-all duration-300 group-hover:w-full" />
            </div>
            <Badge variant="success" className="hidden sm:inline-flex animate-pulse">
              Open to Work
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  "text-muted-foreground hover:text-foreground hover:bg-accent",
                  location.pathname === link.href && "text-foreground bg-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-border">
              <Link to="/#contact">
                <Button
                  variant="gradient"
                  size="sm"
                  onClick={(e) => {
                    if (isHomePage && onScrollToSection) {
                      e.preventDefault()
                      onScrollToSection('contact')
                    }
                  }}
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={cn(
              "md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center",
              "text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 space-y-1 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.sectionId)
                  setIsMobileMenuOpen(false)
                }}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                  "text-muted-foreground hover:text-foreground hover:bg-accent",
                  "min-h-[44px]",
                  location.pathname === link.href && "text-foreground bg-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="gradient"
                  className="w-full"
                  onClick={(e) => {
                    if (isHomePage && onScrollToSection) {
                      e.preventDefault()
                      onScrollToSection('contact')
                    }
                  }}
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
