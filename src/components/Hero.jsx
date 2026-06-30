import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { profile } from "../data";

export default function Hero() {
  const root = useRef(null);
  const [tagIndex, setTagIndex] = useState(0);

  // Animación de entrada
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line span", {
        yPercent: 120,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.12,
      });
      gsap.from(".hero-meta", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.6,
        stagger: 0.15,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  // Rotación de taglines
  useEffect(() => {
    const id = setInterval(
      () => setTagIndex((i) => (i + 1) % profile.taglines.length),
      3500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      ref={root}
      className="relative flex min-h-screen flex-col justify-between px-6 pb-10 pt-32 md:px-12"
    >
      {/* Título principal */}
      <div className="flex flex-1 flex-col justify-center">
        <p className="hero-meta mb-6 font-mono text-xs uppercase tracking-[0.35em] text-accent md:text-sm">
          Julian González — Software Engineer
        </p>
        <h1 className="font-display font-extrabold uppercase leading-[0.85] tracking-tight text-white">
          <span className="hero-line block overflow-hidden">
            <span className="block text-[clamp(1.85rem,7.6vw,7rem)]">
              {profile.role}
            </span>
          </span>
          <span className="hero-line block overflow-hidden">
            <span className="block text-[clamp(1.85rem,7.6vw,7rem)] md:ml-[4vw]">
              {profile.roleLine2}
            </span>
          </span>
        </h1>
      </div>

      {/* Pie del hero: tagline rotativa + ubicación + scroll */}
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="hero-meta flex max-w-md flex-col gap-5">
          <p className="font-body text-base text-white/70 md:text-lg">
            <span key={tagIndex} className="inline-block animate-[fadeIn_0.6s_ease]">
              {profile.taglines[tagIndex]}
            </span>
          </p>
          <a
            href={profile.cv}
            download
            data-hover
            className="inline-flex w-fit items-center gap-2 rounded-full bg-light px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:scale-105"
          >
            ↓ Descargar CV
          </a>
        </div>

        <div className="hero-meta flex items-center gap-4">
          <img
            src="/asterisk.svg"
            alt=""
            className="h-5 w-5 animate-spin"
            style={{ animationDuration: "9s" }}
          />
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-widest text-white">
              Open to work
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">
              Based in {profile.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
