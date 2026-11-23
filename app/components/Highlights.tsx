const stats = [
  { value: "+800", label: "Activos tecnológicos bajo gestión" },
  { value: "+200", label: "Usuarios en ElectroDunas" },
  { value: "-75%", label: "Tiempo del proceso de firma digital" },
  { value: "GCP", label: "Associate Cloud Engineer" },
];

export default function Highlights() {
  return (
    <div className="mb-32 rounded-xl border border-slate-200 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-slate-200">
      {stats.map((stat) => (
        <div key={stat.label} className="p-6 text-center">
          <p className="text-3xl md:text-4xl font-extrabold text-google-blue-dark font-heading tabular-nums">
            {stat.value}
          </p>
          <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
