"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Clock, CheckCircle2, Shield } from "lucide-react"
import { useTranslations } from 'next-intl';

export function Benefits() {
  const t = useTranslations('benefits');
  const icons = [CheckCircle2, Shield, TrendingUp, Clock];
  const items = ['traceability', 'realtime', 'integrated', 'reports'];

  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">{t('title')}</h2>
          <p className="text-lg opacity-90 text-pretty">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Card key={index} className="p-6 lg:p-8 text-center bg-card">
                <div className="inline-flex h-16 w-16 rounded-full bg-primary/10 items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{t(`items.${item}.stat`)}</div>
                <div className="font-semibold text-lg mb-2">{t(`items.${item}.label`)}</div>
                <p className="text-sm text-muted-foreground">{t(`items.${item}.description`)}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}
