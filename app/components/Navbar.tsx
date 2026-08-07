"use client";

import { useState } from "react";
import Link from "next/link";
import { Code2, Menu, X } from "lucide-react";
import { profile } from "@/app/data/portfolio";

const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-40">
      <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-full px-6 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          <Link
            href="#top"
            className="flex items-center gap-2 font-bold text-slate-900 tracking-wider"
          >
            <div className="w-8 h-8 bg-google-blue rounded-lg flex items-center justify-center text-white">
              <Code2 size={18} />
            </div>
            <span>{profile.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="bg-google-blue text-white px-4 py-2 rounded-full font-bold hover:bg-google-blue-dark transition"
            >
              Contactar
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="md:hidden p-2 text-slate-700"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl px-6 py-4 shadow-lg flex flex-col gap-4 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-slate-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="bg-google-blue text-white px-4 py-2 rounded-full font-bold text-center"
          >
            Contactar
          </a>
        </div>
      )}
    </nav>
  );
}
