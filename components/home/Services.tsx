// Services: what we do, six cards
// Photos: Unsplash (free license), stored in /public/images/services. Swap for real SPCG project photos when available.
const SERVICES: [string, string, string][] = [
  ["Preconstruction", "Budgets, value engineering and schedules built with your architect before you commit.", "/images/services/preconstruction.jpg"],
  ["Tenant fit-outs", "Interior buildouts for office, medical, retail and restaurant tenants, delivered to the lease date.", "/images/services/tenant-fit-outs.jpg"],
  ["Healthcare and clinical", "Surgery centers, medical office and clinical spaces built to pass inspection and open on time.", "/images/services/healthcare.jpg"],
  ["Renovations and repositioning", "Upgrades in occupied buildings, phased so tenants, patients and residents keep running.", "/images/services/renovations.jpg"],
  ["Multifamily refreshes", "Corridors, lobbies, amenity spaces and unit turns, delivered floor by floor.", "/images/services/multifamily.jpg"],
  ["Exterior improvements", "Storefronts, facades and site work that complete the project inside and out.", "/images/services/exterior.jpg"],
];

export default function Services() {
  return (
    <section id="services" className="r-svc" aria-labelledby="svc-h">
      <div className="r-svc-head">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: "linear-gradient(90deg, #B5541C, #D9773A)" }}></div>
          <h2 id="svc-h" style={{ margin: "0", fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase" }}>{"Services"}</h2>
        </div>
        <p className="r-svc-h2">{"General contracting for commercial spaces, from first budget to final punch."}</p>
      </div>
      <div className="r-svc-grid">
        {SERVICES.map(([t, d, img], i) => (
          <div key={t} className="r-svc-card">
            <img src={img} alt="" loading="lazy" className="r-svc-img" />
            <span className="r-svc-n">{String(i + 1).padStart(2, "0")}</span>
            <span className="r-svc-t">{t}</span>
            <span className="r-svc-d">{d}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
