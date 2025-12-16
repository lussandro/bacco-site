"use client"

import { Button } from "@/components/ui/button"
import { Wine } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <Wine className="h-8 w-8 text-primary" />
            <span className="font-serif text-2xl font-bold">Bacco</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#funcionalidades" className="text-sm font-medium hover:text-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#mobile" className="text-sm font-medium hover:text-primary transition-colors">
              Bacco-Campo
            </a>
            <a href="#comanda" className="text-sm font-medium hover:text-primary transition-colors">
              Bacco-Comanda
            </a>
            <a href="#sistema" className="text-sm font-medium hover:text-primary transition-colors">
              Sistema
            </a>
            <a href="#diferenciais" className="text-sm font-medium hover:text-primary transition-colors">
              Diferenciais
            </a>
            <a href="#comparacao" className="text-sm font-medium hover:text-primary transition-colors">
              Comparação
            </a>
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild>
              <a href="https://staging.bacco-erp.com" target="_blank" rel="noopener noreferrer">
                Acessar Demonstração
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
