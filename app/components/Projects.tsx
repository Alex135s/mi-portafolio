"use client";

import { useState } from "react";
import {
  Github,
  Terminal,
  X,
  Database,
  Layers,
  Image as ImageIcon,
  Video,
  ExternalLink,
} from "lucide-react";
import { projects, type Project } from "@/app/data/portfolio";

const isYouTube = (url: string) => url.includes("youtube") || url.includes("youtu.be");
const isVideo = (fileName: string) => fileName.toLowerCase().endsWith(".mp4");

function PlaceholderMedia({ project, className }: { project: Project; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-indigo-950/60 via-[#0a0a0a] to-purple-950/40 ${className ?? ""}`}
    >
      <project.placeholderIcon className="text-white/30" size={40} />
      <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
        Capturas próximamente
      </span>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="proyectos" className="mb-32 scroll-mt-32">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <Terminal className="text-pink-400" /> Proyectos Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="relative h-56 bg-gray-900 overflow-hidden">
                {project.placeholder ? (
                  <PlaceholderMedia project={project} className="w-full h-full" />
                ) : (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 group-hover:scale-105"
                  />
                )}
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
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.shortDesc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative bg-[#0f0f0f] border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col">
            <div className="relative w-full bg-[#050505] p-4 flex justify-center items-center border-b border-white/10">
              {selectedProject.placeholder ? (
                <PlaceholderMedia
                  project={selectedProject}
                  className="w-full h-64 rounded-lg"
                />
              ) : (
                <img
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[50vh] object-contain rounded-lg shadow-2xl"
                />
              )}

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar detalle del proyecto"
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-red-500/80 text-white rounded-full transition backdrop-blur-md border border-white/10 z-10"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedProject.fullDesc}
                  </p>
                </div>
                <div className="flex gap-3 shrink-0">
                  {selectedProject.repoLink ? (
                    <a
                      href={selectedProject.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition hover:scale-105 shadow-lg shadow-indigo-500/20"
                    >
                      <Github size={20} /> Repositorio
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm italic px-1 py-3">
                      Código fuente no disponible públicamente
                    </span>
                  )}
                </div>
              </div>

              <hr className="border-white/10 my-8" />

              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Layers className="text-emerald-400" /> Stack Tecnológico
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors"
                    >
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
                      <div
                        key={mediaFile}
                        className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#050505] group relative"
                      >
                        {isYouTube(mediaFile) ? (
                          <div className="relative w-full h-64 bg-black">
                            <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold flex items-center gap-1 pointer-events-none">
                              <Video size={12} /> VIDEO DEMO
                            </div>
                            <iframe
                              src={mediaFile}
                              className="w-full h-full"
                              title={`Video demo de ${selectedProject.title}`}
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
                          <img
                            src={mediaFile}
                            alt={`Captura ${index + 2} de ${selectedProject.title}`}
                            className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                          />
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
                    <strong>Nota técnica:</strong> Este proyecto utiliza una arquitectura escalable
                    y moderna
                    {selectedProject.repoLink
                      ? ". Puedes revisar el código fuente completo en mi GitHub."
                      : "."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
