import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Playfair_Display, Inter } from "next/font/google"
import { StructuredData } from "@/components/structured-data"
import "../globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})


const ogAltByLocale: Record<string, string> = {
  "pt-BR": "Bacco ERP - Sistema para Vinícolas",
  "pt-PT": "Bacco ERP - Sistema para Adegas",
  "en-US": "Bacco ERP - Winery Management System",
  "es": "Bacco ERP - Sistema para Bodegas",
  "it-IT": "Bacco ERP - Sistema per Cantine",
  "fr": "Bacco ERP - Système pour Domaines Viticoles",
  "de": "Bacco ERP - Weingut-Management-System",
}

const metaByLocale: Record<string, { title: string; description: string; ogLocale: string }> = {
  "pt-BR": {
    title: "Bacco ERP - Sistema Completo para Gestão de Vinícolas | Único ERP Brasileiro",
    description:
      "O único ERP brasileiro desenvolvido exclusivamente para vinícolas. Do vinhedo à garrafa: controle total da produção com IA, rastreabilidade completa, compliance SIVIBE/ENVIN e enoturismo. Inclui Bacco-Campo e Bacco-Comanda.",
    ogLocale: "pt_BR",
  },
  "pt-PT": {
    title: "Bacco ERP - Sistema Completo para Gestão de Adegas | ERP especializado",
    description:
      "ERP desenvolvido exclusivamente para adegas. Da vinha à garrafa: controlo total da produção com IA, rastreabilidade completa, compliance SIVIBE/ENVIN e enoturismo. Inclui Bacco-Campo e Bacco-Comanda.",
    ogLocale: "pt_PT",
  },
  "en-US": {
    title: "Bacco ERP - Complete Winery Management | Brazilian-born ERP",
    description:
      "The only Brazilian ERP built exclusively for wineries. From vineyard to bottle: full production control with AI, end-to-end traceability, compliance (SIVIBE/ENVIN), enotourism, plus Bacco-Campo (field) and Bacco-Comanda (POS).",
    ogLocale: "en_US",
  },
  "es": {
    title: "Bacco ERP - Sistema Completo para Gestión de Bodegas | Único ERP Brasilero",
    description:
      "El único ERP brasilero desarrollado exclusivamente para bodegas. Del viñedo a la botella: control total de producción con IA, trazabilidad completa, compliance SIVIBE/ENVIN y enoturismo. Incluye Bacco-Campo y Bacco-Comanda.",
    ogLocale: "es_ES",
  },
  "it-IT": {
    title: "Bacco ERP - Sistema Completo per la Gestione delle Cantine",
    description:
      "ERP sviluppato esclusivamente per cantine. Dal vigneto alla bottiglia: controllo completo della produzione con IA, tracciabilita end-to-end, compliance SIVIBE/ENVIN ed enoturismo.",
    ogLocale: "it_IT",
  },
  "fr": {
    title: "Bacco ERP - Suite Complete de Gestion des Domaines Viticoles",
    description:
      "ERP concu exclusivement pour les domaines viticoles. De la vigne a la bouteille : controle total de la production avec IA, tracabilite complete, conformite et oenotourisme.",
    ogLocale: "fr_FR",
  },
  "de": {
    title: "Bacco ERP - Komplette Loesung fuer das Weingueter-Management",
    description:
      "ERP, das exklusiv fuer Weingueter entwickelt wurde. Vom Weinberg bis zur Flasche: volle Produktionskontrolle mit KI, vollstaendiger Rueckverfolgbarkeit, SIVIBE/ENVIN-Compliance und Weintourismus.",
    ogLocale: "de_DE",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: paramLocale } = await params;
  const locale = metaByLocale[paramLocale] ? paramLocale : "pt-BR";
  const meta = metaByLocale[locale] ?? metaByLocale["pt-BR"]
  const baseUrl = new URL("https://bacco-erp.com")
  const ogUrl = `${baseUrl.origin}/${locale}`
  const ogImage = `/api/og?title=${encodeURIComponent("Bacco ERP")}&description=${encodeURIComponent(meta.description)}`

  return {
    metadataBase: baseUrl,
    title: {
      default: meta.title,
      template: "%s | Bacco ERP",
    },
    description: meta.description,
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      url: ogUrl,
      siteName: "Bacco ERP",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogAltByLocale[locale] ?? ogAltByLocale["pt-BR"],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
      creator: "@baccoerp",
    },
    alternates: {
      canonical: `${baseUrl.origin}/${locale}`,
      languages: {
        "pt-BR": `${baseUrl.origin}/pt-BR`,
        "pt-PT": `${baseUrl.origin}/pt-PT`,
        "en-US": `${baseUrl.origin}/en-US`,
        "es": `${baseUrl.origin}/es`,
        "it-IT": `${baseUrl.origin}/it-IT`,
        "fr": `${baseUrl.origin}/fr`,
        "de": `${baseUrl.origin}/de`,
        "x-default": `${baseUrl.origin}/pt-BR`,
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-ESY8595331"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ESY8595331');
            `}
          </Script>
          <StructuredData locale={locale} />
          {children}
          {/* Cloudflare Web Analytics */}
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "762db2f5c85d4720855abb4e81f85ef6"}'
          />
          {/* Bacco Chat Widget */}
          <Script
            src="/widget/bacco-chat.js"
            data-webhook="https://webhook.chatcoreapi.io/webhook/chat-site"
            data-supabase-url="https://ezwdwwqekfczkberwzic.supabase.co"
            data-supabase-key="sb_publishable_YooK50O3JiASp5IwQkcDbw_8ZQj1nel"
            strategy="lazyOnload"
          />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
