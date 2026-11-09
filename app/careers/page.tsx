import type { Metadata } from 'next';
import { FORMS } from '@/content/site';

export const metadata: Metadata = {
  title: "Careers",
  description: "Join SP Construction Group. Open field and office roles in commercial construction.",
};

export default function CareersPage() {
  return (
    <main className="v-page">
      <section className="cx-hero v-hero">
        <div className="v-wrap v-hero-in">
          <span className="v-eyebrow" style={{ color: "#D9DADB" }}>
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
          <div className="v-label">
            <span className="v-rule"></span>
            <h2>{"Why SPCG"}</h2>
          </div>
          <p className="v-h2">{"A small team where your work is visible."}</p>
        </div>
        <div className="v-grid4">
          <div className="v-card">
            <span className="v-card-t">{"Room to grow"}</span>
            <span className="v-card-d">{"A growing company means new roles, new markets and fast paths to lead."}</span>
          </div>
          <div className="v-card">
            <span className="v-card-t">{"Senior mentors"}</span>
            <span className="v-card-d">{"Learn from leaders with decades of experience in interior and occupied-building work."}</span>
          </div>
          <div className="v-card">
            <span className="v-card-t">{"Modern tools"}</span>
            <span className="v-card-d">{"Procore, BuildingConnected and real-time job data. Less paperwork, more building."}</span>
          </div>
          <div className="v-card">
            <span className="v-card-t">{"Flexible by design"}</span>
            <span className="v-card-d">{"Office roles work remotely. Field roles stay close to home in your region."}</span>
          </div>
        </div>
        <div className="v-benefits">
          <span className="v-small-label">{"BENEFITS"}</span>
          <div className="v-chips">
            <span className="v-chip">{"[Health coverage]"}</span>
            <span className="v-chip">{"[Retirement]"}</span>
            <span className="v-chip">{"[Paid time off]"}</span>
            <span className="v-chip">{"[Vehicle or allowance for field roles]"}</span>
            <span className="v-chip">{"[Training and certifications]"}</span>
          </div>
        </div>
      </section>
      <section id="roles" className="v-wrap v-sec">
        <div className="v-sechead">
          <div className="v-label">
            <span className="v-rule"></span>
            <h2>{"Open roles"}</h2>
          </div>
          <p className="v-h2">{"Find where you fit."}</p>
        </div>
        <div className="v-filter" role="group" aria-label="Filter roles">
          <button type="button" className="v-fbtn" data-filter="all" aria-pressed="true">{"All"}</button>
          <button type="button" className="v-fbtn" data-filter="field" aria-pressed="false">{"Field"}</button>
          <button type="button" className="v-fbtn" data-filter="office" aria-pressed="false">{"Office"}</button>
        </div>
        <div className="v-roles">
          <div className="v-role" data-kind="field">
            <span className="v-role-name">{"Superintendent"}</span>
            <span className="v-role-meta">{"Field · Maryland and DC"}</span>
            <button type="button" className="v-btn-sm" data-apply="Superintendent">{"Apply"}</button>
          </div>
          <div className="v-role" data-kind="office">
            <span className="v-role-name">{"Project Manager"}</span>
            <span className="v-role-meta">{"Office and field · Maryland and DC"}</span>
            <button type="button" className="v-btn-sm" data-apply="Project Manager">{"Apply"}</button>
          </div>
          <div className="v-role" data-kind="office">
            <span className="v-role-name">{"Preconstruction Assistant"}</span>
            <span className="v-role-meta">{"Office · Remote"}</span>
            <button type="button" className="v-btn-sm" data-apply="Preconstruction Assistant">{"Apply"}</button>
          </div>
          <div className="v-role" data-kind="office">
            <span className="v-role-name">{"Construction Accountant"}</span>
            <span className="v-role-meta">{"Office · Remote"}</span>
            <button type="button" className="v-btn-sm" data-apply="Construction Accountant">{"Apply"}</button>
          </div>
          <div className="v-role" data-kind="field">
            <span className="v-role-name">{"Superintendent"}</span>
            <span className="v-role-meta">{"Field · Central Florida"}</span>
            <button type="button" className="v-btn-sm" data-apply="Superintendent">{"Apply"}</button>
          </div>
        </div>
      </section>
      <section id="apply" className="v-wrap v-sec">
        <div className="v-formcard">
          <div className="v-formhead">
            <div className="v-sechead">
              <div className="v-label">
                <span className="v-rule"></span>
                <h2>{"Apply"}</h2>
              </div>
              <p className="v-h2">{"Tell us what you build."}</p>
            </div>
            <p className="v-muted">{"Don't see your role? Send a general application and we'll reach out when something fits."}</p>
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
                <input id="c-role" name="role" placeholder="General application" />
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
      </section>
    </main>
  );
}
