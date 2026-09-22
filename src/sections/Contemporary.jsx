import React from 'react';

const items = [
  {
    number: '01',
    label: 'FAMILY STRUCTURES',
    desc: 'Women disproportionately handle domestic labor and caregiving, though dual-income households are transforming modern paternal roles.',
    accent: 'amber',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9.5V21h13V9.5" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    number: '02',
    label: 'EDUCATION SECTOR',
    desc: 'Filipinas achieve high tertiary graduation rates, yet field segregation persists in technical and STEM disciplines.',
    accent: 'teal',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m3 9 9-5 9 5-9 5-9-5Z" />
        <path d="M7 11.5V16c2.8 2.3 7.2 2.3 10 0v-4.5" />
        <path d="M21 9v6" />
      </svg>
    ),
  },
  {
    number: '03',
    label: 'WORKPLACE & ECONOMY',
    desc: 'High participation in BPOs and service sectors, but glass ceilings remain in top corporate executive tiers.',
    accent: 'blue',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </svg>
    ),
  },
  {
    number: '04',
    label: 'MEDIA REPRESENTATION',
    desc: 'Transitioning from traditional stereotypical roles to diverse gender portrayals in television and film.',
    accent: 'violet',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m10 9 5 3-5 3V9Z" />
      </svg>
    ),
  },
  {
    number: '05',
    label: 'POLITICAL LEADERSHIP',
    desc: 'The Philippines has elected two female presidents, yet local legislative seats remain male-dominated.',
    accent: 'rose',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 20h16" />
        <path d="M6 20V9l6-4 6 4v11" />
        <path d="M9 20v-5h6v5" />
        <path d="M12 5V3" />
      </svg>
    ),
  },
  {
    number: '06',
    label: 'COMMUNITY & GAD',
    desc: 'Barangay Gender and Development (GAD) councils drive grassroots gender sensitivity initiatives across cities.',
    accent: 'emerald',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3.5 20c.5-3.3 2.4-5 5.5-5s5 1.7 5.5 5" />
        <path d="M14 15.5c2.8-.3 5 1.1 5.5 4.5" />
      </svg>
    ),
  },
];

const accentStyles = {
  amber: {
    text: 'text-amber-600',
    line: 'bg-amber-400',
  },
  teal: {
    text: 'text-teal-600',
    line: 'bg-teal-500',
  },
  blue: {
    text: 'text-blue-600',
    line: 'bg-blue-500',
  },
  violet: {
    text: 'text-violet-600',
    line: 'bg-violet-500',
  },
  rose: {
    text: 'text-rose-600',
    line: 'bg-rose-500',
  },
  emerald: {
    text: 'text-emerald-600',
    line: 'bg-emerald-500',
  },
};

export default function Contemporary() {
  return (
    <section
      id="contemporary"
      className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION INTRO */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[3px] w-12 bg-pink-600"></span>

              <span className="text-xs font-black tracking-[0.22em] text-slate-500">
                04 / 09 — PRESENT DAY
              </span>
            </div>

            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-7xl">
              Contemporary
              <span className="block text-pink-600">
                Gender Roles
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-lg font-black text-white">
                +
              </div>

              <p className="max-w-sm text-sm font-medium leading-7 text-slate-600 sm:text-base">
                Gender roles continue to take different forms across family,
                education, work, media, leadership, and community life.
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {items.map((item) => {
            const accent = accentStyles[item.accent];

            return (
              <article
                key={item.label}
                className="
                  group relative overflow-hidden
                  border border-slate-200
                  bg-slate-50
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-slate-300
                  hover:bg-white
                  hover:shadow-xl
                  cursor-pointer
                "
              >

                {/* DARK SIDE PANEL */}
                <div
                  className="
                    absolute left-0 top-0 bottom-0
                    flex w-14 items-start justify-center
                    bg-slate-800
                    pt-7
                    transition-all duration-300
                    group-hover:bg-slate-900
                    sm:w-16 sm:pt-8
                  "
                >
                  <span className="font-mono text-xs font-bold tracking-[0.12em] text-white sm:text-sm">
                    {item.number}
                  </span>
                </div>

                {/* TOP ACCENT LINE */}
                <div
                  className={`
                    absolute left-0 top-0
                    h-1 w-full
                    ${accent.line}
                  `}
                />

                {/* CARD CONTENT */}
                <div className="ml-14 p-6 sm:ml-16 sm:p-8">

                  {/* CARD HEADER */}
                  <div className="flex items-start justify-between gap-5">

                    <div className="max-w-xl">
                      <h3 className="text-xl font-black uppercase leading-tight tracking-tight text-slate-900 sm:text-2xl">
                        {item.label}
                      </h3>

                      <div
                        className={`
                          mt-4 h-px w-10
                          ${accent.line}
                          transition-all duration-300
                          group-hover:w-20
                        `}
                      />
                    </div>

                    {/* ICON */}
                    <div
                      className={`
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-slate-200
                        bg-white
                        ${accent.text}
                        transition-all duration-300
                        group-hover:scale-105
                        group-hover:shadow-sm
                      `}
                    >
                      <div className="h-5 w-5">
                        {item.icon}
                      </div>
                    </div>

                  </div>

                  {/* DESCRIPTION - HIDDEN BY DEFAULT, POPS UP ON HOVER */}
                  <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-h-40 group-hover:mt-5">
                    <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                      {item.desc}
                    </p>
                  </div>

                </div>

              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}