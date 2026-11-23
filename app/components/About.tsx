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
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2 font-heading">
        <User className="text-google-blue" aria-hidden="true" /> Sobre mí
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4 text-slate-600 text-lg leading-relaxed text-pretty">
          <p>
            Soy Bachiller en Ingeniería de Sistemas e Informática (egresado de la UTP – Ica) con
            experiencia práctica en infraestructura TI, soporte técnico y desarrollo de software.
            Actualmente soy <span className="text-slate-900 font-medium">Asistente de TI en ElectroDunas</span>,
            donde administro identidades, accesos, dispositivos y soporte corporativo.
          </p>
          <p>
            Combino infraestructura con desarrollo de aplicaciones internas: mantengo ActivosTI en
            .NET 8 y SQL Server y cuento con experiencia previa en análisis de datos. Mi enfoque es
            entender el problema operativo y convertirlo en una solución técnica verificable.
          </p>
        </div>

        <div className="space-y-4">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3"
            >
              <fact.icon className="text-google-blue shrink-0 mt-0.5" size={20} aria-hidden="true" />
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
