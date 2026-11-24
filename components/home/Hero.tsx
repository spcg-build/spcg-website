// HERO (Draft Revision v2): sticky scroll story. Left column pins; one illustrated room changes through 8 project types.
export default function Hero() {
  return (
    <section className="r-hero r-story" style={{ position: "relative", background: "#161616" }}>
      <div className="r-story-pin">
        <div className="r-heroin r-story-l">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#FFFFFF" }}>
            {"Commercial GC · MD · DC · VA · NC · MA · FL"}
          </div>
          <h1 className="r-h1" style={{ margin: "26px 0 0 0", fontSize: "clamp(34px, 3.3vw, 50px)", fontWeight: "300", lineHeight: "1.06", letterSpacing: "-0.035em", color: "#FFFFFF" }}>
            {"Healthcare, retail, office, coworking, restaurant, multifamily and shopping center spaces, built right and delivered on time."}
          </h1>
          <div className="r-w100" style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "24px", paddingLeft: "24px", borderLeft: "2px solid #C96A1E" }}>
            <p style={{ margin: "0", fontSize: "17px", fontWeight: "300", lineHeight: "1.6", color: "#C9C9C9" }}>{"Medical clinics, surgery centers, retail, corporate office, coworking, restaurants, multifamily refresh and exterior shopping center renovation — interior buildouts and renovations."}</p>
            <div style={{ display: "flex", gap: "12px" }}>
              <a href="/request-a-budget/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "54px", padding: "0 26px", borderRadius: "6px", background: "#FFFFFF", color: "#111111", fontWeight: "600", fontSize: "15px" }}>
                {"Request a budget "}
                <span aria-hidden="true" style={{ color: "#C96A1E" }}>{"→"}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="r-story-r">
          <div className="r-stage-frame">
          <figure className="r-stage" data-stage="0" style={{ margin: "0" }}>
            <img src="/images/hero-scenes/scene-01.svg" alt="Illustration: medical clinic interior" loading="eager" />
            <figcaption><span>{"01"}</span>{"Medical Clinic"}</figcaption>
          </figure>
          <figure className="r-stage" data-stage="1" style={{ margin: "0" }}>
            <img src="/images/hero-scenes/scene-02.svg" alt="Illustration: surgery center interior" loading="lazy" />
            <figcaption><span>{"02"}</span>{"Surgery Center"}</figcaption>
          </figure>
          <figure className="r-stage" data-stage="2" style={{ margin: "0" }}>
            <img src="/images/hero-scenes/scene-03.svg" alt="Illustration: retail interior interior" loading="lazy" />
            <figcaption><span>{"03"}</span>{"Retail Interior"}</figcaption>
          </figure>
          <figure className="r-stage" data-stage="3" style={{ margin: "0" }}>
            <img src="/images/hero-scenes/scene-04.svg" alt="Illustration: corporate office interior" loading="lazy" />
            <figcaption><span>{"04"}</span>{"Corporate Office"}</figcaption>
          </figure>
          <figure className="r-stage" data-stage="4" style={{ margin: "0" }}>
            <img src="/images/hero-scenes/scene-05.svg" alt="Illustration: coworking interior" loading="lazy" />
            <figcaption><span>{"05"}</span>{"Coworking"}</figcaption>
          </figure>
          <figure className="r-stage" data-stage="5" style={{ margin: "0" }}>
            <img src="/images/hero-scenes/scene-06.svg" alt="Illustration: restaurant interior" loading="lazy" />
            <figcaption><span>{"06"}</span>{"Restaurant"}</figcaption>
          </figure>
          <figure className="r-stage" data-stage="6" style={{ margin: "0" }}>
            <img src="/images/hero-scenes/scene-07.svg" alt="Illustration: multifamily refresh interior" loading="lazy" />
            <figcaption><span>{"07"}</span>{"Multifamily Refresh"}</figcaption>
          </figure>
          <figure className="r-stage" data-stage="7" style={{ margin: "0" }}>
            <img src="/images/hero-scenes/scene-08.svg" alt="Illustration: renovated shopping center exterior at golden hour" loading="lazy" />
            <figcaption><span>{"08"}</span>{"Shopping Center Exterior"}</figcaption>
          </figure>
          </div>
          <div className="r-story-meta" aria-hidden="true">
            <span className="r-story-now">{"01 · Medical Clinic"}</span>
            <span className="r-story-count">{"01 / 08"}</span>
          </div>
          <div className="r-story-bar" aria-hidden="true"><span></span></div>
        </div>
      </div>
    </section>
  );
}
