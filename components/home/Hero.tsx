// HERO: concrete, oversized type, full-bleed banner
export default function Hero() {
  return (
    <section className="r-hero cx-hero" style={{ position: "relative" }}>
      <div aria-hidden="true" className="bp-grid" style={{ position: "absolute", left: "0", top: "0", width: "520px", height: "640px", opacity: "0.6", WebkitMaskImage: "linear-gradient(135deg, #000 0%, transparent 70%)", maskImage: "linear-gradient(135deg, #000 0%, transparent 70%)" }}></div>
      <div className="r-heroin" style={{ position: "relative", padding: "64px 56px 0 120px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "32px", padding: "0 14px", borderRadius: "999px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#D9DADB" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "999px", background: "#D9773A", boxShadow: "0 0 10px rgba(217,119,58,0.8)" }}></span>
          {"Commercial GC · MD · DC · VA · NC · MA · FL"}
        </div>
        <h1 className="r-h1" style={{ filter: "drop-shadow(0 10px 14px rgba(0,0,0,0.6)) drop-shadow(0 2px 2px rgba(0,0,0,0.45))", margin: "28px 0 0 0", fontSize: "96px", fontWeight: "300", lineHeight: "0.98", letterSpacing: "-0.045em", color: "#ffffff", maxWidth: "1180px" }}>
          {"Healthcare and commercial spaces, "}
          <span style={{ background: "linear-gradient(180deg, #FFFFFF 15%, #D3D5D7 55%, #9EA1A5 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"built right and delivered on time."}</span>
        </h1>
      </div>
      <div className="r-herosub" style={{ position: "relative", display: "flex", justifyContent: "flex-end", padding: "36px 120px 56px 120px" }}>
        <div className="r-w100" style={{ width: "470px", display: "flex", flexDirection: "column", gap: "22px", paddingLeft: "28px", borderLeft: "1px solid rgba(217,119,58,0.6)" }}>
          <p style={{ margin: "0", fontSize: "18px", fontWeight: "300", lineHeight: "1.6", color: "#C9CACC" }}>{"Commercial buildouts and renovations, led by senior builders and built on the latest technology and advanced systems, for a better experience for our clients and our team."}</p>
          <div style={{ display: "flex", gap: "12px" }}>
            <a href="/request-a-budget/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "54px", padding: "0 26px", borderRadius: "14px", background: "linear-gradient(180deg, #FFFFFF 0%, #E1E2E4 55%, #C3C5C8 100%)", color: "#0A0A0B", fontWeight: "600", fontSize: "15px" }}>
              {"Request a budget "}
              <span aria-hidden="true" style={{ color: "#B5541C" }}>{"→"}</span>
            </a>
            <a href="/#work" style={{ display: "inline-flex", alignItems: "center", height: "54px", padding: "0 26px", borderRadius: "14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.18)", color: "#ffffff", fontSize: "15px" }}>{"See our work"}</a>
          </div>
        </div>
      </div>
      <div className="r-banner" style={{ position: "relative", height: "470px" }}>
        <img src="/images/hero-lobby.jpg" id="banner" alt="A finished commercial lobby beside its blueprints" style={{ willChange: "transform", position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 55%", display: "block" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, #1F2022 0%, rgba(31,32,34,0.55) 18%, rgba(31,32,34,0) 42%, rgba(10,10,11,0) 70%, rgba(10,10,11,0.35) 100%)" }}></div>
        <div className="r-bchip" style={{ position: "absolute", left: "120px", bottom: "120px", display: "flex", alignItems: "center", gap: "10px", height: "34px", padding: "0 14px", borderRadius: "999px", background: "rgba(10,10,11,0.45)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(10px)", color: "#E6E7E8", fontSize: "12px", letterSpacing: "0.04em" }}>
          <span style={{ width: "18px", height: "1px", background: "#D9DADB" }}></span>
          {"From the drawing set to the day you open"}
        </div>
      </div>
    </section>
  );
}
