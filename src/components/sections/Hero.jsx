// src/components/sections/Hero.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Hero.css";
import heroImage from "../../assets/hero_figures_final.webp";
import { studioStats } from "../../data/teamData";
/**
 * Hero component con background image, effetto cascata e sticky CTA mobile
 */
export default function Hero() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA when user scrolls past hero (mobile only)
      const heroHeight = window.innerHeight * 0.6; // 60vh threshold
      const shouldShow = window.scrollY > heroHeight && window.innerWidth <= 768;
      setShowStickyCTA(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="hero" aria-labelledby="hero-title">

      {/* Responsive Hero Image with Enhanced Art Direction */}
      <div className="hero-image-wrapper">
        <picture className="hero-picture">
          {/* Mobile-optimized versions with srcset for performance */}
          <source 
            media="(max-width: 480px)" 
            srcSet={`${heroImage} 480w`}
            sizes="100vw"
          />
          <source 
            media="(max-width: 768px)" 
            srcSet={`${heroImage} 768w`}
            sizes="100vw"
          />
          {/* Tablet version */}
          <source 
            media="(max-width: 1024px)" 
            srcSet={`${heroImage} 1024w`}
            sizes="100vw"
          />
          {/* Desktop version */}
          <img 
            className="hero-bg-image" 
            src={heroImage} 
            alt="Avvocati esperti in diritto civile e contrattuale - Studio legale professionale"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            role="img"
            aria-describedby="hero-title"
          />
        </picture>
        
        {/* Enhanced mobile overlay with intelligent gradient */}
        <div className="hero-mobile-overlay"></div>
        
        {/* Mobile contrast enhancer - adaptive based on image */}
        <div className="hero-text-backdrop"></div>
      </div>
      
      <div className="hero-container">
        {/* Contenuto principale a sinistra */}
        <div className="hero-content">
          <div className="hero-badge">
            ⚖️ Oltre {studioStats.find(stat => stat.label === "Casi Risolti")?.number || "500+"} casi risolti con successo
          </div>
          
          <h1 id="hero-title" className="hero-title">
            Tutela Legale
            <span className="hero-title-highlight">Professionale</span>
          </h1>

          <p className="hero-tagline">
            <strong>Consulenza gratuita entro 24h</strong> — Soluzioni concrete per famiglia, contratti e recupero crediti Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium cumque quae quo vitae dolor quia exercitationem provident, veritatis iure earum eius! Saepe sint debitis earum a, eius nisi dolorem.
          </p>

          <div className="hero-cta-group">
            <Link to="/consultation" className="hero-button hero-button-primary">
              <span className="hero-button-text">Consulenza Gratuita Ora</span>
              <span className="hero-button-subtitle">Rispondiamo entro le 24h</span>
                          </Link>
            <p className="hero-cta-trust">
              ✓ Nessun impegno  ✓ Consulenza gratuita
            </p>
          </div>
          
          {/* Mobile Sticky CTA - appears only on mobile scroll */}
          <div className={`hero-sticky-cta ${showStickyCTA ? 'visible' : ''}`}>
            <Link to="/consultation" className="sticky-cta-button">
              <span>Consulenza Gratuita</span>
              <span className="sticky-cta-indicator">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
