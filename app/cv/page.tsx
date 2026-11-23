import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/app/components/PrintButton";
import {
  activities,
  certifications,
  education,
  experience,
  profile,
  skillGroups,
} from "@/app/data/portfolio";

export const metadata: Metadata = {
  title: "CV Analista de TI | Geremy Hernández",
  description: "CV profesional de Geremy Hernández para posiciones de Analista y Asistente de TI.",
};

const currentExperience = experience.slice(0, 2);
const previousExperience = experience.slice(2);

export default function CvPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-700 print:bg-white print:p-0">
      <div className="mx-auto mb-4 flex max-w-[210mm] items-center justify-between print:hidden">
        <Link href="/" className="font-semibold text-slate-700 hover:text-slate-950">
          ← Volver al portafolio
        </Link>
        <PrintButton />
      </div>

      <article className="cv-sheet mx-auto max-w-[210mm] bg-white p-10 shadow-xl print:max-w-none print:p-[12mm] print:shadow-none">
        <header className="border-b-2 border-emerald-700 pb-5">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">{profile.fullName}</h1>
          <p className="mt-1 text-lg font-semibold text-emerald-800">
            Analista de TI · Infraestructura, Soporte, Identidades y Automatización
          </p>
          <p className="mt-3 text-sm text-slate-600">
            {profile.location} · {profile.phone} · {profile.email} · LinkedIn · GitHub: {profile.githubHandle}
          </p>
        </header>

        <section className="cv-section">
          <h2>Perfil profesional</h2>
          <p>
            Bachiller en Ingeniería de Sistemas e Informática y Asistente de TI en ElectroDunas,
            con experiencia en infraestructura, soporte corporativo, gestión de identidades y
            accesos, dispositivos y activos tecnológicos. Administro herramientas de Microsoft y
            desarrollo aplicaciones internas con .NET 8, C# y SQL Server. Cuento con certificación
            Google Associate Cloud Engineer y formación CCNAv7.
          </p>
        </section>

        <section className="cv-section">
          <h2>Experiencia en ElectroDunas</h2>
          {currentExperience.map((job) => (
            <div key={`${job.role}-${job.period}`} className="mb-5 break-inside-avoid">
              <div className="flex items-baseline justify-between gap-4">
                <h3>{job.role} · {job.company}</h3>
                <span>{job.period}</span>
              </div>
              <ul>
                {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section break-inside-avoid">
          <h2>Proyecto destacado</h2>
          <h3>ActivosTI — Sistema de Gestión de Activos de TI</h3>
          <p className="mt-1">
            Aplicación empresarial en .NET 8, C#, SQL Server y Entity Framework Core para
            centralizar más de 800 activos utilizados por más de 200 colaboradores. Incluye roles y
            permisos, auditoría, firma electrónica, reportes, portal de autoservicio, chatbot y
            monitoreo SNMP. El proceso de firma pasó de 5–10 minutos a menos de 2 minutos.
          </p>
        </section>

        <div className="cv-page-break" />

        <section className="cv-section mt-0">
          <h2>Experiencia previa</h2>
          {previousExperience.map((job) => (
            <div key={`${job.role}-${job.period}`} className="mb-5 break-inside-avoid">
              <div className="flex items-baseline justify-between gap-4">
                <h3>{job.role} · {job.company}</h3>
                <span>{job.period}</span>
              </div>
              <ul>
                {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section break-inside-avoid">
          <h2>Educación</h2>
          {education.map((item) => (
            <div key={item.degree} className="flex items-baseline justify-between gap-4">
              <div><h3>{item.degree}</h3><p>{item.institution} · {item.status}</p></div>
              <span>{item.period}</span>
            </div>
          ))}
        </section>

        <section className="cv-section break-inside-avoid">
          <h2>Certificaciones</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1">
            {certifications.map((cert) => (
              <p key={cert.name}><strong>{cert.name}</strong> — {cert.issuer}{cert.date ? ` · ${cert.date}` : ""}</p>
            ))}
          </div>
        </section>

        <section className="cv-section break-inside-avoid">
          <h2>Habilidades técnicas</h2>
          <div className="space-y-1">
            {skillGroups.map((group) => (
              <p key={group.category}><strong>{group.category}:</strong> {group.items.join(" · ")}</p>
            ))}
          </div>
        </section>

        <section className="cv-section break-inside-avoid">
          <h2>Actividades, reconocimientos e idiomas</h2>
          {activities.map((activity) => <p key={activity.title}><strong>{activity.title}</strong> — {activity.desc}</p>)}
          <p className="mt-2"><strong>Idiomas:</strong> Español nativo · Inglés {profile.englishLevel}</p>
        </section>
      </article>
    </main>
  );
}
