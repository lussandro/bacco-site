import type { Metadata } from "next"
import { BASE_URL } from "@/lib/seo"

const metaByLocale: Record<string, { title: string; description: string; ogLocale: string }> = {
  "pt-BR": {
    title: "Bacco ERP para Argentina - SENASA e INV",
    description:
      "ERP completo para vinicolas argentinas. Compliance total com SENASA, INV (Instituto Nacional de Vitivinicultura) e regulamentacoes locais.",
    ogLocale: "pt_BR",
  },
  "pt-PT": {
    title: "Bacco ERP para a Argentina - SENASA e INV",
    description:
      "ERP completo para adegas argentinas. Compliance com SENASA, INV e regulamentacao local de vitivinicultura.",
    ogLocale: "pt_PT",
  },
  "en-US": {
    title: "Bacco ERP for Argentina - SENASA & INV",
    description:
      "Complete ERP for Argentine wineries. Full compliance with SENASA, INV (National Institute of Viticulture) and local regulations.",
    ogLocale: "en_US",
  },
  "es": {
    title: "Bacco ERP para Argentina - SENASA y INV",
    description:
      "ERP completo para bodegas argentinas. Compliance total con SENASA, INV (Instituto Nacional de Vitivinicultura) y regulaciones locales.",
    ogLocale: "es_AR",
  },
  "it-IT": {
    title: "Bacco ERP per Argentina - SENASA e INV",
    description:
      "ERP completo per cantine argentine. Compliance totale con SENASA, INV (Istituto Nazionale di Vitivinicoltura) e normative locali.",
    ogLocale: "it_IT",
  },
  "fr": {
    title: "Bacco ERP pour l'Argentine - SENASA et INV",
    description:
      "ERP complet pour les domaines viticoles argentins. Conformite avec SENASA, INV et la reglementation locale.",
    ogLocale: "fr_FR",
  },
  "de": {
    title: "Bacco ERP fuer Argentinien - SENASA und INV",
    description:
      "Komplettes ERP fuer argentinische Weingueter. Volle Compliance mit SENASA, INV und lokalen Vorschriften.",
    ogLocale: "de_DE",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: paramLocale } = await params
  const locale = metaByLocale[paramLocale] ? paramLocale : "es"
  const meta = metaByLocale[locale] ?? metaByLocale["es"]
  const baseUrl = new URL(BASE_URL)

  const pathByLocale: Record<string, string> = {
    "pt-BR": "/para-argentina",
    "pt-PT": "/para-argentina",
    "en-US": "/for-argentina",
    "es": "/para-argentina",
    "it-IT": "/per-argentina",
    "fr": "/pour-argentine",
    "de": "/fuer-argentinien",
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
        "de": `${baseUrl.origin}/de/fuer-argentinien`,
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
