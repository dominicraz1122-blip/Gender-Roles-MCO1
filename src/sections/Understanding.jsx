import React from 'react';

const understandingItems = [
  {
    number: '01',
    label: 'DEFINITION & CONCEPTS',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=85',
    alt: 'Definition',
    text:
      'Gender roles are learned societal expectations dictating behaviors, activities, and responsibilities associated with perceived gender identity within a given culture.',
  },
  {
    number: '02',
    label: 'SEX VS. GENDER ROLES',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85',
    alt: 'Biological Sex vs Gender',
    text:
      'Biological sex refers to physical attributes (chromosomes, anatomy), whereas gender roles are fluid social constructs shaped by ongoing social conditioning.',
  },
  {
    number: '03',
    label: 'SOCIETAL IMPORTANCE',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85',
    alt: 'Importance',
    text:
      'Studying gender roles reveals systemic inequality, promotes human rights, and assists in building gender-responsive policy frameworks across the Philippines.',
  },
];

export default function Understanding() {
  return (
    <section id="understanding" className="understanding-exhibition">
      <div className="understanding-exhibition__container">

        {/* Section heading */}
        <header className="understanding-exhibition__header">
          <div className="understanding-exhibition__eyebrow">
            <span className="understanding-exhibition__eyebrow-line" />
            02 / 09 · FOUNDATIONS
          </div>

          <div className="understanding-exhibition__heading-row">
            <h2 className="understanding-exhibition__title">
              UNDERSTANDING
              <br />
              <span>GENDER ROLES</span>
            </h2>

            <div className="understanding-exhibition__intro">
              <span className="understanding-exhibition__intro-mark">
                +
              </span>

              <p>
                A starting point for examining the concepts, distinctions,
                and social significance surrounding gender roles.
              </p>
            </div>
          </div>
        </header>

        {/* Exhibition cards */}
        <div className="understanding-exhibition__grid">
          {understandingItems.map((item, index) => (
            <article
              key={item.number}
              className={`understanding-card ${
                index % 2 === 1 ? 'understanding-card--offset' : ''
              }`}
            >
              <div className="understanding-card__number">
                {item.number}
              </div>

              {/* Image wrap with hover pop-up overlay */}
              <div className="understanding-card__image-wrap group relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="understanding-card__image transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className="understanding-card__image-overlay"
                  aria-hidden="true"
                />

                <span className="understanding-card__image-label">
                  EXHIBIT {item.number}
                </span>

                {/* Pop-up information layer on hover */}
                <div className="absolute inset-0 bg-black/85 text-white p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="text-xs uppercase tracking-widest text-[#c2185b] font-bold mb-2">
                    {item.label}
                  </span>
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Only the title remains outside */}
              <div className="understanding-card__content">
                <h3 className="understanding-card__title">
                  {item.label}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Section transition */}
        <div className="understanding-exhibition__transition">
          <span>FROM CONCEPTS</span>

          <span className="understanding-exhibition__transition-line" />

          <span>TO CONTEXT</span>
        </div>
      </div>
    </section>
  );
}