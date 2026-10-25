"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ExternalLink, Instagram, Wine } from "lucide-react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
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
  {
    key: "vinicolaPerico",
    logo: "/clients/vinicola-perico.png",
    // vinicolaperico.com.br está com certificado vencido; a loja oficial tem certificado válido
    website: "https://www.pericovinhos.com.br",
    instagram: "https://instagram.com/pericovinhos",
  },
  {
    key: "villaTriacca",
    // só o emblema: a marca horizontal fica ilegível no quadrado de 80px
    logo: "/clients/villa-triacca.png",
    website: "https://www.villatriacca.com.br",
    instagram: "https://instagram.com/villatriaccahotelvinicola",
  },
]

// Depoimentos enviados pelos clientes a pedido da Bacco (uso autorizado). Só em português:
// traduzir seria pôr palavras na boca de quem escreveu.
const testimonials = [
  {
    photo: "/depoimentos/depoimento-elcy-quinta-de-glaura.webp",
    alt: "Elcy Caldas, proprietária da Quinta de Glaura",
    author: "Elcy Caldas, proprietária da Quinta de Glaura",
    paragraphs: [
      "A minha trajetória para empreender tendo o vinhedo e o vinho como peça fundamental nessa engrenagem começa com o planejamento, nosso vinhedo existe há pouco menos de 5 anos, exatamente o tempo que tenho levado para me preparar para receber a expectativa das pessoas. Nesse planejamento com tantas abas abertas na minha cabeça não dei conta de gerenciar tantas planilhas.",
      "Antes de usar o Bacco ERP, a sensação era de que eu passava mais tempo apagando incêndio, juntando e atualizando planilha do que focando na qualidade do produto. Primeiro a busca foi sobre um sistema, depois descobri qual o nome desse sistema (ERP), até chegar no Bacco, centralizar os processos da produção às vendas em um só lugar, é ter o total controle dessa empresa que idealizei com muita paixão.",
      "A importância de entender das fases da videira não é suficiente, isso perpassa dos ajustes fiscais até o overbooking de um agendamento da sala de degustação. É preciso ressaltar que a assessoria direta, precisa, resolutiva e HUMANA do Bacco, são condições “sine qua non” para a minha inteira satisfação como cliente.",
    ],
  },
  {
    photo: "/depoimentos/depoimento-marcelo-casa-rozental.webp",
    alt: "Marcelo Rozental, produtor e enólogo da Casa Rozental, segurando um cacho de uva branca entre as folhas da videira",
    author: "Marcelo Rozental, produtor e enólogo da Casa Rozental Vinícola e Enoturismo, Secretário, Petrópolis (RJ)",
    paragraphs: [
      "Gerenciar todas as frentes de uma vinícola exige muita organização, e o Bacco ERP tem sido um pilar para a Casa Rozental. O módulo de controle de estoque é um destaque à parte: a facilidade de importar notas fiscais em XML para dar entrada e a baixa automática dos produtos ao utilizá-los ou vendê-los traz muita segurança para o dia a dia.",
      "Eventuais falhas de um sistema novo ocorrem, mas tornam-se irrelevantes frente ao atendimento impecável e imediato do Lussandro, que soluciona qualquer questão na hora. Recomendo para quem busca um software completo com uma equipe de suporte verdadeiramente comprometida.",
    ],
  },
]

export function Clients() {
  const t = useTranslations("clients")
  const locale = useLocale()

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

        {locale.startsWith("pt") && (
          <div className="max-w-5xl mx-auto mt-12 space-y-10">
            {testimonials.map((d) => (
              <figure key={d.author} className="grid sm:grid-cols-[180px_1fr] gap-6 items-start">
                <Image src={d.photo} alt={d.alt} width={480} height={600} className="w-40 sm:w-full h-auto rounded-lg" />
                <blockquote className="border-l-2 border-primary/40 pl-5">
                  {d.paragraphs.map((p, i) => (
                    <p key={i} className="text-base leading-relaxed mb-3">
                      {i === 0 && "“"}{p}{i === d.paragraphs.length - 1 && "”"}
                    </p>
                  ))}
                  <footer className="text-sm text-muted-foreground">{d.author}</footer>
                </blockquote>
              </figure>
            ))}
          </div>
        )}

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
