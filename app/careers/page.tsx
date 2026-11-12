import type { Metadata } from 'next';
import { FORMS } from '@/content/site';
import { JOBS } from '@/content/jobs';

export const metadata: Metadata = {
  title: "Careers",
  description: "Join SP Construction Group. Hiring a project manager and superintendent in Central Florida, a traveling superintendent, a preconstruction and estimating assistant, and project and senior accountants.",
};

const Label = ({ children }: { children: string }) => (
  <div className="v-label">
    <span className="v-rule"></span>
    <h2>{children}</h2>
  </div>
);

export default function CareersPage() {
  const fl = JOBS.filter((j) => j.region === 'fl').length;
  const tr = JOBS.filter((j) => j.region === 'travel').length;
  const fn = JOBS.filter((j) => j.region === 'fin').length;
  return (
    <main className="v-page">
      <section className="cx-hero v-hero">
        <div className="v-wrap v-hero-in">
          <span className="v-eyebrow" style={{ color: "#ECEDEE" }}>
            <span className="v-dot"></span>
            {"Careers · now hiring"}
          </span>
          <h1 className="v-h1">
            {"Help build a general contractor "}
            <span className="r-steel">{"from the ground up."}</span>
          </h1>
          <p className="v-lede">{"We're a growing team of builders who want real responsibility, modern tools and leaders who answer the phone. Your work shapes the company, not just the job."}</p>
          <div className="v-actions">
            <button type="button" className="v-btn" data-scroll="#roles">
              {"See open roles "}
              <span aria-hidden="true">{"→"}</span>
            </button>
            <button type="button" className="v-btn-ghost" data-scroll="#apply">{"Send a general application"}</button>
          </div>
        </div>
      </section>

      <section className="v-wrap v-sec">
        <div className="v-sechead">
          <Label>{"Where we're hiring"}</Label>
          <p className="v-h2">{"Growing in Florida, building up and down the East Coast."}</p>
        </div>
        <div className="c-where">
          <div className="c-place c-place-hot">
            <span className="c-pill">{fl + (fl === 1 ? " open role" : " open roles")}</span>
            <span className="c-place-t">{"Central Florida"}</span>
            <span className="c-place-d">{"Orlando and Tampa Bay. Our newest market, with healthcare, office and retail work and a team we're building now."}</span>
          </div>
          <div className="c-place">
            <span className="c-pill">{tr + (tr === 1 ? " open role" : " open roles")}</span>
            <span className="c-place-t">{"Traveling · East Coast"}</span>
            <span className="c-place-d">{"Maryland, DC, Virginia, North Carolina, Boston and Florida, wherever our clients need us."}</span>
          </div>
          <div className="c-place">
            <span className="c-pill">{fn + (fn === 1 ? " open role" : " open roles")}</span>
            <span className="c-place-t">{"Office: preconstruction and finance"}</span>
            <span className="c-place-d">{"Remote, supporting projects across the East Coast. Help build the estimating and finance teams of a growing GC."}</span>
          </div>
        </div>
      </section>

      <section className="v-wrap v-sec">
        <div className="v-sechead">
          <Label>{"Why SPCG"}</Label>
          <p className="v-h2">{"A small team where your work is visible."}</p>
        </div>
        <div className="v-grid4">
          <div className="v-card">
            <span className="v-card-t">{"Room to grow"}</span>
            <span className="v-card-d">{"A growing company means new roles, new markets and fast paths to lead."}</span>
          </div>
          <div className="v-card">
            <span className="v-card-t">{"Senior mentors"}</span>
            <span className="v-card-d">{"Learn from leaders with decades of experience in commercial and occupied-building work."}</span>
          </div>
          <div className="v-card">
            <span className="v-card-t">{"Modern tools"}</span>
            <span className="v-card-d">{"Procore, BuildingConnected and real-time job data. Less paperwork, more building."}</span>
          </div>
          <div className="v-card">
            <span className="v-card-t">{"Close to home"}</span>
            <span className="v-card-d">{"Office roles work remotely. Field roles stay in their region unless they choose to travel."}</span>
          </div>
        </div>
        <div className="v-benefits">
          <span className="v-small-label">{"BENEFITS"}</span>
          <div className="v-chips">
            <span className="v-chip">{"Healthcare options"}</span>
            <span className="v-chip">{"401(k) retirement"}</span>
            <span className="v-chip">{"Paid time off"}</span>
            <span className="v-chip">{"Training and certifications"}</span>
          </div>
        </div>
      </section>

      <section className="v-wrap v-sec">
        <div className="v-sechead">
          <Label>{"Career paths"}</Label>
          <p className="v-h2">{"Two ways up. Both lead to leadership."}</p>
        </div>
        <div className="c-paths">
          <div className="c-path">
            <span className="c-path-t">{"Field"}</span>
            <ol className="c-steps">
              <li>{"Assistant Superintendent"}</li>
              <li>{"Superintendent"}</li>
              <li>{"Senior Superintendent"}</li>
              <li>{"Field Operations Leader"}</li>
            </ol>
          </div>
          <div className="c-path">
            <span className="c-path-t">{"Project management"}</span>
            <ol className="c-steps">
              <li>{"Assistant Project Manager"}</li>
              <li>{"Project Manager"}</li>
              <li>{"Senior Project Manager"}</li>
              <li>{"Operations Leader"}</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="roles" className="v-wrap v-sec">
        <div className="v-sechead">
          <Label>{"Open roles"}</Label>
          <p className="v-h2">{"Find where you fit."}</p>
        </div>
        <div className="v-filter" role="group" aria-label="Filter roles">
          <button type="button" className="v-fbtn" data-filter="all" aria-pressed="true">{"All"}</button>
          <button type="button" className="v-fbtn" data-filter="fl" aria-pressed="false">{"Central Florida"}</button>
          <button type="button" className="v-fbtn" data-filter="travel" aria-pressed="false">{"Traveling"}</button>
          <button type="button" className="v-fbtn" data-filter="fin" aria-pressed="false">{"Office"}</button>
        </div>
        <div className="c-jobs">
          {JOBS.map((j) => (
            <details key={j.id} id={j.id} className="v-role c-job" data-kind={j.region}>
              <summary className="c-job-sum">
                <span className="c-job-name">{j.title}</span>
                <span className="c-job-meta">{j.location}</span>
                <span className="c-job-type">{j.type}</span>
                <span className="c-job-open" aria-hidden="true"></span>
              </summary>
              <div className="c-job-body">
                <p className="c-job-lede">{j.summary}</p>
                <div className="c-job-cols">
                  <div>
                    <h3>{"What you'll do"}</h3>
                    <ul>{j.doList.map((x) => <li key={x}>{x}</li>)}</ul>
                  </div>
                  <div>
                    <h3>{"What you bring"}</h3>
                    <ul>{j.bring.map((x) => <li key={x}>{x}</li>)}</ul>
                    <h3>{"Nice to have"}</h3>
                    <ul>{j.plus.map((x) => <li key={x}>{x}</li>)}</ul>
                  </div>
                </div>
                <div className="c-job-foot">
                  {j.pay ? <span><strong>{"Pay: "}</strong>{j.pay}</span> : null}
                  {j.extra ? <span><strong>{"Travel: "}</strong>{j.extra}</span> : null}
                  <button type="button" className="v-btn-dark" data-apply={`${j.title} · ${j.location.split(' · ')[0]}`}>
                    {"Apply for this role "}
                    <span aria-hidden="true">{"→"}</span>
                  </button>
                </div>
              </div>
            </details>
          ))}
        </div>
        <p className="c-note">{"Don't check every box? Apply anyway. We hire for judgment, ownership and how you treat people, and we'll teach the rest."}</p>
      </section>

      <section className="v-wrap v-sec">
        <div className="v-sechead">
          <Label>{"How we hire"}</Label>
          <p className="v-h2">{"Quick, direct and respectful of your time."}</p>
        </div>
        <div className="c-proc">
          <div className="c-proc-s"><span className="c-proc-n">{"01"}</span><span className="c-proc-t">{"Apply"}</span><span className="c-proc-d">{"Send your resume below. It goes straight to our leadership team, not a portal."}</span></div>
          <div className="c-proc-s"><span className="c-proc-n">{"02"}</span><span className="c-proc-t">{"Intro call"}</span><span className="c-proc-d">{"A short call to talk through your experience and what you want next."}</span></div>
          <div className="c-proc-s"><span className="c-proc-n">{"03"}</span><span className="c-proc-t">{"Meet the team"}</span><span className="c-proc-d">{"Sit down with the leaders you'd work with, and walk a job site if you're in the field."}</span></div>
          <div className="c-proc-s"><span className="c-proc-n">{"04"}</span><span className="c-proc-t">{"Offer"}</span><span className="c-proc-d">{"A clear offer with pay, benefits and a start plan. No drawn-out back and forth."}</span></div>
        </div>
      </section>

      <section id="apply" className="v-wrap v-sec">
        <div className="v-formcard">
          <div className="v-formhead">
            <div className="v-sechead">
              <Label>{"Apply"}</Label>
              <p className="v-h2">{"Tell us what you build."}</p>
            </div>
            <p className="v-muted">{"Don't see your role? Send a general application and we'll reach out when something fits. You can also email "}<a href="mailto:careers@spconstructiongroup.com">{"careers@spconstructiongroup.com"}</a>{"."}</p>
          </div>
          <form className="v-form" data-form="careers" noValidate action={FORMS.careers} method="POST" encType="multipart/form-data">
            <div className="v-row2">
              <div className="v-field">
                <label htmlFor="c-name">{"Full name"}</label>
                <input id="c-name" name="name" autoComplete="name" required />
              </div>
              <div className="v-field">
                <label htmlFor="c-email">{"Email"}</label>
                <input id="c-email" name="email" type="email" autoComplete="email" required />
              </div>
            </div>
            <div className="v-row2">
              <div className="v-field">
                <label htmlFor="c-phone">{"Phone"}</label>
                <input id="c-phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="v-field">
                <label htmlFor="c-role">{"Role"}</label>
                <input id="c-role" name="role" placeholder="General application" list="c-roles" />
                <datalist id="c-roles">
                  {JOBS.map((j) => <option key={j.id} value={`${j.title} · ${j.location.split(' · ')[0]}`} />)}
                  <option value="General application" />
                </datalist>
              </div>
            </div>
            <div className="v-field">
              <label htmlFor="c-resume">{"Resume"}</label>
              <input id="c-resume" name="resume" type="file" accept=".pdf,.doc,.docx" />
            </div>
            <div className="v-field">
              <label htmlFor="c-msg">{"Anything else we should know"}</label>
              <textarea id="c-msg" name="msg" rows={4}></textarea>
            </div>
            <p className="v-error" role="alert" hidden></p>
            <div className="v-actions">
              <button type="submit" className="v-btn-dark">
                {"Send application "}
                <span aria-hidden="true">{"→"}</span>
              </button>
            </div>
            <p className="v-done" role="status" hidden>{"Thanks. Your application is in, and our team will be in touch."}</p>
          </form>
        </div>
        <p className="c-eeo">{"SP Construction Group is an equal opportunity employer. We consider all qualified applicants without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, age, disability, veteran status or any other protected status."}</p>
      </section>
    </main>
  );
}
