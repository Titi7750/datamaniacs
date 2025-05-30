import { BarChart2, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

interface FooterProps {
  content: {
    description: string
    sections: {
      services: {
        title: string
        links: {
          label: string
          href: string
        }[]
      }
      company: {
        title: string
        links: {
          label: string
          href: string
        }[]
      }
      legal: {
        title: string
        links: {
          label: string
          href: string
        }[]
      }
    }
    copyright: string
    tagline: string
  }
}

export function Footer({ content }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="#hero" className="flex items-center space-x-2 text-xl font-bold">
              <BarChart2 className="h-6 w-6 text-primary" />
              <span>Data'Maniacs</span>
            </Link>
            <p className="text-sm text-muted-foreground">{content.description}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">{content.sections.services.title}</h3>
            <ul className="space-y-2">
              {content.sections.services.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{content.sections.company.title}</h3>
            <ul className="space-y-2">
              {content.sections.company.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{content.sections.legal.title}</h3>
            <ul className="space-y-2">
              {content.sections.legal.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Data'Maniacs. {content.copyright}
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">{content.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
