import { ArrowRight, Code2, ServerCog } from "lucide-react";
import Link from "next/link";

const paths = [
  {
    title: "Sistemas e Infraestructura",
    subtitle: "Analista de TI",
    description:
      "Identidades, accesos, dispositivos, soporte, redes, monitoreo y mejora de procesos tecnológicos.",
    href: "/infraestructura",
    cta: "Ver experiencia de infraestructura",
    icon: ServerCog,
  },
  {
    title: "Desarrollo de Aplicaciones",
    subtitle: "Desarrollador Full Stack Jr.",
    description:
      "Aplicaciones internas con .NET, C#, SQL Server, Python y JavaScript orientadas a problemas reales.",
    href: "/desarrollo",
    cta: "Ver proyectos de desarrollo",
    icon: Code2,
  },
];

export default function CareerPaths() {
  return (
    <section id="rutas" className="mb-32 scroll-mt-32" aria-labelledby="rutas-title">
      <div className="mb-8 max-w-3xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-google-blue-dark">
          Dos rutas, una misma base técnica
        </p>
        <h2 id="rutas-title" className="text-2xl font-bold text-slate-900 font-heading text-balance">
          Elige la experiencia que quieres evaluar
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {paths.map((path) => (
          <article key={path.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <path.icon className="mb-5 text-google-blue" size={30} aria-hidden="true" />
            <p className="text-sm font-semibold text-google-blue-dark">{path.subtitle}</p>
            <h3 className="mt-1 text-2xl font-bold text-slate-900 font-heading">{path.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{path.description}</p>
            <Link
              href={path.href}
              className="mt-6 inline-flex items-center gap-2 font-semibold text-google-blue-dark hover:text-google-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue rounded"
            >
              {path.cta} <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
