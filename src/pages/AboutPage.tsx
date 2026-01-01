import { Link } from 'react-router-dom'
import {
  User, MapPin, Briefcase, Award, Wrench, Heart,
  Check, ArrowRight, Calendar, Building2
} from 'lucide-react'
import Navigation from '../components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { experiences, achievements, tools, aboutContent } from '../data/about'
import { skills } from '../data/skills'

const skillIcons: Record<string, typeof Briefcase> = {
  'strategy': Briefcase,
  'ai-ml': Award,
  'technical': Wrench,
  'research': User,
  'data': Award,
  'leadership': Heart,
}

const skillGradients: Record<string, string> = {
  'strategy': 'from-blue-500 to-cyan-500',
  'ai-ml': 'from-violet-500 to-purple-500',
  'technical': 'from-slate-600 to-slate-800',
  'research': 'from-rose-500 to-pink-500',
  'data': 'from-emerald-500 to-teal-500',
  'leadership': 'from-amber-500 to-orange-500',
}

export default function AboutPage() {
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
              <span className="text-foreground font-medium">About</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center">
              {/* Content */}
              <div className="lg:col-span-2">
                <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5">
                  <User className="w-3.5 h-3.5 mr-1.5 text-primary" />
                  About Me
                </Badge>
                <h1 className={cn(
                  "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
                  "text-foreground mb-4"
                )}>
                  {aboutContent.intro.headline}
                </h1>
                <p className="text-xl sm:text-2xl text-primary font-medium mb-6">
                  {aboutContent.intro.subheadline}
                </p>
                <div className="space-y-4">
                  {aboutContent.intro.paragraphs.slice(0, 2).map((paragraph, index) => (
                    <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Profile Card */}
              <div className="lg:col-span-1">
                <Card className="overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary via-blue-500 to-primary" />
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                      <span className="text-6xl">👨‍💻</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">Prajeen Vijayan</h3>
                    <p className="text-muted-foreground mb-3 flex items-center justify-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Berlin, Germany
                    </p>
                    <Badge variant="success" className="mb-4">
                      Open to Work
                    </Badge>
                    <div className="pt-4 border-t border-border">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-foreground">15+</div>
                          <div className="text-xs text-muted-foreground">Years Exp.</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">4</div>
                          <div className="text-xs text-muted-foreground">AI Products</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-primary" />
                  Career Journey
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Experience Timeline
                </h2>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-500 to-primary/30" />

                {/* Timeline items */}
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div
                      key={exp.id}
                      className={cn(
                        "relative flex flex-col md:flex-row gap-8",
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      )}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />

                      {/* Content card */}
                      <div className={cn(
                        "md:w-1/2",
                        index % 2 === 0 ? 'md:pr-12' : 'md:pl-12',
                        "pl-12 md:pl-0"
                      )}>
                        <Card hover className="overflow-hidden">
                          <div className="h-1 bg-gradient-to-r from-primary to-blue-500" />
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                                <Building2 className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                                <p className="text-primary font-medium">{exp.company}</p>
                                <p className="text-sm text-muted-foreground">
                                  {exp.period} • {exp.location}
                                </p>
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-4">
                              {exp.description}
                            </p>
                            <ul className="space-y-2">
                              {exp.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-emerald-600" />
                                  </div>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="hidden md:block md:w-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Competencies */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5">
                  <Award className="w-3.5 h-3.5 mr-1.5 text-primary" />
                  Expertise
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Skills & Competencies
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Core capabilities developed across 15+ years of building products
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill) => {
                  const Icon = skillIcons[skill.id] || Briefcase
                  const gradient = skillGradients[skill.id] || 'from-blue-500 to-cyan-500'

                  return (
                    <Card key={skill.id} hover className="group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                            "bg-gradient-to-br",
                            gradient,
                            "transition-transform duration-300 group-hover:scale-110"
                          )}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{skill.title}</h3>
                            <p className="text-sm text-muted-foreground">{skill.description}</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {skill.items.slice(0, 4).map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-primary" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`
          }} />

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Achievements & Recognition
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur rounded-xl p-4 text-center hover:bg-white/20 transition-all hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <h3 className="font-bold text-white text-sm mb-1">{achievement.title}</h3>
                    <p className="text-white/70 text-xs">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5">
                  <Wrench className="w-3.5 h-3.5 mr-1.5 text-primary" />
                  Toolkit
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Tools & Technologies
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The toolkit I use to build and ship products
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((toolCategory) => (
                  <Card key={toolCategory.category} hover>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4">
                        {toolCategory.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {toolCategory.items.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="container-custom relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Want to work together?
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              I'm currently open to new opportunities. Let's discuss how I can help with your next product challenge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/#contact"
                className="group inline-flex items-center justify-center h-12 px-8 rounded-lg text-base font-medium bg-gradient-to-r from-primary to-blue-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:opacity-90 transition-all duration-200"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-base font-medium border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-200"
              >
                View My Work
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
