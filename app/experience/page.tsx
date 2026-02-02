"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function ExperiencePage() {
  const experiences = [
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
      tech: ["PHP", "Yii2", "MySQL", "Redis", "RabbitMQ", "Next.js"],
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
      tech: ["Laravel", "Node.js", "PostgreSQL", "Redis", "WebSocket", "Firebase"],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        {/* <Link href="/">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link> */}

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-4">Work Experience</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-blue-500"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border border-border/30 rounded-lg p-8 bg-secondary/20">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-foreground mb-2">{exp.role}</h2>
                <p className="text-pink-500 font-semibold text-lg mb-2">{exp.company}</p>
                <p className="text-muted-foreground text-sm">{exp.period}</p>
              </div>

              {/* Highlights */}
              <div className="mb-6 space-y-3">
                <h3 className="font-semibold text-foreground">Key Achievements</h3>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-pink-500 font-bold">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="pt-6 border-t border-border/20">
                <h3 className="font-semibold text-foreground mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-pink-500/20 border border-pink-500/30 text-pink-200 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 border border-border/30 rounded-lg p-8 bg-secondary/20">
          <h2 className="text-2xl font-bold text-foreground mb-4">Impact Summary</h2>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Performance Improvements</h3>
              <ul className="space-y-1 text-sm">
                <li>• 40% reporting load reduction</li>
                <li>• 85% sync lag reduction</li>
                <li>• 30% P95 latency improvement</li>
                <li>• 90% exam processing TAT reduction</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Business Metrics</h3>
              <ul className="space-y-1 text-sm">
                <li>• 70% finance workload reduction</li>
                <li>• 9% conversion rate increase</li>
                <li>• 25% engagement improvement</li>
                <li>• 12% ARPPU increase</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-12">
          <p className="text-muted-foreground mb-6">Ready to collaborate?</p>
          <Link href="/#contact">
            <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-full px-8">
              Get In Touch
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
