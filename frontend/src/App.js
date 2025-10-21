import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin setAuth={setIsAuthenticated} />} />
          <Route 
            path="/admin" 
            element={isAuthenticated ? <AdminPanel setAuth={setIsAuthenticated} /> : <Navigate to="/admin/login" />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
