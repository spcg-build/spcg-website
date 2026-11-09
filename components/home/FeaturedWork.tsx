// Featured work: horizontal strip that runs off the right edge
export default function FeaturedWork() {
  return (
    <section id="work" className="r-work" style={{ paddingTop: "140px" }}>
      <div className="r-pad r-workhead" style={{ padding: "0 120px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: "linear-gradient(90deg, #B5541C, #D9773A)" }}></div>
            <h2 style={{ margin: "0", fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase" }}>{"Featured work"}</h2>
          </div>
          <p style={{ margin: "0", fontSize: "52px", fontWeight: "300", letterSpacing: "-0.03em", lineHeight: "1.05" }}>
            {"Clinical, office and"}
            <br />
            {"hospitality spaces."}
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span className="r-hint" style={{ fontSize: "12px", color: "#8C8F93" }}>{"Drag or use the arrows"}</span>
          <button type="button" id="prev" aria-label="Previous projects" style={{ cursor: "pointer", fontFamily: "inherit", background: "#ffffff", width: "52px", height: "52px", borderRadius: "999px", border: "1px solid #D9DADB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: "#8C8F93" }}>{"←"}</button>
          <button type="button" id="next" aria-label="Next projects" style={{ cursor: "pointer", fontFamily: "inherit", border: "0", width: "52px", height: "52px", borderRadius: "999px", background: "linear-gradient(180deg, #4A4D52, #1D1E20)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: "#ffffff" }}>{"→"}</button>
        </div>
      </div>
      <div className="r-strip hs" style={{ marginTop: "44px", overflowX: "auto", scrollSnapType: "x mandatory", scrollPaddingLeft: "120px", padding: "0 120px 20px 120px", display: "flex", gap: "20px", alignItems: "flex-end" }}>
        <a href="/#work" className="lift" data-card="" style={{ scrollSnapAlign: "start", position: "relative", flex: "0 0 660px", height: "540px", borderRadius: "28px", overflow: "hidden", display: "block" }}>
          <img src="/images/aspen-river-reception.jpg" alt="Aspen River Veterinary Clinic" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(10,10,11,0) 45%, rgba(10,10,11,0.88) 100%)" }}></div>
          <span style={{ position: "absolute", top: "22px", left: "26px", fontSize: "64px", fontWeight: "300", letterSpacing: "-0.04em", color: "rgba(255,255,255,0.9)" }}>{"01"}</span>
          <div style={{ position: "absolute", left: "28px", right: "28px", bottom: "26px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.12em", color: "#E9A27A" }}>{"HEALTHCARE · VETERINARY"}</span>
            <span style={{ fontSize: "30px", fontWeight: "300", color: "#ffffff" }}>{"Aspen River Veterinary Clinic"}</span>
            <span style={{ fontSize: "13.5px", color: "#D9DADB" }}>{"Belcamp, MD · 7,000 SF · [Value] · [Weeks]"}</span>
          </div>
        </a>
        <a href="/#work" className="cx-blue lift" data-card="" style={{ scrollSnapAlign: "start", position: "relative", flex: "0 0 420px", height: "440px", borderRadius: "28px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "28px", gap: "8px", boxSizing: "border-box" }}>
          <span style={{ position: "absolute", top: "22px", left: "26px", fontSize: "64px", fontWeight: "300", letterSpacing: "-0.04em", color: "rgba(255,255,255,0.85)" }}>{"02"}</span>
          <span style={{ position: "absolute", top: "34px", right: "26px", fontSize: "11px", color: "#8C8F93" }}>{"Photo to come"}</span>
          <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.12em", color: "#9DB8D3" }}>{"HEALTHCARE · CLINICAL"}</span>
          <span style={{ fontSize: "24px", fontWeight: "300", color: "#ffffff" }}>{"Soar Autism Center"}</span>
          <span style={{ fontSize: "13px", color: "#C9CACC" }}>{"Greenbelt, MD · 9,236 SF"}</span>
        </a>
        <a href="/#work" className="cx-brass lift" data-card="" style={{ scrollSnapAlign: "start", position: "relative", flex: "0 0 520px", height: "540px", borderRadius: "28px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "28px", gap: "8px", boxSizing: "border-box" }}>
          <span style={{ position: "absolute", top: "22px", left: "26px", fontSize: "64px", fontWeight: "300", letterSpacing: "-0.04em", color: "rgba(255,255,255,0.85)" }}>{"03"}</span>
          <span style={{ position: "absolute", top: "34px", right: "26px", fontSize: "11px", color: "#8C8F93" }}>{"Photo to come"}</span>
          <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.12em", color: "#E9C39A" }}>{"HOSPITALITY · WITH WHITING-TURNER"}</span>
          <span style={{ fontSize: "24px", fontWeight: "300", color: "#ffffff" }}>{"JW Marriott Washington DC"}</span>
          <span style={{ fontSize: "13px", color: "#C9CACC" }}>{"Washington, DC · Restaurant, bar and private dining"}</span>
        </a>
        <a href="/#work" className="cx-amber lift" data-card="" style={{ scrollSnapAlign: "start", position: "relative", flex: "0 0 420px", height: "440px", borderRadius: "28px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "28px", gap: "8px", boxSizing: "border-box" }}>
          <span style={{ position: "absolute", top: "22px", left: "26px", fontSize: "64px", fontWeight: "300", letterSpacing: "-0.04em", color: "rgba(255,255,255,0.85)" }}>{"04"}</span>
          <span style={{ position: "absolute", top: "34px", right: "26px", fontSize: "11px", color: "#8C8F93" }}>{"Photo to come"}</span>
          <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.12em", color: "#E9A27A" }}>{"HIGHER ED · WELLNESS"}</span>
          <span style={{ fontSize: "24px", fontWeight: "300", color: "#ffffff" }}>{"Howard University Wellness Center"}</span>
          <span style={{ fontSize: "13px", color: "#C9CACC" }}>{"Washington, DC · 7,500 SF · via CBRE"}</span>
        </a>
        <a href="/#work" className="lift" data-card="" style={{ scrollSnapAlign: "start", flex: "0 0 300px", height: "440px", borderRadius: "28px", border: "1px solid #E4E5E6", background: "linear-gradient(180deg, #F6F6F4, #FFFFFF)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "28px", boxSizing: "border-box" }}>
          <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#8C8F93" }}>{"ALL PROJECTS"}</span>
          <span style={{ fontSize: "30px", fontWeight: "300", lineHeight: "1.15" }}>
            {"See every space we've built "}
            <span style={{ color: "#B5541C" }}>{"→"}</span>
          </span>
        </a>
      </div>
      <div className="r-progress" style={{ margin: "18px 120px 0 120px", height: "2px", background: "#ECECEA", borderRadius: "2px" }}>
        <div id="bar" style={{ width: "34%", height: "2px", borderRadius: "2px", background: "linear-gradient(90deg, #0A0A0B, #2C5A85, #D9773A)", transition: "width .3s ease" }}></div>
      </div>
    </section>
  );
}
