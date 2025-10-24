// src/pages/About.jsx
import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/Pages.css';

export default function About() {
  return (
    <Layout className="about-page">
      <section className="page-section">
        <div className="page-container">
          <h1 className="page-hero-title">
            Chi Siamo
          </h1>
          <p className="page-hero-description">
            Pagina About in costruzione... Qui inseriremo informazioni dettagliate 
            sullo studio legale, la nostra storia e i nostri valori.
          </p>
        </div>
      </section>
    </Layout>
  );
}