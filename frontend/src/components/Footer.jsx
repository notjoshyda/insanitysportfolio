import React from 'react';
import { Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3 className="footer-logo">Insanity</h3>
          <p className="footer-tagline">Creating exceptional graphics, one pixel at a time</p>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Insanity. All rights reserved.
          </p>
          <p className="made-with">
            Made with <Heart size={16} fill="#00d9ff" stroke="#00d9ff" /> by Insanity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
