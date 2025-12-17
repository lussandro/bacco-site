"use client"

import { Wine } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function TermosDeUso() {
  const t = useTranslations("terms")

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
          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">1. {t("accept.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("accept.text")}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">2. {t("service.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("service.text")}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              {t.raw("service.items").map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">3. {t("account.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("account.text")}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              {t.raw("account.items").map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">4. {t("lgpd.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("lgpd.text")}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              {t.raw("lgpd.items").map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">5. {t("rights.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("rights.text")}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              {t.raw("rights.items").map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">{t("rights.contact")}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">6. {t("acceptable.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("acceptable.text")}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              {t.raw("acceptable.items").map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">7. {t("ip.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("ip.text")}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">8. {t("availability.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("availability.text")}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">9. {t("liability.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("liability.text")}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">10. {t("changes.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("changes.text")}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">11. {t("termination.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("termination.text")}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">12. {t("law.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("law.text")}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">13. {t("contact.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("contact.text")}</p>
            <div className="bg-muted/50 p-6 rounded-lg space-y-2">
              <p className="text-muted-foreground">
                <strong>E-mail:</strong> lussandro@gmail.com
              </p>
              <p className="text-muted-foreground">
                <strong>{t("contactPhone")}:</strong> +55 48 99128-6399
              </p>
              <p className="text-muted-foreground">
                <strong>{t("contactAddress")}:</strong> Florianópolis, SC
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

