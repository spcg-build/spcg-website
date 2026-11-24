// HERO (Draft Revision v2): copy left, exploded-building render right (render made with ChatGPT image model, no text in image).
export default function Hero() {
  return (
    <section className="r-hero r-hero2" style={{ position: "relative", background: "#161616" }}>
      <div className="r-hero2-grid">
        <div className="r-heroin r-story-l">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#FFFFFF" }}>
            {"Commercial GC · MD · DC · VA · NC · MA · FL"}
          </div>
          <h1 className="r-h1" style={{ margin: "26px 0 0 0", fontSize: "clamp(34px, 3.3vw, 50px)", fontWeight: "300", lineHeight: "1.06", letterSpacing: "-0.035em", color: "#FFFFFF" }}>
            {"Commercial buildouts and renovations, run on modern systems and delivered on time."}
          </h1>
          <div className="r-w100" style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "24px", paddingLeft: "24px", borderLeft: "2px solid #2E2E2E" }}>
            <p style={{ margin: "0", fontSize: "17px", fontWeight: "300", lineHeight: "1.6", color: "#C9C9C9" }}>{"Healthcare, retail, office, restaurant and multifamily spaces, managed with live schedules, weekly owner reporting and AI-assisted project controls."}</p>
            <div style={{ display: "flex", gap: "12px" }}>
              <a href="/request-a-budget/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "54px", padding: "0 26px", borderRadius: "6px", background: "#FFFFFF", color: "#111111", fontWeight: "600", fontSize: "15px" }}>
                {"Request a budget "}
                <span aria-hidden="true" style={{ color: "#C96A1E" }}>{"→"}</span>
              </a>
            </div>
          </div>
          <ul className="r-proof" aria-label="At a glance">
            <li><b>{"25+ years"}</b><span>{"in commercial construction"}</span></li>
            <li><b>{"Bonded"}</b><span>{"privately held and insured"}</span></li>
            <li><b>{"Weekly"}</b><span>{"owner reporting on every job"}</span></li>
          </ul>
        </div>
        <figure className="r-hero2-art" style={{ margin: "0" }}>
          <img src="/images/hero-stack-v1.jpg" alt="Illustration: an exploded building cutaway showing the spaces SPCG builds, from medical clinic and surgery center to retail, office, coworking, restaurant and multifamily" loading="eager" />
        </figure>
      </div>
    </section>
  );
}
