// Client updates: full-bleed concrete band, report cards break out of the bottom edge
export default function OwnerReporting() {
  return (
    <>
    <section id="reporting" className="r-report cx-band" style={{ position: "relative", zIndex: "2", marginTop: "120px", height: "500px" }}>
      <div className="r-reporttext" style={{ position: "absolute", left: "120px", top: "110px", width: "480px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#FFFFFF" }}>
          {"Keeping you informed"}
        </div>
        <h2 style={{ margin: "0", fontSize: "56px", fontWeight: "300", lineHeight: "1.04", letterSpacing: "-0.03em", color: "#ffffff" }}>
          {"We keep our clients informed, "}
          <span style={{ color: "#FFFFFF" }}>{"every week."}</span>
        </h2>
        <p style={{ margin: "0", fontSize: "16px", fontWeight: "300", lineHeight: "1.6", color: "#C9C9C9" }}>{"Schedule, budget, decisions due and the next two weeks, pulled straight from the advanced systems our team runs every job on."}</p>
        <a href="mailto:bids@spconstructiongroup.com?subject=Sample%20client%20update%20request" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", height: "50px", padding: "0 22px", borderRadius: "6px", background: "#FFFFFF", color: "#111111", fontWeight: "600", fontSize: "14px" }}>{"Request a sample packet"}</a>
      </div>
      <div className="r-paycard" style={{ position: "absolute", left: "1010px", top: "120px", width: "330px", transform: "rotate(3deg)", borderRadius: "10px", background: "#F7F5F2", border: "1px solid #E5E5E5", boxShadow: "0 30px 60px rgba(0,0,0,0.35)", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
        <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#5A5A5A" }}>{"PAY APPLICATION #6"}</span>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
          <span>{"This period"}</span>
          <span style={{ fontWeight: "600" }}>{"[$ 186,400]"}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
          <span>{"Retainage held"}</span>
          <span style={{ color: "#5A5A5A" }}>{"[$ 62,000]"}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
          <span>{"Balance to finish"}</span>
          <span style={{ color: "#5A5A5A" }}>{"[$ 760,000]"}</span>
        </div>
        <div style={{ height: "70px" }}></div>
      </div>
      
      <figure className="r-friday" style={{ position: "absolute", left: "42%", right: "0", top: "0", bottom: "0", margin: "0", overflow: "hidden", zIndex: "0" }}>
        <img src="/images/team-friday-v1.jpg" alt="SPCG superintendents and project team reviewing the weekly update with the client on site" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "55% 30%", display: "block", WebkitMaskImage: "linear-gradient(90deg, transparent 0, #000 22%)", maskImage: "linear-gradient(90deg, transparent 0, #000 22%)" }} />
        <div className="r-fpanel" style={{ position: "absolute", left: "16%", right: "32px", bottom: "28px", padding: "16px 8px 14px 0", borderRadius: "10px", background: "rgba(14,15,16,0.78)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 20px 40px rgba(0,0,0,0.35)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 0 12px 18px" }}><span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#FFFFFF" }}>{"SAMPLE · FRIDAY UPDATE · WEEK 12"}</span><span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#FFFFFF", paddingRight: "12px" }}><span style={{ width: "7px", height: "7px", borderRadius: "999px", background: "#FFFFFF" }}></span>{"On schedule"}</span></div>
          <div className="r-fgrid" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            <div className="r-ftile" style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "4px 18px", borderLeft: "1px solid rgba(255,255,255,0.12)" }}><span style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: "0.12em", color: "#C9C9C9" }}>{"COMPLETE"}</span><span style={{ fontSize: "24px", fontWeight: "300", color: "#ffffff", whiteSpace: "nowrap" }}>{"62%"}</span><span style={{ fontSize: "12px", color: "#C9C9C9" }}>{"Week 12 of 20"}</span></div><div className="r-ftile" style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "4px 18px", borderLeft: "1px solid rgba(255,255,255,0.12)" }}><span style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: "0.12em", color: "#C9C9C9" }}>{"BILLED"}</span><span style={{ fontSize: "24px", fontWeight: "300", color: "#ffffff", whiteSpace: "nowrap" }}>{"$1.24M"}</span><span style={{ fontSize: "12px", color: "#C9C9C9" }}>{"of $2.0M contract"}</span></div><div className="r-ftile" style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "4px 18px", borderLeft: "1px solid rgba(255,255,255,0.12)" }}><span style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: "0.12em", color: "#C9C9C9" }}>{"DECISIONS DUE"}</span><span style={{ fontSize: "24px", fontWeight: "300", color: "#ffffff", whiteSpace: "nowrap" }}>{"3"}</span><span style={{ fontSize: "12px", color: "#C9C9C9" }}>{"Flooring due [Fri]"}</span></div><div className="r-ftile" style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "4px 18px", borderLeft: "1px solid rgba(255,255,255,0.12)" }}><span style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: "0.12em", color: "#C9C9C9" }}>{"NEXT 2 WEEKS"}</span><span style={{ fontSize: "24px", fontWeight: "300", color: "#ffffff", whiteSpace: "nowrap" }}>{"3 items"}</span><span style={{ fontSize: "12px", color: "#C9C9C9" }}>{"Ceiling grid, paint, inspection"}</span></div>
          </div>
        </div>
      </figure>
      <div className="r-weekcard r-oldcard" style={{ position: "absolute", left: "640px", top: "160px", width: "540px", padding: "1px", borderRadius: "10px", background: "linear-gradient(140deg, rgba(255,255,255,0.6), rgba(255,255,255,0.05) 50%, rgba(201,201,201,0.5))", transform: "rotate(-2.5deg)", boxShadow: "0 40px 80px rgba(0,0,0,0.38)" }}>
        <div style={{ background: "#ffffff", borderRadius: "10px", padding: "28px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", color: "#5A5A5A" }}>{"SAMPLE · WEEKLY PROGRESS · WEEK 12"}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 12px", borderRadius: "6px", background: "#F7F5F2", color: "#161616", fontSize: "11.5px", fontWeight: "600" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "999px", background: "#161616" }}></span>
              {"On schedule"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span style={{ fontWeight: "600" }}>{"Percent complete"}</span>
              <span style={{ color: "#5A5A5A" }}>{"62%"}</span>
            </div>
            <div style={{ height: "10px", borderRadius: "6px", background: "#F7F5F2" }}>
              <div style={{ width: "62%", height: "10px", borderRadius: "6px", background: "#161616" }}></div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span style={{ fontWeight: "600" }}>{"Billed to date vs contract"}</span>
              <span style={{ color: "#5A5A5A" }}>{"[$ 1,240,000] of [$ 2,000,000]"}</span>
            </div>
            <div style={{ height: "10px", borderRadius: "6px", background: "#F7F5F2" }}>
              <div style={{ width: "58%", height: "10px", borderRadius: "6px", background: "#161616" }}></div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", color: "#5A5A5A", paddingBottom: "6px" }}>{"DECISIONS DUE"}</span>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "10px 0", borderTop: "1px solid #E5E5E5", fontSize: "13px" }}>
              <span>{"Exam room flooring selection"}</span>
              <span style={{ color: "#C96A1E", fontWeight: "600" }}>{"Due [Fri]"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "10px 0", borderTop: "1px solid #E5E5E5", fontSize: "13px" }}>
              <span>{"Reception millwork shop drawings"}</span>
              <span style={{ color: "#5A5A5A" }}>{"With architect"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "10px 0", borderTop: "1px solid #E5E5E5", fontSize: "13px" }}>
              <span>{"Change order #3, added data drops"}</span>
              <span style={{ color: "#5A5A5A" }}>{"Priced"}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", paddingTop: "2px" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", color: "#5A5A5A", marginRight: "6px" }}>{"NEXT 2 WEEKS"}</span>
            <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "8px", background: "#F7F5F2", fontSize: "11.5px" }}>{"Ceiling grid"}</span>
            <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "8px", background: "#F7F5F2", fontSize: "11.5px" }}>{"Paint"}</span>
            <span style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 10px", borderRadius: "8px", background: "#F7F5F2", color: "#A85514", fontSize: "11.5px" }}>{"Fire inspection"}</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
