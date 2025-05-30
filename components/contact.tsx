import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

interface ContactProps {
  content: {
    title: string
    subtitle: string
    info: {
      title: string
      email: { label: string; value: string }
      phone: { label: string; value: string }
      office: { label: string; value: string }
    }
    callout: {
      title: string
      description: string
      cta: string
    }
    form: {
      fullName: string
      email: string
      company: string
      message: string
      placeholder: {
        name: string
        email: string
        company: string
        message: string
      }
      submit: string
      sending: string
      success: {
        title: string
        description: string
        cta: string
      }
    }
  }
}

export function Contact({ content }: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormState({ name: "", email: "", company: "", message: "" })
      } else {
        const err = await response.json()
        alert(err.message || "Erreur lors de l'envoi du message.")
      }
    } catch (error) {
      alert("Une erreur s'est produite. Merci de réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            {/* Coordonnées */}
            <h3 className="text-2xl font-bold mb-6">{content.info.title}</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{content.info.email.label}</h4>
                  <p className="text-muted-foreground">{content.info.email.value}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{content.info.phone.label}</h4>
                  <p className="text-muted-foreground">{content.info.phone.value}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{content.info.office.label}</h4>
                  <p className="text-muted-foreground">{content.info.office.value}</p>
                </div>
              </div>
            </div>

            {/* Callout */}
            <div className="bg-muted/30 p-6 rounded-lg">
              <h4 className="font-bold mb-2">{content.callout.title}</h4>
              <p className="text-muted-foreground mb-4">{content.callout.description}</p>
              <Button className="w-full">{content.callout.cta}</Button>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-background p-8 rounded-lg shadow-sm">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{content.form.success.title}</h3>
                <p className="text-muted-foreground mb-6">{content.form.success.description}</p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  {content.form.success.cta}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {content.form.fullName}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder={content.form.placeholder.name}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {content.form.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder={content.form.placeholder.email}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    {content.form.company}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder={content.form.placeholder.company}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {content.form.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={content.form.placeholder.message}
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? content.form.sending : content.form.submit}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
