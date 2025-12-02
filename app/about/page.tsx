"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-4">About Me</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-blue-500"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Professional Background</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a backend-focused software engineer based in Dhaka, Bangladesh with 5+ years of experience building
              robust, scalable systems. I specialize in PHP/Laravel and Node.js/NestJS, with expertise in designing
              event-driven microservices, audit-ready accounting platforms, and high-performance APIs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about solving real-world challenges through clean architecture, measurable observability,
              and proven performance improvements. My work has consistently delivered measurable business value—from
              reducing operational workload by 70% to increasing platform reliability to 96%+ SLA.
            </p>
          </section>

          {/* Key Strengths */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Key Strengths</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Microservices Architecture",
                  description:
                    "Designing and implementing event-driven, scalable microservices with strong observability",
                },
                {
                  title: "Performance Optimization",
                  description: "Reducing latency, improving throughput, and optimizing resource utilization at scale",
                },
                {
                  title: "Data Consistency",
                  description: "Building audit-ready systems with DLQs, idempotent consumers, and replay pipelines",
                },
                {
                  title: "API Design",
                  description: "Creating secure, well-documented REST APIs with OpenAPI/Swagger and rate limiting",
                },
                {
                  title: "Full-Stack Capability",
                  description: "Combining backend expertise with modern frontend frameworks for end-to-end solutions",
                },
                {
                  title: "DevOps & Reliability",
                  description: "Implementing CI/CD pipelines, Docker containerization, and SLI/SLO/SLA monitoring",
                },
              ].map((strength, idx) => (
                <div key={idx} className="border border-border/30 rounded-lg p-6 bg-secondary/20">
                  <h3 className="font-bold text-foreground mb-2">{strength.title}</h3>
                  <p className="text-muted-foreground text-sm">{strength.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Statistics */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">By the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { metric: "5+", label: "Years Experience" },
                { metric: "2+", label: "Companies" },
                { metric: "3+", label: "Major Platforms" },
                { metric: "70%", label: "Avg. Workload Reduction" },
              ].map((stat, idx) => (
                <div key={idx} className="border border-border/30 rounded-lg p-6 bg-secondary/20 text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">{stat.metric}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Philosophy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">My Philosophy</h2>
            <div className="border border-border/30 rounded-lg p-8 bg-secondary/20 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code that solves real problems. Every system should be
                observable, scalable, and aligned with business metrics. Performance isn't optional—it's a feature.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm not just a developer; I'm a problem solver who partners with teams to understand business challenges
                and architect solutions that scale. Whether it's reducing database load by 40%, increasing revenue by
                9%, or building audit-ready accounting systems, I focus on delivering measurable impact.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-6">Interested in working together?</p>
            <Link href="/#contact">
              <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-full px-8">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
