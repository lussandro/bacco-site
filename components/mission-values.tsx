"use client"

import { Card } from "@/components/ui/card"
import { Target, Eye, Heart, Leaf, Users, Award, Lightbulb, Shield } from "lucide-react"
import { useTranslations } from "next-intl"

export function MissionValues() {
  const t = useTranslations("mission")

  return (
    <section id="missao-valores" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Missão e Visão */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Missão */}
            <Card className="p-8 lg:p-10 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-bold">{t("title")}</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">{t("text")}</p>
            </Card>

            {/* Visão */}
            <Card className="p-8 lg:p-10 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-secondary/20">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="font-serif text-3xl font-bold">{t("visionTitle")}</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">{t("visionText")}</p>
            </Card>
          </div>

          {/* Valores */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-primary" />
                <h2 className="font-serif text-3xl lg:text-4xl font-bold">{t("valuesTitle")}</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("valuesSubtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Paixão pelo Vinho */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{t("values.passion.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("values.passion.description")}</p>
              </Card>

              {/* Excelência Técnica */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{t("values.excellence.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("values.excellence.description")}</p>
              </Card>

              {/* Inovação Consciente */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{t("values.innovation.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("values.innovation.description")}</p>
              </Card>

              {/* Sustentabilidade */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{t("values.sustainability.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("values.sustainability.description")}</p>
              </Card>

              {/* Transparência */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{t("values.transparency.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("values.transparency.description")}</p>
              </Card>

              {/* Proximidade */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{t("values.proximity.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("values.proximity.description")}</p>
              </Card>

              {/* Evolução Contínua */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{t("values.evolution.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("values.evolution.description")}</p>
              </Card>

              {/* Acessibilidade */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{t("values.accessibility.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("values.accessibility.description")}</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
