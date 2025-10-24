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
          <h2 id="activities-title" className="main-title">Dalla Consulenza alla Soluzione</h2>
          <p className="main-subtitle">Le nostre specializzazioni</p>
          <p className="main-description">Soluzioni concrete per ogni situazione legale</p>

          <div className={`activity-grid ${isMobile && !isExpanded ? 'collapsed' : 'expanded'}`}>
            {/* Card 1 - Always visible */}
            <div className="activity-card">
              <div className="activity-header">
                <div className="activity-category">Diritto di Famiglia</div>
                <div className="activity-badge">Avv. Patrizia Livieri</div>
              </div>
              <h3 className="activity-title">Protezione Famiglia</h3>
              <p className="activity-text">
                <strong>Separarsi senza traumi.</strong> Accordi consensuali in 90 giorni, 
                tutela economica garantita, custodia condivisa equilibrata.
              </p>
              <div className="activity-results">
                ✓ 95% accordi senza tribunale • ✓ Mediazione inclusa
              </div>
            </div>

            {/* Card 2 - Always visible */}
            <div className="activity-card">
              <div className="activity-header">
                <div className="activity-category">Diritto Contrattuale</div>
                <div className="activity-badge">Avv. Federica Bianchi</div>
              </div>
              <h3 className="activity-title">Contratti Blindati</h3>
              <p className="activity-text">
                <strong>Zero sorprese, massima sicurezza.</strong> Contratti iron-clad, 
                clausole di protezione, exit strategy sempre coperte.
              </p>
              <div className="activity-results">
                ✓ Revisione in 48h • ✓ Assistenza post-firma
              </div>
            </div>

            {/* Collapsible Cards - Hidden on mobile when collapsed */}
            <div className={`activity-card ${isMobile && !isExpanded ? 'mobile-hidden' : ''}`}>
              <div className="activity-header">
                <div className="activity-category">Recupero Crediti</div>
                <div className="activity-badge">Risultati Garantiti</div>
              </div>
              <h3 className="activity-title">Crediti Recuperati</h3>
              <p className="activity-text">
                <strong>I tuoi soldi, recuperati.</strong> Azioni mirate, tempi certi, 
                success fee solo a risultato ottenuto.
              </p>
              <div className="activity-results">
                ✓ 87% recuperi riusciti • ✓ No win, no fee
              </div>
            </div>

            <div className={`activity-card ${isMobile && !isExpanded ? 'mobile-hidden' : ''}`}>
              <div className="activity-header">
                <div className="activity-category">Diritto d'Impresa</div>
                <div className="activity-badge">Legal Protection</div>
              </div>
              <h3 className="activity-title">Azienda Protetta</h3>
              <p className="activity-text">
                <strong>La tua azienda al sicuro.</strong> Legal check continuo, 
                prevenzione contenziosi, crescita senza rischi legali.
              </p>
              <div className="activity-results">
                ✓ Canone fisso mensile • ✓ SLA garantito
              </div>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          {isMobile && (
            <div className="mobile-toggle-section">
              {!isExpanded && (
                <div className="hidden-cards-indicator">
                  <span className="indicator-text">+2 servizi aggiuntivi</span>
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
