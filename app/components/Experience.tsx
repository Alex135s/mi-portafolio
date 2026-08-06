import { Briefcase, GraduationCap, Award } from "lucide-react";
import { experience, education, activities } from "@/app/data/portfolio";

export default function Experience() {
  return (
    <section id="experiencia" className="mb-32 scroll-mt-32">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
        <Briefcase className="text-emerald-400" /> Experiencia
      </h2>

      <div className="relative border-l border-white/10 pl-8 space-y-10">
        {experience.map((job) => (
          <div key={job.company} className="relative">
            <span
              className={`absolute -left-[38px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                job.current
                  ? "bg-emerald-400 border-emerald-300"
                  : "bg-[#0a0a0a] border-white/30"
              }`}
            />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="text-lg font-bold text-white">
                {job.role} <span className="text-gray-500 font-normal">· {job.company}</span>
              </h3>
              <span className="text-sm text-gray-500 shrink-0">{job.period}</span>
            </div>
            {job.current && (
              <span className="inline-block mb-2 text-xs px-2 py-0.5 rounded bg-emerald-900/30 text-emerald-400 border border-emerald-500/20 font-medium uppercase tracking-wider">
                Actual
              </span>
            )}
            <ul className="space-y-1.5 text-gray-400 text-sm list-disc list-outside ml-4">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <GraduationCap className="text-indigo-400" size={22} /> Educación
          </h3>
          <div className="space-y-4">
            {education.map((item) => (
              <div
                key={item.degree}
                className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-white font-medium">{item.degree}</p>
                  <span className="text-xs text-gray-500 shrink-0">{item.period}</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  {item.institution} · {item.status}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Award className="text-amber-400" size={22} /> Actividades y reconocimientos
          </h3>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-white font-medium">{activity.title}</p>
                  <span className="text-xs text-gray-500 shrink-0">{activity.period}</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
