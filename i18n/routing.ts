import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['pt-BR', 'pt-PT', 'en-US', 'es', 'it-IT', 'fr', 'de'],

  // Used when no locale matches
  defaultLocale: 'pt-BR',

  // The `pathnames` object holds pairs of internal and
  // external pathnames. Based on the locale, the
  // external pathnames are rewritten to the shared,
  // internal format.
  pathnames: {
    '/': '/',
    '/termos-de-uso': {
      'pt-BR': '/termos-de-uso',
      'pt-PT': '/termos-de-utilizacao',
      'en-US': '/terms-of-use',
      'es': '/terminos-de-uso',
      'it-IT': '/termini-di-utilizzo',
      'fr': '/conditions-d-utilisation',
      'de': '/nutzungsbedingungen'
    },
    '/politica-de-privacidade': {
      'pt-BR': '/politica-de-privacidade',
      'pt-PT': '/politica-de-privacidade',
      'en-US': '/privacy-policy',
      'es': '/politica-de-privacidad',
      'it-IT': '/informativa-sulla-privacy',
      'fr': '/politique-de-confidentialite',
      'de': '/datenschutz'
    },
    '/para-brasil': {
      'pt-BR': '/para-brasil',
      'pt-PT': '/para-brasil',
      'en-US': '/for-brazil',
      'es': '/para-brasil',
      'it-IT': '/per-brasile',
      'fr': '/pour-bresil',
      'de': '/fuer-brasilien'
    },
    '/para-argentina': {
      'pt-BR': '/para-argentina',
      'pt-PT': '/para-argentina',
      'en-US': '/for-argentina',
      'es': '/para-argentina',
      'it-IT': '/per-argentina',
      'fr': '/pour-argentine',
      'de': '/fuer-argentinien'
    },
    '/para-italia': {
      'pt-BR': '/para-italia',
      'pt-PT': '/para-italia',
      'en-US': '/for-italy',
      'es': '/para-italia',
      'it-IT': '/per-italia',
      'fr': '/pour-italie',
      'de': '/fuer-italien'
    },
    '/para-chile': {
      'pt-BR': '/para-chile',
      'pt-PT': '/para-chile',
      'en-US': '/for-chile',
      'es': '/para-chile',
      'it-IT': '/per-cile',
      'fr': '/pour-chili',
      'de': '/fuer-chile'
    },
    '/para-uruguai': {
      'pt-BR': '/para-uruguai',
      'pt-PT': '/para-uruguai',
      'en-US': '/for-uruguay',
      'es': '/para-uruguay',
      'it-IT': '/per-uruguay',
      'fr': '/pour-uruguay',
      'de': '/fuer-uruguay'
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
