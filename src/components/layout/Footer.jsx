// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { studioInfo, featuredServices, secondaryLinks, legalLinks } from '../../data/studioData';
import '../../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <h3 className="footer-brand-title">{studioInfo.name}</h3>
          <p className="footer-brand-subtitle">{studioInfo.subtitle}</p>
          <p className="footer-brand-description">
            {studioInfo.description}
          </p>
        </div>

        {/* Contact Info - Dati Veritieri */}
        <div className="footer-contact">
          <h4 className="footer-heading">Contatti</h4>
          <div className="footer-contact-item">
            <span className="contact-label">📞 Telefono</span>
            <a href={`tel:${studioInfo.contact.phone}`} className="contact-link">
              {studioInfo.contact.phoneFormatted}
            </a>
          </div>
          <div className="footer-contact-item">
            <span className="contact-label">📧 Email</span>
            <a href={`mailto:${studioInfo.contact.email}`} className="contact-link">
              {studioInfo.contact.email}
            </a>
          </div>
          <div className="footer-contact-item">
            <span className="contact-label">📍 Indirizzo</span>
            <span className="contact-info">
              {studioInfo.address.street}<br />
              {studioInfo.address.postalCode} {studioInfo.address.city} ({studioInfo.address.province})<br />
              {studioInfo.address.country}
            </span>
          </div>
          <div className="footer-contact-item">
            <span className="contact-label">🕒 Orari</span>
            <span className="contact-info">
              {studioInfo.hours.weekdays}<br />
              {studioInfo.hours.saturday}
            </span>
          </div>
        </div>

        {/* Services Links */}
        <div className="footer-services">
          <h4 className="footer-heading">Aree di Specializzazione</h4>
          <ul className="footer-links">
            {featuredServices.map((service, index) => (
              <li key={index}>
                <Link to="/services" className="footer-link">{service}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Studio Info */}
        <div className="footer-info">
          <h4 className="footer-heading">Informazioni Professionali</h4>
          <div className="footer-professional-info">
            <div className="professional-item">
              <span className="professional-label">Ordine degli Avvocati</span>
              <span className="professional-value">{studioInfo.professional.order}</span>
            </div>
            <div className="professional-item">
              <span className="professional-label">Partita IVA</span>
              <span className="professional-value">{studioInfo.professional.piva}</span>
            </div>
            <div className="professional-item">
              <span className="professional-label">Codice Fiscale</span>
              <span className="professional-value">{studioInfo.professional.codFisc}</span>
            </div>
          </div>
          
          <div className="footer-links-secondary">
            {secondaryLinks.map((link, index) => (
              <Link key={index} to={link.path} className="footer-link">{link.label}</Link>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © 2025 {studioInfo.name}. Tutti i diritti riservati.
          </p>
          <div className="footer-legal">
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link to={link.path} className="footer-legal-link">{link.label}</Link>
                {index < legalLinks.length - 1 && <span className="footer-separator">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}