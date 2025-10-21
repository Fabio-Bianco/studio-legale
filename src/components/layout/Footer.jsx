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

        {/* Contact Info */}
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
            <span className="contact-value">Via Roma 123, Milano</span>
          </div>
        </div>

        {/* Services */}
        <div className="footer-services">
          <h4 className="footer-heading">Servizi</h4>
          <ul className="footer-links">
            <li><a href="#civile" className="footer-link">Diritto Civile</a></li>
            <li><a href="#penale" className="footer-link">Diritto Penale</a></li>
            <li><a href="#aziendale" className="footer-link">Diritto Aziendale</a></li>
            <li><a href="#famiglia" className="footer-link">Diritto di Famiglia</a></li>
          </ul>
        </div>

        {/* CTA */}
        <div className="footer-cta">
          <h4 className="footer-heading">Consulenza Gratuita</h4>
          <p className="footer-cta-text">Ricevi assistenza legale professionale</p>
          <a href="#prenota" className="footer-cta-button">
            Contattaci Ora
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © 2025 Studio Legale Professionale. Tutti i diritti riservati.
          </p>
          <div className="footer-legal">
            <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
            <span className="footer-separator">•</span>
            <a href="#terms" className="footer-legal-link">Termini di Servizio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
    
