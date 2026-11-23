import { ArrowRight, FileText, Mail } from "lucide-react";
import { CvTrigger } from "@/app/components/CvModal";

type ProfileIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
};

export default function ProfileIntro({ eyebrow, title, description, primaryHref, primaryLabel }: ProfileIntroProps) {
  return (
    <section id="top" className="mb-20 scroll-mt-32 pt-6">
      <p className="mb-3 text-sm font-bold uppercase tracking-wider text-google-blue-dark">{eyebrow}</p>
      <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 font-heading text-balance md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 text-pretty">{description}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={primaryHref} className="inline-flex items-center gap-2 rounded-full bg-google-blue px-5 py-3 font-bold text-white transition-colors hover:bg-google-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2">
          {primaryLabel} <ArrowRight size={18} aria-hidden="true" />
        </a>
        <a href="#contacto" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition-colors hover:border-google-blue-border hover:text-google-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2">
          <Mail size={18} aria-hidden="true" /> Contactarme
        </a>
        <CvTrigger className="inline-flex items-center gap-2 rounded-full px-4 py-3 font-semibold text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue">
          <FileText size={18} aria-hidden="true" /> Ver CV
        </CvTrigger>
      </div>
    </section>
  );
}
