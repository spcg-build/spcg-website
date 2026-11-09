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
        <div data-block="" className="cx-band" style={{ borderRadius: "28px", padding: "26px 24px 28px 24px", display: "flex", flexDirection: "column", gap: "22px", boxSizing: "border-box", minWidth: "0" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#D9DADB" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "999px", background: "#D9773A" }}></span>
              {"Leadership"}
            </span>
            <span style={{ fontSize: "13px", color: "#A9ABAE" }}>{"Construction, finance and business strategy"}</span>
          </div>
          <div className="r-people" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div className="cx-steel" data-photo="AL" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "18px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.12)" }}>
                <span style={{ fontSize: "44px", fontWeight: "300", background: "linear-gradient(180deg, #FFFFFF 15%, #C9CBCE 60%, #8E9195 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"AL"}</span>
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "16.5px", fontWeight: "600", color: "#ffffff" }}>{"Anthony Lauro"}</span>
                <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#A9ABAE" }}>{"VP, Construction"}</span>
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div className="cx-steel" data-photo="JD" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "18px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.12)" }}>
                <span style={{ fontSize: "44px", fontWeight: "300", background: "linear-gradient(180deg, #FFFFFF 15%, #C9CBCE 60%, #8E9195 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"JD"}</span>
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "16.5px", fontWeight: "600", color: "#ffffff" }}>{"Justin Diaz"}</span>
                <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#A9ABAE" }}>{"VP, Finance & Business Strategy"}</span>
              </span>
            </div>
          </div>
        </div>
        <div data-block="" style={{ background: "linear-gradient(180deg, #F6F6F4 0%, #FFFFFF 100%)", border: "1px solid #E4E5E6", borderRadius: "28px", padding: "26px 24px 28px 24px", display: "flex", flexDirection: "column", gap: "22px", boxSizing: "border-box", minWidth: "0" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#0A0A0B" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "999px", background: "#D9773A" }}></span>
              {"Operations & preconstruction"}
            </span>
            <span style={{ fontSize: "13px", color: "#55585C" }}>{"Estimating, field operations and project management"}</span>
          </div>
          <div className="r-people" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div className="cx-steel" data-photo="TG" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "18px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px rgba(0,0,0,0.18)" }}>
                <span style={{ fontSize: "44px", fontWeight: "300", background: "linear-gradient(180deg, #FFFFFF 15%, #C9CBCE 60%, #8E9195 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"TG"}</span>
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "16.5px", fontWeight: "600", color: "#0A0A0B" }}>{"Tom Gilchrist"}</span>
                <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#55585C" }}>{"Preconstruction · Senior Estimator"}</span>
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div className="cx-steel" data-photo="BS" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "18px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px rgba(0,0,0,0.18)" }}>
                <span style={{ fontSize: "44px", fontWeight: "300", background: "linear-gradient(180deg, #FFFFFF 15%, #C9CBCE 60%, #8E9195 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"BS"}</span>
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "16.5px", fontWeight: "600", color: "#0A0A0B" }}>{"Bobby Smith"}</span>
                <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#55585C" }}>{"Field Operations & Safety · Senior Superintendent"}</span>
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div className="cx-steel" data-photo="KT" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "18px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px rgba(0,0,0,0.18)" }}>
                <span style={{ fontSize: "44px", fontWeight: "300", background: "linear-gradient(180deg, #FFFFFF 15%, #C9CBCE 60%, #8E9195 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"KT"}</span>
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "16.5px", fontWeight: "600", color: "#0A0A0B" }}>{"Kyle Thompson"}</span>
                <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#55585C" }}>{"Project Management"}</span>
              </span>
            </div>
          </div>
        </div>
        <div data-block="" style={{ background: "linear-gradient(180deg, #F6F6F4 0%, #FFFFFF 100%)", border: "1px solid #E4E5E6", borderRadius: "28px", padding: "26px 24px 28px 24px", display: "flex", flexDirection: "column", gap: "22px", boxSizing: "border-box", minWidth: "0" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#0A0A0B" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "999px", background: "#D9773A" }}></span>
              {"Business development"}
            </span>
            <span style={{ fontSize: "13px", color: "#55585C" }}>{"Your first call for a new project"}</span>
          </div>
          <div className="r-people" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div className="cx-steel" data-photo="SR" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "18px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px rgba(0,0,0,0.18)" }}>
                <span style={{ fontSize: "44px", fontWeight: "300", background: "linear-gradient(180deg, #FFFFFF 15%, #C9CBCE 60%, #8E9195 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"SR"}</span>
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "16.5px", fontWeight: "600", color: "#0A0A0B" }}>{"Sarah Rineer"}</span>
                <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#55585C" }}>{"Business Development Executive"}</span>
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div className="cx-steel" data-photo="KP" style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: "18px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 30px rgba(0,0,0,0.18)" }}>
                <span style={{ fontSize: "44px", fontWeight: "300", background: "linear-gradient(180deg, #FFFFFF 15%, #C9CBCE 60%, #8E9195 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{"KP"}</span>
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "16.5px", fontWeight: "600", color: "#0A0A0B" }}>{"Karen Powell"}</span>
                <span style={{ fontSize: "12.5px", lineHeight: "1.45", color: "#55585C" }}>{"Project Development Executive"}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
