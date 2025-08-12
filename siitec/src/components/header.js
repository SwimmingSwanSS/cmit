// src/components/Header.jsx
import React, { useState } from 'react';
import '../styles/theme.css';
import '../styles/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Sii<span>Tec</span></h1>
          <p>School of Integrated Innovative Technology</p>
        </div>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a></li>
            <li><a href="#reseach centers" onClick={() => setMenuOpen(false)}>Research Centers</a></li>
            <li><a href="#faculty" onClick={() => setMenuOpen(false)}>Faculty</a></li>
            <li><a href="#facilities" onClick={() => setMenuOpen(false)}>Facilities</a></li>
            <li><a href="#news" onClick={() => setMenuOpen(false)}>News</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
          <button className="apply-button mobile-apply">Apply Now</button>
        </nav>
        
        <button className="apply-button desktop-apply">Apply Now</button>
      </div>
    </header>
  );
};

export default Header;