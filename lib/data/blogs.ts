export type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  content: string[]
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    excerpt: "Learn the fundamentals of Next.js 15 and how to build modern web applications with the latest features.",
    date: "2024-10-15",
    readTime: "5 min read",
    category: "Next.js",
    image: "/next-js-development.jpg",
    tags: ["Next.js", "React", "App Router", "TypeScript"],
    content: [
      "Next.js 15 refines the App Router experience with better data fetching ergonomics and improved caching defaults. Start by scaffolding a project with create-next-app and opting into the App Router directory structure.",
      "Co-locate server actions and route handlers to keep API code close to UI. Use the new fetch cache options (`force-cache`, `no-store`, or `revalidate`) to balance freshness and performance.",
      "For styling, Tailwind remains a fast path to consistent UI. Combine it with Radix primitives and shadcn/ui to keep accessibility concerns handled from day one.",
    ],
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js",
    excerpt: "Explore best practices for designing and implementing scalable REST APIs using Node.js and Express.",
    date: "2024-10-10",
    readTime: "8 min read",
    category: "Backend",
    image: "/node-js-api-development.jpg",
    tags: ["Node.js", "REST", "OpenAPI", "Performance"],
    content: [
      "Great APIs start with contracts. Define your OpenAPI spec first, then scaffold handlers and validation from the schema to keep clients and servers in sync.",
      "Defend your service with rate limiting, request timeouts, and input validation at the edge. Use a shared error format so consumers can react predictably.",
      "Scale horizontally by keeping handlers stateless and pushing coordination to queues (e.g., RabbitMQ) and caches (e.g., Redis). Instrument every endpoint with latency, error rate, and saturation metrics.",
    ],
  },
  {
    id: 3,
    title: "React Performance Optimization Tips",
    excerpt: "Discover practical techniques to optimize your React applications and improve user experience.",
    date: "2024-10-05",
    readTime: "6 min read",
    category: "React",
    image: "/react-performance-optimization.png",
    tags: ["React", "Performance", "Caching", "UX"],
    content: [
      "Profile before optimizing—React DevTools, Lighthouse, and your APM should guide the work. Focus on reducing render frequency and payload size.",
      "Memoize expensive subtrees with React.memo and stabilize dependencies passed to hooks. Avoid anonymous inline functions in hot paths when they cause unnecessary renders.",
      "Ship fewer bytes: code split with dynamic imports, lazy load non-critical components, and compress images. Measure Core Web Vitals to confirm improvements.",
    ],
  },
  {
    id: 4,
    title: "Mastering TypeScript Generics",
    excerpt: "Deep dive into TypeScript generics and learn how to write more flexible and reusable code.",
    date: "2024-09-28",
    readTime: "7 min read",
    category: "TypeScript",
    image: "/typescript-generics.png",
    tags: ["TypeScript", "Generics", "Typing", "DX"],
    content: [
      "Generics let you express intent without sacrificing type safety. Start with simple identity functions and widen to constraints (`<T extends object>`) to shape acceptable inputs.",
      "Use utility types (`Partial`, `Pick`, `Omit`) alongside generics to build flexible APIs. Prefer inference over explicit annotations so consumers write less boilerplate.",
      "Validate your designs with real-world usage: if generics feel unwieldy, consider narrowing the API or offering overloads to guide callers.",
    ],
  },
]

export function getBlogById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}
