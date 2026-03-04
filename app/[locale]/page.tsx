import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Internationalization } from "@/components/internationalization"
import { Countries } from "@/components/countries"
import { Features } from "@/components/features"
import { Scope } from "@/components/scope"
import { AIAlerts } from "@/components/ai-alerts"
import { Mobile } from "@/components/mobile"
import { BaccoCpu } from "@/components/bacco-cpu"
import { Comanda } from "@/components/comanda"
import { Enotourism } from "@/components/enotourism"
import { Screenshots } from "@/components/screenshots"
import { Process } from "@/components/process"
import { Differentials } from "@/components/differentials"
import { Comparison } from "@/components/comparison"
import { Benefits } from "@/components/benefits"
import { About } from "@/components/about"
import { MissionValues } from "@/components/mission-values"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { TelemetryCallout } from "@/components/telemetry-callout"

export default function Home() {
  return (
    <>
      <Header />
      <TelemetryCallout />
      <main className="min-h-screen">
        <Hero />
        <AnimateOnScroll>
          <Internationalization />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Countries />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Features />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Scope />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <AIAlerts />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Mobile />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <BaccoCpu />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Comanda />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Enotourism />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Screenshots />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Process />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Differentials />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Comparison />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Benefits />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <About />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <MissionValues />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <FAQ />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Contact />
        </AnimateOnScroll>
        <CTA />
      </main>
      <Footer />
    </>
  )
}
