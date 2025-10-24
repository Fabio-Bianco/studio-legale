// src/pages/LegalServices.jsx
import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/Pages.css';

export default function LegalServices() {
  return (
    <Layout className="legal-services-page">
      
      {/* Hero Section per Servizi */}
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">
            Servizi Legali
          </h1>
          <p className="page-hero-description">
            Soluzioni legali complete per privati e aziende. 
            Esperienza, competenza e risultati garantiti.
          </p>
        </div>
      </section>

      {/* Grid Servizi */}
      <section className="page-section">
        <div className="page-container">
          
          <div className="page-card-grid">
            
            {/* Diritto di Famiglia */}
            <div className="page-card">
              <span className="page-card-icon">👨‍👩‍👧‍👦</span>
              <h3 className="page-card-title">
                Diritto di Famiglia
              </h3>
              <div className="page-card-content">
                <p>
                  Separazioni, divorzi consensuali, affidamento minori, 
                  adozioni e mediazione familiare.
                </p>
                <ul className="page-card-list">
                  <li>Separazioni consensuali</li>
                  <li>Divorzi e scioglimento unioni civili</li>
                  <li>Affidamento e mantenimento figli</li>
                  <li>Mediazione familiare</li>
                </ul>
              </div>
            </div>

            {/* Diritto Civile */}
            <div className="page-card">
              <span className="page-card-icon">⚖️</span>
              <h3 className="page-card-title">
                Diritto Civile
              </h3>
              <div className="page-card-content">
                <p>
                  Contratti, recupero crediti, responsabilità civile 
                  e contenzioso civile.
                </p>
                <ul className="page-card-list">
                  <li>Redazione e revisione contratti</li>
                  <li>Recupero crediti</li>
                  <li>Responsabilità civile</li>
                  <li>Contenzioso civile</li>
                </ul>
              </div>
            </div>

            {/* Diritto d'Impresa */}
            <div className="page-card">
              <span className="page-card-icon">🏢</span>
              <h3 className="page-card-title">
                Diritto d'Impresa
              </h3>
              <div className="page-card-content">
                <p>
                  Costituzione società, compliance aziendale, 
                  contrattualistica d'impresa e consulenza strategica.
                </p>
                <ul className="page-card-list">
                  <li>Costituzione e modifiche societarie</li>
                  <li>Contratti commerciali</li>
                  <li>Compliance e privacy</li>
                  <li>Consulenza strategica</li>
                </ul>
              </div>
            </div>

            {/* Diritto Immobiliare */}
            <div className="page-card">
              <span className="page-card-icon">🏠</span>
              <h3 className="page-card-title">
                Diritto Immobiliare
              </h3>
              <div className="page-card-content">
                <p>
                  Compravendite immobiliari, locazioni, 
                  condominio e diritti reali.
                </p>
                <ul className="page-card-list">
                  <li>Compravendite e preliminari</li>
                  <li>Contratti di locazione</li>
                  <li>Diritto condominiale</li>
                  <li>Usucapione e servitù</li>
                </ul>
              </div>
            </div>

            {/* Diritto del Lavoro */}
            <div className="page-card">
              <span className="page-card-icon">👔</span>
              <h3 className="page-card-title">
                Diritto del Lavoro
              </h3>
              <div className="page-card-content">
                <p>
                  Rapporti di lavoro subordinato e autonomo, 
                  licenziamenti e controversie lavorative.
                </p>
                <ul className="page-card-list">
                  <li>Contratti di lavoro</li>
                  <li>Licenziamenti e dimissioni</li>
                  <li>Mobbing e discriminazioni</li>
                  <li>Contenzioso lavorativo</li>
                </ul>
              </div>
            </div>

            {/* Diritto Penale */}
            <div className="page-card">
              <span className="page-card-icon">🛡️</span>
              <h3 className="page-card-title">
                Diritto Penale
              </h3>
              <div className="page-card-content">
                <p>
                  Difesa penale, procedimenti presso tribunali 
                  e corti d'appello, reati contro la persona e patrimonio.
                </p>
                <ul className="page-card-list">
                  <li>Difesa in procedimenti penali</li>
                  <li>Reati contro la persona</li>
                  <li>Reati economici e finanziari</li>
                  <li>Ricorsi in Cassazione</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </Layout>
  );
}