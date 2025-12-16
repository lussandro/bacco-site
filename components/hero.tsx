"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Wine } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,69,19,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,69,19,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Sistema Completo para Vinícolas
              </span>
            </div>

            <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight text-balance">
              Do Vinhedo à Garrafa: Controle Total da Sua Produção
            </h1>
            {/* SEO: H1 principal com palavras-chave importantes */}

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
              <strong>O único ERP brasileiro desenvolvido exclusivamente para vinícolas.</strong> Gerencie cada etapa da produção de vinhos, espumantes e sucos com o Bacco ERP. Rastreabilidade completa,
              monitoramento em tempo real, inteligência artificial e gestão integrada. Inclui <strong>Bacco-Campo</strong> para gestão no vinhedo e <strong>Bacco-Comanda</strong> para PDV e enoturismo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base group shadow-lg hover:shadow-xl transition-all" asChild>
                <a href="#contato">
                  Solicitar Demonstração
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-background/50 backdrop-blur-sm hover:bg-background/80 border-2 transition-all"
                asChild
              >
                <a href="#sistema">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Sistema
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Rastreável</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">Real-time</div>
                <div className="text-sm text-muted-foreground">Monitoramento</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-150">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-border/50 ring-1 ring-primary/10">
                <img
                  src="/vineyard-sunset.png"
                  alt="Vinhedo moderno"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border max-w-xs backdrop-blur-sm bg-card/95 hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wine className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Controle Total</div>
                    <div className="text-sm text-muted-foreground">Vinhedo, produção e qualidade</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
