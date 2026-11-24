// Process: offset vertical timeline
export default function Process() {
  return (
    <section className="r-process" id="approach" style={{ position: "relative", padding: "220px 120px 0 120px", display: "grid", gridTemplateColumns: "440px minmax(0, 1fr)", gap: "80px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: "currentColor" }}></div>
          <h2 style={{ margin: "0", fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase" }}>{"How we run a job"}</h2>
        </div>
        <p style={{ margin: "0", fontSize: "52px", fontWeight: "300", letterSpacing: "-0.03em", lineHeight: "1.05" }}>{"The same five steps on every job, with a deliverable at each one."}</p>
        <img className="r-proc-art" src="/images/process-layers-v2.jpg" alt="Illustration: five layered drawing sheets from site survey and takeoff to permit set, framing and MEP, and the finished floor plan" style={{ marginTop: "32px", width: "100%", maxWidth: "400px", height: "auto", display: "block" }} />
      </div>
      <div style={{ position: "relative", paddingLeft: "56px" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "21px", top: "22px", bottom: "22px", width: "2px", borderRadius: "2px", background: "#161616" }}></div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div data-step="" style={{ position: "relative", display: "grid", gridTemplateColumns: "220px minmax(0, 1fr)", gap: "24px" }}>
            <span style={{ position: "absolute", left: "-56px", top: "0", width: "44px", height: "44px", borderRadius: "999px", background: "#161616", color: "#ffffff", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", border: "4px solid #ffffff", boxSizing: "border-box" }}>{"01"}</span>
            <span style={{ fontSize: "24px", fontWeight: "400", paddingTop: "6px" }}>{"Preconstruction"}</span>
            <span style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "8px" }}>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#5A5A5A" }}>{"Site walk, drawing review and a budget built with you and your architect."}</span>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "#C96A1E" }}>{"You get: budget and assumptions"}</span>
            </span>
          </div>
          <div data-step="" style={{ position: "relative", display: "grid", gridTemplateColumns: "220px minmax(0, 1fr)", gap: "24px" }}>
            <span style={{ position: "absolute", left: "-56px", top: "0", width: "44px", height: "44px", borderRadius: "999px", background: "#161616", color: "#ffffff", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", border: "4px solid #ffffff", boxSizing: "border-box" }}>{"02"}</span>
            <span style={{ fontSize: "24px", fontWeight: "400", paddingTop: "6px" }}>{"Pricing and buyout"}</span>
            <span style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "8px" }}>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#5A5A5A" }}>{"Every trade bid by qualified subcontractors and leveled line by line."}</span>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "#C96A1E" }}>{"You get: bid comparison"}</span>
            </span>
          </div>
          <div data-step="" style={{ position: "relative", display: "grid", gridTemplateColumns: "220px minmax(0, 1fr)", gap: "24px" }}>
            <span style={{ position: "absolute", left: "-56px", top: "0", width: "44px", height: "44px", borderRadius: "999px", background: "#161616", color: "#ffffff", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", border: "4px solid #ffffff", boxSizing: "border-box" }}>{"03"}</span>
            <span style={{ fontSize: "24px", fontWeight: "400", paddingTop: "6px" }}>{"Permits and orders"}</span>
            <span style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "8px" }}>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#5A5A5A" }}>{"Permit filing, long-lead procurement and a schedule tied to real dates."}</span>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "#C96A1E" }}>{"You get: baseline schedule"}</span>
            </span>
          </div>
          <div data-step="" style={{ position: "relative", display: "grid", gridTemplateColumns: "220px minmax(0, 1fr)", gap: "24px", padding: "26px 28px", margin: "-26px -28px", borderRadius: "10px", background: "#F7F5F2" }}>
            <span style={{ position: "absolute", left: "-28px", top: "26px", width: "44px", height: "44px", borderRadius: "999px", background: "#161616", color: "#ffffff", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", border: "4px solid #ffffff", boxSizing: "border-box", boxShadow: "0 0 0 6px rgba(22,22,22,0.15)" }}>{"04"}</span>
            <span style={{ fontSize: "24px", fontWeight: "400", paddingTop: "6px" }}>{"Build"}</span>
            <span style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "8px" }}>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#5A5A5A" }}>{"A superintendent on site every working day and weekly progress meetings."}</span>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "#C96A1E" }}>{"You get: weekly packet and pay apps"}</span>
            </span>
          </div>
          <div data-step="" style={{ position: "relative", display: "grid", gridTemplateColumns: "220px minmax(0, 1fr)", gap: "24px" }}>
            <span style={{ position: "absolute", left: "-56px", top: "0", width: "44px", height: "44px", borderRadius: "999px", background: "#C96A1E", color: "#ffffff", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", border: "4px solid #ffffff", boxSizing: "border-box" }}>{"05"}</span>
            <span style={{ fontSize: "24px", fontWeight: "400", paddingTop: "6px" }}>{"Turnover"}</span>
            <span style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "8px" }}>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#5A5A5A" }}>{"Inspections, punch list and a closeout package ready on move-in day."}</span>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "#C96A1E" }}>{"You get: closeout package"}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
