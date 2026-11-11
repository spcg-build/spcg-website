// Fixed site header and the full-screen phone menu.
export default function Header() {
  return (
    <>
      <header className="r-head" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "22px 56px" }}>
        <a href="/" aria-label="SP Construction Group home">
          <img src="/images/spcg-wordmark-v2-chrome.png" alt="SP Construction Group" style={{ height: "40px", width: "auto", display: "block" }} />
        </a>
        <nav className="r-nav" aria-label="Main" style={{ display: "flex", gap: "4px", alignItems: "center", fontSize: "14px", padding: "6px", borderRadius: "999px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <a href="/#work" style={{ color: "#E6E7E8", padding: "8px 14px" }}>{"Work"}</a>
          <a href="/#about" style={{ color: "#E6E7E8", padding: "8px 14px" }}>{"Services"}</a>
          <a href="/#about" style={{ color: "#E6E7E8", padding: "8px 14px" }}>{"Who we serve"}</a>
          <a href="/#approach" style={{ color: "#E6E7E8", padding: "8px 14px" }}>{"Approach"}</a>
          <a href="/#leadership" style={{ color: "#E6E7E8", padding: "8px 14px" }}>{"Leadership"}</a>
          <a href="/#insights" style={{ color: "#E6E7E8", padding: "8px 14px" }}>{"Insights"}</a>
        </nav>
        <div className="r-headlinks" style={{ display: "flex", gap: "20px", alignItems: "center", fontSize: "13px" }}>
          <a href="/careers/" style={{ color: "#C9CACC" }}>{"Careers"}</a>
          <a href="/subcontractors/" style={{ color: "#C9CACC" }}>{"Subcontractors"}</a>
          <button type="button" id="menuBtn" className="r-menubtn" aria-expanded="false" aria-controls="menuPanel">
            <span className="r-burger" aria-hidden="true">
              <i></i>
              <i></i>
            </span>
            {"Menu"}
          </button>
          <a href="/request-a-budget/" style={{ display: "inline-flex", alignItems: "center", height: "44px", padding: "0 20px", borderRadius: "12px", background: "linear-gradient(180deg, #FFFFFF 0%, #E1E2E4 55%, #C3C5C8 100%)", color: "#0A0A0B", fontWeight: "600", fontSize: "14px" }}>{"Request a budget"}</a>
        </div>
      </header>
      <div id="menuPanel" className="r-menu cx-band" hidden>
        <nav aria-label="Mobile" className="r-menulinks">
          <a href="/#work">{"Work"}</a>
          <a href="/#about">{"Services"}</a>
          <a href="/#about">{"Who we serve"}</a>
          <a href="/#approach">{"Approach"}</a>
          <a href="/#leadership">{"Our team"}</a>
          <a href="/#insights">{"Insights"}</a>
        </nav>
        <div className="r-menusub">
          <a href="/careers/">{"Careers"}</a>
          <a href="/subcontractors/">{"Subcontractors"}</a>
        </div>
        <a href="/request-a-budget/" className="r-menucta">
          {"Request a budget "}
          <span aria-hidden="true">{"→"}</span>
        </a>
        <span className="r-menufoot"><a href="mailto:bids@spconstructiongroup.com" style={{ color: "inherit" }}>{"Bids@SPConstructionGroup.com"}</a>{" · "}<a href="tel:+14433000338" style={{ color: "inherit" }}>{"(443) 300-0338"}</a></span>
      </div>
    </>
  );
}
