"use client";

import { useState } from "react";
import { Check, Copy, FileText, Github, Globe, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { profile } from "@/app/data/portfolio";
import { CvTrigger } from "@/app/components/CvModal";

const contactLinks = [
  { icon: MessageCircle, label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
  { icon: Linkedin, label: "LinkedIn", value: "geremy-alexander-hernandez-peña", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: profile.githubHandle, href: profile.github },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyFailed(false);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      setCopyFailed(true);
      window.setTimeout(() => setCopyFailed(false), 3000);
    }
  };

  return (
    <section id="contacto" className="mb-20 scroll-mt-32" aria-labelledby="contacto-title">
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-google-blue-dark">Siguiente paso</p>
        <h2 id="contacto-title" className="text-3xl font-bold text-slate-900 font-heading text-balance">Conversemos sobre cómo puedo aportar</h2>
        <p className="mt-3 text-slate-600">Disponible para oportunidades de soporte, infraestructura, análisis de sistemas y desarrollo de aplicaciones internas.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 lg:grid-cols-3">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
            <Mail className="shrink-0 text-google-blue" size={20} aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Email</p>
              <a href={`mailto:${profile.email}`} className="break-words text-sm text-slate-900 hover:text-google-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue rounded">{profile.email}</a>
            </div>
            <button type="button" onClick={copyEmail} aria-label="Copiar correo electrónico" className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue">
              {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
            </button>
          </div>

          {contactLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-[border-color,box-shadow] hover:border-google-blue-border hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2">
              <item.icon className="shrink-0 text-google-blue" size={20} aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{item.label}</p>
                <p className="truncate text-sm text-slate-900">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-slate-700"><MapPin className="shrink-0 text-google-blue" size={20} aria-hidden="true" /><span>{profile.location}</span></div>
          <div className="flex items-center gap-3 text-slate-700"><Globe className="shrink-0 text-google-blue" size={20} aria-hidden="true" /><span>Inglés {profile.englishLevel}</span></div>
          <CvTrigger className="flex w-full items-center justify-center gap-2 rounded-xl bg-google-blue px-5 py-3 font-bold text-white shadow-sm transition-colors hover:bg-google-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2">
            <FileText className="h-5 w-5" aria-hidden="true" /> Ver CV Analista TI
          </CvTrigger>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {copied ? "Correo copiado" : copyFailed ? `No se pudo copiar. El correo es ${profile.email}` : ""}
      </p>
    </section>
  );
}
