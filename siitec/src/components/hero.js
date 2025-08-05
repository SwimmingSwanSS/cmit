// src/components/Hero.jsx
import React from 'react';
import '../styles/theme.css';
import '../styles/hero.css';
import backgroundVideo from '../assets/video8.mp4'; // Update with your video path

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background Video */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="hero-content">
        <h1>Shaping the Future of <span>Integrated Technology</span></h1>
        <p>At SiiTec, we blend cutting-edge disciplines to create innovative solutions for tomorrow's challenges.</p>
        <div className="hero-buttons">
          <button className="primary-button">Explore Programs</button>
          <button className="secondary-button">Virtual Tour</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="tech-sphere">
          <div className="circuit-pattern"></div>
          <div className="floating-tech">
            <div className="tech-icon ai">🤖</div>
            <div className="tech-icon iot">🌐</div>
            <div className="tech-icon robotics">🦾</div>
            <div className="tech-icon data">📊</div>
          </div>
          <div className="glow-effect"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;