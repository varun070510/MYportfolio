import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Mail, 
  Send, 
  MapPin, 
  Copy, 
  Check, 
  CheckCircle2
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCopiedEmail, setIsCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email format (e.g. name@domain.com)';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject line';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please type a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contactInfo.email);
    setIsCopiedEmail(true);
    setTimeout(() => setIsCopiedEmail(false), 2500);
  };

  const handleLaunchEmailClient = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `Hello Varun,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.open(`mailto:${PORTFOLIO_DATA.contactInfo.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleCopyMessage = () => {
    const text = `From: ${formData.name} (${formData.email})\nSubject: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard.writeText(text);
    alert('Message copied to clipboard! You can now paste it into your email.');
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Connect &amp; Collaborate
          </h2>
          <p className="section-subtitle">
            Open to internship opportunities, academic research discussions, technical projects, and AI &amp; Machine Learning conversations.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-col">
            <div className="glass-card contact-info-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Direct Channels
              </h3>

              {/* Email */}
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-item-label">Email Address</span>
                  <a 
                    href={`mailto:${PORTFOLIO_DATA.contactInfo.email}`}
                    className="contact-item-val"
                  >
                    {PORTFOLIO_DATA.contactInfo.email}
                  </a>
                  <button
                    type="button"
                    className="copy-email-btn"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                  >
                    {isCopiedEmail ? (
                      <>
                        <Check size={13} color="#10b981" />
                        <span style={{ color: '#10b981' }}>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-item-label">Location</span>
                  <span className="contact-item-val">{PORTFOLIO_DATA.contactInfo.location}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
                    AJIET Campus, Mangaluru
                  </span>
                </div>
              </div>

              {/* Commitment */}
              <div style={{
                padding: '14px',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.05)',
                border: '1px solid rgba(56, 189, 248, 0.15)',
                fontSize: '0.84rem',
                color: 'var(--text-muted)'
              }}>
                ⏱️ <strong>Response Window:</strong> {PORTFOLIO_DATA.contactInfo.responseCommitment}.
              </div>

              {/* Social Profiles */}
              <div>
                <span className="contact-item-label" style={{ display: 'block', marginBottom: '8px' }}>
                  Professional Networks
                </span>
                <div className="social-links-grid">
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button-large"
                  >
                    <LinkedinIcon size={18} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button-large"
                  >
                    <GithubIcon size={18} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card contact-form-card">
            {isSubmitted ? (
              <div className="contact-feedback-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={24} color="#10b981" />
                  <h4 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 700 }}>
                    Message Ready to Dispatch
                  </h4>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name}</strong>! As this portfolio runs as a client-side web application without a hardcoded third-party mail server, choose your preferred delivery method below:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleLaunchEmailClient}
                  >
                    <Mail size={16} />
                    <span>Launch Pre-Filled Email Client</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCopyMessage}
                  >
                    <Copy size={16} />
                    <span>Copy Formatted Message to Clipboard</span>
                  </button>
                </div>

                <div style={{
                  marginTop: '10px',
                  padding: '12px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)'
                }}>
                  ⚙️ <em>Developer Note:</em> To connect automated background submission without opening a mail client, connect a free service like <strong>Formspree</strong> or <strong>EmailJS</strong> in <code>src/components/Contact.tsx</code>.
                </div>

                <button
                  type="button"
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '8px',
                    color: 'var(--cyan-400)',
                    fontSize: '0.88rem',
                    textDecoration: 'underline'
                  }}
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  Send a Direct Message
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                  Fill out the form below to reach Varun directly. All fields are validated before submission.
                </p>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <span className="form-error-msg">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Your Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <span className="form-error-msg">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject Line *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    className={`form-input ${errors.subject ? 'error' : ''}`}
                    placeholder="e.g. Internship Inquiry / AI Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                  {errors.subject && <span className="form-error-msg">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message Details *
                  </label>
                  <textarea
                    id="contact-message"
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="Write your message, project idea, or internship details here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <span className="form-error-msg">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
