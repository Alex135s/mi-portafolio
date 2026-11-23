import type { Metadata } from "next";
import { CvModalProvider } from "@/app/components/CvModal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geremy Hernández | Asistente de TI & Analista de TI",
  description:
    "Portafolio de Geremy Hernández, Asistente de TI y Analista de TI con experiencia en infraestructura, soporte, identidades, activos tecnológicos y desarrollo de aplicaciones empresariales.",
  openGraph: {
    title: "Geremy Hernández | Asistente de TI & Analista de TI",
    description:
      "Infraestructura, soporte, identidades, automatización y desarrollo de aplicaciones empresariales.",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Geremy Hernández | Asistente de TI & Analista de TI",
    description:
      "Asistente de TI con experiencia en infraestructura y desarrollo de aplicaciones empresariales.",
  },
  other: {
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body><CvModalProvider>{children}</CvModalProvider></body>
    </html>
  );
}
