// Données textuelles du site en français
export const siteContent = {
  // Méta-données
  meta: {
    title: "Data'Maniacs - Transformez vos données en insights",
    description:
      "Nous aidons les entreprises à exploiter leurs données pour stimuler la croissance, optimiser les opérations et prendre des décisions basées sur les données en toute confiance.",
    // SEO et partage social
    seo: {
      // Métadonnées de base
      keywords:
        "analyse de données, data science, big data, visualisation de données, intelligence artificielle, machine learning, conseil en données",
      author: "Data'Maniacs",
      canonical: "https://datamaniacs.fr/",
      locale: "fr_FR",
      type: "website",

      // Open Graph (Facebook, LinkedIn)
      openGraph: {
        title: "Data'Maniacs | Experts en analyse et visualisation de données",
        description:
          "Transformez vos données en insights actionnables. Expertise en data engineering, analytics, visualisation et machine learning.",
        siteName: "Data'Maniacs",
        images: [
          {
            url: "/og-image.png",
            width: 1200,
            height: 630,
            alt: "Data'Maniacs - Experts en données",
          },
        ],
      },

      // Twitter Card
      twitter: {
        card: "summary_large_image",
        title: "Data'Maniacs | Experts en analyse de données",
        description:
          "Transformez vos données brutes en insights stratégiques avec nos experts en data science et visualisation.",
        creator: "@datamaniacs",
        images: ["/twitter-image.png"],
      },

      // Structured Data (Schema.org)
      structuredData: {
        organization: {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Data'Maniacs",
          url: "https://datamaniacs.fr",
          logo: "https://datamaniacs.fr/logo.png",
          sameAs: [
            "https://twitter.com/datamaniacs",
            "https://www.linkedin.com/company/datamaniacs",
            "https://github.com/datamaniacs",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+33-6-48-49-53-19",
            contactType: "customer service",
            email: "contact@datamaniacs.fr",
            availableLanguage: ["French", "English"],
          },
        },
        localBusiness: {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Data'Maniacs",
          image: "https://datamaniacs.fr/og-image.png",
          "@id": "https://datamaniacs.fr",
          url: "https://datamaniacs.fr",
          telephone: "+33-6-48-49-53-19",
          address: {
            "@type": "PostalAddress",
            streetAddress: "40 Rue du chemin vert",
            addressLocality: "Paris",
            postalCode: "75011",
            addressCountry: "FR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 48.8566,
            longitude: 2.3522,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "19:00",
          },
          priceRange: "€€€",
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 48.8566,
              longitude: 2.3522,
            },
            geoRadius: "50000",
          },
        },
      },
    },
  },

  // Navigation
  navigation: {
    logo: "/logo.png",
    logoTitle: "Data'Maniacs",
    items: [
      { id: "about", label: "À propos" },
      { id: "services", label: "Services" },
      // { id: "projects", label: "Projets" },
      { id: "contact", label: "Contact" }
    ],
    cta: "Contactez-nous",
  },

  // Section Hero
  hero: {
    badge: "Transformer les données en insights",
    title: "Libérez la puissance de vos <span class='text-primary'>données</span>",
    description:
      "Nous aidons les entreprises à exploiter leurs données pour stimuler la croissance, optimiser les opérations et prendre des décisions basées sur les données en toute confiance.",
    primaryCta: "Découvrir nos services",
    secondaryCta: "Contactez-nous",
    features: [
      { label: "Ingénierie de données" },
      { label: "Analyse de données" },
      { label: "Visualisation de données" },
    ],
    image: {
      src: "/abstract-data-blue-purple.png",
      alt: "Visualisation de données abstraite représentant l'analyse de données",
    },
  },

  // Section À propos
  about: {
    title: "À propos de nous",
    subtitle:
      "Nous sommes une équipe de spécialistes des données passionnés par l'aide aux entreprises à exploiter pleinement le potentiel de leurs données.",
    mission: {
      title: "Notre mission",
      description: [
        "Chez Data'Maniacs, notre mission est de démocratiser l'analyse de données et de rendre les capacités avancées de données accessibles aux entreprises de toutes tailles. Nous croyons que chaque organisation devrait pouvoir exploiter la puissance de ses données pour stimuler la croissance et l'innovation.",
        "Fondée en 2025, nous avons aidé plus de 15 entreprises à transformer leur approche des données, ce qui a entraîné des améliorations mesurables en termes d'efficacité, de satisfaction client et de croissance des revenus.",
      ],
    },
    values: [
      {
        title: "Excellence basée sur les données",
        description: "Nous croyons en la prise de décisions basées sur les données, pas sur des suppositions.",
      },
      {
        title: "Partenariat client",
        description:
          "Nous travaillons aux côtés de nos clients en tant que véritables partenaires dans leur parcours de données.",
      },
      {
        title: "Innovation",
        description:
          "Nous explorons constamment de nouvelles technologies et méthodologies pour offrir de meilleurs résultats.",
      },
      {
        title: "Transparence",
        description:
          "Nous maintenons une communication claire et des rapports honnêtes tout au long de nos engagements.",
      },
    ],
    team: {
      title: "Rencontrez notre équipe",
      members: [
        {
          name: "Tristan Fioroni",
          citation: '"In code we trust, in data we believe"',
          image: "/tristan.jpg",
          alt: "Tristan Fioroni, membre de l'équipe Data'Maniacs",
          contact_mail: "tristan@datamaniacs.fr",
          contact_teams: "tristan.fioroni@my-digital-school.org"
        },
        {
          name: "Imene Belhocine",
          citation: '"Too many rows, not enough RAM"',
          image: "/imene.jpg",
          alt: "Imene Belhocine, membre de l'équipe Data'Maniacs",
          contact_mail: "imene@datamaniacs.fr",
          contact_teams: "imene.belhocine@my-digital-school.org"
        },
        {
          name: "Haitam Hanine",
          citation: '"Clean data for restful minds"',
          image: "/haitam.jpg",
          alt: "Haitam Hanine, membre de l'équipe Data'Maniacs",
          contact_mail: "haitam@datamaniacs.fr",
          contact_teams: "haitam.hanine@my-digital-school.org"
        },
        {
          name: "Khaoula Chihab",
          citation: '"Bringing meaning to the meaningless — that\'s data"',
          image: "/khaoula.jpg",
          alt: "Khaoula Chihab, membre de l'équipe Data'Maniacs",
          contact_mail: "khaoula@datamaniacs.fr",
          contact_teams: "khaoula.chihab@my-digital-school.org"
        },
        {
          name: "Wassim Benkhelifa",
          citation: '"Big data, big problems, but also big solutions"',
          image: "/wassim.jpg",
          alt: "Wassim Benkhelifa, membre de l'équipe Data'Maniacs",
          contact_mail: "wassim@datamaniacs.fr",
          contact_teams: "wassim.benkhelifa@my-digital-school.org"
        },
        {
          name: "Alexandre Demay",
          citation: '"Data never sleeps. Fortunately, I do"',
          image: "/alexandre.jpg",
          alt: "Alexandre Demay, membre de l'équipe Data'Maniacs",
          contact_mail: "alexandre@datamaniacs.fr",
          contact_teams: "alexandre.demay@my-digital-school.org"
        },
      ],
    },
    teamImage: {
      src: "/data-team-office.png",
      alt: "L'équipe Data'Maniacs collaborant sur des projets de données dans nos bureaux",
    },
  },

  // Section Services
  services: {
    title: "Nos services",
    subtitle:
      "Nous offrons une suite complète de services de données pour vous aider à chaque étape de votre parcours de données.",
    list: [
      {
        id: "data-engineering",
        title: "Ingénierie de données",
        description:
          "Nous construisons des pipelines de données robustes et des infrastructures pour collecter, stocker et traiter vos données efficacement.",
        features: [
          "Développement de pipelines de données",
          "Processus ETL/ELT",
          "Conception d'entrepôts de données",
          "Optimisation de bases de données",
          "Traitement de données en temps réel",
        ],
      },
      {
        id: "data-analytics",
        title: "Analyse de données",
        description:
          "Nous transformons les données brutes en insights actionnables grâce à des analyses avancées et des méthodes statistiques.",
        features: [
          "Analyses descriptives",
          "Modélisation prédictive",
          "Segmentation client",
          "Analyse d'attrition",
          "Optimisation des revenus",
        ],
      },
      {
        id: "data-visualization",
        title: "Visualisation de données",
        description:
          "Nous créons des tableaux de bord intuitifs et des rapports visuels qui rendent les données complexes faciles à comprendre et à exploiter.",
        features: [
          "Tableaux de bord interactifs",
          "Solutions de reporting personnalisées",
          "Systèmes de suivi des KPI",
          "Tableaux de bord exécutifs",
          "Monitoring en temps réel",
        ],
      },
      {
        id: "machine-learning",
        title: "Machine Learning",
        description:
          "Nous développons des solutions d'IA et de machine learning qui automatisent les processus et découvrent des modèles cachés dans vos données.",
        features: [
          "Algorithmes prédictifs",
          "Modèles de classification",
          "Systèmes de recommandation",
          "Détection d'anomalies",
          "Traitement du langage naturel",
        ],
      },
    ],
    benefits: [
      {
        title: "Solutions de bout en bout",
        description:
          "De la collecte de données à la visualisation, nous fournissons des solutions complètes adaptées aux besoins de votre entreprise.",
      },
      {
        title: "Architecture évolutive",
        description:
          "Nos solutions évoluent avec votre entreprise, garantissant que votre infrastructure de données peut gérer des volumes et une complexité croissants.",
      },
      {
        title: "Insights actionnables",
        description:
          "Nous ne fournissons pas seulement des données, nous livrons des insights clairs et actionnables qui guident les décisions commerciales et les résultats.",
      },
    ],
    cta: "Demander une consultation",
  },

  // Section Projets
  projects: {
    title: "Nos projets",
    subtitle: "Explorez notre portfolio de projets de données réussis dans divers secteurs et cas d'utilisation.",
    categories: [
      { id: "all", label: "Tous les projets" },
      { id: "analytics", label: "Analytique" },
      { id: "visualization", label: "Visualisation" },
      { id: "machine-learning", label: "Machine Learning" },
    ],
    list: [
      {
        id: 1,
        title: "Tableau de bord d'analyse retail",
        category: "analytics",
        description:
          "Un tableau de bord complet fournissant des insights en temps réel sur les performances de vente, les niveaux de stock et le comportement client pour une grande chaîne de retail.",
        image: "/retail-analytics-dashboard.png",
        alt: "Tableau de bord d'analyse retail montrant des graphiques de ventes et de comportement client",
        client: "Global Retail Inc.",
      },
      {
        id: 2,
        title: "Visualisation des marchés financiers",
        category: "visualization",
        description:
          "Outil de visualisation interactif pour les données des marchés financiers, permettant aux traders d'identifier des modèles et de prendre des décisions d'investissement éclairées.",
        image: "/financial-data-charts.png",
        alt: "Visualisation interactive de données financières avec graphiques en temps réel",
        client: "Investment Partners LLC",
      },
      {
        id: 3,
        title: "Prédiction d'attrition client",
        category: "machine-learning",
        description:
          "Modèle de machine learning qui prédit l'attrition client avec une précision de 85%, permettant des stratégies de rétention proactives.",
        image: "/ml-model-visualization.png",
        alt: "Visualisation d'un modèle de machine learning pour la prédiction d'attrition client",
        client: "Telecom Solutions",
      },
      {
        id: 4,
        title: "Optimisation de la chaîne d'approvisionnement",
        category: "analytics",
        description:
          "Solution d'analyse de bout en bout qui a optimisé les opérations de la chaîne d'approvisionnement, réduisant les coûts de 18% et améliorant les délais de livraison.",
        image: "/supply-chain-logistics-visualization.png",
        alt: "Visualisation de l'optimisation de la chaîne d'approvisionnement avec des indicateurs de performance",
        client: "Logistics Pro",
      },
    ],
    cta: "Voir tous les projets",
    caseCta: "Voir l'étude de cas",
  },

  // Section Contact
  contact: {
    title: "Contactez-nous",
    subtitle:
      "Prêt à transformer vos données en insights actionnables ? Contactez-nous aujourd'hui pour discuter de votre projet.",
    info: {
      title: "Informations de contact",
      email: {
        label: "Email",
        value: "contact@datamaniacs.fr",
      },
      phone: {
        label: "Téléphone",
        value: "+33 6 48 49 53 19",
      },
      office: {
        label: "Bureau",
        value: "40 Rue du chemin vert, Paris, 75011",
      },
    },
    callout: {
      title: "Prêt à commencer ?",
      description:
        "Planifiez une consultation gratuite de 30 minutes pour discuter de vos besoins en données et comment nous pouvons vous aider.",
      cta: "Planifier un appel",
    },
    form: {
      fullName: "Nom complet",
      email: "Adresse email",
      company: "Entreprise",
      message: "Message",
      placeholder: {
        name: "Jean Dupont",
        email: "jean@exemple.com",
        company: "Votre entreprise",
        message: "Parlez-nous de votre projet et de vos besoins en données...",
      },
      submit: "Envoyer le message",
      sending: "Envoi en cours...",
      success: {
        title: "Message envoyé !",
        description: "Merci de nous avoir contactés. Nous vous répondrons dans les 24 heures.",
        cta: "Envoyer un autre message",
      },
    },
  },

  // Footer
  footer: {
    description: "Transformer les données en insights actionnables pour les entreprises de toutes tailles.",
    sections: {
      services: {
        title: "Services",
        links: [
          { label: "Ingénierie de données", href: "#services" },
          { label: "Analyse de données", href: "#services" },
          { label: "Visualisation de données", href: "#services" },
          { label: "Machine Learning", href: "#services" },
        ],
      },
      company: {
        title: "Entreprise",
        links: [
          { label: "À propos", href: "#about" },
          { label: "Services", href: "#services" },
          // { label: "Projets", href: "#projects" },
          { label: "Contact", href: "#contact" }
        ],
      },
      legal: {
        title: "Légal",
        links: [
          { label: "Politique de confidentialité", href: "#" },
          { label: "Conditions d'utilisation", href: "#" },
          { label: "Politique de cookies", href: "#" },
        ],
      },
    },
    copyright: "Tous droits réservés.",
    tagline: "Conçu et développé avec ❤️",
  },
}
