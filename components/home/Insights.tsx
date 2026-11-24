// Insights: staggered cards
export default function Insights() {
  return (
    <section className="r-pad r-ins" id="insights" style={{ padding: "140px 120px 0 120px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: "currentColor" }}></div>
          <h2 style={{ margin: "0", fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase" }}>{"Insights"}</h2>
        </div>
        <a href="/#contact" style={{ fontSize: "14px", fontWeight: "600", display: "inline-flex", gap: "8px", alignItems: "center" }}>
          {"Talk to us about your budget "}
          <span aria-hidden="true" style={{ color: "#C96A1E" }}>{"→"}</span>
        </a>
      </div>
      <div className="r-insgrid" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: "20px", alignItems: "start" }}>
        <a href="https://www.jll.com/en-us/newsroom/south-is-set-to-lead-us-construction-growth-in-2027" target="_blank" rel="noopener noreferrer" className="lift" style={{ borderRadius: "4px", overflow: "hidden", border: "1px solid #E5E5E5", display: "flex", flexDirection: "column", color: "#111111" }}>
          <div style={{ backgroundImage: "linear-gradient(180deg, rgba(22,22,22,0) 45%, rgba(22,22,22,0.78) 100%), url(https://images.unsplash.com/photo-1787644229991-81b22d9e4d6a?auto=format&fit=crop&w=900&q=75)", backgroundSize: "cover", backgroundPosition: "center", height: "260px", display: "flex", alignItems: "flex-end", padding: "22px 26px", boxSizing: "border-box" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#FFFFFF" }}>{"COSTS · NOV 2026"}</span>
          </div>
          <div style={{ padding: "24px 26px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "23px", fontWeight: "400", lineHeight: "1.3" }}>{"Construction costs keep rising into 2027, led by the South"}</span>
            <span style={{ fontSize: "13px", color: "#5A5A5A" }}>{"JLL \u00b7 Nov 12, 2026"}</span>
            <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#111111", borderLeft: "2px solid #E5E5E5", paddingLeft: "12px", marginTop: "4px" }}><span style={{ display: "block", marginBottom: "4px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.08em", color: "#5A5A5A" }}>{"What our team is saying"}</span>{"\u201cPrice increases show up in bids three to six months later. Locking a budget early is the best hedge an owner has.\u201d"}</span>
          </div>
        </a>
        <a href="https://www.constructiondive.com/news/construction-ai-reshape-teams-replace-jobs/833612/" target="_blank" rel="noopener noreferrer" className="lift" style={{ marginTop: "64px", borderRadius: "4px", overflow: "hidden", border: "1px solid #E5E5E5", display: "flex", flexDirection: "column", color: "#111111" }}>
          <div style={{ backgroundImage: "linear-gradient(180deg, rgba(22,22,22,0) 45%, rgba(22,22,22,0.78) 100%), url(https://images.unsplash.com/photo-1778074762033-c6595907684d?auto=format&fit=crop&w=900&q=75)", backgroundSize: "cover", backgroundPosition: "center", height: "180px", display: "flex", alignItems: "flex-end", padding: "20px 24px", boxSizing: "border-box" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#FFFFFF" }}>{"TECHNOLOGY · OCT 2026"}</span>
          </div>
          <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.35" }}>{"AI is reshaping construction teams more than it's cutting jobs"}</span>
            <span style={{ fontSize: "13px", color: "#5A5A5A" }}>{"Construction Dive \u00b7 Oct 21, 2026"}</span>
            <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#111111", borderLeft: "2px solid #E5E5E5", paddingLeft: "12px", marginTop: "4px" }}><span style={{ display: "block", marginBottom: "4px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.08em", color: "#5A5A5A" }}>{"What our team is saying"}</span>{"\u201cWe use AI to move faster on the numbers, but a person signs off on every one of them.\u201d"}</span>
          </div>
        </a>
        <a href="https://www.cushmanwakefield.com/en/united-states/news/2026/06/strong-growth-and-tight-supply-in-us-medical-outpatient-building-sector" target="_blank" rel="noopener noreferrer" className="lift" style={{ marginTop: "24px", borderRadius: "4px", overflow: "hidden", border: "1px solid #E5E5E5", display: "flex", flexDirection: "column", color: "#111111" }}>
          <div style={{ backgroundImage: "linear-gradient(180deg, rgba(22,22,22,0) 45%, rgba(22,22,22,0.78) 100%), url(https://images.unsplash.com/photo-1779281887548-f676406dea2f?auto=format&fit=crop&w=900&q=75)", backgroundSize: "cover", backgroundPosition: "center", height: "180px", display: "flex", alignItems: "flex-end", padding: "20px 24px", boxSizing: "border-box" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#FFFFFF" }}>{"HEALTHCARE · JUN 2026"}</span>
          </div>
          <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.35" }}>{"Outpatient medical space is 92% full and new supply is down"}</span>
            <span style={{ fontSize: "13px", color: "#5A5A5A" }}>{"Cushman & Wakefield \u00b7 Jun 16, 2026"}</span>
            <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#111111", borderLeft: "2px solid #E5E5E5", paddingLeft: "12px", marginTop: "4px" }}><span style={{ display: "block", marginBottom: "4px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.08em", color: "#5A5A5A" }}>{"What our team is saying"}</span>{"\u201cWith so little new outpatient space being built, providers are renovating what they already have. That's the work we're built for.\u201d"}</span>
          </div>
        </a>
      </div>
    </section>
  );
}
