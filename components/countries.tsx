"use client"

import { Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

// Faixa compacta: idiomas + mercados. O detalhe de cada país fica nas páginas /para-*.
export function Countries() {
  const t = useTranslations("countries")
  const tI18n = useTranslations("internationalization")
  const obligations = t.raw("obligations") as {
    status: { full: string; partial: string; planned: string }
    markets: Record<string, { label: string; status: "full" | "partial" | "planned"; items: string[] }>
  }
  const markets = [
    { code: "brazil", flag: "🇧🇷", href: "/para-brasil" },
    { code: "argentina", flag: "🇦🇷", href: "/para-argentina" },
    { code: "chile", flag: "🇨🇱", href: "/para-chile" },
    { code: "uruguay", flag: "🇺🇾", href: "/para-uruguai" },
    { code: "italy", flag: "🇮🇹", href: "/para-italia" },
    { code: "spain", flag: "🇪🇸" },
    { code: "france", flag: "🇫🇷" },
    { code: "germany", flag: "🇩🇪" },
  ] as const

  return (
    <section id="mercados" className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Globe className="h-3 w-3 mr-1" />
            {t("badge")}
          </Badge>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-balance">{t("title")}</h2>
          <p className="text-muted-foreground text-pretty">{t("subtitle")}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {markets.map((m) => {
            const market = obligations.markets[m.code]
            const chip = (
              <>
                <span className="text-xl leading-none">{m.flag}</span>
                <span className="font-medium">{market.label}</span>
                <span className="text-xs text-muted-foreground">{obligations.status[market.status]}</span>
              </>
            )
            const cls = "flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm"
            return "href" in m ? (
              <Link key={m.code} href={m.href} title={market.items.join(" • ")} className={`${cls} hover:border-primary/50 hover:text-primary transition-colors`}>
                {chip}
              </Link>
            ) : (
              <span key={m.code} title={market.items.join(" • ")} className={cls}>
                {chip}
              </span>
            )
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">{tI18n("title")}</p>
      </div>
    </section>
  )
}
