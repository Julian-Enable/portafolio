import { useEffect, useState } from "react";

/**
 * Efecto máquina de escribir: escribe una frase carácter por carácter,
 * hace una pausa, la borra y pasa a la siguiente (en bucle).
 *
 * @param {string[]} words  Frases a mostrar.
 * @param {object}   opts   { typeSpeed, deleteSpeed, pause }
 * @returns {string} El texto que se debe mostrar en este instante.
 */
export function useTypewriter(
  words,
  { typeSpeed = 55, deleteSpeed = 28, pause = 1600 } = {}
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Si el usuario prefiere menos movimiento, mostramos la frase completa
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduce) {
      setText(words[0]);
      return;
    }

    const current = words[wordIndex % words.length];

    // Pausa al terminar de escribir, antes de empezar a borrar
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    // Al terminar de borrar, pasa a la siguiente frase
    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    // Escribe o borra un carácter
    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause, reduce]);

  return text;
}
