import { MetadataRoute } from 'next'
import { listPosts, getAvailableLocales } from '@/lib/blog'
import { routing } from '@/i18n/routing'
import { BASE_URL, urlFor, pathFor } from '@/lib/seo'

const locales = routing.locales

// Rotas estaticas = tudo em routing.pathnames menos as dinamicas.
const staticPaths = Object.keys(routing.pathnames).filter(
  (p) => !p.includes('[')
) as (keyof typeof routing.pathnames)[]

// Sem lastModified nas paginas estaticas: nao existe fonte de verdade para a data
// no build (mtime = hora do clone na Vercel). Data inventada a cada deploy faz o
// Google parar de confiar no campo. Blog usa a data real do front-matter.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  for (const internalPath of staticPaths) {
    const languages: Record<string, string> = {}
    for (const alt of locales) languages[alt] = urlFor(internalPath, alt)
    languages['x-default'] = urlFor(internalPath, routing.defaultLocale)

    for (const locale of locales) {
      const isHome = pathFor(internalPath, locale) === ''
      entries.push({
        url: urlFor(internalPath, locale),
        changeFrequency: isHome ? 'weekly' : 'monthly',
        priority: isHome ? 0.9 : 0.7,
        alternates: { languages },
      })
    }
  }

  // Posts: so as locales que realmente tem .mdx. As demais servem o texto pt-BR
  // com canonical apontando para ele, entao ficam fora do sitemap.
  const posts = await listPosts(routing.defaultLocale)
  for (const post of posts) {
    const available = await getAvailableLocales(post.slug, locales)
    const languages: Record<string, string> = {}
    for (const alt of available) languages[alt] = `${BASE_URL}/${alt}/blog/${post.slug}`
    languages['x-default'] = `${BASE_URL}/${routing.defaultLocale}/blog/${post.slug}`

    for (const locale of available) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: { languages },
      })
    }
  }

  return entries
}
