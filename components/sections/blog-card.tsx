import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { BlogPost } from "@/lib/data/blogs"

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{post.category}</span>
            <span className="text-xs text-gray-500">{post.readTime}</span>
          </div>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-gray-500">
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
