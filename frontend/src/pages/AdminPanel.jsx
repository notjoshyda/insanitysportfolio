import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Trash2, LogOut, Home, Plus, X } from 'lucide-react';
import { mockGFXItems } from '../mock';
import { toast } from '../hooks/use-toast';
import '../styles/AdminPanel.css';

const AdminPanel = ({ setAuth }) => {
  const navigate = useNavigate();
  const [gfxItems, setGfxItems] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadData, setUploadData] = useState({
    title: '',
    category: 'gfx',
    price: '',
    imageFile: null,
    imagePreview: null
  });

  useEffect(() => {
    // Load existing GFX items from localStorage or use mock data
    const saved = localStorage.getItem('gfxItems');
    if (saved) {
      setGfxItems(JSON.parse(saved));
    } else {
      setGfxItems(mockGFXItems);
      localStorage.setItem('gfxItems', JSON.stringify(mockGFXItems));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setAuth(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/admin/login');
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadData(prev => ({
          ...prev,
          imageFile: file,
          imagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    
    const newItem = {
      id: Date.now().toString(),
      title: uploadData.title,
      category: uploadData.category,
      price: uploadData.price,
      imageUrl: uploadData.imagePreview, // In real app, this would be uploaded to server
      createdAt: new Date().toISOString().split('T')[0]
    };

    const updatedItems = [newItem, ...gfxItems];
    setGfxItems(updatedItems);
    localStorage.setItem('gfxItems', JSON.stringify(updatedItems));

    toast({
      title: "Upload Successful!",
      description: "Your GFX has been added to the gallery.",
    });

    // Reset form
    setUploadData({
      title: '',
      category: 'gfx',
      price: '',
      imageFile: null,
      imagePreview: null
    });
    setShowUploadModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const updatedItems = gfxItems.filter(item => item.id !== id);
      setGfxItems(updatedItems);
      localStorage.setItem('gfxItems', JSON.stringify(updatedItems));
      
      toast({
        title: "Deleted",
        description: "Item has been removed from gallery.",
      });
    }
  };

  return (
    <div className="admin-panel-container">
      {/* Header */}
      <header className="admin-header">
        <div className="admin-header-content">
          <h1 className="admin-logo">Admin Panel</h1>
          <div className="admin-actions">
            <button className="header-btn" onClick={() => navigate('/')}>
              <Home size={20} />
              View Site
            </button>
            <button className="header-btn logout" onClick={handleLogout}>
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-content">
          {/* Stats */}
          <div className="stats-section">
            <div className="stat-card">
              <h3>Total GFX</h3>
              <p className="stat-number">{gfxItems.length}</p>
            </div>
            <div className="stat-card">
              <h3>Thumbnails</h3>
              <p className="stat-number">{gfxItems.filter(i => i.category === 'thumbnail').length}</p>
            </div>
            <div className="stat-card">
              <h3>Renders</h3>
              <p className="stat-number">{gfxItems.filter(i => i.category === 'render').length}</p>
            </div>
          </div>

          {/* Upload Button */}
          <div className="upload-section">
            <button className="upload-btn" onClick={() => setShowUploadModal(true)}>
              <Plus size={24} />
              Upload New GFX
            </button>
          </div>

          {/* Gallery Management */}
          <div className="gallery-management">
            <h2 className="section-title">Manage Gallery</h2>
            <div className="admin-gallery-grid">
              {gfxItems.map(item => (
                <div key={item.id} className="admin-gallery-item">
                  <img src={item.imageUrl} alt={item.title} />
                  <div className="item-info">
                    <h3>{item.title}</h3>
                    <p className="item-category">{item.category}</p>
                    <p className="item-price">{item.price} Robux</p>
                  </div>
                  <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Upload New GFX</h2>
              <button className="close-btn" onClick={() => setShowUploadModal(false)}>
                <X size={24} />
              </button>
            </div>

            <form className="upload-form" onSubmit={handleUpload}>
              <div className="form-group">
                <label htmlFor="image">Image</label>
                <div className="image-upload-area">
                  {uploadData.imagePreview ? (
                    <div className="image-preview">
                      <img src={uploadData.imagePreview} alt="Preview" />
                      <button 
                        type="button" 
                        className="remove-image"
                        onClick={() => setUploadData(prev => ({ ...prev, imageFile: null, imagePreview: null }))}
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ) : (
                    <label htmlFor="image" className="upload-placeholder">
                      <Upload size={48} />
                      <p>Click to upload image</p>
                    </label>
                  )}
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageSelect}
                    style={{ display: 'none' }}
                    required={!uploadData.imagePreview}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  value={uploadData.title}
                  onChange={(e) => setUploadData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  value={uploadData.category}
                  onChange={(e) => setUploadData(prev => ({ ...prev, category: e.target.value }))}
                >
                  <option value="gfx">GFX</option>
                  <option value="thumbnail">Thumbnail</option>
                  <option value="render">Render</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="price">Price (Robux)</label>
                <input
                  type="number"
                  id="price"
                  value={uploadData.price}
                  onChange={(e) => setUploadData(prev => ({ ...prev, price: e.target.value }))}
                  placeholder="Enter price"
                  required
                />
              </div>

              <button type="submit" className="submit-upload-btn">
                <Upload size={20} />
                Upload GFX
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
