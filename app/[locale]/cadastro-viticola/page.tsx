import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Wine, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { BASE_URL, ogImageFor, OG_LOCALE } from "@/lib/seo"

// Página de busca para "cadastro vitícola" (autocomplete: "cadastro vitícola 2026",
// "cadastro vitícola nacional", "consulta cadastro vitícola", "cadastro viticola sivibe").
// Só em português, como /sivibe e /sisdevin.
// Dados oficiais conferidos em 09/10/2026: serviços "Cadastrar viticultor" e "Fornecer
// declaração de produção de uvas" no gov.br e a página do SIVIBE no MAPA.
// Prazo de entrega e multa ficam de fora (as fontes oficiais divergem); o período de
// referência entra porque está no gov.br. O que o ERP faz repete o que já está em /sivibe.
const LOCALES = ["pt-BR", "pt-PT"]
const TITLE = "Cadastro Vitícola Nacional: como fazer no SIVIBE"
const DESCRIPTION =
  "O que é o Cadastro Vitícola Nacional, quem se cadastra, as duas etapas no SIVIBE do MAPA, os dados da propriedade e dos parreirais e onde conferir a declaração."
const CANONICAL = `${BASE_URL}/pt-BR/cadastro-viticola`
const WHATSAPP = "https://wa.me/5548991286399?text=Quero%20ver%20o%20cadastro%20vit%C3%ADcola%20no%20Bacco%20ERP"

const etapas = [
  {
    titulo: "1. Cadastro de acesso (SOLICITA)",
    texto: "O viticultor informa nome, CPF e um e-mail válido no sistema SOLICITA do MAPA. O login é gerado na hora e a senha chega por e-mail.",
    link: "https://sistemasweb.agricultura.gov.br/solicita/manterUsuarioExt.action",
    rotulo: "Cadastro de acesso no SOLICITA",
  },
  {
    titulo: "2. Propriedade e parreirais (SIVIBE)",
    texto: "Com o acesso, o viticultor registra a propriedade e os parreirais no SIVIBE e passa a informar a produção de uvas.",
    link: "https://sistemasweb4.agricultura.gov.br/sivibe/paginaInicial.action",
    rotulo: "Página do SIVIBE no MAPA",
  },
]

const dados = [
  {
    titulo: "Da propriedade",
    texto: "Nome, área total, número do INCRA, NIRF, área explorada, tipo de exploração, endereço e coordenadas geográficas.",
  },
  {
    titulo: "Dos parreirais e setores",
    texto: "Identificação, espaçamento entre linhas e entre plantas, variedades, idade, área e coordenadas.",
  },
  {
    titulo: "Da produção de uvas",
    texto: "Áreas com videiras, quantidade colhida por cultivar e destino das uvas. O gov.br informa o período de referência de 1º de janeiro a 31 de dezembro.",
  },
]

const oficiais = [
  { rotulo: "Serviço “Cadastrar viticultor” no gov.br", link: "https://www.gov.br/pt-br/servicos/cadastrar-viticultor" },
  { rotulo: "Serviço “Fornecer declaração de produção de uvas” no gov.br", link: "https://www.gov.br/pt-br/servicos/fornecer-declaracao-de-producao-de-uvas" },
  { rotulo: "Manual do usuário do SIVIBE para o cadastro vitícola (MAPA, 2025)", link: "https://repositorio-dspace.agricultura.gov.br/handle/1/5813" },
]

const passos = [
  {
    titulo: "Cadastro conferido antes de declarar",
    texto: "O ERP aponta o que falta por vinhedo e talhão: áreas (parreirais, explorada e da propriedade), CAR, NIRF/CIB, CCIR e matrícula.",
  },
  {
    titulo: "Uva colhida por cultivar e parcela",
    texto: "A colheita registrada no ano já sai separada por cultivar e parcela, com o destino que a uva teve.",
  },
  {
    titulo: "Relatório pronto para digitar no portal",
    texto: "O SIVIBE não aceita importação de arquivo. O ERP entrega os números organizados e deixa em branco o que ele não distingue, em vez de escrever zero.",
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

export default async function CadastroViticola({ params }: { params: Promise<{ locale: string }> }) {
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
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Bacco ERP · Cadastro Vitícola</p>
        <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Cadastro Vitícola Nacional: como é feito e o que ele pede
        </h1>
        <p className="text-xl text-muted-foreground text-pretty">
          O Cadastro Vitícola Nacional é o cadastro dos produtores de uva previsto na Lei nº 7.678/1988. Ele é feito no
          SIVIBE, o sistema do Ministério da Agricultura, por pessoa física ou jurídica, sem custo.
        </p>

        <section className="mt-14">
          <h2 className="font-serif text-3xl font-bold mb-6">As duas etapas do cadastro</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {etapas.map((o) => (
              <div key={o.titulo} className="rounded-xl border p-5">
                <h3 className="font-semibold text-lg mb-2">{o.titulo}</h3>
                <p className="text-muted-foreground mb-3">{o.texto}</p>
                <a href={o.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary underline underline-offset-4 break-words">
                  {o.rotulo}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-serif text-3xl font-bold mb-6">Os dados que o cadastro pede</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {dados.map((d) => (
              <div key={d.titulo} className="rounded-xl border p-5">
                <h3 className="font-semibold text-lg mb-2">{d.titulo}</h3>
                <p className="text-muted-foreground">{d.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-serif text-3xl font-bold mb-4">Consulta, manual e contato</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A página do SIVIBE tem, no menu Vitícola, a conferência de autenticidade da Declaração de Produção de Uvas e
            do recibo da declaração. Se o sistema estiver fora do ar, o gov.br indica o e-mail
            cadastro.vitivinicola@agro.gov.br.
          </p>
          <ul className="space-y-2">
            {oficiais.map((o) => (
              <li key={o.link}>
                <a href={o.link} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
                  {o.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-serif text-3xl font-bold mb-8">Como o Bacco ERP ajuda</h2>
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

        <section className="mt-14 rounded-2xl bg-primary text-primary-foreground p-8 lg:p-10">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-3">O cadastro sai do que o vinhedo já registrou</h2>
          <p className="text-primary-foreground/80 mb-6">
            Vinhedos, talhões e colheita já estão no ERP. O cadastro vitícola vira conferência, não levantamento.
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
          <a href="/pt-BR/sivibe" className="inline-flex items-center gap-1 text-primary underline underline-offset-4">
            SIVIBE: acesso, cadastro vitícola, manual e declarações <ArrowRight className="h-4 w-4 flex-shrink-0" />
          </a>
        </p>
      </main>
    </div>
  )
}
