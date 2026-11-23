import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import Link from "next/link";
import { profile, heroSkills } from "@/app/data/portfolio";
import { CvTrigger } from "@/app/components/CvModal";

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
          {profile.availability}
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
          {profile.roles[0]}
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
          Hola, soy <strong>{profile.fullName}</strong>. Actualmente trabajo como{" "}
          <span className="text-slate-900 font-medium">Asistente de TI en ElectroDunas</span>,
          administrando identidades, accesos, dispositivos y soporte corporativo. También desarrollo
          y mantengo <span className="text-slate-900 font-medium">ActivosTI</span> con{" "}
          <span className="text-slate-900 font-medium">.NET 8, C# y SQL Server</span>, conectando
          infraestructura, automatización y desarrollo para resolver necesidades reales del negocio.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 py-4">
          {heroSkills.map((skill) => (
            <span
              key={skill.name}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors cursor-default shadow-sm ${skill.colorClasses}`}
            >
              <skill.icon size={16} className="shrink-0 text-google-blue" />
              {skill.name}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 pt-2">
          <Link href="/infraestructura" className="flex items-center gap-2 rounded-full bg-google-blue px-5 py-3 font-bold text-white shadow-sm transition-colors hover:bg-google-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2">
            Ver experiencia en TI <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <a href="#contacto" className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition-colors hover:border-google-blue-border hover:text-google-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2">
            <Mail className="h-5 w-5" aria-hidden="true" /> Contactarme
          </a>
          <CvTrigger
            className="flex items-center gap-2 rounded-full px-3 py-3 font-semibold text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue"
          >
            <FileText className="w-5 h-5" aria-hidden="true" />
            Ver CV
          </CvTrigger>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver perfil de GitHub"
            className="p-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-full hover:bg-slate-900 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver perfil de LinkedIn"
            className="p-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-full hover:bg-[#0077b5] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Enviar correo"
            className="p-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-full hover:bg-red-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2"
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
