// Where we build: full-bleed 50/50 split
export default function WhereWeBuild() {
  return (
    <section className="r-about" id="where" style={{ marginTop: "140px", background: "#161616", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div className="r-aboutl"  style={{ position: "relative", padding: "96px 64px 96px 120px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div aria-hidden="true" className="bp-grid" style={{ position: "absolute", inset: "0", opacity: "0.5", WebkitMaskImage: "linear-gradient(90deg, transparent, #000)", maskImage: "linear-gradient(90deg, transparent, #000)" }}></div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", color: "#C9C9C9", paddingBottom: "18px" }}>{"WHERE WE BUILD"}</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: "50px", fontWeight: "300", letterSpacing: "-0.03em", color: "#FFFFFF" }}>{"Maryland"}</span>
            <span style={{ fontSize: "12px", color: "#C9C9C9" }}>{"Active projects"}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: "50px", fontWeight: "300", letterSpacing: "-0.03em", color: "#FFFFFF" }}>{"Washington, DC"}</span>
            <span style={{ fontSize: "12px", color: "#C9C9C9" }}>{"Active projects"}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: "50px", fontWeight: "300", letterSpacing: "-0.03em", color: "#FFFFFF" }}>{"Virginia"}</span>
            <span style={{ fontSize: "12px", color: "#C9C9C9" }}>{"Active projects"}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: "50px", fontWeight: "300", letterSpacing: "-0.03em", color: "#FFFFFF" }}>{"Boston"}</span>
            <span style={{ fontSize: "12px", color: "#C9C9C9" }}>{"Completed projects"}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: "50px", fontWeight: "300", letterSpacing: "-0.03em", color: "#FFFFFF" }}>{"North Carolina"}</span>
            <span style={{ fontSize: "12px", color: "#C9C9C9" }}>{"Active projects"}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: "50px", fontWeight: "300", letterSpacing: "-0.03em", color: "#C96A1E" }}>{"Florida"}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#C96A1E" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "999px", background: "#C96A1E" }}></span>
              {"Now building statewide"}
            </span>
          </div>
          <span style={{ paddingTop: "12px", fontSize: "12.5px", letterSpacing: "0.04em", color: "#C9C9C9" }}>{"Tampa Bay · Central Florida · South Florida · North Florida"}</span>
        </div>
      </div>
      <div className="r-aboutr" style={{ padding: "96px 120px 96px 80px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "22px", background: "#FFFFFF" }}>
        <p style={{ margin: "0", fontSize: "44px", fontWeight: "300", lineHeight: "1.08", letterSpacing: "-0.03em" }}>{"One team, building up and down the East Coast."}</p>
        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "#5A5A5A" }}>{"A privately held commercial general contractor, licensed in several East Coast markets, with projects from Boston to Florida."}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px 24px", paddingTop: "10px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14.5px", fontWeight: "600" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" fill="#C96A1E" stroke="#C96A1E" strokeWidth="1.7"></path>
              <path d="M8.8 12.2l2.2 2.2 4.2-4.4" stroke="#FFFFFF" strokeWidth="2"></path>
            </svg>
            {"Bonded and insured"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14.5px", fontWeight: "600" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" fill="#C96A1E" stroke="#C96A1E" strokeWidth="1.7"></path>
              <path d="M8.8 12.2l2.2 2.2 4.2-4.4" stroke="#FFFFFF" strokeWidth="2"></path>
            </svg>
            {"Surety letter on request"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14.5px", fontWeight: "600" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" fill="#C96A1E" stroke="#C96A1E" strokeWidth="1.7"></path>
              <path d="M8.8 12.2l2.2 2.2 4.2-4.4" stroke="#FFFFFF" strokeWidth="2"></path>
            </svg>
            {"CFMA member"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14.5px", fontWeight: "600" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" fill="#C96A1E" stroke="#C96A1E" strokeWidth="1.7"></path>
              <path d="M8.8 12.2l2.2 2.2 4.2-4.4" stroke="#FFFFFF" strokeWidth="2"></path>
            </svg>
            {"FP&A Certified (FPAC)"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14.5px", fontWeight: "600" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" fill="#C96A1E" stroke="#C96A1E" strokeWidth="1.7"></path>
              <path d="M8.8 12.2l2.2 2.2 4.2-4.4" stroke="#FFFFFF" strokeWidth="2"></path>
            </svg>
            {"Privately held"}
          </span>
        </div>
      </div>
    </section>
  );
}
