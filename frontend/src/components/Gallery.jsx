import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import '../styles/Gallery.css';

const Gallery = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.category === filter);

  return (
    <div className="gallery-section">
      <div className="gallery-header">
        <h2 className="section-title">My Work</h2>
        <p className="section-subtitle">Explore my latest creations</p>
      </div>

      {/* Filter Buttons */}
      <div className="gallery-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'thumbnail' ? 'active' : ''}`}
          onClick={() => setFilter('thumbnail')}
        >
          Thumbnails
        </button>
        <button 
          className={`filter-btn ${filter === 'render' ? 'active' : ''}`}
          onClick={() => setFilter('render')}
        >
          Renders
        </button>
        <button 
          className={`filter-btn ${filter === 'gfx' ? 'active' : ''}`}
          onClick={() => setFilter('gfx')}
        >
          GFX
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item, index) => (
          <div 
            key={item.id} 
            className="gallery-item"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedImage(item)}
          >
            <img src={item.imageUrl} alt={item.title} />
            <div className="gallery-overlay">
              <ZoomIn size={32} />
              <h3>{item.title}</h3>
              <p className="category-badge">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.imageUrl} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p className="lightbox-category">{selectedImage.category}</p>
              <p className="lightbox-price">{selectedImage.price} Robux</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
