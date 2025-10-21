// src/components/sections/Hero.jsx
import React from "react";
import "../../styles/Hero.css";
/**
 * Hero component con background image e effetto cascata
 */
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
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

          {/* Sezione Chi Siamo con effetto cascata */}
          <div className="hero-chi-siamo">
            <h2 className="chi-siamo-title">Chi Siamo</h2>
          
          <div className="hero-cards">
            <article className="hero-card">
              <div className="hero-card-media">
                <div className="hero-card-icon">
                  ⚖️
                </div>
              </div>
              <div className="hero-card-body">
                <h3 className="hero-card-name">Diritto di Famiglia</h3>
                <p className="hero-card-text">
                  Separazioni, divorzi, affidamento minori e mediazione familiare con approccio empatico e professionale.
                </p>
                <a href="#famiglia" className="hero-card-link">Scopri di più</a>
              </div>
            </article>

            <article className="hero-card">
              <div className="hero-card-media">
                <div className="hero-card-icon">
                  📋
                </div>
              </div>
              <div className="hero-card-body">
                <h3 className="hero-card-name">Diritto Civile</h3>
                <p className="hero-card-text">
                  Contratti, recupero crediti, responsabilità civile e diritto immobiliare con strategie mirate ed efficaci.
                </p>
                <a href="#civile" className="hero-card-link">Scopri di più</a>
              </div>
            </article>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
