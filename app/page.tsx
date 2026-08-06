import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Certifications from "@/app/components/Certifications";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-indigo-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-900/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-900/20 rounded-full blur-[128px]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <Hero />
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
