import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Highlights from "@/app/components/Highlights";
import CareerPaths from "@/app/components/CareerPaths";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import FloatingContact from "@/app/components/FloatingContact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-600 selection:bg-google-blue-light">
      <a href="#contenido-principal" className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-slate-900 px-4 py-2 text-white transition-transform focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Saltar al contenido</a>
      <Navbar />
      <main id="contenido-principal" className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-32">
        <Hero />
        <Highlights />
        <CareerPaths />
        <About />
        <Contact />
      </main>
      <FloatingContact />
      <Footer />
    </div>
  );
}
