import { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  { id: "projects", label: "Proyectos" },
  { id: "experience", label: "Experiencia" },
  { id: "services", label: "Servicios" },
  { id: "about", label: "Sobre mí" },
  { id: "contact", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/80 backdrop-blur-md" : ""
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-5 md:px-12">
        <a
          href="#hero"
          data-hover
          className="font-display text-lg font-bold tracking-tight text-white"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        {/* Links escritorio */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                data-hover
                className="font-mono text-sm text-white/50 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            data-hover
            className="hidden rounded-full border border-line px-4 py-2 font-mono text-sm text-white transition-colors hover:border-accent hover:text-accent sm:inline-block"
          >
            Hablemos
          </a>

          {/* Botón hamburguesa (móvil) */}
          <button
            onClick={() => setOpen((o) => !o)}
            data-hover
            aria-label="Menú"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Panel móvil */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block border-b border-line/60 py-3 font-display text-2xl font-bold text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="mt-4 inline-block w-fit rounded-full border border-line px-5 py-2 font-mono text-sm text-white"
          >
            Hablemos ↗
          </a>
        </ul>
      </div>
    </header>
  );
}
