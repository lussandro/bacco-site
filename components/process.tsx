"use client"

import { Card } from "@/components/ui/card"
import { useTranslations } from 'next-intl';

const images = [
  "/vineyard-with-grape-vines.jpg",
  "/wine-barrels-in-cellar.jpg",
  "/wine-bottling-line.jpg",
  "/wine-bottles-ready-for-distribution.jpg",
]

export function Process() {
  const t = useTranslations('process');
  const steps = ['vineyard', 'harvest', 'vinification', 'bottling'];

  return (
    <section id="processo" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">{t('title')}</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t('subtitle')}
          </p>
        </div>

        <div className="space-y-12 lg:space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="inline-block">
                  <span className="font-serif text-6xl lg:text-7xl font-bold text-primary/20">{t(`steps.${step}.number`)}</span>
                </div>
                <h3 className="font-serif text-3xl lg:text-4xl font-bold">{t(`steps.${step}.title`)}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{t(`steps.${step}.description`)}</p>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <Card className="overflow-hidden">
                  <img
                    src={images[index] || "/placeholder.svg"}
                    alt={t(`steps.${step}.title`)}
                    className="w-full aspect-[3/2] object-cover"
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
