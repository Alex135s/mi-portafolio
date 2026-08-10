import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Highlights from "@/app/components/Highlights";
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
      <Navbar />

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <Hero />
        <Highlights />
        <About />
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
