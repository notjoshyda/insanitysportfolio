import React from 'react';
import { ArrowDown } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge fade-in">GFX CREATOR</div>
        <h1 className="hero-title slide-in-left">
          Welcome to <span className="highlight">Jas1er</span>
        </h1>
        <p className="hero-subtitle slide-in-right">
          Professional <span className="accent">Thumbnails</span> & <span className="accent">Renders</span> for your brand
        </p>
        <p className="hero-description fade-in">
          I create stunning graphics that help your content stand out. From eye-catching thumbnails to detailed 3D renders, I focus on building my portfolio to deliver exceptional quality.
        </p>
        <div className="hero-cta fade-in">
          <a href="#gallery" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Hire Me
          </a>
        </div>
      </div>
      <a href="#gallery" className="scroll-indicator">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
