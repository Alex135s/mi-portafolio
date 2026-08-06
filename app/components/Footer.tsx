import { profile } from "@/app/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-center text-slate-500 text-sm relative z-10">
      <p>
        © {new Date().getFullYear()} {profile.fullName}. Construido con Next.js & Tailwind.
      </p>
    </footer>
  );
}
