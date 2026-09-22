import React from "react";

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="hero-exhibition">
      {/* Background image */}
      <div
        className="hero-exhibition__image"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2000&q=85')",
        }}
        aria-hidden="true"
      />

      {/* Dark image treatment */}
      <div className="hero-exhibition__overlay" aria-hidden="true" />

      {/* Exhibition framing */}
      <div className="hero-exhibition__frame" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Top editorial marker */}
      <div className="hero-exhibition__topline">
        <span className="hero-exhibition__index">01 / 09</span>

        <span className="hero-exhibition__category">
          PHILIPPINE GENDER ROLES
        </span>
      </div>

      {/* Main content */}
      <div className="hero-exhibition__container">
        <div className="hero-exhibition__content">
          <div className="hero-exhibition__eyebrow">
            MCO 1 · GROUP 01
          </div>

          <h1 className="hero-exhibition__title">
            HELLO, WE'RE GROUP 01:
            <br />
            <span>PHILIPPINE GENDER ROLES</span>
          </h1>

          <p className="hero-exhibition__description">
            We present a critical exploration and creative analysis of historical and contemporary gender roles in the Philippines for Major Course Output 1.
          </p>

          <button
            type="button"
            onClick={() => scrollToSection("understanding")}
            className="hero-exhibition__button"
          >
            <span>Learn More</span>
            <span className="hero-exhibition__button-arrow" aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Scroll story indicator */}
      <button
        type="button"
        className="hero-exhibition__scroll"
        onClick={() => scrollToSection("understanding")}
        aria-label="Scroll to Understanding Gender Roles"
      >
        <span className="hero-exhibition__scroll-line">
          <span />
        </span>

        <span className="hero-exhibition__scroll-text">
          SCROLL TO EXPLORE
        </span>
      </button>

      {/* Bottom location marker */}
      <div className="hero-exhibition__footer">
        <span>MAJOR COURSE OUTPUT 1</span>
        <span>PHILIPPINES</span>
      </div>
    </section>
  );
}