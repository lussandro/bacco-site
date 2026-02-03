"use client"

import { Globe, Languages, CheckCircle2, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"

export function Internationalization() {
  const t = useTranslations("internationalization")

  const languages = [
    { code: "pt-BR", name: "Português (Brasil)", flag: "🇧🇷", native: true },
    { code: "en-US", name: "English (US)", flag: "🇺🇸", native: false },
    { code: "es-ES", name: "Español (España)", flag: "🇪🇸", native: false },
    { code: "it-IT", name: "Italiano (Italia)", flag: "🇮🇹", native: false },
  ]

  const benefits = t.raw("benefits") as string[]

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {languages.map((lang) => (
            <Card
              key={lang.code}
              className={`border-2 transition-all duration-300 hover:shadow-lg ${
                lang.native
                  ? "border-primary/50 bg-primary/5 hover:border-primary"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">{lang.flag}</div>
                <h3 className="text-lg font-bold mb-2">{lang.name}</h3>
                {lang.native && (
                  <Badge variant="secondary" className="text-xs">
                    {t("native")}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Languages className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t("professional.title")}</h3>
                  <p className="text-muted-foreground">{t("professional.description")}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-pretty">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-border hover:border-primary/30 transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t("global.title")}</h3>
                  <p className="text-muted-foreground">{t("global.description")}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">{t("global.languages")}</div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">{t("global.translated")}</div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground">{t("global.regions")}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("cta")}
          </p>
        </div>
      </div>
    </section>
  )
}
