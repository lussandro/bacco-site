"use client"

import { Wine, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Wine className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-bold">Bacco</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Sistema completo de gestão para vinícolas. Do vinhedo à garrafa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#funcionalidades" className="hover:text-primary transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-primary transition-colors">
                  Processo
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-primary transition-colors">
                  Benefícios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <Link href="/termos-de-uso" className="hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:lussandro@gmail.com" className="hover:text-primary transition-colors">
                  lussandro@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+5548991286399" className="hover:text-primary transition-colors">
                  (48) 99128-6399
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Florianópolis, SC</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center text-sm opacity-80">
          <p>© 2025 Bacco ERP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
