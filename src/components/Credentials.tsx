import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, Trophy, Calendar, Building2, Sparkles, FileBadge } from 'lucide-react';
import './Credentials.css';

interface CredentialsProps {
  onOpenGuide: () => void;
}

export const Credentials: React.FC<CredentialsProps> = ({ onOpenGuide }) => {
  const [activeTab, setActiveTab] = useState<'certifications' | 'achievements'>('certifications');

  return (
    <section id="credentials" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Honors &amp; Recognition</span>
          </div>
          <h2 className="section-title">
            Certifications &amp; Achievements
          </h2>
          <p className="section-subtitle">
            A dedicated record of verified certifications, course completions, and academic milestones—designed to grow alongside Varun's career.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="credentials-tabs">
          <button
            type="button"
            className={`credentials-tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            <FileBadge size={16} />
            <span>Certifications ({PORTFOLIO_DATA.certifications.length})</span>
          </button>

          <button
            type="button"
            className={`credentials-tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            <Trophy size={16} />
            <span>Achievements ({PORTFOLIO_DATA.achievements.length})</span>
          </button>
        </div>

        {/* Content Display */}
        {activeTab === 'certifications' ? (
          <div className="credentials-grid">
            {PORTFOLIO_DATA.certifications.map((cert) => (
              <div key={cert.id} className="glass-card credential-card">
                <div className="credential-top-meta">
                  <span className="credential-type-chip">
                    <FileBadge size={14} />
                    <span>Certification Slot</span>
                  </span>
                  <span className="credential-date">
                    <Calendar size={13} style={{ display: 'inline', marginRight: 4, verticalAlign: -1 }} />
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="credential-title">{cert.title}</h3>

                <div className="credential-issuer">
                  <Building2 size={15} color="var(--cyan-400)" />
                  <span>{cert.issuer}</span>
                </div>

                <p className="credential-desc">
                  Configured for course completions (e.g., NPTEL, Coursera, Kaggle, DeepLearning.AI, or college technical certifications).
                </p>

                {cert.isPlaceholder && (
                  <button
                    type="button"
                    className="credential-ready-badge"
                    onClick={onOpenGuide}
                    style={{ cursor: 'pointer', textAlign: 'left', background: 'rgba(251, 191, 36, 0.08)' }}
                    title="Click to view how to add your certificates"
                  >
                    <Sparkles size={14} />
                    <span>Editable Slot: Ready for your certificate details • Click for guide</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="credentials-grid">
            {PORTFOLIO_DATA.achievements.map((ach) => (
              <div key={ach.id} className="glass-card credential-card">
                <div className="credential-top-meta">
                  <span className="credential-type-chip">
                    <Trophy size={14} />
                    <span>Academic / Technical Honor</span>
                  </span>
                  <span className="credential-date">{ach.date}</span>
                </div>

                <h3 className="credential-title">{ach.title}</h3>

                <div className="credential-issuer">
                  <Building2 size={15} color="var(--violet-400)" />
                  <span>{ach.organization}</span>
                </div>

                <p className="credential-desc">{ach.description}</p>

                {ach.isPlaceholder && (
                  <div className="credential-ready-badge">
                    <Sparkles size={14} />
                    <span>Editable Slot: Ready for your awards &amp; hackathon ranks</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
