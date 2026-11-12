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
          <a className="r-foot-li" href="https://www.linkedin.com/company/sp-construction-group/" target="_blank" rel="noopener noreferrer" aria-label="SP Construction Group on LinkedIn"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg><span>{"Follow us on LinkedIn"}</span></a>
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
      <div className="r-legal" style={{ margin: "44px 120px 0 120px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px", fontSize: "12px", letterSpacing: "0.02em", color: "#8C8F93" }}>
        <span>{"© 2026 SP Construction Group. All rights reserved."}</span>
        <span style={{ display: "flex", gap: "18px", flexWrap: "wrap", alignItems: "center" }}>
          <a href="/privacy/">{"Privacy & cookies"}</a>
          <button type="button" data-cookie-settings="">{"Cookie settings"}</button>
          <a href="/accessibility/">{"Accessibility"}</a>
          <a href="/site-map/">{"Site map"}</a>
          <a href="#top" className="r-totop-link" data-totop="">{"Back to top ↑"}</a>
        </span>
      </div>
      <div className="r-tagline" aria-hidden="true" style={{ marginTop: "28px", height: "112px", overflow: "hidden", display: "flex", justifyContent: "center" }}>
        <span style={{ fontSize: "142px", fontWeight: "300", letterSpacing: "-0.055em", lineHeight: "1", whiteSpace: "nowrap", background: "linear-gradient(180deg, #FFFFFF 0%, #A9ABAE 45%, rgba(110,113,117,0.15) 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"Building What Matters."}</span>
      </div>
    </footer>
  );
}
