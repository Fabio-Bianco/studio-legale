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
          <h3 className="footer-brand-title">Studio Legale Professionale</h3>
          <p className="footer-brand-subtitle">Esperienza • Competenza • Risultati</p>
        </div>

        {/* Contact Info - Link a /contact per info generali */}
        <div className="footer-contact">
          <h4 className="footer-heading">Contatti</h4>
          <div className="footer-contact-item">
            <span className="contact-label">Telefono</span>
            <a href="tel:+393401234567" className="contact-link">+39 340 123 4567</a>
          </div>
          <div className="footer-contact-item">
            <span className="contact-label">Email</span>
            <a href="mailto:info@studio-legale.it" className="contact-link">info@studio-legale.it</a>
          </div>
          <div className="footer-contact-item">
            <span className="contact-label">Indirizzo</span>
            <Link to="/contact" className="contact-link">Via Roma 123, Milano</Link>  {/* 📍 Info dettagliate */}
          </div>
        </div>

        {/* Services Links */}
        <div className="footer-services">
          <h4 className="footer-heading">Servizi</h4>
          <ul className="footer-links">
            <li><Link to="/services#famiglia" className="footer-link">Diritto di Famiglia</Link></li>
            <li><Link to="/services#civile" className="footer-link">Diritto Civile</Link></li>
            <li><Link to="/services#impresa" className="footer-link">Diritto d'Impresa</Link></li>
            <li><Link to="/services#recupero" className="footer-link">Recupero Crediti</Link></li>
          </ul>
        </div>

        {/* 🎯 CTA Section - CONVERSION FOCUS */}
        <div className="footer-cta">
          <h4 className="footer-heading">Hai Bisogno di Aiuto?</h4>
          <p className="footer-cta-text">
            Ricevi una consulenza legale gratuita entro 24 ore
          </p>
          {/* ✅ LINK PRINCIPALE A CONSULTATION */}
          <Link to="/consultation" className="footer-cta-button">
            Consulenza Gratuita Ora
          </Link>
          
          {/* Link secondario a contatti generali */}
          <Link 
            to="/contact" 
            style={{
              display: 'block',
              marginTop: 'var(--space-2)',
              fontSize: 'var(--fs-small)',
              color: 'var(--color-muted)',
              textDecoration: 'none'
            }}
          >
            📞 Oppure visualizza tutti i contatti
          </Link>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © 2025 Studio Legale Professionale. Tutti i diritti riservati.
          </p>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <span className="footer-separator">•</span>
            <Link to="/terms" className="footer-legal-link">Termini di Servizio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}