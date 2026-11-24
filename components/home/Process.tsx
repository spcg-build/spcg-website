// Process: five steps aligned to the five-layer drawing stack. Build is the live, highlighted step.
export default function Process() {
  return (
    <section className="r-p5" id="approach">
      <div className="r-p5-head">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: "currentColor" }}></div>
            <h2 style={{ margin: "0", fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase" }}>{"Our process"}</h2>
          </div>
          <p className="r-p5-h">{"How we keep your job on track."}</p>
        </div>
        <p className="r-p5-lede">{"Every job runs the same way, with a deliverable at each step, so you always know where things stand and what comes next."}</p>
      </div>
      <div className="r-p5-grid">
        <div className="r-p5-artwrap">
          <img className="r-p5-art" src="/images/process-layers-v3.jpg" alt="Illustration: five layered sheets from site survey to finished floor plan, with the build stage shown as framing and ductwork rising off the fourth sheet" loading="lazy" />
        </div>
        <ol className="r-p5-list">
          <li className="r-p5-row">
            <span className="r-p5-n">{"01"}</span>
            <span className="r-p5-t">{"Preconstruction"}</span>
            <span className="r-p5-d">{"Site walk, drawing review and a budget built with you and your architect."}<i>{"AI-assisted takeoffs for faster, more complete first budgets."}</i><b>{"You get: Budget and assumptions"}</b></span>
          </li>
          <li className="r-p5-row">
            <span className="r-p5-n">{"02"}</span>
            <span className="r-p5-t">{"Pricing and buyout"}</span>
            <span className="r-p5-d">{"Every trade bid by qualified subcontractors and leveled line by line."}<i>{"Scope gaps flagged before you sign, not after."}</i><b>{"You get: Bid comparison"}</b></span>
          </li>
          <li className="r-p5-row">
            <span className="r-p5-n">{"03"}</span>
            <span className="r-p5-t">{"Permits and orders"}</span>
            <span className="r-p5-d">{"Permit filing, long-lead procurement and a schedule tied to real dates."}<i>{"Long-lead items tracked from day one, so one late delivery doesn’t move your opening."}</i><b>{"You get: Baseline schedule"}</b></span>
          </li>
          <li className="r-p5-row is-build">
            <span className="r-p5-n">{"04"}</span>
            <span className="r-p5-t">{"Build"}<em className="r-p5-live">{"In progress"}</em></span>
            <span className="r-p5-d">{"A superintendent on site every working day and a Friday update every week."}<i>{"Schedule, budget and decisions due in one report, every Friday."}</i><b>{"You get: Weekly packet and pay apps"}</b></span><span className="r-p5-prog" aria-hidden="true"><s></s></span>
          </li>
          <li className="r-p5-row">
            <span className="r-p5-n">{"05"}</span>
            <span className="r-p5-t">{"Turnover"}</span>
            <span className="r-p5-d">{"Inspections, punch list and a closeout package ready on move-in day."}<i>{"Warranties, O&Ms and as-builts handed over at move-in, not months later."}</i><b>{"You get: Closeout package"}</b></span>
          </li>
        </ol>
      </div>
    </section>
  );
}
