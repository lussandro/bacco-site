"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { useLocale, useTranslations } from "next-intl"

const faqKeys = [
  "whatIsBacco",
  "countries",
  "languages",
  "installation",
  "support",
  "aiDifferential",
  "offline",
  "howToStart",
  "pricing",
  "dataImport",
] as const

// Perguntas extras só existem em pt-BR/pt-PT (chaves novas só nesses dois locales,
// mesma regra do comparativo nominal em comparison.tsx). O locale.startsWith("pt")
// evita MISSING_MESSAGE nos outros 5 idiomas.
const ptFaqKeys = [
  "bestForSmallWineries",
  "issuesWineInvoice",
  "taxReformReady",
  "harvestAndVinificationControl",
] as const

export function FAQ() {
  const t = useTranslations("faq")
  const locale = useLocale()
  const keys = locale.startsWith("pt") ? [...faqKeys, ...ptFaqKeys] : faqKeys

  // FAQPage fica aqui, junto do conteudo: se a secao sair da pagina o schema sai junto.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: keys.map((key) => ({
      "@type": "Question",
      name: t(`items.${key}.question`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`items.${key}.answer`),
      },
    })),
  }

  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-base px-4 py-1.5">{t("badge")}</Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {keys.map((key, index) => (
              <AccordionItem key={key} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base lg:text-lg font-medium">
                  {t(`items.${key}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t(`items.${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
