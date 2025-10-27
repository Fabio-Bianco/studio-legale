// src/components/sections/Team.jsx
import React, { useState } from 'react';
import { teamMembers, teamHeader, studioValues, studioStats } from '../../data/teamData';
import "../../styles/Team.css";

/**
 * Team section - Header "Chi Siamo" + Card delle avvocatesse + sezioni valori/numeri/risultati
 * Sezione principale con presentazione completa dello studio
 */
export default function Team() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (memberId) => {
    setExpandedCards(prev => ({
      ...prev,
      [memberId]: !prev[memberId]
    }));
  };

  const truncateText = (text, limit = 320) => {
    if (text.length <= limit) return text;
    
    // Cerca la fine dell'ultima frase completa entro il limite
    const truncated = text.substring(0, limit);
    const lastSentenceEnd = Math.max(
      truncated.lastIndexOf('.'),
      truncated.lastIndexOf('!'),
      truncated.lastIndexOf('?')
    );
    
    // Se troviamo una fine frase, usa quella; altrimenti taglia alla parola
    if (lastSentenceEnd > limit * 0.7) { // Almeno 70% del limite
      return text.substring(0, lastSentenceEnd + 1);
    }
    
    // Fallback: taglia all'ultima parola completa
    const lastSpace = truncated.lastIndexOf(' ');
    return text.substring(0, lastSpace) + '...';
  };

  return (
    <section className="team-section" aria-labelledby="team-title">
      <div className="team-container">
        
        {/* Header: Badge + Titolo + Sottotitolo */}
        <div className="team-header">
          <div className="team-badge">{teamHeader.badge}</div>
          <h2 className="team-title" id="team-title">
            <span className="title-desktop">{teamHeader.title.desktop}</span>
            <span className="title-mobile">{teamHeader.title.mobile}</span>
          </h2>
          <p className="team-subtitle">
            <span className="subtitle-desktop">{teamHeader.subtitle.desktop}</span>
            <span className="subtitle-mobile">{teamHeader.subtitle.mobile}</span>
          </p>
        </div>
      
        {/* Team Cards - Allargate */}
        <div className="team-cards">
          {teamMembers.map(member => (
            <article key={member.id} className="team-card">
              <div className="team-card-media">
                <img 
                  className="team-avatar" 
                  src={member.avatar} 
                  alt={member.alt} 
                />
              </div>
              <div className="team-card-body">
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-title">{member.title}</p>
                <div className="team-card-role-badge">{member.role}</div>
                <div className="team-card-text">
                  {expandedCards[member.id] 
                    ? member.description 
                    : truncateText(member.description, 120)
                  }
                  {member.description.length > 120 && (
                    <button 
                      className="read-more-btn"
                      onClick={() => toggleExpanded(member.id)}
                    >
                      {expandedCards[member.id] ? 'Mostra meno' : 'Scopri di più'}
                    </button>
                  )}
                </div>
                {member.philosophy && (
                  <blockquote className="team-card-philosophy">
                    "{member.philosophy}"
                  </blockquote>
                )}
                {/* SEZIONE CREDENTIALS/TITOLI DI STUDIO - Temporaneamente disattivata */}
                {/* 
                <div className="team-card-credentials">
                  {member.credentials}
                </div>
                */}
              </div>
            </article>
          ))}
        </div>

        {/* 1. I NOSTRI VALORI - Sezione orizzontale con larghezza coerente alle card */}
        <div className="team-values-section">
          <div className="values-header">
            <h3 className="values-title">I Nostri Valori</h3>
            <p className="values-subtitle">I principi fondamentali che guidano ogni nostra decisione professionale</p>
          </div>
          <div className="values-horizontal">
            {studioValues.map(value => (
              <div key={value.id} className="value-item">
                <div className="value-icon">⚖️</div>
                <h4 className="value-name">{value.name}</h4>
                <p className="value-text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. SEZIONI AFFIANCATE: Esperienza in Numeri | Risultati Specializzazione */}
        <div className="team-two-columns">
          
          {/* Colonna A: LA NOSTRA ESPERIENZA IN NUMERI */}
          <div className="numbers-section">
            <div className="section-header">
              <h3 className="section-title">La Nostra Esperienza</h3>
              <p className="section-subtitle">Anni di professionalità tradotti in numeri</p>
            </div>
            <div className="numbers-grid">
              {studioStats.map(stat => (
                <div key={stat.id} className={`number-item ${stat.type}`}>
                  <span className="number-value">{stat.number}</span>
                  <span className="number-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonna B: RISULTATI SPECIALIZZAZIONE */}
          <div className="results-section">
            <div className="section-header">
              <h3 className="section-title">Risultati per Specializzazione</h3>
              <p className="section-subtitle">I successi raggiunti nelle nostre aree di competenza</p>
            </div>
            <div className="results-list">
              {teamMembers.map(member => 
                member.achievements.map((achievement, index) => (
                  <div key={`${member.id}-${index}`} className="result-item">
                    <div className="result-number">{achievement.number}</div>
                    <div className="result-content">
                      <div className="result-label">{achievement.label}</div>
                      <div className="result-member">{member.name.split(' ')[1]}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}