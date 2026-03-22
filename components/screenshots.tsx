"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useTranslations } from "next-intl"

type Category =
  | "viticulture"
  | "vinification"
  | "commercial"
  | "enotourism"
  | "financial"
  | "ecommerce"
  | "stock"
  | "management"

const categories: { key: Category; screenshots: { id: string; image: string }[] }[] = [
  {
    key: "viticulture",
    screenshots: [
      { id: "dashboardExecutivo", image: "/screenshots/novo-site/dashboard-executivo.png" },
      { id: "vinhedosPoligonos", image: "/screenshots/novo-site/vinhedos-mapa-poligonos.png" },
      { id: "maturacao", image: "/screenshots/novo-site/maturacao-decisao-colheita.png" },
      { id: "custoColheita", image: "/screenshots/novo-site/custo-colheita.png" },
      { id: "mecanizacao", image: "/screenshots/novo-site/mecanizacao.png" },
      { id: "calendarAI", image: "/screenshots/11-calendario-manejos-ia.png" },
    ],
  },
  {
    key: "vinification",
    screenshots: [
      { id: "vinificacaoLotes", image: "/screenshots/novo-site/vinificacao-lotes.png" },
      { id: "vinificacaoBlends", image: "/screenshots/novo-site/vinificacao-blends.png" },
      { id: "vinificacaoEnvase", image: "/screenshots/novo-site/vinificacao-envase.png" },
      { id: "painelTanques", image: "/screenshots/novo-site/painel-tanques.png" },
      { id: "vinificacaoAnalytics", image: "/screenshots/novo-site/vinificacao-analytics.png" },
      { id: "espumantes", image: "/screenshots/novo-site/espumantes.png" },
    ],
  },
  {
    key: "commercial",
    screenshots: [
      { id: "pdv", image: "/screenshots/pdv-caixa-aberto.png" },
      { id: "pdvTables", image: "/screenshots/pdv-mesas.png" },
      { id: "recepcaoUvas", image: "/screenshots/novo-site/recepcao-uvas.png" },
    ],
  },
  {
    key: "enotourism",
    screenshots: [
      { id: "enoturismoReservas", image: "/screenshots/novo-site/enoturismo-reservas-novo.png" },
      { id: "portalPublico", image: "/screenshots/novo-site/portal-publico-reservas.png" },
    ],
  },
  {
    key: "financial",
    screenshots: [
      { id: "financeiroDashboard", image: "/screenshots/novo-site/financeiro-dashboard.png" },
      { id: "financeiroRelatorios", image: "/screenshots/novo-site/financeiro-relatorios.png" },
    ],
  },
  {
    key: "ecommerce",
    screenshots: [
      { id: "ecommerceHub", image: "/screenshots/novo-site/ecommerce-hub.png" },
      { id: "ecommercePedidos", image: "/screenshots/novo-site/ecommerce-pedidos.png" },
    ],
  },
  {
    key: "stock",
    screenshots: [
      { id: "rotulagem", image: "/screenshots/novo-site/rotulagem.png" },
      { id: "qrCodeRastreabilidade", image: "/screenshots/novo-site/qr-code-rastreabilidade.png" },
    ],
  },
  {
    key: "management",
    screenshots: [
      { id: "sivibeCompliance", image: "/screenshots/novo-site/sivibe-compliance.png" },
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
        <div className={`grid gap-6 ${
          currentCategory.screenshots.length === 1
            ? "max-w-3xl mx-auto"
            : currentCategory.screenshots.length === 2
              ? "md:grid-cols-2"
              : "md:grid-cols-2 lg:grid-cols-3"
        }`}>
          {currentCategory.screenshots.map((screenshot) => (
            <Card
              key={screenshot.id}
              className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="relative overflow-hidden bg-muted/30">
                <Image
                  src={screenshot.image}
                  alt={t(`items.${screenshot.id}.title`)}
                  width={1400}
                  height={900}
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
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
