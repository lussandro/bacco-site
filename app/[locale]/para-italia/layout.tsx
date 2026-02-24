import type { Metadata } from "next"

const metaByLocale: Record<string, { title: string; description: string; ogLocale: string }> = {
  "pt-BR": {
    title: "Bacco ERP para Italia - Compliance DOC, DOCG, IGT e Regulacoes EU",
    description:
      "ERP completo para vinicolas italianas. Compliance com DOC, DOCG, IGT, Registro Vigneti e SIAN. Suporte a todas as regioes vinicolas italianas: Toscana, Piemonte, Veneto, Sicilia, Puglia e mais.",
    ogLocale: "pt_BR",
  },
  "pt-PT": {
    title: "Bacco ERP para Italia - Compliance DOC, DOCG, IGT e regulacao UE",
    description:
      "ERP completo para adegas italianas. Compliance com DOC, DOCG, IGT, Registro Vigneti e SIAN.",
    ogLocale: "pt_PT",
  },
  "en-US": {
    title: "Bacco ERP for Italy - DOC, DOCG, IGT & EU Compliance",
    description:
      "Complete ERP for Italian wineries. Compliance with DOC, DOCG, IGT, Registro Vigneti and SIAN. Support for all Italian wine regions: Tuscany, Piedmont, Veneto, Sicily, Puglia and more.",
    ogLocale: "en_US",
  },
  "es": {
    title: "Bacco ERP para Italia - Compliance DOC, DOCG, IGT y Regulaciones UE",
    description:
      "ERP completo para bodegas italianas. Compliance con DOC, DOCG, IGT, Registro Vigneti y SIAN. Soporte a todas las regiones vinicolas italianas: Toscana, Piamonte, Veneto, Sicilia, Puglia y mas.",
    ogLocale: "es_ES",
  },
  "it-IT": {
    title: "Bacco ERP per Italia - Compliance DOC, DOCG, IGT e Normative UE",
    description:
      "ERP completo per cantine italiane. Compliance con DOC, DOCG, IGT, Registro Vigneti e SIAN. Supporto a tutte le regioni vinicole italiane: Toscana, Piemonte, Veneto, Sicilia, Puglia e altre.",
    ogLocale: "it_IT",
  },
  "fr": {
    title: "Bacco ERP pour l'Italie - Conformite DOC, DOCG, IGT et normes UE",
    description:
      "ERP complet pour les domaines viticoles italiens, avec conformite DOC, DOCG, IGT, Registro Vigneti et SIAN.",
    ogLocale: "fr_FR",
  },
  "de": {
    title: "Bacco ERP fuer Italien - DOC, DOCG, IGT und EU-Compliance",
    description:
      "Komplettes ERP fuer italienische Weingueter. Compliance mit DOC, DOCG, IGT, Registro Vigneti und SIAN.",
    ogLocale: "de_DE",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: paramLocale } = await params
  const locale = metaByLocale[paramLocale] ? paramLocale : "it-IT"
  const meta = metaByLocale[locale] ?? metaByLocale["it-IT"]
  const baseUrl = new URL("https://bacco-erp.com")

  const pathByLocale: Record<string, string> = {
    "pt-BR": "/para-italia",
    "pt-PT": "/para-italia",
    "en-US": "/for-italy",
    "es": "/para-italia",
    "it-IT": "/per-italia",
    "fr": "/pour-italie",
    "de": "/fuer-italien",
  }

  const ogUrl = `${baseUrl.origin}/${locale}${pathByLocale[locale] || "/per-italia"}`
  const ogImage = `/api/og?title=${encodeURIComponent("Bacco ERP - Italia")}&description=${encodeURIComponent(meta.description)}`

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      "ERP vinicola Italia",
      "DOC",
      "DOCG",
      "IGT",
      "Registro Vigneti",
      "SIAN",
      "gestione cantina italiana",
      "software vinicola Italia",
      "Toscana",
      "Piemonte",
      "Veneto",
      "Sicilia",
      "Puglia",
      "Trentino-Alto Adige",
      "vini italiani",
      "compliance vinicola EU",
      "tracciabilita vino",
      "enoturismo Italia",
      "Sangiovese",
      "Nebbiolo",
      "Prosecco",
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
          alt: "Bacco ERP - Sistema per Cantine Italiane",
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
        "pt-BR": `${baseUrl.origin}/pt-BR/para-italia`,
        "pt-PT": `${baseUrl.origin}/pt-PT/para-italia`,
        "en-US": `${baseUrl.origin}/en-US/for-italy`,
        "es": `${baseUrl.origin}/es/para-italia`,
        "it-IT": `${baseUrl.origin}/it-IT/per-italia`,
        "fr": `${baseUrl.origin}/fr/pour-italie`,
        "de": `${baseUrl.origin}/de/fuer-italien`,
      },
    },
  }
}

export default function ItalyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
