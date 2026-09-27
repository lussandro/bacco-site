import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Countries } from "@/components/countries"
import { Features } from "@/components/features"
import { WineriesBySize } from "@/components/wineries-by-size"
import { ProductionDetail } from "@/components/production-detail"
import { AIAlerts } from "@/components/ai-alerts"
import { Mobile } from "@/components/mobile"
import { Comanda } from "@/components/comanda"
import { Enotourism } from "@/components/enotourism"
import { Screenshots } from "@/components/screenshots"
import { Comparison } from "@/components/comparison"
import { Clients } from "@/components/clients"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <AnimateOnScroll>
          <Countries />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Features />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <WineriesBySize />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ProductionDetail />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <AIAlerts />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Mobile />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Enotourism />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Comanda />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Screenshots />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Comparison />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Clients />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <FAQ />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Contact />
        </AnimateOnScroll>
      </main>
      <Footer />
    </>
  )
}
