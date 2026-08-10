import Image from "next/image";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { profile, heroSkills } from "@/app/data/portfolio";

export default function Hero() {
  return (
    <div
      id="top"
      className="relative flex flex-col-reverse md:flex-row items-center gap-12 mb-32 pt-4 scroll-mt-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 80% 60% at 30% 40%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 30% 40%, black 40%, transparent 90%)",
        }}
      />

      <div className="flex-1 text-center md:text-left space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-google-blue-border bg-google-blue-light text-google-blue-dark text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Disponible para nuevos retos
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
          {profile.roles[0]} &{" "}
          <span className="text-google-blue-dark">{profile.roles[1]}</span>
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
          Hola, soy <strong>{profile.fullName}</strong>. Actualmente practicante en{" "}
          <span className="text-slate-900 font-medium">ElectroDunas</span>, donde lidero el
          desarrollo de ActivosTI usando{" "}
          <span className="text-slate-900 font-medium">.NET 8, C# y SQL Server</span>. Vengo de
          un camino en análisis de datos con{" "}
          <span className="text-slate-900 font-medium">Power BI, Python y SQL</span>, y soy
          Organizador del <span className="text-slate-900 font-medium">GDG Ica</span>.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 py-4">
          {heroSkills.map((skill) => (
            <span
              key={skill.name}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all cursor-default shadow-sm ${skill.colorClasses}`}
            >
              <skill.icon size={16} className="shrink-0 text-google-blue" />
              {skill.name}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-2">
          <a
            href={profile.cvPath}
            download="CV_Geremy_Hernandez.pdf"
            className="flex items-center gap-2 bg-google-blue text-white font-bold px-5 py-3 rounded-full hover:bg-google-blue-dark transition-all hover:scale-105 shadow-sm"
          >
            <FileText className="w-5 h-5" />
            Descargar CV
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver perfil de GitHub"
            className="p-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-full hover:bg-slate-900 hover:text-white transition-all"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver perfil de LinkedIn"
            className="p-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-full hover:bg-[#0077b5] hover:text-white transition-all"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Enviar correo"
            className="p-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-full hover:bg-red-500 hover:text-white transition-all"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-google-blue-light to-google-blue-border blur-[80px] opacity-60 rounded-full" />
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-2 border-slate-200 shadow-xl rotate-3 hover:rotate-0 transition duration-500">
          <Image
            src="/GEREMYFOTO.png"
            alt={profile.fullName}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
