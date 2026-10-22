import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import './Navbar.css';

interface NavbarProps {
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section tracking
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'roadmap', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand */}
        <a href="#hero" className="nav-brand" onClick={(e) => { e.preventDefault(); handleLinkClick('#hero'); }}>
          <div className="brand-monogram">VJ</div>
          <div className="brand-text">
            <span className="brand-name">{PORTFOLIO_DATA.personal.name}</span>
            <span className="brand-subtitle">AI &amp; ML Undergrad</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-menu">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right side actions */}
        <div className="nav-actions">
          {/* Status Badge */}
          <div className="status-badge-nav" title="Varun Jogi is open to internship opportunities">
            <span className="pulse-dot" style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              backgroundColor: '#10b981',
              display: 'inline-block',
              boxShadow: '0 0 8px #10b981'
            }}></span>
            <span>Open to Internships</span>
          </div>

          {/* Social Links */}
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-btn"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-btn"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={16} />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <div className="badge-pill badge-open-to-work" style={{ justifyContent: 'center' }}>
              <span className="pulse-dot"></span>
              <span>Open to Internship Opportunities</span>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1 }}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <button
                type="button"
                className="btn btn-outline-glow"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuide();
                }}
                style={{ flex: 1 }}
              >
                <span>Edit Guide</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
