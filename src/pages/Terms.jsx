// src/pages/Terms.jsx
import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/Pages.css';

export default function Terms() {
  return (
    <Layout className="terms-page">
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-container">
          <h1 className="page-hero-title">
            Termini di Servizio
          </h1>
          <p className="page-hero-description">
            Condizioni generali per l'utilizzo del sito web e dei servizi legali offerti
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="page-section">
        <div className="page-container">
          
          <div className="legal-content">
            
            {/* Premesse */}
            <div className="legal-section">
              <h2 className="legal-section-title">1. Premesse</h2>
              <div className="legal-section-content">
                <p>
                  I presenti Termini di Servizio disciplinano l'accesso e l'utilizzo del sito web 
                  <strong>Studio Legale Livieri - Tenore</strong> e dei servizi legali offerti.
                </p>
                <p>
                  L'accesso e l'utilizzo del sito implica l'accettazione integrale dei presenti termini. 
                  Se non si accettano questi termini, si prega di non utilizzare il sito.
                </p>
              </div>
            </div>

            {/* Definizioni */}
            <div className="legal-section">
              <h2 className="legal-section-title">2. Definizioni</h2>
              <div className="legal-section-content">
                <ul className="legal-list">
                  <li><strong>"Studio" o "Professionista":</strong> Studio Legale Livieri - Tenore</li>
                  <li><strong>"Sito":</strong> Il presente sito web e tutti i suoi contenuti</li>
                  <li><strong>"Utente" o "Cliente":</strong> Chiunque acceda al sito o richieda servizi</li>
                  <li><strong>"Servizi":</strong> Le prestazioni professionali legali offerte dallo Studio</li>
                </ul>
              </div>
            </div>

            {/* Uso del sito */}
            <div className="legal-section">
              <h2 className="legal-section-title">3. Uso del Sito Web</h2>
              <div className="legal-section-content">
                <h3>Accesso e Navigazione</h3>
                <p>
                  L'accesso al sito è gratuito. Lo Studio si riserva il diritto di modificare, 
                  sospendere o interrompere il servizio in qualsiasi momento senza preavviso.
                </p>
                
                <h3>Uso Consentito</h3>
                <p>L'Utente si impegna a utilizzare il sito esclusivamente per:</p>
                <ul className="legal-list">
                  <li>Consultare informazioni sui servizi legali</li>
                  <li>Richiedere informazioni o consulenze</li>
                  <li>Contattare lo Studio per questioni professionali</li>
                </ul>
                
                <h3>Uso Vietato</h3>
                <p>È espressamente vietato:</p>
                <ul className="legal-list">
                  <li>Utilizzare il sito per scopi illegali</li>
                  <li>Tentare di accedere a aree riservate</li>
                  <li>Inviare virus o codice dannoso</li>
                  <li>Copiare, modificare o distribuire i contenuti senza autorizzazione</li>
                  <li>Utilizzare il sito per spam o comunicazioni massive</li>
                </ul>
              </div>
            </div>

            {/* Servizi legali */}
            <div className="legal-section">
              <h2 className="legal-section-title">4. Servizi Legali</h2>
              <div className="legal-section-content">
                <h3>Natura dei Servizi</h3>
                <p>
                  Lo Studio fornisce servizi di consulenza e assistenza legale nelle materie di propria competenza, 
                  nel rispetto del Codice Deontologico Forense e delle normative vigenti.
                </p>
                
                <h3>Rapporto Professionale</h3>
                <p>
                  Il rapporto professionale si instaura esclusivamente mediante conferimento di incarico scritto, 
                  previa valutazione della fattibilità e dell'assenza di conflitti di interesse.
                </p>
                
                <h3>Compensi</h3>
                <p>
                  I compensi sono determinati secondo quanto previsto dal D.M. 55/2014 e successive modificazioni, 
                  in base alla complessità della pratica, al valore dell'affare e al tempo impiegato.
                </p>
                
                <h3>Consulenza Preliminare</h3>
                <p>
                  La prima consulenza informativa può essere fornita gratuitamente e non costituisce 
                  conferimento di incarico professionale né crea obblighi di assistenza continuativa.
                </p>
              </div>
            </div>

            {/* Responsabilità */}
            <div className="legal-section">
              <h2 className="legal-section-title">5. Limitazioni di Responsabilità</h2>
              <div className="legal-section-content">
                <h3>Contenuti del Sito</h3>
                <p>
                  Le informazioni presenti sul sito hanno carattere generale e non costituiscono 
                  consulenza legale specifica. Per questioni particolari è necessario richiedere 
                  una consulenza personalizzata.
                </p>
                
                <h3>Disponibilità del Servizio</h3>
                <p>
                  Lo Studio non garantisce la continuità di accesso al sito e non sarà responsabile 
                  per interruzioni del servizio dovute a manutenzione, guasti tecnici o cause di forza maggiore.
                </p>
                
                <h3>Link Esterni</h3>
                <p>
                  Il sito può contenere link a siti esterni. Lo Studio non è responsabile per i contenuti 
                  o le pratiche sulla privacy di tali siti.
                </p>
              </div>
            </div>

            {/* Proprietà intellettuale */}
            <div className="legal-section">
              <h2 className="legal-section-title">6. Proprietà Intellettuale</h2>
              <div className="legal-section-content">
                <p>
                  Tutti i contenuti del sito (testi, immagini, grafica, layout, software) sono protetti 
                  da diritti di proprietà intellettuale e appartengono allo Studio o ai rispettivi proprietari.
                </p>
                <p>
                  È vietata la riproduzione, distribuzione, modifica o utilizzo commerciale dei contenuti 
                  senza espressa autorizzazione scritta.
                </p>
              </div>
            </div>

            {/* Segreto professionale */}
            <div className="legal-section">
              <h2 className="legal-section-title">7. Segreto Professionale e Riservatezza</h2>
              <div className="legal-section-content">
                <p>
                  Lo Studio è tenuto al segreto professionale ai sensi dell'art. 9 del Codice Deontologico Forense 
                  per tutte le informazioni acquisite nell'esercizio dell'attività professionale.
                </p>
                <p>
                  Le comunicazioni tramite email o moduli web non sono protette da segreto professionale 
                  fino all'instaurazione di un rapporto professionale formale.
                </p>
              </div>
            </div>

            {/* Modifiche */}
            <div className="legal-section">
              <h2 className="legal-section-title">8. Modifiche ai Termini</h2>
              <div className="legal-section-content">
                <p>
                  Lo Studio si riserva il diritto di modificare i presenti Termini di Servizio in qualsiasi momento. 
                  Le modifiche saranno efficaci dalla data di pubblicazione sul sito.
                </p>
                <p>
                  È responsabilità dell'Utente verificare periodicamente eventuali aggiornamenti.
                </p>
              </div>
            </div>

            {/* Legge applicabile */}
            <div className="legal-section">
              <h2 className="legal-section-title">9. Legge Applicabile e Foro Competente</h2>
              <div className="legal-section-content">
                <p>
                  I presenti Termini sono disciplinati dalla legge italiana. 
                  Per qualsiasi controversia è competente il Foro di Bari.
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