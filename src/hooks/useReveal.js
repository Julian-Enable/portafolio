import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Anima los elementos con clase `.reveal` al entrar en viewport:
 * fade + subida, agrupados con stagger (ScrollTrigger.batch) para un
 * efecto más pulido y mejor rendimiento.
 */
export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(".reveal", { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(".reveal", {
        start: "top 88%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            overwrite: true,
          }),
      });
    });

    // refresca posiciones tras montar (por el smooth scroll/imágenes)
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);
}
