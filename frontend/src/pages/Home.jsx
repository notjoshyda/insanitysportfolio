import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Youtube, MessageCircle, Mail } from 'lucide-react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { mockGFXItems } from '../mock';
import '../styles/Home.css';

const Home = () => {
  const [gfxItems, setGfxItems] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setGfxItems(mockGFXItems);
  }, []);

  return (
    <div className="home-container">
      {/* Header */}
      <header className="site-header">
        <div className="header-content">
          <h1 className="logo">Jas1er</h1>
          <nav className="nav-links">
            <a href="#gallery">Gallery</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Hire Me</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Gallery Section */}
      <section id="gallery" className="section-container">
        <Gallery items={gfxItems} />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-container">
        <Pricing />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
