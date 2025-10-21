import React from 'react';
import { Check, Star } from 'lucide-react';
import '../styles/Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-section">
      <div className="pricing-header">
        <h2 className="section-title">Pricing</h2>
        <p className="section-subtitle">Affordable rates for quality graphics</p>
      </div>

      <div className="pricing-grid">
        {/* Normal GFX Pricing */}
        <div className="pricing-card">
          <div className="card-icon">
            <Star size={32} />
          </div>
          <h3 className="card-title">Normal GFX</h3>
          <p className="card-description">
            Profile renders, logos, banners and other graphics
          </p>
          <div className="card-price">
            <span className="price-range">100 - 400</span>
            <span className="price-currency">Robux</span>
          </div>
          <ul className="card-features">
            <li><Check size={18} /> High quality renders</li>
            <li><Check size={18} /> Quick turnaround</li>
            <li><Check size={18} /> Revisions included</li>
            <li><Check size={18} /> Custom designs</li>
          </ul>
          <p className="additional-note">
            *Additional charges may apply for extra items in the design
          </p>
        </div>

        {/* Thumbnail Pricing */}
        <div className="pricing-card featured">
          <div className="featured-badge">POPULAR</div>
          <div className="card-icon">
            <Star size={32} />
          </div>
          <h3 className="card-title">Thumbnails</h3>
          <p className="card-description">
            Eye-catching YouTube thumbnails and promotional graphics
          </p>
          <div className="card-price">
            <span className="price-range">1000+</span>
            <span className="price-currency">Robux</span>
          </div>
          <ul className="card-features">
            <li><Check size={18} /> Premium quality</li>
            <li><Check size={18} /> Cinematic designs</li>
            <li><Check size={18} /> Multiple revisions</li>
            <li><Check size={18} /> Fast delivery</li>
            <li><Check size={18} /> Negotiable pricing</li>
          </ul>
          <p className="additional-note">
            *Pricing is negotiable based on complexity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
