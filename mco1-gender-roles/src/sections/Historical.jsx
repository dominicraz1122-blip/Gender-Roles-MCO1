import React from 'react';

export default function Historical() {
  return (
    <section id="historical" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center uppercase text-slate-900 mb-10">
          HISTORICAL PERSPECTIVE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border-t-4 border-purple-600 shadow-sm rounded-b-lg">
            <span className="text-xs font-black uppercase text-purple-600 tracking-wider">Pre-Colonial Era</span>
            <h3 className="text-lg font-extrabold text-slate-900 mt-1 mb-3">Egalitarian Beginnings & Babaylan</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Prior to foreign colonization, indigenous Philippine societies were largely egalitarian. Women held equal rights to property, leadership, and divorce. Spiritual authority resided in the <strong className="text-slate-900">Babaylan</strong>—healers and spiritual leaders who held prominent positions alongside datus.
            </p>
          </div>

          <div className="bg-white p-6 border-t-4 border-pink-600 shadow-sm rounded-b-lg">
            <span className="text-xs font-black uppercase text-pink-600 tracking-wider">Spanish Colonial Era</span>
            <h3 className="text-lg font-extrabold text-slate-900 mt-1 mb-3">Patriarchy & Domestic Subjugation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Spanish colonization imposed Western patriarchal structures and Catholic doctrine. Women were relegated to domestic spaces, expected to exemplify submissiveness (as modeled after Maria Clara), and lost independent legal rights under foreign civil codes.
            </p>
          </div>

          <div className="bg-white p-6 border-t-4 border-indigo-600 shadow-sm rounded-b-lg">
            <span className="text-xs font-black uppercase text-indigo-600 tracking-wider">American Era & Modern Era</span>
            <h3 className="text-lg font-extrabold text-slate-900 mt-1 mb-3">Public Education & Suffrage</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The American occupation introduced universal public education, enabling women to enter professional fields. In 1937, Filipino women won the right to vote in a landmark national plebiscite, laying the foundation for modern rights advocacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}