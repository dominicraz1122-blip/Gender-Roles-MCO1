import React from 'react';

const historicalPeriods = [
  {
    number: '01',
    era: 'Pre-Colonial Era',
    title: 'Egalitarian Beginnings & Babaylan',
    accent: 'gold',
    content: (
      <>
        Prior to foreign colonization, indigenous Philippine societies were largely egalitarian. Women held equal rights to property, leadership, and divorce. Spiritual authority resided in the <strong className="historical-highlight">Babaylan</strong>—healers and spiritual leaders who held prominent positions alongside datus.
      </>
    ),
  },
  {
    number: '02',
    era: 'Spanish Colonial Era',
    title: 'Patriarchy & Domestic Subjugation',
    accent: 'pink',
    content: (
      <>
        Spanish colonization imposed Western patriarchal structures and Catholic doctrine. Women were relegated to domestic spaces, expected to exemplify submissiveness (as modeled after Maria Clara), and lost independent legal rights under foreign civil codes.
      </>
    ),
  },
  {
    number: '03',
    era: 'American Era & Modern Era',
    title: 'Public Education & Suffrage',
    accent: 'blue',
    content: (
      <>
        The American occupation introduced universal public education, enabling women to enter professional fields. In 1937, Filipino women won the right to vote in a landmark national plebiscite, laying the foundation for modern rights advocacy.
      </>
    ),
  },
];

export default function Historical() {
  return (
    <section id="historical" className="historical-section">
      <div className="historical-container">

        {/* SECTION INTRO */}
        <div className="historical-header">

          <div className="historical-kicker">
            <span className="historical-kicker-line"></span>
            <span>03 / 09 — HISTORY</span>
          </div>

          <div className="historical-heading-row">

            <div>
              <h2 className="historical-title">
                HISTORICAL
                <span>PERSPECTIVE</span>
              </h2>
            </div>

            <div className="historical-intro">
              <div className="historical-intro-mark">+</div>

              <p>
                A journey through changing ideas, structures, and expectations
                surrounding gender roles in Philippine society.
              </p>
            </div>

          </div>
        </div>

        {/* THEN → NOW STORY MARKER */}
        <div className="historical-story-marker">
          <span>THEN</span>
          <span className="historical-story-line"></span>
          <span className="historical-story-arrow">→</span>
          <span>NOW</span>
        </div>

        {/* TIMELINE */}
        <div className="historical-timeline">

          {historicalPeriods.map((period) => (
            <article
              key={period.number}
              className={`historical-period historical-period-${period.accent} group cursor-pointer`}
            >

              {/* TIMELINE NUMBER */}
              <div className="historical-number">
                {period.number}
              </div>

              {/* TIMELINE LINE */}
              <div className="historical-marker">
                <span></span>
              </div>

              {/* CONTENT */}
              <div className="historical-content">

                <div className="historical-era">
                  {period.era}
                </div>

                <h3 className="historical-period-title">
                  {period.title}
                </h3>

                {/* Hidden by default, pops up/fades in on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="historical-divider"></div>

                  <p className="historical-description">
                    {period.content}
                  </p>
                </div>

              </div>

              {/* SIDE LABEL */}
              <div className="historical-side-label">
                PHILIPPINE
                <br />
                HISTORY
              </div>

            </article>
          ))}

        </div>

        {/* BOTTOM STORY LINE */}
        <div className="historical-footer-line">
          <span>03</span>
          <div></div>
          <span>09</span>
        </div>

      </div>
    </section>
  );
}