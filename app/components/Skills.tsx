import { Layers } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiDotnet,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiPostgresql,
  SiFirebase,
  SiGooglecloud,
  SiGit,
  SiScrumalliance,
  SiR,
} from "react-icons/si";
import { skillGroups } from "@/app/data/portfolio";

const brandIcons: Record<string, IconType> = {
  ".NET 8": SiDotnet,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Python: SiPython,
  JavaScript: SiJavascript,
  "HTML/CSS": SiHtml5,
  PostgreSQL: SiPostgresql,
  Firebase: SiFirebase,
  Git: SiGit,
  Scrum: SiScrumalliance,
  R: SiR,
};

function getBrandIcon(item: string): IconType | null {
  if (item.startsWith("Google Cloud")) return SiGooglecloud;
  return brandIcons[item] ?? null;
}

export default function Skills({ categories, title = "Habilidades técnicas" }: { categories?: string[]; title?: string }) {
  const visibleGroups = categories
    ? skillGroups.filter((group) => categories.includes(group.category))
    : skillGroups;

  return (
    <section id="skills" className="mb-32 scroll-mt-32 bg-slate-50 rounded-xl p-6 md:p-10">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2 font-heading">
        <Layers className="text-google-blue" aria-hidden="true" /> {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleGroups.map((group) => (
          <div
            key={group.category}
            className="bg-white border border-slate-200 rounded-xl p-5"
          >
            <h3 className="text-slate-900 font-bold mb-3 flex items-center gap-2 font-heading">
              <group.icon className="text-google-blue" size={18} aria-hidden="true" />
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const BrandIcon = getBrandIcon(item);
                return (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200"
                  >
                    {BrandIcon && <BrandIcon size={12} className="text-google-blue shrink-0" aria-hidden="true" />}
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
