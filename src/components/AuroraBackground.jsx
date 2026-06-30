/**
 * Fondo "aurora": manchas de color difusas (blur grande) que se mueven
 * lentamente y cubren TODA la pantalla. CSS puro — sin el cuadro raro del
 * shader WebGL anterior. Respeta prefers-reduced-motion (vía CSS).
 */
export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="aurora aurora-c" />
      {/* viñeta para mantener legible el texto */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_35%,rgba(10,10,10,0.85)_100%)]" />
    </div>
  );
}
