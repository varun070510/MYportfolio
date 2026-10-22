import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HeroCanvas } from './HeroCanvas';
import { 
  Sparkles, 
  ArrowRight, 
  Mail, 
  GraduationCap, 
  Brain, 
  Code2, 
  MapPin 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import './Hero.css';

interface HeroProps {
  onOpenGuide: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Interactive dynamic canvas */}
      <HeroCanvas />

      <div className="container hero-content">
        {/* Availability Badge */}
        <div className="hero-status-wrapper">
          <div className="hero-status-badge">
            <span className="pulse-dot"></span>
            <span>{PORTFOLIO_DATA.personal.statusBadge}</span>
          </div>
        </div>

        {/* Greeting & Headline */}
        <div className="hero-greeting">
          <Sparkles size={18} className="sparkle-icon" />
          <span>Hi, I'm</span>
        </div>

        <h1 className="hero-name">
          <span className="gradient-text">{PORTFOLIO_DATA.personal.name}</span>
        </h1>

        <h2 className="hero-headline">
          {PORTFOLIO_DATA.personal.headline}
        </h2>

        <div className="hero-title-badge">
          {PORTFOLIO_DATA.personal.professionalTitle}
        </div>

        {/* Short introduction */}
        <p className="hero-description">
          Aspiring AI Engineer and student at <strong>AJ Institute of Engineering and Technology, Mangaluru</strong>. 
          Passionate about artificial intelligence, machine learning algorithms, analytical programming, and engineering intelligent software solutions that make an impact.
        </p>

        {/* Call to action buttons */}
        <div className="hero-actions">
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => scrollTo('projects')}
          >
            <span>Explore My Projects</span>
            <ArrowRight size={18} />
          </button>

          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => scrollTo('contact')}
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </button>

          <a 
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-glow"
          >
            <LinkedinIcon size={18} />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        {/* Quick Highlights Grid */}
        <div className="hero-highlights-grid">
          <div className="hero-highlight-card">
            <div className="highlight-header">
              <GraduationCap size={16} />
              <span className="highlight-label">Education</span>
            </div>
            <span className="highlight-value">AJIET Mangaluru</span>
            <span className="highlight-desc">AI &amp; Machine Learning</span>
          </div>

          <div className="hero-highlight-card">
            <div className="highlight-header">
              <Brain size={16} />
              <span className="highlight-label">Specialization</span>
            </div>
            <span className="highlight-value">AI &amp; Data Science</span>
            <span className="highlight-desc">Model Foundations</span>
          </div>

          <div className="hero-highlight-card">
            <div className="highlight-header">
              <Code2 size={16} />
              <span className="highlight-label">Core Stack</span>
            </div>
            <span className="highlight-value">Python, SQL, C, Java</span>
            <span className="highlight-desc">Algorithmic Problem Solving</span>
          </div>

          <div className="hero-highlight-card">
            <div className="highlight-header">
              <MapPin size={16} />
              <span className="highlight-label">Location</span>
            </div>
            <span className="highlight-value">Mangaluru, India</span>
            <span className="highlight-desc">Karnataka State</span>
          </div>
        </div>
      </div>
    </section>
  );
};
