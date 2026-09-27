"use client"

import { Card } from "@/components/ui/card"
import { Grape, FlaskConical, BarChart3, Package, FileText, ShoppingCart } from "lucide-react"
import { useTranslations } from 'next-intl';

// 29 funcionalidades em 6 grupos: o título de cada uma fica na página, a descrição no tooltip.
const groups = [
  { key: 'vineyard', icon: Grape, items: ['vineyardManagement', 'vineyardHandling', 'aiCalendar', 'climateAI', 'mechanization'] },
  { key: 'winemaking', icon: FlaskConical, items: ['grapeReception', 'productionLots', 'visualFlowEditor', 'vinificationAI', 'temperatureIoT', 'sparklingWine', 'blends', 'bottling'] },
  { key: 'analysis', icon: BarChart3, items: ['labAnalysis', 'vinificationAnalytics', 'dashboard', 'reports', 'multitenant'] },
  { key: 'stock', icon: Package, items: ['stockControl', 'stockLabeling', 'labeling', 'traceability'] },
  { key: 'fiscal', icon: FileText, items: ['fiscalNotes', 'sivibe', 'envin'] },
  { key: 'commercial', icon: ShoppingCart, items: ['commercial', 'financial', 'ecommerceHub', 'enotourism'] },
] as const

export function Features() {
  const t = useTranslations('features');

  return (
    <section id="funcionalidades" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map(({ key, icon: Icon, items }) => (
            <Card key={key} className="p-6 gap-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{t(`groups.${key}`)}</h3>
              </div>
              <ul className="space-y-2 text-sm">
                {items.map((item) => (
                  <li key={item} title={t(`items.${item}.description`)} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                    {t(`items.${item}.title`)}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
