"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, ExternalLink, Building, ShoppingCart, Briefcase, Activity } from "lucide-react"

interface ProjectsProps {
  content: {
    title: string
    subtitle: string
    categories: {
      id: string
      label: string
    }[]
    list: {
      id: number
      title: string
      category: string
      description: string
      image: string
      alt: string
      client: string
    }[]
    cta: string
    caseCta: string
  }
}

export function Projects({ content }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const iconMap: Record<string, any> = {
    ShoppingCart: ShoppingCart,
    Activity: Activity,
    Building: Building,
    Briefcase: Briefcase,
  }

  // Map projects to icons based on index
  const projectIcons = [ShoppingCart, Activity, Building, Briefcase]

  const filteredProjects =
    activeCategory === "all" ? content.list : content.list.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {content.categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="mb-2"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const ProjectIcon = projectIcons[index % projectIcons.length]
            return (
              <div
                key={project.id}
                className="bg-background rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.alt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <ProjectIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{project.client}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="outline" size="sm" className="group">
                    {content.caseCta}
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="group">
            {content.cta}
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
