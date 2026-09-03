import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { alternatesFor, urlFor, OG_LOCALE } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "terms" })
  const title = t("title")
  const description = t("accept.text").slice(0, 160)

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale],
      url: urlFor("/termos-de-uso", locale),
      siteName: "Bacco ERP",
      title,
      description,
    },
    alternates: alternatesFor("/termos-de-uso", locale),
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
