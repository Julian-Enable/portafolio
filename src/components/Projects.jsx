import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { projects } from "../data";

export default function Projects() {
  useReveal();
  const [active, setActive] = useState(0);
  const cur = projects[active];

  return (
    <section id="projects" className="px-6 py-28 md:px-12 md:py-40">
      {/* Encabezado con asterisco girando */}
      <div className="reveal mb-16 flex items-baseline gap-3">
        <img
          src="/asterisk.svg"
          alt=""
          className="h-5 w-5 animate-spin md:h-6 md:w-6"
          style={{ animationDuration: "8s" }}
        />
        <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-white/60">
          Selected works
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Columna izquierda: lista limpia de títulos */}
        <div className="hidden flex-col lg:flex">
          {projects.map((p, i) => (
            <button
              key={p.id}
              data-hover
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className="reveal group border-t border-line py-7 text-left transition-opacity duration-300"
              style={{ opacity: active === i ? 1 : 0.4 }}
            >
              <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-white/40">
                {p.category}
              </span>
              <span className="flex items-center justify-between gap-3">
                <span className="min-w-0 break-words font-display text-[1.55rem] font-extrabold uppercase leading-[0.95] text-white transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl md:text-5xl">
                  {p.title}
                </span>
                <span className="shrink-0 text-xl text-white/40 transition-all group-hover:translate-x-1 group-hover:text-accent">
                  <span className="external-arrow" aria-hidden="true" />
                </span>
              </span>
            </button>
          ))}
          <div className="border-t border-line" />
        </div>

        {/* Columna derecha: preview grande del proyecto activo */}
        <div className="relative hidden lg:block">
          <div className="sticky top-24">
            {/* número gigante tenue */}
            <span className="block font-display text-7xl font-extrabold text-white/10">
              {cur.number}
            </span>

            {/* preview de imagen (capas con fade) */}
            <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-lg border border-line">
              {projects.map((p, i) => (
                <div
                  key={p.id}
                  className="absolute inset-0 bg-ink transition-opacity duration-500"
                  style={{
                    opacity: active === i ? 1 : 0,
                    background: p.image ? undefined : p.color,
                  }}
                >
                  {p.image && (
                    <>
                      <div
                        className="absolute -inset-6 opacity-45 blur-2xl"
                        style={{
                          background: `url(${p.image}) center / cover no-repeat`,
                        }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `url(${p.image}) center / contain no-repeat`,
                        }}
                      />
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* descripción del proyecto activo */}
            <p className="mt-6 max-w-md font-body text-base text-white/70">
              {cur.description}
            </p>

            {/* logros / highlights */}
            {cur.highlights && (
              <ul className="mt-5 flex flex-col gap-2">
                {cur.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 font-body text-sm text-white/60"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {cur.stack?.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            {cur.link && cur.link !== "#" && (
              <a
                href={cur.link}
                target="_blank"
                rel="noreferrer"
                data-hover
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-light px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:scale-105"
              >
                Ver proyecto <span className="external-arrow" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* En móvil: descripción debajo de cada proyecto */}
        <div className="lg:hidden">
          {projects.map((p) => (
            <article key={p.id} className="border-t border-line py-8">
              <div className="-mx-6 overflow-hidden border-y border-line bg-white/5 sm:mx-0 sm:rounded-lg sm:border">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                ) : (
                  <div className="aspect-[16/9]" style={{ background: p.color }} />
                )}
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-wider text-white/50">
                {p.category}
              </p>
              <h3 className="mt-2 max-w-full break-words font-display text-[2rem] font-extrabold uppercase leading-none text-white [overflow-wrap:anywhere]">
                {p.title}
              </h3>
              <p className="mt-4 font-body text-[15px] leading-7 text-white/75">
                {p.description}
              </p>
              {p.highlights && (
                <ul className="mt-4 flex flex-col gap-2">
                  {p.highlights.slice(0, 2).map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 font-body text-sm leading-6 text-white/60"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              {p.link && p.link !== "#" && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  data-hover
                  className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-light px-6 font-mono text-sm font-medium text-ink"
                >
                  Ver proyecto <span className="external-arrow" aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
