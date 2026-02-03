"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Wine } from "lucide-react"
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,69,19,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,69,19,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {t('badge')}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-xs font-semibold border border-primary/30 shadow-sm">
                {t('badgeMultilingual')}
              </span>
            </div>

            <div>
              <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight text-balance">
                {t('title')}
              </h1>
              {t('subtitle') && (
                <p className="text-lg lg:text-xl text-primary/80 font-medium mt-3">
                  {t('subtitle')}
                </p>
              )}
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl" dangerouslySetInnerHTML={{ __html: t('description') }} />

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base group shadow-lg hover:shadow-xl transition-all" asChild>
                <a href="#contato">
                  {t('ctaDemo')}
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
                  {t('ctaSystem')}
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">{t('stats.traceable')}</div>
                <div className="text-sm text-muted-foreground">{t('stats.traceableLabel')}</div>
              </div>
              {t('stats.languages') && (
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">{t('stats.languages')}</div>
                  <div className="text-sm text-muted-foreground">{t('stats.languagesLabel')}</div>
                </div>
              )}
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">{t('stats.realtime')}</div>
                <div className="text-sm text-muted-foreground">{t('stats.realtimeLabel')}</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">{t('stats.support')}</div>
                <div className="text-sm text-muted-foreground">{t('stats.supportLabel')}</div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-150">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-border/50 ring-1 ring-primary/10">
                <img
                  src="/vineyard-sunset.png"
                  alt={t('imageAlt')}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border max-w-xs backdrop-blur-sm bg-card/95 hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wine className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t('floatingCard.title')}</div>
                    <div className="text-sm text-muted-foreground">{t('floatingCard.description')}</div>
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
