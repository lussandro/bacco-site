import type { Metadata } from "next"

const metaByLocale: Record<string, { title: string; description: string; ogLocale: string }> = {
  "pt-BR": {
    title: "Bacco ERP para Argentina - Compliance SENASA, INV e Regulamentacoes Locais",
    description:
      "ERP completo para vinicolas argentinas. Compliance total com SENASA, INV (Instituto Nacional de Vitivinicultura) e regulamentacoes locais. Suporte a todas as regioes vinicolas: Mendoza, San Juan, Salta, Patagonia e La Rioja.",
    ogLocale: "pt_BR",
  },
  "pt-PT": {
    title: "Bacco ERP para a Argentina - Compliance SENASA, INV e Regulamentacao Local",
    description:
      "ERP completo para adegas argentinas. Compliance com SENASA, INV e regulamentacao local de vitivinicultura.",
    ogLocale: "pt_PT",
  },
  "en-US": {
    title: "Bacco ERP for Argentina - SENASA, INV & Local Compliance",
    description:
      "Complete ERP for Argentine wineries. Full compliance with SENASA, INV (National Institute of Viticulture) and local regulations. Support for all wine regions: Mendoza, San Juan, Salta, Patagonia, and La Rioja.",
    ogLocale: "en_US",
  },
  "es": {
    title: "Bacco ERP para Argentina - Compliance SENASA, INV y Regulaciones Locales",
    description:
      "ERP completo para bodegas argentinas. Compliance total con SENASA, INV (Instituto Nacional de Vitivinicultura) y regulaciones locales. Soporte a todas las regiones vitivinicolas: Mendoza, San Juan, Salta, Patagonia y La Rioja.",
    ogLocale: "es_AR",
  },
  "it-IT": {
    title: "Bacco ERP per Argentina - Compliance SENASA, INV e Regolamentazioni Locali",
    description:
      "ERP completo per cantine argentine. Compliance totale con SENASA, INV (Istituto Nazionale di Vitivinicoltura) e regolamentazioni locali. Supporto a tutte le regioni vinicole: Mendoza, San Juan, Salta, Patagonia e La Rioja.",
    ogLocale: "it_IT",
  },
  "fr": {
    title: "Bacco ERP pour l'Argentine - Conformite SENASA, INV et normes locales",
    description:
      "ERP complet pour les domaines viticoles argentins. Conformite avec SENASA, INV et la reglementation locale.",
    ogLocale: "fr_FR",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: paramLocale } = await params
  const locale = metaByLocale[paramLocale] ? paramLocale : "es"
  const meta = metaByLocale[locale] ?? metaByLocale["es"]
  const baseUrl = new URL("https://bacco-erp.com")

  const pathByLocale: Record<string, string> = {
    "pt-BR": "/para-argentina",
    "pt-PT": "/para-argentina",
    "en-US": "/for-argentina",
    "es": "/para-argentina",
    "it-IT": "/per-argentina",
    "fr": "/pour-argentine",
  }

  const ogUrl = `${baseUrl.origin}/${locale}${pathByLocale[locale] || "/para-argentina"}`
  const ogImage = `/api/og?title=${encodeURIComponent("Bacco ERP - Argentina")}&description=${encodeURIComponent(meta.description)}`

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      "ERP vinicola Argentina",
      "SENASA",
      "INV",
      "Instituto Nacional de Vitivinicultura",
      "gestion vinicola argentina",
      "software vinicola Argentina",
      "Mendoza",
      "San Juan",
      "Salta",
      "Patagonia",
      "La Rioja",
      "vinos argentinos",
      "Malbec",
      "Torrontes",
      "compliance vinicola",
      "trazabilidad vino",
      "enoturismo Argentina",
    ],
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      url: ogUrl,
      siteName: "Bacco ERP",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Bacco ERP - Sistema para Bodegas Argentinas",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
      creator: "@baccoerp",
    },
    alternates: {
      canonical: ogUrl,
      languages: {
        "pt-BR": `${baseUrl.origin}/pt-BR/para-argentina`,
        "pt-PT": `${baseUrl.origin}/pt-PT/para-argentina`,
        "en-US": `${baseUrl.origin}/en-US/for-argentina`,
        "es": `${baseUrl.origin}/es/para-argentina`,
        "it-IT": `${baseUrl.origin}/it-IT/per-argentina`,
        "fr": `${baseUrl.origin}/fr/pour-argentine`,
      },
    },
  }
}

export default function ArgentinaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
