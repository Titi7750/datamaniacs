"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeaderProps {
  activeSection: string
  content: {
    logo: string
    items: { id: string; label: string }[]
    cta: string
  }
}

export function Header({ activeSection, content }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="#hero"
            className="flex items-center space-x-2 text-xl font-bold"
            onClick={() => scrollToSection("hero")}
          >
            <BarChart2 className="h-6 w-6 text-primary" />
            <span>{content.logo}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {content.items.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.id ? "text-primary" : "text-muted-foreground",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button className="hidden md:inline-flex" onClick={() => scrollToSection("contact")}>
            {content.cta}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {content.items.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "text-sm font-medium py-2 transition-colors hover:text-primary",
                    activeSection === item.id ? "text-primary" : "text-muted-foreground",
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full" onClick={() => scrollToSection("contact")}>
                {content.cta}
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
