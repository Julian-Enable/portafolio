import { useReveal } from "../hooks/useReveal";
import { services } from "../data";

export default function Services() {
  useReveal();

  return (
    <section id="services" className="px-6 py-28 md:px-12 md:py-40">
      <p className="reveal mb-16 font-mono text-sm uppercase tracking-[0.3em] text-white/40">
        Lo que hago
      </p>

      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.n}
            data-hover
            className="reveal group relative bg-ink p-8 transition-colors duration-300 hover:bg-surface md:p-12"
          >
            <span className="font-mono text-xs text-white/40">{s.n}</span>
            <h3 className="mt-4 font-display text-2xl font-bold text-white transition-colors group-hover:text-accent md:text-3xl">
              {s.title}
            </h3>
            <p className="mt-3 max-w-md font-body text-white/60">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
