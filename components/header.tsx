"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wine, Globe, Menu, X } from "lucide-react"
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const t = useTranslations('header');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false)

  const changeLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const navLinks = [
    { href: "#funcionalidades", label: t('features') },
    { href: "#escopo", label: t('scope') },
    { href: "#mobile", label: t('mobile') },
    { href: "#bacco-cpu", label: t('baccoCpu') },
    { href: "#comanda", label: t('comanda') },
    { href: "#enoturismo", label: t('enotourism') },
    { href: "#sistema", label: t('system') },
    { href: "#diferenciais", label: t('differentials') },
    { href: "#sobre", label: t('about') },
    { href: "#faq", label: "FAQ" },
  ]

  const localeLabel =
    locale === 'pt-BR' || locale === 'pt-PT' ? 'PT'
      : locale === 'es' ? 'ES'
      : locale === 'it-IT' ? 'IT'
      : locale === 'fr' ? 'FR'
      : locale === 'de' ? 'DE'
      : 'EN'

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2">
              <Wine className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-bold">{tCommon('brand')}</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Globe className="h-4 w-4" />
                    <span className="hidden sm:inline">{localeLabel}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => changeLocale('pt-BR')} className={locale === 'pt-BR' ? 'bg-primary/10' : ''}>
                    Portugues (Brasil)
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLocale('pt-PT')} className={locale === 'pt-PT' ? 'bg-primary/10' : ''}>
                    Portugues (Portugal)
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLocale('en-US')} className={locale === 'en-US' ? 'bg-primary/10' : ''}>
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLocale('es')} className={locale === 'es' ? 'bg-primary/10' : ''}>
                    Espanol
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLocale('it-IT')} className={locale === 'it-IT' ? 'bg-primary/10' : ''}>
                    Italiano
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLocale('fr')} className={locale === 'fr' ? 'bg-primary/10' : ''}>
                    Francais
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLocale('de')} className={locale === 'de' ? 'bg-primary/10' : ''}>
                    Deutsch
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button className="hidden sm:inline-flex" asChild>
                <a href="https://staging.bacco-erp.com" target="_blank" rel="noopener noreferrer">
                  {tCommon('accessDemo')}
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="absolute top-16 left-0 right-0 bg-background border-b border-border shadow-xl p-6 space-y-1 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-base font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border mt-4">
              <Button className="w-full" asChild>
                <a href="https://staging.bacco-erp.com" target="_blank" rel="noopener noreferrer">
                  {tCommon('accessDemo')}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
