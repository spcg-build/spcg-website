import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Site Map",
  description: "Every page on the SP Construction Group website.",
};

const GROUPS: [string, [string, string][]][] = [
  ["Company", [["Home", "/"], ["Services", "/#services"], ["Featured work", "/#work"], ["Approach", "/#approach"], ["Where we build", "/#about"], ["Leadership", "/#leadership"]]],
  ["Work with us", [["Request a budget", "/request-a-budget/"], ["Subcontractors and prequalification", "/subcontractors/"], ["Careers", "/careers/"]]],
  ["Policies", [["Privacy & cookies", "/privacy/"], ["Accessibility", "/accessibility/"]]],
];

export default function SiteMapPage() {
  return (
    <main className="v-page">
      <section className="cx-hero v-hero">
        <div className="v-wrap v-hero-in">
          <h1 className="v-h1">{"Site map"}</h1>
          <p className="v-lede">{"Every page on this website."}</p>
        </div>
      </section>
      <section className="v-wrap v-sec" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "32px" }}>
        {GROUPS.map(([g, links]) => (
          <nav key={g} aria-label={g}>
            <h2 style={{ margin: "0 0 12px 0", fontSize: "13px", fontWeight: 600, letterSpacing: "0.12em", color: "#55585C" }}>{g}</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {links.map(([t, h]) => (<li key={h}><a href={h} style={{ fontSize: "16px", color: "#0A0A0B" }}>{t}</a></li>))}
            </ul>
          </nav>
        ))}
      </section>
    </main>
  );
}
