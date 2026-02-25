import { MetadataRoute } from 'next'

const baseUrl = 'https://bacco-erp.com'
const locales = ['pt-BR', 'pt-PT', 'en-US', 'es', 'it-IT', 'fr', 'de'] as const

// Localized paths per locale — mirrors i18n/routing.ts pathnames
const localizedPaths: Record<string, Record<string, string>> = {
  '': {
    'pt-BR': '', 'pt-PT': '', 'en-US': '', 'es': '', 'it-IT': '', 'fr': '', 'de': '',
  },
  '/termos-de-uso': {
    'pt-BR': '/termos-de-uso',
    'pt-PT': '/termos-de-utilizacao',
    'en-US': '/terms-of-use',
    'es': '/terminos-de-uso',
    'it-IT': '/termini-di-utilizzo',
    'fr': '/conditions-d-utilisation',
    'de': '/nutzungsbedingungen',
  },
  '/politica-de-privacidade': {
    'pt-BR': '/politica-de-privacidade',
    'pt-PT': '/politica-de-privacidade',
    'en-US': '/privacy-policy',
    'es': '/politica-de-privacidad',
    'it-IT': '/informativa-sulla-privacy',
    'fr': '/politique-de-confidentialite',
    'de': '/datenschutz',
  },
  '/para-brasil': {
    'pt-BR': '/para-brasil',
    'pt-PT': '/para-brasil',
    'en-US': '/for-brazil',
    'es': '/para-brasil',
    'it-IT': '/per-brasile',
    'fr': '/pour-bresil',
    'de': '/fuer-brasilien',
  },
  '/para-argentina': {
    'pt-BR': '/para-argentina',
    'pt-PT': '/para-argentina',
    'en-US': '/for-argentina',
    'es': '/para-argentina',
    'it-IT': '/per-argentina',
    'fr': '/pour-argentine',
    'de': '/fuer-argentinien',
  },
  '/para-chile': {
    'pt-BR': '/para-chile',
    'pt-PT': '/para-chile',
    'en-US': '/for-chile',
    'es': '/para-chile',
    'it-IT': '/per-cile',
    'fr': '/pour-chili',
    'de': '/fuer-chile',
  },
  '/para-uruguai': {
    'pt-BR': '/para-uruguai',
    'pt-PT': '/para-uruguai',
    'en-US': '/for-uruguay',
    'es': '/para-uruguay',
    'it-IT': '/per-uruguay',
    'fr': '/pour-uruguay',
    'de': '/fuer-uruguay',
  },
  '/para-italia': {
    'pt-BR': '/para-italia',
    'pt-PT': '/para-italia',
    'en-US': '/for-italy',
    'es': '/para-italia',
    'it-IT': '/per-italia',
    'fr': '/pour-italie',
    'de': '/fuer-italien',
  },
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  for (const internalPath of Object.keys(localizedPaths)) {
    for (const locale of locales) {
      const localePath = localizedPaths[internalPath][locale]

      // Build hreflang alternates for this page across all locales
      const languages: Record<string, string> = {}
      for (const altLocale of locales) {
        const altPath = localizedPaths[internalPath][altLocale]
        languages[altLocale] = `${baseUrl}/${altLocale}${altPath}`
      }
      // x-default points to the default locale (pt-BR)
      languages['x-default'] = `${baseUrl}/pt-BR${localizedPaths[internalPath]['pt-BR']}`

      entries.push({
        url: `${baseUrl}/${locale}${localePath}`,
        lastModified: new Date(),
        changeFrequency: internalPath === '' ? 'weekly' : 'monthly',
        priority: internalPath === '' ? 0.9 : 0.7,
        alternates: {
          languages,
        },
      })
    }
  }

  return entries
}
