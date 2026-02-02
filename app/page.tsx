"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Code2,
  Network,
  Lock,
  Zap,
  BarChart,
  Database,
  MessageSquare,
  Link2,
  Shield,
  Container,
  GitBranch,
  Cloud,
  Layout,
  AlertTriangle as Performance,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { experiences } from "@/lib/data/experience"
import { projects } from "@/lib/data/projects"
import { skillGroups } from "@/lib/data/skills"

const skillIconMap: Record<string, React.ReactNode> = {
  // Backend
  PHP: <Code2 className="w-5 h-5" />,
  Laravel: <Server className="w-5 h-5" />,
  Yii2: <Code2 className="w-5 h-5" />,
  "Node.js": <Server className="w-5 h-5" />,
  NestJS: <Server className="w-5 h-5" />,
  TypeScript: <Code2 className="w-5 h-5" />,
  // APIs & Architecture
  REST: <Network className="w-5 h-5" />,
  "OpenAPI/Swagger": <Layout className="w-5 h-5" />,
  "JWT/OAuth2": <Lock className="w-5 h-5" />,
  Microservices: <Zap className="w-5 h-5" />,
  "Event-driven": <MessageSquare className="w-5 h-5" />,
  "Rate limiting": <Shield className="w-5 h-5" />,
  // Data & Messaging
  MySQL: <Database className="w-5 h-5" />,
  PostgreSQL: <Database className="w-5 h-5" />,
  Redis: <BarChart className="w-5 h-5" />,
  RabbitMQ: <MessageSquare className="w-5 h-5" />,
  DLQ: <Link2 className="w-5 h-5" />,
  Idempotency: <Shield className="w-5 h-5" />,
  // DevOps
  Docker: <Container className="w-5 h-5" />,
  Git: <GitBranch className="w-5 h-5" />,
  AWS: <Cloud className="w-5 h-5" />,
  DigitalOcean: <Cloud className="w-5 h-5" />,
  "CI/CD": <Zap className="w-5 h-5" />,
  "SLI/SLO/SLA": <BarChart className="w-5 h-5" />,
  // Frontend
  React: <Layout className="w-5 h-5" />,
  "Next.js": <Zap className="w-5 h-5" />,
  "Core Web Vitals": <Performance className="w-5 h-5" />,
  "A/B Testing": <TrendingUp className="w-5 h-5" />,
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center space-y-6 px-4 py-20">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-primary">MD NASIR WAHID</h1>
            <p className="text-2xl md:text-3xl text-foreground font-semibold">Sr. Software Engineer</p>
            <div className="flex items-center justify-center gap-2">
              <div className="h-0.5 w-16 bg-pink-500"></div>
              <div className="h-0.5 w-1 bg-pink-500"></div>
              <div className="h-0.5 w-16 bg-pink-500"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
              Full-Stack Software Engineer (5+ years) specializing in PHP/Laravel, Node.js/NestJS, and Next.js/React. Built audit-ready double-entry accounting and POS-integrated commerce platforms;
              reduced reporting load ~40% and improved P95 latency ~30%. Designed and shipped event-driven microservices using RabbitMQ/Redis with MySQL/PostgreSQL, and delivered production deployments
              on Docker + AWS/DigitalOcean with CI/CD, tracing, and measurable SLI/SLO/SLA targets.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-4">
            <Link href="https://github.com/NASIR-CSE-RU" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-pink-500 hover:bg-pink-500/10">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/nasir-cse-ru/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-pink-500 hover:bg-pink-500/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:nasir.cse.ru@gmail.com">
              <Button variant="ghost" size="icon" className="hover:text-pink-500 hover:bg-pink-500/10">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Rocket Animation */}
          <div className="text-4xl animate-bounce pt-4">🚀</div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center px-4 md:px-0">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 w-full">
              {/* Profile Image */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-border/20">
                  <img
                    src="/professional-developer-workspace.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* About Content */}
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <h2 className="text-5xl font-bold text-pink-500 mb-6">About Me</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I’m a backend-focused software engineer based in Dhaka, Bangladesh with 5+ years of experience building robust,
                    scalable systems. I specialize in PHP/Laravel and Node.js/NestJS, and also build modern web UIs with React.js
                    and Next.js. I have hands-on experience designing event-driven microservices, audit-ready accounting platforms,
                    and high-performance APIs, with a strong focus on clean architecture, measurable observability, and proven performance improvements.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="border border-border/30 rounded-lg p-6 bg-secondary/20 flex items-center gap-3">
                    <div className="text-2xl">👤</div>
                    <div>
                      <div className="text-3xl font-bold text-primary">5+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                  <div className="border border-border/30 rounded-lg p-6 bg-secondary/20 flex items-center gap-3">
                    <div className="text-2xl">📦</div>
                    <div>
                      <div className="text-3xl font-bold text-primary">2+</div>
                      <div className="text-sm text-muted-foreground">Companies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 md:px-0">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-pink-500 mb-4">Work Experience</h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="border border-border/30 rounded-lg p-8 bg-secondary/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-pink-500 font-semibold">{exp.company}</p>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground flex gap-3">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20 px-4 md:px-0">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-pink-500 mb-4">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="group">
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-border/20 mb-4">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-secondary/50 border border-border/30 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 md:px-0">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-pink-500 mb-4">Skills & Technologies</h2>
            </div>

            <div className="space-y-8">
              {skillGroups.map((skillGroup, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-bold text-pink-500 mb-4">{skillGroup.category}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skillGroup.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="border border-border/30 rounded-lg p-4 text-center bg-secondary/20 hover:border-pink-500/50 hover:bg-secondary/30 transition-colors flex flex-col items-center gap-3"
                      >
                        <div className="text-pink-500">{skillIconMap[skill as keyof typeof skillIconMap]}</div>
                        <p className="font-semibold text-sm">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 md:px-0">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-pink-500 mb-4">Get In Touch</h2>
              <p className="text-muted-foreground">Reach out for opportunities or just a chat</p>
            </div>

            <div className="space-y-4">
              <div className="border border-border/30 rounded-lg p-6 bg-secondary/20 text-center">
                <p className="text-muted-foreground mb-4">📞 +880 1763 383640</p>
                <p className="text-muted-foreground mb-4">📧 nasir.cse.ru@gmail.com</p>
                <p className="text-muted-foreground">📍 Dhaka, Bangladesh</p>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-secondary/20 border border-border/30 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-secondary/20 border border-border/30 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-secondary/20 border border-border/30 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500/50 transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full bg-secondary/20 border border-border/30 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500/50 transition-colors resize-none"
                ></textarea>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Coffee Button */}
        <div className="fixed bottom-8 right-8 z-40">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl">
            ☕
          </Button>
        </div>
      </main>
    </div>
  )
}
