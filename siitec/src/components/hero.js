import React, { useRef, useEffect } from 'react';
import '../styles/theme.css';
import '../styles/hero.css';
import backgroundVideo from '../assets/video1.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (videoRef.current && heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        videoRef.current.style.height = `${heroHeight}px`;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Background Video */}
      <div className="video-background">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="hero-content right-align">
        <h1>Shaping the Future of <span>Integrated Technology</span></h1>
        <p>At SiiTec, we blend cutting-edge disciplines to create innovative solutions for tomorrow's challenges.</p>
        <div className="hero-buttons">
          <button className="primary-button">Explore Programs</button>
          <button className="secondary-button">Virtual Tour</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;