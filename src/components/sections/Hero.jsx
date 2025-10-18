// src/components/sections/Hero.jsx
import React from "react";
import "../../styles/Hero.css";

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
        </div>

        {/* Colonna destra “spacer” per distribuire il layout su desktop */}
        <div className="hero-visual-spacer" aria-hidden="true" />
      </div>
    </section>
  );
}
