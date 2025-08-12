import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/NewsSection.css'; // Make sure this matches your actual file name exactly

function NewsSection() {
  // Sample news data
  const newsData = [
    {
      title: "10s and RadioS 26 UI Kit",
      category: "UI/UX",
      content: [
        "A number for information",
        { action: "Search", icon: "search" },
        { action: "Search", icon: "search" }
      ],
      footer: [
        "Access components across the:",
        "Share your components with your team that you upgrade to a Professional plan."
      ]
    },
    {
      title: "20 Figma plugins every designer must have",
      category: "Design Tools",
      content: [
        "My hands: 20 plugins, which are important and necessary for every designer.",
        { action: "Add", icon: "plus" }
      ]
    }
  ];

  // Particle effects initialization
  useEffect(() => {
    const newsSection = document.querySelector('.news-section');
    if (!newsSection) return;

    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    newsSection.appendChild(particlesContainer);
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 1;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;
      const color = i % 3 === 0 ? '#b87333' : '#9ba9a9';
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.backgroundColor = color;
      
      particlesContainer.appendChild(particle);
    }
    
    return () => {
      particlesContainer.remove();
    };
  }, []);

  return (
    <div className="news-section">
      <h2 className="section-title">News and Events</h2>
      <p className="section-subtitle">Staying Up-to-date with what is happening at Siftec</p>
      
      <div className="news-grid">
        {newsData.map((item, index) => (
          <div key={index} className="news-card">
            <div className="card-header">
              <h3>{item.title}</h3>
              <div className="card-category">{item.category}</div>
            </div>
            
            <ul className="card-content">
              {item.content.map((contentItem, i) => (
                <li key={i}>
                  {typeof contentItem === 'string' ? (
                    contentItem
                  ) : (
                    <button className="card-action">
                      {contentItem.action} <FontAwesomeIcon icon={contentItem.icon} />
                    </button>
                  )}
                </li>
              ))}
            </ul>
            
            {item.footer && (
              <div className="card-footer">
                {item.footer.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            )}
            
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsSection;