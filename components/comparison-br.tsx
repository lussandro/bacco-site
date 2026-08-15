"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useTranslations } from "next-intl"

/**
 * Comparativo nominal do mercado brasileiro.
 * Dados apurados em agosto/2026 a partir de material publicado pelos próprios
 * fornecedores (sites de produto, tabelas de planos, documentos legais).
 * Não adicionar linha sem valor apurado para TODOS os sistemas da coluna.
 */

const STAGES = ["vineyard", "harvest", "vinification", "traceability", "fiscal", "pos", "enotourism"] as const

type Cover = "full" | "on" | "part" | "off"

const SYSTEMS: { key: string; coverage: readonly Cover[] }[] = [
  { key: "bacco", coverage: ["full", "full", "full", "full", "full", "full", "full"] },
  { key: "gvino", coverage: ["on", "on", "on", "on", "on", "off", "off"] },
  { key: "ema", coverage: ["off", "part", "part", "part", "on", "on", "part"] },
  { key: "vinoerp", coverage: ["off", "off", "off", "part", "on", "on", "off"] },
  { key: "cepaos", coverage: ["on", "on", "on", "on", "off", "part", "part"] },
  { key: "generic", coverage: ["off", "off", "off", "off", "on", "part", "off"] },
]

const STOPS = ["gvino", "ema", "vinoerp", "cepaos"] as const
const PILLARS = ["fiscal", "enotourism", "iot", "compliance"] as const
const PILLAR_NUMERALS = ["i", "ii", "iii", "iv"] as const

type Val = "yes" | "no" | "part" | "addon" | "included"

/** Ordem das colunas: bacco, gvino, ema, vinoerp, cepaos */
const ROWS: { key: string; v: readonly Val[] }[] = [
  { key: "vineyard", v: ["yes", "yes", "no", "no", "yes"] },
  { key: "harvestIntake", v: ["yes", "yes", "part", "no", "yes"] },
  { key: "vinification", v: ["yes", "yes", "part", "no", "yes"] },
  { key: "lotTraceability", v: ["yes", "yes", "part", "part", "yes"] },
  { key: "nfe", v: ["yes", "yes", "yes", "yes", "no"] },
  { key: "nfse", v: ["yes", "no", "part", "yes", "no"] },
  { key: "taxRegimes", v: ["yes", "yes", "yes", "yes", "no"] },
  { key: "pos", v: ["yes", "no", "yes", "yes", "addon"] },
  { key: "booking", v: ["yes", "no", "no", "no", "addon"] },
  { key: "whatsapp", v: ["yes", "no", "no", "no", "no"] },
  { key: "wineClub", v: ["yes", "no", "part", "part", "addon"] },
  { key: "sivibe", v: ["included", "yes", "no", "no", "part"] },
  { key: "sisdevin", v: ["included", "yes", "no", "no", "no"] },
  { key: "iot", v: ["yes", "no", "no", "no", "no"] },
  { key: "accounting", v: ["yes", "part", "yes", "yes", "part"] },
  { key: "unlimitedUsers", v: ["yes", "no", "no", "no", "no"] },
  { key: "brazilianEntity", v: ["yes", "yes", "yes", "yes", "no"] },
  { key: "onsiteOnboarding", v: ["yes", "yes", "yes", "part", "no"] },
]

const TABLE_COLS = ["bacco", "gvino", "ema", "vinoerp", "cepaos"] as const

const VAL_CLASS: Record<Val, string> = {
  yes: "text-primary font-semibold",
  included: "text-primary font-semibold",
  part: "text-brix font-medium",
  addon: "text-brix font-medium",
  no: "text-muted-foreground",
}

export function ComparisonBR() {
  const t = useTranslations("comparisonBr")

  return (
    <section id="comparacao" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 space-y-16 lg:space-y-24">
        {/* ---------- mapa de cobertura ---------- */}
        <div className="rounded-2xl bg-primary text-primary-foreground p-6 sm:p-10 lg:p-14">
          <Badge className="mb-4 text-sm px-4 py-1.5 bg-brix-lt/15 text-brix-lt border-brix-lt/40 hover:bg-brix-lt/25">
            {t("badge")}
          </Badge>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-5 text-balance max-w-[20ch]">
            {t("title")}
          </h2>
          <p className="text-lg text-primary-foreground/75 max-w-[62ch] text-pretty">{t("subtitle")}</p>

          <div className="mt-12">
            {/* cabeçalho de etapas — some no mobile, onde o rótulo da linha basta */}
            <div className="hidden md:grid grid-cols-[13rem_1fr] gap-6 items-end pb-3 border-b border-primary-foreground/20">
              <div />
              <div className="grid grid-cols-7 gap-1">
                {STAGES.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/60 text-center leading-tight"
                  >
                    {t(`stages.${s}`)}
                  </span>
                ))}
              </div>
            </div>

            {SYSTEMS.map((sys) => {
              const isBacco = sys.key === "bacco"
              const name = t(`systems.${sys.key}.name`)
              const covered = STAGES.filter((_, i) => sys.coverage[i] !== "off").map((s) => t(`stages.${s}`))

              return (
                <div
                  key={sys.key}
                  className={
                    isBacco
                      ? "grid md:grid-cols-[13rem_1fr] gap-3 md:gap-6 items-center py-6 px-4 -mx-4 rounded-lg bg-brix-lt/10"
                      : "grid md:grid-cols-[13rem_1fr] gap-3 md:gap-6 items-center py-5 border-b border-primary-foreground/10"
                  }
                >
                  <div>
                    <b
                      className={
                        isBacco
                          ? "block font-serif text-xl font-bold text-brix-lt"
                          : "block text-base font-semibold text-primary-foreground"
                      }
                    >
                      {name}
                    </b>
                    <small className="block text-xs font-light text-primary-foreground/55 mt-0.5">
                      {t(`systems.${sys.key}.note`)}
                    </small>
                  </div>

                  <div
                    role="img"
                    aria-label={
                      covered.length
                        ? t("coverageOf", { name, stages: covered.join(", ") })
                        : t("coverageNone", { name })
                    }
                    className={`grid grid-cols-7 gap-1 ${isBacco ? "h-10" : "h-8"}`}
                  >
                    {sys.coverage.map((c, i) => (
                      <div
                        key={i}
                        className={`rounded-[2px] overflow-hidden ${
                          c === "full"
                            ? "bg-brix-lt"
                            : c === "on"
                              ? "bg-primary-foreground/40"
                              : "bg-primary-foreground/10"
                        }`}
                      >
                        {c === "part" && <div className="h-full w-1/2 bg-primary-foreground/40" />}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

            {/* no mobile o cabeçalho de etapas não cabe — a ordem vira texto */}
            <p className="md:hidden mt-5 text-xs text-primary-foreground/60">
              {t("stageOrder", { stages: STAGES.map((s) => t(`stages.${s}`)).join(" · ") })}
            </p>

            <div className="flex flex-wrap gap-x-7 gap-y-3 mt-8 text-xs text-primary-foreground/65">
              <span className="flex items-center gap-2">
                <i className="inline-block w-6 h-2.5 rounded-[2px] bg-brix-lt" />
                {t("legend.full")}
              </span>
              <span className="flex items-center gap-2">
                <i className="inline-block w-6 h-2.5 rounded-[2px] bg-primary-foreground/40" />
                {t("legend.on")}
              </span>
              <span className="flex items-center gap-2">
                <i className="inline-block w-6 h-2.5 rounded-[2px] bg-primary-foreground/10 overflow-hidden">
                  <span className="block h-full w-1/2 bg-primary-foreground/40" />
                </i>
                {t("legend.part")}
              </span>
              <span className="flex items-center gap-2">
                <i className="inline-block w-6 h-2.5 rounded-[2px] bg-primary-foreground/10" />
                {t("legend.off")}
              </span>
            </div>
          </div>
        </div>

        {/* ---------- onde cada um para ---------- */}
        <div>
          <div className="max-w-3xl">
            <Badge className="mb-4 text-sm px-4 py-1.5 bg-primary/10 text-primary border-primary/30">
              {t("stops.badge")}
            </Badge>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-balance">{t("stops.title")}</h2>
            <p className="text-lg text-muted-foreground text-pretty">{t("stops.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {STOPS.map((k) => (
              <Card key={k} className="p-7 border hover:border-primary/40 transition-colors">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-brix">
                  {t(`stops.items.${k}.tag`)}
                </span>
                <h3 className="font-serif text-2xl font-bold text-primary mt-1.5 mb-4">
                  {t(`stops.items.${k}.name`)}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty">{t(`stops.items.${k}.body`)}</p>
                <p className="mt-5 pt-4 border-t text-sm font-medium text-foreground">
                  <span className="text-muted-foreground font-normal">{t("stops.gapPrefix")} </span>
                  {t(`stops.items.${k}.gap`)}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* ---------- o que só o Bacco entrega ---------- */}
        <div className="rounded-2xl bg-primary text-primary-foreground p-6 sm:p-10 lg:p-14">
          <Badge className="mb-4 text-sm px-4 py-1.5 bg-brix-lt/15 text-brix-lt border-brix-lt/40 hover:bg-brix-lt/25">
            {t("pillars.badge")}
          </Badge>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-balance max-w-[20ch]">
            {t("pillars.title")}
          </h2>

          <div className="grid sm:grid-cols-2 gap-10 mt-12">
            {PILLARS.map((k, i) => (
              <div key={k}>
                <div className="font-serif text-4xl italic font-medium text-brix-lt leading-none">
                  {PILLAR_NUMERALS[i]}
                </div>
                <h3 className="font-serif text-xl font-bold mt-3 mb-2">{t(`pillars.items.${k}.title`)}</h3>
                <p className="text-sm text-primary-foreground/75 text-pretty">
                  {t(`pillars.items.${k}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- tabela ponto a ponto ---------- */}
        <div>
          <div className="max-w-3xl">
            <Badge className="mb-4 text-sm px-4 py-1.5 bg-primary/10 text-primary border-primary/30">
              {t("table.badge")}
            </Badge>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-balance">{t("table.title")}</h2>
          </div>

          <Card className="mt-8 overflow-hidden border-2 p-0">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-primary text-primary-foreground font-semibold text-xs tracking-wide">
                      {t("table.feature")}
                    </th>
                    {TABLE_COLS.map((c) => (
                      <th
                        key={c}
                        className={`text-left p-4 font-semibold text-xs tracking-wide ${
                          c === "bacco" ? "bg-brix text-foreground" : "bg-primary text-primary-foreground"
                        }`}
                      >
                        {t(`systems.${c}.name`)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr key={row.key} className="border-b last:border-b-0 hover:bg-brix/5 transition-colors">
                      <td className="p-4 font-medium">{t(`table.rows.${row.key}`)}</td>
                      {row.v.map((val, i) => (
                        <td
                          key={i}
                          className={`p-4 ${VAL_CLASS[val]} ${i === 0 ? "bg-brix/10" : ""}`}
                        >
                          {t(`table.values.${val}`)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <p className="mt-6 max-w-[68ch] text-xs leading-relaxed text-muted-foreground">{t("footnote")}</p>
        </div>
      </div>
    </section>
  )
}
