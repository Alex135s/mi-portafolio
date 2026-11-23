"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Menu, X } from "lucide-react";
import { profile } from "@/app/data/portfolio";
import { CvTrigger } from "@/app/components/CvModal";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/infraestructura", label: "Infraestructura" },
  { href: "/desarrollo", label: "Desarrollo" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <nav ref={navRef} aria-label="Navegación principal" className="fixed top-4 left-1/2 z-40 w-[92%] max-w-4xl -translate-x-1/2">
      <div className="rounded-full border border-slate-200 bg-white/95 px-5 py-3 shadow-sm backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 rounded-lg font-bold tracking-wider text-slate-900 font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-google-blue text-white">
              <Code2 size={18} aria-hidden="true" />
            </span>
            <span>{profile.name}</span>
          </Link>

          <div className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`rounded px-1 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue ${active ? "text-google-blue-dark" : "hover:text-slate-950"}`}>
                  {link.label}
                </Link>
              );
            })}
            <CvTrigger className="rounded px-1 py-1 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue">
              CV
            </CvTrigger>
            <a href="#contacto" className="rounded-full bg-google-blue px-4 py-2 font-bold text-white transition-colors hover:bg-google-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2">
              Contactar
            </a>
          </div>

          <button type="button" onClick={() => setOpen((previous) => !previous)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="menu-movil" className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue md:hidden">
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="menu-movil" className="mt-2 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/95 p-4 text-sm font-medium text-slate-700 shadow-lg backdrop-blur-xl md:hidden">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)} className={`rounded-lg px-3 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue ${active ? "bg-google-blue-light text-google-blue-dark" : "hover:bg-slate-100"}`}>
                {link.label}
              </Link>
            );
          })}
          <CvTrigger onBeforeOpen={() => setOpen(false)} className="rounded-lg px-3 py-3 text-left transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue">
            CV
          </CvTrigger>
          <a href="#contacto" onClick={() => setOpen(false)} className="mt-1 rounded-lg bg-google-blue px-4 py-3 text-center font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue">
            Contactar
          </a>
        </div>
      ) : null}
    </nav>
  );
}
