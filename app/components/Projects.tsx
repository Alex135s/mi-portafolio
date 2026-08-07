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
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-google-blue-light via-slate-50 to-sky-50 ${className ?? ""}`}
    >
      <project.placeholderIcon className="text-slate-300" size={40} />
      <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
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
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
          <Terminal className="text-google-blue" /> Proyectos Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-google-blue-border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl"
            >
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                {project.placeholder ? (
                  <PlaceholderMedia project={project} className="w-full h-full" />
                ) : (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-md border border-white text-slate-900 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <ExternalLink size={16} /> Ver Detalles
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-google-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.shortDesc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200"
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
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative bg-white border border-slate-200 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col">
            <div className="relative w-full bg-slate-50 p-4 flex justify-center items-center border-b border-slate-200">
              {selectedProject.placeholder ? (
                <PlaceholderMedia
                  project={selectedProject}
                  className="w-full h-64 rounded-lg"
                />
              ) : (
                <img
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[50vh] object-contain rounded-lg shadow-lg"
                />
              )}

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar detalle del proyecto"
                className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-red-500 text-slate-700 hover:text-white rounded-full transition backdrop-blur-md border border-slate-200 z-10"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {selectedProject.fullDesc}
                  </p>
                </div>
                <div className="flex gap-3 shrink-0">
                  {selectedProject.repoLink ? (
                    <a
                      href={selectedProject.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-google-blue hover:bg-google-blue-dark text-white px-6 py-3 rounded-xl font-bold transition hover:scale-105 shadow-sm"
                    >
                      <Github size={20} /> Repositorio
                    </a>
                  ) : (
                    <span className="text-slate-500 text-sm italic px-1 py-3">
                      Código fuente no disponible públicamente
                    </span>
                  )}
                </div>
              </div>

              <hr className="border-slate-200 my-8" />

              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Layers className="text-google-blue" /> Stack Tecnológico
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-google-blue-border transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-google-blue-light text-google-blue-dark text-xs font-bold px-2 py-1 rounded uppercase tracking-wider border border-google-blue-border">
                          {tech.name}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm">{tech.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {selectedProject.images.length > 1 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <ImageIcon className="text-google-blue" /> Galería del Sistema
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedProject.images.slice(1).map((mediaFile, index) => (
                      <div
                        key={mediaFile}
                        className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 group relative"
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
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800 text-sm flex gap-3 items-start">
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
