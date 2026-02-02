"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const pathname = usePathname()

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/#contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/#contact") {
      return pathname === "/"
    }

    if (href === "/") {
      return pathname === "/"
    }

    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 border-b border-border/20 flex items-center justify-between px-6 md:px-12 bg-background/50 backdrop-blur z-50">
      <Link href="/" className="font-bold text-xl text-primary">
        Home
      </Link>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-primary transition-colors ${
                isActive(item.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
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
