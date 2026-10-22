import React from 'react';

interface ProjectGraphicProps {
  type: 'Machine Learning' | 'Data Science' | 'Web & AI';
  theme: 'cyan' | 'violet' | 'blue';
}

export const ProjectGraphic: React.FC<ProjectGraphicProps> = ({ type, theme }) => {
  const getGradient = () => {
    switch (theme) {
      case 'cyan':
        return { start: '#06b6d4', mid: '#38bdf8', end: '#6366f1' };
      case 'violet':
        return { start: '#8b5cf6', mid: '#a855f7', end: '#ec4899' };
      case 'blue':
      default:
        return { start: '#38bdf8', mid: '#6366f1', end: '#8b5cf6' };
    }
  };

  const g = getGradient();

  if (type === 'Machine Learning') {
    return (
      <svg className="preview-graphic-svg" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`grad-ml-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={g.start} stopOpacity="0.8" />
            <stop offset="50%" stopColor={g.mid} stopOpacity="0.5" />
            <stop offset="100%" stopColor={g.end} stopOpacity="0.2" />
          </linearGradient>
          <filter id={`glow-ml-${theme}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <rect width="400" height="200" fill="#080c16" />
        
        {/* Abstract AI network grid lines */}
        <g stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1">
          <line x1="0" y1="50" x2="400" y2="50" />
          <line x1="0" y1="100" x2="400" y2="100" />
          <line x1="0" y1="150" x2="400" y2="150" />
          <line x1="80" y1="0" x2="80" y2="200" />
          <line x1="200" y1="0" x2="200" y2="200" />
          <line x1="320" y1="0" x2="320" y2="200" />
        </g>

        {/* Neural Network Nodes Layer */}
        {/* Input Layer */}
        <line x1="80" y1="60" x2="200" y2="50" stroke={g.start} strokeOpacity="0.4" strokeWidth="1.5" />
        <line x1="80" y1="60" x2="200" y2="100" stroke={g.start} strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="80" y1="100" x2="200" y2="50" stroke={g.mid} strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="80" y1="100" x2="200" y2="100" stroke={g.mid} strokeOpacity="0.6" strokeWidth="2" />
        <line x1="80" y1="100" x2="200" y2="150" stroke={g.mid} strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="80" y1="140" x2="200" y2="100" stroke={g.end} strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="80" y1="140" x2="200" y2="150" stroke={g.end} strokeOpacity="0.5" strokeWidth="1.5" />

        {/* Hidden to Output Layer */}
        <line x1="200" y1="50" x2="320" y2="80" stroke={g.start} strokeOpacity="0.5" strokeWidth="1.5" />
        <line x1="200" y1="100" x2="320" y2="80" stroke={g.mid} strokeOpacity="0.7" strokeWidth="2" />
        <line x1="200" y1="100" x2="320" y2="130" stroke={g.mid} strokeOpacity="0.4" strokeWidth="1.5" />
        <line x1="200" y1="150" x2="320" y2="130" stroke={g.end} strokeOpacity="0.6" strokeWidth="1.5" />

        {/* Nodes */}
        <circle cx="80" cy="60" r="7" fill={g.start} filter={`url(#glow-ml-${theme})`} />
        <circle cx="80" cy="100" r="7" fill={g.mid} filter={`url(#glow-ml-${theme})`} />
        <circle cx="80" cy="140" r="7" fill={g.end} filter={`url(#glow-ml-${theme})`} />

        <circle cx="200" cy="50" r="8" fill={g.start} filter={`url(#glow-ml-${theme})`} />
        <circle cx="200" cy="100" r="9" fill="#ffffff" stroke={g.mid} strokeWidth="3" filter={`url(#glow-ml-${theme})`} />
        <circle cx="200" cy="150" r="8" fill={g.end} filter={`url(#glow-ml-${theme})`} />

        <circle cx="320" cy="80" r="9" fill={g.start} filter={`url(#glow-ml-${theme})`} />
        <circle cx="320" cy="130" r="8" fill={g.mid} filter={`url(#glow-ml-${theme})`} />

        {/* Code / Equation Pill */}
        <rect x="135" y="165" width="130" height="24" rx="12" fill="rgba(10, 15, 28, 0.85)" stroke={g.mid} strokeWidth="1" />
        <text x="200" y="181" fill={g.start} fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          y = σ(W · x + b)
        </text>
      </svg>
    );
  }

  if (type === 'Data Science') {
    return (
      <svg className="preview-graphic-svg" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`grad-ds-${theme}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={g.start} stopOpacity="0.5" />
            <stop offset="100%" stopColor={g.end} stopOpacity="0.0" />
          </linearGradient>
          <filter id={`glow-ds-${theme}`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <rect width="400" height="200" fill="#080c16" />

        {/* Background grid */}
        <g stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1">
          <line x1="40" y1="40" x2="360" y2="40" />
          <line x1="40" y1="80" x2="360" y2="80" />
          <line x1="40" y1="120" x2="360" y2="120" />
          <line x1="40" y1="160" x2="360" y2="160" />
        </g>

        {/* Smooth Area Curve */}
        <path
          d="M 50 160 Q 90 130 130 145 T 210 90 T 290 65 T 350 45 L 350 160 L 50 160 Z"
          fill={`url(#grad-ds-${theme})`}
        />
        <path
          d="M 50 160 Q 90 130 130 145 T 210 90 T 290 65 T 350 45"
          fill="none"
          stroke={g.start}
          strokeWidth="3"
          filter={`url(#glow-ds-${theme})`}
        />

        {/* Bar chart highlights */}
        <rect x="70" y="115" width="16" height="45" rx="3" fill="rgba(56, 189, 248, 0.25)" stroke={g.start} strokeWidth="1" />
        <rect x="110" y="95" width="16" height="65" rx="3" fill="rgba(139, 92, 246, 0.25)" stroke={g.mid} strokeWidth="1" />
        <rect x="150" y="80" width="16" height="80" rx="3" fill="rgba(236, 72, 153, 0.25)" stroke={g.end} strokeWidth="1" />
        <rect x="190" y="60" width="16" height="100" rx="3" fill="rgba(56, 189, 248, 0.35)" stroke={g.start} strokeWidth="1" />

        {/* Scatter dots */}
        <circle cx="210" cy="90" r="4.5" fill="#ffffff" stroke={g.mid} strokeWidth="2" />
        <circle cx="290" cy="65" r="4.5" fill="#ffffff" stroke={g.start} strokeWidth="2" />
        <circle cx="350" cy="45" r="5" fill={g.start} />

        {/* Metric Chip */}
        <rect x="250" y="130" width="110" height="24" rx="12" fill="rgba(10, 15, 28, 0.85)" stroke={g.start} strokeWidth="1" />
        <text x="305" y="146" fill={g.start} fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          R² = 0.94 | EDA
        </text>
      </svg>
    );
  }

  // Web & AI
  return (
    <svg className="preview-graphic-svg" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`grad-app-${theme}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={g.start} />
          <stop offset="100%" stopColor={g.mid} />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="#080c16" />

      {/* Browser frame preview */}
      <rect x="50" y="25" width="300" height="150" rx="10" fill="rgba(15, 23, 42, 0.8)" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
      <circle cx="68" cy="40" r="3.5" fill="#ef4444" />
      <circle cx="80" cy="40" r="3.5" fill="#f59e0b" />
      <circle cx="92" cy="40" r="3.5" fill="#10b981" />
      <line x1="50" y1="52" x2="350" y2="52" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />

      {/* Modern AI app UI elements */}
      <rect x="70" y="65" width="110" height="14" rx="4" fill="rgba(56, 189, 248, 0.2)" />
      <rect x="70" y="88" width="150" height="8" rx="3" fill="rgba(255, 255, 255, 0.1)" />
      <rect x="70" y="102" width="130" height="8" rx="3" fill="rgba(255, 255, 255, 0.08)" />

      {/* AI Inference output box */}
      <rect x="235" y="65" width="95" height="90" rx="8" fill="rgba(6, 182, 212, 0.1)" stroke={g.start} strokeWidth="1" />
      <circle cx="282" cy="95" r="14" fill={`url(#grad-app-${theme})`} />
      <rect x="250" y="122" width="65" height="6" rx="3" fill="rgba(255, 255, 255, 0.2)" />
      <rect x="258" y="134" width="50" height="6" rx="3" fill={g.start} />

      {/* API connection line */}
      <path d="M 190 120 C 210 120, 215 110, 235 110" fill="none" stroke={g.start} strokeWidth="2" strokeDasharray="4 2" />
    </svg>
  );
};
