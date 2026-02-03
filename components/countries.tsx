"use client"

import { Globe, CheckCircle2, FileText, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"

interface CountryFeature {
  name: string
  description: string
}

interface Country {
  code: string
  flag: string
  features: CountryFeature[]
  primary?: boolean
}

export function Countries() {
  const t = useTranslations("countries")

  const countries: Country[] = [
    {
      code: "brazil",
      flag: "🇧🇷",
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
      features: [
        { name: "SENASA", description: t("items.argentina.features.senasa") },
        { name: t("items.argentina.features.localRegulationsLabel"), description: t("items.argentina.features.localRegulations") },
      ],
    },
    {
      code: "chile",
      flag: "🇨🇱",
      features: [
        { name: "SAG", description: t("items.chile.features.sag") },
        { name: t("items.chile.features.localRegulationsLabel"), description: t("items.chile.features.localRegulations") },
      ],
    },
    {
      code: "uruguay",
      flag: "🇺🇾",
      features: [
        { name: "INAVI", description: t("items.uruguay.features.inavi") },
        { name: t("items.uruguay.features.localRegulationsLabel"), description: t("items.uruguay.features.localRegulations") },
      ],
    },
    {
      code: "italy",
      flag: "🇮🇹",
      features: [
        { name: "DOC/DOCG", description: t("items.italy.features.docg") },
        { name: t("items.italy.features.euRegulationsLabel"), description: t("items.italy.features.euRegulations") },
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,19,0.05),transparent_70%)]" />

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
          {countries.slice(1).map((country) => (
            <Card
              key={country.code}
              className="border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{country.flag}</div>
                  <h3 className="text-lg font-bold">{t(`items.${country.code}.name`)}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {t(`items.${country.code}.description`)}
                </p>
                <div className="space-y-3">
                  {country.features.map((feature, idx) => (
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
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center gap-4 p-6 rounded-xl bg-muted/50 border border-border">
            <div className="text-4xl font-bold text-primary">5</div>
            <div className="text-sm text-muted-foreground">{t("stats.countries")}</div>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-xl bg-muted/50 border border-border">
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">{t("stats.compliance")}</div>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-xl bg-muted/50 border border-border">
            <div className="text-4xl font-bold text-primary">4</div>
            <div className="text-sm text-muted-foreground">{t("stats.languages")}</div>
          </div>
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
