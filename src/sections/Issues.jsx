import React, { useState } from 'react';

const issues = [
  {
    number: '01',
    category: 'ISSUE 01',
    title: 'GENDER STEREOTYPES & DISCRIMINATION',
    description:
      'Deeply entrenched societal norms continue to limit choices for women and LGBTQ+ individuals in employment, healthcare, and education.',
    action: 'READ REPORT →',
    theme: 'pink',
  },
  {
    number: '02',
    category: 'POLICY LEGISLATION',
    title: 'MAGNA CARTA OF WOMEN (RA 9710)',
    description:
      'Comprehensive human rights law that mandates a 5% GAD budget allocation across all Philippine government agencies.',
    action: 'VIEW LEGAL FRAMEWORK →',
    theme: 'purple',
  },
  {
    number: '03',
    category: 'ADVOCACY BILL',
    title: 'SOGIESC EQUALITY BILL',
    description:
      'Pending legislation prohibiting discrimination based on sexual orientation, gender identity, expression, and sex characteristics.',
    action: 'MONITOR BILL STATUS →',
    theme: 'blue',
  },
];

const themeClasses = {
  pink: {
    card: 'issues-card--pink',
    category: 'issues-category--pink',
    number: 'issues-number--pink',
    line: 'issues-line--pink',
  },
  purple: {
    card: 'issues-card--purple',
    category: 'issues-category--purple',
    number: 'issues-number--purple',
    line: 'issues-line--purple',
  },
  blue: {
    card: 'issues-card--blue',
    category: 'issues-category--blue',
    number: 'issues-number--blue',
    line: 'issues-line--blue',
  },
};

export default function Issues() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="issues" className="issues-exhibition">
      <div className="issues-exhibition__container">

        {/* SECTION HEADER */}
        <header className="issues-header">

          <div className="issues-kicker">
            <span className="issues-kicker-line"></span>
            <span>05 / 09 — ISSUES & REALITIES</span>
          </div>

          <div className="issues-heading-row">

            <h2 className="issues-title">
              GENDER ISSUES
              <span>& REALITIES</span>
            </h2>

            <div className="issues-intro">
              <div className="issues-intro-mark">!</div>

              <p>
                Areas of inequality, legal frameworks, and continuing
                conversations surrounding gender in the Philippines.
              </p>
            </div>

          </div>
        </header>

        {/* ISSUE DISPLAY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start w-full">

          {issues.map((issue, index) => {
            const theme = themeClasses[issue.theme];
            const isHovered = hoveredIndex === index;

            return (
              <article
                key={issue.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`issues-card ${theme.card} cursor-pointer transition-all duration-300 ease-in-out relative flex flex-col overflow-hidden shadow-lg`}
                style={{
                  maxHeight: isHovered ? '400px' : '160px',
                }}
              >

                {/* LARGE NUMBER */}
                <div className={`issues-number ${theme.number}`}>
                  {issue.number}
                </div>

                {/* CARD CONTENT */}
                <div 
                  className="issues-card__main flex flex-col transition-all duration-300"
                  style={{ width: '100%' }}
                >

                  <div className={`issues-category ${theme.category}`}>
                    {issue.category}
                  </div>

                  <h3 className="issues-card__title">
                    {issue.title}
                  </h3>

                  <div className={`issues-line ${theme.line}`}></div>

                  {/* HOVER DROPDOWN CONTAINER */}
                  <div 
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: isHovered ? '250px' : '0px',
                      opacity: isHovered ? 1 : 0,
                      marginTop: isHovered ? '1.25rem' : '0rem',
                    }}
                  >
                    <p className="issues-card__description">
                      {issue.description}
                    </p>

                    {/* ACTION */}
                    <div className="issues-card__action mt-4">
                      <span>{issue.action}</span>
                      <span className="issues-card__action-arrow">↗</span>
                    </div>
                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* BOTTOM EDITORIAL MARKER */}
        <div className="issues-footer">
          <span>EXAMINE</span>
          <span className="issues-footer__line"></span>
          <span>QUESTION</span>
          <span className="issues-footer__line"></span>
          <span>REFLECT</span>
        </div>

      </div>
    </section>
  );
}