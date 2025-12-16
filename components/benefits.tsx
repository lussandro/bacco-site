"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Clock, CheckCircle2, Shield } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: CheckCircle2,
      stat: "100%",
      label: "Rastreabilidade Total",
      description: "Do vinhedo à garrafa, rastreie cada etapa da produção",
    },
    {
      icon: Shield,
      stat: "Real-time",
      label: "Monitoramento em Tempo Real",
      description: "Alertas automáticos de temperatura, densidade e análises",
    },
    {
      icon: TrendingUp,
      stat: "360°",
      label: "Gestão Integrada",
      description: "Vinhedo, produção, laboratório e qualidade em um só lugar",
    },
    {
      icon: Clock,
      stat: "24/7",
      label: "Relatórios Inteligentes",
      description: "Dashboards e indicadores para tomada de decisão",
    },
  ]

  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">Por Que Escolher o Bacco?</h2>
          <p className="text-lg opacity-90 text-pretty">
            Transforme a gestão da sua vinícola com tecnologia de ponta e controle total da produção.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 lg:p-8 text-center bg-card">
              <div className="inline-flex h-16 w-16 rounded-full bg-primary/10 items-center justify-center mb-6">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{benefit.stat}</div>
              <div className="font-semibold text-lg mb-2">{benefit.label}</div>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
