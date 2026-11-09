import type { Metadata } from 'next';
import { FORMS } from '@/content/site';

export const metadata: Metadata = {
  title: "Request a budget",
  description: "Send your project details and get a budget from SP Construction Group.",
};

export default function BudgetPage() {
  return (
    <main className="v-page">
      <section className="cx-hero v-hero">
        <div className="v-wrap v-hero-in">
          <span className="v-eyebrow" style={{ color: "#D9DADB" }}>
            <span className="v-dot"></span>
            {"Request a budget"}
          </span>
          <h1 className="v-h1">
            {"Send us the basics. "}
            <span className="r-steel">{"Get a real number back."}</span>
          </h1>
          <p className="v-lede">{"Share what you know today: a test fit, drawings or just a square footage. A senior estimator reviews every request and replies within [48 hours] with a budget and the assumptions behind it."}</p>
        </div>
      </section>
      <section className="v-wrap v-sec v-split" style={{ paddingTop: "64px" }}>
        <div className="v-formcard">
          <form className="v-form" data-form="budget" noValidate action={FORMS.budget} method="POST" encType="multipart/form-data">
            <div className="v-row2">
              <div className="v-field">
                <label htmlFor="b-name">{"Your name"}</label>
                <input id="b-name" name="name" autoComplete="name" required />
              </div>
              <div className="v-field">
                <label htmlFor="b-co">{"Company"}</label>
                <input id="b-co" name="company" autoComplete="organization" />
              </div>
            </div>
            <div className="v-row2">
              <div className="v-field">
                <label htmlFor="b-email">{"Email"}</label>
                <input id="b-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="v-field">
                <label htmlFor="b-phone">{"Phone"}</label>
                <input id="b-phone" name="phone" type="tel" autoComplete="tel" />
              </div>
            </div>
            <fieldset className="v-fs">
              <legend>{"Project type"}</legend>
              <div className="v-checks">
                <label className="v-check">
                  <input type="radio" name="type" value="Healthcare" />
                  <span>{"Healthcare"}</span>
                </label>
                <label className="v-check">
                  <input type="radio" name="type" value="Corporate office" />
                  <span>{"Corporate office"}</span>
                </label>
                <label className="v-check">
                  <input type="radio" name="type" value="Retail or restaurant" />
                  <span>{"Retail or restaurant"}</span>
                </label>
                <label className="v-check">
                  <input type="radio" name="type" value="Hospitality" />
                  <span>{"Hospitality"}</span>
                </label>
                <label className="v-check">
                  <input type="radio" name="type" value="Other" />
                  <span>{"Other"}</span>
                </label>
              </div>
            </fieldset>
            <fieldset className="v-fs">
              <legend>{"You are the"}</legend>
              <div className="v-checks">
                <label className="v-check">
                  <input type="radio" name="role" value="Owner or developer" />
                  <span>{"Owner or developer"}</span>
                </label>
                <label className="v-check">
                  <input type="radio" name="role" value="Tenant" />
                  <span>{"Tenant"}</span>
                </label>
                <label className="v-check">
                  <input type="radio" name="role" value="Broker" />
                  <span>{"Broker"}</span>
                </label>
                <label className="v-check">
                  <input type="radio" name="role" value="Property manager" />
                  <span>{"Property manager"}</span>
                </label>
                <label className="v-check">
                  <input type="radio" name="role" value="Architect" />
                  <span>{"Architect"}</span>
                </label>
              </div>
            </fieldset>
            <div className="v-row2">
              <div className="v-field">
                <label htmlFor="b-loc">{"Project location"}</label>
                <input id="b-loc" name="location" placeholder="City, state" />
              </div>
              <div className="v-field">
                <label htmlFor="b-sf">{"Approximate size"}</label>
                <input id="b-sf" name="size" placeholder="Square feet" />
              </div>
            </div>
            <div className="v-row2">
              <div className="v-field">
                <label htmlFor="b-start">{"Target start"}</label>
                <input id="b-start" name="start" placeholder="Month and year" />
              </div>
              <div className="v-field">
                <label htmlFor="b-open">{"Target move-in or opening"}</label>
                <input id="b-open" name="open" placeholder="Month and year" />
              </div>
            </div>
            <fieldset className="v-fs">
              <legend>{"Where is the design?"}</legend>
              <div className="v-checks">
                <label className="v-check">
                  <input type="radio" name="stage" value="No drawings yet" />
                  <span>{"No drawings yet"}</span>
                </label>
                <label className="v-check">
                  <input type="radio" name="stage" value="Test fit" />
                  <span>{"Test fit"}</span>
                </label>
                <label className="v-check">
                  <input type="radio" name="stage" value="Schematic design" />
                  <span>{"Schematic design"}</span>
                </label>
                <label className="v-check">
                  <input type="radio" name="stage" value="Construction documents" />
                  <span>{"Construction documents"}</span>
                </label>
              </div>
            </fieldset>
            <div className="v-field">
              <label htmlFor="b-files">{"Drawings or test fit"}</label>
              <input id="b-files" name="files" type="file" multiple accept=".pdf,.dwg,.jpg,.png,.zip" />
            </div>
            <div className="v-field">
              <label htmlFor="b-notes">{"Tell us about the space"}</label>
              <textarea id="b-notes" name="notes" rows={4} placeholder="Scope, phasing, occupied building, anything we should know"></textarea>
            </div>
            <p className="v-error" role="alert" hidden></p>
            <div className="v-actions">
              <button type="submit" className="v-btn-dark">
                {"Request my budget "}
                <span aria-hidden="true">{"→"}</span>
              </button>
            </div>
            <p className="v-done" role="status" hidden>{"Thanks. Your request is in. A senior estimator will follow up shortly."}</p>
          </form>
        </div>
        <aside className="v-aside">
          <div className="v-asidecard">
            <span className="v-small-label">{"WHAT HAPPENS NEXT"}</span>
            <div className="v-asiderow">
              <b>{"1 · We review it"}</b>
              <span>{"A senior estimator reads your request the same business day."}</span>
            </div>
            <div className="v-asiderow">
              <b>{"2 · A quick call"}</b>
              <span>{"Fifteen minutes to confirm scope, schedule and anything the drawings don't show."}</span>
            </div>
            <div className="v-asiderow">
              <b>{"3 · Your budget"}</b>
              <span>{"A number within [48 hours], with the assumptions and allowances behind it."}</span>
            </div>
          </div>
          <div className="v-asidecard">
            <span className="v-small-label">{"PREFER TO TALK?"}</span>
            <span style={{ fontSize: "15px", fontWeight: "600", userSelect: "all" }}>{"Bids@SPConstructionGroup.com"}</span>
            <span style={{ fontSize: "15px", fontWeight: "600", userSelect: "all" }}>{"(443) 300-0338"}</span>
            <span className="v-muted" style={{ fontSize: "13px" }}>{"Privately held · Bonded and insured"}</span>
          </div>
        </aside>
      </section>
    </main>
  );
}
