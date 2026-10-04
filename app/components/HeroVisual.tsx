/**
 * Hero visual animation — recreated from the Figma "Hero visual animation".
 * Five stacked photos (A seat-of-sequence); each upper layer clip-reveals
 * (vertical wipe) to the one beneath, cycling CarPlay → seat → subwoofer →
 * lit subwoofer → back to CarPlay. Pure CSS (see .hero-anim-layer /
 * @keyframes heroWipe* in globals.css). Loops with a 4s hold at each restart.
 */

type Layer = { src: string; anim?: string; z: number; alt: string };

const LAYERS: Layer[] = [
  { src: "/Apex-lp-assets/hero-anim-1.jpg", anim: "heroWipe1", z: 50, alt: "In-car CarPlay display" },
  { src: "/Apex-lp-assets/hero-anim-2.jpg", anim: "heroWipe2", z: 40, alt: "Premium car interior seat" },
  { src: "/Apex-lp-assets/hero-anim-3.jpg", anim: "heroWipe3", z: 30, alt: "Boot-mounted subwoofer" },
  { src: "/Apex-lp-assets/hero-anim-4.jpg", anim: "heroWipe4", z: 20, alt: "Illuminated subwoofer" },
  { src: "/Apex-lp-assets/hero-anim-1.jpg", z: 10, alt: "" }, // base layer closes the loop seamlessly
];

export default function HeroVisual({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[6px] bg-[#1a1a1a] ${className ?? ""}`}
      role="img"
      aria-label="Apex car audio and interior upgrades"
    >
      {LAYERS.map((l, i) => (
        <div
          key={i}
          aria-hidden
          className={`absolute inset-0 bg-cover bg-center ${l.anim ? "hero-anim-layer" : ""}`}
          style={{
            backgroundImage: `url('${l.src}')`,
            zIndex: l.z,
            animationName: l.anim,
          }}
        />
      ))}
    </div>
  );
}
