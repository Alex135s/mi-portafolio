import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Globe,
  FileText,
  MessageCircle,
} from "lucide-react";
import { profile } from "@/app/data/portfolio";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: profile.phone,
    href: profile.whatsapp,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "geremy-alexander-hernandez-peña",
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="mb-20 scroll-mt-32">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
        <Mail className="text-indigo-600" /> Contacto
      </h2>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all"
            >
              <item.icon className="text-indigo-600 shrink-0" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                  {item.label}
                </p>
                <p className="text-slate-900 text-sm">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-slate-700">
            <MapPin className="text-indigo-600 shrink-0" size={20} />
            <span>{profile.location}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-700">
            <Globe className="text-indigo-600 shrink-0" size={20} />
            <span>Inglés {profile.englishLevel}</span>
          </div>
          <a
            href={profile.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold px-5 py-3 rounded-xl hover:bg-indigo-700 transition-all w-full shadow-sm"
          >
            <FileText className="w-5 h-5" />
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
