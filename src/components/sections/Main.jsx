// src/components/sections/Main.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Main.css";

export default function Main() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      // Auto-expand on desktop
      if (window.innerWidth > 768) {
        setIsExpanded(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleExpanded = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsExpanded(!isExpanded);
      setIsLoading(false);
    }, 150); // Small delay for smooth UX
  };
  return (
    <main className="main-section" aria-labelledby="activities-title">
      <div className="main-container">
        
        {/* Aree di Attività - Sezione principale */}
        <section className="activities" aria-labelledby="activities-title">
          <h2 id="activities-title" className="main-title">Le Nostre Specializzazioni</h2>
          <p className="main-subtitle">Soluzioni concrete per ogni situazione legale</p>

          <div className={`activity-grid ${isMobile && !isExpanded ? 'collapsed' : 'expanded'}`}>
            
            {/* Card 1 - Diritto di Famiglia */}
            <Link to="/services" className="activity-card">
              <div className="card-image family-law"></div>
              <h3 className="activity-title">Diritto di Famiglia</h3>
              <div className="card-arrow">→</div>
            </Link>

            {/* Card 2 - Recupero Crediti */}
            <Link to="/services" className="activity-card">
              <div className="card-image debt-recovery"></div>
              <h3 className="activity-title">Recupero Crediti</h3>
              <div className="card-arrow">→</div>
            </Link>

            {/* Card 3 - Sovraindebitamento */}
            <Link to="/services" className="activity-card">
              <div className="card-image debt-relief"></div>
              <h3 className="activity-title">Sovraindebitamento</h3>
              <div className="card-arrow">→</div>
            </Link>

            {/* Card 4 - Immigrazione e Cittadinanza */}
            <Link to="/services" className="activity-card">
              <div className="card-image immigration"></div>
              <h3 className="activity-title">Immigrazione e Cittadinanza</h3>
              <div className="card-arrow">→</div>
            </Link>

            {/* Card 5 - Diritto del Lavoro */}
            <Link to="/services" className="activity-card">
              <div className="card-image labor-law"></div>
              <h3 className="activity-title">Diritto del Lavoro</h3>
              <div className="card-arrow">→</div>
            </Link>

            {/* Card 6 - Diritto Contrattuale */}
            <Link to="/services" className="activity-card">
              <div className="card-image contract-law"></div>
              <h3 className="activity-title">Diritto Contrattuale</h3>
              <div className="card-arrow">→</div>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          {isMobile && (
            <div className="mobile-toggle-section">
              {!isExpanded && (
                <div className="hidden-cards-indicator">
                  <span className="indicator-text">+4 servizi aggiuntivi</span>
                </div>
              )}
              <button 
                className={`mobile-toggle-btn ${isLoading ? 'loading' : ''}`}
                onClick={toggleExpanded}
                aria-expanded={isExpanded}
                aria-controls="activity-grid"
                disabled={isLoading}
              >
                <span className="toggle-text">
                  {isLoading ? 'Caricamento...' : (isExpanded ? 'Mostra Meno' : 'Scopri Altri Servizi')}
                </span>
                <span className={`toggle-icon ${isExpanded ? 'rotated' : ''} ${isLoading ? 'spinning' : ''}`}>
                  {isLoading ? '⟳' : '▼'}
                </span>
              </button>
            </div>
          )}

          {/* CTA Section integrata */}
          <div className="main-cta-section">
            <div className="main-cta-content">
              <h3 className="main-cta-title">Quale Situazione Descrive il Tuo Caso?</h3>
              <p className="main-cta-subtitle">Parlaci del tuo problema, troveremo la soluzione più efficace</p>
              <Link to="/consultation" className="main-cta-button">
                Descrivi la Tua Situazione
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
