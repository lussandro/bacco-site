import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Internationalization } from "@/components/internationalization"
import { Countries } from "@/components/countries"
import { Features } from "@/components/features"
import { AIAlerts } from "@/components/ai-alerts"
import { Mobile } from "@/components/mobile"
import { Comanda } from "@/components/comanda"
import { Screenshots } from "@/components/screenshots"
import { Process } from "@/components/process"
import { Differentials } from "@/components/differentials"
import { Comparison } from "@/components/comparison"
import { Benefits } from "@/components/benefits"
import { About } from "@/components/about"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Internationalization />
        <Countries />
        <Features />
        <AIAlerts />
        <Mobile />
        <Comanda />
        <Screenshots />
        <Process />
        <Differentials />
        <Comparison />
        <Benefits />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
