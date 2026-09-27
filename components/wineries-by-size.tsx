"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Warehouse, Landmark } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

const sizeKeys = ["small", "medium", "large"] as const
const sizeIcons = [Building2, Warehouse, Landmark]

/**
 * "ERP para pequenas/médias/grandes vinícolas" numa única seção com H3 por porte,
 * em vez de uma página por porte (evita doorway page). Só pt-BR/pt-PT têm as
 * chaves "wineriesBySize" - o dispatch por locale evita MISSING_MESSAGE nos demais.
 */
function WineriesBySizeContent() {
  const t = useTranslations("wineriesBySize")

  return (
    <section id="portes" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 text-base px-4 py-1.5">{t("badge")}</Badge>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {sizeKeys.map((key, index) => {
            const Icon = sizeIcons[index]
            return (
              <Card key={key} className="p-6 lg:p-8 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-3">{t(`sizes.${key}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`sizes.${key}.description`)}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function WineriesBySize() {
  const locale = useLocale()
  if (!locale.startsWith("pt")) return null
  return <WineriesBySizeContent />
}
