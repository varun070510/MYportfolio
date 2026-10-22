import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Compass } from 'lucide-react';
import './Roadmap.css';

export const LearningRoadmap: React.FC = () => {
  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'in progress':
        return 'in-progress';
      case 'exploring':
        return 'exploring';
      default:
        return 'upcoming';
    }
  };

  return (
    <section id="roadmap" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            <span>Continuous Growth</span>
          </div>
          <h2 className="section-title">
            What I'm Learning &amp; Exploring Next
          </h2>
          <p className="section-subtitle">
            An active commitment to expanding beyond curriculum requirements into state-of-the-art AI frameworks, neural architectures, and scalable cloud systems.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="roadmap-grid">
          {PORTFOLIO_DATA.learningRoadmap.map((item) => (
            <div key={item.title} className="glass-card roadmap-card">
              <div className="roadmap-card-header">
                <span className="roadmap-category">{item.category}</span>
                <span className={`roadmap-status-chip ${getStatusClass(item.progress)}`}>
                  {item.progress}
                </span>
              </div>

              <h3 className="roadmap-title">{item.title}</h3>
              <p className="roadmap-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
