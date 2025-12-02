import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { blogPosts } from "@/lib/data/blogs"
import { ChevronLeft, Clock, Tag } from "lucide-react"

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

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
            Blog
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Insights, patterns, and field notes</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Practicals from building backend-heavy products: reliability guardrails, performance wins, and frontend
            polish that ships faster.
          </p>
        </header>

        <Separator />

        {featured && (
          <Card className="overflow-hidden border-border/40 bg-secondary/30">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-full min-h-[240px]">
                <img
                  src={featured.image || "/placeholder.svg"}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <CardContent className="p-6 md:p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Badge variant="secondary" className="uppercase tracking-wide text-[11px]">
                    {featured.category}
                  </Badge>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featured.readTime}
                  </div>
                </div>
                <CardTitle className="text-2xl md:text-3xl">{featured.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="outline" className="flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link href={`/blog/${featured.id}`}>
                    <Button>Read article</Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        )}

        <section className="grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <Card key={post.id} className="overflow-hidden border-border/30 bg-secondary/20 flex flex-col">
              <div className="relative aspect-video">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Badge variant="secondary" className="uppercase tracking-wide text-[11px]">
                    {post.category}
                  </Badge>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3 pb-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="outline" className="flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-2">
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="ghost" className="px-0">
                      Read more →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}
