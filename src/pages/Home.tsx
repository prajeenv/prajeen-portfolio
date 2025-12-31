import { useScrollTo } from '../hooks/useScrollTo'
import Navigation from '../components/layout/Navigation'
import Hero from '../components/home/Hero'
import FeaturedProjects from '../components/home/FeaturedProjects'
import MetricsBar from '../components/home/MetricsBar'
import About from '../components/home/About'
import Capabilities from '../components/home/Capabilities'
import ProductPhilosophy from '../components/home/ProductPhilosophy'
import Contact from '../components/home/Contact'

export default function Home() {
  const { sectionRefs, scrollToSection } = useScrollTo()

  return (
    <>
      <Navigation onScrollToSection={scrollToSection} />

      <main className="pt-20">
        <section ref={sectionRefs.hero} id="hero">
          <Hero
            onViewWork={() => scrollToSection('projects')}
            onContact={() => scrollToSection('contact')}
          />
        </section>

        <section ref={sectionRefs.projects} id="projects">
          <FeaturedProjects />
        </section>

        <section ref={sectionRefs.metrics} id="metrics">
          <MetricsBar />
        </section>

        <section ref={sectionRefs.about} id="about">
          <About />
        </section>

        <section ref={sectionRefs.capabilities} id="capabilities">
          <Capabilities />
        </section>

        <section ref={sectionRefs.philosophy} id="philosophy">
          <ProductPhilosophy />
        </section>

        <section ref={sectionRefs.contact} id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}
