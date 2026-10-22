import React, { useState } from 'react';
import { PORTFOLIO_DATA, type Project } from '../data/portfolioData';
import { ProjectGraphic } from './ProjectGraphic';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  X,
  Code
} from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

interface ProjectsProps {
  onOpenGuide: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenGuide }) => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Machine Learning', 'Data Science', 'Web & AI'];

  const filteredProjects = filter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Project Showcase</span>
          </div>
          <h2 className="section-title">
            Featured Systems &amp; Technical Explorations
          </h2>
          <p className="section-subtitle">
            Curated architectural blueprints and practical implementations spanning supervised predictive models, visual data analytics, and intelligent web interfaces.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`project-filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              {/* Preview Graphic Header */}
              <div className="project-preview-wrap">
                <ProjectGraphic type={project.category} theme={project.imageTheme} />
                <div className="project-badge-overlay">
                  <span className="project-category-pill">{project.category}</span>
                  {project.isPlaceholder && (
                    <span className="project-template-tag">
                      Sample Blueprint
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Highlights */}
                <ul className="project-highlights-list">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="project-highlight-item">
                      <CheckCircle2 size={15} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="project-tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="project-card-footer">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                  title="View Repository on GitHub"
                >
                  <GithubIcon size={17} />
                  <span>GitHub</span>
                </a>

                <button
                  type="button"
                  className="project-link-btn primary"
                  onClick={() => setSelectedProject(project)}
                >
                  <span>Inspect Blueprint</span>
                  <ExternalLink size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Customization Callout Banner */}
        <div className="projects-instructions-banner">
          <div className="banner-content">
            <Sparkles size={24} className="banner-icon" />
            <div className="banner-text">
              <h4>Ready to showcase your completed projects?</h4>
              <p>
                These example cards serve as architectural blueprints for your portfolio. As you finish class assignments, hackathon builds, or personal GitHub repositories, replace them instantly in <code>src/data/portfolioData.ts</code>.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-outline-glow"
            onClick={onOpenGuide}
          >
            <Code size={16} />
            <span>How to Add Projects</span>
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div 
          className="project-modal-backdrop" 
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span className="project-category-pill">{selectedProject.category}</span>
              {selectedProject.isPlaceholder && (
                <span className="project-template-tag">Architecture Blueprint</span>
              )}
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 700 }}>
              {selectedProject.title}
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {selectedProject.description}
            </p>

            <div>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--cyan-400)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Key Technical Highlights
              </h4>
              <ul className="project-highlights-list">
                {selectedProject.highlights.map((h, idx) => (
                  <li key={idx} className="project-highlight-item" style={{ fontSize: '0.92rem' }}>
                    <CheckCircle2 size={16} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--cyan-400)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Technology Stack
              </h4>
              <div className="project-tech-tags" style={{ margin: 0, padding: 0 }}>
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            <div style={{
              padding: '14px',
              borderRadius: '8px',
              background: 'rgba(56, 189, 248, 0.08)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)'
            }}>
              💡 <strong>For Varun:</strong> When you deploy this project to GitHub or a live host (like Streamlit, Hugging Face Spaces, or Vercel), simply set <code>githubUrl</code> and <code>demoUrl</code> in <code>src/data/portfolioData.ts</code>.
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <GithubIcon size={18} />
                <span>Open GitHub Repo</span>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
