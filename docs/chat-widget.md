# Chat de Atendimento — Bacco Site

## Visão Geral

Widget de chat customizado, sem dependências de terceiros (Tidio, Crisp, etc.). Construído como IIFE em vanilla JS com Shadow DOM isolado, comunicando com ChatCoreAPI (webhook) e Supabase (persistência).

---

## Arquitetura

```
Usuário
  │
  ▼
bacco-chat.js (Shadow DOM)
  │
  ├──► POST webhook.chatcoreapi.io  ──► IA responde
  │         (primeira mensagem cria lead_id)
  │
  └──► GET Supabase REST API        ──► polling a cada 5s
       tabela: conversas             (mensagens de IA/vendedor)
```

---

## Fluxo do Usuário

1. **FAB** (botão roxo fixo, canto inferior direito) — clique abre painel
2. **Formulário** — usuário preenche Nome e Telefone
3. **Primeira mensagem** — POST ao webhook com `{ nome, telefone, mensagem }`
4. **Webhook retorna** `{ lead_id, resposta }` — sessão salva em `localStorage`
5. **Mensagens seguintes** — POST com `{ lead_id, mensagem }`
6. **Polling cada 5s** — busca mensagens de `ia`/`vendedor` no Supabase
7. **Reabertura** — `lead_id` salvo; histórico carregado automaticamente do Supabase

---

## Integração no Layout

**Arquivo:** `app/[locale]/layout.tsx` (linhas 214–221)

```tsx
{/* Bacco Chat Widget */}
<Script
  src="/widget/bacco-chat.js"
  data-webhook="https://webhook.chatcoreapi.io/webhook/chat-site"
  data-supabase-url="https://ezwdwwqekfczkberwzic.supabase.co"
  data-supabase-key="sb_publishable_YooK50O3JiASp5IwQkcDbw_8ZQj1nel"
  strategy="lazyOnload"
/>
```

Configuração via `data-*` attributes lidos pelo script em runtime — nenhuma variável global necessária.

---

## Implementação do Widget

**Arquivo:** `public/widget/bacco-chat.js` (427 linhas)

### Inicialização e Configuração

```js
var script = document.currentScript
var WEBHOOK  = script && script.dataset.webhook      || ''
var SB_URL   = script && script.dataset.supabaseUrl  || ''
var SB_KEY   = script && script.dataset.supabaseKey  || ''
var STORAGE_KEY = 'bacco_chat_session'
var POLL_MS  = 5000  // polling a cada 5 segundos

var state    = 'closed'  // closed | form | chat
var session  = null      // { lead_id, nome, telefone }
var pollTimer = null
var lastPollTime = null

// Restaura sessão existente
try {
  var saved = localStorage.getItem(STORAGE_KEY)
  if (saved) session = JSON.parse(saved)
} catch (e) {}
```

### Shadow DOM (isolamento de estilos)

```js
var host = document.createElement('div')
host.id = 'bacco-chat-widget'
document.body.appendChild(host)
var shadow = host.attachShadow({ mode: 'closed' })
```

Shadow DOM fechado garante que estilos do site não vazem para o widget e vice-versa.

### Envio de Mensagem

```js
function sendMessage() {
  var text = (msgInput.value || '').trim()
  if (!text || sending || !WEBHOOK) return

  sending = true
  addMessage('lead', text, new Date().toISOString())

  // Primeira mensagem: inclui nome e telefone
  // Mensagens seguintes: só lead_id
  var payload = session.lead_id
    ? { lead_id: session.lead_id, mensagem: text }
    : { nome: session.nome, telefone: session.telefone, mensagem: text }

  showTyping()

  fetch(WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(res => res.json())
    .then(data => {
      hideTyping()

      // Salva lead_id retornado pelo webhook na primeira mensagem
      if (data.lead_id && !session.lead_id) {
        session.lead_id = data.lead_id
        saveSession()
        startPolling()
      }

      if (data.resposta) {
        addMessage('ia', data.resposta, new Date().toISOString())
        lastPollTime = new Date().toISOString()
      }
    })
    .catch(() => {
      hideTyping()
      addMessage('ia', 'Desculpe, ocorreu um erro. Tente novamente.', new Date().toISOString())
    })
    .finally(() => {
      sending = false
      btnSend.disabled = false
      msgInput.focus()
    })
}
```

### Polling (Supabase REST API)

```js
function pollMessages() {
  if (!session || !session.lead_id || !SB_URL || !SB_KEY) return

  var url = SB_URL + '/rest/v1/conversas?lead_id=eq.' + session.lead_id
    + '&order=created_at.asc'
    + '&select=id,remetente,mensagem,created_at'

  // Busca apenas mensagens novas desde o último poll
  if (lastPollTime) {
    url += '&created_at=gt.' + encodeURIComponent(lastPollTime)
  }

  fetch(url, {
    headers: {
      'apikey': SB_KEY,
      'Authorization': 'Bearer ' + SB_KEY,
    },
  })
    .then(res => res.json())
    .then(data => {
      if (!Array.isArray(data) || data.length === 0) return

      // Só renderiza mensagens de IA e vendedor (lead já foi renderizado ao enviar)
      data.forEach(msg => {
        if (msg.remetente !== 'lead') {
          addMessage(msg.remetente, msg.mensagem, msg.created_at)
        }
      })

      var last = data[data.length - 1]
      if (last) lastPollTime = last.created_at
    })
    .catch(() => {})
}

function startPolling() {
  if (pollTimer) return
  pollTimer = setInterval(pollMessages, POLL_MS)
}

function stopPolling() {
  if (pollTimer) { clearInterval(pollTimer); pollTimer = null }
}
```

Polling para quando o painel fecha (`closePanel()`), evitando requests desnecessários.

### Carregamento de Histórico

```js
function loadHistory() {
  if (!session || !session.lead_id || !SB_URL || !SB_KEY) return

  chatView.innerHTML = ''

  var url = SB_URL + '/rest/v1/conversas?lead_id=eq.' + session.lead_id
    + '&order=created_at.asc'
    + '&select=id,remetente,mensagem,created_at'

  fetch(url, { headers: { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY } })
    .then(res => res.json())
    .then(data => {
      if (!Array.isArray(data) || data.length === 0) {
        // Exibe prompt para continuar conversa
        return
      }
      data.forEach(msg => addMessage(msg.remetente, msg.mensagem, msg.created_at))
      var last = data[data.length - 1]
      if (last) lastPollTime = last.created_at
    })
    .catch(() => {})
}
```

---

## Banco de Dados (Supabase)

| Tabela | Uso |
|--------|-----|
| `conversas` | Histórico de mensagens por `lead_id` |
| `leads` | Cadastro do formulário de contato (componente `contact.tsx`) |

### Colunas relevantes de `conversas`

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | uuid | PK |
| `lead_id` | uuid | FK para leads |
| `remetente` | text | `lead`, `ia`, `vendedor` |
| `mensagem` | text | Conteúdo da mensagem |
| `created_at` | timestamptz | Timestamp de criação |

---

## Tipos de Remetente e Visual

| `remetente` | Bolha | Alinhamento |
|-------------|-------|-------------|
| `lead` | Azul claro (`#EEF2FF`) | Direita |
| `ia` | Cinza claro (`#F4F4F5`) | Esquerda |
| `vendedor` | Rosa claro (`#FFF1F2`) | Esquerda |

---

## Serviços Externos

| Serviço | URL | Função |
|---------|-----|--------|
| ChatCoreAPI | `https://webhook.chatcoreapi.io/webhook/chat-site` | Processa mensagens, aciona IA, retorna `lead_id` |
| Supabase | `https://ezwdwwqekfczkberwzic.supabase.co` | Persiste histórico de conversas |

---

## Persistência de Sessão

- Chave: `bacco_chat_session` no `localStorage`
- Valor: `{ lead_id, nome, telefone }`
- Sessão nunca expira — usuário retorna ao histórico completo

---

## Responsividade

```css
@media (max-width: 440px) {
  .panel { width: calc(100vw - 16px); right: 8px; bottom: 88px; height: calc(100vh - 100px); }
  .fab   { bottom: 16px; right: 16px; }
}
```

Em mobile o painel ocupa quase toda a tela.
