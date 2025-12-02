import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function EcommerceShowcase() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>
        </div>
      </header>

      <main className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tighter mb-2">E-commerce Platform</h1>
            <p className="text-lg text-muted-foreground mb-6">
              A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration for seamless online
              shopping experiences.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Next.js", "Prisma", "Stripe", "TailwindCSS", "TypeScript"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium ring-1 ring-inset ring-gray-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border overflow-hidden bg-muted/50 mb-8">
            <iframe
              src="https://www.sadiaenterprise.com"
              title="Sadia Enterprise E-commerce Platform"
              className="w-full h-[600px] md:h-[800px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Product catalog with advanced filtering and search</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Secure payment processing with Stripe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>User authentication and order management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Real-time inventory tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Responsive design for all devices</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Technical Highlights</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Server-side rendering with Next.js for optimal performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Database management with Prisma ORM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>API routes for backend functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Stripe webhook integration for payment events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>TypeScript for type-safe development</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <Button asChild>
              <Link href="https://www.sadiaenterprise.com" target="_blank">
                Visit Live Site
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Back to Portfolio</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
