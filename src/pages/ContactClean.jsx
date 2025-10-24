// src/pages/Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import '../styles/Pages.css';

export default function Contact() {
  return (
    <Layout className="contact-page" showScrollProgress={false}>
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">
            Contatti
          </h1>
          <p className="page-hero-description">
            Raggiungi il nostro studio legale per informazioni generali, 
            orari di apertura e appuntamenti.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="page-section">
        <div className="page-container">
          
          <div className="page-card-grid">
            
            {/* Office Location */}
            <div className="page-card">
              <span className="page-card-icon">🏢</span>
              <h3 className="page-card-title">
                Studio Legale
              </h3>
              <div className="page-card-content">
                <p><strong>Via Roma 123</strong></p>
                <p>20100 Milano (MI)</p>
                <p>Italia</p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="page-card">
              <span className="page-card-icon">📞</span>
              <h3 className="page-card-title">
                Contattaci
              </h3>
              <div className="page-card-content">
                <p><strong>Telefono:</strong> <a href="tel:+390212334567" className="contact-link">+39 02 123 4567</a></p>
                <p><strong>Email:</strong> <a href="mailto:info@studiolegale.it" className="contact-link">info@studiolegale.it</a></p>
                <p><strong>PEC:</strong> studio@pec.studiolegale.it</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="page-card">
              <span className="page-card-icon">🕒</span>
              <h3 className="page-card-title">
                Orari di Apertura
              </h3>
              <div className="page-card-content">
                <p><strong>Lunedì - Venerdì:</strong> 9:00 - 18:00</p>
                <p><strong>Sabato:</strong> 9:00 - 13:00</p>
                <p><strong>Domenica:</strong> Chiuso</p>
                <p><em>Su appuntamento anche fuori orario</em></p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="page-card" style={{ 
            marginTop: 'var(--space-8)', 
            background: 'linear-gradient(135deg, var(--color-accent) 0%, #dcad4a 100%)',
            color: '#ffffff',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontSize: 'var(--fs-h2)', 
              marginBottom: 'var(--space-3)',
              color: '#ffffff'
            }}>
              Hai Bisogno di Assistenza Legale Immediata?
            </h3>
            <p style={{ 
              fontSize: 'var(--fs-body)', 
              marginBottom: 'var(--space-4)',
              opacity: 0.95
            }}>
              Non perdere tempo con pratiche complesse. Richiedi una consulenza gratuita 
              e parla direttamente con un avvocato esperto.
            </p>
            <Link 
              to="/consultation" 
              style={{
                display: 'inline-block',
                padding: 'var(--space-3) var(--space-6)',
                background: '#ffffff',
                color: 'var(--color-primary)',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: 'var(--fs-body)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
              }}
            >
              🎯 Consulenza Gratuita Ora
            </Link>
          </div>
        </div>
      </section>
      
    </Layout>
  );
}