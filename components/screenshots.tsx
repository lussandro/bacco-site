"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from "next-intl"

const screenshotEntries = [
  { id: "dashboard", image: "/screenshots/dashboard.png" },
  { id: "vineyards", image: "/screenshots/vinhedos.png" },
  { id: "calendarAI", image: "/screenshots/11-calendario-manejos-ia.png" },
  { id: "flows", image: "/screenshots/fluxos-vinificacao.png" },
  { id: "lots", image: "/screenshots/10-lotes-producao.png" },
  { id: "pdv", image: "/screenshots/pdv-caixa-aberto.png" },
  { id: "pdvTables", image: "/screenshots/pdv-mesas.png" },
  { id: "enotourism", image: "/screenshots/17-enoturismo-reservas.png" },
  { id: "compliance", image: "/screenshots/13-compliance-sivibe.png" },
  { id: "financial", image: "/screenshots/19-financeiro.png" },
  {
    id: "vineyardDetails",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04-vinhedos-r4DiDWAgLcWuJQqK9xaYJIfWOIK9F8.png",
  },
  {
    id: "newParcel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/05-parcelas-QzRpltWzHO9f8QnZvjJH1JbpeUmx1m.png",
  },
  {
    id: "newVineyard",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/06-manejo-FxUHHYqfnGUEoLflIDwCByuJ17bGmo.png",
  },
  {
    id: "varieties",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07-tarefas-padrao-3PCqYsx3CNvP3mM9fBSsNwrty3G3BH.png",
  },
  {
    id: "newVariety",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/08-variedades-KIaG1k0GMziSBSQgBMl951klyXskov.png",
  },
  {
    id: "handling",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09-recepcao-uvas-RYbNquYETYIijC1N6j60lTBbU2nJwp.png",
  },
  {
    id: "newTask",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-vasilhames-yS1Yr1Q0zN5gxR4v0HqrC71GF4sSNf.png",
  },
] as const

export function Screenshots() {
  const t = useTranslations("screenshots")

  return (
    <section id="sistema" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">{t("title")}</h2>
          <p className="text-lg text-muted-foreground text-pretty">{t("subtitle")}</p>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-2 h-auto bg-muted/50 p-2">
            {screenshotEntries.map((screenshot) => (
              <TabsTrigger
                key={screenshot.id}
                value={screenshot.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 text-sm"
              >
                {t(`items.${screenshot.id}.title`)}
              </TabsTrigger>
            ))}
          </TabsList>

          {screenshotEntries.map((screenshot) => (
            <TabsContent key={screenshot.id} value={screenshot.id} className="mt-8">
              <Card className="overflow-hidden">
                <div className="p-6 lg:p-8 bg-muted/30">
                  <h3 className="text-2xl font-semibold mb-2">{t(`items.${screenshot.id}.title`)}</h3>
                  <p className="text-muted-foreground mb-6">{t(`items.${screenshot.id}.description`)}</p>
                  <div className="rounded-lg overflow-hidden border-2 border-border shadow-2xl">
                    <img
                      src={screenshot.image || "/placeholder.svg"}
                      alt={t(`items.${screenshot.id}.title`)}
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
