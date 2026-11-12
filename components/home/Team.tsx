// Leadership: three equal blocks
export default function Team() {
  return (
    <section className="r-pad r-lead" id="leadership" style={{ padding: "140px 120px 0 120px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: "linear-gradient(90deg, #B5541C, #D9773A)" }}></div>
            <h2 style={{ margin: "0", fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase" }}>{"Our team"}</h2>
          </div>
          <p style={{ margin: "0", fontSize: "52px", fontWeight: "300", letterSpacing: "-0.03em", lineHeight: "1.05" }}>{"The people who run your project."}</p>
        </div>
        <a href="/#leadership" style={{ fontSize: "14px", fontWeight: "600", display: "inline-flex", gap: "8px", alignItems: "center" }}>
          {"Meet the team "}
          <span aria-hidden="true" style={{ color: "#B5541C" }}>{"→"}</span>
        </a>
      </div>
      <div className="r-leadgrid" style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "2fr 3fr 2fr", gap: "16px", alignItems: "stretch" }}>
        <div data-block="" style={{ background: "#FFFFFF", border: "1px solid #E4E5E6", borderRadius: "10px", padding: "26px 24px 28px 24px", display: "flex", flexDirection: "column", gap: "22px", boxSizing: "border-box", minWidth: "0" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#0A0A0B" }}>
              {"Leadership"}
            </span>
            <span style={{ fontSize: "13px", color: "#45484C" }}>{"Construction, finance and business strategy"}</span>
          </div>
          <div className="r-people" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div className="cx-steel" data-photo="AL" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px rgba(0,0,0,0.18)" }}>
                <img src="/images/team/anthony-lauro-v7.jpg" alt="Anthony Lauro" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%" }} />
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "16.5px", fontWeight: "600", color: "#0A0A0B" }}>{"Anthony Lauro"}</span>
                <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#45484C" }}>{"VP, Construction"}</span>
              </span>
              <details className="r-bio">
                <summary>{"Read bio"}</summary>
                <p data-name="Anthony Lauro">{"Anthony has more than 25 years in commercial construction, leading medical and clinical facilities, retail, corporate office and multifamily projects, from small tenant improvements to large, complex renovations. He has built in Florida, Nevada, Virginia, Maryland and the D.C. metro area, each with its own permitting, inspection and compliance demands. Owners know him for clear communication, hands-on leadership and a disciplined focus on finishing on schedule and on budget."}</p>
              </details>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div className="cx-steel" data-photo="JD" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px rgba(0,0,0,0.18)" }}>
                <img src="/images/team/justin-diaz-v4.jpg" alt="Justin Diaz" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%" }} />
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "16.5px", fontWeight: "600", color: "#0A0A0B" }}>{"Justin Diaz"}</span>
                <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#45484C" }}>{"VP, Finance & Business Strategy"}</span>
              </span>
              <details className="r-bio">
                <summary>{"Read bio"}</summary>
                <p data-name="Justin Diaz">{"Justin is a U.S. Navy and Army combat veteran with more than 15 years in finance across commercial real estate, medical office and hospitality. He brings analytical rigor and steady leadership to SPCG’s finances, systems and growth, turning project data into clear decisions for our clients and our team."}</p>
              </details>
            </div>
          </div>
        </div>
        <div data-block="" style={{ background: "#FFFFFF", border: "1px solid #E4E5E6", borderRadius: "10px", padding: "26px 24px 28px 24px", display: "flex", flexDirection: "column", gap: "22px", boxSizing: "border-box", minWidth: "0" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#0A0A0B" }}>
              {"Preconstruction & operations"}
            </span>
            <span style={{ fontSize: "13px", color: "#45484C" }}>{"Estimating, field operations and project management"}</span>
          </div>
          <div className="r-people" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div className="cx-steel" data-photo="TG" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px rgba(0,0,0,0.18)" }}>
                <img src="/images/team/tom-gilchrist-v5.jpg" alt="Tom Gilchrist" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%" }} />
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "16.5px", fontWeight: "600", color: "#0A0A0B" }}>{"Tom Gilchrist"}</span>
                <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#45484C" }}>{"Preconstruction · Senior Estimator"}</span>
              </span>
              <details className="r-bio">
                <summary>{"Read bio"}</summary>
                <p data-name="Tom Gilchrist">{"Tom has more than a decade in commercial construction. As Senior Estimator he pairs technical depth with practical clarity, building budgets owners can rely on and leading with open communication, personal accountability and a real investment in every partner’s success."}</p>
              </details>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div className="cx-steel" data-photo="BS" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px rgba(0,0,0,0.18)" }}>
                <img src="/images/team/bobby-smith-v3.jpg" alt="Bobby Smith" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 22%" }} />
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "16.5px", fontWeight: "600", color: "#0A0A0B" }}>{"Bobby Smith"}</span>
                <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#45484C" }}>{"Field Operations & Safety · Senior Superintendent"}</span>
              </span>
              <details className="r-bio">
                <summary>{"Read bio"}</summary>
                <p data-name="Bobby Smith">{"Bobby brings decades of field experience to every job site. He runs daily operations, coordinates subcontractors and keeps projects safe, on schedule and on budget. A proud U.S. Army veteran, he leads with discipline and a problem-solver’s focus."}</p>
              </details>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div className="cx-steel" data-photo="KT" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px rgba(0,0,0,0.18)" }}>
                <img src="/images/team/kyle-thompson-orig.jpg" alt="Kyle Thompson" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 22%" }} />
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "16.5px", fontWeight: "600", color: "#0A0A0B" }}>{"Kyle Thompson"}</span>
                <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#45484C" }}>{"Project Management"}</span>
              </span>
              <details className="r-bio">
                <summary>{"Read bio"}</summary>
                <p data-name="Kyle Thompson">{"Kyle has more than a decade in commercial construction across Maryland, Virginia, D.C. and West Virginia, on projects from $100K to $20M: base building, education, corporate interiors, restaurants and retail. On ground-up work above $10M, owners count on his straightforward reporting and steady hand in the field. On tenant fit-outs he hits fixed lease-commencement dates while keeping landlords and property managers aligned in occupied buildings, from preconstruction through closeout."}</p>
              </details>
            </div>
          </div>
        </div>
        <div data-block="" style={{ background: "#FFFFFF", border: "1px solid #E4E5E6", borderRadius: "10px", padding: "26px 24px 28px 24px", display: "flex", flexDirection: "column", gap: "22px", boxSizing: "border-box", minWidth: "0" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#0A0A0B" }}>
              {"Business development"}
            </span>
            <span style={{ fontSize: "13px", color: "#45484C" }}>{"Your first call for a new project"}</span>
          </div>
          <div className="r-people" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div className="cx-steel" data-photo="SR" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px rgba(0,0,0,0.18)" }}>
                <span style={{ fontSize: "44px", fontWeight: "300", background: "linear-gradient(180deg, #FFFFFF 15%, #C9CBCE 60%, #8E9195 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"SR"}</span>
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "16.5px", fontWeight: "600", color: "#0A0A0B" }}>{"Sarah Rineer"}</span>
                <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#45484C" }}>{"Business Development Executive"}</span>
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div className="cx-steel" data-photo="KP" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px rgba(0,0,0,0.18)" }}>
                <span style={{ fontSize: "44px", fontWeight: "300", background: "linear-gradient(180deg, #FFFFFF 15%, #C9CBCE 60%, #8E9195 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"KP"}</span>
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "16.5px", fontWeight: "600", color: "#0A0A0B" }}>{"Karen Powell"}</span>
                <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#45484C" }}>{"Project Development Executive"}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
