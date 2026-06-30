/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",      // fondo principal (casi negro)
        surface: "#111111",  // superficies
        line: "#1f1f1f",     // bordes sutiles
        muted: "#9ca3af",    // texto secundario
        light: "#e5e7eb",    // texto principal
        accent: "#6366f1",   // índigo — color de marca (cámbialo si quieres)
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],       // títulos grandes
        body: ["Inter", "sans-serif"],          // cuerpo
        mono: ["Space Grotesk", "sans-serif"],  // acentos/técnico
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        fadeIn: "fadeIn 0.6s ease",
      },
    },
  },
  plugins: [],
};
