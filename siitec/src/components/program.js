// src/components/Programs.jsx
import React from 'react';
import '../styles/theme.css';
import '../styles/program.css';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "AI & Machine Learning Integration",
      description: "Combine AI with other technologies to create intelligent systems.",
      icon: "🤖",
      color: "var(--copper)"
    },
    {
      id: 2,
      title: "IoT Systems Engineering",
      description: "Design and implement interconnected smart devices and systems.",
      icon: "🌐",
      color: "var(--copper-light)"
    },
    {
      id: 3,
      title: "Robotics & Automation",
      description: "Develop advanced robotic systems for various industries.",
      icon: "🦾",
      color: "var(--copper-dark)"
    },
    {
      id: 4,
      title: "Data Science Convergence",
      description: "Integrate data analysis with domain-specific applications.",
      icon: "📊",
      color: "var(--copper-bright)"
    }
  ];

  return (
    <section className="programs" id="programs">
      <div className="tech-pattern"></div>
      <div className="section-header">
        <h2>Our <span>Integrated Programs</span></h2>
        <p>Interdisciplinary education for the technology leaders of tomorrow</p>
      </div>
      <div className="programs-grid">
        {programs.map(program => (
          <div className="program-card" key={program.id}>
            <div className="program-icon" style={{ color: program.color }}>
              {program.icon}
            </div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <div className="program-footer">
              <a href="#" className="learn-more">
                Learn More <span>→</span>
              </a>
              <div className="program-glow" style={{ background: program.color }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;