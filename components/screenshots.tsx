"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const screenshots = [
  {
    id: "dashboard",
    title: "Dashboard",
    description:
      "Visão completa da sua operação com métricas em tempo real, gráficos de atividades e status de produção",
    image: "/screenshots/dashboard.png",
  },
  {
    id: "vinhedos",
    title: "Gestão de Vinhedos",
    description: "Controle completo de vinhedos e parcelas com informações detalhadas de área, solo e irrigação",
    image: "/screenshots/vinhedos.png",
  },
  {
    id: "calendario-ia",
    title: "Calendário de Manejos com IA",
    description: "Inteligência Artificial sugere manejos baseados na região do vinhedo, com alertas e recomendações automáticas",
    image: "/screenshots/11-calendario-manejos-ia.png",
  },
  {
    id: "fluxos",
    title: "Fluxos de Vinificação",
    description: "Editor visual de fluxos de vinificação com criação de processos personalizados para qualquer tipo de vinho",
    image: "/screenshots/fluxos-vinificacao.png",
  },
  {
    id: "lotes",
    title: "Lotes em Produção",
    description: "Acompanhamento completo de lotes de vinificação com status, análises e histórico detalhado",
    image: "/screenshots/10-lotes-producao.png",
  },
  {
    id: "pdv",
    title: "Bacco-Comanda (PDV)",
    description: "Sistema completo de ponto de venda com gestão de mesas, comandas e pagamentos para enoturismo",
    image: "/screenshots/pdv-caixa-aberto.png",
  },
  {
    id: "pdv-mesas",
    title: "PDV - Gestão de Mesas",
    description: "Controle visual de mesas e comandas com status em tempo real para atendimento eficiente",
    image: "/screenshots/pdv-mesas.png",
  },
  {
    id: "enoturismo",
    title: "Enoturismo - Reservas",
    description: "Módulo exclusivo para gestão de agendamentos, degustações e visitações com controle completo de experiências",
    image: "/screenshots/17-enoturismo-reservas.png",
  },
  {
    id: "compliance",
    title: "Compliance - SIVIBE",
    description: "Gestão de declarações obrigatórias SIVIBE com alertas de prazos e controle de compliance regulatório",
    image: "/screenshots/13-compliance-sivibe.png",
  },
  {
    id: "financeiro",
    title: "Financeiro",
    description: "Controle completo de contas a pagar e receber, fluxo de caixa e gestão financeira integrada",
    image: "/screenshots/19-financeiro.png",
  },
  {
    id: "detalhes-vinhedo",
    title: "Detalhes do Vinhedo",
    description: "Visualização completa de parcelas com variedades, porta-enxertos, clones e sistemas de condução",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04-vinhedos-r4DiDWAgLcWuJQqK9xaYJIfWOIK9F8.png",
  },
  {
    id: "nova-parcela",
    title: "Cadastro de Parcelas",
    description: "Formulário completo para registro de parcelas com dados técnicos de plantio e espaçamento",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/05-parcelas-QzRpltWzHO9f8QnZvjJH1JbpeUmx1m.png",
  },
  {
    id: "novo-vinhedo",
    title: "Cadastro de Vinhedos",
    description: "Registro de novos vinhedos com geolocalização, altitude, declividade e características do solo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/06-manejo-FxUHHYqfnGUEoLflIDwCByuJ17bGmo.png",
  },
  {
    id: "variedades",
    title: "Variedades de Uvas",
    description: "Catálogo completo de variedades com origem, cor, ciclo de maturação e status",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07-tarefas-padrao-3PCqYsx3CNvP3mM9fBSsNwrty3G3BH.png",
  },
  {
    id: "nova-variedade",
    title: "Cadastro de Variedades",
    description: "Adicione novas variedades de uvas com informações de origem, cor e ciclo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/08-variedades-KIaG1k0GMziSBSQgBMl951klyXskov.png",
  },
  {
    id: "manejo",
    title: "Tarefas de Manejo",
    description: "Planeje e acompanhe tarefas de manejo com filtros por vinhedo, status e categoria",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09-recepcao-uvas-RYbNquYETYIijC1N6j60lTBbU2nJwp.png",
  },
  {
    id: "nova-tarefa",
    title: "Nova Tarefa de Manejo",
    description: "Crie tarefas personalizadas ou use tarefas padrão com agendamento e responsáveis",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-vasilhames-yS1Yr1Q0zN5gxR4v0HqrC71GF4sSNf.png",
  },
]

export function Screenshots() {
  return (
    <section id="sistema" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">Conheça o Sistema por Dentro</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Explore as principais funcionalidades do Bacco ERP através de capturas de tela reais do sistema.
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-2 h-auto bg-muted/50 p-2">
            {screenshots.map((screenshot) => (
              <TabsTrigger
                key={screenshot.id}
                value={screenshot.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 text-sm"
              >
                {screenshot.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {screenshots.map((screenshot) => (
            <TabsContent key={screenshot.id} value={screenshot.id} className="mt-8">
              <Card className="overflow-hidden">
                <div className="p-6 lg:p-8 bg-muted/30">
                  <h3 className="text-2xl font-semibold mb-2">{screenshot.title}</h3>
                  <p className="text-muted-foreground mb-6">{screenshot.description}</p>
                  <div className="rounded-lg overflow-hidden border-2 border-border shadow-2xl">
                    <img
                      src={screenshot.image || "/placeholder.svg"}
                      alt={screenshot.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
