import { LinkedinIcon, Mail, GithubIcon, ArrowUpRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AnimatedSection from '../common/AnimatedSection'
import { cn } from '@/lib/utils'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/prajeen',
    icon: LinkedinIcon,
    description: 'Connect with me',
  },
  {
    name: 'Email',
    href: 'mailto:prajeen.v@gmail.com',
    icon: Mail,
    description: 'Drop me a line',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/prajeenv',
    icon: GithubIcon,
    description: 'See my code',
  },
]

export default function Contact() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="px-4 py-1.5 text-sm font-medium text-primary bg-primary/20 rounded-full border border-primary/30">
                <Sparkles className="w-3.5 h-3.5 inline-block mr-1.5" />
                Open to Opportunities
              </span>
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection delay={100}>
            <h2 className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6",
              "tracking-tight"
            )}>
              Let's build something{' '}
              <span className="text-gradient">together</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm currently open to new opportunities. Whether you have a question
              or just want to say hi, feel free to reach out!
            </p>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group flex items-center gap-4 w-full sm:w-auto",
                    "px-6 py-4 rounded-2xl",
                    "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20",
                    "transition-all duration-300 hover:-translate-y-1"
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <link.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1 text-white font-medium">
                      {link.name}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                    <div className="text-sm text-slate-400">
                      {link.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Direct email CTA */}
          <AnimatedSection delay={400}>
            <div className="mt-12">
              <Button
                variant="gradient"
                size="lg"
                className="group"
                onClick={() => window.location.href = 'mailto:prajeen.v@gmail.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send me an email
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </AnimatedSection>

          {/* Copyright */}
          <div className="mt-20 pt-8 border-t border-white/10">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Prajeen. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
