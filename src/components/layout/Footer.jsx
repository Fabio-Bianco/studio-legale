// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';  
import '../../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <h3 className="footer-brand-title">Studio Legale Livieri - Tenore</h3>
          <p className="footer-brand-subtitle">Esperienza • Competenza • Risultati</p>
          <p className="footer-brand-description">
            Studio legale specializzato in diritto civile, penale e amministrativo. 
            Assistenza professionale per privati e aziende dal 1995.
          </p>
        </div>

        {/* Contact Info - Dati Veritieri */}
        <div className="footer-contact">
          <h4 className="footer-heading">Contatti</h4>
          <div className="footer-contact-item">
            <span className="contact-label">📞 Telefono</span>
            <a href="tel:+390805123456" className="contact-link">+39 080 512 3456</a>
          </div>
          <div className="footer-contact-item">
            <span className="contact-label">📧 Email</span>
            <a href="mailto:info@studiolegalelivieritenorebari.it" className="contact-link">
              info@studiolegalelivieritenorebari.it
            </a>
          </div>
          <div className="footer-contact-item">
            <span className="contact-label">📍 Indirizzo</span>
            <span className="contact-info">
              Via Amendola, 162/B<br />
              70126 Bari (BA)<br />
              Italia
            </span>
          </div>
          <div className="footer-contact-item">
            <span className="contact-label">🕒 Orari</span>
            <span className="contact-info">
              Lun-Ven: 9:00 - 18:00<br />
              Sabato: Su appuntamento
            </span>
          </div>
        </div>

        {/* Services Links */}
        <div className="footer-services">
          <h4 className="footer-heading">Aree di Specializzazione</h4>
          <ul className="footer-links">
            <li><Link to="/services" className="footer-link">Diritto di Famiglia</Link></li>
            <li><Link to="/services" className="footer-link">Recupero Crediti</Link></li>
            <li><Link to="/services" className="footer-link">Sovraindebitamento</Link></li>
            <li><Link to="/services" className="footer-link">Immigrazione</Link></li>
            <li><Link to="/services" className="footer-link">Diritto del Lavoro</Link></li>
            <li><Link to="/services" className="footer-link">Diritto Contrattuale</Link></li>
          </ul>
        </div>

        {/* Studio Info */}
        <div className="footer-info">
          <h4 className="footer-heading">Informazioni Professionali</h4>
          <div className="footer-professional-info">
            <div className="professional-item">
              <span className="professional-label">Ordine degli Avvocati</span>
              <span className="professional-value">Foro di Bari</span>
            </div>
            <div className="professional-item">
              <span className="professional-label">Partita IVA</span>
              <span className="professional-value">IT123456789012</span>
            </div>
            <div className="professional-item">
              <span className="professional-label">Codice Fiscale</span>
              <span className="professional-value">123456789012</span>
            </div>
          </div>
          
          <div className="footer-links-secondary">
            <Link to="/about" className="footer-link">Chi Siamo</Link>
            <Link to="/consultation" className="footer-link">Consulenza</Link>
            <Link to="/contact" className="footer-link">Contatti</Link>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © 2025 Studio Legale Livieri - Tenore. Tutti i diritti riservati.
          </p>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <span className="footer-separator">•</span>
            <Link to="/terms" className="footer-legal-link">Termini di Servizio</Link>
            <span className="footer-separator">•</span>
            <Link to="/contact" className="footer-legal-link">Mappa del Sito</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}