"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { siteContent } from "@/data/content"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "projects", "contact"]

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
        // Update URL hash without scrolling
        history.replaceState(null, "", `#${currentSection}`)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-background">
        <Header activeSection={activeSection} content={siteContent.navigation} />
        <main>
          <Hero content={siteContent.hero} />
          <About content={siteContent.about} />
          <Services content={siteContent.services} />
          <Projects content={siteContent.projects} />
          <Contact content={siteContent.contact} />
        </main>
        <Footer content={siteContent.footer} />
      </div>
    </ThemeProvider>
  )
}
