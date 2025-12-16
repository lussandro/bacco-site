"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Zap, Globe, Shield, Brain, Workflow, Smartphone, DollarSign } from "lucide-react"

export function Comparison() {
  const comparisons = [
    {
      category: "Especialização",
      feature: "Desenvolvido exclusivamente para vinícolas brasileiras",
      bacco: true,
      competitors: false,
      icon: Globe,
      description: "Único ERP brasileiro nascido para atender vinícolas, não é adaptação de sistema genérico",
    },
    {
      category: "Inteligência Artificial",
      feature: "IA integrada em múltiplos módulos",
      bacco: true,
      competitors: false,
      icon: Brain,
      description: "IA de Vinificação, Clima e Calendário de Manejos - pioneiro no Brasil",
    },
    {
      category: "Editor Visual",
      feature: "Editor gráfico de fluxos de vinificação",
      bacco: true,
      competitors: false,
      icon: Workflow,
      description: "Primeiro ERP brasileiro com editor visual interativo estilo N8N para criar fluxos personalizados",
    },
    {
      category: "Compliance Brasileiro",
      feature: "SIVIBE e ENVIN integrados",
      bacco: true,
      competitors: false,
      icon: Shield,
      description: "Conformidade total com regulamentações brasileiras (Lei 7.678/1988) e declarações obrigatórias",
    },
    {
      category: "Enoturismo",
      feature: "Módulo exclusivo de enoturismo",
      bacco: true,
      competitors: false,
      icon: Smartphone,
      description: "Gestão completa de agendamentos, degustações, visitações e experiências",
    },
    {
      category: "Apps Móveis",
      feature: "Bacco-Campo e Bacco-Comanda nativos",
      bacco: true,
      competitors: "Parcial",
      icon: Smartphone,
      description: "Apps móveis nativos para campo (gestão de vinhedos) e PDV (ponto de venda)",
    },
    {
      category: "Suporte",
      feature: "Suporte em português com conhecimento do mercado brasileiro",
      bacco: true,
      competitors: "Parcial",
      icon: Globe,
      description: "Equipe brasileira que entende as particularidades do mercado e legislação nacional",
    },
    {
      category: "Tecnologia",
      feature: "Arquitetura moderna (React, Node, Kubernetes)",
      bacco: true,
      competitors: "Variável",
      icon: Zap,
      description: "Stack tecnológico moderno vs sistemas legados com limitações",
    },
    {
      category: "Custo",
      feature: "Preço acessível para vinícolas brasileiras",
      bacco: true,
      competitors: "Alto",
      icon: DollarSign,
      description: "Solução desenvolvida no Brasil, sem custos de licenciamento internacional",
    },
    {
      category: "Rastreabilidade",
      feature: "Rastreabilidade completa do vinhedo à garrafa",
      bacco: true,
      competitors: true,
      icon: Shield,
      description: "Ambos oferecem, mas Bacco com foco específico em práticas e variedades brasileiras",
    },
    {
      category: "Gestão de Vinhedos",
      feature: "Controle detalhado adaptado ao Brasil",
      bacco: true,
      competitors: "Genérico",
      icon: Globe,
      description: "Variedades brasileiras, regiões específicas, práticas locais vs soluções genéricas",
    },
    {
      category: "Integração",
      feature: "Integração completa do vinhedo ao PDV",
      bacco: true,
      competitors: "Parcial",
      icon: Workflow,
      description: "Tudo integrado: viticultura, vinificação, estoque, comercial, financeiro, enoturismo e PDV",
    },
  ]

  const competitors = ["Vintrace", "AMS Winery", "Vinsight", "SAP Business One", "Outros ERPs Globais"]

  return (
    <section id="comparacao" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 text-base px-4 py-1.5 bg-primary/10 text-primary hover:bg-primary/20">
            Comparação
          </Badge>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Bacco vs ERPs Globais: Por Que Somos Superiores
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Comparação direta com as principais soluções internacionais. Veja onde o Bacco realmente se destaca.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <Card className="overflow-hidden border-2">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-4 font-semibold">Funcionalidade</th>
                    <th className="text-center p-4 font-semibold min-w-[120px]">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-primary font-bold">Bacco ERP</span>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            Brasileiro
                          </Badge>
                        </div>
                      </div>
                    </th>
                    <th className="text-center p-4 font-semibold min-w-[120px]">
                      <div className="flex flex-col items-center gap-2">
                        <span>ERPs Globais</span>
                        <span className="text-xs text-muted-foreground font-normal">
                          {competitors.join(", ")}
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <item.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold mb-1">{item.feature}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                            <Badge variant="outline" className="mt-2 text-xs">
                              {item.category}
                            </Badge>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        {item.bacco === true ? (
                          <div className="flex flex-col items-center gap-2">
                            <Check className="h-6 w-6 text-green-600" />
                            <span className="text-sm font-medium text-green-700 dark:text-green-400">
                              Disponível
                            </span>
                          </div>
                        ) : (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {item.competitors === true ? (
                          <div className="flex flex-col items-center gap-2">
                            <Check className="h-6 w-6 text-green-600" />
                            <span className="text-sm text-muted-foreground">Disponível</span>
                          </div>
                        ) : item.competitors === false ? (
                          <div className="flex flex-col items-center gap-2">
                            <X className="h-6 w-6 text-red-500" />
                            <span className="text-sm font-medium text-red-600 dark:text-red-400">
                              Não disponível
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-6 w-6 rounded-full border-2 border-amber-500 flex items-center justify-center">
                              <div className="h-2 w-2 rounded-full bg-amber-500" />
                            </div>
                            <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                              {item.competitors}
                            </span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">IA Pioneira</h3>
            </div>
            <p className="text-muted-foreground">
              Primeiro ERP brasileiro com Inteligência Artificial integrada em múltiplos módulos. ERPs globais não
              oferecem IA específica para vinificação.
            </p>
          </Card>

          <Card className="p-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Compliance Brasileiro</h3>
            </div>
            <p className="text-muted-foreground">
              SIVIBE e ENVIN integrados nativamente. ERPs globais exigem customizações caras e complexas para
              atender regulamentações brasileiras.
            </p>
          </Card>

          <Card className="p-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Enoturismo Exclusivo</h3>
            </div>
            <p className="text-muted-foreground">
              Módulo completo de enoturismo que ERPs globais não possuem. Gestão de agendamentos, degustações e
              experiências integrada ao ERP.
            </p>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-8 lg:p-12 border-2 border-primary/20 text-center">
          <h3 className="text-3xl font-serif font-bold mb-4 text-balance">
            O Único ERP Brasileiro Feito para Vinícolas
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
            Enquanto ERPs globais tentam adaptar soluções genéricas para o mercado brasileiro, o Bacco foi desenvolvido do zero pensando nas
            necessidades específicas das vinícolas brasileiras. Não é adaptação - é especialização nativa.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Desenvolvido no Brasil, para o Brasil</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Suporte em português com conhecimento local</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Preço acessível sem licenciamento internacional</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Tecnologia moderna vs sistemas legados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

