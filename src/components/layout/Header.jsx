// Header.jsx
import React, { useState, useEffect } from "react";
import "../../styles/Header.css";

/**
 * Professional Header Component
 * Desktop: Full navigation bar
 * Mobile: Hamburger menu with slide-out navigation
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Close menu when switching to desktop
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
        <h1 className="brand-title">Studio Legale</h1>
        <span className="brand-subtitle">Esperti in Diritto Civile</span>
      </div>

      {/* Desktop Navigation - Always visible on desktop */}
      <nav className="nav-desktop" aria-label="Navigazione principale">
        <ul>
          <li>
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li>
            <a href="#chi-siamo" className="nav-link">Chi Siamo</a>
          </li>
          <li>
            <a href="#servizi" className="nav-link">Servizi Legali</a>
          </li>
          <li>
            <a href="#contatti" className="nav-link nav-cta">Consulenza Gratuita</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Hamburger Button */}
      {isMobile && (
        <button 
          className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Menu di navigazione"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      )}

      {/* Mobile Slide Menu */}
      {isMobile && (
        <>
          {/* Backdrop */}
          <div 
            className={`mobile-backdrop ${isMenuOpen ? 'active' : ''}`}
            onClick={closeMenu}
            aria-hidden="true"
          ></div>

          {/* Mobile Navigation */}
          <nav 
            id="mobile-menu"
            className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}
            aria-label="Navigazione mobile"
          >
            <div className="mobile-menu-header">
              <div className="mobile-brand">
                <h2 className="mobile-brand-title">Studio Legale</h2>
                <span className="mobile-brand-subtitle">Esperti in Diritto Civile</span>
              </div>
              <button 
                className="close-btn"
                onClick={closeMenu}
                aria-label="Chiudi menu"
              >
                ×
              </button>
            </div>

            <ul className="mobile-nav-list">
              <li>
                <a href="#home" className="mobile-nav-link" onClick={closeMenu}>
                  <span className="mobile-nav-text">Home</span>
                </a>
              </li>
              <li>
                <a href="#chi-siamo" className="mobile-nav-link" onClick={closeMenu}>
                  <span className="mobile-nav-text">Chi Siamo</span>
                </a>
              </li>
              <li>
                <a href="#servizi" className="mobile-nav-link" onClick={closeMenu}>
                  <span className="mobile-nav-text">Servizi Legali</span>
                </a>
              </li>
              <li>
                <a href="#contatti" className="mobile-nav-link mobile-nav-cta" onClick={closeMenu}>
                  <span className="mobile-nav-text">Consulenza Gratuita</span>
                </a>
              </li>
            </ul>

            {/* Mobile Contact Info */}
            <div className="mobile-contact">
              <div className="mobile-contact-item">
                <span className="contact-label">Telefono</span>
                <span className="contact-value">+39 02 1234567</span>
              </div>
              <div className="mobile-contact-item">
                <span className="contact-label">Email</span>
                <span className="contact-value">info@studiolegale.it</span>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
