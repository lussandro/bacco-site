"use client"

import { Wine, Mail, Phone, MapPin } from "lucide-react"
import { useTranslations } from 'next-intl';
import { Link as I18nLink } from '@/i18n/routing';

export function Footer() {
  const t = useTranslations('footer');
  const tCommon = useTranslations('common');

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Wine className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-bold">{tCommon('brand')}</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {t('description')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('product.title')}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#funcionalidades" className="hover:text-primary transition-colors">
                  {t('product.features')}
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-primary transition-colors">
                  {t('product.process')}
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-primary transition-colors">
                  {t('product.benefits')}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('company.title')}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  {t('company.about')}
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  {t('company.contact')}
                </a>
              </li>
              <li>
                <I18nLink href="/termos-de-uso" className="hover:text-primary transition-colors">
                  {t('company.terms')}
                </I18nLink>
              </li>
              <li>
                <I18nLink href="/politica-de-privacidade" className="hover:text-primary transition-colors">
                  {t('company.privacy')}
                </I18nLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('support.title')}</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${t('support.email')}`} className="hover:text-primary transition-colors">
                  {t('support.email')}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${t('support.phone')}`} className="hover:text-primary transition-colors">
                  {t('support.phone')}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{t('support.location')}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('countries.title')}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <I18nLink href="/para-brasil" className="hover:text-primary transition-colors">
                  {t('countries.brazil')}
                </I18nLink>
              </li>
              <li>
                <I18nLink href="/para-argentina" className="hover:text-primary transition-colors">
                  {t('countries.argentina')}
                </I18nLink>
              </li>
              <li>
                <I18nLink href="/para-chile" className="hover:text-primary transition-colors">
                  {t('countries.chile')}
                </I18nLink>
              </li>
              <li>
                <I18nLink href="/para-uruguai" className="hover:text-primary transition-colors">
                  {t('countries.uruguay')}
                </I18nLink>
              </li>
              <li>
                <I18nLink href="/para-italia" className="hover:text-primary transition-colors">
                  {t('countries.italy')}
                </I18nLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center text-sm opacity-80">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
