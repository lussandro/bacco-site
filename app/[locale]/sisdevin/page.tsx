import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Wine, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { BASE_URL, ogImageFor, OG_LOCALE } from "@/lib/seo"

// Página de busca para "sisdevin" (autocomplete: "sisdevin rs", "sisdevin acesso",
// "sisdevin o que é", "telefone sisdevin"). Só em português, como /sivibe.
// Dados oficiais: página do SISDEVIN na Secretaria da Agricultura do RS, conferida em
// 09/10/2026. Prazo não entra: a página oficial não traz nenhum.
// O que o ERP faz segue a doc do módulo (Bacco-Erp, documentacao/docs/compliance/sisdevin.md).
// O arquivo de remessa ainda é provisório no ERP: não escrever "layout oficial",
// "transmite", "envia" nem "integrado" aqui enquanto isso não mudar no código.
const LOCALES = ["pt-BR", "pt-PT"]
const TITLE = "SISDEVIN RS: o que é, acesso, cadastro e telefone"
const DESCRIPTION =
  "O que é o SISDEVIN, onde fazer o login, como a vinícola pede o cadastro, telefone e e-mail da Secretaria da Agricultura do RS, e como o Bacco ERP organiza as remessas."
const CANONICAL = `${BASE_URL}/pt-BR/sisdevin`
const WHATSAPP = "https://wa.me/5548991286399?text=Quero%20ver%20o%20SISDEVIN%20no%20Bacco%20ERP"
const SEAPI = "https://www.agricultura.rs.gov.br"

const oficiais = [
  {
    titulo: "Acesso (login)",
    texto: "O login é feito no portal da PROCERGS, com o endereço indicado na página oficial do SISDEVIN.",
    link: "https://secweb.procergs.com.br/sdae/soe/PRSoeLogon.jsp",
    rotulo: "Entrar no SISDEVIN",
  },
  {
    titulo: "Cadastro de empresa nova",
    texto: "O responsável pelo estabelecimento preenche e assina o formulário de cadastro e envia para cadastrovinicola@agricultura.rs.gov.br.",
    link: `${SEAPI}/upload/arquivos/202506/30104502-formulario-sisdevin-novo-01.pdf`,
    rotulo: "Formulário de cadastro (PDF)",
  },
  {
    titulo: "Telefone e e-mail",
    texto: "(51) 3288-6200, das 8h30 às 12h e das 13h30 às 18h. E-mail: cadastrovinicola@agricultura.rs.gov.br.",
    link: `${SEAPI}/sisdevin`,
    rotulo: "Página oficial do SISDEVIN",
  },
  {
    titulo: "Notas técnicas e treinamento",
    texto: "A página oficial reúne o treinamento para vinícolas, as notas técnicas da DIPOV (formato das remessas, GLT on-line, código de rastreabilidade) e a lista de cultivares.",
    link: `${SEAPI}/sisdevin`,
    rotulo: "Documentos na página oficial",
  },
]

const passos = [
  {
    titulo: "Remessas por tipo de guia, a partir da produção",
    texto: "Uvas recebidas, produção, corte e elaboração, granel, engarrafados, produtos enológicos, estoque e perdas: cada guia é calculada das movimentações do período que você escolhe.",
  },
  {
    titulo: "O que entrou no cálculo fica à vista",
    texto: "Cada remessa guarda os itens que a formaram: operação, quantidade, unidade, código de rastreabilidade, safra, grau da uva, GLT e motivo de perda. O que mudar depois não altera a remessa já gerada.",
  },
  {
    titulo: "Cadastros que o SISDEVIN pede",
    texto: "Registro MAPA do estabelecimento, responsável técnico, produtos com código de rastreabilidade (CR), motivos de perda e guias de trânsito de granel (GLT), com os catálogos oficiais de tipos de produto e cultivares para importar.",
  },
  {
    titulo: "Situação de cada remessa",
    texto: "Gerada, transmitida, confirmada ou rejeitada, com o protocolo e a mensagem de retorno que você registra. Para marcar como transmitida, o sistema exige o responsável técnico.",
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

export default async function Sisdevin({ params }: { params: Promise<{ locale: string }> }) {
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
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Bacco ERP · SISDEVIN</p>
        <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
          SISDEVIN: o que é, onde acessar e como organizar as remessas da vinícola
        </h1>
        <p className="text-xl text-muted-foreground text-pretty">
          O SISDEVIN é o Sistema de Declarações Vinícolas da Secretaria da Agricultura do Rio Grande do Sul. Substituiu
          o SISDECLARA e recebe as declarações da cadeia de vinhos e derivados da uva previstas na Lei nº 7.678/1988.
        </p>

        <section className="mt-14">
          <h2 className="font-serif text-3xl font-bold mb-3">Acesso, cadastro e telefone do SISDEVIN</h2>
          <p className="text-muted-foreground mb-6">
            Endereços e contatos da página oficial da Secretaria. O Bacco ERP não substitui o portal.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {oficiais.map((o) => (
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
          <h2 className="font-serif text-3xl font-bold mb-8">Como o Bacco ERP organiza</h2>
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
          <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-3">Os números saem do que a cantina já registrou</h2>
          <p className="text-primary-foreground/80 mb-6">
            Recepção de uva, vinificação, cortes e estoque já estão no ERP. A remessa vira conferência, não levantamento.
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
