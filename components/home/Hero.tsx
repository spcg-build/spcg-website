// HERO (Draft Revision v2): project-type selector. Default shows three staggered renders; picking a type swaps the copy and shows that space.
// Renders: illustrative visualizations made with the ChatGPT image model (no text in images). Logic in /public/js/hero-types.js.
export default function Hero() {
  return (
    <section className="r-hero r-ht" data-active="all" style={{ position: "relative", background: "#161616" }}>
      <div className="r-ht-grid">
        <div className="r-heroin r-ht-copy">
          <div id="htEyebrow" style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#FFFFFF" }}>
            {"Commercial GC · MD · DC · VA · NC · MA · FL"}
          </div>
          <h1 id="htH1" className="r-h1" style={{ margin: "26px 0 0 0", fontSize: "clamp(34px, 3.3vw, 50px)", fontWeight: "300", lineHeight: "1.06", letterSpacing: "-0.035em", color: "#FFFFFF" }}>
            {"Commercial buildouts and renovations, run on modern systems and delivered on time."}
          </h1>
          <div className="r-w100" style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "24px", paddingLeft: "24px", borderLeft: "2px solid #2E2E2E" }}>
            <p id="htSub" style={{ margin: "0", fontSize: "17px", fontWeight: "300", lineHeight: "1.6", color: "#C9C9C9", minHeight: "3.2em" }}>{"Healthcare, retail, office, restaurant and multifamily spaces, managed with live schedules, weekly owner reporting and AI-assisted project controls."}</p>
            <div style={{ display: "flex", gap: "12px" }}>
              <a href="/request-a-budget/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "54px", padding: "0 26px", borderRadius: "6px", background: "#FFFFFF", color: "#111111", fontWeight: "600", fontSize: "15px" }}>
                {"Request a budget "}
                <span aria-hidden="true" style={{ color: "#C96A1E" }}>{"→"}</span>
              </a>
            </div>
          </div>
          <ul className="r-proof" aria-label="At a glance">
            <li><b>{"25+ years"}</b><span>{"in commercial construction"}</span></li>
            <li><b>{"Bonded"}</b><span>{"privately held and insured"}</span></li>
            <li><b>{"Weekly"}</b><span>{"owner reporting on every job"}</span></li>
          </ul>
        </div>
        <div className="r-ht-stage" aria-live="polite">
            <img className="r-ht-img" data-type="surgery" data-slot="a" src="/images/hero-types/surgery.webp" alt="Illustrative visualization: operating room" loading="eager" />
            <img className="r-ht-img" data-type="clinic" src="/images/hero-types/clinic.webp" alt="Illustrative visualization: medical clinic with reception and exam rooms" loading="lazy" />
            <img className="r-ht-img" data-type="dental" src="/images/hero-types/dental.webp" alt="Illustrative visualization: dental office with treatment operatories" loading="lazy" />
            <img className="r-ht-img" data-type="office" data-slot="b" src="/images/hero-types/office.webp" alt="Illustrative visualization: corporate office floor" loading="eager" />
            <img className="r-ht-img" data-type="coworking" src="/images/hero-types/coworking.webp" alt="Illustrative visualization: coworking space" loading="lazy" />
            <img className="r-ht-img" data-type="restaurant" data-slot="c" src="/images/hero-types/restaurant.webp" alt="Illustrative visualization: restaurant dining room, bar and kitchen" loading="eager" />
            <img className="r-ht-img" data-type="retail" src="/images/hero-types/retail.webp" alt="Illustrative visualization: mobile phone retail store" loading="lazy" />
            <img className="r-ht-img" data-type="exterior" src="/images/hero-types/exterior.webp" alt="Illustrative visualization: renovated shopping center storefronts" loading="lazy" />
            <img className="r-ht-img" data-type="multifamily" src="/images/hero-types/multifamily.webp" alt="Illustrative visualization: apartment building lobby and corridor" loading="lazy" />
          <span className="r-ht-note">{"Illustrative visualizations"}</span>
        </div>
      </div>
      <div className="r-ht-rail" role="group" aria-label="Tailor this site">
        <span className="r-ht-raillabel">{"Building"}</span>
        <div className="r-ht-tabs">
          <button type="button" className="r-ht-tab r-ht-proj is-on" data-type="all" data-h1="Commercial buildouts and renovations, run on modern systems and delivered on time." data-sub="Healthcare, retail, office, restaurant and multifamily spaces, managed with live schedules, weekly owner reporting and AI-assisted project controls." aria-pressed="true">{"All work"}</button>
          <button type="button" className="r-ht-tab r-ht-proj" data-type="surgery" data-h1="Surgery centers built for precision." data-sub="Procedure rooms, support spaces and building systems coordinated through turnover." aria-pressed="false">{"Surgery center"}</button>
          <button type="button" className="r-ht-tab r-ht-proj" data-type="clinic" data-h1="Medical clinics built around care." data-sub="Efficient, durable spaces planned for patients, staff and daily operations." aria-pressed="false">{"Medical clinic"}</button>
          <button type="button" className="r-ht-tab r-ht-proj" data-type="dental" data-h1="Dental spaces, carefully coordinated." data-sub="Treatment rooms, utilities and finishes brought together with precision." aria-pressed="false">{"Dental"}</button>
          <button type="button" className="r-ht-tab r-ht-proj" data-type="office" data-h1="Workplaces ready for business." data-sub="Corporate buildouts and renovations coordinated around schedule, budget and occupancy." aria-pressed="false">{"Corporate office"}</button>
          <button type="button" className="r-ht-tab r-ht-proj" data-type="coworking" data-h1="Flexible spaces built for constant use." data-sub="Shared offices, meeting rooms and amenities delivered as one coordinated buildout." aria-pressed="false">{"Coworking"}</button>
          <button type="button" className="r-ht-tab r-ht-proj" data-type="restaurant" data-h1="Restaurants built from front to back." data-sub="Dining rooms and commercial kitchens coordinated as one complete project." aria-pressed="false">{"Restaurant"}</button>
          <button type="button" className="r-ht-tab r-ht-proj" data-type="retail" data-h1="Retail spaces ready to open." data-sub="Buildouts coordinated around landlord requirements, brand standards and opening dates." aria-pressed="false">{"Retail store"}</button>
          <button type="button" className="r-ht-tab r-ht-proj" data-type="exterior" data-h1="Exterior improvements that keep centers moving." data-sub="Storefront, facade and site upgrades phased around tenants and customers." aria-pressed="false">{"Shopping center exterior"}</button>
          <button type="button" className="r-ht-tab r-ht-proj" data-type="multifamily" data-h1="Multifamily common areas, refreshed with less disruption." data-sub="Lobbies, corridors, amenity spaces and floors phased around residents." aria-pressed="false">{"Multifamily common areas"}</button>
        </div>
        <span className="r-ht-raillabel">{"I’m a"}</span>
        <div className="r-ht-tabs">
          <button type="button" className="r-ht-tab r-pill" data-aud="dev" data-show="exterior" aria-pressed="false">{"Developer or owner"}</button>
          <button type="button" className="r-ht-tab r-pill" data-aud="tenant" data-show="office" aria-pressed="false">{"Tenant or broker"}</button>
          <button type="button" className="r-ht-tab r-pill" data-aud="pm" data-show="multifamily" aria-pressed="false">{"Property manager"}</button>
          <button type="button" className="r-ht-tab r-pill" data-aud="arch" data-show="clinic" aria-pressed="false">{"Architect"}</button>
          <button type="button" className="r-ht-tab r-pill" data-aud="sub" data-show="all" aria-pressed="false">{"Subcontractor"}</button>
          <button type="button" className="r-ht-tab r-pill" data-aud="job" data-show="all" aria-pressed="false">{"Job seeker"}</button>
        </div>
      </div>
    </section>
  );
}
