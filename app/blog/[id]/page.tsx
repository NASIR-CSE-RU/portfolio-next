import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { BlogPost } from "@/lib/data/blogs"
import { getBlogById } from "@/lib/data/blogs"
import { ChevronLeft, Clock, Tag } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

type BlogDetailProps = {
  params: {
    id: string
  }
}

export default function BlogDetailPage({ params }: BlogDetailProps) {
  const id = Number(params.id)
  const post = getBlogById(id)

  if (!post) {
    notFound()
  }

  return <Article post={post} />
}

function Article({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-16 space-y-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-4 text-muted-foreground hover:text-foreground">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <header className="space-y-4">
          <Badge variant="secondary" className="text-xs uppercase tracking-wide">
            {post.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <span>•</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </header>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/20">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {tag}
            </Badge>
          ))}
        </div>

        <Separator />

        <article className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </article>
      </main>
    </div>
  )
}
