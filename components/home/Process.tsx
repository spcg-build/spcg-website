// Process: five steps, each aligned with one layer of the drawing-stack illustration on the left.
export default function Process() {
  return (
    <section className="r-p5" id="approach">
      <div className="r-p5-head">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: "currentColor" }}></div>
            <h2 style={{ margin: "0", fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase" }}>{"How we run a job"}</h2>
          </div>
          <p className="r-p5-h">{"The same five steps on every job, with a deliverable at each one."}</p>
        </div>
        <p className="r-p5-lede">{"From the first site walk to the closeout binder, you always know what stage the job is in and what you will receive next."}</p>
      </div>
      <div className="r-p5-grid">
        <img className="r-p5-art" src="/images/process-layers-v2.jpg" alt="Illustration: five layered drawing sheets, from site survey and takeoff to permit set, framing and MEP, and the finished floor plan" loading="lazy" />
        <ol className="r-p5-list">
          <li className="r-p5-row">
            <span className="r-p5-n">{"01"}</span>
            <span className="r-p5-t">{"Preconstruction"}</span>
            <span className="r-p5-d">{"Site walk, drawing review and a budget built with you and your architect."}<b>{"You get: Budget and assumptions"}</b></span>
          </li>
          <li className="r-p5-row">
            <span className="r-p5-n">{"02"}</span>
            <span className="r-p5-t">{"Pricing and buyout"}</span>
            <span className="r-p5-d">{"Every trade bid by qualified subcontractors and leveled line by line."}<b>{"You get: Bid comparison"}</b></span>
          </li>
          <li className="r-p5-row">
            <span className="r-p5-n">{"03"}</span>
            <span className="r-p5-t">{"Permits and orders"}</span>
            <span className="r-p5-d">{"Permit filing, long-lead procurement and a schedule tied to real dates."}<b>{"You get: Baseline schedule"}</b></span>
          </li>
          <li className="r-p5-row">
            <span className="r-p5-n">{"04"}</span>
            <span className="r-p5-t">{"Build"}</span>
            <span className="r-p5-d">{"A superintendent on site every working day and weekly progress meetings."}<b>{"You get: Weekly packet and pay apps"}</b></span>
          </li>
          <li className="r-p5-row">
            <span className="r-p5-n">{"05"}</span>
            <span className="r-p5-t">{"Turnover"}</span>
            <span className="r-p5-d">{"Inspections, punch list and a closeout package ready on move-in day."}<b>{"You get: Closeout package"}</b></span>
          </li>
        </ol>
      </div>
    </section>
  );
}
