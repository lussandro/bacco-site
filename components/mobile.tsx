"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Smartphone,
  Wifi,
  MapPin,
  CheckCircle2,
  ClipboardCheck,
  Grape,
  Sprout,
  Download,
  AlertCircle,
  QrCode,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Mobile() {
  const [showDownloadDialog, setShowDownloadDialog] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    checkMobile()
  }, [])

  const downloadUrl =
    "https://expo.dev/accounts/lussandro/projects/BaccoAppTemp/builds/0251ee2d-dc2b-4f1a-b49d-e0c9d1f98be8"

  const mobileFeatures = [
    {
      icon: ClipboardCheck,
      title: "Gestão de Lotes no Campo",
      description:
        "Acompanhe e gerencie todos os lotes de produção diretamente do vinhedo com informações em tempo real.",
    },
    {
      icon: Sprout,
      title: "Execução de Tarefas",
      description: "Execute e registre tarefas de manejo: poda, adubação, tratamentos fitossanitários e colheita.",
    },
    {
      icon: Grape,
      title: "Recepção de Uvas",
      description: "Registre a entrada de uvas no campo com pesagem, análises de qualidade e classificação imediata.",
    },
    {
      icon: CheckCircle2,
      title: "Qualificação em Campo",
      description: "Avalie sanidade, maturação e qualidade das uvas diretamente no vinhedo antes da colheita.",
    },
    {
      icon: MapPin,
      title: "Geolocalização",
      description: "Todas as atividades são registradas com localização GPS para rastreabilidade completa.",
    },
    {
      icon: Wifi,
      title: "Modo Offline",
      description: "Trabalhe sem conexão e sincronize automaticamente quando a internet estiver disponível.",
    },
  ]

  const appScreenshots = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2013.18.50-MEzF14i6rABzoz1orikGGJlkwoioe7.jpeg",
      title: "Dashboard",
      description: "Visão geral das atividades",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2013.18.52-D1aPMzD6TT3oeNaDmsWMpBhciAQw92.jpeg",
      title: "Recepção de Uvas",
      description: "Registro de entrada de uvas",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2013.18.51%282%29-qNDhvtdl41rSXmRNLJDIz9ZUErRDCJ.jpeg",
      title: "Detalhes da Recepção",
      description: "Informações completas da colheita",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2013.18.52%281%29-YIUzfxkqLvVx6ku0879FcN3oNxrUwJ.jpeg",
      title: "Tarefas",
      description: "Gestão de atividades do vinhedo",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2013.18.51%281%29-eXdmSSQcYxjLUGjTPPhCokTIJCWbm0.jpeg",
      title: "Execuções",
      description: "Acompanhamento de vinificação",
    },
  ]

  return (
    <>
      <section
        id="mobile"
        className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
      >
        {/* Decorative grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                <Smartphone className="h-3 w-3 mr-1" />
                Bacco-Campo
              </Badge>

              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Gestão Completa Direto do Vinhedo
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                Leve o poder do Bacco ERP para o campo com o <strong>Bacco-Campo</strong>. Com o aplicativo Android, sua equipe pode executar todas as
                operações diretamente no vinhedo, com ou sem conexão à internet. Sincronização automática quando a conexão estiver disponível.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {mobileFeatures.map((feature, index) => (
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
                <Button size="lg" className="gap-2" onClick={() => setShowDownloadDialog(true)}>
                  <Download className="h-5 w-5" />
                  Baixar para Android
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://staging.bacco-erp.com" target="_blank" rel="noopener noreferrer">
                    Ver Demonstração
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Sincronização automática</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Funciona offline</span>
                </div>
              </div>
            </div>

            {/* Right side - Mobile mockup */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative mx-auto max-w-[300px] lg:max-w-[350px]">
                {/* Floating cards */}
                <Card className="absolute -left-4 top-20 p-4 shadow-xl bg-background/95 backdrop-blur-sm z-10 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Tarefa Concluída</p>
                      <p className="text-xs text-muted-foreground">Poda - Parcela A3</p>
                    </div>
                  </div>
                </Card>

                <Card className="absolute -right-4 bottom-32 p-4 shadow-xl bg-background/95 backdrop-blur-sm z-10 animate-float-delayed">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Grape className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">2.450 kg</p>
                      <p className="text-xs text-muted-foreground">Uvas recebidas</p>
                    </div>
                  </div>
                </Card>

                {/* Mobile phone mockup */}
                <div className="relative rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden bg-white">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-800 rounded-b-2xl z-20" />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%20de%202025-11-04%2005-13-36-dJUybJ9vBAkWus9xVzXxZBLxR9ZmLN.png"
                    alt="Bacco Mobile App"
                    width={350}
                    height={700}
                    className="w-full h-auto"
                  />
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10" />
              </div>
            </div>
          </div>

          <div className="mt-20 lg:mt-32">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                <Smartphone className="h-3 w-3 mr-1" />
                Bacco-Campo em Ação
              </Badge>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold mb-4">Veja o App em Ação</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Interface intuitiva e moderna para gerenciar todas as operações do vinhedo na palma da sua mão
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {appScreenshots.map((screenshot, index) => (
                <div key={index} className="group relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-slate-800 bg-white transition-transform duration-300 group-hover:scale-105">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-slate-800 rounded-b-xl z-10" />
                    <Image
                      src={screenshot.url || "/placeholder.svg"}
                      alt={screenshot.title}
                      width={300}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="font-semibold text-sm">{screenshot.title}</p>
                    <p className="text-xs text-muted-foreground">{screenshot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showDownloadDialog} onOpenChange={setShowDownloadDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">Baixar Bacco-Campo</DialogTitle>
            <DialogDescription>
              Siga as instruções abaixo para instalar o aplicativo Bacco-Campo no seu dispositivo Android
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* QR Code or Direct Download */}
            {isMobile ? (
              <div className="bg-primary/5 rounded-lg p-6 text-center">
                <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Dispositivo Móvel Detectado</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Clique no botão abaixo para baixar o aplicativo diretamente
                </p>
                <Button asChild className="w-full sm:w-auto">
                  <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar APK
                  </a>
                </Button>
              </div>
            ) : (
              <div className="bg-muted/50 rounded-lg p-6 text-center">
                <QrCode className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Escaneie o QR Code</h3>
                <div className="bg-white p-4 rounded-lg inline-block mb-4">
                  <Image
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(downloadUrl)}`}
                    alt="QR Code para download"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Escaneie este código com a câmera do seu celular para baixar o aplicativo
                </p>
              </div>
            )}

            {/* Installation Instructions */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-amber-900 dark:text-amber-100">Instruções de Instalação</p>
                  <div className="space-y-3 text-amber-800 dark:text-amber-200">
                    <div>
                      <p className="font-medium mb-1">Para Android 8.0 (API nível 26) ou superior:</p>
                      <p className="leading-relaxed">
                        Você deve navegar até a tela de configurações do sistema{" "}
                        <span className="font-semibold">&quot;Instalar aplicativos desconhecidos&quot;</span> para
                        habilitar instalações de aplicativos de um local específico (ou seja, o navegador da web do qual
                        você está baixando o aplicativo).
                      </p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Para Android 7.1.1 (API nível 25) ou inferior:</p>
                      <p className="leading-relaxed">
                        Você deve habilitar a configuração do sistema{" "}
                        <span className="font-semibold">&quot;Fontes desconhecidas&quot;</span>, encontrada em{" "}
                        <span className="font-semibold">Configurações &gt; Segurança</span> no seu dispositivo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Após a instalação
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6 list-disc">
                  <li>Use suas credenciais do sistema Bacco ERP para fazer login</li>
                  <li>Configure o servidor se necessário</li>
                  <li>Sincronize seus dados e comece a trabalhar no campo</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowDownloadDialog(false)}>
                Fechar
              </Button>
              {!isMobile && (
                <Button asChild className="flex-1">
                  <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Abrir Link de Download
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
