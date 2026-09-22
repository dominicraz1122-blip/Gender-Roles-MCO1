import React from 'react';

export default function Conclusion() {
  return (
    <section id="conclusion" className="conclusion-editorial">
      <div className="conclusion-editorial__container">

        {/* SECTION MARKER */}
        <div className="conclusion-kicker">
          <span className="conclusion-kicker-line"></span>
          <span>08 / 09 — CONCLUSION</span>
        </div>

        {/* MAIN CLOSING STATEMENT */}
        <div className="conclusion-main text-center flex flex-col items-center justify-center py-20 cursor-pointer group">

          <div className="conclusion-number transition-transform duration-500 ease-out group-hover:-translate-y-4">
            08
          </div>

          <h2 className="conclusion-title transition-transform duration-500 ease-out group-hover:-translate-y-2">
            CONCLUSION
          </h2>

          <div className="conclusion-rule w-16 my-4 transition-all duration-500 ease-out group-hover:w-32"></div>

          {/* Description container with expanded height limit to show all text */}
          <div className="overflow-hidden max-w-2xl mx-auto">
            <p className="conclusion-text opacity-0 max-h-0 translate-y-6 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:max-h-96 group-hover:translate-y-0">
              Gender roles in the Philippines are continuous cultural constructs. Overcoming systemic barriers requires a unified approach combining educational reform, legislative support like the SOGIESC Equality Bill, and grassroots community action.
            </p>
          </div>

        </div>

        {/* CLOSING VISUAL */}
        <div className="conclusion-visual">

          <div className="conclusion-visual__left">
            <span className="conclusion-visual__label">
              REFLECT
            </span>

            <span className="conclusion-visual__line"></span>
          </div>

          <div className="conclusion-visual__center">
            <span className="conclusion-plus">+</span>
          </div>

          <div className="conclusion-visual__right">
            <span className="conclusion-visual__line"></span>

            <span className="conclusion-visual__label">
              CONTINUE
            </span>
          </div>

        </div>

        {/* FINAL MARKER */}
        <div className="conclusion-footer">
          <span>08</span>
          <div className="conclusion-footer__line"></div>
          <span>09</span>
        </div>

      </div>
    </section>
  );
}