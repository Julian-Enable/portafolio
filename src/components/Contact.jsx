import { useReveal } from "../hooks/useReveal";
import { profile, socials } from "../data";

export default function Contact() {
  useReveal();

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col justify-center px-6 py-28 md:px-12"
    >
      <p className="reveal mb-6 font-mono text-sm uppercase tracking-[0.3em] text-white/40">
        Get in touch
      </p>

      <a
        href={`mailto:${profile.email}`}
        data-hover
        className="reveal font-display text-5xl font-extrabold uppercase leading-[0.9] text-white transition-colors hover:text-accent md:text-8xl"
      >
        Let&apos;s build
        <br />
        something.
      </a>

      <a
        href={`mailto:${profile.email}`}
        data-hover
        className="reveal mt-10 w-fit font-mono text-lg text-white/60 underline decoration-accent underline-offset-8 transition-colors hover:text-white md:text-xl"
      >
        {profile.email}
      </a>

      <div className="reveal mt-16 flex flex-wrap gap-8 border-t border-line pt-10">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target={s.url.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            data-hover
            className="font-mono text-sm text-white/60 transition-colors hover:text-white"
          >
            {s.label} ↗
          </a>
        ))}
      </div>

      <footer className="reveal mt-24 flex flex-col items-start justify-between gap-2 font-mono text-xs text-white/40 md:flex-row md:items-center">
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <span>React · GSAP · Three.js (WebGL)</span>
      </footer>
    </section>
  );
}
