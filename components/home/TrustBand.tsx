// Trust band: key stats plus credentials, directly under the hero.
export default function TrustBand() {
  return (
    <section className="r-trust2" aria-label="At a glance">
      <div className="r-trust-stats">
        <div className="r-trust-s"><b>{"25+ years"}</b><span>{"of leadership experience"}</span></div>
        <div className="r-trust-s"><b>{"Boston to Florida"}</b><span>{"active East Coast markets, now building in Florida"}</span></div>
        <div className="r-trust-s"><b>{"Every Friday"}</b><span>{"owner report on schedule, budget and decisions"}</span></div>
      </div>
      <ul className="r-trust-creds">
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" fill="#C96A1E" stroke="#C96A1E" strokeWidth="1.7"></path><path d="M8.8 12.2l2.2 2.2 4.2-4.4" stroke="#FFFFFF" strokeWidth="2"></path></svg>{"Bonded and insured"}</li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" fill="#C96A1E" stroke="#C96A1E" strokeWidth="1.7"></path><path d="M8.8 12.2l2.2 2.2 4.2-4.4" stroke="#FFFFFF" strokeWidth="2"></path></svg>{"Surety letter on request"}</li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" fill="#C96A1E" stroke="#C96A1E" strokeWidth="1.7"></path><path d="M8.8 12.2l2.2 2.2 4.2-4.4" stroke="#FFFFFF" strokeWidth="2"></path></svg>{"CFMA member"}</li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" fill="#C96A1E" stroke="#C96A1E" strokeWidth="1.7"></path><path d="M8.8 12.2l2.2 2.2 4.2-4.4" stroke="#FFFFFF" strokeWidth="2"></path></svg>{"Privately held"}</li>
      </ul>
    </section>
  );
}
