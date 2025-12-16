"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Wine, Heart, Sparkles, GraduationCap, Clock, Rocket, BookOpen } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Um pouco de História - Seção Melhorada */}
          <div className="mb-20">
            <div className="relative">
              {/* Background decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl blur-3xl opacity-50 -z-10" />
              
              <div className="relative bg-gradient-to-br from-background via-muted/20 to-background rounded-3xl p-8 lg:p-12 border-2 border-primary/10 shadow-xl">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <Badge className="text-base px-4 py-1.5 bg-primary/10 text-primary border-primary/30">
                      História
                    </Badge>
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Code2 className="h-10 w-10 text-primary" />
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      Um pouco de História
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Uma jornada que une tecnologia e paixão pelo vinho
                  </p>
                </div>

                {/* Timeline Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  <Card className="p-6 bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                    <div className="relative">
                      <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                        <Image
                          src="/vintage-computer-1990s-retro-programming-dos-termi.jpg"
                          alt="Clipper e DBASE"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Code2 className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Anos 90</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Clipper e DBASE</p>
                      <p className="text-xs text-muted-foreground mt-2 italic">Programação linha por linha</p>
                    </div>
                  </Card>

                  <Card className="p-6 bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                    <div className="relative">
                      <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                        <Image
                          src="/cloud-computing-devops-servers-infrastructure-mode.jpg"
                          alt="DevOps e Cloud"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Rocket className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">2015+</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">DevOps e Cloud</p>
                      <p className="text-xs text-muted-foreground mt-2 italic">Automação e escalabilidade</p>
                    </div>
                  </Card>

                  <Card className="p-6 bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                    <div className="relative">
                      <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                        <Image
                          src="/male-sommelier-professional-tasting-wine-elegant-r.jpg"
                          alt="Curso de Sommelier"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Wine className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">2023</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Curso de Sommelier</p>
                      <p className="text-xs text-muted-foreground mt-2 italic">Paixão pelo vinho</p>
                    </div>
                  </Card>

                  <Card className="p-6 bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                    <div className="relative">
                      <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                        <Image
                          src="/enology-laboratory-wine-analysis-scientific-study.jpg"
                          alt="Faculdade de Enologia"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">2025</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Faculdade de Enologia</p>
                      <p className="text-xs text-muted-foreground mt-2 italic">Ciência e sensibilidade</p>
                    </div>
                  </Card>
                </div>

                {/* Texto da História */}
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-foreground/90">
                    Minha jornada na tecnologia começou muito antes da nuvem, dos containers e do DevOps. Nos anos 90, eu já
                    explorava o universo do código com Clipper e DBASE, quando programar era uma arte quase manual — feita
                    linha por linha, com paciência e curiosidade.
                  </p>

                  <p className="text-foreground/90">
                    Com o tempo, evoluí junto com as linguagens e ferramentas: passei pelo Visual Basic, onde aprendi a dar
                    vida às interfaces gráficas, e mais tarde mergulhei de cabeça no mundo do Python e do Node.js com
                    TypeScript, construindo APIs, sistemas SaaS e soluções escaláveis.
                  </p>

                  <p>
                    A partir de 2015, assumi uma nova paixão dentro da tecnologia: o DevOps. Foi quando comecei a integrar o
                    desenvolvimento à infraestrutura, automatizando pipelines, orquestrando containers e tornando o ciclo de
                    deploy algo contínuo, seguro e previsível.{" "}
                    <span className="text-foreground font-semibold">
                      Essa transição me ensinou algo que levo até hoje: um sistema é vivo, e como todo organismo, precisa de
                      equilíbrio, cuidado e evolução constante.
                    </span>
                  </p>

                  <p>
                    Mas, fora do código, existe outra parte de mim que também busca esse equilíbrio: o vinho. Há mais de 20
                    anos, ele entrou na minha vida — primeiro como curiosidade, depois como paixão. Em 2023, concluí o curso
                    de sommelier e, inspirado pelo amigo Elisson Manfroi, iniciei o hobby de "vinhateiro", produzindo meus
                    próprios vinhos de forma artesanal.
                  </p>

                  <p>
                    Neste ano, decidi ir além e comecei a faculdade de Enologia, unindo ciência e sensibilidade para
                    compreender cada detalhe do processo de vinificação.
                  </p>

                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 lg:p-8 my-8">
                    <div className="flex items-start gap-4">
                      <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-foreground font-medium text-lg lg:text-xl leading-relaxed italic">
                        "Hoje, essas duas paixões — tecnologia e vinho — caminham juntas. Entre pipelines e barricas,
                        encontrei meu espaço: transformar conhecimento em ferramentas que empoderam quem vive da uva e do
                        vinho."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* A Origem do Bacco - Seção Melhorada */}
          <div className="relative">
            {/* Background decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl blur-3xl opacity-50 -z-10" />
            
            <div className="relative bg-gradient-to-br from-background via-muted/20 to-background rounded-3xl p-8 lg:p-12 border-2 border-primary/10 shadow-xl">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <Badge className="text-base px-4 py-1.5 bg-primary/10 text-primary border-primary/30">
                    Origem
                  </Badge>
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Wine className="h-10 w-10 text-primary" />
                  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    A Origem do Bacco
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  De uma inquietação e um sonho, nasceu uma solução completa
                </p>
              </div>

              <div className="space-y-8 text-lg leading-relaxed">
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/90 text-xl font-medium">
                    O Bacco nasceu de uma inquietação e de um sonho.
                  </p>

                  <p className="text-foreground/90">
                    Durante meus estudos e experiências com produtores, percebi uma grande lacuna no mercado:{" "}
                    <span className="text-foreground font-semibold">
                      não existia no Brasil um sistema criado exclusivamente para vinícolas, que entendesse as
                      particularidades do setor — desde o vinhedo até a garrafa.
                    </span>
                  </p>

                  <p className="text-foreground/90">
                    Muitos produtores se viravam com planilhas ou sistemas genéricos de gestão, que ignoravam o coração do
                    processo vitivinícola: o campo, a fermentação, a maturação, as análises e a rastreabilidade. Foi então
                    que nasceu a ideia do Bacco ERP —{" "}
                    <span className="text-foreground font-semibold">
                      uma solução desenvolvida de vinicultor para vinicultores
                    </span>
                    , com o objetivo de atender desde o pequeno produtor artesanal até as vinícolas de grande porte.
                  </p>
                </div>

                {/* Card "Por Que Bacco?" */}
                <Card className="p-8 lg:p-10 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl font-bold text-foreground mb-4">Por Que Bacco?</h3>
                      <p className="text-foreground text-lg leading-relaxed">
                        O nome Bacco vem do deus romano do vinho e celebra a essência da criação: unir tecnologia e
                        tradição, dados e terroir, ciência e paixão.
                      </p>
                    </div>
                  </div>
                </Card>

                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/90 text-xl font-semibold">
                    Mais do que um software, o Bacco representa uma visão de futuro para o vinho brasileiro — moderna,
                    autêntica e feita com alma. Um sistema que entende que cada lote tem uma história, cada fermentação um
                    ritmo, e cada vinho uma identidade.
                  </p>

                  <p className="text-foreground/90">
                    O Bacco não é apenas um ERP. É o resultado de décadas de experiência em tecnologia encontrando a paixão
                    pelo vinho. É a ferramenta que eu gostaria que existisse quando comecei a estudar enologia.
                  </p>

                  <p className="text-foreground/90 text-lg font-medium">
                    E agora, estou compartilhando isso com você. Porque acredito que toda vinícola merece ter acesso a
                    tecnologia de qualidade, feita por quem realmente entende do assunto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
