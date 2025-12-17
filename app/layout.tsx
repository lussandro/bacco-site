import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bacco ERP",
  description: "Sistema completo para gestão de vinícolas",
}

// Layout raiz mínimo - o redirecionamento é feito na página raiz (app/page.tsx)
// Isso evita loops de redirecionamento no ambiente Docker
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

