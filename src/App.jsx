// src/App.jsx
import React from 'react';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import LegalServices from "./pages/LegalServices.jsx";
import Contact from "./pages/Contact.jsx";  // ✅ Nuovo: Contatti generali
import FreeConsultation from "./pages/FreeConsultation.jsx";  // ✅ CTA page
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<LegalServices />} />
        <Route path="/contact" element={<Contact />} />  {/* 📞 Info generali */}
        <Route path="/consultation" element={<FreeConsultation />} />  {/* 🎯 CTA conversion */}
      </Routes>
    </Router>
  );
}