"use client"

import { Button } from "@/components/ui/button"
import { Wine, Globe } from "lucide-react"
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

  const changeLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <Wine className="h-8 w-8 text-primary" />
            <span className="font-serif text-2xl font-bold">{tCommon('brand')}</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#funcionalidades" className="text-sm font-medium hover:text-primary transition-colors">
              {t('features')}
            </a>
            <a href="#mobile" className="text-sm font-medium hover:text-primary transition-colors">
              {t('mobile')}
            </a>
            <a href="#comanda" className="text-sm font-medium hover:text-primary transition-colors">
              {t('comanda')}
            </a>
            <a href="#sistema" className="text-sm font-medium hover:text-primary transition-colors">
              {t('system')}
            </a>
            <a href="#diferenciais" className="text-sm font-medium hover:text-primary transition-colors">
              {t('differentials')}
            </a>
            <a href="#comparacao" className="text-sm font-medium hover:text-primary transition-colors">
              {t('comparison')}
            </a>
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
              {t('about')}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{locale === 'pt-BR' ? 'PT' : 'EN'}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLocale('pt-BR')} className={locale === 'pt-BR' ? 'bg-primary/10' : ''}>
                  Português (BR)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLocale('en-US')} className={locale === 'en-US' ? 'bg-primary/10' : ''}>
                  English (US)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild>
              <a href="https://staging.bacco-erp.com" target="_blank" rel="noopener noreferrer">
                {tCommon('accessDemo')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
