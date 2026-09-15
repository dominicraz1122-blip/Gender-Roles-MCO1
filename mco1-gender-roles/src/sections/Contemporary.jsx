import React from 'react';

export default function Contemporary() {
  const items = [
    { label: 'FAMILY STRUCTURES', desc: 'Women disproportionately handle domestic labor and caregiving, though dual-income households are transforming modern paternal roles.' },
    { label: 'EDUCATION SECTOR', desc: 'Filipinas achieve high tertiary graduation rates, yet field segregation persists in technical and STEM disciplines.' },
    { label: 'WORKPLACE & ECONOMY', desc: 'High participation in BPOs and service sectors, but glass ceilings remain in top corporate executive tiers.' },
    { label: 'MEDIA REPRESENTATION', desc: 'Transitioning from traditional stereotypical roles to diverse gender portrayals in television and film.' },
    { label: 'POLITICAL LEADERSHIP', desc: 'The Philippines has elected two female presidents, yet local legislative seats remain male-dominated.' },
    { label: 'COMMUNITY & GAD', desc: 'Barangay Gender and Development (GAD) councils drive grassroots gender sensitivity initiatives across cities.' },
  ];

  return (
    <section id="contemporary" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center uppercase text-slate-900 mb-10">
          CONTEMPORARY GENDER ROLES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
              <h3 className="text-sm font-black text-slate-900 tracking-wider uppercase mb-2">{item.label}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}