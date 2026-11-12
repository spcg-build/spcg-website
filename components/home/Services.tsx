// Services: what we do, six cards. Cards with featured projects open a pop-up with photos and job stats.
// Service photos: Unsplash (free license) in /public/images/services. Project photos: SPCG jobs in /public/images/projects.
type Stat = [string, string];
// Values in [brackets] are placeholders waiting on PM data; they render with a dashed "to confirm" style.
type Project = { name: string; place: string; status: string; photos: [string, string][]; stats: Stat[]; note: string; quote?: [string, string] };

const P: Record<string, Project[]> = {
  health: [
    {
      name: "Aspen River Veterinary Clinic",
      place: "Belcamp, MD",
      status: "Completed",
      photos: [
        ["/images/projects/aspen-reception.jpg", "Reception and waiting area"],
        ["/images/projects/aspen-surgery.jpg", "Surgery suite with glass-walled viewing"],
        ["/images/projects/aspen-treatment.jpg", "Treatment area"],
        ["/images/projects/aspen-corridor.jpg", "Clinical corridor"],
        ["/images/projects/aspen-progress-1.jpg", "During construction: framing and MEP rough-in"],
      ],
      stats: [
        ["7,000 SF", "Full interior buildout"],
        ["Clinical", "Exam, surgery and kennel spaces"],
        ["[Weeks]", "Start to turnover"],
        ["[On time]", "Opened on schedule"],
        ["[Yes/No]", "Inspections passed first time"],
        ["[0]", "Recordable incidents"],
      ],
      note: "A ground-up interior for a growing veterinary practice, from open shell to exam rooms, surgery suite, kennels and reception.",
      quote: ["[Client quote: one or two sentences from the practice owner]", "[Name, title]"],
    },
  ],
  fit: [
    {
      name: "HoCo Coworking",
      place: "Columbia, MD",
      status: "Under construction",
      photos: [["/images/services/tenant-fit-outs.jpg", "Representative photo; project photos at completion"]],
      stats: [
        ["18,875 SF", "Interior tenant fit-out"],
        ["Coworking", "Private offices, meeting rooms and a café"],
        ["[Weeks]", "Planned duration"],
        ["2026", "Delivery"],
        ["[Trades]", "Trades coordinated"],
        ["[0]", "Recordable incidents"],
      ],
      note: "A full coworking buildout with private offices, collaboration space and a central café.",
    },
    {
      name: "Howard University School of Business",
      place: "Washington, DC",
      status: "Completed",
      photos: [
        ["/images/projects/howard-1.jpg", "Upholstered banquette and storage wall"],
        ["/images/projects/howard-2.jpg", "Office with feature lighting"],
        ["/images/projects/howard-3.jpg", "Classroom with accent wall"],
      ],
      stats: [
        ["2nd floor", "Renovation"],
        ["Occupied", "Active university building"],
        ["[SF]", "Area"],
        ["[Weeks]", "Start to turnover"],
        ["[Yes/No]", "Classes stayed in session"],
        ["[0]", "Recordable incidents"],
      ],
      note: "A renovation of the second floor in an active university building, phased around classes and staff.",
      quote: ["[Client quote]", "[Name, title]"],
    },
  ],
  mf: [
    {
      name: "Berkshire Ballantyne Apartments",
      place: "Charlotte, NC",
      status: "Completed",
      photos: [["/images/projects/berkshire-1.jpg", "Berkshire Ballantyne"]],
      stats: [
        ["41,000 SF", "Corridors and elevator lobbies"],
        ["Occupied", "Residents in place throughout"],
        ["[Floors]", "Floors refreshed"],
        ["[Weeks]", "Start to turnover"],
        ["[Hours]", "Work hours per day, around residents"],
        ["[0]", "Recordable incidents"],
      ],
      note: "An interior refresh of the common corridors and elevator lobbies, phased floor by floor with residents at home.",
      quote: ["[Property manager quote]", "[Name, title]"],
    },
    {
      name: "Via Seaport Boston",
      place: "Boston, MA",
      status: "Completed",
      photos: [
        ["/images/projects/seaport-corridor-1.jpg", "Finished corridor: herringbone LVT and new base"],
        ["/images/projects/seaport-corridor-2.jpg", "Elevator lobby transition with cove lighting"],
        ["/images/projects/seaport-corridor-3.jpg", "Corridor run to unit entries"],
        ["/images/projects/seaport-corridor-4.jpg", "Floor transition at the lobby"],
      ],
      stats: [
        ["37,520 SF", "Corridors and elevator lobbies"],
        ["Occupied", "Residents in place throughout"],
        ["[Floors]", "Floors refreshed"],
        ["[Weeks]", "Start to turnover"],
        ["[Hours]", "Work hours per day, around residents"],
        ["[0]", "Recordable incidents"],
      ],
      note: "A common-area refresh of a high-rise residential tower in Boston's Seaport District: new flooring, base and finishes on every corridor.",
      quote: ["[Property manager quote]", "[Name, title]"],
    },
  ],
};

const SERVICES: [string, string, string, string?][] = [
  ["Preconstruction", "Budgets, value engineering and schedules built with your architect before you commit.", "/images/services/preconstruction.jpg"],
  ["Tenant fit-outs", "Interior buildouts for office, medical, retail and restaurant tenants, delivered to the lease date.", "/images/services/tenant-fit-outs.jpg", "fit"],
  ["Healthcare and clinical", "Surgery centers, medical office and clinical spaces built to pass inspection and open on time.", "/images/services/healthcare.jpg", "health"],
  ["Renovations and repositioning", "Upgrades in occupied buildings, phased so tenants, patients and residents keep running.", "/images/services/renovations.jpg"],
  ["Multifamily refreshes", "Corridors, lobbies, amenity spaces and unit turns, delivered floor by floor.", "/images/services/multifamily.jpg", "mf"],
  ["Exterior improvements", "Storefronts, facades and site work that complete the project inside and out.", "/images/services/exterior.jpg"],
];

export default function Services() {
  return (
    <section id="services" className="r-svc" aria-labelledby="svc-h">
      <div className="r-svc-head">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: "linear-gradient(90deg, #B5541C, #D9773A)" }}></div>
          <h2 id="svc-h" style={{ margin: "0", fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase" }}>{"Services"}</h2>
        </div>
        <p className="r-svc-h2">{"General contracting for commercial spaces, from first budget to final punch."}</p>
      </div>
      <div className="r-svc-grid">
        {SERVICES.map(([t, d, img, key], i) => {
          const inner = (
            <>
              <img src={img} alt="" loading="lazy" className="r-svc-img" />
              <span className="r-svc-n">{String(i + 1).padStart(2, "0")}</span>
              <span className="r-svc-t">{t}</span>
              <span className="r-svc-d">{d}</span>
              {key ? <span className="r-svc-more">{"See featured projects →"}</span> : null}
            </>
          );
          return key ? (
            <button key={t} type="button" className="r-svc-card r-svc-btn" data-open-dlg={`dlg-${key}`} aria-haspopup="dialog">{inner}</button>
          ) : (
            <div key={t} className="r-svc-card">{inner}</div>
          );
        })}
      </div>
      {Object.entries(P).map(([key, projects]) => (
        <dialog key={key} id={`dlg-${key}`} className="r-dlg" aria-label={SERVICES.find((s) => s[3] === key)?.[0]}>
          <div className="r-dlg-head">
            <span className="r-dlg-k">{"Featured projects"}</span>
            <span className="r-dlg-t">{SERVICES.find((s) => s[3] === key)?.[0]}</span>
            <button type="button" className="r-dlg-x" data-close-dlg="" aria-label="Close">{"×"}</button>
          </div>
          {projects.map((p) => (
            <article key={p.name} className="r-proj">
              <div className="r-proj-gal" data-gal="">
                <img src={p.photos[0][0]} alt={p.photos[0][1]} className="r-proj-main" />
                {p.photos.length > 1 ? (
                  <div className="r-proj-thumbs">
                    {p.photos.map(([src, alt], j) => (
                      <button key={src} type="button" className="r-proj-th" data-src={src} data-alt={alt} aria-pressed={j === 0 ? "true" : "false"}>
                        <img src={src} alt="" loading="lazy" />
                      </button>
                    ))}
                  </div>
                ) : null}
                <span className="r-proj-cap">{p.photos[0][1]}</span>
              </div>
              <div className="r-proj-info">
                <span className="r-proj-status">{p.status}</span>
                <h3 className="r-proj-name">{p.name}</h3>
                <span className="r-proj-place">{p.place}</span>
                <p className="r-proj-note">{p.note}</p>
                <div className="r-proj-stats">
                  {p.stats.map(([v, l]) => (
                    <div key={l} className={v.startsWith("[") ? "r-proj-stat is-tbd" : "r-proj-stat"}><span className="r-proj-v">{v}</span><span className="r-proj-l">{l}</span></div>
                  ))}
                </div>
                {p.quote ? (
                  <figure className={p.quote[0].startsWith("[") ? "r-proj-q is-tbd" : "r-proj-q"}>
                    <blockquote>{p.quote[0]}</blockquote>
                    <figcaption>{p.quote[1]}</figcaption>
                  </figure>
                ) : null}
              </div>
            </article>
          ))}
        </dialog>
      ))}
    </section>
  );
}
