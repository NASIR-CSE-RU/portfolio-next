import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SiteHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 border-b border-border/20 flex items-center justify-between px-6 md:px-12 bg-background/50 backdrop-blur z-50">
      <Link href="/" className="font-bold text-xl text-primary">
        NW
      </Link>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 text-sm">
          <Link href="/about" className="hover:text-primary transition-colors text-muted-foreground">
            About
          </Link>
          <Link href="/experience" className="hover:text-primary transition-colors text-muted-foreground">
            Experience
          </Link>
          <Link href="/projects" className="hover:text-primary transition-colors text-muted-foreground">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors text-muted-foreground">
            Blog
          </Link>
          <Link href="/skills" className="hover:text-primary transition-colors text-muted-foreground">
            Skills
          </Link>
          <Link href="/#contact" className="hover:text-primary transition-colors text-muted-foreground">
            Contact
          </Link>
        </div>

        <Button
          size="sm"
          className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-full"
        >
          Hire Me
        </Button>
      </div>
    </nav>
  )
}
