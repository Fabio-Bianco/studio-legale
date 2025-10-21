// Header.jsx
import React from "react";
import "../../styles/Header.css";

/**
 * Professional Header Component
 * Clean, minimalist navigation with clear typography
 * Mobile-first responsive design without icons
 */
export default function Header() {
  return (
    <header className="header-section">
      {/* Logo/Brand Section */}
      <div className="header-brand">
        <h1 className="brand-title">Studio Legale</h1>
        <span className="brand-subtitle">Esperti in Diritto Civile</span>
      </div>

      {/* Professional Navigation - Desktop */}
      <nav className="nav-desktop" aria-label="Navigazione principale">
        <ul>
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#chi-siamo" className="nav-link">
              Chi Siamo
            </a>
          </li>
          <li>
            <a href="#servizi" className="nav-link">
              Servizi Legali
            </a>
          </li>
          <li>
            <a href="#contatti" className="nav-link nav-cta">
              Consulenza Gratuita
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation - Clean text-only */}
      <nav className="nav-mobile" aria-label="Navigazione mobile">
        <ul>
          <li>
            <a href="#home" className="nav-mobile-link">
              Home
            </a>
          </li>
          <li>
            <a href="#chi-siamo" className="nav-mobile-link">
              Chi Siamo
            </a>
          </li>
          <li>
            <a href="#servizi" className="nav-mobile-link">
              Servizi
            </a>
          </li>
          <li>
            <a href="#contatti" className="nav-mobile-link nav-mobile-cta">
              Contatti
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
