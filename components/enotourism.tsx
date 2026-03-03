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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,color-mix(in oklch, var(--primary) 6%, transparent),transparent_50%)]" />

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
                <a href="https://staging.bacco-erp.com/reservar/vinicola-demo" target="_blank" rel="noopener noreferrer">
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
                src="/screenshots/enoturismo-reservas.png"
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

        {/* WhatsApp Chat Mockup */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Chat description */}
          <div>
            <Badge className="mb-4 bg-green-600/10 text-green-700 hover:bg-green-600/20">
              <Bot className="h-3 w-3 mr-1" />
              {t("chat.badge")}
            </Badge>
            <h3 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-balance">
              {t("chat.title")}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {t("chat.description")}
            </p>
          </div>

          {/* Right - Chat mockup */}
          <div className="relative">
            <Card className="border-2 border-border/50 shadow-2xl overflow-hidden max-w-md mx-auto">
              {/* WhatsApp header */}
              <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
                  🍷
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t("chat.botName")}</p>
                  <p className="text-green-200 text-xs">online</p>
                </div>
              </div>

              {/* Chat body */}
              <div className="bg-[#ECE5DD] p-4 space-y-3 min-h-[340px]">
                {/* Bot greeting */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-sm text-gray-800">{t("chat.messages.greeting")}</p>
                    <p className="text-[10px] text-gray-400 text-right mt-1">16:32</p>
                  </div>
                </div>

                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-sm text-gray-800">{t("chat.messages.userAsk")}</p>
                    <p className="text-[10px] text-gray-400 text-right mt-1">16:33 ✓✓</p>
                  </div>
                </div>

                {/* Bot experiences list */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-sm text-gray-800 mb-2">{t("chat.messages.experienceIntro")}</p>
                    <div className="space-y-1.5 text-sm text-gray-700">
                      <p>1. <strong>{t("chat.messages.exp1name")}</strong>: {t("chat.messages.exp1detail")}</p>
                      <p>2. <strong>{t("chat.messages.exp2name")}</strong>: {t("chat.messages.exp2detail")}</p>
                      <p>3. <strong>{t("chat.messages.exp3name")}</strong>: {t("chat.messages.exp3detail")}</p>
                    </div>
                    <p className="text-[10px] text-gray-400 text-right mt-1">16:33</p>
                  </div>
                </div>

                {/* User response */}
                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-sm text-gray-800">{t("chat.messages.userChoice")}</p>
                    <p className="text-[10px] text-gray-400 text-right mt-1">16:34 ✓✓</p>
                  </div>
                </div>

                {/* Bot confirmation */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-sm text-gray-800">{t("chat.messages.botConfirm")}</p>
                    <p className="text-[10px] text-gray-400 text-right mt-1">16:34</p>
                  </div>
                </div>
              </div>
            </Card>
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
