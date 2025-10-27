// src/pages/About.jsx
import React from "react";
import Layout from "../components/layout/Layout";
import { teamMembers, studioValues, studioStats, studioInfo } from "../data/teamData";
import "../styles/About.css";

export default function About() {
  return (
    <Layout className="about-page">
      
      {/* Opening Statement - Impatto immediato */}
      <section className="about-opening">
        <div className="about-container">
          <div className="opening-content">
            <div className="opening-badge">Dal 2014</div>
            <h1 className="opening-title">
              Studio Livieri Tenore
              <span className="title-accent">Due Professioniste, Una Visione</span>
            </h1>
            <div className="opening-lead">
              Nel panorama giuridico contemporaneo, dove la complessità normativa 
              spesso allontana le persone dalla giustizia, noi abbiamo scelto una strada diversa: 
              <strong>trasformare l'eccellenza tecnica in soluzioni umane e accessibili</strong>.
            </div>
          </div>
        </div>
      </section>

      {/* Genesis Story - La nascita dello studio */}
      <section className="about-genesis">
        <div className="about-container">
          <div className="genesis-layout">
            <div className="genesis-narrative">
              <div className="narrative-marker">2014</div>
              <h2 className="narrative-title">L'Inizio di un Percorso</h2>
              
              <div className="narrative-flow">
                <p className="narrative-paragraph">
                  <strong>Patrizia Livieri</strong> e <strong>Federica Tenore</strong> si incontrano 
                  durante gli anni universitari, accomunate da una visione: il diritto come strumento 
                  di protezione e giustizia sociale, non come barriera tecnica inaccessibile.
                </p>

                <p className="narrative-paragraph">
                  Dopo anni di esperienza in contesti diversi, decidono di unire le proprie competenze 
                  complementari. Patrizia, con la sua expertise nel <em>diritto civile e contrattuale</em>, 
                  e Federica, specializzata nel <em>diritto di famiglia e successioni</em>.
                </p>

                <blockquote className="narrative-quote">
                  "Non volevamo creare l'ennesimo studio legale. Volevamo costruire un ponte 
                  tra la complessità del diritto e le esigenze concrete delle persone"
                  <cite>— Patrizia Livieri & Federica Tenore</cite>
                </blockquote>
              </div>
            </div>
            
            <aside className="genesis-timeline">
              <div className="timeline-header">Il Nostro Percorso</div>
              <div className="timeline-stats">
                {studioStats.map(stat => (
                  <div key={stat.id} className="timeline-stat">
                    <div className="stat-figure">{stat.number}</div>
                    <div className="stat-description">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="timeline-milestone">
                <strong>Oggi</strong>: Un punto di riferimento nel settore legale, 
                con un approccio che coniuga rigore professionale e sensibilità umana.
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Expertise Showcase - Le nostre professioniste */}
      <section className="about-expertise">
        <div className="about-container">
          <div className="expertise-intro">
            <h2 className="expertise-title">Competenze Complementari, Risultati Eccellenti</h2>
            <p className="expertise-subtitle">
              Due personalità professionali distinte che si integrano per offrire 
              una consulenza legale completa e multidisciplinare
            </p>
          </div>

          <div className="expertise-profiles">
            {teamMembers.map(member => (
              <article key={member.id} className="profile-showcase">
                <div className="profile-header">
                  <div className="profile-identity">
                    <img 
                      src={member.avatar} 
                      alt={member.alt}
                      className="profile-portrait"
                    />
                    <div className="identity-details">
                      <h3 className="profile-name">{member.name}</h3>
                      <div className="profile-specialization">{member.title}</div>
                      <div className="profile-credentials">{member.role}</div>
                    </div>
                  </div>
                </div>
                
                <div className="profile-expertise">
                  <div className="expertise-text">
                    <p>{member.description}</p>
                  </div>

                  <div className="professional-philosophy">
                    <div className="philosophy-label">Approccio Professionale</div>
                    <div className="philosophy-text">"{member.philosophy}"</div>
                  </div>

                  <div className="achievement-grid">
                    {member.achievements.map((achievement, index) => (
                      <div key={index} className="achievement-metric">
                        <span className="metric-value">{achievement.number}</span>
                        <span className="metric-context">{achievement.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Values - I nostri principi */}
      <section className="about-philosophy">
        <div className="about-container">
          <div className="philosophy-intro">
            <h2 className="philosophy-title">I Principi che Guidano il Nostro Operato</h2>
            <p className="philosophy-subtitle">
              Valori non negoziabili che definiscono ogni nostra decisione professionale 
              e ogni rapporto con i clienti
            </p>
          </div>

          <div className="values-matrix">
            {studioValues.map((value, index) => (
              <div key={value.id} className="value-pillar">
                <div className="pillar-header">
                  <div className="pillar-number">{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="pillar-title">{value.name}</h3>
                </div>
                <div className="pillar-content">
                  <p className="pillar-description">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement - La nostra missione */}
      <section className="about-mission">
        <div className="about-container">
          <div className="mission-layout">
            <div className="mission-statement">
              <div className="statement-badge">La Nostra Missione</div>
              <h2 className="statement-title">
                Rendere il Diritto Accessibile, Comprensibile e Umano
              </h2>
              
              <div className="statement-content">
                <p className="statement-lead">
                  In un mondo dove la complessità normativa può intimidire, 
                  noi scegliamo la <strong>chiarezza</strong>. Dove la burocrazia può allontanare, 
                  noi costruiamo <strong>ponti di comprensione</strong>.
                </p>

                <div className="commitment-grid">
                  <div className="commitment-item">
                    <div className="commitment-marker"></div>
                    <div className="commitment-content">
                      <h4>Eccellenza Tecnica</h4>
                      <p>Competenze specialistiche costantemente aggiornate attraverso formazione continua e confronto con le migliori pratiche del settore</p>
                    </div>
                  </div>
                  
                  <div className="commitment-item">
                    <div className="commitment-marker"></div>
                    <div className="commitment-content">
                      <h4>Vicinanza Umana</h4>
                      <p>Ascolto attento, empatia professionale e supporto personalizzato in ogni fase del percorso legale</p>
                    </div>
                  </div>

                  <div className="commitment-item">
                    <div className="commitment-marker"></div>
                    <div className="commitment-content">
                      <h4>Trasparenza Totale</h4>
                      <p>Comunicazione chiara su tempi, costi e strategie, perché i nostri clienti devono sempre sapere dove stanno andando</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mission-manifesto">
              <div className="manifesto-card">
                <div className="manifesto-content">
                  <div className="manifesto-quote">
                    "Ogni cliente non è un caso, ma una persona con una storia che merita 
                    rispetto, attenzione e le migliori competenze legali disponibili"
                  </div>
                  <div className="manifesto-signature">
                    <div className="signature-line"></div>
                    <div className="signature-text">Studio Livieri Tenore</div>
                    <div className="signature-years">2014 - 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}