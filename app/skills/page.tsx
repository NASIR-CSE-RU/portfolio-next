import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ChevronLeft, Code2, Database, Network, Server, ShieldCheck, Sparkles } from "lucide-react"

const skillAreas = [
  {
    title: "Backend & Architecture",
    icon: Server,
    summary:
      "Designing resilient services with clean boundaries, observability, and predictable failure modes so releases stay boring.",
    highlights: [
      "Event-driven microservices with idempotent consumers, DLQs, and replay pipelines",
      "AuthZ/AuthN with JWT/OAuth2, multi-tenant RBAC, and audit logging",
      "REST APIs with OpenAPI/Swagger, pagination/versioning strategies, and circuit breakers",
    ],
    stack: ["Node.js", "NestJS", "PHP", "Laravel", "Yii2", "Redis", "RabbitMQ"],
  },
  {
    title: "Data & Messaging",
    icon: Database,
    summary:
      "Keeping reads fast and writes safe with sane indexing, caching layers, and careful migrations that never wake up on-call.",
    highlights: [
      "MySQL/PostgreSQL schema design, indexing, partitioning, and query tuning",
      "Caching tiers with Redis (TTL, locks, bloom filters) and cache-invalidation playbooks",
      "Async work queues with retries, exponential backoff, and dead-letter routing",
    ],
    stack: ["MySQL", "PostgreSQL", "Redis", "RabbitMQ", "ClickHouse (learning)"],
  },
  {
    title: "Frontend & UX",
    icon: Code2,
    summary:
      "Shipping focused UIs that stay performant, accessible, and measurable so experiments run cleanly and quickly.",
    highlights: [
      "App Router with server components, mutations via server actions, and streaming",
      "Core Web Vitals, bundle budgets, and image optimization strategies",
      "A/B testing hooks, feature flags, and analytics instrumentation",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Radix UI", "shadcn/ui"],
  },
  {
    title: "Reliability & DevOps",
    icon: ShieldCheck,
    summary:
      "Building guardrails so teams can ship faster: instrumentation, SLOs, and repeatable delivery pipelines.",
    highlights: [
      "SLI/SLO dashboards, alert policies, and playbooks for common failure modes",
      "Dockerized services with multi-stage builds and minimal base images",
      "CI/CD pipelines with lint/test gates, preview deployments, and migration checks",
    ],
    stack: ["Docker", "GitHub Actions", "Vercel", "AWS (EC2/S3/RDS)", "DigitalOcean"],
  },
  {
    title: "Collaboration & Process", 
    icon: Network,
    summary:
      "Keeping teams aligned through specs, API contracts, and review discipline so delivery stays predictable.",
    highlights: [
      "Technical design docs with trade-off analysis and rollout plans",
      "API schemas first (OpenAPI), contract tests, and backward-compatible rollouts",
      "Code review patterns that balance safety with velocity",
    ],
    stack: ["ADR docs", "OpenAPI", "Postman/Insomnia", "Jira/Linear", "Figma for handoff"],
  },
  {
    title: "Performance Wins",
    icon: Sparkles,
    summary:
      "Concrete improvements delivered in production systems across latency, throughput, and conversion metrics.",
    highlights: [
      "Cut P95 latency ~30% via MySQL indexing, connection pooling, and Redis caching",
      "Improved SLA from 84% to 96% by hardening state machines and retries",
      "Raised conversion +9% and reduced drop-offs −22% with Next.js flow optimizations",
    ],
    stack: ["Profilers", "APM traces", "Synthetic checks", "Real-user metrics"],
  },
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-6xl mx-auto px-4 md:px-0 py-16 space-y-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <header className="space-y-4 text-center">
          <Badge variant="outline" className="text-pink-500 border-pink-500/40 text-base font-semibold px-4 py-2">
            Skills & Capabilities
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">How I build reliable, measurable products</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A deeper look at the stacks, practices, and outcomes I focus on when delivering backend-heavy products with
            measurable reliability and performance.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="/#projects"
              className="text-sm text-primary font-semibold hover:underline underline-offset-4"
            >
              View featured projects
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#contact" className="text-sm text-primary font-semibold hover:underline underline-offset-4">
              Get in touch
            </Link>
          </div>
        </header>

        <Separator />

        <section className="grid gap-8 md:grid-cols-2">
          {skillAreas.map(({ title, icon: Icon, summary, highlights, stack }) => (
            <Card key={title} className="h-full bg-secondary/30 border-border/40">
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{summary}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">What I focus on</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-pink-500">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tool) => (
                    <Badge key={tool} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}
