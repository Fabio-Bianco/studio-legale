// src/components/sections/Main.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mainServices } from "../../data/servicesData";
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
            {mainServices.map((service) => (
              <Link key={service.id} to="/services" className="activity-card">
                <img src={service.image} alt={service.title} className="card-img" />
                <h3 className="activity-title">{service.title}</h3>
                <div className="card-arrow">→</div>
              </Link>
            ))}
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
