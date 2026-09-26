import React, { useState, useEffect } from "react";

import slide1 from "../assets/P1.jpg";
import slide2 from "../assets/P2.jpg";
import slide3 from "../assets/P3.jpg";
import slide4 from "../assets/P4.jpg";

const heroImages = [
  slide1,
  slide2,
  slide3,
  slide4,
];

export default function Hero({ scrollToSection }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background slideshow interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="hero-exhibition relative w-full h-screen overflow-hidden flex flex-col justify-end m-0 p-0"
    >
      {/* Background image slideshow */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className={`hero-exhibition__image transition-opacity duration-1000 absolute inset-0 ${
            index === currentImageIndex ? "opacity-100 z-[-3]" : "opacity-0 z-[-4]"
          }`}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      ))}

      {/* Dark image treatment overlay */}
      <div className="hero-exhibition__overlay relative z-10" aria-hidden="true" />

      {/* Exhibition framing */}
      <div className="hero-exhibition__frame" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Top editorial marker */}
      <div className="hero-exhibition__topline relative z-10">
        <span className="hero-exhibition__index">01 / 09</span>

        <span className="hero-exhibition__category">
          PHILIPPINE GENDER ROLES
        </span>
      </div>

      {/* Main content container */}
      <div 
        className="hero-exhibition__container relative z-10"
        style={{ marginTop: 'auto', paddingTop: '6rem', paddingBottom: '2.5rem' }}
      >
        <div 
          className="hero-exhibition__content text-white"
          style={{ 
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            backdropFilter: 'none',
            padding: 0
          }}
        >
          <div 
            className="hero-exhibition__eyebrow"
            style={{
              color: 'rgba(201, 189, 189, 0.9)',
              textShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
            }}
          >
            MCO 1 · GROUP 02
          </div>

          <h1 
            className="hero-exhibition__title font-black uppercase"
            style={{
              color: 'rgba(201, 189, 189, 0.9)', 
              textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
            }}
          >
            HELLO, WE'RE GROUP 02:
            <br />
            <span 
              style={{
                color: 'rgba(212, 20, 90, 0.75)', 
                textShadow: '0 0 20px rgba(212, 20, 90, 0.5)'
              }}
            >
              PHILIPPINE GENDER ROLES
            </span>
          </h1>

          <p 
            className="hero-exhibition__description"
            style={{
              color: 'rgba(201, 189, 189, 0.9)',
              textShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
            }}
          >
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
        className="hero-exhibition__scroll relative z-10"
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
      <div className="hero-exhibition__footer relative z-10">
        <span>MAJOR COURSE OUTPUT 1</span>
        <span>PHILIPPINES</span>
      </div>
    </section>
  );
}