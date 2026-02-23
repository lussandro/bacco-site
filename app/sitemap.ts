import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bacco-erp.com'
  const locales = ['pt-BR', 'pt-PT', 'en-US', 'es', 'it-IT', 'fr']
  const localizedPaths = [
    '',
    '/termos-de-uso',
    '/politica-de-privacidade',
    '/para-brasil',
    '/para-argentina',
    '/para-chile',
    '/para-uruguai',
    '/para-italia',
  ]

  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  for (const locale of locales) {
    for (const path of localizedPaths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 0.9 : 0.7,
      })
    }
  }

  return entries
}
