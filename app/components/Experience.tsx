import { Briefcase, GraduationCap, Award } from "lucide-react";
import { experience, education, activities } from "@/app/data/portfolio";
import GoogleDots from "./GoogleDots";

export default function Experience() {
  return (
    <section id="experiencia" className="mb-32 scroll-mt-32">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
        <Briefcase className="text-google-blue" /> Experiencia
      </h2>

      <div className="relative border-l border-slate-200 pl-12 space-y-10">
        {experience.map((job) => (
          <div key={job.company} className="relative">
            <span
              className={`absolute -left-[58px] top-0 w-9 h-9 rounded-full border-2 flex items-center justify-center ${
                job.current
                  ? "bg-google-blue border-google-blue-border text-white"
                  : "bg-white border-slate-200 text-slate-400"
              }`}
            >
              <job.icon size={16} />
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="text-lg font-bold text-slate-900">
                {job.role} <span className="text-slate-500 font-normal">· {job.company}</span>
              </h3>
              <span className="text-sm text-slate-500 shrink-0">{job.period}</span>
            </div>
            {job.current && (
              <span className="inline-block mb-2 text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium uppercase tracking-wider">
                Actual
              </span>
            )}
            <ul className="space-y-1.5 text-slate-600 text-sm list-disc list-outside ml-4">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <GraduationCap className="text-google-blue" size={22} /> Educación
          </h3>
          <div className="space-y-4">
            {education.map((item) => (
              <div
                key={item.degree}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3"
              >
                <GraduationCap className="text-google-blue shrink-0 mt-0.5" size={20} />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <p className="text-slate-900 font-medium">{item.degree}</p>
                    <span className="text-xs text-slate-500 shrink-0">{item.period}</span>
                  </div>
                  <p className="text-slate-600 text-sm mt-1">
                    {item.institution} · {item.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Award className="text-amber-500" size={22} /> Actividades y reconocimientos
          </h3>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3"
              >
                <activity.icon className="text-amber-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <p className="text-slate-900 font-medium flex items-center gap-2">
                      {activity.title}
                      {activity.title.includes("GDG") && <GoogleDots />}
                    </p>
                    <span className="text-xs text-slate-500 shrink-0">{activity.period}</span>
                  </div>
                  <p className="text-slate-600 text-sm mt-1">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
