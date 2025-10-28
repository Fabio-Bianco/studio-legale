// src/components/sections/Hero.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Hero.css";
import heroImg1 from "../../assets/hero-img.png";
import heroImg2 from "../../assets/hero-img-2.png";

/**
 * Enterprise Hero Section - Legal Services
 * Split image architecture with professional overlay system
 */
export default function Hero() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.65;
      const shouldShow = window.scrollY > heroHeight && window.innerWidth <= 768;
      setShowStickyCTA(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      {/* Enterprise Split Image Background */}
      <div className="hero-background">
        <div className="hero-image-left">
          <img 
            src={heroImg2} 
            alt=""
            className="hero-img hero-img--left"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="hero-image-right">
          <img 
            src={heroImg1} 
            alt=""
            className="hero-img hero-img--right"
            loading="eager"
            decoding="async"
          />
        </div>
        
        {/* Professional Overlay System */}
        <div className="hero-overlay"></div>
      </div>

      {/* Content Container */}
      <div className="hero-wrapper">
        <div className="hero-container">
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title">
              Studio Livieri Tenore
              <span className="hero-subtitle">Due Professioniste, Una Visione</span>
            </h1>

            <p className="hero-description">
              Quando il diritto diventa strumento di protezione e non di ostacolo. 
              <strong> Offriamo consulenza legale strategica con un approccio umano e soluzioni mirate</strong>.
            </p>

            <div className="hero-actions">
              <Link to="/consultation" className="hero-cta">
                <span className="hero-cta-text">Consulenza Gratuita Ora</span>
                <span className="hero-cta-sub">Rispondiamo entro le 24h</span>
              </Link>
              <p className="hero-trust">
                ✓ Nessun impegno  ✓ Consulenza gratuita
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      {showStickyCTA && (
        <div className="hero-sticky-cta">
          <Link to="/consultation" className="sticky-cta-btn">
            <span>Consulenza Gratuita</span>
            <span className="sticky-arrow">→</span>
          </Link>
        </div>
      )}
    </section>
  );
}
