// src/components/sections/Main.jsx
import React from "react";
import "../../styles/Main.css";
import { ScaleIcon, BriefcaseIcon, FileTextIcon, BuildingIcon } from "../layout/Icons.jsx";

export default function Main() {
  return (
    <main className="main-section" aria-labelledby="activities-title">
      <div className="main-container">
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
