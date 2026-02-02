"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { projects } from "@/lib/data/projects"

export default function ProjectsPage() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-5xl mx-auto px-4">
        {/* Back Button */}
        {/* <Link href="/">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link> */}

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
              <div className="relative h-150 overflow-hidden">
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
                  <Link href={`/projects/${project.slug}`}>
                    <h2 className="text-3xl font-bold text-foreground mb-3">{project.title}</h2>
                  </Link>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">{project.description}</p>
                  <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                </div>

                {/* Metrics */}
                <div className="grid md:grid-cols-3 gap-4">
                  {project?.metrics?.map((metric, i) => (
                    <div key={i} className="border border-border/30 rounded-lg p-4 text-center bg-background/30">
                      <div className="text-2xl font-bold text-pink-500 mb-1">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">{project.details?.[0]?.title}</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.details?.[0]?.items.map((item, i) => (
                      <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                        <span className="text-pink-500 mt-1">✓</span>
                        <span>{item}</span>
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
                <Button asChild>
                  <Link href={`/projects/${project.slug}`}>
                    View Details
                  </Link>
                </Button>
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
