// Where we build: dark markets panel with East Coast map (Draft Revision v2)
export default function WhereWeBuild() {
  return (
    <section className="r-mkts" id="where" style={{ marginTop: "140px", background: "#161616", padding: "96px 120px 80px 120px", overflow: "hidden" }}>
      <div className="r-mkts-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 420px) minmax(0, 1fr)", gap: "40px", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", position: "relative", zIndex: "1" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#C9C9C9" }}>
            <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: "#C9C9C9" }}></div>
            <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em" }}>{"WHERE WE BUILD"}</span>
          </div>
          <p style={{ margin: "22px 0 0 0", fontSize: "48px", fontWeight: "300", lineHeight: "1.05", letterSpacing: "-0.03em", color: "#FFFFFF" }}>{"One team, building up and down the East Coast."}</p>
          <p style={{ margin: "18px 0 26px 0", fontSize: "15px", lineHeight: "1.65", color: "#C9C9C9" }}>{"A privately held commercial general contractor, licensed in several East Coast markets, with projects from Boston to Florida."}</p>
          <div className="r-mkts-list" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", columnGap: "28px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "12px 0", borderTop: "1px solid #2E2E2E" }}><span style={{ fontSize: "22px", fontWeight: "500", color: "#FFFFFF" }}>{"Maryland"}</span><span style={{ fontSize: "13px", color: "#C9C9C9" }}>{"Active projects"}</span></div><div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "12px 0", borderTop: "1px solid #2E2E2E" }}><span style={{ fontSize: "22px", fontWeight: "500", color: "#FFFFFF" }}>{"Washington, DC"}</span><span style={{ fontSize: "13px", color: "#C9C9C9" }}>{"Active projects"}</span></div><div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "12px 0", borderTop: "1px solid #2E2E2E" }}><span style={{ fontSize: "22px", fontWeight: "500", color: "#FFFFFF" }}>{"Virginia"}</span><span style={{ fontSize: "13px", color: "#C9C9C9" }}>{"Active projects"}</span></div><div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "12px 0", borderTop: "1px solid #2E2E2E" }}><span style={{ fontSize: "22px", fontWeight: "500", color: "#FFFFFF" }}>{"North Carolina"}</span><span style={{ fontSize: "13px", color: "#C9C9C9" }}>{"Active projects"}</span></div><div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "12px 0", borderTop: "1px solid #2E2E2E" }}><span style={{ fontSize: "22px", fontWeight: "500", color: "#FFFFFF" }}>{"Boston"}</span><span style={{ fontSize: "13px", color: "#C9C9C9" }}>{"Completed projects"}</span></div>
            <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "4px", padding: "14px 0", borderTop: "1px solid #2E2E2E", borderBottom: "1px solid #2E2E2E" }}>
              <span style={{ fontSize: "28px", fontWeight: "500", color: "#FFFFFF" }}>{"Florida"}</span>
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#C9C9C9" }}>{"Now building statewide"}</span>
              <span style={{ marginTop: "6px", fontSize: "13px", color: "#C9C9C9" }}>{"Tampa Bay · Central Florida · South Florida · North Florida"}</span>
            </div>
          </div>
        </div>
        <div className="r-mkts-map" aria-hidden="false" style={{ position: "relative", perspective: "1400px", margin: "-40px -80px -40px 0" }}>
          <img src="/images/markets-map-v4.jpg" alt="Map of the East Coast showing SPCG markets: Massachusetts, Maryland, Washington DC, Virginia, North Carolina and Florida" style={{ display: "block", width: "100%", height: "auto", WebkitMaskImage: "radial-gradient(ellipse 52% 54% at 55% 50%, #000 70%, transparent 100%)", maskImage: "radial-gradient(ellipse 52% 54% at 55% 50%, #000 70%, transparent 100%)" }} />
        </div>
      </div>
    </section>
  );
}
