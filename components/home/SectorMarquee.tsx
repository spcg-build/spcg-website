// Marquee: sectors in a calm, slow ticker with faded edges
const SECTORS = [
  "Surgery centers",
  "Medical office",
  "Healthcare",
  "Multifamily",
  "Veterinary",
  "Higher ed",
  "Hospitality",
  "Office",
  "Retail",
  "Renovations",
];

export default function SectorMarquee() {
  const row = [...SECTORS, ...SECTORS];
  return (
    <section aria-label="Sectors we build" className="r-sect">
      <div className="r-sect-in">
        <div className="r-mq mq r-sect-track">
          {row.map((s, i) => (
            <span key={i} className="r-sect-item" aria-hidden={i >= SECTORS.length ? "true" : undefined}>
              <span>{s}</span>
              <span className="r-sect-dot"></span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
