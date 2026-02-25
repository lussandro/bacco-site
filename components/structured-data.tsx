const orgDescriptions: Record<string, string> = {
  "pt-BR": "Sistema ERP completo desenvolvido exclusivamente para vinícolas brasileiras",
  "pt-PT": "Sistema ERP completo desenvolvido exclusivamente para adegas",
  "en-US": "Complete ERP system built exclusively for wineries",
  "es": "Sistema ERP completo desarrollado exclusivamente para bodegas",
  "it-IT": "Sistema ERP completo sviluppato esclusivamente per cantine",
  "fr": "Système ERP complet développé exclusivement pour les domaines viticoles",
  "de": "Komplettes ERP-System, exklusiv für Weingüter entwickelt",
}

const softwareDescriptions: Record<string, string> = {
  "pt-BR": "ERP completo para gestão de vinícolas com IA, rastreabilidade, compliance SIVIBE/ENVIN e módulo de enoturismo",
  "pt-PT": "ERP completo para gestão de adegas com IA, rastreabilidade, compliance SIVIBE/ENVIN e módulo de enoturismo",
  "en-US": "Complete winery management ERP with AI, traceability, SIVIBE/ENVIN compliance, and wine tourism module",
  "es": "ERP completo para gestión de bodegas con IA, trazabilidad, compliance SIVIBE/ENVIN y módulo de enoturismo",
  "it-IT": "ERP completo per la gestione delle cantine con IA, tracciabilità, compliance SIVIBE/ENVIN e modulo enoturismo",
  "fr": "ERP complet pour la gestion des domaines viticoles avec IA, traçabilité, conformité SIVIBE/ENVIN et module œnotourisme",
  "de": "Komplettes Weingut-Management-ERP mit KI, Rückverfolgbarkeit, SIVIBE/ENVIN-Compliance und Weintourismus-Modul",
}

const featureLists: Record<string, string[]> = {
  "pt-BR": [
    "Gestão de Vinhedos",
    "Vinificação com IA",
    "Rastreabilidade Completa",
    "Compliance SIVIBE e ENVIN",
    "Enoturismo",
    "PDV Integrado",
    "Apps Móveis (Bacco-Campo e Bacco-Comanda)",
  ],
  "pt-PT": [
    "Gestão de Vinhas",
    "Vinificação com IA",
    "Rastreabilidade Completa",
    "Compliance SIVIBE e ENVIN",
    "Enoturismo",
    "POS Integrado",
    "Apps Móveis (Bacco-Campo e Bacco-Comanda)",
  ],
  "en-US": [
    "Vineyard Management",
    "AI-Assisted Winemaking",
    "Full Traceability",
    "SIVIBE & ENVIN Compliance",
    "Wine Tourism",
    "Integrated POS",
    "Mobile Apps (Bacco-Campo & Bacco-Comanda)",
  ],
  "es": [
    "Gestión de Viñedos",
    "Vinificación con IA",
    "Trazabilidad Completa",
    "Compliance SIVIBE y ENVIN",
    "Enoturismo",
    "TPV Integrado",
    "Apps Móviles (Bacco-Campo y Bacco-Comanda)",
  ],
  "it-IT": [
    "Gestione Vigneti",
    "Vinificazione con IA",
    "Tracciabilità Completa",
    "Compliance SIVIBE e ENVIN",
    "Enoturismo",
    "POS Integrato",
    "App Mobile (Bacco-Campo e Bacco-Comanda)",
  ],
  "fr": [
    "Gestion des Vignobles",
    "Vinification assistée par IA",
    "Traçabilité Complète",
    "Conformité SIVIBE et ENVIN",
    "Œnotourisme",
    "TPV Intégré",
    "Applications Mobiles (Bacco-Campo et Bacco-Comanda)",
  ],
  "de": [
    "Weinbergmanagement",
    "KI-gestützte Weinherstellung",
    "Vollständige Rückverfolgbarkeit",
    "SIVIBE- & ENVIN-Compliance",
    "Weintourismus",
    "Integriertes POS",
    "Mobile Apps (Bacco-Campo & Bacco-Comanda)",
  ],
}

const contactTypes: Record<string, string> = {
  "pt-BR": "Suporte",
  "pt-PT": "Suporte",
  "en-US": "Support",
  "es": "Soporte",
  "it-IT": "Supporto",
  "fr": "Support",
  "de": "Support",
}

export function StructuredData({ locale = "pt-BR" }: { locale?: string }) {
  const orgDescription = orgDescriptions[locale] ?? orgDescriptions["pt-BR"]
  const softwareDescription = softwareDescriptions[locale] ?? softwareDescriptions["pt-BR"]
  const features = featureLists[locale] ?? featureLists["pt-BR"]
  const contactType = contactTypes[locale] ?? contactTypes["pt-BR"]

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bacco ERP",
    description: orgDescription,
    url: "https://bacco-erp.com",
    logo: "https://bacco-erp.com/icon.svg",
    sameAs: [],
    inLanguage: locale,
    areaServed: [
      { "@type": "Country", name: "Brazil" },
      { "@type": "Country", name: "Portugal" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Spain" },
      { "@type": "Country", name: "Italy" },
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Argentina" },
      { "@type": "Country", name: "Chile" },
      { "@type": "Country", name: "Uruguay" },
    ],
    availableLanguage: [
      { "@type": "Language", name: "Portuguese", alternateName: "pt" },
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Spanish", alternateName: "es" },
      { "@type": "Language", name: "Italian", alternateName: "it" },
      { "@type": "Language", name: "French", alternateName: "fr" },
      { "@type": "Language", name: "German", alternateName: "de" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: contactType,
      email: "lussandro@gmail.com",
    },
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Bacco ERP",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: locale,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    description: softwareDescription,
    featureList: features,
    screenshot: "https://bacco-erp.com/screenshots/dashboard.png",
    availableLanguage: [
      { "@type": "Language", name: "Portuguese", alternateName: "pt" },
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Spanish", alternateName: "es" },
      { "@type": "Language", name: "Italian", alternateName: "it" },
      { "@type": "Language", name: "French", alternateName: "fr" },
      { "@type": "Language", name: "German", alternateName: "de" },
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bacco-erp.com",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
