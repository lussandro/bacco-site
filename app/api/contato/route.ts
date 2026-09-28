import { NextResponse } from "next/server"

// Mesma fonte "Bacco ERP" do form de baccosistemas.com.br/erp/ (mesmo funil).
// O redirect_to dela só vale para form-urlencoded; aqui vai JSON e volta JSON.
// A origem se distingue pelo campo `pagina` (bacco-erp.com/<locale>).
// O path_token não é segredo: é a identidade pública da URL, que o institucional
// deixa no HTML. Contrato: vault, bacco-crm/runbooks/captacao-site-institucional.md
const CRM_WEBHOOK = "https://adega-crm.baccosistemas.com.br/api/v1/webhooks/in/"
const CRM_TOKEN = "LCTErnkZPy0yje7SGSSNPmuG8lpn-W_B"

const texto = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "")

export async function POST(req: Request) {
  if (CRM_TOKEN.includes("PENDENTE")) {
    return NextResponse.json({ erro: "Fonte do Bacco CRM não configurada no site (CRM_TOKEN)." }, { status: 503 })
  }

  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null
  if (!body) return NextResponse.json({ erro: "Corpo inválido." }, { status: 400 })

  const lead = {
    nome: texto(body.nome, 120),
    whatsapp: texto(body.whatsapp, 20),
    email: texto(body.email, 160),
    empresa: texto(body.empresa, 120),
    mensagem: texto(body.mensagem, 1000),
    aceite_contato: body.aceite_contato === true ? "sim" : "",
    produto: "Bacco ERP",
    pagina: `bacco-erp.com/${texto(body.locale, 10)}`,
    _gotcha: texto(body._gotcha, 200),
  }
  if (!lead.nome || !lead.whatsapp || !lead.aceite_contato) {
    return NextResponse.json({ erro: "Nome, telefone e autorização de contato são obrigatórios." }, { status: 400 })
  }

  let res: Response
  try {
    res = await fetch(CRM_WEBHOOK + CRM_TOKEN, {
      method: "POST",
      headers: { "Content-Type": "application/json", "User-Agent": req.headers.get("user-agent") ?? "bacco-erp.com" },
      body: JSON.stringify(lead),
    })
  } catch (e) {
    return NextResponse.json({ erro: `Bacco CRM fora do ar: ${(e as Error).message}` }, { status: 502 })
  }
  if (!res.ok) {
    const detalhe = (await res.text().catch(() => "")).slice(0, 300)
    return NextResponse.json({ erro: `Bacco CRM respondeu ${res.status}: ${detalhe}` }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
