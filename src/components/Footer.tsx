import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import './Footer.css';

interface FooterProps {
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-wrap">
            <div className="footer-brand-header">
              <div className="footer-monogram">VJ</div>
              <span className="footer-brand-name">{PORTFOLIO_DATA.personal.name}</span>
            </div>
            <p className="footer-brand-desc">
              AI &amp; Machine Learning undergraduate at AJ Institute of Engineering and Technology, Mangaluru. Committed to engineering intelligent, data-driven computational systems.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social-btn"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social-btn"
                title="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.contactInfo.email}`}
                className="nav-social-btn"
                title="Email"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-nav-list">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic & Deep Dives */}
          <div className="footer-links-col">
            <span className="footer-col-title">Academic &amp; Growth</span>
            <ul className="footer-nav-list">
              {navLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenGuide}
                  className="footer-nav-link"
                  style={{ color: 'var(--cyan-400)', textAlign: 'left', padding: 0 }}
                >
                  Customization Guide
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
              Mangaluru, Karnataka, India
            </span>
            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
