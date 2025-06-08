"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { PopupModal } from "react-calendly"

interface CalendlyPopupButtonProps {
  url: string
  label: string
}

export function CalendlyPopupButton({ url, label }: CalendlyPopupButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button className="w-full" onClick={() => setIsOpen(true)}>
        {label}
      </Button>

      {isOpen && (
        <PopupModal
          open={true}
          url={url}
          rootElement={document.body}
          onModalClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
