"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Zap, Globe, Shield, Brain, Workflow, Smartphone, DollarSign } from "lucide-react"
import { useTranslations } from "next-intl"

const entries = [
  { key: "specialization", icon: Globe },
  { key: "ai", icon: Brain },
  { key: "visualEditor", icon: Workflow },
  { key: "compliance", icon: Shield },
  { key: "enotourism", icon: Smartphone },
  { key: "mobileApps", icon: Smartphone },
  { key: "support", icon: Globe },
  { key: "technology", icon: Zap },
  { key: "cost", icon: DollarSign },
  { key: "traceability", icon: Shield },
  { key: "vineyardManagement", icon: Globe },
  { key: "integration", icon: Workflow },
] as const

export function Comparison() {
  const t = useTranslations("comparison")

  return (
    <section id="comparacao" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 text-base px-4 py-1.5 bg-primary/10 text-primary hover:bg-primary/20">
            {t("badge")}
          </Badge>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">{t("title")}</h2>
          <p className="text-lg text-muted-foreground text-pretty">{t("subtitle")}</p>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <Card className="overflow-hidden border-2">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-4 font-semibold">{t("feature")}</th>
                    <th className="text-center p-4 font-semibold min-w-[120px]">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-primary font-bold">{t("bacco")}</span>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {t("baccoBadge")}
                          </Badge>
                        </div>
                      </div>
                    </th>
                    <th className="text-center p-4 font-semibold min-w-[120px]">
                      <div className="flex flex-col items-center gap-2">
                        <span>{t("competitors")}</span>
                        <span className="text-xs text-muted-foreground font-normal">{t("competitorsList")}</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((entry) => {
                    const Icon = entry.icon
                    const item = t.raw(`items.${entry.key}`) as any
                    const baccoVal = item?.bacco ?? true
                    const compVal = item?.competitors ?? false
                    const competitorsLabel =
                      compVal === true
                        ? t("available")
                        : compVal === false
                          ? t("notAvailable")
                          : compVal === "Parcial"
                            ? t("partial")
                            : compVal === "Variável"
                              ? t("variable")
                              : compVal === "Alto"
                                ? t("high")
                                : compVal === "Genérico"
                                  ? t("generic")
                                  : compVal
                    return (
                      <tr key={entry.key} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold mb-1">{item.feature}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                            <Badge variant="outline" className="mt-2 text-xs">
                              {item.category}
                            </Badge>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        {baccoVal === true ? (
                          <div className="flex flex-col items-center gap-2">
                            <Check className="h-6 w-6 text-green-600" />
                            <span className="text-sm font-medium text-green-700 dark:text-green-400">
                              {t("available")}
                            </span>
                          </div>
                        ) : (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {compVal === true ? (
                          <div className="flex flex-col items-center gap-2">
                            <Check className="h-6 w-6 text-green-600" />
                            <span className="text-sm text-muted-foreground">{t("available")}</span>
                          </div>
                        ) : compVal === false ? (
                          <div className="flex flex-col items-center gap-2">
                            <X className="h-6 w-6 text-red-500" />
                            <span className="text-sm font-medium text-red-600 dark:text-red-400">{t("notAvailable")}</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-6 w-6 rounded-full border-2 border-amber-500 flex items-center justify-center">
                              <div className="h-2 w-2 rounded-full bg-amber-500" />
                            </div>
                            <span className="text-sm font-medium text-amber-600 dark:text-amber-400">{competitorsLabel}</span>
                          </div>
                        )}
                      </td>
                    </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("highlights.ai.title")}</h3>
            </div>
            <p className="text-muted-foreground">
              {t("highlights.ai.description")}
            </p>
          </Card>

          <Card className="p-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("highlights.compliance.title")}</h3>
            </div>
            <p className="text-muted-foreground">
              {t("highlights.compliance.description")}
            </p>
          </Card>

          <Card className="p-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("highlights.enotourism.title")}</h3>
            </div>
            <p className="text-muted-foreground">
              {t("highlights.enotourism.description")}
            </p>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-8 lg:p-12 border-2 border-primary/20 text-center">
          <h3 className="text-3xl font-serif font-bold mb-4 text-balance">
            {t("cta.title")}
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
            {t("cta.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>{t("cta.check1")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>{t("cta.check2")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>{t("cta.check3")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>{t("cta.check4")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

