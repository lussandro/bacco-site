import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Wine, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { BASE_URL, ogImageFor, OG_LOCALE } from "@/lib/seo"

// Página de busca para "sistema de rastreabilidade para vinícolas". Só em português:
// fora de pt-BR/pt-PT dá 404 e fica fora do sitemap. Tudo o que está aqui já é
// descrito em messages/pt-BR.json (features, productionDetail) ou no post do blog.
const LOCALES = ["pt-BR", "pt-PT"]
const TITLE = "Sistema de rastreabilidade para vinícolas"
const DESCRIPTION =
  "Rastreabilidade do talhão à garrafa: recepção de uva, lotes, cortes, engarrafamento e QR Code no rótulo, no mesmo sistema da nota fiscal e do SISDEVIN."
const CANONICAL = `${BASE_URL}/pt-BR/rastreabilidade`
const POSTS = [
  { href: "/pt-BR/blog/rastreabilidade-ponta-a-ponta", titulo: "Rastreabilidade ponta a ponta: o que separa a vinícola que gerencia crise da que vira notícia" },
  { href: "https://www.baccosistemas.com.br/blog/rastreabilidade-do-talhao-a-garrafa/", titulo: "Rastreabilidade de verdade vai do talhão à garrafa" },
]
const WHATSAPP = "https://wa.me/5548991286399?text=Quero%20ver%20a%20rastreabilidade%20do%20Bacco%20ERP"

const etapas = [
  {
    titulo: "Vinhedo e talhão",
    texto: "Talhões com polígono no mapa, variedade, porta-enxerto e clone. Caderno de campo com as tarefas de manejo e as aplicações de defensivo registradas por talhão e safra.",
  },
  {
    titulo: "Colheita e recepção",
    texto: "Ordem de colheita com kg e Brix previstos e colhidos. Na recepção, pesagem de bruto, tara e líquido, com amostragem (Brix, pH, acidez, temperatura), para uva própria ou de terceiros. O lote nasce ali, automaticamente.",
  },
  {
    titulo: "Vinificação",
    texto: "O lote passa por tanques e barricas com histórico, protocolos com dose planejada e executada, análises de laboratório por lote e curva de fermentação.",
  },
  {
    titulo: "Cortes e blends",
    texto: "Lotes combinados com percentual por variedade e volume resultante, sem perder a origem de cada um.",
  },
  {
    titulo: "Engarrafamento",
    texto: "Ordem de envase a partir do lote: garrafas previstas e produzidas, rendimento e caixas.",
  },
  {
    titulo: "Rótulo com QR Code",
    texto: "QR Code no rótulo para verificação pública de autenticidade.",
  },
  {
    titulo: "Estoque, nota fiscal e SISDEVIN",
    texto: "Movimentação de estoque e NF-e no mesmo sistema. O SISDEVIN sai no layout oficial a partir dos mesmos dados de produção.",
  },
]

const usos = [
  { titulo: "Certificação e Indicação Geográfica", texto: "Histórico contínuo e verificável por talhão." },
  { titulo: "Recolhimento seletivo", texto: "Recolher um lote em vez de uma safra inteira." },
  { titulo: "Enoturismo e venda", texto: "Contar de qual parcela veio o vinho, com dado." },
  { titulo: "Comparar safras", texto: "Ligar resultado a decisão de manejo." },
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

export default async function Rastreabilidade({ params }: { params: Promise<{ locale: string }> }) {
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
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Bacco ERP · Rastreabilidade</p>
        <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Rastreabilidade do talhão à garrafa, no mesmo sistema da nota fiscal
        </h1>
        <p className="text-xl text-muted-foreground text-pretty">
          Rastrear não é anotar. É responder, meses depois, de qual talhão veio o vinho daquela garrafa, sem depender
          da memória de ninguém.
        </p>

        <section className="mt-14">
          <h2 className="font-serif text-3xl font-bold mb-8">O caminho que o lote guarda</h2>
          <ol className="space-y-6">
            {etapas.map((e, i) => (
              <li key={e.titulo} className="flex gap-5">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-lg">{e.titulo}</h3>
                  <p className="text-muted-foreground leading-relaxed">{e.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="font-serif text-3xl font-bold mb-4">Por que a planilha quebra a cadeia</h2>
          <p className="text-muted-foreground leading-relaxed">
            O ponto de ruptura quase nunca é falta de registro. É a passagem entre sistemas: colheita no caderno,
            vinificação na planilha, estoque em outro lugar e nota fiscal num quarto sistema. No Bacco ERP o lote é a
            mesma entidade do campo ao faturamento, então não há passagem para quebrar.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-serif text-3xl font-bold mb-6">Para que serve, além da obrigação</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {usos.map((u) => (
              <div key={u.titulo} className="rounded-xl border p-5">
                <h3 className="font-semibold mb-1">{u.titulo}</h3>
                <p className="text-sm text-muted-foreground">{u.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-primary text-primary-foreground p-8 lg:p-10">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-3">Rastreabilidade não se monta depois</h2>
          <p className="text-primary-foreground/80 mb-6">
            O dado da colheita ou foi registrado ligado ao lote naquele momento, ou não existe mais.
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

        <div className="mt-10">
          <p className="text-muted-foreground mb-2">Leia também:</p>
          <ul className="space-y-2">
            {POSTS.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="inline-flex items-center gap-1 text-primary underline underline-offset-4">
                  {p.titulo} <ArrowRight className="h-4 w-4 flex-shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
