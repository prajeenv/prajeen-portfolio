interface HeroProps {
  onViewWork: () => void
  onContact: () => void
}

export default function Hero({ onViewWork, onContact }: HeroProps) {
  return (
    <div className="bg-white section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline - responsive typography */}
          <h1 className="text-3xl sm:text-4xl lg:text-h1 text-text-primary mb-4 sm:mb-6 leading-tight">
            I build AI-powered products that turn complex problems into{' '}
            <span className="text-primary">measurable growth</span>
          </h1>

          {/* Sub-headline - responsive */}
          <p className="text-base sm:text-lg lg:text-body-lg text-text-secondary mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            From 0-to-1 launches to enterprise scale | €200M migrations • +25% activation • #1 Product Hunt | 15+ years in B2B SaaS
          </p>

          {/* CTAs - 44px min touch targets */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onViewWork}
              className="btn-primary w-full sm:w-auto min-h-[44px]"
            >
              View Featured Work
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button
              onClick={onContact}
              className="btn-secondary w-full sm:w-auto min-h-[44px]"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
