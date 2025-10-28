// src/App.jsx
import React from 'react';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import LegalServices from "./pages/LegalServices.jsx";
import Contact from "./pages/Contact.jsx";  // ✅ Nuovo: Contatti generali
import FreeConsultation from "./pages/FreeConsultation.jsx";  // ✅ CTA page
import Privacy from "./pages/Privacy.jsx";  // ✅ Privacy Policy
import Terms from "./pages/Terms.jsx";  // ✅ Termini di Servizio
import Sitemap from "./pages/Sitemap.jsx";  // ✅ Mappa del Sito
import ScrollToTop from "./components/common/ScrollToTop.jsx";  // ✅ Scroll to top on route change
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<LegalServices />} />
        <Route path="/contact" element={<Contact />} />  {/* 📞 Info generali */}
        <Route path="/consultation" element={<FreeConsultation />} />  {/* 🎯 CTA conversion */}
        <Route path="/privacy" element={<Privacy />} />  {/* 📋 Privacy Policy */}
        <Route path="/terms" element={<Terms />} />  {/* 📋 Termini di Servizio */}
        <Route path="/sitemap" element={<Sitemap />} />  {/* 🗺️ Mappa del Sito */}
      </Routes>
    </Router>
  );
}