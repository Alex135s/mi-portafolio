import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Usaremos una fuente más estándar y limpia
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geremy Hernández | Desarrollador Full Stack Jr. & Infraestructura TI",
  description:
    "Portafolio de Geremy Hernández, Practicante de Infraestructura y Telecomunicaciones y Desarrollador Jr. Full Stack. .NET, C#, React, SQL Server, Power BI y Google Cloud.",
  openGraph: {
    title: "Geremy Hernández | Desarrollador Full Stack Jr. & Infraestructura TI",
    description:
      "Practicante de Infraestructura y Telecomunicaciones y Desarrollador Jr. Full Stack. Proyectos, experiencia y certificaciones.",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Geremy Hernández | Desarrollador Full Stack Jr. & Infraestructura TI",
    description:
      "Practicante de Infraestructura y Telecomunicaciones y Desarrollador Jr. Full Stack.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}