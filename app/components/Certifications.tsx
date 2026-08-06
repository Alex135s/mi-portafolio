import { BadgeCheck, Cloud, Network, Users, BarChart3, ExternalLink } from "lucide-react";
import { certifications, type Certification } from "@/app/data/portfolio";

function certIcon(cert: Certification) {
  const issuer = cert.issuer.toLowerCase();
  if (issuer.includes("google")) return Cloud;
  if (issuer.includes("cisco")) return Network;
  if (issuer.includes("certiprof")) return Users;
  if (issuer.includes("udemy")) return BarChart3;
  return BadgeCheck;
}

export default function Certifications() {
  return (
    <section id="certificaciones" className="mb-32 scroll-mt-32">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
        <BadgeCheck className="text-indigo-600" /> Certificaciones
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert) => {
          const Icon = certIcon(cert);
          return (
            <div
              key={cert.name}
              className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <Icon className="text-indigo-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-slate-900 font-medium">{cert.name}</p>
                  <p className="text-slate-500 text-sm mt-1">
                    {cert.issuer}
                    {cert.date ? ` · ${cert.date}` : ""}
                  </p>
                </div>
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-indigo-600 text-sm font-medium mt-3 hover:text-indigo-700 transition-colors"
                >
                  Ver credencial <ExternalLink size={14} />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
