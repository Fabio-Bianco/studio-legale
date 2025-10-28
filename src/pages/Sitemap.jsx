// src/pages/Sitemap.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import '../styles/Pages.css';

export default function Sitemap() {
  return (
    <Layout className="sitemap-page">
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">
            Mappa del Sito
          </h1>
          <p className="page-hero-description">
            Naviga facilmente attraverso tutte le sezioni del nostro sito web
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="page-section">
        <div className="page-container">
          
          <div className="sitemap-grid">
            
            {/* Pagine Principali */}
            <div className="sitemap-section">
              <h2 className="sitemap-section-title">📍 Pagine Principali</h2>
              <ul className="sitemap-links">
                <li>
                  <Link to="/" className="sitemap-link">
                    <span className="link-title">Home</span>
                    <span className="link-description">Pagina principale con presentazione dello studio</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="sitemap-link">
                    <span className="link-title">Chi Siamo</span>
                    <span className="link-description">Informazioni sul nostro studio e il team di professionisti</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="sitemap-link">
                    <span className="link-title">Servizi Legali</span>
                    <span className="link-description">Tutte le nostre specializzazioni e aree di competenza</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="sitemap-link">
                    <span className="link-title">Contatti</span>
                    <span className="link-description">Informazioni per raggiungerci e contattarci</span>
                  </Link>
                </li>
                <li>
                  <Link to="/consultation" className="sitemap-link">
                    <span className="link-title">Consulenza Gratuita</span>
                    <span className="link-description">Richiedi una consulenza legale preliminare</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Aree di Specializzazione */}
            <div className="sitemap-section">
              <h2 className="sitemap-section-title">⚖️ Aree di Specializzazione</h2>
              <ul className="sitemap-links">
                <li>
                  <Link to="/services" className="sitemap-link">
                    <span className="link-title">Diritto di Famiglia</span>
                    <span className="link-description">Separazioni, divorzi, affidamento minori</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="sitemap-link">
                    <span className="link-title">Recupero Crediti</span>
                    <span className="link-description">Strategie per il recupero di crediti commerciali</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="sitemap-link">
                    <span className="link-title">Sovraindebitamento</span>
                    <span className="link-description">Procedure di composizione della crisi</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="sitemap-link">
                    <span className="link-title">Immigrazione e Cittadinanza</span>
                    <span className="link-description">Permessi di soggiorno e cittadinanza italiana</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="sitemap-link">
                    <span className="link-title">Diritto del Lavoro</span>
                    <span className="link-description">Tutela dei diritti dei lavoratori</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="sitemap-link">
                    <span className="link-title">Diritto Contrattuale</span>
                    <span className="link-description">Redazione e gestione contratti</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="sitemap-link">
                    <span className="link-title">Diritto Immobiliare</span>
                    <span className="link-description">Compravendite e locazioni immobiliari</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="sitemap-link">
                    <span className="link-title">Diritto Penale</span>
                    <span className="link-description">Difesa penale specializzata</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="sitemap-link">
                    <span className="link-title">Successioni e Testamenti</span>
                    <span className="link-description">Pianificazione successoria</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="sitemap-link">
                    <span className="link-title">Diritto Amministrativo</span>
                    <span className="link-description">Rapporti con la Pubblica Amministrazione</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="sitemap-link">
                    <span className="link-title">Diritto Societario</span>
                    <span className="link-description">Costituzione e gestione società</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="sitemap-link">
                    <span className="link-title">Diritto Bancario</span>
                    <span className="link-description">Controversie bancarie e finanziarie</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Informazioni Legali */}
            <div className="sitemap-section">
              <h2 className="sitemap-section-title">📋 Informazioni Legali</h2>
              <ul className="sitemap-links">
                <li>
                  <Link to="/privacy" className="sitemap-link">
                    <span className="link-title">Privacy Policy</span>
                    <span className="link-description">Informativa sul trattamento dei dati personali</span>
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="sitemap-link">
                    <span className="link-title">Termini di Servizio</span>
                    <span className="link-description">Condizioni generali per l'utilizzo del sito</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Informazioni di Contatto */}
            <div className="sitemap-section">
              <h2 className="sitemap-section-title">📞 Informazioni di Contatto</h2>
              <div className="contact-info-box">
                <div className="contact-item">
                  <strong>Studio Legale Livieri - Tenore</strong>
                </div>
                <div className="contact-item">
                  📍 Via Amendola, 162/B - 70126 Bari (BA)
                </div>
                <div className="contact-item">
                  📞 <a href="tel:+390805123456">+39 080 512 3456</a>
                </div>
                <div className="contact-item">
                  📧 <a href="mailto:info@studiolegalelivieritenorebari.it">info@studiolegalelivieritenorebari.it</a>
                </div>
                <div className="contact-item">
                  🕒 Lun-Ven: 9:00 - 18:00, Sabato: Su appuntamento
                </div>
              </div>
            </div>

          </div>
          
          {/* CTA finale */}
          <div className="sitemap-cta">
            <h3 className="sitemap-cta-title">Non trovi quello che cerchi?</h3>
            <p className="sitemap-cta-description">
              Contattaci direttamente per ricevere assistenza personalizzata
            </p>
            <div className="sitemap-cta-buttons">
              <Link to="/contact" className="sitemap-cta-primary">
                Contattaci
              </Link>
              <Link to="/consultation" className="sitemap-cta-secondary">
                Consulenza Gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </Layout>
  );
}