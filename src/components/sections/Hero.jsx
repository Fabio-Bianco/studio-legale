// src/components/sections/Hero.jsx
import React from "react";
import "../../styles/Hero.css";
import heroImage from "../../assets/hero_figures_final.webp";
/**
 * Hero component con background image e effetto cascata
 */
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">

      {/* Responsive Hero Image with Art Direction */}
      <div className="hero-image-wrapper">
        <picture className="hero-picture">
          {/* Mobile-optimized version */}
          <source 
            media="(max-width: 768px)" 
            srcSet={heroImage}
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
        
        {/* Mobile overlay for better text contrast */}
        <div className="hero-mobile-overlay"></div>
      </div>
      
      <div className="hero-container">
        {/* Contenuto principale a sinistra */}
        <div className="hero-content">
          <div className="hero-badge">
            ⚖️ Oltre 500 casi risolti con successo
          </div>
          
          <h1 id="hero-title" className="hero-title">
            Tutela Legale
            <span className="hero-title-highlight">Professionale</span>
          </h1>

          <p className="hero-tagline">
            <strong>Consulenza gratuita entro 24h</strong> — Soluzioni concrete per famiglia, contratti e recupero crediti Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium cumque quae quo vitae dolor quia exercitationem provident, veritatis iure earum eius! Saepe sint debitis earum a, eius nisi dolorem.
          </p>

          <div className="hero-cta-group">
            <a href="#prenota" className="hero-button">
              <span className="hero-button-text">Consulenza Gratuita Ora</span>
              <span className="hero-button-subtitle">Risposta in 2 ore</span>
            </a>
            <p className="hero-cta-trust">
              ✓ Nessun impegno • ✓ Consulenza telefonica gratuita
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}
