import React from 'react';

const references = [
  {
    number: '01',
    source: 'Commission on Higher Education. (2015).',
    title:
      'CHED Memorandum Order No. 01, s. 2015: Guidelines on Gender Mainstreaming in HEIs',
    url: 'https://ched.gov.ph/wp-content/uploads/2017/10/CMO-No.-01-s.-2015.pdf',
  },
  {
    number: '02',
    source: 'Republic Act No. 9710. (2009).',
    title: 'The Magna Carta of Women',
    publisher: 'Official Gazette of the Republic of the Philippines.',
    url: 'https://officialgazette.gov.ph/2009/08/14/republic-act-no-9710/',
  },
  {
    number: '03',
    source: 'Republic Act No. 7192. (1992).',
    title: 'Women in Development and Nation Building Act',
    url: 'https://lawphil.net/statutes/repacts/ra1992/ra_7192_1992.html',
  },
  {
    number: '04',
    source: 'United Nations. (1979).',
    title:
      'Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW)',
    url: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-elimination-all-forms-discrimination-against-women',
  },
];

export default function References() {
  return (
    <footer id="references" className="references-archive">
      <div className="references-archive__container">

        {/* SECTION MARKER */}
        <div className="references-kicker">
          <span className="references-kicker-line"></span>
          <span>09 / 09 — SOURCES & DOCUMENTATION</span>
        </div>

        {/* HEADER */}
        <div className="references-header">
          <div>
            <h2 className="references-title">
              ACADEMIC
              <span>REFERENCES</span>
            </h2>
          </div>

          <div className="references-intro">
            <span className="references-intro-number">09</span>
            <p>
              Sources and documents supporting the academic exploration of
              gender roles in Philippine society.
            </p>
          </div>
        </div>

        {/* REFERENCE LIST */}
        <div className="references-list">
          {references.map((reference) => (
            <a
              key={reference.number}
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reference-item group block text-inherit no-underline"
            >
              <div className="reference-number">
                {reference.number}
              </div>

              <div className="reference-content">
                <p className="reference-source">
                  {reference.source}
                </p>

                <p className="reference-title transition-colors duration-200 group-hover:text-pink-400">
                  <i>{reference.title}</i>
                  {reference.publisher && (
                    <span> {reference.publisher}</span>
                  )}
                </p>
              </div>

              <div className="reference-mark transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">
                ↗
              </div>
            </a>
          ))}
        </div>

        {/* ARCHIVE FOOTER */}
        <div className="references-archive-bar">
          <span>DOCUMENT</span>
          <span className="references-archive-bar__line"></span>
          <span>VERIFY</span>
          <span className="references-archive-bar__line"></span>
          <span>LEARN</span>
        </div>

        {/* ORIGINAL FOOTER INFORMATION */}
        <div className="references-bottom">
          <p>MCO 1 Academic Website | Built for Gender and Society Course</p>
          <p>Inspired by LGBT Foundation Design System</p>
        </div>

      </div>
    </footer>
  );
}