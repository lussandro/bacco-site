"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Wine, Heart, Sparkles, GraduationCap, Clock, Rocket, BookOpen } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

const timeline = [
  { key: "nineties", icon: Code2, image: "/vintage-computer-1990s-retro-programming-dos-termi.jpg" },
  { key: "devops", icon: Rocket, image: "/cloud-computing-devops-servers-infrastructure-mode.jpg" },
  { key: "sommelier", icon: Wine, image: "/male-sommelier-professional-tasting-wine-elegant-r.jpg" },
  { key: "enology", icon: GraduationCap, image: "/enology-laboratory-wine-analysis-scientific-study.jpg" },
]

export function About() {
  const t = useTranslations("about")

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* História */}
          <div className="mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl blur-3xl opacity-50 -z-10" />

              <div className="relative bg-gradient-to-br from-background via-muted/20 to-background rounded-3xl p-8 lg:p-12 border-2 border-primary/10 shadow-xl">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <Badge className="text-base px-4 py-1.5 bg-primary/10 text-primary border-primary/30">
                      {t("history.badge")}
                    </Badge>
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Code2 className="h-10 w-10 text-primary" />
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {t("history.title")}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("history.subtitle")}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  {timeline.map((item) => {
                    const Icon = item.icon
                    return (
                      <Card
                        key={item.key}
                        className="p-6 bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
                      >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                        <div className="relative">
                          <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                            <Image
                              src={item.image}
                              alt={t(`history.timeline.${item.key}.title`)}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg">{t(`history.timeline.${item.key}.period`)}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">{t(`history.timeline.${item.key}.title`)}</p>
                          <p className="text-xs text-muted-foreground mt-2 italic">
                            {t(`history.timeline.${item.key}.description`)}
                          </p>
                        </div>
                      </Card>
                    )
                  })}
                </div>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-foreground/90" dangerouslySetInnerHTML={{ __html: t.raw("history.text.p1") }} />
                  <p className="text-foreground/90" dangerouslySetInnerHTML={{ __html: t.raw("history.text.p2") }} />
                  <p dangerouslySetInnerHTML={{ __html: t.raw("history.text.p3") }} />
                  <p dangerouslySetInnerHTML={{ __html: t.raw("history.text.p4") }} />
                  <p dangerouslySetInnerHTML={{ __html: t.raw("history.text.p5") }} />

                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 lg:p-8 my-8">
                    <div className="flex items-start gap-4">
                      <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p
                        className="text-foreground font-medium text-lg lg:text-xl leading-relaxed italic"
                        dangerouslySetInnerHTML={{ __html: t.raw("history.text.quote") }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Origem */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl blur-3xl opacity-50 -z-10" />

            <div className="relative bg-gradient-to-br from-background via-muted/20 to-background rounded-3xl p-8 lg:p-12 border-2 border-primary/10 shadow-xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <Badge className="text-base px-4 py-1.5 bg-primary/10 text-primary border-primary/30">
                    {t("origin.badge")}
                  </Badge>
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Wine className="h-10 w-10 text-primary" />
                  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {t("origin.title")}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("origin.subtitle")}</p>
              </div>

              <div className="space-y-8 text-lg leading-relaxed">
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/90 text-xl font-medium" dangerouslySetInnerHTML={{ __html: t.raw("origin.text.p1") }} />
                  <p className="text-foreground/90" dangerouslySetInnerHTML={{ __html: t.raw("origin.text.p2") }} />
                  <p className="text-foreground/90" dangerouslySetInnerHTML={{ __html: t.raw("origin.text.p3") }} />
                  <p className="text-foreground/90" dangerouslySetInnerHTML={{ __html: t.raw("origin.text.p4") }} />
                </div>

                <Card className="p-8 lg:p-10 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl font-bold text-foreground mb-4">{t("origin.whyBacco.title")}</h3>
                      <p className="text-foreground text-lg leading-relaxed">{t("origin.whyBacco.description")}</p>
                    </div>
                  </div>
                </Card>

                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/90 text-xl font-semibold" dangerouslySetInnerHTML={{ __html: t.raw("origin.text.extra1") }} />
                  <p className="text-foreground/90" dangerouslySetInnerHTML={{ __html: t.raw("origin.text.extra2") }} />
                </div>
              </div>
            </div>
          </div>

          {/* Final */}
          <div className="mt-12">
            <Card className="p-8 lg:p-10 bg-gradient-to-br from-primary/10 via-background to-background border-primary/20">
              <div className="flex items-start gap-6">
                <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">{t("origin.text.extra1")}</p>
                  <p className="text-lg font-semibold text-foreground leading-relaxed">{t("origin.text.extra2")}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

