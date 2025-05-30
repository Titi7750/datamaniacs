import { CheckCircle2, Mail, MessageSquare } from "lucide-react"
import Image from "next/image"

interface AboutProps {
  content: {
    title: string
    subtitle: string
    mission: {
      title: string
      description: string[]
    }
    values: {
      title: string
      description: string
    }[]
    team: {
      title: string
      members: {
        name: string
        role?: string
        citation: string
        contact_mail?: string
        contact_teams?: string
        image: string
        alt: string
      }[]
    }
    teamImage: {
      src: string
      alt: string
    }
  }
}

export function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4">{content.mission.title}</h3>
            {content.mission.description.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground mb-6">
                {paragraph}
              </p>
            ))}
            <div className="space-y-3">
              {content.values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src={content.teamImage.src || "/placeholder.svg"}
              alt={content.teamImage.alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">{content.team.title}</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {content.team.members.map((member, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <Image src={member.image || "/placeholder.svg"} alt={member.alt} fill className="object-cover" />
              </div>
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-muted-foreground">{member.role}</p>
              <p className="mt-4 text-sm text-muted-foreground">{member.citation}</p>
              {member.contact_mail && (
                <p className="mt-2 text-sm">
                  <a
                    href={`mailto:${member.contact_mail}`}
                    className="flex items-center text-primary hover:underline"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    <span>{member.contact_mail}</span>
                  </a>
                </p>
              )}

              {member.contact_teams && (
                <p className="mt-2 text-sm">
                  <a
                    href={`https://teams.microsoft.com/l/chat/0/0?users=${member.contact_teams}`}
                    className="flex items-center text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    <span>Contactez-nous via Teams</span>
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
