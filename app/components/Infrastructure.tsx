import { KeyRound, Network, ServerCog } from "lucide-react";

const cases = [
  {
    title: "Identidades y accesos",
    icon: KeyRound,
    summary:
      "Administración de usuarios, grupos, accesos y permisos con Active Directory, Microsoft Entra ID, Intune y SharePoint.",
    evidence: "Altas, modificaciones, control de accesos y gestión de dispositivos corporativos.",
  },
  {
    title: "Soporte y activos tecnológicos",
    icon: ServerCog,
    summary:
      "Soporte a usuarios y mantenimiento del parque tecnológico corporativo, integrado con el sistema interno ActivosTI.",
    evidence: "800+ activos tecnológicos y 200+ usuarios atendidos por el área de TI.",
  },
  {
    title: "Redes y monitoreo",
    icon: Network,
    summary:
      "Atención de incidencias de conectividad y monitoreo preventivo de impresoras mediante SNMP y alertas automáticas.",
    evidence: "Formación CCNAv7 y aplicación de SNMP en un entorno empresarial.",
  },
];

export default function Infrastructure() {
  return (
    <section
      id="infraestructura"
      className="mb-32 scroll-mt-32 rounded-2xl bg-slate-900 p-6 text-white md:p-10"
      aria-labelledby="infraestructura-title"
    >
      <div className="mb-8 max-w-3xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-sky-300">
          Perfil de Analista de TI
        </p>
        <h2 id="infraestructura-title" className="text-2xl font-bold font-heading text-balance">
          Infraestructura, soporte y telecomunicaciones
        </h2>
        <p className="mt-3 text-slate-300">
          Experiencia aplicada en un entorno corporativo del sector energético, conectando operación,
          seguridad de accesos y automatización.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {cases.map((item) => (
          <article key={item.title} className="rounded-xl border border-slate-700 bg-slate-800 p-5">
            <item.icon className="text-sky-300" size={24} aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold font-heading">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.summary}</p>
            <p className="mt-4 border-t border-slate-700 pt-4 text-sm font-medium text-white">
              {item.evidence}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
