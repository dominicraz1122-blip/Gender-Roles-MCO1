import React from 'react';
import p6 from '../assets/P1.jpg'; // Background image

export default function Conclusion() {
  return (
    <section 
      id="conclusion" 
      className="conclusion-editorial relative bg-cover bg-center py-24 px-4 sm:px-6"
      style={{ backgroundImage: `url(${p6})` }}
    >
      {/* Dark overlay so the background image is moody and the glass effect pops */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      <div className="conclusion-editorial__container relative z-10 max-w-4xl mx-auto">

        {/* SECTION MARKER */}
        <div className="conclusion-kicker text-gray-300 flex items-center gap-4 mb-8 text-xs tracking-widest uppercase font-mono">
          <span className="conclusion-kicker-line w-10 h-px bg-gray-400"></span>
          <span>08 / 09 — CONCLUSION</span>
        </div>

        {/* MAIN LIQUID GLASS CLOSING STATEMENT */}
        <div className="conclusion-main text-center flex flex-col items-center justify-center py-24 px-8 cursor-pointer group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500 hover:bg-white/15 hover:border-white/30">

          <div className="conclusion-number transition-transform duration-500 ease-out group-hover:-translate-y-4 relative z-10 text-pink-300 font-mono text-xl font-bold">
            08
          </div>

          <h2 className="conclusion-title transition-transform duration-500 ease-out group-hover:-translate-y-2 relative z-10 text-white text-5xl sm:text-6xl font-black tracking-tight mt-2">
            CONCLUSION
          </h2>

          <div className="conclusion-rule w-16 h-0.5 my-6 transition-all duration-500 ease-out group-hover:w-32 bg-pink-500 relative z-10"></div>

          {/* Description container */}
          <div className="overflow-hidden max-w-2xl mx-auto relative z-10">
            <p className="conclusion-text opacity-0 max-h-0 translate-y-6 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:max-h-96 group-hover:translate-y-0 text-gray-100 text-lg leading-relaxed font-light">
              Gender roles in the Philippines are continuous cultural constructs. Overcoming systemic barriers requires a unified approach combining educational reform, legislative support like the SOGIESC Equality Bill, and grassroots community action.
            </p>
          </div>

        </div>

        {/* CLOSING VISUAL */}
        <div className="conclusion-visual mt-16 flex items-center justify-between text-gray-300">
          <div className="conclusion-visual__left flex items-center gap-4 flex-1">
            <span className="conclusion-visual__label font-mono text-xs tracking-widest">REFLECT</span>
            <span className="conclusion-visual__line flex-1 h-px bg-white/20"></span>
          </div>

          <div className="conclusion-visual__center px-6">
            <span className="conclusion-plus text-pink-400 font-bold text-xl">+</span>
          </div>

          <div className="conclusion-visual__right flex items-center gap-4 flex-1 justify-end">
            <span className="conclusion-visual__line flex-1 h-px bg-white/20"></span>
            <span className="conclusion-visual__label font-mono text-xs tracking-widest">CONTINUE</span>
          </div>
        </div>

        {/* FINAL MARKER */}
        <div className="conclusion-footer mt-10 flex items-center gap-6 text-gray-300 font-semibold text-sm">
          <span>08</span>
          <div className="conclusion-footer__line flex-1 h-0.5 bg-white/30"></div>
          <span>09</span>
        </div>

      </div>
    </section>
  );
}