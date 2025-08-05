// src/components/Header.jsx
import React from 'react';
import '../styles/theme.css';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Sii<span>Tec</span></h1>
          <p>School of Integrated Innovative Technology</p>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#faculty">Faculty</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="apply-button">Apply Now</button>
      </div>
    </header>
  );
};

export default Header;