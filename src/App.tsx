import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { LearningRoadmap } from './components/LearningRoadmap';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomizeGuideModal } from './components/CustomizeGuideModal';
import { Settings } from 'lucide-react';

export const App: React.FC = () => {
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  return (
    <div className="portfolio-app">
      {/* Skip to Content for Accessibility */}
      <a 
        href="#hero" 
        className="skip-link"
        style={{
          position: 'absolute',
          top: -100,
          left: 16,
          zIndex: 1000,
          padding: '10px 16px',
          background: 'var(--cyan-400)',
          color: '#05070c',
          fontWeight: 700,
          borderRadius: '4px',
          transition: 'top 0.2s'
        }}
        onFocus={(e) => { e.currentTarget.style.top = '16px'; }}
        onBlur={(e) => { e.currentTarget.style.top = '-100px'; }}
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar onOpenGuide={() => setGuideModalOpen(true)} />

      {/* Main Sections */}
      <main id="main-content">
        <Hero onOpenGuide={() => setGuideModalOpen(true)} />
        <About />
        <Skills />
        <Projects onOpenGuide={() => setGuideModalOpen(true)} />
        <Education />
        <LearningRoadmap />
        <Credentials onOpenGuide={() => setGuideModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenGuide={() => setGuideModalOpen(true)} />

      {/* Floating Customization Guide Action Button */}
      <button
        type="button"
        className="guide-floating-btn"
        onClick={() => setGuideModalOpen(true)}
        title="Open Portfolio Customization Guide"
        aria-label="Open Customization Guide"
      >
        <Settings size={16} />
        <span>How to Customize</span>
      </button>

      {/* Modal Dialog */}
      <CustomizeGuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />
    </div>
  );
};

export default App;
