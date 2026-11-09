// Closing CTA: full-bleed, the "Building What Matters" wall from the banner
export default function ClosingCta() {
  return (
    <section id="contact" className="r-cta cx-band" style={{ position: "relative", marginTop: "140px", height: "560px", overflow: "hidden" }}>
      <img src="/images/building-what-matters-wall.jpg" alt="Lobby wall reading Building What Matters" style={{ position: "absolute", right: "0", top: "0", width: "64%", height: "100%", objectFit: "cover", objectPosition: "30% 50%", display: "block", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 40%)", maskImage: "linear-gradient(90deg, transparent 0%, #000 40%)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg, #1F2022 30%, rgba(31,32,34,0.75) 46%, rgba(31,32,34,0) 72%), linear-gradient(180deg, rgba(31,32,34,0) 60%, rgba(23,24,26,0.9) 100%)" }}></div>
      <div className="r-ctatext" style={{ position: "absolute", left: "120px", top: "0", bottom: "0", width: "600px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#D9DADB" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "999px", background: "#D9773A", boxShadow: "0 0 10px rgba(217,119,58,0.8)" }}></span>
          {"Now scheduling 2027 projects"}
        </div>
        <h2 style={{ filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.55))", margin: "0", fontSize: "64px", fontWeight: "300", lineHeight: "1.02", letterSpacing: "-0.035em", color: "#ffffff" }}>
          {"Have a space in mind? "}
          <span style={{ background: "linear-gradient(180deg, #FFFFFF 15%, #D3D5D7 55%, #9EA1A5 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"Get a budget this week."}</span>
        </h2>
        <div style={{ display: "flex", gap: "12px" }}>
          <a href="/request-a-budget/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "56px", padding: "0 28px", borderRadius: "14px", background: "linear-gradient(180deg, #FFFFFF 0%, #E1E2E4 55%, #C3C5C8 100%)", color: "#0A0A0B", fontWeight: "600", fontSize: "15px" }}>
            {"Request a budget "}
            <span aria-hidden="true" style={{ color: "#B5541C" }}>{"→"}</span>
          </a>
          <a href="/#leadership" style={{ display: "inline-flex", alignItems: "center", height: "56px", padding: "0 26px", borderRadius: "14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff", fontSize: "15px" }}>{"Talk to our team"}</a>
        </div>
      </div>
    </section>
  );
}
