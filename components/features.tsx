"use client"

import { Card } from "@/components/ui/card"
import {
  Grape,
  Sprout,
  ClipboardList,
  Beaker,
  FlaskConical,
  BarChart3,
  Thermometer,
  Package,
  Users,
  ShoppingCart,
  FileText,
  TrendingUp,
  Database,
  Wifi,
  QrCode,
  Receipt,
  CreditCard,
  Store,
  Brain,
  Calendar,
  Cloud,
  Wine,
  ShieldCheck,
  Building2,
} from "lucide-react"
import { useTranslations } from 'next-intl';

export function Features() {
  const t = useTranslations('features');
  const icons = [
    Grape, Sprout, Brain, Cloud, ClipboardList, Package, FlaskConical, Brain,
    Thermometer, Beaker, BarChart3, Users, ShoppingCart, CreditCard, FileText,
    Database, ShieldCheck, Wine, Building2, Store, QrCode, TrendingUp
  ];
  const keys = [
    'vineyardManagement', 'vineyardHandling', 'aiCalendar', 'climateAI',
    'grapeReception', 'productionLots', 'visualFlowEditor', 'vinificationAI',
    'temperatureIoT', 'labAnalysis', 'dashboard', 'multitenant', 'commercial',
    'financial', 'fiscalNotes', 'sivibe', 'envin', 'enotourism', 'stockControl',
    'stockLabeling', 'traceability', 'reports'
  ];

  return (
    <section id="funcionalidades" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {keys.map((key, index) => {
            const Icon = icons[index];
            return (
              <Card key={index} className="p-6 lg:p-8 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t(`items.${key}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(`items.${key}.description`)}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}
