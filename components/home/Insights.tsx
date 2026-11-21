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
          {"Talk to us about your budget "}
          <span aria-hidden="true" style={{ color: "#B5541C" }}>{"→"}</span>
        </a>
      </div>
      <div className="r-insgrid" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: "20px", alignItems: "start" }}>
        <a href="https://www.jll.com/en-us/newsroom/south-is-set-to-lead-us-construction-growth-in-2027" target="_blank" rel="noopener noreferrer" className="lift" style={{ borderRadius: "4px", overflow: "hidden", border: "1px solid #E4E5E6", display: "flex", flexDirection: "column", color: "#0A0A0B" }}>
          <div className="cx-blue" style={{ height: "260px", display: "flex", alignItems: "flex-end", padding: "22px 26px", boxSizing: "border-box" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#9DB8D3" }}>{"COSTS · NOV 2026"}</span>
          </div>
          <div style={{ padding: "24px 26px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "23px", fontWeight: "400", lineHeight: "1.3" }}>{"Construction costs keep rising into 2027, led by the South"}</span>
            <span style={{ fontSize: "13px", color: "#45484C" }}>{"JLL · Nov 12, 2026 · Bids are forecast to rise 3–4% next year. Budget early, lock pricing sooner."}</span>
          </div>
        </a>
        <a href="https://www.constructiondive.com/news/construction-ai-reshape-teams-replace-jobs/833612/" target="_blank" rel="noopener noreferrer" className="lift" style={{ marginTop: "64px", borderRadius: "4px", overflow: "hidden", border: "1px solid #E4E5E6", display: "flex", flexDirection: "column", color: "#0A0A0B" }}>
          <div className="cx-amber" style={{ height: "180px", display: "flex", alignItems: "flex-end", padding: "20px 24px", boxSizing: "border-box" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#E9A27A" }}>{"TECHNOLOGY · OCT 2026"}</span>
          </div>
          <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.35" }}>{"AI is reshaping construction teams more than it's cutting jobs"}</span>
            <span style={{ fontSize: "13px", color: "#45484C" }}>{"Construction Dive · Oct 21, 2026 · Why we build on data and AI, with people accountable for every number."}</span>
          </div>
        </a>
        <a href="https://www.cushmanwakefield.com/en/united-states/news/2026/06/strong-growth-and-tight-supply-in-us-medical-outpatient-building-sector" target="_blank" rel="noopener noreferrer" className="lift" style={{ marginTop: "24px", borderRadius: "4px", overflow: "hidden", border: "1px solid #E4E5E6", display: "flex", flexDirection: "column", color: "#0A0A0B" }}>
          <div className="cx-steel" style={{ height: "180px", display: "flex", alignItems: "flex-end", padding: "20px 24px", boxSizing: "border-box" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#ECEDEE" }}>{"HEALTHCARE · JUN 2026"}</span>
          </div>
          <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.35" }}>{"Outpatient medical space is 92% full and new supply is down"}</span>
            <span style={{ fontSize: "13px", color: "#45484C" }}>{"Cushman & Wakefield · Jun 16, 2026 · More fit-outs and renovations of existing space for providers."}</span>
          </div>
        </a>
      </div>
    </section>
  );
}
