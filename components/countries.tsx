"use client"

import { Globe, CheckCircle2, FileText, ShieldCheck, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useTranslations } from "next-intl"
import { routing } from "@/i18n/routing"

interface CountryFeature {
  name: string
  description: string
}

interface Country {
  code: string
  flag: string
  label: string
  description: string
  features: CountryFeature[]
  primary?: boolean
}

export function Countries() {
  const t = useTranslations("countries")
  const supportedLanguages = routing.locales.length
  const obligations = t.raw("obligations") as {
    badge: string
    title: string
    subtitle: string
    cta: { primary: string; secondary: string }
    tooltip: { label: string; coveredTitle: string; gapsTitle: string }
    columns: { country: string; obligations: string; status: string }
    status: { full: string; partial: string; planned: string }
    markets: Record<string, { label: string; status: "full" | "partial" | "planned"; items: string[]; gaps: string[] }>
  }
  const marketOrder = ["brazil", "argentina", "chile", "uruguay", "italy", "spain", "france", "germany"] as const
  const supportedCountries = marketOrder.length
  const countryFlags: Record<(typeof marketOrder)[number], string> = {
    brazil: "🇧🇷",
    argentina: "🇦🇷",
    chile: "🇨🇱",
    uruguay: "🇺🇾",
    italy: "🇮🇹",
    spain: "🇪🇸",
    france: "🇫🇷",
    germany: "🇩🇪",
  }

  const countries: Country[] = [
    {
      code: "brazil",
      flag: "🇧🇷",
      label: t("items.brazil.name"),
      description: t("items.brazil.description"),
      features: [
        { name: "SIVIBE", description: t("items.brazil.features.sivibe") },
        { name: "ENVIN", description: t("items.brazil.features.envin") },
        { name: "MAPA", description: t("items.brazil.features.mapa") },
        { name: "NF-e", description: t("items.brazil.features.nfe") },
      ],
      primary: true,
    },
    {
      code: "argentina",
      flag: "🇦🇷",
      label: t("items.argentina.name"),
      description: t("items.argentina.description"),
      features: [
        { name: "SENASA", description: t("items.argentina.features.senasa") },
        { name: t("items.argentina.features.localRegulationsLabel"), description: t("items.argentina.features.localRegulations") },
      ],
    },
    {
      code: "chile",
      flag: "🇨🇱",
      label: t("items.chile.name"),
      description: t("items.chile.description"),
      features: [
        { name: "SAG", description: t("items.chile.features.sag") },
        { name: t("items.chile.features.localRegulationsLabel"), description: t("items.chile.features.localRegulations") },
      ],
    },
    {
      code: "uruguay",
      flag: "🇺🇾",
      label: t("items.uruguay.name"),
      description: t("items.uruguay.description"),
      features: [
        { name: "INAVI", description: t("items.uruguay.features.inavi") },
        { name: t("items.uruguay.features.localRegulationsLabel"), description: t("items.uruguay.features.localRegulations") },
      ],
    },
    {
      code: "italy",
      flag: "🇮🇹",
      label: t("items.italy.name"),
      description: t("items.italy.description"),
      features: [
        { name: "DOC/DOCG", description: t("items.italy.features.docg") },
        { name: t("items.italy.features.euRegulationsLabel"), description: t("items.italy.features.euRegulations") },
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in oklch, var(--primary) 5%, transparent),transparent_70%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Globe className="h-6 w-6 text-primary" />
            <Badge className="text-base px-4 py-1.5 bg-primary/20 text-primary border-primary/30">
              {t("badge")}
            </Badge>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("subtitle")}
          </p>
        </div>

        {/* Featured Country - Brazil */}
        <div className="mb-12">
          <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="text-center lg:text-left flex-shrink-0">
                  <div className="text-8xl mb-4">{countries[0].flag}</div>
                  <h3 className="text-2xl font-bold mb-2">{t("items.brazil.name")}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {t("primary")}
                  </Badge>
                </div>
                <div className="flex-1 w-full">
                  <p className="text-muted-foreground mb-6 text-center lg:text-left">
                    {t("items.brazil.description")}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {countries[0].features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border/50"
                      >
                        <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          {idx < 2 ? (
                            <ShieldCheck className="h-5 w-5 text-primary" />
                          ) : (
                            <FileText className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{feature.name}</h4>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketOrder.slice(1).map((countryCode) => {
            const market = obligations.markets[countryCode]
            if (!market) return null
            const legacyCountry = countries.find((c) => c.code === countryCode)
            const features = legacyCountry?.features ?? market.items.map((item) => ({ name: item, description: item }))
            const description =
              legacyCountry?.description ??
              `${obligations.columns.status}: ${obligations.status[market.status]}`

            return (
            <Card
              key={countryCode}
              className="border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{countryFlags[countryCode]}</div>
                  <h3 className="text-lg font-bold">{market.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {description}
                </p>
                <div className="space-y-3">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-sm">{feature.name}</span>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center gap-4 p-6 rounded-xl bg-muted/50 border border-border">
            <div className="text-4xl font-bold text-primary">{supportedCountries}</div>
            <div className="text-sm text-muted-foreground">{t("stats.countries")}</div>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-xl bg-muted/50 border border-border">
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">{t("stats.compliance")}</div>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-xl bg-muted/50 border border-border">
            <div className="text-4xl font-bold text-primary">{supportedLanguages}</div>
            <div className="text-sm text-muted-foreground">{t("stats.languages")}</div>
          </div>
        </div>

        {/* Obligations Matrix */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <FileText className="h-5 w-5 text-primary" />
              <Badge className="bg-primary/10 text-primary border-primary/20">{obligations.badge}</Badge>
            </div>
            <h3 className="text-3xl font-serif font-bold mb-3">{obligations.title}</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">{obligations.subtitle}</p>
          </div>

          <Card className="hidden lg:block border-2 border-border">
            <CardContent className="p-0">
              <div className="grid grid-cols-12 bg-muted/40 border-b border-border text-sm font-semibold">
                <div className="col-span-3 p-4">{obligations.columns.country}</div>
                <div className="col-span-7 p-4">{obligations.columns.obligations}</div>
                <div className="col-span-2 p-4">{obligations.columns.status}</div>
              </div>
              {marketOrder.map((key) => {
                const market = obligations.markets[key]
                if (!market) return null
                const statusClass =
                  market.status === "full"
                    ? "bg-green-500/10 text-green-700 border-green-500/20"
                    : market.status === "partial"
                      ? "bg-amber-500/10 text-amber-700 border-amber-500/20"
                      : "bg-blue-500/10 text-blue-700 border-blue-500/20"
                return (
                  <div key={key} className="grid grid-cols-12 border-b border-border last:border-b-0">
                    <div className="col-span-3 p-4 font-semibold">{market.label}</div>
                    <div className="col-span-7 p-4 text-sm text-muted-foreground">{market.items.join(" • ")}</div>
                    <div className="col-span-2 p-4">
                      <div className="inline-flex items-center gap-2">
                        <span className={`inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium ${statusClass}`}>
                          {obligations.status[market.status]}
                        </span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              type="button"
                              aria-label={obligations.tooltip.label}
                              className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-border bg-background text-muted-foreground hover:text-foreground"
                            >
                              <Info className="h-3.5 w-3.5" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="max-w-sm p-3 text-left">
                            <div className="space-y-2">
                              <p className="font-semibold text-sm">{market.label}</p>
                              <div>
                                <p className="text-[11px] uppercase tracking-wide opacity-80">{obligations.tooltip.coveredTitle}</p>
                                <p className="text-xs">{market.items.join(" • ")}</p>
                              </div>
                              <div>
                                <p className="text-[11px] uppercase tracking-wide opacity-80">{obligations.tooltip.gapsTitle}</p>
                                <p className="text-xs">{market.gaps.join(" • ")}</p>
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4 lg:hidden">
            {marketOrder.map((key) => {
              const market = obligations.markets[key]
              if (!market) return null
              const statusClass =
                market.status === "full"
                  ? "bg-green-500/10 text-green-700 border-green-500/20"
                  : market.status === "partial"
                    ? "bg-amber-500/10 text-amber-700 border-amber-500/20"
                    : "bg-blue-500/10 text-blue-700 border-blue-500/20"
              return (
                <Card key={key} className="border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{market.label}</h4>
                      <div className="inline-flex items-center gap-2">
                        <span className={`inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium ${statusClass}`}>
                          {obligations.status[market.status]}
                        </span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              type="button"
                              aria-label={obligations.tooltip.label}
                              className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-border bg-background text-muted-foreground hover:text-foreground"
                            >
                              <Info className="h-3.5 w-3.5" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-sm p-3 text-left">
                            <div className="space-y-2">
                              <p className="font-semibold text-sm">{market.label}</p>
                              <div>
                                <p className="text-[11px] uppercase tracking-wide opacity-80">{obligations.tooltip.coveredTitle}</p>
                                <p className="text-xs">{market.items.join(" • ")}</p>
                              </div>
                              <div>
                                <p className="text-[11px] uppercase tracking-wide opacity-80">{obligations.tooltip.gapsTitle}</p>
                                <p className="text-xs">{market.gaps.join(" • ")}</p>
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{market.items.join(" • ")}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button asChild size="lg">
            <a href="#contato">{obligations.cta.primary}</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#processo">{obligations.cta.secondary}</a>
          </Button>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("cta")}
          </p>
        </div>
      </div>
    </section>
  )
}
