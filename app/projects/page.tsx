"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "ShareTrip - Accounting Platform",
      description:
        "A comprehensive double-entry accounting system built for a major travel booking platform. This platform handles all financial transactions, ledger reconciliation, and reporting with 100% accuracy.",
      fullDescription:
        "The accounting platform was designed to automate and simplify complex financial operations. It processes thousands of daily transactions with real-time consolidation, ensuring perfect ledger accuracy through DLQs, idempotent consumers, and comprehensive audit trails. The system also manages rate limiting, retry logic, and state reconciliation.",
      image: "/ecommerce-platform-concept.png",
      tags: ["PHP", "Yii2", "MySQL", "Redis", "RabbitMQ", "Message Queue"],
      metrics: [
        { label: "Ledger Accuracy", value: "100%" },
        { label: "Workload Reduction", value: "70%" },
        { label: "Processing Load Cut", value: "40%" },
      ],
      features: [
        "Double-entry bookkeeping with full audit trail",
        "Real-time ledger consolidation",
        "DLQ and idempotent consumer architecture",
        "Advanced reporting with Redis async queues",
        "SLI/SLO monitoring dashboards",
        "Webhook verification and retry mechanisms",
      ],
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution handling product management, inventory synchronization, and multi-vendor operations with secured REST APIs.",
      fullDescription:
        "Built a scalable e-commerce backend with Laravel, supporting POS integration with real-time inventory sync. The platform maintains 98% on-hand accuracy through optimized database queries and Redis caching. Implemented JWT-based authentication, OpenAPI documentation, and rate limiting for secure API endpoints.",
      image: "/task-management-app.png",
      tags: ["Laravel", "PostgreSQL", "Redis", "JWT", "OpenAPI"],
      metrics: [
        { label: "Sync Lag Reduced", value: "85%" },
        { label: "Accuracy", value: "98%" },
        { label: "P95 Latency Cut", value: "30%" },
      ],
      features: [
        "Real-time inventory synchronization",
        "Multi-vendor storefront management",
        "JWT-secured REST APIs with OpenAPI specs",
        "MySQL indexing and connection pooling optimization",
        "Redis caching for high-traffic endpoints",
        "Transaction logging and audit trails",
      ],
    },
    {
      title: "HuhuLive - Streaming Backend",
      description:
        "A low-latency streaming platform backend with real-time chat, notifications, and monetization features supporting thousands of concurrent users.",
      fullDescription:
        "Engineered the backend for a live streaming platform supporting real-time video delivery, interactive chat, and in-app purchases. Implemented WebSocket communication for low-latency interactions, Google Play Billing integration with webhook verification, and comprehensive analytics. The platform handles millions of real-time events with measurable improvements in user engagement and revenue.",
      image: "/ai-chat-interface.png",
      tags: ["Node.js", "Express.js", "WebSocket", "Firebase", "Google Play Billing"],
      metrics: [
        { label: "Engagement Increase", value: "25%" },
        { label: "ARPPU Growth", value: "18%" },
        { label: "Result TAT Reduction", value: "90%" },
      ],
      features: [
        "Low-latency WebSocket streaming",
        "Real-time chat and notifications",
        "Google Play Billing integration",
        "Webhook verification and idempotent retries",
        "User analytics and engagement tracking",
        "Scalable event-driven architecture",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-4">Featured Projects</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-blue-500"></div>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="border border-border/30 rounded-lg overflow-hidden bg-secondary/20">
              {/* Project Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-8 space-y-6">
                {/* Title and Description */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-3">{project.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">{project.description}</p>
                  <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                </div>

                {/* Metrics */}
                <div className="grid md:grid-cols-3 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="border border-border/30 rounded-lg p-4 text-center bg-background/30">
                      <div className="text-2xl font-bold text-pink-500 mb-1">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                        <span className="text-pink-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-pink-500/20 border border-pink-500/30 text-pink-200 px-3 py-1.5 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">Want to discuss a project?</p>
          <Link href="/#contact">
            <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-full px-8">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
