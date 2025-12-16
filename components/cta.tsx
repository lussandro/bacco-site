"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section id="contato" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />

          <div className="relative p-8 lg:p-16 text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance mb-6">
              Pronto para Transformar Sua Vinícola?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Entre em contato conosco e descubra como o Bacco pode revolucionar a gestão da sua produção.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="w-full sm:w-auto text-base gap-2 bg-[#25D366] hover:bg-[#20BA5A]" asChild>
                <a href="https://wa.me/5548991286399" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>

              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base gap-2 bg-transparent" asChild>
                <a href="mailto:lussandro@gmail.com">
                  <Mail className="h-5 w-5" />
                  E-mail
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>(48) 99128-6399</span>
              </div>
              <div className="hidden sm:block text-border">|</div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>lussandro@gmail.com</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
