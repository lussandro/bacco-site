import { NextResponse } from "next/server"

// Fonte "bacco-erp.com" no Bacco CRM (Configurações → Entradas automáticas).
// O path_token não é segredo: é a identidade pública da URL, a mesma que o
// institucional deixa no HTML. Contrato: vault, bacco-crm/runbooks/captacao-site-institucional.md
const CRM_WEBHOOK = "https://adega-crm.baccosistemas.com.br/api/v1/webhooks/in/"
const CRM_TOKEN = "TOKEN_ERP_SITE_PENDENTE"

// Tabela antiga de leads: workflows do n8n (Atendimento IA-Site, bacco-validate-leads)
// ainda leem dela. Continua recebendo cópia até alguém desligar esses workflows.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ezwdwwqekfczkberwzic.supabase.co"
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_YooK50O3JiASp5IwQkcDbw_8ZQj1nel"

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

  // cópia na tabela antiga: falha aqui não perde o lead (já está no CRM), só fica no log
  if (!lead._gotcha) {
    const notas = [lead.email && `Email: ${lead.email}`, lead.mensagem && `Mensagem: ${lead.mensagem}`].filter(Boolean)
    await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates",
      },
      body: JSON.stringify({
        nome: lead.nome,
        telefone: lead.whatsapp,
        email: lead.email || null,
        vinicola: lead.empresa || null,
        origem: "site",
        status: "novo",
        notas_ia: notas.length ? notas.join(" | ") : null,
      }),
    })
      .then(async (r) => {
        if (!r.ok && r.status !== 409) console.error("leads antigo:", r.status, await r.text())
      })
      .catch((e) => console.error("leads antigo:", e))
  }

  return NextResponse.json({ ok: true })
}
