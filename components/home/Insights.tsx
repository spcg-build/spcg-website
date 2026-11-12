// Insights: staggered cards
export default function Insights() {
  return (
    <section className="r-pad r-ins" id="insights" style={{ padding: "140px 120px 0 120px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: "linear-gradient(90deg, #B5541C, #D9773A)" }}></div>
          <h2 style={{ margin: "0", fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase" }}>{"Insights"}</h2>
        </div>
        <a href="/#contact" style={{ fontSize: "14px", fontWeight: "600", display: "inline-flex", gap: "8px", alignItems: "center" }}>
          {"All insights "}
          <span aria-hidden="true" style={{ color: "#B5541C" }}>{"→"}</span>
        </a>
      </div>
      <div className="r-insgrid" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: "20px", alignItems: "start" }}>
        <a href="/#contact" className="lift" style={{ borderRadius: "26px", overflow: "hidden", border: "1px solid #E4E5E6", display: "flex", flexDirection: "column", color: "#0A0A0B" }}>
          <div className="cx-blue" style={{ height: "260px", display: "flex", alignItems: "flex-end", padding: "22px 26px", boxSizing: "border-box" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#9DB8D3" }}>{"COST NOTE · Q4 2026"}</span>
          </div>
          <div style={{ padding: "24px 26px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "23px", fontWeight: "400", lineHeight: "1.3" }}>{"What a medical office fit-out costs right now"}</span>
            <span style={{ fontSize: "13px", color: "#55585C" }}>{"For owners and brokers · 6 min read"}</span>
          </div>
        </a>
        <a href="/#contact" className="lift" style={{ marginTop: "64px", borderRadius: "26px", overflow: "hidden", border: "1px solid #E4E5E6", display: "flex", flexDirection: "column", color: "#0A0A0B" }}>
          <div className="cx-amber" style={{ height: "180px", display: "flex", alignItems: "flex-end", padding: "20px 24px", boxSizing: "border-box" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#E9A27A" }}>{"GUIDE"}</span>
          </div>
          <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.35" }}>{"Lease to move-in: a realistic timeline for a tenant fit-out"}</span>
            <span style={{ fontSize: "13px", color: "#55585C" }}>{"For tenants and brokers · 8 min read"}</span>
          </div>
        </a>
        <a href="/#contact" className="lift" style={{ marginTop: "24px", borderRadius: "26px", overflow: "hidden", border: "1px solid #E4E5E6", display: "flex", flexDirection: "column", color: "#0A0A0B" }}>
          <div className="cx-steel" style={{ height: "180px", display: "flex", alignItems: "flex-end", padding: "20px 24px", boxSizing: "border-box" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#D9DADB" }}>{"FIELD NOTES"}</span>
          </div>
          <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.35" }}>{"Building inside an open clinic without disrupting patients"}</span>
            <span style={{ fontSize: "13px", color: "#55585C" }}>{"For healthcare owners · 5 min read"}</span>
          </div>
        </a>
      </div>
    </section>
  );
}
