"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CloudRain,
  Thermometer,
  Bug,
  Calendar,
  Bell,
  Brain,
  Globe,
  AlertTriangle,
  CheckCircle2,
  Sparkles
} from "lucide-react"
import { useTranslations } from "next-intl"

type AlertType = "climate" | "vinification" | "phytosanitary" | "calendar"

interface AlertExample {
  type: AlertType
  icon: typeof CloudRain
  severity: "warning" | "info" | "critical" | "success"
  translations: {
    "pt-BR": string
    "en-US": string
    "es": string
    "it-IT": string
  }
}

const alertExamples: AlertExample[] = [
  {
    type: "climate",
    icon: CloudRain,
    severity: "warning",
    translations: {
      "pt-BR": "Alerta: Chuva intensa prevista para os proximos 3 dias. Recomenda-se adiar a colheita do vinhedo Parcela A3.",
      "en-US": "Alert: Heavy rain forecast for the next 3 days. It is recommended to postpone the harvest of Parcel A3 vineyard.",
      "es": "Alerta: Se prevee lluvia intensa para los proximos 3 dias. Se recomienda posponer la cosecha del vinedo Parcela A3.",
      "it-IT": "Avviso: Pioggia intensa prevista per i prossimi 3 giorni. Si consiglia di posticipare la vendemmia del vigneto Parcella A3."
    }
  },
  {
    type: "vinification",
    icon: Thermometer,
    severity: "critical",
    translations: {
      "pt-BR": "Critico: Temperatura do tanque T-05 atingiu 28C. Ativar sistema de refrigeracao imediatamente para evitar paralisacao da fermentacao.",
      "en-US": "Critical: Tank T-05 temperature reached 28C. Activate cooling system immediately to prevent fermentation arrest.",
      "es": "Critico: La temperatura del tanque T-05 alcanzo 28C. Active el sistema de refrigeracion inmediatamente para evitar la detencion de la fermentacion.",
      "it-IT": "Critico: La temperatura del serbatoio T-05 ha raggiunto 28C. Attivare immediatamente il sistema di raffreddamento per evitare l'arresto della fermentazione."
    }
  },
  {
    type: "phytosanitary",
    icon: Bug,
    severity: "warning",
    translations: {
      "pt-BR": "Atencao: Condicoes favoraveis para desenvolvimento de mildio detectadas. Aplicacao preventiva recomendada nos proximos 2 dias.",
      "en-US": "Attention: Favorable conditions for downy mildew development detected. Preventive application recommended within the next 2 days.",
      "es": "Atencion: Se detectaron condiciones favorables para el desarrollo del mildiu. Se recomienda aplicacion preventiva en los proximos 2 dias.",
      "it-IT": "Attenzione: Rilevate condizioni favorevoli allo sviluppo della peronospora. Applicazione preventiva consigliata nei prossimi 2 giorni."
    }
  },
  {
    type: "calendar",
    icon: Calendar,
    severity: "info",
    translations: {
      "pt-BR": "Lembrete: Periodo ideal para poda verde inicia em 5 dias. 3 vinhedos com tarefas pendentes de agendamento.",
      "en-US": "Reminder: Ideal period for green pruning starts in 5 days. 3 vineyards with pending scheduling tasks.",
      "es": "Recordatorio: El periodo ideal para la poda en verde comienza en 5 dias. 3 vinedos con tareas de programacion pendientes.",
      "it-IT": "Promemoria: Il periodo ideale per la potatura verde inizia tra 5 giorni. 3 vigneti con attivita di pianificazione in sospeso."
    }
  }
]

const languages = [
  { code: "pt-BR" as const, name: "Portugues", flag: "BR" },
  { code: "en-US" as const, name: "English", flag: "US" },
  { code: "es" as const, name: "Espanol", flag: "ES" },
  { code: "it-IT" as const, name: "Italiano", flag: "IT" }
]

const severityColors = {
  warning: "bg-amber-500/20 text-amber-600 border-amber-500/30",
  info: "bg-blue-500/20 text-blue-600 border-blue-500/30",
  critical: "bg-red-500/20 text-red-600 border-red-500/30",
  success: "bg-green-500/20 text-green-600 border-green-500/30"
}

const severityBgColors = {
  warning: "border-amber-500/30",
  info: "border-blue-500/30",
  critical: "border-red-500/30",
  success: "border-green-500/30"
}

export function AIAlerts() {
  const t = useTranslations("aiAlerts")
  const [selectedAlert, setSelectedAlert] = useState<AlertType>("climate")
  const [activeLanguage, setActiveLanguage] = useState<"pt-BR" | "en-US" | "es" | "it-IT">("pt-BR")

  const currentAlert = alertExamples.find(a => a.type === selectedAlert)!
  const AlertIcon = currentAlert.icon

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,69,19,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,69,19,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Brain className="h-6 w-6 text-primary" />
            <Badge className="text-base px-4 py-1.5 bg-primary/20 text-primary border-primary/30">
              {t("badge")}
            </Badge>
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("subtitle")}
          </p>
        </div>

        {/* Alert Type Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {alertExamples.map((alert) => {
            const Icon = alert.icon
            return (
              <button
                key={alert.type}
                onClick={() => setSelectedAlert(alert.type)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 transition-all duration-300 ${
                  selectedAlert === alert.type
                    ? "border-primary bg-primary/10 shadow-lg"
                    : "border-border hover:border-primary/30 hover:bg-muted/50"
                }`}
              >
                <Icon className={`h-5 w-5 ${selectedAlert === alert.type ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`font-medium ${selectedAlert === alert.type ? "text-primary" : "text-muted-foreground"}`}>
                  {t(`types.${alert.type}`)}
                </span>
              </button>
            )
          })}
        </div>

        {/* Main Alert Display */}
        <div className="max-w-5xl mx-auto">
          {/* Current Alert Preview */}
          <Card className={`border-2 ${severityBgColors[currentAlert.severity]} bg-gradient-to-br from-background to-muted/20 mb-8 overflow-hidden`}>
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl ${severityColors[currentAlert.severity]}`}>
                  <AlertIcon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className={severityColors[currentAlert.severity]}>
                      {t(`severity.${currentAlert.severity}`)}
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      <Bell className="h-3 w-3 mr-1" />
                      {t(`types.${currentAlert.type}`)}
                    </Badge>
                  </div>
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    {currentAlert.translations[activeLanguage]}
                  </p>
                </div>
              </div>

              {/* Language Selector */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                <span className="text-sm text-muted-foreground mr-2 self-center">
                  <Globe className="h-4 w-4 inline mr-1" />
                  {t("selectLanguage")}:
                </span>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setActiveLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeLanguage === lang.code
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* All Languages Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {languages.map((lang, index) => (
              <Card
                key={lang.code}
                className={`border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  activeLanguage === lang.code
                    ? "border-primary/50 bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
                onClick={() => setActiveLanguage(lang.code)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                      activeLanguage === lang.code ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      {lang.flag}
                    </div>
                    <div>
                      <h4 className="font-semibold">{lang.name}</h4>
                      <p className="text-xs text-muted-foreground">{lang.code}</p>
                    </div>
                    {activeLanguage === lang.code && (
                      <CheckCircle2 className="h-5 w-5 text-primary ml-auto" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {currentAlert.translations[lang.code]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {["realtime", "contextual", "multilingual"].map((feature, index) => (
            <div
              key={feature}
              className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                {feature === "realtime" && <AlertTriangle className="h-5 w-5 text-primary" />}
                {feature === "contextual" && <Brain className="h-5 w-5 text-primary" />}
                {feature === "multilingual" && <Globe className="h-5 w-5 text-primary" />}
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t(`features.${feature}.title`)}</h4>
                <p className="text-sm text-muted-foreground">{t(`features.${feature}.description`)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("cta")}
          </p>
        </div>
      </div>
    </section>
  )
}
