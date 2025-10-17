// src/components/sections/Hero.jsx
import React from "react";
import "../../styles/Hero.css";

// L’immagine delle due avvocatesse si trova in src/asset/. Aggiorna qui se necessario.
import heroImage from "../../asset/hero_figures_final.png";

/**
 * Hero component.
 * Layout a due colonne su desktop, con CTA allineata sotto il titolo e il testo.
 * Diventa layout verticale su schermi più piccoli.
 */
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">
            Due avvocatesse.
            <br />
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
        </div>
        <div className="hero-right">
          <img
            src={heroImage}
            alt="Due avvocatesse"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  );
}
