// Client updates: full-bleed concrete band, report cards break out of the bottom edge
export default function OwnerReporting() {
  return (
    <section id="reporting" className="r-report cx-band" style={{ position: "relative", marginTop: "120px", height: "500px" }}>
      <div className="r-reporttext" style={{ position: "absolute", left: "120px", top: "110px", width: "480px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#ECEDEE" }}>
          {"Keeping you informed"}
        </div>
        <h2 style={{ margin: "0", fontSize: "56px", fontWeight: "300", lineHeight: "1.04", letterSpacing: "-0.03em", color: "#ffffff" }}>
          {"We keep our clients informed, "}
          <span style={{ background: "linear-gradient(180deg, #FFFFFF 15%, #C9CBCE 60%, #8E9195 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"every week."}</span>
        </h2>
        <p style={{ margin: "0", fontSize: "16px", fontWeight: "300", lineHeight: "1.6", color: "#E1E2E4" }}>{"Schedule, budget, decisions due and the next two weeks, pulled straight from the advanced systems our team runs every job on."}</p>
        <a href="mailto:bids@spconstructiongroup.com?subject=Sample%20client%20update%20request" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", height: "50px", padding: "0 22px", borderRadius: "6px", background: "linear-gradient(180deg, #FFFFFF 0%, #E1E2E4 55%, #C3C5C8 100%)", color: "#0A0A0B", fontWeight: "600", fontSize: "14px" }}>{"Request a sample packet"}</a>
      </div>
      <div className="r-paycard" style={{ position: "absolute", left: "1010px", top: "120px", width: "330px", transform: "rotate(3deg)", borderRadius: "10px", background: "#F6F6F4", border: "1px solid #E4E5E6", boxShadow: "0 30px 60px rgba(0,0,0,0.35)", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
        <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#45484C" }}>{"PAY APPLICATION #[6]"}</span>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
          <span>{"This period"}</span>
          <span style={{ fontWeight: "600" }}>{"[$ 186,400]"}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
          <span>{"Retainage held"}</span>
          <span style={{ color: "#45484C" }}>{"[$ 62,000]"}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
          <span>{"Balance to finish"}</span>
          <span style={{ color: "#45484C" }}>{"[$ 760,000]"}</span>
        </div>
        <div style={{ height: "70px" }}></div>
      </div>
      <div className="r-weekcard" style={{ position: "absolute", left: "640px", top: "160px", width: "540px", padding: "1px", borderRadius: "10px", background: "linear-gradient(140deg, rgba(255,255,255,0.6), rgba(255,255,255,0.05) 50%, rgba(157,184,211,0.5))", transform: "rotate(-2.5deg)", boxShadow: "0 40px 80px rgba(0,0,0,0.38)" }}>
        <div style={{ background: "#ffffff", borderRadius: "10px", padding: "28px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#45484C" }}>{"SAMPLE · WEEKLY PROGRESS · WEEK [12]"}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 12px", borderRadius: "6px", background: "#EEF3F8", color: "#2C5A85", fontSize: "11.5px", fontWeight: "600" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "999px", background: "#2C5A85" }}></span>
              {"On schedule"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span style={{ fontWeight: "600" }}>{"Percent complete"}</span>
              <span style={{ color: "#45484C" }}>{"[62]%"}</span>
            </div>
            <div style={{ height: "10px", borderRadius: "6px", background: "#F1F2F3" }}>
              <div style={{ width: "62%", height: "10px", borderRadius: "6px", background: "linear-gradient(90deg, #16273A, #2C5A85 60%, #6E99C4)" }}></div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span style={{ fontWeight: "600" }}>{"Billed to date vs contract"}</span>
              <span style={{ color: "#45484C" }}>{"[$ 1,240,000] of [$ 2,000,000]"}</span>
            </div>
            <div style={{ height: "10px", borderRadius: "6px", background: "#F1F2F3" }}>
              <div style={{ width: "58%", height: "10px", borderRadius: "6px", background: "linear-gradient(90deg, #0A0A0B, #3A3D42)" }}></div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", color: "#45484C", paddingBottom: "6px" }}>{"DECISIONS DUE"}</span>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "10px 0", borderTop: "1px solid #E4E5E6", fontSize: "13px" }}>
              <span>{"Exam room flooring selection"}</span>
              <span style={{ color: "#B5541C", fontWeight: "600" }}>{"Due [Fri]"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "10px 0", borderTop: "1px solid #E4E5E6", fontSize: "13px" }}>
              <span>{"Reception millwork shop drawings"}</span>
              <span style={{ color: "#45484C" }}>{"With architect"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "10px 0", borderTop: "1px solid #E4E5E6", fontSize: "13px" }}>
              <span>{"Change order #[3], added data drops"}</span>
              <span style={{ color: "#45484C" }}>{"Priced"}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", paddingTop: "2px" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", color: "#45484C", marginRight: "6px" }}>{"NEXT 2 WEEKS"}</span>
            <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "8px", background: "#F1F2F3", fontSize: "11.5px" }}>{"Ceiling grid"}</span>
            <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "8px", background: "#F1F2F3", fontSize: "11.5px" }}>{"Paint"}</span>
            <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "8px", background: "#FBEEE6", color: "#A2481A", fontSize: "11.5px" }}>{"Fire inspection"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
