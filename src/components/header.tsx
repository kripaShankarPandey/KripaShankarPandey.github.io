"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Tools", href: "/tools" },
  { name: "Contacts", href: "/contacts" },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-background/80 shadow-lg" : "bg-background/60"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-all duration-300 hover:scale-105 hover:text-primary"
        >
          <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
           {`<Kripa/>`}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive && (
                  <span className="absolute inset-0 rounded-md bg-primary/10 animate-in fade-in zoom-in-95 duration-300" />
                )}
                <span className="absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 transition-transform hover:scale-110"
            aria-label="Menu"
          >
            <span className="h-0.5 w-5 bg-foreground transition-all duration-300" />
            <span className="h-0.5 w-5 bg-foreground transition-all duration-300" />
            <span className="h-0.5 w-5 bg-foreground transition-all duration-300" />
          </button>
        </div>
      </div>

      <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
        <nav className="container mx-auto flex flex-col px-4 py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                  isActive ? "text-primary bg-primary/5" : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
