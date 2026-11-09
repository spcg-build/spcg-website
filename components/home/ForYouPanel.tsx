// Overlap: stats card breaks the hero edge; audience chips sit opposite
export default function ForYouPanel() {
  return (
    <section id="foryou" className="r-foryou" hidden aria-live="polite">
      <div className="r-fy-card">
        <div className="r-fy-top">
          <span className="r-fy-eyebrow">
            <span className="r-dot"></span>
            <span id="fyEyebrow">{"For you"}</span>
          </span>
          <button type="button" id="fyClear" className="r-fy-clear">{"Show the full site"}</button>
        </div>
        <h2 id="fyTitle" className="r-fy-title"></h2>
        <div id="fyPoints" className="r-fy-points"></div>
        <div className="r-fy-actions">
          <a id="fyCta" href="/#contact" className="r-fy-cta"></a>
          <span className="r-fy-jump">
            {"Jump to "}
            <span id="fyJump"></span>
          </span>
        </div>
      </div>
    </section>
  );
}
