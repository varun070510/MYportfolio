import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  User, 
  Binary, 
  Database, 
  Lightbulb, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Compass 
} from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  const pillarIcons = [
    <Binary size={24} />,
    <Database size={24} />,
    <Lightbulb size={24} />
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="section-title">
            Passionate About Data, Algorithms &amp; Intelligent Systems
          </h2>
          <p className="section-subtitle">
            A grounded approach to learning AI engineering—starting from foundational computational theory to tangible software implementations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left Column: Bio & Core Info */}
          <div className="glass-card about-bio-card">
            {PORTFOLIO_DATA.personal.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Structured Details Box */}
            <div className="about-details-box">
              <div className="detail-item">
                <span className="detail-label">Current Program</span>
                <span className="detail-value">
                  <GraduationCap size={15} style={{ display: 'inline', marginRight: 6, verticalAlign: -2 }} />
                  B.E. in AI &amp; Machine Learning
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Institution</span>
                <span className="detail-value">AJIET Mangaluru</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">
                  <MapPin size={15} style={{ display: 'inline', marginRight: 6, verticalAlign: -2 }} />
                  {PORTFOLIO_DATA.personal.location}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Primary Email</span>
                <span className="detail-value" style={{ wordBreak: 'break-all' }}>
                  <Mail size={15} style={{ display: 'inline', marginRight: 6, verticalAlign: -2 }} />
                  {PORTFOLIO_DATA.personal.email}
                </span>
              </div>

              <div className="detail-item" style={{ gridColumn: '1 / -1' }}>
                <span className="detail-label">Aspiration &amp; Focus</span>
                <span className="detail-value" style={{ color: 'var(--blue-400)' }}>
                  <Compass size={15} style={{ display: 'inline', marginRight: 6, verticalAlign: -2 }} />
                  Internships, research projects, and entry-level AI/ML engineering roles
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Pillars */}
          <div className="about-pillars-col">
            {PORTFOLIO_DATA.personal.pillars.map((pillar, index) => (
              <div key={pillar.title} className="glass-card pillar-card">
                <div className="pillar-icon-box">
                  {pillarIcons[index % pillarIcons.length]}
                </div>
                <div className="pillar-content">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
