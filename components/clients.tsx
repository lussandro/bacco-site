"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ExternalLink, Instagram, Wine } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { trackEvent } from "@/lib/analytics"

const clients = [
  {
    key: "quintaDeGlaura",
    logo: "/clients/quinta-de-glaura.jpeg",
    website: "https://quintadeglaura.com.br",
  },
  {
    key: "casaRozental",
    logo: "/clients/casa-rozental.jpeg",
    instagram: "https://instagram.com/casarozental",
    logoClass: "w-64 h-48",
  },
  {
    key: "vinicolaRomera",
    logo: "/clients/vinicola-romera.jpeg",
    instagram: "https://instagram.com/vinicolaromera",
    logoClass: "w-44 h-44 rounded-lg overflow-hidden",
  },
  {
    key: "valeDoGongo",
    logo: "/clients/vale-do-gongo.png",
    // o apex sem www serve certificado autoassinado — o navegador barra
    website: "https://www.valedogongo.com.br",
    instagram: "https://instagram.com/valedogongo",
    logoClass: "w-44 h-44",
  },
  {
    key: "bodegaDonValentinCenci",
    logo: "/clients/bodega-dom-valentin-cenci.png",
    instagram: "https://instagram.com/bodegadomvalentincenci",
    logoClass: "w-56 h-24",
  },
  {
    key: "estanciaChrysiana",
    logo: "/clients/estancia-chrysiana.png",
    instagram: "https://instagram.com/estanciachrysianavinicola",
    logoClass: "w-44 h-44 rounded-lg overflow-hidden",
    comingSoon: true,
  },
  {
    key: "casaDas7Evas",
    logo: "/clients/casa-7-evas.png",
    instagram: "https://instagram.com/casa7evas",
    logoClass: "w-44 h-44 rounded-lg overflow-hidden",
  },
  {
    key: "quintaDaNeve",
    logo: "/clients/quinta-da-neve.png",
    website: "https://quintadaneve.com.br",
    instagram: "https://instagram.com/quintadaneve",
    logoClass: "w-56 h-24",
    // a marca só existe em branco — o site da vinícola é escuro inteiro
    logoBg: "bg-primary",
  },
  {
    key: "goyah",
    logo: "/clients/goyah.png",
    website: "https://goyahvinhos.com.br",
    instagram: "https://instagram.com/goyahvinhos",
    logoClass: "w-36 h-48",
  },
]

export function Clients() {
  const t = useTranslations("clients")

  return (
    <section id="clientes" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-muted/40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-10">
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

        {/* Client cards: compactos, logo + nome + cidade + links */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client) => (
            <Card key={client.key} className="border hover:border-primary/40 transition-colors p-0 gap-0">
              <CardContent className="p-4 flex items-center gap-4">
                <div className={`relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden ${client.logoBg ?? "bg-muted/40"}`}>
                  <Image src={client.logo} alt={t(`items.${client.key}.name`)} fill className="object-contain p-1.5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg font-bold leading-tight">
                    {t(`items.${client.key}.name`)}
                    {client.comingSoon && (
                      <Badge className="ml-2 align-middle text-[10px] bg-primary/90 text-primary-foreground border-0">{t("comingSoon")}</Badge>
                    )}
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3.5 w-3.5 text-primary/70 flex-shrink-0" />
                    {t(`items.${client.key}.location`)}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    {client.website && (
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t("visitWebsite")}: ${t(`items.${client.key}.name`)}`}
                        className="text-primary hover:text-primary/70"
                        onClick={() => trackEvent('client_click', { client_name: client.key, link_type: 'website' })}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {client.instagram && (
                      <a
                        href={client.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`@${client.instagram.split("/").pop()}`}
                        className="text-primary hover:text-primary/70"
                        onClick={() => trackEvent('client_click', { client_name: client.key, link_type: 'instagram' })}
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            {t("trustText")}
          </p>
        </div>
      </div>
    </section>
  )
}
