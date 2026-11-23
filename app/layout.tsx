import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geremy Hernández | Asistente de TI & Analista de Sistemas Jr.",
  description:
    "Portafolio de Geremy Hernández, Asistente de TI y Analista de Sistemas Jr. con experiencia en infraestructura, soporte, identidades, activos tecnológicos y desarrollo de aplicaciones empresariales.",
  openGraph: {
    title: "Geremy Hernández | Asistente de TI & Analista de Sistemas Jr.",
    description:
      "Infraestructura, soporte, identidades, automatización y desarrollo de aplicaciones empresariales.",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Geremy Hernández | Asistente de TI & Analista de Sistemas Jr.",
    description:
      "Asistente de TI con experiencia en infraestructura y desarrollo de aplicaciones empresariales.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
