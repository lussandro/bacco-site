"use client"

import {
  Workflow, Zap, Link2, BarChart3, Globe, Settings, Award,
  Sparkles, Brain, Layers, Map, MessageCircle, ShieldCheck, CheckCircle2,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"

const mainKeys = ["visualFlow", "ai", "integrated", "traceability", "brazilian", "architecture"] as const
const mainIcons = [Workflow, Zap, Link2, BarChart3, Globe, Settings]

const pioneerCards = ["unique", "editor", "unification", "aiModules"] as const
const pioneerIcons = [Award, Workflow, Link2, Brain]

const pitchKeys = [
  "vertical", "endToEnd", "modular", "multiCountry",
  "parcelMap", "operationalAI", "omnichannel", "governance",
] as const
const pitchIcons = [
  Layers, Link2, Settings, Globe,
  Map, Brain, MessageCircle, ShieldCheck,
]

const recentKeys = [
  "polygonMap", "productivity", "compliance", "vinificationOS", "ecommerce",
] as const

export function Differentials() {
  const t = useTranslations("differentials")

  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-base px-4 py-1.5">{t("badge")}</Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">{t("title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("subtitle")}</p>
        </div>

        {/* Diferenciais técnicos existentes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainKeys.map((key, index) => {
            const Icon = mainIcons[index]
            const highlights = t.raw(`items.${key}.highlights`) as string[]
            return (
              <Card key={key} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="mt-1">
                      {t(`items.${key}.badge`)}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-balance">{t(`items.${key}.title`)}</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{t(`items.${key}.description`)}</p>

                  <ul className="space-y-2">
                    {highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-pretty">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Diferenciais comerciais do pitch */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-base px-4 py-1.5 bg-primary/10 text-primary border-primary/30">
              {t("pitch.badge")}
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-balance">
              {t("pitch.title")}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("pitch.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pitchKeys.map((key, index) => {
              const Icon = pitchIcons[index]
              return (
                <Card key={key} className="border hover:border-primary/40 transition-all duration-300 hover:shadow-md group">
                  <CardContent className="p-5">
                    <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">{t(`pitch.items.${key}.title`)}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(`pitch.items.${key}.description`)}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Entregas recentes com impacto comercial */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <Badge className="mb-4 text-base px-4 py-1.5 bg-green-600/10 text-green-700 border-green-600/30">
              {t("recent.badge")}
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-balance">
              {t("recent.title")}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentKeys.map((key) => (
              <Card key={key} className="border border-green-600/20 bg-green-600/5 hover:border-green-600/40 transition-all">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">{t(`recent.items.${key}.title`)}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t(`recent.items.${key}.description`)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Por que somos pioneiros */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl blur-3xl opacity-50 -z-10" />

          <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 lg:p-12 border-2 border-primary/20 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                  <Badge className="text-base px-4 py-1.5 bg-primary/20 text-primary border-primary/30">
                    {t("pioneers.badge")}
                  </Badge>
                  <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {t("pioneers.title")}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("pioneers.subtitle")}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {pioneerCards.map((key, index) => {
                  const Icon = pioneerIcons[index]
                  return (
                    <Card
                      key={key}
                      className="border-2 border-primary/30 bg-background/80 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="h-7 w-7 text-primary" />
                          </div>
                          <div className="flex-1">
                            <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary">
                              {t(`pioneers.cards.${key}.badge`)}
                            </Badge>
                            <h4 className="text-lg font-bold mb-2">{t(`pioneers.cards.${key}.title`)}</h4>
                            <p
                              className="text-sm text-muted-foreground leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: t.raw(`pioneers.cards.${key}.description`) }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
