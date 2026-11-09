// Commitments: split, staggered rows that run to the right edge
export default function Commitments() {
  return (
    <section className="r-commit" style={{ position: "relative", padding: "120px 0 0 120px", display: "grid", gridTemplateColumns: "420px minmax(0, 1fr)", gap: "80px" }}>
      <div className="r-hide r-promises" aria-hidden="true" style={{ position: "absolute", right: "-40px", top: "40px", fontSize: "230px", fontWeight: "600", letterSpacing: "-0.06em", lineHeight: "1", color: "#F3F3F1", pointerEvents: "none" }}>{"Promises"}</div>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: "linear-gradient(90deg, #B5541C, #D9773A)" }}></div>
          <h2 style={{ margin: "0", fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase" }}>{"Our commitments"}</h2>
        </div>
        <p style={{ margin: "0", fontSize: "52px", fontWeight: "300", letterSpacing: "-0.03em", lineHeight: "1.05" }}>{"Promises you can hold us to, not adjectives."}</p>
      </div>
      <div className="r-commitlist" style={{ position: "relative", paddingTop: "120px", display: "flex", flexDirection: "column" }}>
        <div className="r-crow" style={{ display: "grid", gridTemplateColumns: "64px 280px minmax(0, 1fr)", gap: "28px", alignItems: "start", padding: "30px 0", borderTop: "1px solid #E4E5E6" }}>
          <span className="cx-steel" style={{ width: "56px", height: "56px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 22px rgba(0,0,0,0.18)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E9A27A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="8.5"></circle>
              <path d="M12 7.5V12l3 2"></path>
            </svg>
          </span>
          <span style={{ fontSize: "26px", fontWeight: "400", lineHeight: "1.2", paddingTop: "10px" }}>{"A budget within [48 hours]"}</span>
          <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#55585C", padding: "12px 64px 0 0" }}>{"Send drawings or a test fit and get a real number back, with the assumptions behind it."}</span>
        </div>
        <div className="r-crow" style={{ marginLeft: "48px", display: "grid", gridTemplateColumns: "64px 280px minmax(0, 1fr)", gap: "28px", alignItems: "start", padding: "30px 0", borderTop: "1px solid #E4E5E6" }}>
          <span className="cx-steel" style={{ width: "56px", height: "56px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 22px rgba(0,0,0,0.18)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E9A27A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="4" y="5" width="16" height="15" rx="2.5"></rect>
              <path d="M4 9.5h16M8.5 3v4M15.5 3v4M8 14l2.5 2.5L16 12"></path>
            </svg>
          </span>
          <span style={{ fontSize: "26px", fontWeight: "400", lineHeight: "1.2", paddingTop: "10px" }}>{"Weekly progress, on the record"}</span>
          <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#55585C", padding: "12px 64px 0 0" }}>{"A progress meeting every week, with minutes, logs and a two-week look-ahead in Procore."}</span>
        </div>
        <div className="r-crow" style={{ marginLeft: "96px", display: "grid", gridTemplateColumns: "64px 280px minmax(0, 1fr)", gap: "28px", alignItems: "start", padding: "30px 0", borderTop: "1px solid #E4E5E6", borderBottom: "1px solid #E4E5E6" }}>
          <span className="cx-steel" style={{ width: "56px", height: "56px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 22px rgba(0,0,0,0.18)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E9A27A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="8" r="3.5"></circle>
              <path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5"></path>
            </svg>
          </span>
          <span style={{ fontSize: "26px", fontWeight: "400", lineHeight: "1.2", paddingTop: "10px" }}>{"One accountable lead"}</span>
          <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#55585C", padding: "12px 64px 0 0" }}>{"A senior project lead owns your job from first budget to closeout. You always know who to call."}</span>
        </div>
      </div>
    </section>
  );
}
