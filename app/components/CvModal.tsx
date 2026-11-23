"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Download, X } from "lucide-react";
import { profile } from "@/app/data/portfolio";

const CvModalContext = createContext<{ openCv: () => void } | null>(null);

export function CvModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openCv = useCallback(() => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    setIsOpen(true);
  }, []);

  const closeCv = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCv();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;
      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], iframe, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled"));

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [closeCv, isOpen]);

  return (
    <CvModalContext.Provider value={{ openCv }}>
      {children}
      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm md:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeCv();
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
            className="flex h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3 md:px-5">
              <div className="min-w-0">
                <p id="cv-modal-title" className="truncate font-bold text-slate-950">
                  CV de Geremy Hernández
                </p>
                <p className="text-sm text-slate-500">Analista de TI</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={profile.cvPath}
                  download="CV_Geremy_Hernandez.pdf"
                  className="inline-flex items-center gap-2 rounded-lg bg-google-blue px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-google-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue focus-visible:ring-offset-2"
                >
                  <Download size={17} aria-hidden="true" />
                  <span className="hidden sm:inline">Descargar</span>
                </a>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeCv}
                  aria-label="Cerrar vista del CV"
                  className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-google-blue"
                >
                  <X size={22} aria-hidden="true" />
                </button>
              </div>
            </div>
            <iframe
              src={`${profile.cvPath}#view=FitH`}
              title="Vista previa del CV de Geremy Hernández"
              className="min-h-0 w-full flex-1 bg-slate-100"
            />
          </div>
        </div>
      ) : null}
    </CvModalContext.Provider>
  );
}

type CvTriggerProps = {
  children: ReactNode;
  className?: string;
  onBeforeOpen?: () => void;
};

export function CvTrigger({ children, className, onBeforeOpen }: CvTriggerProps) {
  const context = useContext(CvModalContext);
  if (!context) throw new Error("CvTrigger debe usarse dentro de CvModalProvider");

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={() => {
        onBeforeOpen?.();
        context.openCv();
      }}
      className={className}
    >
      {children}
    </button>
  );
}
