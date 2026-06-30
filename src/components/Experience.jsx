import { useReveal } from "../hooks/useReveal";
import { experience, education, certifications } from "../data";

export default function Experience() {
  useReveal();

  return (
    <section id="experience" className="px-6 py-28 md:px-12 md:py-40">
      <p className="reveal mb-16 font-mono text-sm uppercase tracking-[0.3em] text-white/40">
        Experiencia
      </p>

      {/* Timeline de experiencia */}
      <div className="flex flex-col">
        {experience.map((job) => (
          <div
            key={job.role + job.company}
            className="reveal grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-4">
              <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                {job.company}
              </h3>
              <p className="mt-1 font-mono text-sm text-accent">{job.role}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-white/40">
                {job.period}
              </p>
            </div>
            <ul className="flex flex-col gap-3 md:col-span-8">
              {job.points.map((p, i) => (
                <li
                  key={i}
                  className="flex gap-3 font-body text-white/60"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="border-t border-line" />
      </div>

      {/* Educación + Certificaciones */}
      <div className="mt-20 grid gap-12 md:grid-cols-2">
        <div className="reveal">
          <h3 className="mb-6 font-mono text-sm uppercase tracking-[0.3em] text-white/40">
            Educación
          </h3>
          {education.map((e) => (
            <div key={e.title} className="mb-6">
              <p className="font-display text-xl font-bold text-white">
                {e.title}
              </p>
              <p className="font-body text-white/60">{e.place}</p>
              <p className="font-mono text-xs uppercase tracking-wider text-white/40">
                {e.period}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal">
          <h3 className="mb-6 font-mono text-sm uppercase tracking-[0.3em] text-white/40">
            Certificaciones
          </h3>
          <ul className="flex flex-col gap-3">
            {certifications.map((c) => (
              <li key={c} className="flex gap-3 font-body text-white/60">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
