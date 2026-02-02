import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/layout/site-header"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MD NASIR WAHID - Full Stack Developer",
  description: "Full stack developer portfolio showcasing projects and skills",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SiteHeader />
          <div className="pt-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
