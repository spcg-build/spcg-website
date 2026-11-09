// Footer: technology strip, links, legal line and the large tagline.
export default function Footer() {
  return (
    <footer id="footer" className="r-foot" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #17181A 0%, #1F2022 100%)", padding: "0 0 0 0" }}>
      <div className="r-pad r-plat" style={{ padding: "34px 120px", display: "flex", alignItems: "center", gap: "48px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.18em", color: "#8C8F93", whiteSpace: "nowrap" }}>{"PROJECTS RUN ON"}</span>
        <div className="r-platlist" style={{ flex: "1", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "24px" }}>
          <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "24px", fontWeight: "600", letterSpacing: "-0.01em", color: "#B9BBBE" }}>{"Procore"}</span>
            <span style={{ fontSize: "11.5px", color: "#6E7175" }}>{"Project management"}</span>
          </span>
          <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "24px", fontWeight: "600", letterSpacing: "-0.01em", color: "#B9BBBE" }}>{"Sage"}</span>
            <span style={{ fontSize: "11.5px", color: "#6E7175" }}>{"Job-cost accounting"}</span>
          </span>
          <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "24px", fontWeight: "600", letterSpacing: "-0.01em", color: "#B9BBBE" }}>{"BuildingConnected"}</span>
            <span style={{ fontSize: "11.5px", color: "#6E7175" }}>{"Bid management"}</span>
          </span>
          <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "24px", fontWeight: "600", letterSpacing: "-0.01em", color: "#B9BBBE" }}>{"Buildr"}</span>
            <span style={{ fontSize: "11.5px", color: "#6E7175" }}>{"Client relationships"}</span>
          </span>
        </div>
      </div>
      <div className="r-pad r-footcols" style={{ padding: "56px 120px 0 120px", display: "flex", gap: "40px", justifyContent: "space-between" }}>
        <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <img src="/images/spcg-logo.png" alt="SP Construction Group" style={{ height: "76px", width: "auto", alignSelf: "flex-start" }} />
          <span style={{ fontSize: "13px", lineHeight: "1.6", color: "#C9CACC" }}>
            {"Bids@SPConstructionGroup.com"}
            <br />
            {"(443) 300-0338"}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", minWidth: "150px" }}>
          <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#8C8F93" }}>{"COMPANY"}</span>
          <a href="/#about" style={{ color: "#D9DADB" }}>{"About"}</a>
          <a href="/#leadership" style={{ color: "#D9DADB" }}>{"Leadership"}</a>
          <a href="/#approach" style={{ color: "#D9DADB" }}>{"Approach"}</a>
          <a href="/careers/" style={{ color: "#D9DADB" }}>{"Careers"}</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", minWidth: "150px" }}>
          <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#8C8F93" }}>{"WORK"}</span>
          <a href="/#work" style={{ color: "#D9DADB" }}>{"Projects"}</a>
          <a href="/#about" style={{ color: "#D9DADB" }}>{"Healthcare"}</a>
          <a href="/#insights" style={{ color: "#D9DADB" }}>{"Insights"}</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", minWidth: "150px" }}>
          <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#8C8F93" }}>{"PARTNERS"}</span>
          <a href="/subcontractors/" style={{ color: "#D9DADB" }}>{"Subcontractors"}</a>
          <a href="/subcontractors/" style={{ color: "#D9DADB" }}>{"Prequalify"}</a>
          <a href="/request-a-budget/" style={{ color: "#D9DADB" }}>{"Request a budget"}</a>
        </div>
      </div>
      <div className="r-legal" style={{ margin: "44px 120px 0 120px", display: "flex", justifyContent: "space-between", gap: "16px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px", fontSize: "11px", letterSpacing: "0.12em", color: "#8C8F93" }}>
        <span>{"© 2026 SP CONSTRUCTION GROUP · PRIVATELY HELD"}</span>
        <span>{"BONDED & INSURED"}</span>
      </div>
      <div className="r-tagline" aria-hidden="true" style={{ marginTop: "28px", height: "112px", overflow: "hidden", display: "flex", justifyContent: "center" }}>
        <span style={{ fontSize: "142px", fontWeight: "300", letterSpacing: "-0.055em", lineHeight: "1", whiteSpace: "nowrap", background: "linear-gradient(180deg, #FFFFFF 0%, #A9ABAE 45%, rgba(110,113,117,0.15) 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"Building What Matters."}</span>
      </div>
    </footer>
  );
}
