// Footer: technology strip, links, legal line and the large tagline.
export default function Footer() {
  return (
    <footer id="footer" className="r-foot" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #17181A 0%, #1F2022 100%)", padding: "0 0 0 0" }}>
      <div className="r-pad r-plat" style={{ padding: "48px 120px", display: "flex", alignItems: "center", gap: "56px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", color: "#8C8F93", whiteSpace: "nowrap" }}>{"BUILT ON"}</span>
        <div className="r-platlist" style={{ flex: "1", display: "flex", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "baseline", columnGap: "56px", rowGap: "20px" }}>
          <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.01em", whiteSpace: "nowrap", color: "#B9BBBE" }}>{"SPCG Systems"}</span>
            <span style={{ fontSize: "13px", color: "#7E8185", whiteSpace: "nowrap" }}>{"Proprietary, built in-house"}</span>
          </span>
          <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.01em", whiteSpace: "nowrap", color: "#B9BBBE" }}>{"Procore"}</span>
            <span style={{ fontSize: "13px", color: "#7E8185", whiteSpace: "nowrap" }}>{"Project management"}</span>
          </span>
          <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.01em", whiteSpace: "nowrap", color: "#B9BBBE" }}>{"Sage"}</span>
            <span style={{ fontSize: "13px", color: "#7E8185", whiteSpace: "nowrap" }}>{"Job-cost accounting"}</span>
          </span>
          <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.01em", whiteSpace: "nowrap", color: "#B9BBBE" }}>{"Togal.AI"}</span>
            <span style={{ fontSize: "13px", color: "#7E8185", whiteSpace: "nowrap" }}>{"AI takeoffs"}</span>
          </span>
          <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.01em", whiteSpace: "nowrap", color: "#B9BBBE" }}>{"Bluebeam"}</span>
            <span style={{ fontSize: "13px", color: "#7E8185", whiteSpace: "nowrap" }}>{"Plan review"}</span>
          </span>
          <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.01em", whiteSpace: "nowrap", color: "#B9BBBE" }}>{"BuildingConnected"}</span>
            <span style={{ fontSize: "13px", color: "#7E8185", whiteSpace: "nowrap" }}>{"Bid management"}</span>
          </span>
          <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.01em", whiteSpace: "nowrap", color: "#B9BBBE" }}>{"Buildr"}</span>
            <span style={{ fontSize: "13px", color: "#7E8185", whiteSpace: "nowrap" }}>{"Client relationships"}</span>
          </span>
          <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.01em", whiteSpace: "nowrap", color: "#B9BBBE" }}>{"Snowflake"}</span>
            <span style={{ fontSize: "13px", color: "#7E8185", whiteSpace: "nowrap" }}>{"Data warehouse"}</span>
          </span>
        </div>
      </div>
      <div className="r-pad r-footcols" style={{ padding: "56px 120px 0 120px", display: "flex", gap: "40px", justifyContent: "space-between" }}>
        <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <img src="/images/spcg-wordmark-v2-chrome.png" alt="SP Construction Group" style={{ height: "48px", width: "auto", alignSelf: "flex-start" }} />
          <span style={{ fontSize: "13px", lineHeight: "1.6", color: "#E1E2E4" }}>
            <a href="mailto:bids@spconstructiongroup.com" style={{ color: "inherit" }}>{"Bids@SPConstructionGroup.com"}</a>
            <br />
            <a href="tel:+14433000338" style={{ color: "inherit" }}>{"(443) 300-0338"}</a>
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", minWidth: "150px" }}>
          <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#8C8F93" }}>{"COMPANY"}</span>
          <a href="/#about" style={{ color: "#ECEDEE" }}>{"About"}</a>
          <a href="/#leadership" style={{ color: "#ECEDEE" }}>{"Leadership"}</a>
          <a href="/#approach" style={{ color: "#ECEDEE" }}>{"Approach"}</a>
          <a href="/careers/" style={{ color: "#ECEDEE" }}>{"Careers"}</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", minWidth: "150px" }}>
          <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#8C8F93" }}>{"WORK"}</span>
          <a href="/#work" style={{ color: "#ECEDEE" }}>{"Projects"}</a>
          <a href="/#services" style={{ color: "#ECEDEE" }}>{"Services"}</a>
          <a href="/#insights" style={{ color: "#ECEDEE" }}>{"Insights"}</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", minWidth: "150px" }}>
          <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#8C8F93" }}>{"PARTNERS"}</span>
          <a href="/subcontractors/" style={{ color: "#ECEDEE" }}>{"Subcontractors"}</a>
          <a href="/subcontractors/" style={{ color: "#ECEDEE" }}>{"Prequalify"}</a>
          <a href="/request-a-budget/" style={{ color: "#ECEDEE" }}>{"Request a budget"}</a>
        </div>
      </div>
      <div className="r-legal" style={{ margin: "44px 120px 0 120px", display: "flex", justifyContent: "space-between", gap: "16px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px", fontSize: "11px", letterSpacing: "0.12em", color: "#8C8F93" }}>
        <span>{"© 2026 SP CONSTRUCTION GROUP · PRIVATELY HELD"}</span>
        <span style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
          <a href="/privacy/">{"PRIVACY & COOKIES"}</a>
          <button type="button" data-cookie-settings="">{"COOKIE SETTINGS"}</button>
          <span>{"BONDED & INSURED"}</span>
        </span>
      </div>
      <div className="r-tagline" aria-hidden="true" style={{ marginTop: "28px", height: "112px", overflow: "hidden", display: "flex", justifyContent: "center" }}>
        <span style={{ fontSize: "142px", fontWeight: "300", letterSpacing: "-0.055em", lineHeight: "1", whiteSpace: "nowrap", background: "linear-gradient(180deg, #FFFFFF 0%, #A9ABAE 45%, rgba(110,113,117,0.15) 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"Building What Matters."}</span>
      </div>
    </footer>
  );
}
