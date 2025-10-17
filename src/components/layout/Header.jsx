// Header.jsx
import React from "react";
import "../../styles/Header.css"; // aggiorna il percorso al tuo CSS
import {
  HomeIcon,
  UsersIcon,
  ScaleIcon,
  BlogIcon,
  MailIcon,
} from "./Icons.jsx";

/* ...commenti e descrizioni come in precedenza... */

export default function Header() {
  return (
    <header className="header-section">
      {/* Barra di navigazione desktop: icone + testo */}
      <nav className="nav-desktop" aria-label="Navigazione principale desktop">
        <ul>
          <li>
            <a href="#home" className="nav-link">
              <HomeIcon />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#chi-siamo" className="nav-link">
              <UsersIcon />
              <span>Chi siamo</span>
            </a>
          </li>
          <li>
            <a href="#aree" className="nav-link">
              <ScaleIcon />
              <span>Aree</span>
            </a>
          </li>
          <li>
            <a href="#blog" className="nav-link">
              <BlogIcon />
              <span>Blog</span>
            </a>
          </li>
          <li>
            <a href="#contatti" className="nav-link">
              <MailIcon />
              <span>Contatti</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Barra di navigazione mobile/tablet: solo icone, una per ciascuna voce */}
      <nav className="nav-mobile" aria-label="Navigazione mobile">
        <ul>
          <li>
            <a href="#home" className="nav-icon-link" aria-label="Home">
              <HomeIcon />
            </a>
          </li>
          <li>
            <a href="#chi-siamo" className="nav-icon-link" aria-label="Chi siamo">
              <UsersIcon />
            </a>
          </li>
          <li>
            <a href="#aree" className="nav-icon-link" aria-label="Aree">
              <ScaleIcon />
            </a>
          </li>
          <li>
            <a href="#blog" className="nav-icon-link" aria-label="Blog">
              <BlogIcon />
            </a>
          </li>
          <li>
            <a href="#contatti" className="nav-icon-link" aria-label="Contatti">
              <MailIcon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
