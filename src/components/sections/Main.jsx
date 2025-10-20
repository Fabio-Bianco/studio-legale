// src/components/sections/Main.jsx
import React from "react";
import "../../styles/Main.css";
import { ScaleIcon, BriefcaseIcon, FileTextIcon, BuildingIcon } from "../layout/Icons.jsx";

// 🔴 Scegli l'estensione che ESISTE nel tuo progetto.
// Se hai il file .jpeg:
import duoImage from "../../assets/hero_figures_final.jpeg";
// Se hai il file .png, cambia la riga sopra in:
// import duoImage from "../../assets/hero_figures_final.png";

export default function Main() {
  return (
    <main className="main-section" aria-labelledby="chi-siamo-title">
      <div className="main-container">
        {/* Chi Siamo */}
        <h2 id="chi-siamo-title" className="main-title">Chi Siamo</h2>

        <div className="cards">
          <article className="card" aria-labelledby="avv-rossi">
            <figure className="card-media">
              <img src={duoImage} alt="Avvocatessa 1" className="avatar avatar--left" />
            </figure>
            <div className="card-body">
              <h3 id="avv-rossi" className="card-name">Avv. Maria Rossi</h3>
              <p className="card-role">Diritto di Famiglia • Mediazione</p>
              <p className="card-text">
                Approccio empatico e pragmatico. Trasparenza su tempi e costi, con soluzioni sostenibili.
              </p>
              <a href="#profilo-maria" className="card-link">Profilo completo →</a>
            </div>
          </article>

          <article className="card" aria-labelledby="avv-bianchi">
            <figure className="card-media">
              <img src={duoImage} alt="Avvocatessa 2" className="avatar avatar--right" />
            </figure>
            <div className="card-body">
              <h3 id="avv-bianchi" className="card-name">Avv. Laura Bianchi</h3>
              <p className="card-role">Civile • Recupero Crediti</p>
              <p className="card-text">
                Strategia rapida e mirata. Preventivi chiari e aggiornamenti puntuali fino alla risoluzione.
              </p>
              <a href="#profilo-laura" className="card-link">Profilo completo →</a>
            </div>
          </article>
        </div>

        {/* Aree di Attività (icone locali) */}
        <section className="activities" aria-labelledby="activities-title">
          <h2 id="activities-title" className="main-title">Aree di Attività</h2>

          <div className="activity-grid">
            <div className="activity-card">
              <ScaleIcon className="activity-icon" />
              <h3 className="activity-title">Diritto di Famiglia</h3>
              <p className="activity-text">
                Separazioni, divorzi, tutela dei minori e successioni.
              </p>
            </div>

            <div className="activity-card">
              <BriefcaseIcon className="activity-icon" />
              <h3 className="activity-title">Lavoro e Contratti</h3>
              <p className="activity-text">
                Contrattualistica, contenzioso e consulenza continuativa alle imprese.
              </p>
            </div>

            <div className="activity-card">
              <FileTextIcon className="activity-icon" />
              <h3 className="activity-title">Civile e Recupero Crediti</h3>
              <p className="activity-text">
                Inadempienze, responsabilità civile e azioni efficaci di recupero.
              </p>
            </div>

            <div className="activity-card">
              <BuildingIcon className="activity-icon" />
              <h3 className="activity-title">Consulenze Aziendali</h3>
              <p className="activity-text">
                Supporto legale stabile per PMI e startup, analisi del rischio.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
