import { BadgeCheck, ExternalLink } from "lucide-react";
import { certifications } from "@/app/data/portfolio";

export default function Certifications() {
  return (
    <section id="certificaciones" className="mb-32 scroll-mt-32">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
        <BadgeCheck className="text-sky-400" /> Certificaciones
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:border-sky-500/30 transition-colors"
          >
            <div>
              <p className="text-white font-medium">{cert.name}</p>
              <p className="text-gray-500 text-sm mt-1">
                {cert.issuer}
                {cert.date ? ` · ${cert.date}` : ""}
              </p>
            </div>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sky-400 text-sm font-medium mt-3 hover:text-sky-300 transition-colors"
              >
                Ver credencial <ExternalLink size={14} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
