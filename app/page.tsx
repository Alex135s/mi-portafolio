import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Highlights from "@/app/components/Highlights";
import CareerPaths from "@/app/components/CareerPaths";
import Infrastructure from "@/app/components/Infrastructure";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Certifications from "@/app/components/Certifications";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-google-blue-light">
      <a
        href="#contenido-principal"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-slate-900 px-4 py-2 text-white transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <Navbar />

      <main id="contenido-principal" className="relative z-10 pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <Hero />
        <Highlights />
        <CareerPaths />
        <About />
        <Infrastructure />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
