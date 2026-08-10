import { BadgeCheck, Cloud, Network, Users, BarChart3, ExternalLink, Sparkles } from "lucide-react";
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
  const featured = certifications.find((cert) => cert.name.includes("Google Associate Cloud Engineer"));
  const rest = certifications.filter((cert) => cert !== featured);

  return (
    <section id="certificaciones" className="mb-32 scroll-mt-32">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2 font-heading">
        <BadgeCheck className="text-google-blue" /> Certificaciones
      </h2>

      {featured && (
        <div className="mb-6 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="h-1.5 w-full bg-gradient-to-r from-google-blue via-google-red via-google-yellow to-google-green" />
          <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-google-blue flex items-center justify-center shrink-0">
              <Cloud className="text-white" size={28} />
            </div>
            <div className="flex-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-google-blue-dark mb-1">
                <Sparkles size={12} /> Certificación destacada
              </span>
              <p className="text-slate-900 font-bold text-lg font-heading">{featured.name}</p>
              <p className="text-slate-600 text-sm mt-0.5">
                {featured.issuer}
                {featured.date ? ` · ${featured.date}` : ""}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rest.map((cert) => {
          const Icon = certIcon(cert);
          return (
            <div
              key={cert.name}
              className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:border-google-blue-border hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <Icon className="text-google-blue shrink-0 mt-0.5" size={20} />
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
                  className="inline-flex items-center gap-1.5 text-google-blue text-sm font-medium mt-3 hover:text-google-blue-dark transition-colors"
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
