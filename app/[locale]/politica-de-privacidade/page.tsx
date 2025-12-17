"use client"

import { Wine } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function PoliticaPrivacidade() {
  const t = useTranslations("privacy")

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Wine className="h-8 w-8 text-primary" />
            <span className="font-serif text-2xl font-bold">Bacco</span>
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t("back")}
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 max-w-4xl">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">{t("title")}</h1>
        <p className="text-muted-foreground mb-8">{t("updated")}</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          {t.raw("sections").map((section: any, idx: number) => (
            <section key={idx}>
              <h2 className="font-serif text-2xl font-bold mb-4">{section.heading}</h2>
              {section.paragraphs?.map((p: string, pi: number) => (
                <p key={pi} className="text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
              {section.list?.length ? (
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-2">
                  {section.list.map((item: string, li: number) => (
                    <li key={li}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}

