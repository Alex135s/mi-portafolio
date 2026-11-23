import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import ProfileIntro from "@/app/components/ProfileIntro";
import Infrastructure from "@/app/components/Infrastructure";
import Experience from "@/app/components/Experience";
import Certifications from "@/app/components/Certifications";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import FloatingContact from "@/app/components/FloatingContact";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Infraestructura y Soporte TI | Geremy Hernández",
  description: "Experiencia de Geremy Hernández en infraestructura, soporte, identidades, dispositivos, redes y monitoreo.",
};

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-white text-slate-600 selection:bg-google-blue-light">
      <a href="#contenido-principal" className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-slate-900 px-4 py-2 text-white transition-transform focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Saltar al contenido</a>
      <Navbar />
      <main id="contenido-principal" className="mx-auto max-w-6xl px-6 pb-20 pt-32">
        <ProfileIntro
          eyebrow="Perfil de Sistemas e Infraestructura"
          title="Infraestructura, soporte e identidades con experiencia empresarial"
          description="Como Asistente de TI en ElectroDunas administro accesos, dispositivos y soporte corporativo, y conecto la operación diaria con automatización, monitoreo y aplicaciones internas."
          primaryHref="#infraestructura"
          primaryLabel="Ver experiencia técnica"
        />
        <Infrastructure />
        <Experience />
        <Certifications />
        <Skills categories={["Cloud & Infraestructura", "Bases de datos", "Herramientas & Metodologías"]} />
        <Contact />
      </main>
      <FloatingContact />
      <Footer showStack={false} />
    </div>
  );
}
