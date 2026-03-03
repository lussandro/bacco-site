"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useTranslations } from "next-intl"

type Category = "viticulture" | "vinification" | "commercial" | "management"

const categories: { key: Category; screenshots: { id: string; image: string }[] }[] = [
  {
    key: "viticulture",
    screenshots: [
      { id: "dashboard", image: "/screenshots/dashboard.png" },
      { id: "vineyards", image: "/screenshots/vinhedos.png" },
      { id: "calendarAI", image: "/screenshots/11-calendario-manejos-ia.png" },
    ],
  },
  {
    key: "vinification",
    screenshots: [
      { id: "flows", image: "/screenshots/fluxos-vinificacao.png" },
      { id: "lots", image: "/screenshots/10-lotes-producao.png" },
    ],
  },
  {
    key: "commercial",
    screenshots: [
      { id: "pdv", image: "/screenshots/pdv-caixa-aberto.png" },
      { id: "pdvTables", image: "/screenshots/pdv-mesas.png" },
      { id: "enotourism", image: "/screenshots/enoturismo-reservas.png" },
      { id: "enotourismPortal", image: "/screenshots/enoturismo-portal-publico.png" },
    ],
  },
  {
    key: "management",
    screenshots: [
      { id: "compliance", image: "/screenshots/13-compliance-sivibe.png" },
      { id: "financial", image: "/screenshots/19-financeiro.png" },
    ],
  },
]

export function Screenshots() {
  const t = useTranslations("screenshots")
  const [activeCategory, setActiveCategory] = useState<Category>("viticulture")

  const currentCategory = categories.find((c) => c.key === activeCategory)!

  return (
    <section id="sistema" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">{t("title")}</h2>
          <p className="text-lg text-muted-foreground text-pretty">{t("subtitle")}</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(`categories.${cat.key}`)}
            </button>
          ))}
        </div>

        {/* Screenshots grid */}
        <div className={`grid gap-6 ${currentCategory.screenshots.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {currentCategory.screenshots.map((screenshot) => (
            <Card
              key={screenshot.id}
              className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={screenshot.image}
                  alt={t(`items.${screenshot.id}.title`)}
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{t(`items.${screenshot.id}.title`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`items.${screenshot.id}.description`)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
