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
              <a id="htCta" className="r-cta-primary" href="/request-a-budget/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "54px", padding: "0 26px", borderRadius: "6px", background: "#FFFFFF", color: "#111111", fontWeight: "600", fontSize: "15px" }}>
                <span id="htCtaText">{"Request a budget"}</span>{" "}
                <span aria-hidden="true" style={{ color: "#C96A1E" }}>{"→"}</span>
              </a>
            </div>
          </div>
          <ul className="r-proof" aria-label="At a glance">
            <li><b>{"25+ years"}</b><span>{"of leadership experience"}</span></li>
            <li><b>{"Boston to Florida"}</b><span>{"active East Coast markets"}</span></li>
            <li><b>{"Weekly"}</b><span>{"owner reporting on every job"}</span></li>
          </ul>
        </div>
        <div className="r-ht-stage">
            <img className="r-ht-img" data-type="surgery" data-slot="a" src="/images/hero-types/surgery.webp" alt="Illustrative visualization: operating room" loading="eager" />
            <img className="r-ht-img" data-type="clinic" src="/images/hero-types/clinic.webp" alt="Illustrative visualization: medical clinic with reception and exam rooms" loading="lazy" />
            <img className="r-ht-img" data-type="dental" src="/images/hero-types/dental.webp" alt="Illustrative visualization: dental office with treatment operatories" loading="lazy" />
            <img className="r-ht-img" data-type="office" data-slot="b" src="/images/hero-types/office.webp" alt="Illustrative visualization: corporate office floor" loading="eager" />
            <img className="r-ht-img" data-type="coworking" src="/images/hero-types/coworking.webp" alt="Illustrative visualization: coworking space" loading="lazy" />
            <img className="r-ht-img" data-type="restaurant" data-slot="c" src="/images/hero-types/restaurant.webp" alt="Illustrative visualization: restaurant dining room, bar and kitchen" loading="eager" />
            <img className="r-ht-img" data-type="retail" src="/images/hero-types/retail.webp" alt="Illustrative visualization: mobile phone retail store" loading="lazy" />
            <img className="r-ht-img" data-type="exterior" src="/images/hero-types/exterior.webp" alt="Illustrative visualization: renovated shopping center storefronts" loading="lazy" />
            <img className="r-ht-img" data-type="multifamily" src="/images/hero-types/multifamily.webp" alt="Illustrative visualization: apartment building lobby and corridor" loading="lazy" />
        </div>
      </div>
      <div className="r-ht-rail" data-mode="project">
        <div className="r-ht-cust">
        <span className="r-ht-custlab"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C96A1E" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"></path><circle cx="16" cy="6" r="2"></circle><circle cx="10" cy="12" r="2"></circle><circle cx="18" cy="18" r="2"></circle></svg>{"Customize this page"}</span>
        <div className="r-ht-modes" role="tablist" aria-label="Customize this page">
          <button type="button" className="r-ht-mode is-on" data-mode="project" role="tab" aria-selected="true">{"By project"}</button>
          <button type="button" className="r-ht-mode" data-mode="role" role="tab" aria-selected="false">{"By role"}</button>
        </div>
        </div>
        <div className="r-ht-tabs r-ht-tabs-p" role="radiogroup" aria-label="Project type">
            <button type="button" className="r-ht-tab r-ht-proj" data-type="all" data-cta="Request a budget" role="radio" aria-checked="true" tabIndex={0} data-h1="Commercial buildouts and renovations, run on modern systems and delivered on time." data-sub="Healthcare, retail, office, restaurant and multifamily spaces, managed with live schedules, weekly owner reporting and AI-assisted project controls.">{"All work"}</button>
            <button type="button" className="r-ht-tab r-ht-proj" data-type="surgery" data-cta="Request a surgery center budget" role="radio" aria-checked="false" tabIndex={-1} data-h1="Surgery centers built for precision." data-sub="Procedure rooms, support spaces and building systems coordinated through turnover.">{"Surgery centers"}</button>
            <button type="button" className="r-ht-tab r-ht-proj" data-type="clinic" data-cta="Request a clinic budget" role="radio" aria-checked="false" tabIndex={-1} data-h1="Medical clinics built around care." data-sub="Efficient, durable spaces planned for patients, staff and daily operations.">{"Medical"}</button>
            <button type="button" className="r-ht-tab r-ht-proj" data-type="dental" data-cta="Request a dental budget" role="radio" aria-checked="false" tabIndex={-1} data-h1="Dental spaces, carefully coordinated." data-sub="Treatment rooms, utilities and finishes brought together with precision.">{"Dental"}</button>
            <button type="button" className="r-ht-tab r-ht-proj" data-type="office" data-cta="Request an office budget" role="radio" aria-checked="false" tabIndex={-1} data-h1="Workplaces ready for business." data-sub="Corporate buildouts and renovations coordinated around schedule, budget and occupancy.">{"Office"}</button>
            <button type="button" className="r-ht-tab r-ht-proj" data-type="coworking" data-cta="Request a coworking budget" role="radio" aria-checked="false" tabIndex={-1} data-h1="Flexible spaces built for constant use." data-sub="Shared offices, meeting rooms and amenities delivered as one coordinated buildout.">{"Coworking"}</button>
            <button type="button" className="r-ht-tab r-ht-proj" data-type="restaurant" data-cta="Request a restaurant budget" role="radio" aria-checked="false" tabIndex={-1} data-h1="Restaurants built from front to back." data-sub="Dining rooms and commercial kitchens coordinated as one complete project.">{"Restaurants"}</button>
            <button type="button" className="r-ht-tab r-ht-proj" data-type="retail" data-cta="Request a retail budget" role="radio" aria-checked="false" tabIndex={-1} data-h1="Retail spaces ready to open." data-sub="Buildouts coordinated around landlord requirements, brand standards and opening dates.">{"Retail"}</button>
            <button type="button" className="r-ht-tab r-ht-proj" data-type="exterior" data-cta="Request an exterior budget" role="radio" aria-checked="false" tabIndex={-1} data-h1="Exterior improvements that keep centers moving." data-sub="Storefront, facade and site upgrades phased around tenants and customers.">{"Shopping centers"}</button>
            <button type="button" className="r-ht-tab r-ht-proj" data-type="multifamily" data-cta="Request a multifamily budget" role="radio" aria-checked="false" tabIndex={-1} data-h1="Multifamily common areas, refreshed with less disruption." data-sub="Lobbies, corridors, amenity spaces and floors phased around residents.">{"Multifamily"}</button>
        </div>
        <div className="r-ht-tabs r-ht-tabs-r" role="group" aria-label="Your role" hidden>
            <button type="button" className="r-ht-tab r-pill" data-aud="dev" data-show="exterior" aria-pressed="false">{"Developer or owner"}</button>
            <button type="button" className="r-ht-tab r-pill" data-aud="tenant" data-show="office" aria-pressed="false">{"Tenant or broker"}</button>
            <button type="button" className="r-ht-tab r-pill" data-aud="pm" data-show="multifamily" aria-pressed="false">{"Property manager"}</button>
            <button type="button" className="r-ht-tab r-pill" data-aud="arch" data-show="clinic" aria-pressed="false">{"Architect"}</button>
        </div>
        <p className="r-sr" role="status" id="htStatus"></p>
      </div>
    </section>
  );
}
