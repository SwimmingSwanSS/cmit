// src/components/Hero.jsx
import React from 'react';
import '../styles/theme.css';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Shaping the Future of Integrated Technology</h1>
        <p>At SiiTec, we blend cutting-edge disciplines to create innovative solutions for tomorrow's challenges.</p>
        <div className="hero-buttons">
          <button className="primary-button">Explore Programs</button>
          <button className="secondary-button">Virtual Tour</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="tech-circle">
          <div className="circuit-pattern"></div>
          <div className="floating-tech">
            <div className="tech-icon ai"></div>
            <div className="tech-icon iot"></div>
            <div className="tech-icon robotics"></div>
            <div className="tech-icon data"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;