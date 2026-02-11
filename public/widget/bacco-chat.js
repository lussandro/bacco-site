(function () {
  'use strict'

  // ── Config ──────────────────────────────────────────────────
  var script = document.currentScript
  var WEBHOOK = script && script.dataset.webhook || ''
  var SB_URL = script && script.dataset.supabaseUrl || ''
  var SB_KEY = script && script.dataset.supabaseKey || ''
  var STORAGE_KEY = 'bacco_chat_session'
  var POLL_MS = 5000

  // ── State ───────────────────────────────────────────────────
  var state = 'closed' // closed | form | chat
  var session = null    // { lead_id, nome }
  var messages = []
  var sending = false
  var pollTimer = null
  var lastPollTime = null

  // Restore session
  try {
    var saved = localStorage.getItem(STORAGE_KEY)
    if (saved) session = JSON.parse(saved)
  } catch (e) {}

  // ── DOM Setup (Shadow DOM) ──────────────────────────────────
  var host = document.createElement('div')
  host.id = 'bacco-chat-widget'
  document.body.appendChild(host)
  var shadow = host.attachShadow({ mode: 'closed' })

  // ── Styles ──────────────────────────────────────────────────
  var style = document.createElement('style')
  style.textContent = [
    '*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }',
    ':host { all: initial; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }',

    // Fab button
    '.fab { position: fixed; bottom: 24px; right: 24px; z-index: 999999; width: 56px; height: 56px;',
    '  border-radius: 16px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;',
    '  background: #6366F1; color: #fff; box-shadow: 0 4px 24px rgba(99,102,241,.35);',
    '  transition: transform .2s, box-shadow .2s; }',
    '.fab:hover { transform: scale(1.05); box-shadow: 0 6px 28px rgba(99,102,241,.45); }',
    '.fab:active { transform: scale(.95); }',
    '.fab svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }',

    // Panel
    '.panel { position: fixed; bottom: 96px; right: 24px; z-index: 999999; width: 380px; height: 520px;',
    '  background: #fff; border-radius: 20px; box-shadow: 0 12px 48px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.04);',
    '  display: flex; flex-direction: column; overflow: hidden;',
    '  transition: opacity .25s, transform .25s; }',
    '.panel.hidden { opacity: 0; transform: translateY(12px) scale(.96); pointer-events: none; }',
    '.panel.visible { opacity: 1; transform: translateY(0) scale(1); }',

    // Header
    '.header { padding: 16px 20px; background: #6366F1; color: #fff; display: flex; align-items: center; gap: 12px; flex-shrink: 0; }',
    '.header-icon { width: 36px; height: 36px; border-radius: 10px; background: rgba(255,255,255,.2);',
    '  display: flex; align-items: center; justify-content: center; flex-shrink: 0; }',
    '.header-icon svg { width: 18px; height: 18px; fill: none; stroke: #fff; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }',
    '.header-title { font-size: 15px; font-weight: 600; }',
    '.header-sub { font-size: 11px; opacity: .7; margin-top: 1px; }',
    '.header-close { margin-left: auto; background: none; border: none; color: rgba(255,255,255,.7); cursor: pointer; padding: 4px; border-radius: 6px; }',
    '.header-close:hover { color: #fff; background: rgba(255,255,255,.1); }',
    '.header-close svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }',

    // Form
    '.form-wrap { flex: 1; display: flex; flex-direction: column; padding: 24px 20px; gap: 16px; }',
    '.form-title { font-size: 16px; font-weight: 600; color: #18181B; }',
    '.form-desc { font-size: 13px; color: #71717A; line-height: 1.5; }',
    '.field label { display: block; font-size: 12px; font-weight: 500; color: #71717A; margin-bottom: 6px; }',
    '.field input { width: 100%; padding: 10px 14px; border: 1px solid #E4E4E7; border-radius: 10px; font-size: 14px;',
    '  color: #18181B; outline: none; transition: border .15s, box-shadow .15s; background: #fff; }',
    '.field input:focus { border-color: #6366F1; box-shadow: 0 0 0 3px rgba(99,102,241,.12); }',
    '.field input::placeholder { color: #D4D4D8; }',
    '.btn-primary { width: 100%; padding: 12px; border: none; border-radius: 12px; background: #6366F1;',
    '  color: #fff; font-size: 14px; font-weight: 500; cursor: pointer; transition: background .15s, transform .1s;',
    '  margin-top: auto; }',
    '.btn-primary:hover { background: #4F46E5; }',
    '.btn-primary:active { transform: scale(.98); }',
    '.btn-primary:disabled { opacity: .5; cursor: not-allowed; }',

    // Messages
    '.messages { flex: 1; overflow-y: auto; padding: 16px 16px 8px; display: flex; flex-direction: column; gap: 8px; }',
    '.messages::-webkit-scrollbar { width: 4px; }',
    '.messages::-webkit-scrollbar-thumb { background: #E4E4E7; border-radius: 99px; }',
    '.msg { max-width: 80%; padding: 10px 14px; font-size: 13px; line-height: 1.5; word-wrap: break-word; animation: fadeIn .2s; }',
    '.msg-lead { align-self: flex-end; background: #EEF2FF; color: #18181B; border-radius: 14px 14px 4px 14px; }',
    '.msg-ia { align-self: flex-start; background: #F4F4F5; color: #18181B; border-radius: 14px 14px 14px 4px; }',
    '.msg-vendedor { align-self: flex-start; background: #FFF1F2; color: #18181B; border-radius: 14px 14px 14px 4px; }',
    '.msg-time { font-size: 10px; color: #A1A1AA; margin-top: 3px; }',
    '.msg-lead .msg-time { text-align: right; }',

    // Typing indicator
    '.typing { align-self: flex-start; display: flex; align-items: center; gap: 4px; padding: 12px 16px; background: #F4F4F5; border-radius: 14px 14px 14px 4px; }',
    '.typing span { width: 6px; height: 6px; border-radius: 50%; background: #A1A1AA; animation: bounce .6s infinite; }',
    '.typing span:nth-child(2) { animation-delay: .15s; }',
    '.typing span:nth-child(3) { animation-delay: .3s; }',

    // Input bar
    '.input-bar { padding: 12px 16px; border-top: 1px solid #F4F4F5; display: flex; align-items: center; gap: 8px; flex-shrink: 0; }',
    '.input-bar input { flex: 1; padding: 10px 14px; border: 1px solid #E4E4E7; border-radius: 10px; font-size: 13px;',
    '  color: #18181B; outline: none; transition: border .15s; background: #fff; }',
    '.input-bar input:focus { border-color: #6366F1; }',
    '.input-bar input::placeholder { color: #D4D4D8; }',
    '.send-btn { width: 36px; height: 36px; border: none; border-radius: 10px; background: #6366F1; color: #fff;',
    '  cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0;',
    '  transition: background .15s, transform .1s; }',
    '.send-btn:hover { background: #4F46E5; }',
    '.send-btn:active { transform: scale(.9); }',
    '.send-btn:disabled { opacity: .4; cursor: not-allowed; }',
    '.send-btn svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }',

    // Welcome message
    '.welcome { text-align: center; padding: 20px; color: #A1A1AA; font-size: 12px; line-height: 1.5; }',

    // Animations
    '@keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }',
    '@keyframes bounce { 0%, 60%, 100% { transform: translateY(0); } 30% { transform: translateY(-4px); } }',

    // Mobile
    '@media (max-width: 440px) {',
    '  .panel { width: calc(100vw - 16px); right: 8px; bottom: 88px; height: calc(100vh - 100px); border-radius: 16px; }',
    '  .fab { bottom: 16px; right: 16px; }',
    '}',
  ].join('\n')
  shadow.appendChild(style)

  // ── HTML Structure ──────────────────────────────────────────
  var container = document.createElement('div')
  container.innerHTML = [
    // Fab
    '<button class="fab" id="fab">',
    '  <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    '</button>',

    // Panel
    '<div class="panel hidden" id="panel">',
    '  <div class="header">',
    '    <div class="header-icon"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>',
    '    <div><div class="header-title">Bacco</div><div class="header-sub">Fale conosco</div></div>',
    '    <button class="header-close" id="close-btn"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>',
    '  </div>',

    // Form view
    '  <div class="form-wrap" id="form-view">',
    '    <div class="form-title">Ola! Como podemos ajudar?</div>',
    '    <div class="form-desc">Preencha seus dados para iniciar o atendimento.</div>',
    '    <div class="field"><label>Nome</label><input type="text" id="f-nome" placeholder="Seu nome" /></div>',
    '    <div class="field"><label>Telefone</label><input type="tel" id="f-tel" placeholder="(11) 99999-9999" /></div>',
    '    <button class="btn-primary" id="btn-start">Iniciar conversa</button>',
    '  </div>',

    // Chat view
    '  <div class="messages" id="chat-view" style="display:none"></div>',
    '  <div class="input-bar" id="input-bar" style="display:none">',
    '    <input type="text" id="msg-input" placeholder="Digite sua mensagem..." />',
    '    <button class="send-btn" id="btn-send">',
    '      <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
    '    </button>',
    '  </div>',
    '</div>',
  ].join('')
  shadow.appendChild(container)

  // ── Refs ────────────────────────────────────────────────────
  var fab = shadow.getElementById('fab')
  var panel = shadow.getElementById('panel')
  var closeBtn = shadow.getElementById('close-btn')
  var formView = shadow.getElementById('form-view')
  var chatView = shadow.getElementById('chat-view')
  var inputBar = shadow.getElementById('input-bar')
  var fNome = shadow.getElementById('f-nome')
  var fTel = shadow.getElementById('f-tel')
  var btnStart = shadow.getElementById('btn-start')
  var msgInput = shadow.getElementById('msg-input')
  var btnSend = shadow.getElementById('btn-send')

  // ── Helpers ─────────────────────────────────────────────────
  function saveSession() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(session)) } catch (e) {}
  }

  function formatTime(iso) {
    try {
      var d = new Date(iso)
      return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    } catch (e) { return '' }
  }

  function scrollBottom() {
    chatView.scrollTop = chatView.scrollHeight
  }

  function addMessage(remetente, texto, time) {
    var cls = remetente === 'lead' ? 'msg-lead' : remetente === 'vendedor' ? 'msg-vendedor' : 'msg-ia'
    var div = document.createElement('div')
    div.className = 'msg ' + cls
    div.textContent = texto
    if (time) {
      var t = document.createElement('div')
      t.className = 'msg-time'
      t.textContent = formatTime(time)
      div.appendChild(t)
    }
    chatView.appendChild(div)
    scrollBottom()
  }

  function showTyping() {
    var el = document.createElement('div')
    el.className = 'typing'
    el.id = 'typing'
    el.innerHTML = '<span></span><span></span><span></span>'
    chatView.appendChild(el)
    scrollBottom()
  }

  function hideTyping() {
    var el = shadow.getElementById('typing')
    if (el) el.remove()
  }

  // ── Toggle Panel ────────────────────────────────────────────
  function openPanel() {
    panel.classList.remove('hidden')
    panel.classList.add('visible')

    if (session && session.lead_id) {
      showChatView()
      loadHistory()
      startPolling()
    } else {
      formView.style.display = ''
      chatView.style.display = 'none'
      inputBar.style.display = 'none'
    }
  }

  function closePanel() {
    panel.classList.remove('visible')
    panel.classList.add('hidden')
    stopPolling()
  }

  function showChatView() {
    formView.style.display = 'none'
    chatView.style.display = ''
    inputBar.style.display = ''
    msgInput.focus()
  }

  fab.addEventListener('click', function () {
    if (panel.classList.contains('visible')) {
      closePanel()
    } else {
      openPanel()
    }
  })

  closeBtn.addEventListener('click', closePanel)

  // ── Form Submit ─────────────────────────────────────────────
  btnStart.addEventListener('click', function () {
    var nome = (fNome.value || '').trim()
    var tel = (fTel.value || '').trim()
    if (!nome || !tel) return

    session = { lead_id: null, nome: nome, telefone: tel }
    showChatView()

    // Add welcome
    var w = document.createElement('div')
    w.className = 'welcome'
    w.textContent = 'Conversa iniciada. Envie sua primeira mensagem!'
    chatView.appendChild(w)
  })

  // ── Send Message ────────────────────────────────────────────
  function sendMessage() {
    var text = (msgInput.value || '').trim()
    if (!text || sending || !WEBHOOK) return

    sending = true
    msgInput.value = ''
    btnSend.disabled = true

    // Show user message
    addMessage('lead', text, new Date().toISOString())

    // Build payload
    var payload = {}
    if (session.lead_id) {
      payload = { lead_id: session.lead_id, mensagem: text }
    } else {
      payload = { nome: session.nome, telefone: session.telefone, mensagem: text }
    }

    showTyping()

    fetch(WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(function (res) { return res.json() })
      .then(function (data) {
        hideTyping()

        // Save lead_id from first response
        if (data.lead_id && !session.lead_id) {
          session.lead_id = data.lead_id
          saveSession()
          startPolling()
        }

        // Show AI response
        if (data.resposta) {
          addMessage('ia', data.resposta, new Date().toISOString())
          // Track last poll time so polling doesn't duplicate this message
          lastPollTime = new Date().toISOString()
        }
      })
      .catch(function () {
        hideTyping()
        addMessage('ia', 'Desculpe, ocorreu um erro. Tente novamente.', new Date().toISOString())
      })
      .finally(function () {
        sending = false
        btnSend.disabled = false
        msgInput.focus()
      })
  }

  btnSend.addEventListener('click', sendMessage)
  msgInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  })

  // ── Polling (Supabase REST API) ─────────────────────────────
  function pollMessages() {
    if (!session || !session.lead_id || !SB_URL || !SB_KEY) return

    var url = SB_URL + '/rest/v1/conversas?lead_id=eq.' + session.lead_id
      + '&order=created_at.asc'
      + '&select=id,remetente,mensagem,created_at'

    if (lastPollTime) {
      url += '&created_at=gt.' + encodeURIComponent(lastPollTime)
    }

    fetch(url, {
      headers: {
        'apikey': SB_KEY,
        'Authorization': 'Bearer ' + SB_KEY,
      },
    })
      .then(function (res) { return res.json() })
      .then(function (data) {
        if (!Array.isArray(data) || data.length === 0) return

        // Filter out messages we already have (from sendMessage)
        var existingIds = new Set()
        var existing = chatView.querySelectorAll('.msg')
        // We track by content to avoid duplicates
        data.forEach(function (msg) {
          // Only add messages from IA or vendedor that we didn't already show
          if (msg.remetente !== 'lead') {
            addMessage(msg.remetente, msg.mensagem, msg.created_at)
          }
        })

        // Update last poll time
        var last = data[data.length - 1]
        if (last) lastPollTime = last.created_at
      })
      .catch(function () {})
  }

  function startPolling() {
    if (pollTimer) return
    pollTimer = setInterval(pollMessages, POLL_MS)
  }

  function stopPolling() {
    if (pollTimer) { clearInterval(pollTimer); pollTimer = null }
  }

  // ── Load History (on reopen with existing session) ──────────
  function loadHistory() {
    if (!session || !session.lead_id || !SB_URL || !SB_KEY) return

    chatView.innerHTML = ''

    var url = SB_URL + '/rest/v1/conversas?lead_id=eq.' + session.lead_id
      + '&order=created_at.asc'
      + '&select=id,remetente,mensagem,created_at'

    fetch(url, {
      headers: {
        'apikey': SB_KEY,
        'Authorization': 'Bearer ' + SB_KEY,
      },
    })
      .then(function (res) { return res.json() })
      .then(function (data) {
        if (!Array.isArray(data)) return
        if (data.length === 0) {
          var w = document.createElement('div')
          w.className = 'welcome'
          w.textContent = 'Envie uma mensagem para continuar a conversa.'
          chatView.appendChild(w)
          return
        }

        data.forEach(function (msg) {
          addMessage(msg.remetente, msg.mensagem, msg.created_at)
        })

        var last = data[data.length - 1]
        if (last) lastPollTime = last.created_at
      })
      .catch(function () {})
  }
})()
