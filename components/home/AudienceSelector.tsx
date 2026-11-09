// Overlap: stats card breaks the hero edge; audience chips sit opposite
export default function AudienceSelector() {
  return (
    <section className="r-selector" aria-label="Tailor this site">
      <div className="r-selcard">
        <div className="r-selrow">
          <span className="r-sellab">{"Project"}</span>
          <div className="r-selchips" role="group" aria-label="Project">
            <button type="button" className="r-pill" data-aud="health" aria-pressed="false">{"Healthcare"}</button>
            <button type="button" className="r-pill" data-aud="office" aria-pressed="false">{"Corporate office"}</button>
            <button type="button" className="r-pill" data-aud="retail" aria-pressed="false">{"Retail & restaurant"}</button>
            <button type="button" className="r-pill" data-aud="hosp" aria-pressed="false">{"Hospitality"}</button>
          </div>
        </div>
        <div className="r-selrow">
          <span className="r-sellab">{"I’m a"}</span>
          <div className="r-selchips" role="group" aria-label="I’m a">
            <button type="button" className="r-pill" data-aud="dev" aria-pressed="false">{"Developer or owner"}</button>
            <button type="button" className="r-pill" data-aud="tenant" aria-pressed="false">{"Tenant or broker"}</button>
            <button type="button" className="r-pill" data-aud="pm" aria-pressed="false">{"Property manager"}</button>
            <button type="button" className="r-pill" data-aud="arch" aria-pressed="false">{"Architect"}</button>
            <button type="button" className="r-pill" data-aud="sub" aria-pressed="false">{"Subcontractor"}</button>
            <button type="button" className="r-pill" data-aud="job" aria-pressed="false">{"Job seeker"}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
