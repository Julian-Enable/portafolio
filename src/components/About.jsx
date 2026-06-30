import { useReveal } from "../hooks/useReveal";
import { profile, facts, stats } from "../data";

export default function About() {
  useReveal();

  return (
    <section id="about" className="px-6 py-28 md:px-12 md:py-40">
      <p className="reveal mb-12 font-mono text-sm uppercase tracking-[0.3em] text-white/40">
        About
      </p>

      {/* Cita grande */}
      <blockquote className="reveal max-w-4xl font-display text-3xl font-bold leading-tight text-white md:text-5xl">
        “{profile.citation}”
      </blockquote>

      {/* Bio + datos rápidos */}
      <div className="mt-16 grid gap-12 border-t border-line pt-12 md:grid-cols-12">
        <p className="reveal col-span-12 font-body text-lg leading-relaxed text-white/60 md:col-span-7">
          {profile.about}
        </p>

        <dl className="reveal col-span-12 flex flex-col gap-4 md:col-span-5">
          {facts.map((f) => (
            <div
              key={f.label}
              className="flex justify-between gap-6 border-b border-line/60 pb-3"
            >
              <dt className="font-mono text-xs uppercase tracking-wider text-white/40">
                {f.label}
              </dt>
              <dd className="text-right font-body text-sm text-white">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Métricas */}
      <div className="reveal mt-16 grid grid-cols-2 gap-8 border-t border-line pt-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-4xl font-extrabold text-white md:text-6xl">
              {s.value}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-widest text-white/40">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
