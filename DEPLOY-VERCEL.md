# Como Publicar na Vercel

## Opção 1: Via Vercel CLI (Recomendado)

### Passo 1: Login na Vercel
```bash
npx vercel login
```
Isso abrirá o navegador para você fazer login na sua conta Vercel.

### Passo 2: Deploy de Produção
```bash
npx vercel --prod
```

### Passo 3: Conectar ao Projeto Existente
Se você já tem o projeto `v0-bacco-erp-website` na Vercel, o CLI vai perguntar se você quer:
- Link to existing project? → **Yes**
- What's the name of your existing project? → **v0-bacco-erp-website**

## Opção 2: Via Interface Web da Vercel (Recomendado - Deploy Automático)

1. Acesse: https://vercel.com/lussandros-projects/v0-bacco-erp-website
2. Vá em **Settings** → **Git**
3. Clique em **Connect Git Repository**
4. Selecione o repositório: **lussandro/bacco-site**
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (raiz)
   - **Build Command**: `pnpm build` (ou deixe padrão)
   - **Output Directory**: `.next` (ou deixe padrão)
6. Clique em **Deploy**
7. A Vercel fará deploy automático a cada push no GitHub! 🚀

**Repositório GitHub**: https://github.com/lussandro/bacco-site

## Opção 3: Push para Git e Conectar

Se você quiser conectar um repositório Git:

```bash
# 1. Criar repositório no GitHub/GitLab/Bitbucket
# 2. Adicionar remote
git remote add origin <URL_DO_SEU_REPOSITORIO>
git branch -M main
git push -u origin main

# 3. Na Vercel, conectar o repositório
```

## Configurações Importantes

### Variáveis de Ambiente (se necessário)
Na Vercel, vá em **Settings** → **Environment Variables** e adicione:
- `NODE_ENV=production`
- Outras variáveis que seu app precise

### Domínio Customizado
1. Vá em **Settings** → **Domains**
2. Adicione seu domínio customizado (ex: bacco-erp.com)
3. Configure os DNS conforme instruções

## Notas

- O `output: 'standalone'` foi comentado no `next.config.mjs` porque a Vercel tem sua própria otimização
- A imagem OG será gerada dinamicamente em `/api/og`
- O sitemap e robots.txt são gerados automaticamente
- Structured Data está configurado

## Verificar Deploy

Após o deploy, você pode:
1. Testar a imagem OG: `https://seu-dominio.vercel.app/api/og`
2. Verificar sitemap: `https://seu-dominio.vercel.app/sitemap.xml`
3. Verificar robots: `https://seu-dominio.vercel.app/robots.txt`

