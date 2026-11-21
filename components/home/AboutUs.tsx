// About us: full-width, two columns
export default function AboutUs() {
  return (
    <section className="r-pad r-aboutus" id="about" style={{ padding: "140px 120px 0 120px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: "linear-gradient(90deg, #B5541C, #D9773A)" }}></div>
        <h2 style={{ margin: "0", fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase" }}>{"About us"}</h2>
      </div>
      <p style={{ margin: "20px 0 0 0", fontSize: "52px", fontWeight: "300", lineHeight: "1.05", letterSpacing: "-0.03em", maxWidth: "900px" }}>{"Built on Experience. Driven by Execution."}</p>
      <div className="r-aboutgrid" style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "64px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#45484C" }}>{"Founded in 2023, SPCG was built to bring a fresh approach to construction—one grounded in experienced leadership, strategic execution, and strong relationships."}</p>
          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#45484C" }}>{"Our company is young. The experience behind it is not. Our leadership team brings together professionals who have seen the industry from multiple angles and understand what it takes to deliver. We know what our superintendents need to lead effectively, what keeps our project managers moving forward, and what our clients expect from a construction partner."}</p>
          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#45484C" }}>{"That perspective helps us ask the right questions, anticipate challenges, and close gaps before they become costly problems. You don’t need to know every detail of construction. You need a team that knows what to look for, explains your options, and takes ownership of the path forward."}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <p style={{ margin: "0", fontSize: "24px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "-0.01em", color: "#0A0A0B" }}>{"The Right People. A Smarter Approach."}</p>
          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#45484C" }}>{"We combine hands-on experience with modern technology to keep our operations lean, our teams coordinated, and our projects moving with purpose. It’s an approach designed to support competitive pricing, informed decisions, and a better client experience—from the first conversation through final delivery."}</p>
          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#45484C" }}>{"We believe great results begin with taking care of people. That means understanding our clients’ priorities, supporting our internal teams, and building strong relationships with the trade partners who help bring each project to life. When everyone has the information, resources, and respect they need, the project benefits."}</p>
        </div>
      </div>
      <p style={{ margin: "40px 0 0 0", paddingLeft: "16px", borderLeft: "2px solid #D9773A", fontSize: "20px", fontWeight: "300", lineHeight: "1.5", color: "#0A0A0B", maxWidth: "900px" }}>{"At SPCG, we’re building our reputation through the commitments we keep, the relationships we earn, and work that speaks for itself."}</p>
    </section>
  );
}
