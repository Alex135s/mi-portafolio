import { profile } from "@/app/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] py-8 text-center text-gray-600 text-sm">
      <p>
        © {new Date().getFullYear()} {profile.fullName}. Construido con Next.js & Tailwind.
      </p>
    </footer>
  );
}
