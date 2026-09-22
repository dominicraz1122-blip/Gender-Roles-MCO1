import React from 'react';

export default function Issues() {
  return (
    <section id="issues" className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center uppercase text-slate-900 mb-10">
          GENDER ISSUES & REALITIES IN THE PHILIPPINES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-pink-600 text-white p-8 rounded-none flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-pink-200">ISSUE 01</span>
              <h3 className="text-xl font-black uppercase mt-2 mb-4">GENDER STEREOTYPES & DISCRIMINATION</h3>
              <p className="text-xs leading-relaxed text-pink-100">
                Deeply entrenched societal norms continue to limit choices for women and LGBTQ+ individuals in employment, healthcare, and education.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-pink-400/40 text-xs font-bold">
              READ REPORT →
            </div>
          </div>

          <div className="bg-purple-700 text-white p-8 rounded-none flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-purple-200">POLICY LEGISLATION</span>
              <h3 className="text-xl font-black uppercase mt-2 mb-4">MAGNA CARTA OF WOMEN (RA 9710)</h3>
              <p className="text-xs leading-relaxed text-purple-100">
                Comprehensive human rights law that mandates a 5% GAD budget allocation across all Philippine government agencies.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-purple-400/40 text-xs font-bold">
              VIEW LEGAL FRAMEWORK →
            </div>
          </div>

          <div className="bg-sky-600 text-white p-8 rounded-none flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-sky-200">ADVOCACY BILL</span>
              <h3 className="text-xl font-black uppercase mt-2 mb-4">SOGIESC EQUALITY BILL</h3>
              <p className="text-xs leading-relaxed text-sky-100">
                Pending legislation prohibiting discrimination based on sexual orientation, gender identity, expression, and sex characteristics.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-sky-400/40 text-xs font-bold">
              MONITOR BILL STATUS →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}