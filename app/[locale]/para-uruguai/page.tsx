"use client"

import { Wine, MapPin, Grape, Shield, FileCheck, Building2, Check, ArrowRight, Globe, Leaf, Mountain, Sun, Database } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ParaUruguai() {
  const t = useTranslations("uruguay")

  const complianceItems = [
    { key: "inavi", icon: Database },
    { key: "mgap", icon: FileCheck },
    { key: "dgi", icon: Building2 },
  ]

  const regionItems = ["canelones", "montevideo", "maldonado", "colonia"]

  const grapeItems = ["tannat", "albarino", "petitVerdot", "cabernetFranc", "merlot", "sauvignonBlanc", "marselan", "pinotNoir"]

  const integrationItems = ["facturacion", "dgi", "exportacion", "whatsapp"]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Wine className="h-8 w-8 text-primary" />
            <span className="font-serif text-2xl font-bold">Bacco</span>
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t("back")}
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600/10 via-blue-600/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 text-base px-4 py-1.5 bg-blue-600 text-white">
                {t("hero.badge")}
              </Badge>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-6 text-balance">
                {t("hero.title")}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="https://staging.bacco-erp.com" target="_blank" rel="noopener noreferrer">
                    {t("hero.ctaDemo")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#funcionalidades">
                    {t("hero.ctaFeatures")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base px-4 py-1.5">
                <Shield className="mr-2 h-4 w-4" />
                {t("compliance.badge")}
              </Badge>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
                {t("compliance.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                {t("compliance.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {complianceItems.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.key} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="h-14 w-14 rounded-xl bg-blue-600/10 flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{t(`compliance.items.${item.key}.title`)}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(`compliance.items.${item.key}.description`)}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600/10 via-blue-600/5 to-blue-600/10 rounded-2xl p-8 border border-blue-600/20">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{t("compliance.highlight.title")}</h4>
                  <p className="text-muted-foreground">{t("compliance.highlight.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wine Regions Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base px-4 py-1.5">
                <MapPin className="mr-2 h-4 w-4" />
                {t("regions.badge")}
              </Badge>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
                {t("regions.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                {t("regions.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {regionItems.map((region) => (
                <Card key={region} className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mountain className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">{t(`regions.items.${region}.name`)}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {t(`regions.items.${region}.description`)}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {(t.raw(`regions.items.${region}.grapes`) as string[]).map((grape: string, idx: number) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {grape}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Grape Varieties Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base px-4 py-1.5">
                <Grape className="mr-2 h-4 w-4" />
                {t("grapes.badge")}
              </Badge>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
                {t("grapes.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                {t("grapes.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {grapeItems.map((grape) => (
                <Card key={grape} className="border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-4 text-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Leaf className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{t(`grapes.items.${grape}.name`)}</h3>
                    <p className="text-xs text-muted-foreground">{t(`grapes.items.${grape}.type`)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">{t("grapes.total")}</p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">35+</div>
                  <div className="text-sm text-muted-foreground">{t("grapes.stats.varieties")}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">38</div>
                  <div className="text-sm text-muted-foreground">{t("grapes.stats.tasks")}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base px-4 py-1.5">
                <Globe className="mr-2 h-4 w-4" />
                {t("integrations.badge")}
              </Badge>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
                {t("integrations.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                {t("integrations.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrationItems.map((item) => (
                <Card key={item} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-4">{t(`integrations.items.${item}.badge`)}</Badge>
                    <h3 className="text-lg font-bold mb-2">{t(`integrations.items.${item}.title`)}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t(`integrations.items.${item}.description`)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600/10 via-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
                {t("cta.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                {t("cta.subtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-600" />
                  <span>{t("cta.check1")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-600" />
                  <span>{t("cta.check2")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-blue-600" />
                  <span>{t("cta.check3")}</span>
                </div>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="https://staging.bacco-erp.com" target="_blank" rel="noopener noreferrer">
                  {t("cta.button")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-4 lg:px-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Bacco ERP. {t("footer.rights")}</p>
        </div>
      </footer>
    </div>
  )
}
