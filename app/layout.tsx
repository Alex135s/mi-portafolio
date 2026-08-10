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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}