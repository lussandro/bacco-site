"use client"

import type { CSSProperties } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import { useTranslations } from 'next-intl';
import { trackEvent } from '@/lib/analytics';

// ponytail: código de lote é ilustrativo e não traduzível — constante basta.
const LOT_CODE = "BR-2026-MER-0417"
const STAGES = ["s1", "s2", "s3", "s4", "s5"] as const

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1fr_minmax(0,26rem)] gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span aria-hidden className="h-px w-8 bg-primary" />
              {t('badge')}
            </p>

            <div>
              <h1 className="font-serif text-[2.6rem] sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance">
                {t('title')}
              </h1>
              {t('subtitle') && (
                <p className="text-lg lg:text-xl text-muted-foreground mt-4 max-w-xl text-pretty">
                  {t('subtitle')}
                </p>
              )}
            </div>

            {/* t.raw: a copy traz <strong> literal, que o ICU do next-intl recusa em t() */}
            <p
              className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty max-w-xl [&_strong]:font-semibold [&_strong]:text-foreground"
              dangerouslySetInnerHTML={{ __html: t.raw('description') }}
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base group" asChild>
                <a href="#contato" onClick={() => trackEvent('cta_click', { cta_name: 'hero_agendar_demo', cta_location: 'hero' })}>
                  {t('ctaDemo')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="#sistema" onClick={() => trackEvent('cta_click', { cta_name: 'hero_ver_sistema', cta_location: 'hero' })}>
                  <Play className="mr-2 h-5 w-5" />
                  {t('ctaSystem')}
                </a>
              </Button>
            </div>
          </div>

          <LotRecord />
        </div>
      </div>
    </section>
  )
}

/** Ficha de vinificação: a cadeia do vinhedo à garrafa, que é o produto em si. */
function LotRecord() {
  const t = useTranslations('hero');

  const footer = [
    ['stats.traceable', 'stats.traceableLabel'],
    ['stats.languages', 'stats.languagesLabel'],
    ['stats.realtime', 'stats.realtimeLabel'],
    ['stats.support', 'stats.supportLabel'],
  ] as const

  return (
    <figure className="relative rounded-lg border border-border bg-card shadow-sm overflow-hidden">
      <figcaption className="flex items-baseline justify-between gap-3 border-b border-border px-5 py-3 font-mono text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.12em] sm:tracking-[0.18em]">
        <span className="text-muted-foreground whitespace-nowrap">{t('record.label')}</span>
        <span className="text-foreground whitespace-nowrap">
          <span className="hidden sm:inline text-muted-foreground">{t('record.lotLabel')} </span>
          {LOT_CODE}
        </span>
      </figcaption>

      <div className="relative aspect-[16/5] border-b border-border">
        <Image
          src="/vineyard-sunset.png"
          alt={t('imageAlt')}
          width={800}
          height={250}
          priority
          className="h-full w-full object-cover"
        />
      </div>

      <ol className="record-paper relative px-5 py-2">
        <span aria-hidden className="absolute left-[4.125rem] top-7 bottom-7 w-px bg-border" />
        {STAGES.map((key, i) => {
          const last = i === STAGES.length - 1
          return (
            <li
              key={key}
              style={{ '--i': i } as CSSProperties}
              className="record-row relative grid grid-cols-[1.75rem_0.75rem_1fr_auto] items-baseline gap-x-3 py-3 border-b border-border/50 last:border-0"
            >
              <span className="font-mono text-[0.7rem] text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                aria-hidden
                className={`self-start mt-[0.4rem] justify-self-center h-2 w-2 rounded-full ring-4 ring-card ${last ? 'bg-primary' : 'bg-border'}`}
              />
              <span className="min-w-0">
                <span className="block font-mono text-xs uppercase tracking-[0.14em] text-foreground truncate">
                  {t(`record.${key}.name`)}
                </span>
                <span className="block text-xs text-muted-foreground truncate">
                  {t(`record.${key}.detail`)}
                </span>
              </span>
              <span className="text-right whitespace-nowrap">
                <span className="font-mono text-base font-semibold text-foreground tabular-nums">
                  {t(`record.${key}.value`)}
                </span>
                <span className="ml-1.5 font-mono text-[0.7rem] text-brix">
                  {t(`record.${key}.unit`)}
                </span>
              </span>
            </li>
          )
        })}
      </ol>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border-t border-border">
        {footer.map(([value, label]) => (
          <div key={label} className="bg-card px-3 py-3 text-center">
            <div className="font-mono text-sm font-semibold text-foreground">{t(value)}</div>
            <div className="mt-0.5 text-[0.7rem] text-muted-foreground">{t(label)}</div>
          </div>
        ))}
      </div>
    </figure>
  )
}
