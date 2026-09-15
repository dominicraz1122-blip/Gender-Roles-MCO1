import React from 'react';

export default function Understanding() {
  return (
    <section id="understanding" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center uppercase text-slate-900 mb-10">
          UNDERSTANDING GENDER ROLES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-full h-64 rounded-t-full overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" 
                alt="Definition" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 w-full">
              <div className="bg-slate-900 text-white text-center py-2.5 px-4 rounded-full text-xs font-black uppercase tracking-wider">
                1. DEFINITION & CONCEPTS
              </div>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed text-center px-2">
                Gender roles are learned societal expectations dictating behaviors, activities, and responsibilities associated with perceived gender identity within a given culture.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full h-64 rounded-t-full overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" 
                alt="Biological Sex vs Gender" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 w-full">
              <div className="bg-slate-900 text-white text-center py-2.5 px-4 rounded-full text-xs font-black uppercase tracking-wider">
                2. SEX VS. GENDER ROLES
              </div>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed text-center px-2">
                Biological sex refers to physical attributes (chromosomes, anatomy), whereas gender roles are fluid social constructs shaped by ongoing social conditioning.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full h-64 rounded-t-full overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80" 
                alt="Importance" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 w-full">
              <div className="bg-slate-900 text-white text-center py-2.5 px-4 rounded-full text-xs font-black uppercase tracking-wider">
                3. SOCIETAL IMPORTANCE
              </div>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed text-center px-2">
                Studying gender roles reveals systemic inequality, promotes human rights, and assists in building gender-responsive policy frameworks across the Philippines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}