// src/components/layout/Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 
import "../../styles/Header.css";
import { studioInfo } from "../../data/teamData";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-section">
      {/* Logo/Brand Section */}
      <div className="header-brand">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 className="brand-title">{studioInfo.name}</h1>
          <span className="brand-subtitle">{studioInfo.subtitle}</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-desktop" aria-label="Navigazione principale">
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">Chi Siamo</Link></li>
          <li><Link to="/services" className="nav-link">Servizi Legali</Link></li>
          <li><Link to="/contact" className="nav-link">Contatti</Link></li>
          <li><Link to="/consultation" className="nav-link nav-cta">Consulenza Gratuita</Link></li>
        </ul>
      </nav>

      {/* ✅ Mobile Hamburger Button */}
      <button 
        className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label="Menu di navigazione"
        onClick={toggleMenu}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* ✅ Mobile Backdrop */}
      <div 
        className={`mobile-backdrop ${isMenuOpen ? 'active' : ''}`}
        aria-hidden="true"
        onClick={closeMenu}
      ></div>

      {/* ✅ Mobile Navigation Menu */}
      <nav 
        id="mobile-menu" 
        className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}
        aria-label="Navigazione mobile"
      >
        {/* Mobile Menu Header */}
        <div className="mobile-menu-header">
          <div className="mobile-brand">
            <h2 className="mobile-brand-title">{studioInfo.shortName}</h2>
            <span className="mobile-brand-subtitle">{studioInfo.mobileSubtitle}</span>
          </div>
          <button className="close-btn" aria-label="Chiudi menu" onClick={closeMenu}>
            ×
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="mobile-nav-list">
          <li>
            <Link to="/" className="mobile-nav-link" onClick={closeMenu}>
              <span className="mobile-nav-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>
              <span className="mobile-nav-text">Chi Siamo</span>
            </Link>
          </li>
          <li>
            <Link to="/services" className="mobile-nav-link" onClick={closeMenu}>
              <span className="mobile-nav-text">Servizi Legali</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>
              <span className="mobile-nav-text">📞 Contatti</span>
            </Link>
          </li>
          <li>
            <Link to="/consultation" className="mobile-nav-link mobile-nav-cta" onClick={closeMenu}>
              <span className="mobile-nav-text">🎯 Consulenza Gratuita</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Contact Info */}
        <div className="mobile-contact">
          <div className="mobile-contact-item">
            <span className="contact-label">Chiamata diretta</span>
            <a href="tel:+390212334567" className="contact-value">+39 02 1234567</a>
          </div>
          <div className="mobile-contact-item">
            <span className="contact-label">Email rapida</span>
            <a href="mailto:info@studiolegale.it" className="contact-value">info@studiolegale.it</a>
          </div>
        </div>
      </nav>
    </header>
  );
}