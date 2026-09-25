import React, { useState, useEffect } from "react";

// Import your 10 custom photos from the assets folder
import slide1 from "../assets/P1.jpg";
import slide2 from "../assets/P2.jpg";
import slide3 from "../assets/P3.jpg";
import slide4 from "../assets/P4.jpg";
import slide5 from "../assets/P5.jpg";
import slide6 from "../assets/P6.jpg";
import slide7 from "../assets/P7.jpg";
import slide8 from "../assets/P8.jpg";
import slide9 from "../assets/P9.jpg";
import slide10 from "../assets/P10.jpg";

const heroImages = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
];

export default function Hero({ scrollToSection }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background slideshow interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 10000); // Changes image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-exhibition relative overflow-hidden">
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

      {/* Main content with liquid glass text effect */}
      <div className="hero-exhibition__container relative z-10">
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
          <div className="hero-exhibition__eyebrow text-white/80">
            MCO 1 · GROUP 01
          </div>

          <h1 
            className="hero-exhibition__title font-black uppercase"
            style={{
              color: 'rgba(255, 255, 255, 0.2)', // Semi-transparent glass look
              textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
            }}
          >
            HELLO, WE'RE GROUP 01:
            <br />
            <span 
              style={{
                color: 'rgba(212, 20, 90, 0.75)', // Translucent liquid pink accent
                textShadow: '0 0 20px rgba(212, 20, 90, 0.5)'
              }}
            >
              PHILIPPINE GENDER ROLES
            </span>
          </h1>

          <p className="hero-exhibition__description text-white/90 drop-shadow-md">
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