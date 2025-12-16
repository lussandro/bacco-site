import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

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

export const metadata: Metadata = {
  metadataBase: new URL('https://bacco-erp.com'),
  title: {
    default: "Bacco ERP - Sistema Completo para Gestão de Vinícolas | Único ERP Brasileiro",
    template: "%s | Bacco ERP",
  },
  description:
    "O único ERP brasileiro desenvolvido exclusivamente para vinícolas. Do vinhedo à garrafa: controle total da produção com IA, rastreabilidade completa, compliance SIVIBE/ENVIN e módulo de enoturismo. Inclui Bacco-Campo e Bacco-Comanda.",
  keywords: [
    "ERP vinícolas",
    "sistema gestão vinícolas",
    "software vinícolas Brasil",
    "gestão produção vinho",
    "rastreabilidade vinho",
    "SIVIBE",
    "ENVIN",
    "enoturismo",
    "vinificação",
    "viticultura",
    "Bacco ERP",
    "Bacco-Campo",
    "Bacco-Comanda",
    "PDV vinícolas",
    "compliance vinícolas",
    "IA vinificação",
    "inteligência artificial vinho",
  ],
  authors: [{ name: "Bacco ERP" }],
  creator: "Bacco ERP",
  publisher: "Bacco ERP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bacco-erp.com",
    siteName: "Bacco ERP",
    title: "Bacco ERP - Sistema Completo para Gestão de Vinícolas",
    description:
      "O único ERP brasileiro desenvolvido exclusivamente para vinícolas. Do vinhedo à garrafa com IA, rastreabilidade completa e compliance.",
    images: [
      {
        url: "/api/og?title=Bacco%20ERP&description=O%20único%20ERP%20brasileiro%20desenvolvido%20exclusivamente%20para%20vinícolas",
        width: 1200,
        height: 630,
        alt: "Bacco ERP - Sistema para Vinícolas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bacco ERP - Sistema Completo para Gestão de Vinícolas",
    description:
      "O único ERP brasileiro desenvolvido exclusivamente para vinícolas. Do vinhedo à garrafa com IA e rastreabilidade completa.",
    images: ["/api/og?title=Bacco%20ERP&description=O%20único%20ERP%20brasileiro%20desenvolvido%20exclusivamente%20para%20vinícolas"],
    creator: "@baccoerp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Adicione aqui quando tiver Google Search Console
    // google: "seu-codigo-verificacao",
  },
  alternates: {
    canonical: "https://bacco-erp.com",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
