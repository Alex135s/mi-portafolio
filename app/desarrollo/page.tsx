import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import ProfileIntro from "@/app/components/ProfileIntro";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import FloatingContact from "@/app/components/FloatingContact";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Desarrollo de Aplicaciones | Geremy Hernández",
  description: "Proyectos de Geremy Hernández con .NET, C#, SQL Server, Python, Firebase y JavaScript.",
};

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-600 selection:bg-google-blue-light">
      <a href="#contenido-principal" className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-slate-900 px-4 py-2 text-white transition-transform focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Saltar al contenido</a>
      <Navbar />
      <main id="contenido-principal" className="mx-auto max-w-6xl px-6 pb-20 pt-32">
        <ProfileIntro
          eyebrow="Perfil de Desarrollo"
          title="Aplicaciones internas orientadas a problemas reales"
          description="Desarrollo soluciones con .NET, C#, SQL Server, Python y JavaScript. Mis proyectos priorizan trazabilidad, automatización, seguridad y resultados medibles."
          primaryHref="#proyectos"
          primaryLabel="Ver proyectos"
        />
        <Projects />
        <Skills categories={["Desarrollo", "Bases de datos", "Business Intelligence", "Herramientas & Metodologías"]} />
        <Contact />
      </main>
      <FloatingContact />
      <Footer />
    </div>
  );
}
