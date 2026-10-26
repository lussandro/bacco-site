import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intl = createMiddleware(routing);

// Página interna sem locale (/cadastro-viticola) → 308: com 307 o Google
// mantém a URL sem locale como canônica. A raiz segue 307 (escolhe o idioma).
export default function proxy(request: NextRequest) {
  const response = intl(request);
  const location = response.headers.get('location');
  if (response.status === 307 && location && request.nextUrl.pathname !== '/') {
    const permanente = NextResponse.redirect(location, 308);
    response.headers.forEach((v, k) => { if (k !== 'location') permanente.headers.set(k, v); });
    return permanente;
  }
  return response;
}

export const config = {
  // Match only internationalized pathnames
  // Excluindo explicitamente arquivos estáticos e API routes para evitar loops no Docker
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within `/users`, optionally with a locale prefix
    // '/([\\w-]+)?/users/(.+)'
  ]
};
