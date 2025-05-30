"use client"

import React from "react"

import { useState } from "react"
import { BarChart2, Database, PieChart, Layers, Cpu, TrendingUp, Search, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ServicesProps {
  content: {
    title: string
    subtitle: string
    list: {
      id: string
      title: string
      description: string
      features: string[]
    }[]
    benefits: {
      title: string
      description: string
    }[]
    cta: string
  }
}

export function Services({ content }: ServicesProps) {
  const [activeTab, setActiveTab] = useState(content.list[0].id)

  const iconMap: Record<string, any> = {
    "data-engineering": Database,
    "data-analytics": BarChart2,
    "data-visualization": PieChart,
    "machine-learning": Cpu,
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const activeService = content.list.find((service) => service.id === activeTab)

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          <div className="flex flex-col gap-2">
            {content.list.map((service) => {
              const Icon = iconMap[service.id] || Database
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={cn(
                    "flex items-center gap-3 p-4 text-left rounded-lg transition-all",
                    activeTab === service.id ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{service.title}</span>
                </button>
              )
            })}
          </div>

          {activeService && (
            <div className="bg-muted/30 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  {iconMap[activeService.id] &&
                    React.createElement(iconMap[activeService.id], { className: "h-6 w-6 text-primary" })}
                </div>
                <h3 className="text-2xl font-bold">{activeService.title}</h3>
              </div>

              <p className="text-muted-foreground mb-6">{activeService.description}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {activeService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button onClick={() => scrollToSection("contact")}>{content.cta}</Button>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">{content.benefits[0].title}</h3>
            <p className="text-muted-foreground">{content.benefits[0].description}</p>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-sm">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">{content.benefits[1].title}</h3>
            <p className="text-muted-foreground">{content.benefits[1].description}</p>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-sm">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">{content.benefits[2].title}</h3>
            <p className="text-muted-foreground">{content.benefits[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
