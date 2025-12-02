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
            <h1 className="text-6xl md:text-8xl font-bold text-primary">MD Nasir Wahid</h1>
            <p className="text-2xl md:text-3xl text-foreground font-semibold">Backend Software Engineer</p>
            <div className="flex items-center justify-center gap-2">
              <div className="h-0.5 w-16 bg-pink-500"></div>
              <div className="h-0.5 w-1 bg-pink-500"></div>
              <div className="h-0.5 w-16 bg-pink-500"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Backend-leaning Software Engineer with 5+ years of expertise in PHP/Laravel, Node.js/NestJS, and building
              scalable microservices. Specialized in audit-ready accounting platforms and event-driven architectures.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-pink-500 hover:bg-pink-500/10">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
        <section id="about" className="min-h-screen flex items-center py-20 px-4 md:px-0">
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
                    I'm a backend-focused software engineer based in Dhaka, Bangladesh with 5+ years of experience
                    building robust, scalable systems. I specialize in PHP/Laravel and Node.js/NestJS, with expertise in
                    designing event-driven microservices, audit-ready accounting platforms, and high-performance APIs.
                    I'm passionate about solving real-world challenges through clean architecture, measurable
                    observability, and proven performance improvements.
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
              {[
                {
                  company: "ShareTrip Ltd.",
                  role: "Software Engineer",
                  period: "Aug 2022 – Present",
                  highlights: [
                    "Delivered double-entry accounting platform (PHP, Yii2, MySQL, Redis, RabbitMQ) reducing finance workload ~70%",
                    "Achieved 95% to 100% ledger success with DLQs, idempotent consumers, and audit/replay pipelines",
                    "Migrated reporting to async Redis queues, cutting load ~40% and adding SLI dashboards",
                    "Raised airline ticketing SLA 84% to 96% by enforcing TOTP 2FA and audited state machines",
                    "Improved conversion +9% and reduced drop-offs −22% in Next.js ancillary flows",
                  ],
                },
                {
                  company: "Desktop IT",
                  role: "Software Engineer",
                  period: "Aug 2020 – Jul 2022",
                  highlights: [
                    "Cut POS-storefront sync lag ~85% and raised on-hand accuracy 92% to 98%",
                    "Reduced P95 latency ~30% at peak via MySQL indexing, pooling, and Redis caching",
                    "Reduced exam-result TAT ~90% and manual grading effort ~95% (theExamly platform)",
                    "Increased live-session engagement ~25% and ARPPU ~18% for HuhuLive streaming backend",
                    "Implemented Google Play Billing with webhook verification and idempotent retries",
                  ],
                },
              ].map((exp, idx) => (
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
              {[
                {
                  title: "ShareTrip - Accounting Platform",
                  description:
                    "Double-entry accounting system with real-time consolidation, achieving 95-100% ledger success and 40% reporting performance improvement.",
                  image: "/ecommerce-platform-concept.png",
                  tags: ["PHP", "Yii2", "MySQL", "RabbitMQ"],
                },
                {
                  title: "E-Commerce Platform",
                  description:
                    "Multi-vendor e-commerce platform with JWT-secured APIs, OpenAPI documentation, and inventory sync automation.",
                  image: "/task-management-app.png",
                  tags: ["Laravel", "Next.js", "PostgreSQL"],
                },
                {
                  title: "HuhuLive - Streaming Backend",
                  description:
                    "Low-latency streaming and chat backend with real-time notifications, Google Play Billing integration, and engagement dashboards.",
                  image: "/ai-chat-interface.png",
                  tags: ["Express.js", "WebSocket", "Firebase"],
                },
              ].map((project, idx) => (
                <div key={idx} className="group">
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-border/20 mb-4">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
              {[
                {
                  category: "Backend",
                  skills: ["PHP", "Laravel", "Yii2", "Node.js", "NestJS", "TypeScript"],
                },
                {
                  category: "APIs & Architecture",
                  skills: ["REST", "OpenAPI/Swagger", "JWT/OAuth2", "Microservices", "Event-driven", "Rate limiting"],
                },
                {
                  category: "Data & Messaging",
                  skills: ["MySQL", "PostgreSQL", "Redis", "RabbitMQ", "DLQ", "Idempotency"],
                },
                {
                  category: "DevOps & Tools",
                  skills: ["Docker", "Git", "AWS", "DigitalOcean", "CI/CD", "SLI/SLO/SLA"],
                },
                {
                  category: "Frontend",
                  skills: ["React", "Next.js", "TypeScript", "Core Web Vitals", "A/B Testing"],
                },
              ].map((skillGroup, idx) => (
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
