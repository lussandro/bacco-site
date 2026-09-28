import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Wine, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { BASE_URL, ogImageFor, OG_LOCALE } from "@/lib/seo"

// Página de busca para "sivibe". Só em português: fora de pt-BR/pt-PT dá 404 e fica
// fora do sitemap. O que o ERP faz segue o runbook do módulo (vault, bacco-erp/sivibe):
// não há API nem layout de importação no SIVIBE, a saída é relatório para digitar no
// portal gov.br. Não escrever "integrado", "envia" nem prazo como norma.
const LOCALES = ["pt-BR", "pt-PT"]
const TITLE = "SIVIBE: declaração de uva e vinho sem planilha"
const DESCRIPTION =
  "As duas declarações do SIVIBE montadas a partir dos dados de produção da vinícola: uva por safra e estoque de vinho no ano. Conferência de cadastro e avisos antes de digitar."
const CANONICAL = `${BASE_URL}/pt-BR/sivibe`
const WHATSAPP = "https://wa.me/5548991286399?text=Quero%20ver%20o%20SIVIBE%20no%20Bacco%20ERP"

const declaracoes = [
  {
    titulo: "Produção de uvas",
    quando: "por safra",
    texto: "Uva colhida por cultivar e parcela, e para onde ela foi.",
  },
  {
    titulo: "Estoque de vinhos",
    quando: "por ano-calendário",
    texto: "Estoque inicial, produção e estoque final em 31/12.",
  },
]

const passos = [
  {
    titulo: "Cadastro conferido antes de declarar",
    texto: "O ERP aponta o que falta por vinhedo e talhão: áreas (parreirais, explorada e da propriedade), CAR, NIRF/CIB, CCIR e matrícula.",
  },
  {
    titulo: "Conversão uva ↔ vinho pelo rendimento real de cada lote",
    texto: "Não existe fator fixo. Lote sem peso de uva fica fora do total, e a declaração avisa qual cadastro completar.",
  },
  {
    titulo: "Relatório pronto para digitar no portal gov.br",
    texto: "O SIVIBE não aceita importação de arquivo. O ERP entrega os números organizados e deixa em branco o que ele não distingue, em vez de escrever zero.",
  },
  {
    titulo: "Prazos sugeridos que você confirma",
    texto: "As datas vêm sugeridas e você confere, porque há prorrogações. Depois de enviar, você registra o recibo e a declaração passa para aceita.",
  },
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!LOCALES.includes(locale)) return {}
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: CANONICAL },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale],
      url: CANONICAL,
      siteName: "Bacco ERP",
      title: `${TITLE} | Bacco ERP`,
      description: DESCRIPTION,
      images: [{ url: ogImageFor(TITLE, DESCRIPTION), width: 1200, height: 630, alt: TITLE }],
    },
  }
}

export default async function Sivibe({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!LOCALES.includes(locale)) notFound()

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Wine className="h-8 w-8 text-primary" />
            <span className="font-serif text-2xl font-bold">Bacco</span>
          </Link>
          <Button asChild size="sm">
            <a href={`/${locale}#contato`}>Pedir demonstração</a>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Bacco ERP · SIVIBE</p>
        <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
          SIVIBE sem planilha: as duas declarações saem dos dados que você já registra
        </h1>
        <p className="text-xl text-muted-foreground text-pretty">
          O SIVIBE é o Sistema de Informações da Área de Vinhos e Bebidas do MAPA, que operacionaliza o Cadastro
          Vitícola Nacional previsto na Lei nº 7.678/1988 (IN nº 59/2020).
        </p>

        <section className="mt-14">
          <h2 className="font-serif text-3xl font-bold mb-6">As duas declarações, com tempos diferentes</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {declaracoes.map((d) => (
              <div key={d.titulo} className="rounded-xl border p-5">
                <h3 className="font-semibold text-lg">{d.titulo}</h3>
                <p className="text-sm font-medium text-primary mb-2">{d.quando}</p>
                <p className="text-muted-foreground">{d.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-serif text-3xl font-bold mb-8">Como o Bacco ERP monta</h2>
          <ol className="space-y-6">
            {passos.map((p, i) => (
              <li key={p.titulo} className="flex gap-5">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-lg">{p.titulo}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="font-serif text-3xl font-bold mb-4">O recibo na compra de uva</h2>
          <p className="text-muted-foreground leading-relaxed">
            Para vender uva à indústria, o viticultor anexa à nota fiscal o recibo da declaração de produção da safra
            anterior.
          </p>
        </section>

        <section className="mt-14 rounded-2xl bg-primary text-primary-foreground p-8 lg:p-10">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-3">A declaração sai do que foi registrado no ano</h2>
          <p className="text-primary-foreground/80 mb-6">
            Colheita, recepção, lotes e estoque já estão no ERP. O SIVIBE vira conferência, não levantamento.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary">
              <a href={`/${locale}#contato`}>Pedir demonstração</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
            </Button>
          </div>
        </section>

        <p className="mt-10 text-muted-foreground">
          Leia também:{" "}
          <a href="/pt-BR/blog/recibo-sivibe" className="inline-flex items-center gap-1 text-primary underline underline-offset-4">
            O documento que vale mais que a nota fiscal: o recibo do SIVIBE <ArrowRight className="h-4 w-4 flex-shrink-0" />
          </a>
        </p>
      </main>
    </div>
  )
}
