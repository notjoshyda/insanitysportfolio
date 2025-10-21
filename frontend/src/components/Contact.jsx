import React, { useState } from 'react';
import { Send, Mail, MessageCircle, Youtube } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'gfx',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', projectType: 'gfx', message: '' });
  };

  return (
    <div className="contact-section">
      <div className="contact-header">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">Ready to create something amazing?</p>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="projectType">Project Type</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value="gfx">Normal GFX</option>
                <option value="thumbnail">Thumbnail</option>
                <option value="render">Render</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p className="info-text">
            I'm always open to new projects and collaborations. Feel free to reach out through any of these channels:
          </p>

          <div className="social-links">
            <a href="https://discord.gg/CQzuzbCHrG" target="_blank" rel="noopener noreferrer" className="social-link">
              <MessageCircle size={24} />
              <span>Discord</span>
            </a>
            <a href="https://www.youtube.com/@Jasp-fy" target="_blank" rel="noopener noreferrer" className="social-link">
              <Youtube size={24} />
              <span>YouTube</span>
            </a>
          </div>

          <div className="info-highlight">
            <h4>Response Time</h4>
            <p>I typically respond within 24-48 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
