import React from 'react';

export default function Analysis() {
  const paragraphText = "Analyzing Philippine gender history reveals a striking dichotomy: while pre-colonial societies celebrated female spiritual leadership (Babaylan), centuries of colonial rule embedded patriarchal double standards. Although modern legislative frameworks like RA 9710 guarantee rights on paper, everyday practice requires active social reframing to eliminate domestic burdens and discrimination.";

  // Split text into individual words for a cascading hover-float effect
  const words = paragraphText.split(' ');

  return (
    <section id="analysis" className="analysis-editorial">
      <div className="analysis-editorial__container">

        {/* SECTION MARKER */}
        <div className="analysis-kicker">
          <span className="analysis-kicker-line"></span>
          <span>06 / 09 — ANALYSIS & REFLECTION</span>
        </div>

        {/* EDITORIAL HEADER */}
        <div className="analysis-header group cursor-pointer">
          <h2 className="analysis-title transition-transform duration-300 group-hover:-translate-y-1">
            ANALYSIS
            <span className="block transition-transform duration-300 group-hover:-translate-y-1 text-pink-600">
              & REFLECTION
            </span>
          </h2>

          <div className="analysis-header-note">
            <span className="analysis-header-number">06</span>
            <p>
              A critical reflection connecting historical patterns with
              contemporary realities.
            </p>
          </div>
        </div>

        {/* MAIN EDITORIAL */}
        <article className="analysis-feature group/feature">

          {/* LARGE QUOTATION MARK */}
          <div className="analysis-quote-mark transition-transform duration-500 group-hover/feature:-translate-y-2" aria-hidden="true">
            “
          </div>

          <div className="analysis-feature__top">
            <span className="analysis-feature__label">
              CRITICAL COMPARATIVE REFLECTION
            </span>

            <span className="analysis-feature__index">
              REFLECTION / 01
            </span>
          </div>

          <div className="analysis-feature__content">
            {/* FLOATING WORDS PARAGRAPH ON HOVER */}
            <p className="analysis-feature__text flex flex-wrap gap-x-[6px] gap-y-1">
              {words.map((word, index) => {
                // Keep 'Babaylan' and 'RA 9710' styled or formatted nicely
                const isSpecial = word.includes('Babaylan') || word.includes('RA');
                
                return (
                  <span
                    key={index}
                    className="inline-block transition-transform duration-300 ease-out hover:-translate-y-2 hover:text-pink-600 cursor-default"
                    style={{ transitionDelay: `${(index % 10) * 15}ms` }}
                  >
                    {isSpecial ? <em>{word}</em> : word}
                  </span>
                );
              })}
            </p>
          </div>

          <div className="analysis-feature__bottom">
            <span>HISTORY</span>
            <span className="analysis-feature__line"></span>
            <span>PRESENT</span>
            <span className="analysis-feature__line"></span>
            <span>REFLECTION</span>
          </div>

        </article>

        {/* EDITORIAL FOOTER */}
        <div className="analysis-footer">
          <span>06</span>
          <div className="analysis-footer__line"></div>
          <span>09</span>
        </div>

      </div>
    </section>
  );
}