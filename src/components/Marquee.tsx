import { marquee } from "@/data/profile";

export default function Marquee() {
  // Two copies so the -50% translate loops seamlessly.
  const items = [...marquee, ...marquee];
  return (
    <div className="marquee" aria-label="Technologies I work with">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span className="marquee-item" key={i} aria-hidden={i >= marquee.length}>{t}</span>
        ))}
      </div>
    </div>
  );
}
