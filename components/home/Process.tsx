// Process: one space shown at five stages (illustration), with the five steps aligned underneath. Build is the live step.
export default function Process() {
  return (
    <section className="r-p6" id="approach">
      <div className="r-p6-head">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: "currentColor" }}></div>
            <h2 style={{ margin: "0", fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase" }}>{"How we run a job"}</h2>
          </div>
          <p className="r-p6-h">{"The same five steps on every job, with a deliverable at each one."}</p>
        </div>
        <p className="r-p6-lede">{"From the first site walk to the closeout binder, you always know what stage the job is in and what you will receive next."}</p>
      </div>
      <div className="r-p6-art">
        <img src="/images/process-stages-v1.webp" alt="Illustration: one tenant space shown at five stages, from empty shell and layout to material deliveries, framing and ductwork, and the finished clinic" loading="lazy" />
        <span className="r-p6-glow" aria-hidden="true"></span>
      </div>
      <ol className="r-p6-list">
          <li className="r-p6-step">
            <span className="r-p6-bar" aria-hidden="true"><i></i></span>
            <span className="r-p6-n">{"01"}</span>
            <span className="r-p6-t">{"Preconstruction"}</span>
            <span className="r-p6-d">{"Site walk, drawing review and a budget built with you and your architect."}</span>
            <b className="r-p6-g">{"You get: Budget and assumptions"}</b>
          </li>
          <li className="r-p6-step">
            <span className="r-p6-bar" aria-hidden="true"><i></i></span>
            <span className="r-p6-n">{"02"}</span>
            <span className="r-p6-t">{"Pricing and buyout"}</span>
            <span className="r-p6-d">{"Every trade bid by qualified subcontractors and leveled line by line."}</span>
            <b className="r-p6-g">{"You get: Bid comparison"}</b>
          </li>
          <li className="r-p6-step">
            <span className="r-p6-bar" aria-hidden="true"><i></i></span>
            <span className="r-p6-n">{"03"}</span>
            <span className="r-p6-t">{"Permits and orders"}</span>
            <span className="r-p6-d">{"Permit filing, long-lead procurement and a schedule tied to real dates."}</span>
            <b className="r-p6-g">{"You get: Baseline schedule"}</b>
          </li>
          <li className="r-p6-step is-build">
            <span className="r-p6-bar" aria-hidden="true"><i></i></span>
            <span className="r-p6-n">{"04"}<em className="r-p6-live">{"In progress"}</em></span>
            <span className="r-p6-t">{"Build"}</span>
            <span className="r-p6-d">{"A superintendent on site every working day and weekly progress meetings."}</span>
            <b className="r-p6-g">{"You get: Weekly packet and pay apps"}</b>
          </li>
          <li className="r-p6-step">
            <span className="r-p6-bar" aria-hidden="true"><i></i></span>
            <span className="r-p6-n">{"05"}</span>
            <span className="r-p6-t">{"Turnover"}</span>
            <span className="r-p6-d">{"Inspections, punch list and a closeout package ready on move-in day."}</span>
            <b className="r-p6-g">{"You get: Closeout package"}</b>
          </li>
      </ol>
    </section>
  );
}
