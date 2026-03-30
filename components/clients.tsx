"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ExternalLink, Wine } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

const clients = [
  {
    key: "quintaDeGlaura",
    logo: "/clients/quinta-de-glaura.jpeg",
    website: "https://quintadeglaura.com.br",
  },
]

export function Clients() {
  const t = useTranslations("clients")

  return (
    <section id="clientes" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-muted/40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Wine className="h-5 w-5 text-primary" />
            <Badge className="text-base px-4 py-1.5 bg-primary/10 text-primary border-primary/30">
              {t("badge")}
            </Badge>
            <Wine className="h-5 w-5 text-primary" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("subtitle")}
          </p>
        </div>

        {/* Client cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {clients.map((client) => (
              <Card
                key={client.key}
                className="group border-2 border-primary/15 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl overflow-hidden bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  {/* Logo area */}
                  <div className="relative bg-gradient-to-br from-muted/50 to-muted/30 p-8 flex items-center justify-center min-h-[220px] border-b border-primary/10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary)_0.5px,transparent_0.5px)] bg-[length:24px_24px] opacity-[0.03]" />
                    <div className="relative w-48 h-48 group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={client.logo}
                        alt={t(`items.${client.key}.name`)}
                        fill
                        className="object-contain drop-shadow-md"
                      />
                    </div>
                  </div>

                  {/* Info area */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {t(`items.${client.key}.name`)}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {t(`items.${client.key}.description`)}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 text-primary/70 flex-shrink-0" />
                      <span>{t(`items.${client.key}.location`)}</span>
                    </div>

                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="border-b border-primary/30 group-hover/link:border-primary transition-colors">
                        {t("visitWebsite")}
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust indicator */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground italic">
            {t("trustText")}
          </p>
        </div>
      </div>
    </section>
  )
}
