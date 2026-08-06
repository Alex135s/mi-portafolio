import { Layers } from "lucide-react";
import { skillGroups } from "@/app/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mb-32 scroll-mt-32">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
        <Layers className="text-purple-400" /> Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5"
          >
            <h3 className="text-white font-bold mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/10"
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
