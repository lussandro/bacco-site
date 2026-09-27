"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ClipboardList, Grape, FlaskConical, FileText, Landmark } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

const topicKeys = ["harvest", "vineyard", "vinification", "fiscalNote", "taxReform"] as const
const topicIcons = [ClipboardList, Grape, FlaskConical, FileText, Landmark]

/**
 * Detalhe concreto (safra, vinhedo, vinificação, fiscal, reforma tributária) com
 * H3 por tópico, texto sempre visível (sem accordion) para ficar indexável.
 * Só pt-BR/pt-PT têm a chave "productionDetail" - mesmo dispatch de WineriesBySize.
 */
function ProductionDetailContent() {
  const t = useTranslations("productionDetail")

  return (
    <section id="producao" className="py-20 lg:py-32 bg-background">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {topicKeys.map((key, index) => {
            const Icon = topicIcons[index]
            return (
              <Card key={key} className="p-6 lg:p-8 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-3">{t(`topics.${key}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`topics.${key}.description`)}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ProductionDetail() {
  const locale = useLocale()
  if (!locale.startsWith("pt")) return null
  return <ProductionDetailContent />
}
