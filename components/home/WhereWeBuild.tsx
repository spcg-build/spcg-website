// Where we build: full-bleed 50/50 split
export default function WhereWeBuild() {
  return (
    <section className="r-about" id="about" style={{ marginTop: "140px", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div className="r-aboutl cx-hero" style={{ position: "relative", padding: "96px 64px 96px 120px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div aria-hidden="true" className="bp-grid" style={{ position: "absolute", inset: "0", opacity: "0.5", WebkitMaskImage: "linear-gradient(90deg, transparent, #000)", maskImage: "linear-gradient(90deg, transparent, #000)" }}></div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", color: "#8C8F93", paddingBottom: "18px" }}>{"WHERE WE BUILD"}</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: "50px", fontWeight: "300", letterSpacing: "-0.03em", background: "linear-gradient(180deg, #FFFFFF 20%, #A9ABAE 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"Maryland"}</span>
            <span style={{ fontSize: "12px", color: "#A9ABAE" }}>{"Active projects"}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: "50px", fontWeight: "300", letterSpacing: "-0.03em", background: "linear-gradient(180deg, #FFFFFF 20%, #A9ABAE 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"Washington, DC"}</span>
            <span style={{ fontSize: "12px", color: "#A9ABAE" }}>{"Active projects"}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: "50px", fontWeight: "300", letterSpacing: "-0.03em", background: "linear-gradient(180deg, #FFFFFF 20%, #A9ABAE 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"Virginia"}</span>
            <span style={{ fontSize: "12px", color: "#A9ABAE" }}>{"Active projects"}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: "50px", fontWeight: "300", letterSpacing: "-0.03em", background: "linear-gradient(180deg, #FFFFFF 20%, #A9ABAE 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"Boston"}</span>
            <span style={{ fontSize: "12px", color: "#A9ABAE" }}>{"Completed projects"}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: "50px", fontWeight: "300", letterSpacing: "-0.03em", background: "linear-gradient(180deg, #FFFFFF 20%, #A9ABAE 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"North Carolina"}</span>
            <span style={{ fontSize: "12px", color: "#A9ABAE" }}>{"Active projects"}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: "50px", fontWeight: "300", letterSpacing: "-0.03em", background: "linear-gradient(180deg, #F2B48A 10%, #D9773A 60%, #B5541C 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"Florida"}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#E9A27A" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "999px", background: "#D9773A", boxShadow: "0 0 8px rgba(217,119,58,0.8)" }}></span>
              {"Now building statewide"}
            </span>
          </div>
          <span style={{ paddingTop: "12px", fontSize: "12.5px", letterSpacing: "0.04em", color: "#E1E2E4" }}>{"Tampa Bay · Central Florida · South Florida · North Florida"}</span>
        </div>
      </div>
      <div className="r-aboutr" style={{ padding: "96px 120px 96px 80px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "22px", background: "linear-gradient(180deg, #FFFFFF 0%, #F6F6F4 100%)" }}>
        <p style={{ margin: "0", fontSize: "44px", fontWeight: "300", lineHeight: "1.08", letterSpacing: "-0.03em" }}>{"One team, building up and down the East Coast."}</p>
        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#45484C" }}>{"A privately held commercial general contractor, licensed in several East Coast markets, with projects from Boston to Florida."}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px 24px", paddingTop: "10px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14.5px", fontWeight: "600" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C5A85" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z"></path>
              <path d="M8.8 12.2l2.2 2.2 4.2-4.4"></path>
            </svg>
            {"Privately held"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14.5px", fontWeight: "600" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C5A85" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z"></path>
              <path d="M8.8 12.2l2.2 2.2 4.2-4.4"></path>
            </svg>
            {"Bonded and insured"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14.5px", fontWeight: "600" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C5A85" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z"></path>
              <path d="M8.8 12.2l2.2 2.2 4.2-4.4"></path>
            </svg>
            {"CFMA member"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14.5px", fontWeight: "600" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C5A85" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z"></path>
              <path d="M8.8 12.2l2.2 2.2 4.2-4.4"></path>
            </svg>
            {"FP&A Certified (FPAC)"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14.5px", fontWeight: "600" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C5A85" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z"></path>
              <path d="M8.8 12.2l2.2 2.2 4.2-4.4"></path>
            </svg>
            {"Surety letter on request"}
          </span>
        </div>
      </div>
    </section>
  );
}
