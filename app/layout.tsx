import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Usaremos una fuente más estándar y limpia
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio de Alex135s | Desarrollador Full Stack",
  description: "Portafolio profesional de Alex135s. Ingeniero de Sistemas y Desarrollador Web.",
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