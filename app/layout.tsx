import "@/app/globals.css"
import { siteContent } from "@/data/content"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

// Extraction des métadonnées du fichier de contenu
const { meta } = siteContent

// Création des métadonnées pour Next.js
export const metadata: Metadata = {
  // Métadonnées de base
  title: meta.title,
  description: meta.description,
  keywords: meta.seo.keywords,
  authors: [{ name: meta.seo.author }],

  // Métadonnées Open Graph
  openGraph: {
    type: meta.seo.type as "website",
    locale: meta.seo.locale,
    url: meta.seo.canonical,
    title: meta.seo.openGraph.title,
    description: meta.seo.openGraph.description,
    siteName: meta.seo.openGraph.siteName,
    images: meta.seo.openGraph.images,
  },

  // Métadonnées Twitter
  twitter: {
    card: meta.seo.twitter.card as "summary" | "summary_large_image" | "app" | "player",
    title: meta.seo.twitter.title,
    description: meta.seo.twitter.description,
    creator: meta.seo.twitter.creator,
    images: meta.seo.twitter.images,
  },

  // Autres métadonnées
  alternates: {
    canonical: meta.seo.canonical,
  },

  // Métadonnées pour les robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Métadonnées pour les applications mobiles
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  // Métadonnées pour les thèmes
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Balises meta supplémentaires */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        {/* Schema.org JSON-LD pour le SEO */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(meta.seo.structuredData.organization),
          }}
        />

        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(meta.seo.structuredData.localBusiness),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
