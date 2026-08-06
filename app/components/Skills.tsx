import { Layers } from "lucide-react";
import { skillGroups } from "@/app/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mb-32 scroll-mt-32">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
        <Layers className="text-indigo-600" /> Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-slate-50 border border-slate-200 rounded-xl p-5"
          >
            <h3 className="text-slate-900 font-bold mb-3 flex items-center gap-2">
              <group.icon className="text-indigo-600" size={18} />
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
