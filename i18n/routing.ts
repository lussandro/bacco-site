import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['pt-BR', 'en-US', 'es', 'it-IT'],

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
      'en-US': '/terms-of-use',
      'es': '/terminos-de-uso'
    },
    '/politica-de-privacidade': {
      'pt-BR': '/politica-de-privacidade',
      'en-US': '/privacy-policy',
      'es': '/politica-de-privacidad'
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

