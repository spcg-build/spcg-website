// Overlap: stats card breaks the hero edge; audience chips sit opposite
export default function StatsIntro() {
  return (
    <section className="r-overlap" style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "0 0 0 120px" }}>
      <div className="r-pills" style={{ paddingTop: "64px", width: "500px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", color: "#55585C" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "999px", background: "#D9773A" }}></span>
          {"TAILOR THIS SITE"}
        </span>
        <span style={{ fontSize: "24px", fontWeight: "300", lineHeight: "1.3", letterSpacing: "-0.01em" }}>{"Tell us what you’re building and who you are. We’ll show you what matters to you."}</span>
      </div>
      <div className="r-stats" style={{ marginTop: "-84px", width: "780px", padding: "1px", borderRadius: "28px 0 0 28px", background: "linear-gradient(120deg, rgba(255,255,255,0.45), rgba(255,255,255,0.06) 45%, rgba(217,150,80,0.45))", boxShadow: "0 30px 60px rgba(0,0,0,0.28)" }}>
        <div className="r-statsgrid cx-band" style={{ borderRadius: "27px 0 0 27px", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", padding: "30px 0 30px 12px" }}>
          <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "38px", fontWeight: "300", letterSpacing: "-0.02em", background: "linear-gradient(180deg, #FFFFFF 20%, #B9BBBE 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"$1–5M"}</span>
            <span style={{ fontSize: "12px", color: "#A9ABAE" }}>{"Typical project size"}</span>
          </div>
          <div style={{ padding: "0 24px", borderLeft: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "38px", fontWeight: "300", letterSpacing: "-0.02em", background: "linear-gradient(180deg, #FFFFFF 20%, #B9BBBE 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }} data-count="3">{"3"}</span>
            <span style={{ fontSize: "12px", color: "#A9ABAE" }}>{"State GC licenses"}</span>
          </div>
          <div style={{ padding: "0 24px", borderLeft: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "38px", fontWeight: "300", letterSpacing: "-0.02em", background: "linear-gradient(180deg, #FFFFFF 20%, #B9BBBE 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }} data-count="6">{"6"}</span>
            <span style={{ fontSize: "12px", color: "#A9ABAE" }}>{"Markets, Boston to Central Florida"}</span>
          </div>
          <div style={{ padding: "0 24px", borderLeft: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "38px", fontWeight: "300", letterSpacing: "-0.02em", background: "linear-gradient(180deg, #FFFFFF 20%, #B9BBBE 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }} data-count="25" data-suffix="+ yrs">{"25+ yrs"}</span>
            <span style={{ fontSize: "12px", color: "#A9ABAE" }}>{"In commercial construction"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
