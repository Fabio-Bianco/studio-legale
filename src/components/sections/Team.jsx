// src/components/sections/Team.jsx
import React from 'react';
import { teamMembers, teamHeader, studioValues, studioStats } from '../../data/teamData';
import "../../styles/Team.css";

/**
 * Team section - Presentazione avvocatesse
 * Posizionata strategicamente tra Hero e Main per optimal UX flow
 */
export default function Team() {
  return (
    <section className="team-section" aria-labelledby="team-title">
      <div className="team-container">
        
        {/* Header Section */}
        <div className="team-header">
          <div className="team-badge">
            {teamHeader.badge}
          </div>
          <h2 id="team-title" className="team-title">
            <span className="title-desktop">{teamHeader.title.desktop}</span>
            <span className="title-mobile">{teamHeader.title.mobile}</span>
          </h2>
          <p className="team-subtitle">
            <span className="subtitle-desktop">
              {teamHeader.subtitle.desktop}
            </span>
            <span className="subtitle-mobile">
              {teamHeader.subtitle.mobile}
            </span>
          </p>
          
          {/* Inline Trust Stats for compact layout */}
          <div className="team-inline-stats">
            {studioStats.map(stat => (
              <div key={stat.id} className={`inline-stat ${stat.type}`}>
                <span className="inline-stat-number">{stat.number}</span>
                <span className="inline-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Cards */}
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
                <p className="team-card-text">
                  {member.description}
                </p>
                {member.philosophy && (
                  <blockquote className="team-card-philosophy">
                    "{member.philosophy}"
                  </blockquote>
                )}
                <div className="team-card-achievements">
                  {member.achievements.map((achievement, index) => (
                    <div key={index} className="achievement-item">
                      <span className="achievement-number">{achievement.number}</span>
                      <span className="achievement-label">{achievement.label}</span>
                    </div>
                  ))}
                </div>
                <div className="team-card-credentials">
                  {member.credentials}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Studio Values Section */}
        <div className="team-values">
          <div className="values-content">
            <h3 className="values-title">I Nostri Valori</h3>
            <div className="values-grid">
              {studioValues.map(value => (
                <div key={value.id} className="value-item">
                  <h4 className="value-name">{value.name}</h4>
                  <p className="value-text">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust statistics now integrated inline in header for vertical compactness */}

      </div>
    </section>
  );
}