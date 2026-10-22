import React, { useState } from 'react';
import { PORTFOLIO_DATA, type SkillCategory } from '../data/portfolioData';
import { 
  Cpu, 
  Brain, 
  Code2, 
  BarChart3, 
  Globe, 
  Terminal, 
  Info
} from 'lucide-react';
import './Skills.css';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain size={22} />;
      case 'Code2':
        return <Code2 size={22} />;
      case 'BarChart3':
        return <BarChart3 size={22} />;
      case 'Globe':
        return <Globe size={22} />;
      case 'Terminal':
      default:
        return <Terminal size={22} />;
    }
  };

  const filteredCategories = activeCategory === 'all'
    ? PORTFOLIO_DATA.skillCategories
    : PORTFOLIO_DATA.skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Competencies</span>
          </div>
          <h2 className="section-title">
            Skills &amp; Technology Stack
          </h2>
          <p className="section-subtitle">
            Core computational skills, machine learning fundamentals, and developer tools acquired through academic coursework, laboratory experimentation, and self-directed practice.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-filter-tabs">
          <button
            type="button"
            className={`skills-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Disciplines
          </button>
          {PORTFOLIO_DATA.skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`skills-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="skills-categories-grid">
          {filteredCategories.map((cat: SkillCategory) => (
            <div key={cat.id} className="glass-card skill-category-card">
              <div className="category-card-header">
                <div className="category-icon-wrap">
                  {getIcon(cat.icon)}
                </div>
                <div className="category-header-text">
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                </div>
              </div>

              <div className="skills-list">
                {cat.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className={`skill-chip ${skill.featured ? 'featured' : ''}`}
                  >
                    <span className="skill-chip-name">{skill.name}</span>
                    <span className="skill-chip-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Recruiter Notice */}
        <div className="skills-notice-box">
          <Info size={20} className="notice-icon" />
          <div>
            <strong>Curated Academic &amp; Practical Competencies:</strong> These skills reflect Varun's active study at AJIET and hands-on coding practice. No arbitrary percentage metrics are claimed. All items can be easily adjusted or expanded in <code>src/data/portfolioData.ts</code>.
          </div>
        </div>
      </div>
    </section>
  );
};
