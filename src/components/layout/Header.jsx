// src/components/layout/Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 
import { studioInfo, mainNavigation } from "../../data/studioData";
import "../../styles/Header.css";

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
    window.addEventListener('orientationchange', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
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

  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-mobile') && !event.target.closest('.hamburger-btn')) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

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
          {mainNavigation.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path} 
                className={`nav-link ${item.cta ? 'nav-cta' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
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
            <span className="mobile-brand-subtitle">{studioInfo.subtitle}</span>
          </div>
          <button className="close-btn" aria-label="Chiudi menu" onClick={closeMenu}>
            ×
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="mobile-nav-list">
          {mainNavigation.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path} 
                className={`mobile-nav-link ${item.cta ? 'mobile-nav-cta' : ''}`} 
                onClick={closeMenu}
              >
                <span className="mobile-nav-text">
                  {item.cta ? '🎯 ' : ''}{item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Contact Info */}
        <div className="mobile-contact">
          <div className="mobile-contact-item">
            <span className="contact-label">Chiamata diretta</span>
            <a href={`tel:${studioInfo.contact.phone}`} className="contact-value">
              {studioInfo.contact.phoneFormatted}
            </a>
          </div>
          <div className="mobile-contact-item">
            <span className="contact-label">Email rapida</span>
            <a href={`mailto:${studioInfo.contact.email}`} className="contact-value">
              {studioInfo.contact.email}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}