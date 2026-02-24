import type { Metadata } from "next"

const metaByLocale: Record<string, { title: string; description: string; ogLocale: string }> = {
  "pt-BR": {
    title: "Bacco ERP para Brasil - Compliance SIVIBE, ENVIN, MAPA e NF-e",
    description:
      "O unico ERP brasileiro desenvolvido exclusivamente para vinicolas. Compliance total com SIVIBE, ENVIN, MAPA e NF-e. Suporte a todas as regioes vinicolas brasileiras: Serra Gaucha, Vale do Sao Francisco, Campanha Gaucha e mais.",
    ogLocale: "pt_BR",
  },
  "pt-PT": {
    title: "Bacco ERP para o Brasil - Compliance SIVIBE, ENVIN, MAPA e NF-e",
    description:
      "ERP desenvolvido exclusivamente para adegas. Compliance total com SIVIBE, ENVIN, MAPA e NF-e. Suporte para todas as regioes vitivinicolas do Brasil.",
    ogLocale: "pt_PT",
  },
  "en-US": {
    title: "Bacco ERP for Brazil - SIVIBE, ENVIN, MAPA & NF-e Compliance",
    description:
      "The only Brazilian ERP developed exclusively for wineries. Full compliance with SIVIBE, ENVIN, MAPA, and NF-e. Support for all Brazilian wine regions: Serra Gaucha, Sao Francisco Valley, Campanha Gaucha, and more.",
    ogLocale: "en_US",
  },
  "es": {
    title: "Bacco ERP para Brasil - Compliance SIVIBE, ENVIN, MAPA y NF-e",
    description:
      "El unico ERP brasileno desarrollado exclusivamente para bodegas. Compliance total con SIVIBE, ENVIN, MAPA y NF-e. Soporte a todas las regiones vinicolas brasilenas: Serra Gaucha, Valle del San Francisco, Campana Gaucha y mas.",
    ogLocale: "es_ES",
  },
  "it-IT": {
    title: "Bacco ERP per Brasile - Compliance SIVIBE, ENVIN, MAPA e NF-e",
    description:
      "L'unico ERP brasiliano sviluppato esclusivamente per cantine. Compliance totale con SIVIBE, ENVIN, MAPA e NF-e. Supporto a tutte le regioni vinicole brasiliane: Serra Gaucha, Valle del San Francisco, Campagna Gaucha e altre.",
    ogLocale: "it_IT",
  },
  "fr": {
    title: "Bacco ERP pour le Bresil - Conformite SIVIBE, ENVIN, MAPA et NF-e",
    description:
      "ERP concu pour les domaines viticoles operant au Bresil. Conformite complete avec SIVIBE, ENVIN, MAPA et NF-e.",
    ogLocale: "fr_FR",
  },
  "de": {
    title: "Bacco ERP fuer Brasilien - SIVIBE, ENVIN, MAPA und NF-e Compliance",
    description:
      "Das einzige brasilianische ERP, das exklusiv fuer Weingueter entwickelt wurde. Volle Compliance mit SIVIBE, ENVIN, MAPA und NF-e.",
    ogLocale: "de_DE",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: paramLocale } = await params
  const locale = metaByLocale[paramLocale] ? paramLocale : "pt-BR"
  const meta = metaByLocale[locale] ?? metaByLocale["pt-BR"]
  const baseUrl = new URL("https://bacco-erp.com")

  const pathByLocale: Record<string, string> = {
    "pt-BR": "/para-brasil",
    "pt-PT": "/para-brasil",
    "en-US": "/for-brazil",
    "es": "/para-brasil",
    "it-IT": "/per-brasile",
    "fr": "/pour-bresil",
    "de": "/fuer-brasilien",
  }

  const ogUrl = `${baseUrl.origin}/${locale}${pathByLocale[locale] || "/para-brasil"}`
  const ogImage = `/api/og?title=${encodeURIComponent("Bacco ERP - Brasil")}&description=${encodeURIComponent(meta.description)}`

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      "ERP vinicola Brasil",
      "SIVIBE",
      "ENVIN",
      "MAPA vinicola",
      "NF-e vinho",
      "gestao vinicola brasileira",
      "software vinicola Brasil",
      "Serra Gaucha",
      "Vale do Sao Francisco",
      "Campanha Gaucha",
      "vinhos brasileiros",
      "compliance vinicola",
      "rastreabilidade vinho",
      "enoturismo Brasil",
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
          alt: "Bacco ERP - Sistema para Vinicolas Brasileiras",
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
        "pt-BR": `${baseUrl.origin}/pt-BR/para-brasil`,
        "pt-PT": `${baseUrl.origin}/pt-PT/para-brasil`,
        "en-US": `${baseUrl.origin}/en-US/for-brazil`,
        "es": `${baseUrl.origin}/es/para-brasil`,
        "it-IT": `${baseUrl.origin}/it-IT/per-brasile`,
        "fr": `${baseUrl.origin}/fr/pour-bresil`,
        "de": `${baseUrl.origin}/de/fuer-brasilien`,
      },
    },
  }
}

export default function BrazilLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
