// src/components/sections/Hero.jsx
import React from "react";
import "../../styles/Hero.css";
import duoImage from "../../assets/hero_figures_final.png";

/**
 * Hero component
 * - Desktop: testo centrato verticalmente rispetto all’immagine.
 * - Mobile: contenuto più compatto e CTA visibile senza scroll.
 */
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-container">
        {/* Colonna sinistra: contenuto */}
        <div className="hero-left">
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

          {/* Sezione Chi Siamo integrata nell'hero */}
          <div className="hero-chi-siamo">
            <h2 className="chi-siamo-title">Chi Siamo</h2>
            
            {/* Card delle avvocatesse */}
            <div className="hero-cards">
              <article className="hero-card" aria-labelledby="avv-rossi">
                <figure className="hero-card-media">
                  <img src={duoImage} alt="Avv. Maria Rossi" className="hero-avatar" />
                </figure>
                <div className="hero-card-body">
                  <h3 id="avv-rossi" className="hero-card-name">Avv. Maria Rossi</h3>
                  <p className="hero-card-role">Diritto di Famiglia • Mediazione</p>
                  <p className="hero-card-text">
                    Approccio empatico e pragmatico. Trasparenza su tempi e costi.
                  </p>
                  <a href="#profilo-maria" className="hero-card-link">Profilo completo →</a>
                </div>
              </article>

              <article className="hero-card" aria-labelledby="avv-bianchi">
                <figure className="hero-card-media">
                  <img src={duoImage} alt="Avv. Laura Bianchi" className="hero-avatar" />
                </figure>
                <div className="hero-card-body">
                  <h3 id="avv-bianchi" className="hero-card-name">Avv. Laura Bianchi</h3>
                  <p className="hero-card-role">Civile • Recupero Crediti</p>
                  <p className="hero-card-text">
                    Strategia rapida e mirata. Preventivi chiari e aggiornamenti puntuali.
                  </p>
                  <a href="#profilo-laura" className="hero-card-link">Profilo completo →</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
