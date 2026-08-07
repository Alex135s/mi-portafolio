import { BadgeCheck, Cloud, Network, Users, BarChart3, ExternalLink, Sparkles } from "lucide-react";
import { certifications, type Certification } from "@/app/data/portfolio";
import GoogleDots from "./GoogleDots";

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
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
        <BadgeCheck className="text-google-blue" /> Certificaciones
      </h2>

      {featured && (
        <div className="mb-6 rounded-2xl border border-google-blue-border bg-gradient-to-br from-google-blue-light via-white to-white p-6 flex flex-col sm:flex-row sm:items-center gap-5 shadow-sm">
          <div className="w-14 h-14 rounded-xl bg-google-blue flex items-center justify-center shrink-0">
            <Cloud className="text-white" size={28} />
          </div>
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-google-blue-dark mb-1">
              <Sparkles size={12} /> Certificación destacada
            </span>
            <p className="text-slate-900 font-bold text-lg">{featured.name}</p>
            <p className="text-slate-600 text-sm mt-0.5">
              {featured.issuer}
              {featured.date ? ` · ${featured.date}` : ""}
            </p>
          </div>
          <GoogleDots size={8} />
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
