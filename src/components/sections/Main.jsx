// src/components/sections/Main.jsx
import React from "react";
import "../../styles/Main.css";

export default function Main() {
  return (
    <main className="main-section" aria-labelledby="activities-title">
      <div className="main-container">
        
        {/* Bridge Section - Collegamento con Hero */}
        <section className="main-bridge">
          <div className="bridge-content">
            <h2 className="bridge-title">Dalla Consulenza alla Soluzione</h2>
            <p className="bridge-subtitle">
              Le nostre specializzazioni al servizio del tuo caso specifico
            </p>
          </div>
        </section>

        {/* Aree di Attività (icone locali) */}
        <section className="activities" aria-labelledby="activities-title">
          <h2 id="activities-title" className="main-title">Come Ti Aiutiamo</h2>
          <p className="main-subtitle">Soluzioni concrete per ogni situazione legale</p>

          <div className="activity-grid">
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

            <div className="activity-card">
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

            <div className="activity-card">
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

          {/* CTA Section integrata */}
          <div className="main-cta-section">
            <div className="main-cta-content">
              <h3 className="main-cta-title">Quale Situazione Descrive il Tuo Caso?</h3>
              <p className="main-cta-subtitle">Parlaci del tuo problema, troveremo la soluzione più efficace</p>
              <a href="#prenota" className="main-cta-button">
                Descrivi la Tua Situazione
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
