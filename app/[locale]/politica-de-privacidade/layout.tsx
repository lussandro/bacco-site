import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { alternatesFor, urlFor, OG_LOCALE } from "@/lib/seo"

type Section = { heading: string; paragraphs: string[] }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "privacy" })
  const title = t("title")
  const sections = t.raw("sections") as Section[]
  const description = (sections?.[0]?.paragraphs?.[0] ?? "").slice(0, 160)

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale],
      url: urlFor("/politica-de-privacidade", locale),
      siteName: "Bacco ERP",
      title,
      description,
    },
    alternates: alternatesFor("/politica-de-privacidade", locale),
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
