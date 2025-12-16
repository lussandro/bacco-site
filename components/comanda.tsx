"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  CreditCard,
  Users,
  Receipt,
  QrCode,
  Table,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"
import Image from "next/image"

export function Comanda() {
  const comandaFeatures = [
    {
      icon: Table,
      title: "Gestão de Mesas",
      description: "Controle completo de mesas, ocupação, união e divisão de mesas para restaurantes e enoturismo.",
    },
    {
      icon: ShoppingCart,
      title: "Comandas Digitais",
      description: "Sistema completo de comandas com múltiplos itens, serviços e controle de status em tempo real.",
    },
    {
      icon: CreditCard,
      title: "Múltiplas Formas de Pagamento",
      description: "Dinheiro, cartão, PIX, integração com máquinas de cartão e controle de troco automático.",
    },
    {
      icon: Receipt,
      title: "Gestão de Caixa",
      description: "Abertura e fechamento de caixa, controle de sangria, relatórios de vendas e fechamento diário.",
    },
    {
      icon: Users,
      title: "Clientes e Histórico",
      description: "Cadastro de clientes, histórico de compras e fidelidade integrado com o módulo comercial.",
    },
    {
      icon: TrendingUp,
      title: "Relatórios em Tempo Real",
      description: "Dashboard com vendas do dia, produtos mais vendidos, ticket médio e análise de desempenho.",
    },
  ]

  return (
    <section
      id="comanda"
      className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
    >
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left side - Content */}
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              <ShoppingCart className="h-3 w-3 mr-1" />
              Bacco-Comanda
            </Badge>

            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
              PDV Completo para Enoturismo e Restaurantes
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              O <strong>Bacco-Comanda</strong> é um sistema de ponto de venda (PDV) completo e integrado ao Bacco ERP,
              desenvolvido especificamente para vinícolas, restaurantes e estabelecimentos de enoturismo. Gerencie
              mesas, comandas, pagamentos e vendas de forma simples e eficiente.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {comandaFeatures.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="outline" asChild>
                <a href="https://staging.bacco-erp.com" target="_blank" rel="noopener noreferrer">
                  Ver Demonstração
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Integrado ao ERP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Interface intuitiva</span>
              </div>
            </div>
          </div>

          {/* Right side - Screenshot */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border/50 ring-1 ring-primary/10">
              <Image
                src="/screenshots/pdv-caixa-aberto.png"
                alt="Bacco-Comanda PDV"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Screenshots Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              <ShoppingCart className="h-3 w-3 mr-1" />
              Bacco-Comanda em Ação
            </Badge>
            <h3 className="font-serif text-3xl lg:text-4xl font-bold mb-4">Interface Moderna e Funcional</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sistema completo de PDV com gestão de mesas, comandas e pagamentos integrado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-video">
                <Image
                  src="/screenshots/pdv-comanda.png"
                  alt="Tela de abertura de caixa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-2">Abertura de Caixa</h4>
                <p className="text-sm text-muted-foreground">
                  Controle completo de abertura e fechamento de caixa com valores iniciais
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-video">
                <Image
                  src="/screenshots/pdv-mesas.png"
                  alt="Gestão de mesas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-2">Gestão de Mesas</h4>
                <p className="text-sm text-muted-foreground">
                  Visualize e gerencie todas as mesas, comandas abertas e status de ocupação
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

