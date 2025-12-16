"use client"

import { Card } from "@/components/ui/card"
import { Target, Eye, Heart, Leaf, Users, Award, Lightbulb, Shield } from "lucide-react"

export function MissionValues() {
  return (
    <section id="missao-valores" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Missão e Visão */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Missão */}
            <Card className="p-8 lg:p-10 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-bold">Nossa Missão</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Empoderar vinícolas brasileiras com tecnologia de excelência, oferecendo um sistema completo e
                inteligente que acompanha cada etapa da produção vitivinícola — do vinhedo à garrafa — com
                rastreabilidade total, análises precisas e gestão integrada, permitindo que produtores de todos os
                portes tomem decisões baseadas em dados e elevem a qualidade de seus vinhos ao padrão internacional.
              </p>
            </Card>

            {/* Visão */}
            <Card className="p-8 lg:p-10 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-secondary/20">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="font-serif text-3xl font-bold">Nossa Visão</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ser reconhecido como o ERP de referência para o setor vitivinícola brasileiro e latino-americano,
                transformando a forma como vinícolas gerenciam sua produção através da união entre tradição e inovação,
                contribuindo para o crescimento e profissionalização da indústria do vinho nacional e posicionando o
                Brasil como protagonista na tecnologia enológica.
              </p>
            </Card>
          </div>

          {/* Valores */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-primary" />
                <h2 className="font-serif text-3xl lg:text-4xl font-bold">Nossos Valores</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Princípios que guiam cada linha de código e cada decisão que tomamos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Paixão pelo Vinho */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Paixão pelo Vinho</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desenvolvemos com amor e respeito pela arte da vinificação, entendendo que cada lote conta uma
                  história única.
                </p>
              </Card>

              {/* Excelência Técnica */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Excelência Técnica</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprometidos com código limpo, arquitetura moderna e as melhores práticas de desenvolvimento para
                  entregar qualidade superior.
                </p>
              </Card>

              {/* Inovação Consciente */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Inovação Consciente</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Buscamos constantemente novas soluções, mas sempre respeitando a tradição e as particularidades do
                  setor vitivinícola.
                </p>
              </Card>

              {/* Sustentabilidade */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Sustentabilidade</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Valorizamos práticas sustentáveis e ajudamos vinícolas a otimizar recursos, reduzir desperdícios e
                  cuidar do terroir.
                </p>
              </Card>

              {/* Transparência */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Transparência</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rastreabilidade total não é só para o vinho — é também para nossa relação com clientes, baseada em
                  honestidade e clareza.
                </p>
              </Card>

              {/* Proximidade */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Proximidade</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desenvolvido por quem entende de vinho para quem vive do vinho, mantendo sempre o diálogo aberto com
                  nossos clientes.
                </p>
              </Card>

              {/* Evolução Contínua */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Evolução Contínua</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Como um bom vinho, estamos sempre amadurecendo — melhorando, aprendendo e evoluindo junto com nossos
                  clientes.
                </p>
              </Card>

              {/* Acessibilidade */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Acessibilidade</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Acreditamos que tecnologia de qualidade deve estar ao alcance de vinícolas de todos os portes, do
                  artesanal ao industrial.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
