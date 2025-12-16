import { Workflow, Zap, Link2, BarChart3, Globe, Settings, Award, Rocket, Target, Sparkles, Brain } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Differentials() {
  const differentials = [
    {
      icon: Workflow,
      title: "Fluxo de Vinificação Gráfico e Interativo",
      badge: "Pioneiro no Brasil",
      description:
        "Primeiro ERP brasileiro com editor visual de fluxos de vinificação. Crie, personalize e simule processos com nós, conexões e lógica condicional entre etapas.",
      highlights: [
        "Modele processos de vinho tinto, branco, rosé, espumante ou alternativos",
        "Crie fluxos customizados conectando todas as etapas de produção",
        "Reaproveite fluxos em vários lotes simultâneos",
        "Visão em tempo real do estado da vinificação em formato gráfico",
      ],
    },
    {
      icon: Zap,
      title: "Inteligência Artificial Integrada",
      badge: "IA Avançada",
      description:
        "Sistema inteligente que não apenas registra, mas atua ativamente no processo produtivo com IA em múltiplos módulos.",
      highlights: [
        "IA de Vinificação: sugere correções e otimiza processos baseado em análises",
        "IA de Clima: análise climática com previsões e recomendações automáticas",
        "Calendário de Manejos com IA: sugestões baseadas na região do vinhedo",
        "Motor de regras: resolve operações baseadas em YAN, densidade ou pH",
      ],
    },
    {
      icon: Link2,
      title: "Gestão Completa Integrada",
      badge: "Tudo em Um",
      description:
        "Do vinhedo ao engarrafamento em uma única plataforma. Elimine planilhas e sistemas externos fragmentados.",
      highlights: [
        "Viticultura: plantio, manejo, colheita e análises do vinhedo",
        "Enologia: fluxos, análises, tanques e barricas",
        "Terroir e rastreabilidade por lote, talhão e variedade",
        "Controle de estoque e insumos enológicos completo",
      ],
    },
    {
      icon: BarChart3,
      title: "Dados Técnicos e Rastreabilidade Total",
      badge: "Controle Absoluto",
      description:
        "Controle total de variáveis técnicas com histórico detalhado para auditoria, certificações e exportação.",
      highlights: [
        "Monitoramento de Brix, temperatura, densidade e fermentação",
        "Registro de tratamentos, trasfegas e temperatura por tanque",
        "Histórico completo integrado com o lote de ponta a ponta",
        "Pronto para certificações e exportação internacional",
      ],
    },
    {
      icon: Globe,
      title: "Brasileiro com Padrão Internacional",
      badge: "Global Ready",
      description:
        "Desenvolvido para o Brasil, mas preparado para o mundo. Suporte completo às práticas locais e padrões internacionais.",
      highlights: [
        "Suporte a variedades e práticas brasileiras",
        "Adaptado às regras do MAPA, NCM e SIF",
        "Preparado para exportação e certificação internacional",
        "Diferente de softwares estrangeiros com traduções superficiais",
      ],
    },
    {
      icon: Settings,
      title: "Arquitetura Moderna e Escalável",
      badge: "Tecnologia de Ponta",
      description: "Construído com as tecnologias mais modernas do mercado, pronto para crescer com seu negócio.",
      highlights: [
        "React + Node + Kubernetes + Redis + PostgreSQL",
        "Multi-tenant ideal para SaaS",
        "API pronta para IoT e automação de tanques",
        "Diferente de sistemas legados limitados e fechados",
      ],
    },
  ]

  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-base px-4 py-1.5">Por que Bacco?</Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Vantagens do Bacco ERP em Relação aos Sistemas Existentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            O Bacco foi concebido para revolucionar a gestão de vinícolas, oferecendo ferramentas específicas, modernas
            e totalmente alinhadas com as necessidades práticas de quem produz vinho no Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((item, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mt-1">
                    {item.badge}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-3 text-balance">{item.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{item.description}</p>

                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-pretty">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Por que somos pioneiros - Seção Melhorada */}
        <div className="relative">
          {/* Background com gradiente e efeitos */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl blur-3xl opacity-50 -z-10" />
          
          <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 lg:p-12 border-2 border-primary/20 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative max-w-5xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                  <Badge className="text-base px-4 py-1.5 bg-primary/20 text-primary border-primary/30">
                    Pioneirismo
                  </Badge>
                  <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Por que somos pioneiros?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Marcamos a história sendo os primeiros em múltiplas frentes
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <Card className="border-2 border-primary/30 bg-background/80 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Award className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary">
                          #1 no Brasil
                        </Badge>
                        <h4 className="text-lg font-bold mb-2">Único ERP Brasileiro Exclusivo</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <strong>Desenvolvido exclusivamente para vinícolas</strong> - não é adaptação de sistema genérico. Nascido para atender as necessidades específicas do mercado brasileiro.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/30 bg-background/80 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Workflow className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary">
                          Inovação
                        </Badge>
                        <h4 className="text-lg font-bold mb-2">Editor Visual + IA Integrada</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Primeira plataforma brasileira com <strong>editor visual interativo</strong> para fluxos de vinificação e <strong>Inteligência Artificial integrada</strong> em múltiplos módulos.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/30 bg-background/80 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Link2 className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary">
                          Integração Total
                        </Badge>
                        <h4 className="text-lg font-bold mb-2">Unificação Completa</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Primeira solução que <strong>unifica viticultura, vinificação, enoturismo e controle de qualidade</strong> com inteligência artificial em uma única plataforma.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/30 bg-background/80 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Brain className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary">
                          IA Avançada
                        </Badge>
                        <h4 className="text-lg font-bold mb-2">IA em Múltiplos Módulos</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Primeiro ERP para vinícolas com <strong>IA em múltiplos módulos</strong>: vinificação, clima e calendário de manejos. Sistema que aprende e otimiza continuamente.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom Highlight */}
              <div className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-6 lg:p-8 border border-primary/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Nossa Missão
                    </h4>
                  </div>
                </div>
                <p className="text-lg font-semibold text-foreground leading-relaxed pl-16">
                  A primeira e única solução <span className="text-primary">100% nacional</span> desenvolvida do zero para vinícolas brasileiras, com <span className="text-primary">IA integrada</span> e <span className="text-primary">profundidade técnica</span> incomparável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
