"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard, Grape, Wine, GlassWater, ShoppingCart, FileText,
  Truck, Users, Landmark, Wifi, Activity, ChevronRight,
} from "lucide-react"
import { useTranslations } from "next-intl"

const scopeKeys = [
  "platform", "viticulture", "enology", "juices", "commercial",
  "fiscal", "logistics", "cooperative", "enotourism", "iot", "observability",
] as const

const scopeIcons = [
  LayoutDashboard, Grape, Wine, GlassWater, ShoppingCart, FileText,
  Truck, Users, Landmark, Wifi, Activity,
]

export function Scope() {
  const t = useTranslations("scope")
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="escopo" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 text-base px-4 py-1.5 bg-primary/10 text-primary border-primary/30">
            {t("badge")}
          </Badge>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {scopeKeys.map((key, index) => {
            const Icon = scopeIcons[index]
            const items = t.raw(`modules.${key}.items`) as string[]
            const isExpanded = expanded === key

            return (
              <Card
                key={key}
                className="border hover:border-primary/40 transition-all duration-300 hover:shadow-md cursor-pointer group"
                onClick={() => setExpanded(isExpanded ? null : key)}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-base">{t(`modules.${key}.title`)}</h3>
                        <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${isExpanded ? "rotate-90" : ""}`} />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                        {t(`modules.${key}.description`)}
                      </p>
                      {isExpanded && (
                        <ul className="space-y-1.5 mt-3 pt-3 border-t border-border">
                          {items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="text-primary mt-0.5 text-xs">●</span>
                              <span className="text-foreground/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            {t("footer")}
          </p>
        </div>
      </div>
    </section>
  )
}
