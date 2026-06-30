import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { skillGroups, profile } from "../data";

/**
 * Lista de skills en tipografía gigante alineada a la derecha (estilo Ewan):
 * la fila sobre la que pasas el mouse se ilumina en blanco; el resto queda
 * en "outline" gris.
 */
export default function Skills() {
  useReveal();
  const [active, setActive] = useState(-1);

  return (
    <section
      id="skills"
      className="relative flex min-h-screen flex-col justify-center px-6 py-28 md:px-12"
    >
      {/* Cita vertical a la izquierda */}
      <p className="absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 font-mono text-xs uppercase tracking-[0.3em] text-white/30 lg:block">
        {profile.citation.slice(0, 48)}…
      </p>

      <p className="reveal mb-10 self-end font-mono text-sm uppercase tracking-[0.3em] text-white/40">
        Capabilities
      </p>

      <div className="flex flex-col items-end gap-1 md:gap-2">
        {skillGroups.map((s, i) => (
          <h2
            key={s}
            data-hover
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(-1)}
            className={`reveal cursor-default text-right font-display text-4xl font-extrabold uppercase leading-[1.05] transition-all duration-300 md:text-7xl ${
              active === i || active === -1
                ? "text-white"
                : "text-outline opacity-60"
            }`}
          >
            {s}
          </h2>
        ))}
      </div>
    </section>
  );
}
