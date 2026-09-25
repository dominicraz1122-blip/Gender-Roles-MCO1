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
    fullReport: {
      subtitle: 'Comprehensive Analysis on Societal Norms & Employment Barriers',
      sections: [
        {
          heading: 'Introduction to Structural Biases',
          text: 'Deeply entrenched patriarchal traditions and cultural norms in the Philippines continue to construct rigid boundaries around gender roles. From early childhood education to corporate boardrooms, expectations dictate specific paths for men, women, and non-binary individuals.'
        },
        {
          heading: 'Employment & Economic Marginalization',
          text: 'Women and LGBTQ+ individuals frequently face systemic hiring biases, wage gaps, and underrepresentation in leadership tracks. Informal sector labor and domestic work—predominantly female-led—often lack standard social protection and legal oversight.'
        },
        {
          heading: 'Call to Action & Educational Reform',
          text: 'Dismantling these stereotypes requires a multi-pronged approach involving gender-responsive pedagogy in academic institutions, strict anti-discrimination policies in workplaces, and continuous public discourse.'
        }
      ]
    }
  },
  {
    number: '02',
    category: 'POLICY LEGISLATION',
    title: 'MAGNA CARTA OF WOMEN (RA 9710)',
    description:
      'Comprehensive human rights law that mandates a 5% GAD budget allocation across all Philippine government agencies.',
    action: 'VIEW LEGAL FRAMEWORK →',
    theme: 'purple',
    fullReport: {
      subtitle: 'Republic Act No. 9710 Legal Framework & Implementation',
      sections: [
        {
          heading: 'Overview of RA 9710',
          text: 'The Magna Carta of Women is a comprehensive human rights law designed to eliminate discrimination through the recognition, protection, fulfilling, and promotion of the rights of Filipino women, especially those in marginalized sectors.'
        },
        {
          heading: 'The 5% GAD Budget Mandate',
          text: 'A cornerstone of the law is the requirement for all government departments, agencies, bureaus, state universities, and local government units to allocate at least 5% of their total budgets to Gender and Development (GAD) programs, projects, and activities.'
        },
        {
          heading: 'Impact and Accountability',
          text: 'While implementation varies across regions, the GAD budget has driven institutional gender mainstreaming, funding maternal care, legal aid, and women livelihood programs nationwide.'
        }
      ]
    }
  },
  {
    number: '03',
    category: 'ADVOCACY BILL',
    title: 'SOGIESC EQUALITY BILL',
    description:
      'Pending legislation prohibiting discrimination based on sexual orientation, gender identity, expression, and sex characteristics.',
    action: 'MONITOR BILL STATUS →',
    theme: 'blue',
    fullReport: {
      subtitle: 'Legislative Tracking & Protection Framework',
      sections: [
        {
          heading: 'Understanding SOGIESC',
          text: 'The Sexual Orientation, Gender Identity, Expression, and Sex Characteristics (SOGIESC) Equality Bill seeks to guarantee equal protection and non-discrimination for all citizens regardless of their identity.'
        },
        {
          heading: 'Prohibited Discriminatory Acts',
          text: 'The bill outlines penalties for acts such as denying access to employment, educational institutions, healthcare services, and public accommodations based on an individual’s SOGIESC, as well as profiling or harassment.'
        },
        {
          heading: 'Current Legislative Status',
          text: 'Advocacy groups, human rights organizations, and academic institutions continue to lobby legislative bodies for passage, emphasizing that human rights protection is a fundamental prerequisite for inclusive national development.'
        }
      ]
    }
  },
];

const themeClasses = {
  pink: {
    card: 'issues-card--pink',
    category: 'issues-category--pink',
    number: 'issues-number--pink',
    line: 'issues-line--pink',
    accent: 'text-pink-600',
    border: 'border-pink-600',
    bg: 'bg-pink-50',
  },
  purple: {
    card: 'issues-card--purple',
    category: 'issues-category--purple',
    number: 'issues-number--purple',
    line: 'issues-line--purple',
    accent: 'text-purple-600',
    border: 'border-purple-600',
    bg: 'bg-purple-50',
  },
  blue: {
    card: 'issues-card--blue',
    category: 'issues-category--blue',
    number: 'issues-number--blue',
    line: 'issues-line--blue',
    accent: 'text-blue-600',
    border: 'border-blue-600',
    bg: 'bg-blue-50',
  },
};

export default function Issues() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeReport, setActiveReport] = useState(null);

  // If a report is clicked, display the dedicated full report page view
  if (activeReport) {
    const theme = themeClasses[activeReport.theme];
    return (
      <section className="issues-exhibition py-20 bg-[#faf9f6] min-h-screen">
        <div className="issues-exhibition__container max-w-4xl mx-auto px-6">
          
          {/* BACK BUTTON */}
          <button 
            onClick={() => setActiveReport(null)}
            className="mb-8 text-xs font-mono tracking-widest uppercase flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            ← BACK TO ISSUES & REALITIES
          </button>

          {/* REPORT HEADER */}
          <div className="border-b-2 border-black pb-6 mb-8">
            <span className={`text-xs font-mono tracking-widest font-bold uppercase ${theme.accent}`}>
              {activeReport.category} / DETAILED REPORT
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 mt-2 mb-4">
              {activeReport.title}
            </h1>
            <p className="text-lg text-gray-600 font-medium">
              {activeReport.fullReport.subtitle}
            </p>
          </div>

          {/* REPORT CONTENT SECTIONS */}
          <div className="space-y-8 bg-white p-8 sm:p-12 border border-gray-200 shadow-sm rounded-lg">
            {activeReport.fullReport.sections.map((sec, i) => (
              <div key={i} className="border-b border-gray-100 pb-6 last:border-none last:pb-0">
                <h3 className={`text-xl font-bold mb-3 ${theme.accent}`}>
                  0{i + 1}. {sec.heading}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>

          {/* RETURN FOOTER ACTION */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => setActiveReport(null)}
              className="px-8 py-3 bg-black text-white text-xs font-mono tracking-widest uppercase rounded hover:bg-gray-800 transition-colors"
            >
              Close Report & Return
            </button>
          </div>

        </div>
      </section>
    );
  }

  // Default Grid View
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
                  maxHeight: isHovered ? '420px' : '160px',
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

                    {/* ACTION TRIGGERING NEW REPORT PAGE */}
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveReport(issue);
                      }}
                      className="issues-card__action mt-4 cursor-pointer hover:opacity-75"
                    >
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