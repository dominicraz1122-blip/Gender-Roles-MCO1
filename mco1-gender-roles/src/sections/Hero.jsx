import React from 'react';

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="relative min-h-[550px] bg-slate-200 flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-90"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80')` }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="bg-white p-8 sm:p-12 rounded-none max-w-xl shadow-2xl border-l-8 border-pink-600">
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900 leading-none mb-4 font-sans">
            HELLO, WE'RE GROUP 01: <br />
            <span className="text-pink-600">PHILIPPINE GENDER ROLES</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
            We present a critical exploration and creative analysis of historical and contemporary gender roles in the Philippines for Major Course Output 1.
          </p>
          <button 
            onClick={() => scrollToSection('understanding')}
            className="bg-pink-600 hover:bg-pink-700 text-white font-extrabold text-sm px-8 py-3 rounded-full transition-colors tracking-wide uppercase"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}