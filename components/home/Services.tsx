// Services: what we do, six cards
const SERVICES: [string, string][] = [
  ["Preconstruction", "Budgets, value engineering and schedules built with your architect before you commit."],
  ["Tenant fit-outs", "Interior buildouts for office, medical, retail and restaurant tenants, delivered to the lease date."],
  ["Healthcare and clinical", "Surgery centers, medical office and clinical spaces built to pass inspection and open on time."],
  ["Renovations and repositioning", "Upgrades in occupied buildings, phased so tenants, patients and residents keep running."],
  ["Multifamily refreshes", "Corridors, lobbies, amenity spaces and unit turns, delivered floor by floor."],
  ["Exterior improvements", "Storefronts, facades and site work that complete the project inside and out."],
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
        {SERVICES.map(([t, d], i) => (
          <div key={t} className="r-svc-card">
            <span className="r-svc-n">{String(i + 1).padStart(2, "0")}</span>
            <span className="r-svc-t">{t}</span>
            <span className="r-svc-d">{d}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
