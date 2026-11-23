"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Github,
  Layers,
  ListChecks,
  Play,
  Terminal,
  TrendingUp,
  Video,
  X,
} from "lucide-react";
import { projects, type Project } from "@/app/data/portfolio";

const visibleProjects = projects.filter((project) => project.visible !== false && !project.placeholder);
const isYouTube = (url: string) => url.includes("youtube") || url.includes("youtu.be");
const isVideo = (fileName: string) => fileName.toLowerCase().endsWith(".mp4");

function setProjectInUrl(slug?: string, replace = false) {
  const url = new URL(window.location.href);
  if (slug) url.searchParams.set("proyecto", slug);
  else url.searchParams.delete("proyecto");
  window.history[replace ? "replaceState" : "pushState"]({}, "", url);
}

function ProjectMedia({ source, title, priority = false }: { source: string; title: string; priority?: boolean }) {
  if (isYouTube(source)) {
    return <iframe src={source} className="h-full w-full" title={`Video demo de ${title}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />;
  }
  if (isVideo(source)) {
    return <video src={source} controls className="h-full w-full object-contain">Tu navegador no soporta videos.</video>;
  }
  return <Image src={source} alt={`Captura de ${title}`} width={1600} height={900} priority={priority} className="h-full w-full object-contain" />;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedMedia, setSelectedMedia] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef(new Map<number, HTMLButtonElement>());

  const closeProject = useCallback((updateUrl = true) => {
    setSelectedProject((current) => {
      if (current) window.setTimeout(() => triggerRefs.current.get(current.id)?.focus(), 0);
      return null;
    });
    if (updateUrl) setProjectInUrl(undefined, true);
  }, []);

  const openProject = useCallback((project: Project, updateUrl = true) => {
    setSelectedProject(project);
    setSelectedMedia(project.images[0] ?? "");
    if (updateUrl) setProjectInUrl(project.slug);
  }, []);

  useEffect(() => {
    const syncFromUrl = () => {
      const slug = new URL(window.location.href).searchParams.get("proyecto");
      const project = visibleProjects.find((item) => item.slug === slug);
      if (project) openProject(project, false);
      else closeProject(false);
    };
    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [closeProject, openProject]);

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeProject();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), iframe, video[controls], [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeProject, selectedProject]);

  const currentIndex = selectedProject ? visibleProjects.findIndex((project) => project.id === selectedProject.id) : -1;
  const showAdjacentProject = (offset: number) => {
    const nextIndex = (currentIndex + offset + visibleProjects.length) % visibleProjects.length;
    openProject(visibleProjects[nextIndex]);
  };

  return (
    <>
      <section id="proyectos" className="mb-32 scroll-mt-32" aria-labelledby="proyectos-title">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-google-blue-dark">Evidencia de desarrollo</p>
          <h2 id="proyectos-title" className="flex items-center gap-2 text-3xl font-bold text-slate-900 font-heading text-balance">
            <Terminal className="text-google-blue" aria-hidden="true" /> Proyectos de desarrollo
          </h2>
          <p className="mt-3 text-slate-600">Casos con capturas, arquitectura, tecnologías y resultados. Selecciona uno para revisar el detalle.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <button
              ref={(element) => { if (element) triggerRefs.current.set(project.id, element); }}
              type="button"
              key={project.id}
              onClick={() => openProject(project)}
              aria-haspopup="dialog"
              className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-google-blue-border hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <Image src={project.images[0]} alt={project.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-google-blue font-heading">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600">{project.shortDesc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="rounded border border-slate-200 bg-slate-100 px-2 py-1 text-xs text-slate-700">{tag}</span>)}
                </div>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-google-blue-dark">Ver caso <ArrowRight size={16} aria-hidden="true" /></span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedProject ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
          <button type="button" tabIndex={-1} aria-label="Cerrar detalle del proyecto" className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => closeProject()} />
          <div ref={dialogRef} className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-y-auto overscroll-contain rounded-2xl border border-slate-200 bg-white shadow-2xl">
            <div className="relative h-64 w-full border-b border-slate-200 bg-slate-950 md:h-[28rem]">
              {selectedMedia ? <ProjectMedia source={selectedMedia} title={selectedProject.title} priority /> : null}
              <button ref={closeButtonRef} type="button" onClick={() => closeProject()} aria-label="Cerrar detalle del proyecto" className="absolute right-4 top-4 z-10 rounded-full border border-slate-200 bg-white/95 p-2 text-slate-700 shadow-sm transition-colors hover:bg-red-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            {selectedProject.images.length > 1 ? (
              <div className="flex gap-3 overflow-x-auto border-b border-slate-200 bg-slate-50 p-3">
                {selectedProject.images.map((media, index) => (
                  <button key={media} type="button" onClick={() => setSelectedMedia(media)} aria-label={`Ver ${isYouTube(media) || isVideo(media) ? "video" : "captura"} ${index + 1}`} className={`relative h-16 w-28 shrink-0 overflow-hidden rounded-lg border-2 bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue ${selectedMedia === media ? "border-google-blue" : "border-transparent"}`}>
                    {isYouTube(media) || isVideo(media) ? <span className="flex h-full items-center justify-center text-white"><Play size={22} aria-hidden="true" /></span> : <Image src={media} alt="" fill sizes="112px" className="object-cover" />}
                  </button>
                ))}
              </div>
            ) : null}

            <div className="p-6 md:p-8">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                <div className="min-w-0">
                  <h2 id="project-dialog-title" className="text-3xl font-bold text-slate-900 font-heading text-balance md:text-4xl">{selectedProject.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600 text-pretty">{selectedProject.fullDesc}</p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  {selectedProject.demoLink ? <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-google-blue px-4 py-3 font-bold text-white transition-colors hover:bg-google-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2"><Video size={19} aria-hidden="true" />{selectedProject.demoLabel ?? "Ver demo"}</a> : null}
                  {selectedProject.repoLink ? <a href={selectedProject.repoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-3 font-bold text-slate-800 transition-colors hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue"><Github size={19} aria-hidden="true" />Repositorio</a> : <span className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-600">Caso corporativo · código privado</span>}
                </div>
              </div>

              {selectedProject.features?.length ? <section className="mt-10"><h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-slate-900 font-heading"><ListChecks className="text-google-blue" aria-hidden="true" />Funcionalidades</h3><ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 text-sm text-slate-600 md:grid-cols-2">{selectedProject.features.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-google-blue" size={17} aria-hidden="true" />{item}</li>)}</ul></section> : null}

              <section className="mt-10"><h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-slate-900 font-heading"><Layers className="text-google-blue" aria-hidden="true" />Stack tecnológico</h3><div className="grid grid-cols-1 gap-4 md:grid-cols-2">{selectedProject.techStack.map((tech) => <article key={tech.name} className="rounded-xl border border-slate-200 bg-slate-50 p-4"><strong className="text-sm text-slate-900">{tech.name}</strong><p className="mt-2 text-sm text-slate-600">{tech.desc}</p></article>)}</div></section>

              {selectedProject.impact?.length ? <section className="mt-10"><h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-slate-900 font-heading"><TrendingUp className="text-emerald-600" aria-hidden="true" />Resultados</h3><ul className="grid grid-cols-1 gap-4 md:grid-cols-2">{selectedProject.impact.map((item) => <li key={item} className="flex gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"><CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={18} aria-hidden="true" />{item}</li>)}</ul></section> : null}

              <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
                <button type="button" onClick={() => showAdjacentProject(-1)} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue"><ArrowLeft size={18} aria-hidden="true" />Anterior</button>
                <span className="text-sm text-slate-500">{currentIndex + 1} de {visibleProjects.length}</span>
                <button type="button" onClick={() => showAdjacentProject(1)} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue">Siguiente<ArrowRight size={18} aria-hidden="true" /></button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
