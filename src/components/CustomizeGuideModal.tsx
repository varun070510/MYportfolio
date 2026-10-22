import React from 'react';
import { FileCode2, X } from 'lucide-react';
import './CustomizeGuideModal.css';

interface CustomizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizeGuideModal: React.FC<CustomizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="guide-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="guide-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="guide-modal-header">
          <div className="guide-modal-title">
            <FileCode2 size={24} color="var(--cyan-400)" />
            <h3>Portfolio Customization Guide</h3>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close Guide"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="guide-modal-body">
          <div style={{
            padding: '14px 18px',
            borderRadius: '8px',
            background: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)'
          }}>
            👋 <strong>Hi Varun!</strong> All your portfolio content (bio, skills, projects, education timeline, and social links) is organized in a single, clean TypeScript file: <code>src/data/portfolioData.ts</code>. Editing it updates the website in real-time.
          </div>

          {/* Step 1: Projects */}
          <div className="guide-step-card">
            <div className="guide-step-header">
              <span className="guide-step-num">1</span>
              <span>Adding Your Real Projects</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Open <code>src/data/portfolioData.ts</code> and locate the <code>projects</code> array. Replace or add project entries:
            </p>
            <pre className="guide-code-block">{`{
  id: 'my-nlp-project',
  title: 'Smart Resume Parser AI',
  category: 'Machine Learning', // 'Machine Learning' | 'Data Science' | 'Web & AI'
  description: 'Built an NLP tool using Python & SpaCy to parse key competencies.',
  highlights: ['94% entity recognition accuracy', 'Streamlit web interface'],
  technologies: ['Python', 'SpaCy', 'Pandas', 'Streamlit'],
  githubUrl: 'https://github.com/varun070510/resume-parser',
  demoUrl: 'https://huggingface.co/spaces/...',
  isPlaceholder: false, // Set to false when it's your real project!
  imageTheme: 'cyan'
}`}</pre>
          </div>

          {/* Step 2: Skills */}
          <div className="guide-step-card">
            <div className="guide-step-header">
              <span className="guide-step-num">2</span>
              <span>Editing &amp; Confirming Technical Skills</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              In <code>src/data/portfolioData.ts</code>, modify the <code>skillCategories</code> list to add new languages or tools, or adjust proficiency labels:
            </p>
            <pre className="guide-code-block">{`{
  name: 'PyTorch',
  level: 'Intermediate', // 'Fundamentals' | 'Intermediate' | 'Hands-on Practice'
  featured: true
}`}</pre>
          </div>

          {/* Step 3: Education & Timeline */}
          <div className="guide-step-card">
            <div className="guide-step-header">
              <span className="guide-step-num">3</span>
              <span>Updating Education &amp; Graduation Year</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Under <code>education</code> in <code>portfolioData.ts</code>, you can edit the timeline, expected graduation year, or coursework subjects anytime:
            </p>
            <pre className="guide-code-block">{`education: {
  timeline: '2024 – 2028 (Expected)',
  status: 'Third Semester Undergraduate',
  coursework: ['Data Structures', 'Operating Systems', 'Machine Learning']
}`}</pre>
          </div>

          {/* Step 4: Social Links & Email */}
          <div className="guide-step-card">
            <div className="guide-step-header">
              <span className="guide-step-num">4</span>
              <span>Social Links &amp; Contact Information</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Update your GitHub username, LinkedIn URL, or email address under <code>personal</code> and <code>contactInfo</code>.
            </p>
            <pre className="guide-code-block">{`contactInfo: {
  email: 'varun20051005@gmail.com',
  linkedin: 'https://www.linkedin.com/in/varun-jogi-29722b43a/',
  github: 'https://github.com/varun070510'
}`}</pre>
          </div>
        </div>

        {/* Footer */}
        <div className="guide-modal-footer">
          <button type="button" className="btn btn-primary" onClick={onClose}>
            <span>Got It, Back to Portfolio</span>
          </button>
        </div>
      </div>
    </div>
  );
};
