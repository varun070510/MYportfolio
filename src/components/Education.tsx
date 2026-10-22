import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  GraduationCap, 
  Building2, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Info 
} from 'lucide-react';
import './Education.css';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education &amp; Academic Foundation
          </h2>
          <p className="section-subtitle">
            Formal engineering education emphasizing computational algorithms, mathematical structures, and practical machine learning principles.
          </p>
        </div>

        {/* Education Card */}
        <div className="glass-card education-card">
          <div className="education-header-grid">
            <div className="edu-main-info">
              <h3>{education.degree} in {education.fieldOfStudy}</h3>
              <div className="edu-institution-wrap">
                <Building2 size={18} />
                <span>{education.institution}</span>
              </div>
              <p className="edu-affiliation">{education.universityAffiliation}</p>
            </div>

            <div className="edu-meta-badges">
              <div className="edu-time-badge">
                <Calendar size={14} />
                <span>{education.timeline}</span>
              </div>
              <div className="edu-location-badge">
                <MapPin size={14} />
                <span>{education.location}</span>
              </div>
            </div>
          </div>

          {/* Core Academic Coursework */}
          <div>
            <div className="edu-coursework-title">
              <BookOpen size={16} color="var(--cyan-400)" />
              <span>Core Coursework &amp; Key Laboratories</span>
            </div>

            <div className="coursework-chips-grid">
              {education.coursework.map((course) => (
                <div key={course} className="coursework-chip">
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Editable academic guidance note */}
          <div className="education-custom-note">
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <Info size={18} color="var(--cyan-400)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <strong>Editable Academic Profile:</strong> {education.note} Start year (2024), expected graduation year, semester milestones, and CGPA can be tailored at any time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
