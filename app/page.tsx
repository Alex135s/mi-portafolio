"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { 
  Github, Linkedin, Code2, Terminal, X, Database, Layers, 
  Image as ImageIcon, Video, ExternalLink, Mail, FileText,
  BarChart3, Cloud, Users, Rocket 
} from "lucide-react";

// --- DATOS DE SKILLS ---
const heroSkills = [
  { 
    name: "Python & SQL", 
    icon: Database, 
    colorClasses: "bg-cyan-950/30 border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400/50"
  },
  { 
    name: "Power BI Data Analyst", 
    icon: BarChart3, 
    colorClasses: "bg-amber-950/30 border-amber-500/30 text-amber-300 hover:bg-amber-900/40 hover:border-amber-400/50" 
  },
  { 
    name: "Google Cloud Platform", 
    icon: Cloud, 
    colorClasses: "bg-sky-950/30 border-sky-500/30 text-sky-300 hover:bg-sky-900/40 hover:border-sky-400/50"
  },
  { 
    name: "React & Firebase", 
    icon: Code2, 
    colorClasses: "bg-indigo-950/30 border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/40 hover:border-indigo-400/50"
  },
  { 
    name: "Scrum Foundation", 
    icon: Users, 
    colorClasses: "bg-teal-950/30 border-teal-500/30 text-teal-300 hover:bg-teal-900/40 hover:border-teal-400/50"
  },
  { 
    name: "NASA Galactic Solver", 
    icon: Rocket, 
    colorClasses: "bg-rose-950/30 border-rose-500/30 text-rose-300 hover:bg-rose-900/40 hover:border-rose-400/50"
  }
];

// --- TUS PROYECTOS ---
const projectsData = [
  {
    id: 1,
    title: "Sistema de Gestión de Evaluación (CERM 2025)",
    shortDesc: "Plataforma integral para calificación automática y reportes de concursos escolares.",
    fullDesc: "Sistema web completo para la gestión del Concurso Regional de Matemáticas 2025. Permite el registro de participantes, calificación automatizada de exámenes, generación de rankings en tiempo real y emisión de reportes PDF oficiales. Desarrollado con una arquitectura moderna usando Streamlit para el frontend y Firebase para la persistencia de datos en tiempo real.",
    images: [
        "/dashboard_Final.png",   
        "/REGISTRO.png",          
        "/RESULTADO.png",         
        "/CONFIGURACION.png"      
    ],
    repoLink: "https://github.com/Alex135s/sistema-cerm-2025",
    demoLink: "#",
    techStack: [
      { name: "Streamlit", desc: "Interfaz de usuario interactiva y dashboard administrativo para gestión de concursos." },
      { name: "Firebase", desc: "Base de datos NoSQL (Firestore) para almacenamiento y sincronización en tiempo real." },
      { name: "Python", desc: "Motor de cálculo (Pandas) para procesar calificaciones y estadísticas de rendimiento." },
      { name: "FPDF", desc: "Generación automatizada de reportes PDF oficiales y certificados de mérito." }
    ],
    tags: ["Full Stack", "Python", "Firebase"]
  },
  {
    id: 2,
    title: "Smart Inventory & AI Chatbot",
    shortDesc: "Sistema de inventario inteligente con Asistente Virtual por voz.",
    fullDesc: "Aplicación Web Progresiva (SPA) para la gestión de inventarios, usuarios y ventas. Lo revolucionario de este proyecto es la integración de un Chatbot con Inteligencia Artificial (Dialogflow) que permite consultar stock, registrar productos y navegar por el sistema mediante comandos de voz y lenguaje natural.",
    images: [
        "/PY1_DASHBOARD.png",    
        "https://www.youtube.com/embed/L1VnQwdr_5o", // ✅ URL DE YOUTUBE AGREGADA AQUÍ
        "/PY2.png",              
        "/PY3.png"               
    ],
    repoLink: "https://github.com/Alex135s/smart-inventory-assistant",
    demoLink: "#",
    techStack: [
      { name: "JavaScript (ES6)", desc: "Desarrollo modular Vanilla JS sin frameworks pesados para máximo rendimiento." },
      { name: "Firebase", desc: "Backend Serverless completo: Firestore (BD) y Authentication." },
      { name: "Dialogflow (AI)", desc: "Procesamiento de Lenguaje Natural (NLP) para el asistente virtual." },
      { name: "Web Speech API", desc: "Reconocimiento de voz nativo para controlar el sistema hablando." },
      { name: "Chart.js", desc: "Visualización de métricas de negocio y balance de ingresos." }
    ],
    tags: ["JavaScript", "AI Chatbot", "Firebase"]
  },
  
];

// Helpers para detectar tipo de archivo
const isYouTube = (url: string) => url.includes("youtube") || url.includes("youtu.be");
const isVideo = (fileName: string) => fileName.toLowerCase().endsWith(".mp4");

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-indigo-500/30">
      
      {/* FONDO ANIMADO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-900/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-900/20 rounded-full blur-[128px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-40 bg-[#121212]/50 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-white tracking-wider">
            <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
              <Code2 size={18} />
            </div>
            <span>Alex135s</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="#proyectos" className="hover:text-white transition-colors">Proyectos</Link>
            <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
            <a href="mailto:geremy3132@gmail.com" className="bg-white text-black px-4 py-2 rounded-full font-bold hover:scale-105 transition">
              Contactar
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-32">
          
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium">
              🚀 Disponible para nuevos retos
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Ingeniero de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Datos & Sistemas</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              Hola, soy <strong>Geremy Hernandez</strong>. Ingeniero especializado en transformar datos complejos en estrategias claras usando <span className="text-white">Power BI, Python y SQL</span>. 
              Tengo experiencia construyendo arquitecturas en <span className="text-white">Google Cloud</span> y liderando la innovación tecnológica en mi región como Organizador del <span className="text-white">GDG Ica</span>.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 py-4">
                {heroSkills.map((skill) => (
                  <span 
                    key={skill.name} 
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all cursor-default shadow-sm ${skill.colorClasses}`}
                  >
                    <skill.icon size={16} className="shrink-0" />
                    {skill.name}
                  </span>
                ))}
            </div>

            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <a href="https://github.com/Alex135s" target="_blank" className="p-3 bg-[#1a1a1a] border border-white/10 rounded-full hover:bg-white hover:text-black transition-all group">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/geremy-hernandez" target="_blank" className="p-3 bg-[#1a1a1a] border border-white/10 rounded-full hover:bg-[#0077b5] hover:text-white transition-all group">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:geremy3132@gmail.com" className="p-3 bg-[#1a1a1a] border border-white/10 rounded-full hover:bg-red-500 hover:text-white transition-all group">
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://drive.google.com/file/d/1nOP1pUFx-fyQh4TcBCVKbkNr4Z1KIz91/view?usp=sharing" 
                target="_blank" 
                title="Ver CV"
                className="p-3 bg-[#1a1a1a] border border-white/10 rounded-full hover:bg-emerald-500 hover:text-white transition-all group"
              >
                <FileText className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 blur-[80px] opacity-40 rounded-full" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition duration-500">
               <Image 
                 src="/GEREMYFOTO.png" 
                 alt="Geremy Hernandez" 
                 fill
                 priority
                 className="object-cover" 
               />
            </div>
          </div>

        </div>

        {/* PROYECTOS GRID */}
        <div id="proyectos">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Terminal className="text-pink-400" /> Proyectos Destacados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)} 
                className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="relative h-56 bg-gray-900 overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <ExternalLink size={16} /> Ver Detalles
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* --- MODAL DE DETALLE --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
            onClick={() => setSelectedProject(null)} 
          />
          
          <div className="relative bg-[#0f0f0f] border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col">
            
            <div className="relative w-full bg-[#050505] p-4 flex justify-center items-center border-b border-white/10">
               {/* Previsualización en el encabezado del modal */}
               <img 
                 src={selectedProject.images[0]} 
                 alt={selectedProject.title}
                 className="w-full h-auto max-h-[50vh] object-contain rounded-lg shadow-2xl" 
               />
               
               <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-red-500/80 text-white rounded-full transition backdrop-blur-md border border-white/10 z-10"
               >
                 <X size={24} />
               </button>
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.fullDesc}</p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <a href={selectedProject.repoLink} target="_blank" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition hover:scale-105 shadow-lg shadow-indigo-500/20">
                    <Github size={20} /> Repositorio
                  </a>
                </div>
              </div>

              <hr className="border-white/10 my-8" />

              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Layers className="text-emerald-400" /> Stack Tecnológico
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.techStack.map((tech) => (
                    <div key={tech.name} className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                        <span className="bg-emerald-900/30 text-emerald-400 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider border border-emerald-500/20">
                            {tech.name}
                        </span>
                        </div>
                        <p className="text-gray-400 text-sm">{tech.desc}</p>
                    </div>
                    ))}
                </div>
              </div>

              {selectedProject.images.length > 1 && (
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <ImageIcon className="text-purple-400" /> Galería del Sistema
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedProject.images.slice(1).map((mediaFile, index) => (
                            <div key={index} className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#050505] group relative">
                                {isYouTube(mediaFile) ? (
                                    <div className="relative w-full h-64 bg-black">
                                        <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold flex items-center gap-1 pointer-events-none">
                                            <Video size={12} /> VIDEO DEMO
                                        </div>
                                        <iframe 
                                            src={mediaFile} 
                                            className="w-full h-full"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen
                                        />
                                    </div>
                                ) : isVideo(mediaFile) ? (
                                    <div className="relative w-full h-64 bg-black flex flex-col justify-center">
                                        <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold flex items-center gap-1">
                                            <Video size={12} /> VIDEO DEMO
                                        </div>
                                        <video src={mediaFile} controls className="w-full h-full object-contain">
                                            Tu navegador no soporta videos.
                                        </video>
                                    </div>
                                ) : (
                                    <img src={mediaFile} alt={`Captura ${index + 2}`} className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
              )}

              <div className="mt-8">
                 <div className="bg-blue-900/10 border border-blue-900/30 rounded-lg p-4 text-blue-200 text-sm flex gap-3 items-start">
                    <Database className="shrink-0 mt-0.5" size={16} />
                    <p>
                      <strong>Nota técnica:</strong> Este proyecto utiliza una arquitectura escalable y moderna. Puedes revisar el código fuente completo en mi GitHub.
                    </p>
                 </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-white/5 bg-[#050505] py-8 text-center text-gray-600 text-sm">
        <p>© 2024 Alex135s. Construido con Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}