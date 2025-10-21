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
      {/* Immagine di background */}
      <div className="hero-image-wrapper">
        <img 
          className="hero-bg-image" 
          src={heroImage} 
          alt="Studio legale - Giustizia e professionalità" 
        />
      </div>
      
      <div className="hero-container">
        {/* Contenuto principale a sinistra */}
        <div className="hero-content">
          <h1 id="hero-title" className="hero-title">
            Un impegno:
            <br />
            la tua tutela.
          </h1>

          <p className="hero-tagline">
            Prenota una consulenza personalizzata con noi.
          </p>

          <a href="#prenota" className="hero-button">
            Prenota una consulenza
          </a>

          {/* Card presentazione avvocatesse con effetto cascata */}
          <div className="hero-chi-siamo">
          
          <div className="hero-cards">
            <article className="hero-card">
              <div className="hero-card-media">
                <img className="hero-avatar" src="https://via.placeholder.com/72x72/c4b8a8/ffffff?text=AvV1" alt="Avvocata Maria Rossi" />
              </div>
              <div className="hero-card-body">
                <h3 className="hero-card-name">Avv. Maria Rossi</h3>
                <p className="hero-card-role">Diritto di Famiglia</p>
                <p className="hero-card-text">
                  Specializzata in separazioni, divorzi e tutela dei minori. Oltre 15 anni di esperienza con approccio empatico.
                </p>
                <a href="#maria" className="hero-card-link">Contatta</a>
              </div>
            </article>

            <article className="hero-card">
              <div className="hero-card-media">
                <img className="hero-avatar" src="https://via.placeholder.com/72x72/a4937b/ffffff?text=AvV2" alt="Avvocata Laura Bianchi" />
              </div>
              <div className="hero-card-body">
                <h3 className="hero-card-name">Avv. Laura Bianchi</h3>
                <p className="hero-card-role">Diritto Civile</p>
                <p className="hero-card-text">
                  Esperta in contratti, recupero crediti e diritto immobiliare. Soluzioni strategiche per ogni esigenza legale.
                </p>
                <a href="#laura" className="hero-card-link">Contatta</a>
              </div>
            </article>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
