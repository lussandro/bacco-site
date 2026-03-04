"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  Cpu,
  Thermometer,
  Bell,
  Clock3,
  LineChart,
  FlaskConical,
  ShieldCheck,
  Wifi,
  Database,
  GanttChartSquare,
  CheckCircle2,
} from "lucide-react"
import { useTranslations } from "next-intl"

export function BaccoCpu() {
  const t = useTranslations("baccoCpu")

  const monitorKeys = [
    "tankTemperature",
    "temperatureAlerts",
    "lotHistory",
    "visualTracking",
  ] as const

  const monitorIcons = [Thermometer, Bell, Clock3, LineChart]

  const benefitKeys = [
    "smartAlerts",
    "lessManualWork",
    "fermentationHistory",
    "fullErpIntegration",
    "allWinerySizes",
  ] as const

  const benefitIcons = [Bell, GanttChartSquare, Database, ShieldCheck, Wifi]

  return (
    <section
      id="bacco-cpu"
      className="py-20 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,color-mix(in oklch, var(--primary) 8%, transparent),transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Card className="border-2 border-border/60 shadow-xl overflow-hidden mb-6">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/screenshots/bacco-cpu-monitoring-1.jpeg"
                  alt={t("gallery.main.alt")}
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              <Cpu className="h-3 w-3 mr-1" />
              {t("badge")}
            </Badge>

            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">{t("title")}</h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">{t("intro1")}</p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">{t("intro2")}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {monitorKeys.map((key, index) => {
                const Icon = monitorIcons[index]
                return (
                  <div key={key} className="flex gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(`monitoring.${key}`)}</p>
                  </div>
                )
              })}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>{t("decisionSupport")}</span>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-2 border-border/60 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-sm text-muted-foreground">{t("panel.title")}</p>
                    <h3 className="text-xl font-bold">{t("panel.subtitle")}</h3>
                  </div>
                  <Badge className="bg-green-600/10 text-green-700 hover:bg-green-600/20">
                    <FlaskConical className="h-3 w-3 mr-1" />
                    {t("panel.live")}
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="rounded-lg bg-muted/40 p-3">
                    <p className="text-xs text-muted-foreground mb-1">{t("panel.stats.activeTanks")}</p>
                    <p className="text-2xl font-bold text-primary">18</p>
                  </div>
                  <div className="rounded-lg bg-muted/40 p-3">
                    <p className="text-xs text-muted-foreground mb-1">{t("panel.stats.alerts")}</p>
                    <p className="text-2xl font-bold text-amber-600">2</p>
                  </div>
                  <div className="rounded-lg bg-muted/40 p-3">
                    <p className="text-xs text-muted-foreground mb-1">{t("panel.stats.inRange")}</p>
                    <p className="text-2xl font-bold text-green-600">16</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="rounded-md border border-border/60 p-3 flex items-center justify-between">
                    <span className="text-sm">TQ-01</span>
                    <span className="text-sm font-semibold text-green-600">23.7 C</span>
                  </div>
                  <div className="rounded-md border border-amber-300/60 bg-amber-50/40 p-3 flex items-center justify-between dark:bg-amber-950/20">
                    <span className="text-sm">TQ-07</span>
                    <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">27.4 C</span>
                  </div>
                  <div className="rounded-md border border-border/60 p-3 flex items-center justify-between">
                    <span className="text-sm">TQ-12</span>
                    <span className="text-sm font-semibold text-green-600">24.1 C</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/screenshots/bacco-cpu-monitoring-2.jpeg"
                    alt={t("gallery.secondary1.alt")}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-sm mb-1">{t("gallery.secondary1.title")}</h4>
                  <p className="text-xs text-muted-foreground">{t("gallery.secondary1.description")}</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/screenshots/bacco-cpu-monitoring-3.jpeg"
                    alt={t("gallery.secondary2.alt")}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-sm mb-1">{t("gallery.secondary2.title")}</h4>
                  <p className="text-xs text-muted-foreground">{t("gallery.secondary2.description")}</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefitKeys.map((key, index) => {
                const Icon = benefitIcons[index]
                return (
                  <Card key={key} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">{t(`benefits.${key}.title`)}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{t(`benefits.${key}.description`)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{t("closing")}</p>
        </div>
      </div>
    </section>
  )
}
