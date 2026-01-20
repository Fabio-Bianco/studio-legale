// src/components/sections/Hero.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { heroData } from "../../data/heroData";
import "../../styles/Hero.css";

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
            src={heroData.images.left} 
            alt={heroData.images.altLeft}
            className="hero-img hero-img--left"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="hero-image-right">
          <img 
            src={heroData.images.right} 
            alt={heroData.images.altRight}
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
              {heroData.title}
            </h1>
            <p className="hero-subtitle">{heroData.subtitle}</p>

            <p className="hero-description">
              {heroData.description} 
              <strong> {heroData.descriptionBold}</strong>.
            </p>

            <div className="hero-actions">
              <Link to={heroData.cta.link} className="hero-cta">
                <span className="hero-cta-text">
                  <span className="cta-desktop">{heroData.cta.text}</span>
                  <span className="cta-mobile">{heroData.cta.textMobile || heroData.cta.text}</span>
                </span>
                <span className="hero-cta-sub">{heroData.cta.subtext}</span>
              </Link>
              <p className="hero-trust">
                {heroData.trustBadges.map((badge, index) => (
                  <React.Fragment key={index}>
                    ✓ {badge}
                    {index < heroData.trustBadges.length - 1 ? '  ' : ''}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      {showStickyCTA && (
        <div className="hero-sticky-cta">
          <Link to={heroData.cta.link} className="sticky-cta-btn">
            <span>{heroData.stickyCTA.text}</span>
            <span className="sticky-arrow">{heroData.stickyCTA.arrow}</span>
          </Link>
        </div>
      )}
    </section>
  );
}
