import type { Metadata } from 'next';
import { FORMS } from '@/content/site';

export const metadata: Metadata = {
  title: "Subcontractors",
  description: "Prequalify with SP Construction Group and get invited to bid on commercial projects.",
};

export default function SubcontractorsPage() {
  return (
    <main className="v-page">
      <section className="cx-hero v-hero">
        <div className="v-wrap v-hero-in">
          <span className="v-eyebrow" style={{ color: "#D9DADB" }}>
            <span className="v-dot"></span>
            {"Trade partners"}
          </span>
          <h1 className="v-h1">
            {"Bid with us. "}
            <span className="r-steel">{"Get paid on time."}</span>
          </h1>
          <p className="v-lede">{"We award work to qualified subcontractors across Maryland, DC, Virginia, North Carolina, Boston and Florida. Prequalify once, then get invited to bid through BuildingConnected."}</p>
          <div className="v-actions">
            <button type="button" className="v-btn" data-scroll="#prequal">
              {"Start prequalification "}
              <span aria-hidden="true">{"→"}</span>
            </button>
            <button type="button" className="v-btn-ghost" data-scroll="#getpaid">{"How we pay"}</button>
          </div>
        </div>
      </section>
      <section className="v-wrap v-sec">
        <div className="v-sechead">
          <div className="v-label">
            <span className="v-rule"></span>
            <h2>{"How our bid lists work"}</h2>
          </div>
          <p className="v-h2">{"Three steps to your first invitation."}</p>
        </div>
        <div className="v-steps">
          <div className="v-step">
            <span className="v-num">{"1"}</span>
            <span className="v-card-t">{"Prequalify"}</span>
            <span className="v-card-d">{"Tell us your trades, regions and recent work. About [15] minutes."}</span>
          </div>
          <div className="v-step">
            <span className="v-num">{"2"}</span>
            <span className="v-card-t">{"Get invited"}</span>
            <span className="v-card-d">{"Prequalified subs are invited first on matching jobs through BuildingConnected."}</span>
          </div>
          <div className="v-step">
            <span className="v-num">{"3"}</span>
            <span className="v-card-t">{"Bid and build"}</span>
            <span className="v-card-d">{"Bids are leveled line by line. Work is awarded on best qualified value."}</span>
          </div>
        </div>
      </section>
      <section id="prequal" className="v-wrap v-sec v-split">
        <div className="v-formcard">
          <div className="v-formhead">
            <div className="v-sechead">
              <div className="v-label">
                <span className="v-rule"></span>
                <h2>{"Prequalification"}</h2>
              </div>
              <p className="v-h2">{"Join our bid list."}</p>
            </div>
          </div>
          <form className="v-form" data-form="subs" noValidate action={FORMS.subs} method="POST" encType="multipart/form-data">
            <div className="v-row2">
              <div className="v-field">
                <label htmlFor="s-co">{"Company name"}</label>
                <input id="s-co" name="company" autoComplete="organization" required />
              </div>
              <div className="v-field">
                <label htmlFor="s-contact">{"Primary contact"}</label>
                <input id="s-contact" name="contact" autoComplete="name" required />
              </div>
            </div>
            <div className="v-row2">
              <div className="v-field">
                <label htmlFor="s-email">{"Email"}</label>
                <input id="s-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="v-field">
                <label htmlFor="s-phone">{"Phone"}</label>
                <input id="s-phone" name="phone" type="tel" autoComplete="tel" />
              </div>
            </div>
            <fieldset className="v-fs">
              <legend>{"Trades"}</legend>
              <div className="v-checks">
                <label className="v-check">
                  <input type="checkbox" name="trades" value="Drywall and framing" />
                  <span>{"Drywall and framing"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="trades" value="Electrical" />
                  <span>{"Electrical"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="trades" value="HVAC" />
                  <span>{"HVAC"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="trades" value="Plumbing" />
                  <span>{"Plumbing"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="trades" value="Flooring" />
                  <span>{"Flooring"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="trades" value="Painting" />
                  <span>{"Painting"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="trades" value="Millwork" />
                  <span>{"Millwork"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="trades" value="Fire protection" />
                  <span>{"Fire protection"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="trades" value="Low voltage" />
                  <span>{"Low voltage"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="trades" value="Ceilings" />
                  <span>{"Ceilings"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="trades" value="Glass and glazing" />
                  <span>{"Glass and glazing"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="trades" value="Other" />
                  <span>{"Other"}</span>
                </label>
              </div>
            </fieldset>
            <fieldset className="v-fs">
              <legend>{"Regions you work in"}</legend>
              <div className="v-checks">
                <label className="v-check">
                  <input type="checkbox" name="regions" value="Maryland" />
                  <span>{"Maryland"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="regions" value="DC" />
                  <span>{"DC"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="regions" value="Virginia" />
                  <span>{"Virginia"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="regions" value="Boston" />
                  <span>{"Boston"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="regions" value="North Carolina" />
                  <span>{"North Carolina"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="regions" value="Florida: Tampa Bay" />
                  <span>{"Florida: Tampa Bay"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="regions" value="Florida: Central" />
                  <span>{"Florida: Central"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="regions" value="Florida: South" />
                  <span>{"Florida: South"}</span>
                </label>
                <label className="v-check">
                  <input type="checkbox" name="regions" value="Florida: North" />
                  <span>{"Florida: North"}</span>
                </label>
              </div>
            </fieldset>
            <div className="v-field">
              <label htmlFor="s-proj">{"Three recent projects"}</label>
              <textarea id="s-proj" name="projects" rows={3} placeholder="Project, location, your contract value"></textarea>
            </div>
            <div className="v-row2">
              <div className="v-field">
                <label htmlFor="s-w9">{"W-9"}</label>
                <input id="s-w9" name="w9" type="file" accept=".pdf,.jpg,.png" />
              </div>
              <div className="v-field">
                <label htmlFor="s-coi">{"Certificate of insurance"}</label>
                <input id="s-coi" name="coi" type="file" accept=".pdf,.jpg,.png" />
              </div>
            </div>
            <p className="v-error" role="alert" hidden></p>
            <div className="v-actions">
              <button type="submit" className="v-btn-dark">
                {"Submit prequalification "}
                <span aria-hidden="true">{"→"}</span>
              </button>
            </div>
            <p className="v-done" role="status" hidden>{"Thanks. Your prequalification is in, and we'll follow up by email."}</p>
          </form>
        </div>
        <aside className="v-aside">
          <div className="v-asidecard">
            <span className="v-small-label">{"WHAT TO SEND"}</span>
            <div className="v-asiderow">
              <b>{"All subcontracts"}</b>
              <span>{"W-9 · Certificate of insurance · Licenses for your trade · Three references"}</span>
            </div>
            <div className="v-asiderow">
              <b>{"Subcontracts over [$250,000]"}</b>
              <span>{"EMR letter · OSHA 300A, 3 years · Surety letter or financial statement"}</span>
            </div>
            <span className="v-muted" style={{ fontSize: "13px" }}>{"Renewed once a year with your new COI."}</span>
          </div>
          <div className="v-asidecard">
            <span className="v-small-label">{"DOCUMENT LIBRARY"}</span>
            <div className="v-doc">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C5A85" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z"></path>
                <path d="M8.8 12.2l2.2 2.2 4.2-4.4"></path>
              </svg>
              <span>{"Insurance requirements"}</span>
              <span className="v-tag">{"PDF"}</span>
            </div>
            <div className="v-doc">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C5A85" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z"></path>
                <path d="M8.8 12.2l2.2 2.2 4.2-4.4"></path>
              </svg>
              <span>{"Sample certificate of insurance"}</span>
              <span className="v-tag">{"PDF"}</span>
            </div>
            <div className="v-doc">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C5A85" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z"></path>
                <path d="M8.8 12.2l2.2 2.2 4.2-4.4"></path>
              </svg>
              <span>{"Pay application template"}</span>
              <span className="v-tag">{"XLSX"}</span>
            </div>
            <div className="v-doc">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C5A85" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z"></path>
                <path d="M8.8 12.2l2.2 2.2 4.2-4.4"></path>
              </svg>
              <span>{"Lien waivers, conditional and final"}</span>
              <span className="v-tag">{"PDF"}</span>
            </div>
            <div className="v-doc">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C5A85" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z"></path>
                <path d="M8.8 12.2l2.2 2.2 4.2-4.4"></path>
              </svg>
              <span>{"ACH enrollment form"}</span>
              <span className="v-tag">{"PDF"}</span>
            </div>
            <span className="v-muted" style={{ fontSize: "13px" }}>{"Shared with prequalified partners."}</span>
          </div>
        </aside>
      </section>
      <section id="getpaid" className="v-sec">
        <div className="cx-band v-band">
          <div className="v-wrap">
            <span className="v-eyebrow" style={{ color: "#D9DADB" }}>
              <span className="v-dot"></span>
              {"How to get paid"}
            </span>
            <p className="v-h2" style={{ color: "#ffffff", marginTop: "14px" }}>{"Predictable payment, straight to your account."}</p>
            <div className="v-pay">
              <div className="v-paystep">
                <span className="v-paywhen">{"BY THE [25TH]"}</span>
                <span className="v-card-t" style={{ color: "#fff" }}>{"Submit your pay app"}</span>
                <span className="v-card-d" style={{ color: "#C9CACC" }}>{"With a conditional lien waiver and a current COI."}</span>
              </div>
              <div className="v-paystep">
                <span className="v-paywhen">{"WITHIN [5] DAYS"}</span>
                <span className="v-card-t" style={{ color: "#fff" }}>{"PM review"}</span>
                <span className="v-card-d" style={{ color: "#C9CACC" }}>{"Percent complete confirmed against the field."}</span>
              </div>
              <div className="v-paystep">
                <span className="v-paywhen">{"[NET X]"}</span>
                <span className="v-card-t" style={{ color: "#fff" }}>{"Paid by ACH"}</span>
                <span className="v-card-d" style={{ color: "#C9CACC" }}>{"Direct deposit with a remittance email."}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
