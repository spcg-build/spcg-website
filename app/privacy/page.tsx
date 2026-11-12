import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy & Cookies",
  description: "How SP Construction Group handles information collected on this website, including cookies.",
};

const h3 = { margin: "36px 0 10px 0", fontSize: "20px", fontWeight: 600, color: "#0A0A0B" } as const;
const p = { margin: "0 0 14px 0", fontSize: "16px", lineHeight: 1.7, color: "#2B2D30" } as const;
const li = { margin: "0 0 8px 0", fontSize: "16px", lineHeight: 1.65, color: "#2B2D30" } as const;

export default function PrivacyPage() {
  return (
    <main className="v-page">
      <section className="cx-hero v-hero">
        <div className="v-wrap v-hero-in">
          <span className="v-eyebrow" style={{ color: "#ECEDEE" }}>
            <span className="v-dot"></span>
            {"Last updated November 2026"}
          </span>
          <h1 className="v-h1">{"Privacy & cookies"}</h1>
          <p className="v-lede">{"What we collect on this website, why we collect it, and the choices you have."}</p>
        </div>
      </section>
      <section className="v-wrap v-sec" style={{ maxWidth: "820px" }}>
        <h2 style={h3}>{"Information you give us"}</h2>
        <p style={p}>{"When you request a budget, apply for a job or prequalify as a subcontractor, we collect what you enter in the form, such as your name, company, email, phone number, project details and any files you attach. We use it only to respond to you and to evaluate the project, application or prequalification. Form submissions are delivered to our team by email through a form-processing service."}</p>

        <h2 style={h3}>{"Cookies and similar technologies"}</h2>
        <p style={p}>{"Cookies are small files a website stores in your browser. We use two kinds:"}</p>
        <ul style={{ margin: "0 0 14px 0", paddingLeft: "22px" }}>
          <li style={li}><strong>{"Essential: "}</strong>{"needed for the site to work, such as remembering your cookie choice and the project type you picked in the “Tailor this site” selector. These are always on."}</li>
          <li style={li}><strong>{"Analytics: "}</strong>{"help us understand how visitors use the site, such as which pages are viewed, how long people stay and what kind of device they use, so we can improve it. These are only used if you select “Accept all.” They may include Microsoft Clarity, which records anonymous clicks, scrolling and page movement to show us where the site is hard to use. The information is reported in aggregate and is not used to identify you."}</li>
        </ul>
        <p style={p}>{"We also use Vercel Web Analytics, which counts page views and link clicks without cookies and without identifying you."}</p>
        <p style={p}>{"We do not use advertising cookies, and we do not sell or share your personal information for advertising."}</p>

        <h2 style={h3}>{"Your choices"}</h2>
        <p style={p}>{"When you first visit, you can accept all cookies or reject non-essential cookies. You can change your choice at any time:"}</p>
        <p style={p}><button type="button" data-cookie-settings="" className="v-btn">{"Cookie settings"}</button></p>
        <p style={p}>{"You can also block or delete cookies in your browser settings. Blocking essential cookies may affect how parts of the site work."}</p>

        <h2 style={h3}>{"How we protect and keep information"}</h2>
        <p style={p}>{"We limit access to the people who need it to respond to you, and we keep information only as long as needed for the purpose it was collected or as required by law."}</p>

        <h2 style={h3}>{"Contact us"}</h2>
        <p style={p}>{"Questions about this policy, or a request to see or delete information you sent us: email "}<a href="mailto:bids@spconstructiongroup.com" style={{ color: "#B5541C" }}>{"Bids@SPConstructionGroup.com"}</a>{" or call "}<a href="tel:+14433000338" style={{ color: "#B5541C" }}>{"(443) 300-0338"}</a>{"."}</p>
      </section>
    </main>
  );
}
