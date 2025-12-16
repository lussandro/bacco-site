export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bacco ERP",
    description:
      "Sistema ERP completo desenvolvido exclusivamente para vinícolas brasileiras",
    url: "https://bacco-erp.com",
    logo: "https://bacco-erp.com/icon.svg",
    sameAs: [
      // Adicione redes sociais quando tiver
      // "https://www.linkedin.com/company/bacco-erp",
      // "https://www.facebook.com/baccoerp",
      // "https://www.instagram.com/baccoerp",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Suporte",
      email: "contato@bacco-erp.com", // Atualize com email real
    },
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Bacco ERP",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    description:
      "ERP completo para gestão de vinícolas com IA, rastreabilidade, compliance SIVIBE/ENVIN e módulo de enoturismo",
    featureList: [
      "Gestão de Vinhedos",
      "Vinificação com IA",
      "Rastreabilidade Completa",
      "Compliance SIVIBE e ENVIN",
      "Enoturismo",
      "PDV Integrado",
      "Apps Móveis (Bacco-Campo e Bacco-Comanda)",
    ],
    screenshot: "https://bacco-erp.com/screenshots/dashboard.png",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bacco-erp.com",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

