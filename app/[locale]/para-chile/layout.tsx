import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { alternatesFor, urlFor, ogImageFor, OG_LOCALE } from "@/lib/seo"

// Titulo/descricao vem das mensagens ja traduzidas (namespace "chile"),
// nao de uma tabela paralela que dessincroniza com o conteudo da pagina.
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "chile" })
  const title = t("hero.title")
  const description = t("hero.subtitle")
  const ogImage = ogImageFor(title, description)

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale],
      url: urlFor("/para-chile", locale),
      siteName: "Bacco ERP",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@baccoerp",
    },
    alternates: alternatesFor("/para-chile", locale),
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
