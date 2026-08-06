import { User, MapPin, Globe, GraduationCap } from "lucide-react";
import { profile, education } from "@/app/data/portfolio";

const quickFacts = [
  { icon: MapPin, label: "Ubicación", value: profile.location },
  { icon: Globe, label: "Idiomas", value: `Español (nativo) · Inglés ${profile.englishLevel}` },
  {
    icon: GraduationCap,
    label: "Educación",
    value: `${education[0].degree} — ${education[0].status}`,
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="mb-32 scroll-mt-32">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
        <User className="text-indigo-600" /> Sobre mí
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4 text-slate-600 text-lg leading-relaxed">
          <p>
            Soy Bachiller en Ingeniería de Sistemas e Informática (egresado de la UTP – Ica) con
            experiencia práctica en infraestructura TI, soporte técnico y desarrollo de software.
            Actualmente soy practicante de Infraestructura y Telecomunicaciones en{" "}
            <span className="text-slate-900 font-medium">ElectroDunas</span>, donde lidero el
            desarrollo de <span className="text-slate-900 font-medium">ActivosTI</span>, un
            sistema web de gestión de activos tecnológicos construido en .NET 8 y SQL Server que
            hoy centraliza más de 800 equipos usados por más de 200 personas en la empresa.
          </p>
          <p>
            Antes de esto pasé por dos prácticas enfocadas en análisis de datos y Business
            Intelligence (Centro de Salud Guadalupe – MINSA y ACL Best Company), donde construí
            dashboards en Power BI y Looker Studio, automaticé reportes con Python y SQL, y
            aprendí a traducir datos en decisiones. Esa combinación —infraestructura, desarrollo y
            datos— es lo que más disfruto: entender un problema de negocio de punta a punta y
            construir la solución técnica completa.
          </p>
          <p>
            Fuera del trabajo soy{" "}
            <span className="text-slate-900 font-medium">Jefe de Logística del GDG Ica</span>{" "}
            (Google Developer Group), organizando eventos técnicos para la comunidad tech de mi
            región, y participé en el NASA International Space Apps Challenge 2025 con OXYRA,
            reconocido como &quot;Galactic Problem Solver&quot;.
          </p>
        </div>

        <div className="space-y-4">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3"
            >
              <fact.icon className="text-indigo-600 shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                  {fact.label}
                </p>
                <p className="text-slate-900 text-sm mt-1">{fact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
