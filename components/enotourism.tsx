"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Wine,
  Calendar,
  MessageCircle,
  Globe,
  Users,
  CreditCard,
  CheckCircle2,
  ExternalLink,
  Bot,
} from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function Enotourism() {
  const t = useTranslations("enotourism")

  const featureKeys = [
    "booking",
    "whatsappBot",
    "publicPage",
  ] as const

  const featureIcons = [Calendar, Bot, Globe]

  const highlightKeys = [
    "experiences",
    "payments",
    "capacity",
  ] as const

  const highlightIcons = [Wine, CreditCard, Users]

  return (
    <section
      id="enoturismo"
      className="py-20 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(139,69,19,0.06),transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              <Wine className="h-3 w-3 mr-1" />
              {t("badge")}
            </Badge>

            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
              {t("title")}
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              {t("description")}
            </p>

            {/* Main features */}
            <div className="space-y-5 mb-8">
              {featureKeys.map((key, index) => {
                const Icon = featureIcons[index]
                return (
                  <div key={key} className="flex gap-4">
                    <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t(`features.${key}.title`)}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`features.${key}.description`)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#contato">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {t("cta")}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://staging.bacco-erp.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {t("ctaDemo")}
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Screenshot */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border/50 ring-1 ring-primary/10">
              <Image
                src="/screenshots/17-enoturismo-reservas.png"
                alt={t("imageAlt")}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-background rounded-xl shadow-lg border border-border/50 p-4 max-w-[220px]">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold">{t("floatingCard.title")}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t("floatingCard.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {highlightKeys.map((key, index) => {
            const Icon = highlightIcons[index]
            return (
              <Card
                key={key}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t(`highlights.${key}.title`)}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`highlights.${key}.description`)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>{t(`highlights.${key}.detail`)}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
