"use client"

import { Card } from "@/components/ui/card"

const images = [
  "/vineyard-with-grape-vines.jpg",
  "/wine-barrels-in-cellar.jpg",
  "/wine-bottling-line.jpg",
  "/wine-bottles-ready-for-distribution.jpg",
]

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Gestão do Vinhedo",
      description:
        "Controle completo de vinhedos e parcelas, com registro de variedades, área plantada, espaçamento e histórico de manejo. Planeje e acompanhe todas as atividades do campo.",
      image: images[0],
    },
    {
      number: "02",
      title: "Colheita e Recepção",
      description:
        "Registre a entrada de uvas próprias e de terceiros com análises completas: BRIX, pH, acidez total e temperatura. Rastreabilidade desde a origem.",
      image: images[1],
    },
    {
      number: "03",
      title: "Vinificação",
      description:
        "Acompanhe cada etapa do processo: desengace, prensagem, fermentação, trasfega. Controle temperatura e densidade em tempo real com alertas automáticos.",
      image: images[2],
    },
    {
      number: "04",
      title: "Engarrafamento e Distribuição",
      description:
        "Gestão completa de lotes, análises laboratoriais e rastreabilidade até o produto final. Controle de qualidade em cada etapa.",
      image: images[3],
    },
  ]

  return (
    <section id="processo" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">Do Vinhedo à Garrafa</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Acompanhe todo o processo de produção com controle total e rastreabilidade completa em cada etapa.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="inline-block">
                  <span className="font-serif text-6xl lg:text-7xl font-bold text-primary/20">{step.number}</span>
                </div>
                <h3 className="font-serif text-3xl lg:text-4xl font-bold">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <Card className="overflow-hidden">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="w-full aspect-[3/2] object-cover"
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
