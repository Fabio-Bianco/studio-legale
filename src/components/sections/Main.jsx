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
            {/* Card 1 - Immigrazione e Cittadinanza */}
            <Link to="/services" className="activity-card">
              <div className="activity-header">
                <div className="activity-category">Immigrazione e Cittadinanza</div>
              </div>
              <h3 className="activity-title">Percorso verso la Cittadinanza</h3>
              <p className="activity-text">
                <strong>Realizziamo il tuo futuro in Italia.</strong> Assistenza completa per visti, permessi di soggiorno, ricongiungimenti familiari e cittadinanza italiana. Un percorso guidato verso la stabilità e i tuoi diritti.
              </p>
            </Link>

            {/* Card 2 - Diritto di Famiglia */}
            <Link to="/services" className="activity-card">
              <div className="activity-header">
                <div className="activity-category">Diritto di Famiglia</div>
              </div>
              <h3 className="activity-title">Protezione Famiglia</h3>
              <p className="activity-text">
                <strong>Separarsi senza traumi.</strong> Accordi consensuali, tutela economica garantita, custodia condivisa equilibrata. Affrontiamo insieme i momenti difficili per proteggere ciò che conta davvero: il benessere dei tuoi cari.
              </p>
            </Link>

            {/* Card 3 - Recupero Crediti */}
            <Link to="/services" className="activity-card">
              <div className="activity-header">
                <div className="activity-category">Recupero Crediti</div>
              </div>
              <h3 className="activity-title">I Tuoi Crediti Recuperati</h3>
              <p className="activity-text">
                <strong>Riottieni ciò che ti spetta.</strong> Strategie efficaci per il recupero di crediti commerciali e privati. Azioni mirate, procedure stragiudiziali e giudiziali per garantire il rientro dei tuoi investimenti.
              </p>
            </Link>

            {/* Card 4 - Sovraindebitamento */}
            <Link to="/services" className="activity-card">
              <div className="activity-header">
                <div className="activity-category">Sovraindebitamento</div>
              </div>
              <h3 className="activity-title">Libertà dai Debiti</h3>
              <p className="activity-text">
                <strong>Una nuova opportunità di ripartire.</strong> Procedure di sovraindebitamento, piani di rientro personalizzati, protezione del patrimonio familiare. Trasformiamo il peso dei debiti in un percorso verso la serenità finanziaria.
              </p>
            </Link>
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
