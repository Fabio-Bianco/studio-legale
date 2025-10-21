// src/components/sections/Team.jsx
import React from "react";
import "../../styles/Team.css";

/**
 * Team section - Presentazione avvocatesse
 * Posizionata strategicamente tra Hero e Main per optimal UX flow
 */
export default function Team() {
  return (
    <section className="team-section" aria-labelledby="team-title">
      <div className="team-container">
        
        {/* Header Section */}
        <div className="team-header">
          <div className="team-badge">
            Chi Siamo
          </div>
          <h2 id="team-title" className="team-title">
            Esperienza al Vostro Servizio
          </h2>
          <p className="team-subtitle">
            <strong>15 anni di eccellenza legale</strong> — Un team di professioniste specializzate in diritto civile, 
            famiglia e contratti. La nostra missione è trasformare la complessità legale in soluzioni concrete e accessibili.
          </p>
          
          {/* Inline Trust Stats for compact layout */}
          <div className="team-inline-stats">
            <div className="inline-stat">
              <span className="inline-stat-number">500+</span>
              <span className="inline-stat-label">Casi Risolti</span>
            </div>
            <div className="inline-stat">
              <span className="inline-stat-number">15+</span>
              <span className="inline-stat-label">Anni Esperienza</span>
            </div>
            <div className="inline-stat">
              <span className="inline-stat-number">98%</span>
              <span className="inline-stat-label">Clienti Soddisfatti</span>
            </div>
            <div className="inline-stat">
              <span className="inline-stat-number">24h</span>
              <span className="inline-stat-label">Tempo Risposta</span>
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div className="team-cards">
          <article className="team-card">
            <div className="team-card-media">
              <img 
                className="team-avatar" 
                src="https://via.placeholder.com/120x120/c4b8a8/ffffff?text=PL" 
                alt="Avvocata Patrizia Livieri" 
              />
            </div>
            <div className="team-card-body">
              <h3 className="team-card-name">Avv. Patrizia Livieri</h3>
              <p className="team-card-role">Diritto di Famiglia e Mediazione</p>
              <p className="team-card-text">
                <strong>Fondatrice dello Studio</strong>, si occupa di diritto di famiglia con un approccio 
                che privilegia la mediazione e gli accordi consensuali. Specializzata in separazioni e divorzi, 
                tutela dei minori e diritto dell'immigrazione. La sua filosofia: "Ogni famiglia merita una soluzione 
                che protegga il futuro dei figli."
              </p>
              <div className="team-card-achievements">
                <div className="achievement-item">
                  <span className="achievement-number">300+</span>
                  <span className="achievement-label">Famiglie Seguite</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-number">95%</span>
                  <span className="achievement-label">Accordi Consensuali</span>
                </div>
              </div>
              <div className="team-card-credentials">
                Laurea in Giurisprudenza, Università Bocconi • Mediatore Familiare Certificato • Abilitata presso Tribunali di Milano e Roma
              </div>
            </div>
          </article>

          <article className="team-card">
            <div className="team-card-media">
              <img 
                className="team-avatar" 
                src="https://via.placeholder.com/120x120/a4937b/ffffff?text=FB" 
                alt="Avvocata Federica Bianchi" 
              />
            </div>
            <div className="team-card-body">
              <h3 className="team-card-name">Avv. Federica Bianchi</h3>
              <p className="team-card-role">Diritto Civile e Contrattualistica</p>
              <p className="team-card-text">
                <strong>Specialista in diritto civile e contrattuale</strong>, guida clienti aziendali e privati 
                attraverso le complessità del diritto commerciale. Esperta in recupero crediti e contenzioso civile, 
                combina rigore tecnico e pragmatismo per ottenere risultati concreti. "La precisione contrattuale 
                è la migliore prevenzione legale."
              </p>
              <div className="team-card-achievements">
                <div className="achievement-item">
                  <span className="achievement-number">500+</span>
                  <span className="achievement-label">Contratti Redatti</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-number">87%</span>
                  <span className="achievement-label">Crediti Recuperati</span>
                </div>
              </div>
              <div className="team-card-credentials">
                Laurea Magistrale in Giurisprudenza, Università Statale Milano • Abilitata Cassazione • Master in Diritto d'Impresa, Bocconi
              </div>
            </div>
          </article>
        </div>

        {/* Studio Values Section */}
        <div className="team-values">
          <div className="values-content">
            <h3 className="values-title">I Nostri Valori</h3>
            <div className="values-grid">
              <div className="value-item">
                <h4 className="value-name">Trasparenza</h4>
                <p className="value-text">Costi chiari, tempi definiti, strategia condivisa. Nessuna sorpresa.</p>
              </div>
              <div className="value-item">
                <h4 className="value-name">Fiducia</h4>
                <p className="value-text">Costruiamo relazioni durature basate su competenza e integrità professionale.</p>
              </div>
              <div className="value-item">
                <h4 className="value-name">Efficienza</h4>
                <p className="value-text">Soluzioni rapide e concrete. Il vostro tempo è prezioso quanto il nostro.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust statistics now integrated inline in header for vertical compactness */}

      </div>
    </section>
  );
}