"use client"

import { Button } from "@/components/ui/button"

interface CalendlyPopupButtonProps {
  url: string
  label: string
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export function CalendlyPopupButton({ url, label }: CalendlyPopupButtonProps) {
  const openCalendly = () => {
    if (typeof window !== "undefined") {
      if (window.Calendly?.initPopupWidget) {
        window.Calendly.initPopupWidget({ url })
      } else {
        setTimeout(() => {
          if (window.Calendly?.initPopupWidget) {
            window.Calendly.initPopupWidget({ url })
          } else {
            alert("Calendly n'a pas pu être chargé.")
          }
        }, 500)
      }
    }
  }

  return (
    <Button className="w-full" onClick={openCalendly}>
      {label}
    </Button>
  )
}
