import { useEffect, useRef, useState } from "react";

/**
 * Cursor personalizado (como el del portafolio de referencia).
 * Un punto que sigue al mouse + un anillo que lo persigue con suavizado.
 * Se agranda al pasar sobre enlaces y botones.
 */
export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // No mostrar en dispositivos táctiles
    if (window.matchMedia("(pointer: coarse)").matches) {
      setHidden(true);
      return;
    }

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...pos };
    let raf;

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
    };

    const render = () => {
      // suavizado (lerp) para el anillo
      ringPos.x += (pos.x - ringPos.x) * 0.18;
      ringPos.y += (pos.y - ringPos.y) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`;
      }
      raf = requestAnimationFrame(render);
    };

    const grow = () => ring.current?.classList.add("scale-[2.2]", "bg-accent/10");
    const shrink = () =>
      ring.current?.classList.remove("scale-[2.2]", "bg-accent/10");

    window.addEventListener("mousemove", move);
    render();

    const interactive = document.querySelectorAll("a, button, [data-hover]");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-light"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-4 -mt-4 h-8 w-8 rounded-full border border-light/40 transition-[transform,background-color] duration-200 ease-out"
      />
    </>
  );
}
