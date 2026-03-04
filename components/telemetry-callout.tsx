"use client"

import { useEffect, useMemo, useState } from "react"
import { Cpu, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

const DISMISS_KEY = "bacco_telemetry_callout_dismissed_at"
const HIDE_FOR_MS = 1000 * 60 * 60 * 24

export function TelemetryCallout() {
  const t = useTranslations("telemetryCallout")
  const [visible, setVisible] = useState(false)

  const shouldShow = useMemo(() => {
    if (typeof window === "undefined") return false
    const dismissedAt = window.localStorage.getItem(DISMISS_KEY)
    if (!dismissedAt) return true
    const elapsed = Date.now() - Number(dismissedAt)
    return elapsed > HIDE_FOR_MS
  }, [])

  useEffect(() => {
    if (!shouldShow) return
    const timer = window.setTimeout(() => setVisible(true), 1800)
    return () => window.clearTimeout(timer)
  }, [shouldShow])

  const dismiss = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()))
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-sm animate-in slide-in-from-bottom-6 fade-in duration-300">
      <Card className="border-2 shadow-2xl bg-background/95 backdrop-blur">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Cpu className="h-5 w-5 text-primary" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold leading-tight">{t("title")}</p>
              <p className="text-xs text-muted-foreground mt-1">{t("description")}</p>

              <div className="mt-3 flex items-center gap-2">
                <Button size="sm" asChild>
                  <a href="#bacco-cpu">{t("cta")}</a>
                </Button>
                <Button size="sm" variant="ghost" onClick={dismiss}>
                  {t("dismiss")}
                </Button>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 -mt-1 -mr-1"
              onClick={dismiss}
              aria-label={t("close")}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

