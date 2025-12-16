"use client"

import { Card } from "@/components/ui/card"
import {
  Grape,
  Sprout,
  ClipboardList,
  Beaker,
  FlaskConical,
  BarChart3,
  Thermometer,
  Package,
  Users,
  ShoppingCart,
  FileText,
  TrendingUp,
  Database,
  Wifi,
  QrCode,
  Receipt,
  CreditCard,
  Store,
  Brain,
  Calendar,
  Cloud,
  Wine,
  ShieldCheck,
  Building2,
} from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Grape,
      title: "Gestão de Vinhedos",
      description:
        "Controle completo de vinhedos e parcelas com informações detalhadas de variedades (65 pré-cadastradas), área plantada e histórico.",
    },
    {
      icon: Sprout,
      title: "Manejo dos Vinhedos",
      description: "Planeje e acompanhe todas as tarefas de manejo (42 tarefas padrão): poda, adubação, tratamentos e colheita.",
    },
    {
      icon: Brain,
      title: "IA: Calendário de Manejos Sugerido",
      description: "Inteligência Artificial sugere manejos baseados na região do vinhedo, clima e época do ano, otimizando sua produção.",
    },
    {
      icon: Cloud,
      title: "Clima & IA",
      description: "Análise climática inteligente com previsões e recomendações automáticas para proteção e otimização dos vinhedos.",
    },
    {
      icon: ClipboardList,
      title: "Recepção de Uvas",
      description:
        "Registre a recepção de uvas próprias e de terceiros com análises completas: BRIX, pH, acidez, temperatura e classificação.",
    },
    {
      icon: Package,
      title: "Lotes de Vinificação",
      description: "Gerencie lotes de produção com rastreabilidade total desde a entrada da uva até o produto final.",
    },
    {
      icon: FlaskConical,
      title: "Editor Visual de Fluxos",
      description: "Crie fluxos de vinificação personalizados com editor gráfico interativo (estilo N8N) para qualquer tipo de vinho.",
    },
    {
      icon: Brain,
      title: "IA de Vinificação",
      description: "Inteligência Artificial que sugere correções, adições de insumos e otimiza processos de vinificação baseado em análises.",
    },
    {
      icon: Thermometer,
      title: "Controle de Temperatura IoT",
      description: "Monitore temperatura e densidade do mosto em tempo real com integração RAPT Cloud e alertas automáticos.",
    },
    {
      icon: Beaker,
      title: "Análises Laboratoriais",
      description: "Controle e gestão completa de análises laboratoriais com histórico, rastreabilidade e laudos.",
    },
    {
      icon: BarChart3,
      title: "Dashboard Inteligente",
      description: "Visualize indicadores em tempo real: produção, alertas, análises pendentes, vendas e muito mais.",
    },
    {
      icon: Users,
      title: "Multi-tenant",
      description: "Arquitetura multi-tenant com isolamento completo de dados, ideal para SaaS e múltiplas vinícolas.",
    },
    {
      icon: ShoppingCart,
      title: "Gestão Comercial",
      description: "Vendas (orçamentos, pedidos, tabelas de preço), compras, clientes e fornecedores integrados.",
    },
    {
      icon: CreditCard,
      title: "Financeiro Completo",
      description: "Contas a pagar/receber, fluxo de caixa, controle financeiro completo integrado com vendas e compras.",
    },
    {
      icon: FileText,
      title: "Notas Fiscais",
      description: "Emissão de notas fiscais com integração Webmania, controle fiscal e compliance regulatório.",
    },
    {
      icon: Database,
      title: "SIVIBE",
      description: "Sistema de Informações Vinícolas e Bebidas - Declarações regulatorias (Lei 7.678/1988) com alertas de prazos.",
    },
    {
      icon: ShieldCheck,
      title: "ENVIN",
      description: "Módulo de compliance para declarações ENVIN, garantindo conformidade regulatória completa.",
    },
    {
      icon: Wine,
      title: "Enoturismo",
      description: "Módulo exclusivo para gestão de enoturismo: agendamentos, degustações, visitações, experiências e reservas.",
    },
    {
      icon: Building2,
      title: "Controle de Estoque",
      description: "Gestão completa de estoque com inventário, movimentações, insumos e controle de rotulagem.",
    },
    {
      icon: Store,
      title: "Estoque e Rotulagem",
      description: "Controle de estoque completo, movimentações, rotulagem e etiquetas QR para rastreabilidade.",
    },
    {
      icon: QrCode,
      title: "Rastreabilidade Total",
      description: "Rastreabilidade completa por lote, talhão, variedade e terroir desde o vinhedo até a garrafa.",
    },
    {
      icon: TrendingUp,
      title: "Relatórios e Analytics",
      description: "Relatórios completos de produção, vendas, financeiro e análises com exportação de dados.",
    },
  ]

  return (
    <section id="funcionalidades" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Funcionalidades Completas para Sua Vinícola
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Tudo que você precisa para gerenciar sua produção de vinhos, espumantes e sucos em um único sistema.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
