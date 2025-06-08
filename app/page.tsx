"use client"

import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { ThemeProvider } from "@/components/theme-provider"
import { siteContent } from "@/data/content"
import { useEffect, useState } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  // Petite fonction de throttle (alternative à lodash)
  function throttle(fn: (...args: any[]) => void, limit: number) {
    let inThrottle = false
    return function (this: any, ...args: any[]) {
      if (!inThrottle) {
        fn.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }

  useEffect(() => {
    const sections = ["hero", "about", "services", "projects", "contact"]

    const handleScroll = throttle(() => {
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)

        // Ne pas mettre à jour le hash si c'est déjà le bon
        if (window.location.hash !== `#${currentSection}`) {
          history.replaceState(null, "", `#${currentSection}`)
        }
      }
    }, 200) // throttle à 200ms

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

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
