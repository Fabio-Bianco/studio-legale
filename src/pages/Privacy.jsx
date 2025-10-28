// src/pages/Privacy.jsx
import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/Pages.css';

export default function Privacy() {
  return (
    <Layout className="privacy-page">
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">
            Privacy Policy
          </h1>
          <p className="page-hero-description">
            Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR)
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="page-section">
        <div className="page-container">
          
          <div className="legal-content">
            
            {/* Titolare del trattamento */}
            <div className="legal-section">
              <h2 className="legal-section-title">1. Titolare del Trattamento</h2>
              <div className="legal-section-content">
                <p>
                  Il Titolare del trattamento dei dati personali è <strong>Studio Legale Livieri - Tenore</strong>, 
                  con sede legale in Via Amendola, 162/B - 70126 Bari (BA), P.IVA IT123456789012.
                </p>
                <p>
                  <strong>Contatti:</strong><br />
                  📧 Email: info@studiolegalelivieritenorebari.it<br />
                  📞 Telefono: +39 080 512 3456
                </p>
              </div>
            </div>

            {/* Tipologie di dati */}
            <div className="legal-section">
              <h2 className="legal-section-title">2. Tipologie di Dati Raccolti</h2>
              <div className="legal-section-content">
                <h3>Dati di Navigazione</h3>
                <p>
                  I sistemi informatici e le procedure software preposte al funzionamento di questo sito 
                  acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione 
                  è implicita nell'uso dei protocolli di comunicazione di Internet.
                </p>
                
                <h3>Dati Forniti Volontariamente</h3>
                <ul className="legal-list">
                  <li>Nome e cognome</li>
                  <li>Indirizzo email</li>
                  <li>Numero di telefono</li>
                  <li>Messaggio/richiesta di consulenza</li>
                  <li>Altri dati personali inseriti nei moduli di contatto</li>
                </ul>
              </div>
            </div>

            {/* Finalità del trattamento */}
            <div className="legal-section">
              <h2 className="legal-section-title">3. Finalità e Base Giuridica del Trattamento</h2>
              <div className="legal-section-content">
                <p>I dati personali sono trattati per le seguenti finalità:</p>
                <ul className="legal-list">
                  <li><strong>Risposta alle richieste:</strong> Per rispondere alle richieste di informazioni e consulenze legali (art. 6, lett. b GDPR)</li>
                  <li><strong>Gestione del rapporto professionale:</strong> Per l'esecuzione di prestazioni professionali richieste (art. 6, lett. b GDPR)</li>
                  <li><strong>Adempimenti legali:</strong> Per adempiere agli obblighi di legge (art. 6, lett. c GDPR)</li>
                  <li><strong>Marketing diretto:</strong> Solo previo consenso esplicito (art. 6, lett. a GDPR)</li>
                </ul>
              </div>
            </div>

            {/* Modalità di trattamento */}
            <div className="legal-section">
              <h2 className="legal-section-title">4. Modalità di Trattamento</h2>
              <div className="legal-section-content">
                <p>
                  Il trattamento dei dati personali è effettuato con strumenti informatici e/o telematici, 
                  con modalità organizzative e con logiche strettamente correlate alle finalità indicate.
                </p>
                <p>
                  Oltre al Titolare, potrebbero avere accesso ai dati categorie di incaricati coinvolti 
                  nell'organizzazione del sito (personale tecnico, commerciale, marketing, legali, amministratori di sistema).
                </p>
              </div>
            </div>

            {/* Conservazione */}
            <div className="legal-section">
              <h2 className="legal-section-title">5. Periodo di Conservazione</h2>
              <div className="legal-section-content">
                <p>I dati saranno conservati per il tempo necessario al raggiungimento delle finalità indicate:</p>
                <ul className="legal-list">
                  <li><strong>Richieste di informazioni:</strong> 24 mesi dalla data della richiesta</li>
                  <li><strong>Rapporti professionali:</strong> Per tutta la durata del rapporto e successivamente per 10 anni</li>
                  <li><strong>Adempimenti fiscali:</strong> 10 anni dalla cessazione del rapporto</li>
                  <li><strong>Marketing:</strong> Fino alla revoca del consenso</li>
                </ul>
              </div>
            </div>

            {/* Diritti dell'interessato */}
            <div className="legal-section">
              <h2 className="legal-section-title">6. Diritti dell'Interessato</h2>
              <div className="legal-section-content">
                <p>L'interessato ha diritto di ottenere:</p>
                <ul className="legal-list">
                  <li>La conferma dell'esistenza o meno di dati personali che lo riguardano</li>
                  <li>L'accesso ai propri dati personali</li>
                  <li>La rettifica dei dati inesatti</li>
                  <li>La cancellazione dei dati (diritto all'oblio)</li>
                  <li>La limitazione del trattamento</li>
                  <li>La portabilità dei dati</li>
                  <li>L'opposizione al trattamento</li>
                  <li>La revoca del consenso (ove applicabile)</li>
                </ul>
                <p>
                  Per esercitare tali diritti, è possibile contattare il Titolare all'indirizzo: 
                  <strong>info@studiolegalelivieritenorebari.it</strong>
                </p>
              </div>
            </div>

            {/* Cookie */}
            <div className="legal-section">
              <h2 className="legal-section-title">7. Uso dei Cookie</h2>
              <div className="legal-section-content">
                <p>
                  Questo sito utilizza cookie tecnici necessari per il funzionamento del sito e cookie analitici 
                  per migliorare l'esperienza di navigazione. Non utilizziamo cookie di profilazione o di terze parti 
                  per finalità pubblicitarie.
                </p>
                <p>
                  È possibile gestire le preferenze sui cookie attraverso le impostazioni del proprio browser.
                </p>
              </div>
            </div>

            {/* Aggiornamenti */}
            <div className="legal-section">
              <h2 className="legal-section-title">8. Modifiche alla Privacy Policy</h2>
              <div className="legal-section-content">
                <p>
                  La presente Privacy Policy può essere modificata nel tempo. 
                  L'ultima versione sarà sempre disponibile su questa pagina.
                </p>
                <p><strong>Ultimo aggiornamento:</strong> 28 ottobre 2025</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </Layout>
  );
}