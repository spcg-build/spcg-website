// Testimonials: oversized quote mark bleeding off the left edge, quotes offset
export default function Testimonials() {
  return (
    <section className="r-testi" style={{ position: "relative", padding: "150px 120px 0 0" }}>
      <span className="r-qmark" aria-hidden="true" style={{ position: "absolute", left: "-10px", top: "40px", fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "480px", fontWeight: "400", lineHeight: "1", background: "linear-gradient(135deg, #B5541C, #E9A27A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", opacity: "0.9" }}>{"“"}</span>
      <figure className="r-fig1" style={{ position: "relative", margin: "0 0 0 330px", display: "flex", flexDirection: "column", gap: "28px" }}>
        <blockquote className="r-bq" style={{ margin: "0", fontSize: "44px", fontWeight: "300", lineHeight: "1.22", letterSpacing: "-0.02em", maxWidth: "900px" }}>{"[Client quote about schedule, communication or the finished space, in their words.]"}</blockquote>
        <figcaption style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ width: "42px", height: "42px", borderRadius: "999px", background: "linear-gradient(135deg, #D9DADB, #F1F2F3)" }}></span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600" }}>{"[Client name]"}</span>
            <span style={{ fontSize: "12px", color: "#55585C" }}>{"[Title], Aspen River Veterinary Clinic"}</span>
          </span>
        </figcaption>
      </figure>
      <figure className="r-fig2" style={{ margin: "56px 0 0 auto", width: "560px", borderRadius: "28px", padding: "32px", display: "flex", flexDirection: "column", gap: "18px", background: "linear-gradient(160deg, #F6F6F4 0%, #FFFFFF 70%)", border: "1px solid #E4E5E6", boxSizing: "border-box" }}>
        <blockquote style={{ margin: "0", fontSize: "20px", fontWeight: "300", lineHeight: "1.5" }}>{"“[Architect or broker quote on how SPCG built to the design and kept the team informed.]”"}</blockquote>
        <figcaption style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ width: "36px", height: "36px", borderRadius: "999px", background: "linear-gradient(135deg, #D9DADB, #F1F2F3)" }}></span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "13.5px", fontWeight: "600" }}>{"[Architect name]"}</span>
            <span style={{ fontSize: "12px", color: "#55585C" }}>{"[Title], [Firm]"}</span>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
