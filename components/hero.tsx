"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Database, LineChart } from "lucide-react"

interface HeroProps {
  content: {
    badge: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    features: { label: string }[]
    image: {
      src: string
      alt: string
    }
  }
}

export function Hero({ content }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
    }[] = []

    const createParticles = () => {
      const particleCount = Math.floor(canvas.width / 20)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `rgba(62, 152, 199, ${Math.random() * 0.5 + 0.1})`,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x
          const dy = particles[j].y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(62, 152, 199, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(drawParticles)
    }

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    drawParticles()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {content.badge}
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              dangerouslySetInnerHTML={{ __html: content.title }}
            />
            <p className="text-xl text-muted-foreground max-w-lg">{content.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={() => scrollToSection("services")}>
                {content.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                {content.secondaryCta}
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{content.features[0].label}</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{content.features[1].label}</span>
              </div>
              <div className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{content.features[2].label}</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src={content.image.src || "/placeholder.svg"}
              alt={content.image.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
