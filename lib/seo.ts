import { routing } from '@/i18n/routing'

// Host canonico de producao: o apex redireciona 307 para www.
export const BASE_URL = 'https://www.bacco-erp.com'

type Internal = keyof typeof routing.pathnames

/**
 * Localized path for an internal route, per locale.
 * routing.pathnames is the single source of truth — do not duplicate these maps.
 */
export function pathFor(internal: Internal, locale: string): string {
  const entry = routing.pathnames[internal]
  const localized = typeof entry === 'string' ? entry : (entry as Record<string, string>)[locale]
  return localized === '/' ? '' : localized
}

export function urlFor(internal: Internal, locale: string): string {
  return `${BASE_URL}/${locale}${pathFor(internal, locale)}`
}

/** canonical + hreflang alternates for a localized route. */
export function alternatesFor(internal: Internal, locale: string) {
  const languages: Record<string, string> = {}
  for (const l of routing.locales) languages[l] = urlFor(internal, l)
  languages['x-default'] = urlFor(internal, routing.defaultLocale)
  return { canonical: urlFor(internal, locale), languages }
}

export function ogImageFor(title: string, description: string): string {
  return `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`
}

export const OG_LOCALE: Record<string, string> = {
  'pt-BR': 'pt_BR',
  'pt-PT': 'pt_PT',
  'en-US': 'en_US',
  es: 'es_ES',
  'it-IT': 'it_IT',
  fr: 'fr_FR',
  de: 'de_DE',
}
