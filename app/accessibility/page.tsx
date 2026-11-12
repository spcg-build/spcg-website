import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Accessibility",
  description: "SP Construction Group's commitment to an accessible website, and how to tell us about a barrier.",
};

const h3 = { margin: "36px 0 10px 0", fontSize: "20px", fontWeight: 600, color: "#0A0A0B" } as const;
const p = { margin: "0 0 14px 0", fontSize: "16px", lineHeight: 1.7, color: "#2B2D30" } as const;
const li = { margin: "0 0 8px 0", fontSize: "16px", lineHeight: 1.65, color: "#2B2D30" } as const;

export default function AccessibilityPage() {
  return (
    <main className="v-page">
      <section className="cx-hero v-hero">
        <div className="v-wrap v-hero-in">
          <span className="v-eyebrow" style={{ color: "#ECEDEE" }}>
            <span className="v-dot"></span>
            {"Last updated November 2026"}
          </span>
          <h1 className="v-h1">{"Accessibility"}</h1>
          <p className="v-lede">{"We want everyone, including people who use assistive technology, to be able to use this website."}</p>
        </div>
      </section>
      <section className="v-wrap v-sec" style={{ maxWidth: "820px" }}>
        <h2 style={h3}>{"Our approach"}</h2>
        <p style={p}>{"We design and build this site to meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. That includes:"}</p>
        <ul style={{ paddingLeft: "20px", margin: "0 0 14px 0" }}>
          <li style={li}>{"Text alternatives for meaningful images"}</li>
          <li style={li}>{"Keyboard access to menus, pop-ups and forms, with a visible focus outline"}</li>
          <li style={li}>{"Color contrast that meets AA levels for text"}</li>
          <li style={li}>{"Pages that work when zoomed and on small screens"}</li>
          <li style={li}>{"Reduced motion for visitors who turn it on in their device settings"}</li>
        </ul>
        <p style={p}>{"Accessibility is ongoing work. We review the site as we add pages and fix issues as we find them."}</p>

        <h2 style={h3}>{"Tell us about a barrier"}</h2>
        <p style={p}>
          {"If any part of this site is hard to use, or you need information in another format, email "}
          <a href="mailto:bids@spconstructiongroup.com" style={{ color: "#B5541C" }}>{"Bids@SPConstructionGroup.com"}</a>
          {" or call "}
          <a href="tel:+14433000338" style={{ color: "#B5541C" }}>{"(443) 300-0338"}</a>
          {". Tell us the page and what happened, and we'll respond within two business days."}
        </p>
      </section>
    </main>
  );
}
