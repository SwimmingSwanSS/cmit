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
      icon: "🤖"
    },
    {
      id: 2,
      title: "IoT Systems Engineering",
      description: "Design and implement interconnected smart devices and systems.",
      icon: "🌐"
    },
    {
      id: 3,
      title: "Robotics & Automation",
      description: "Develop advanced robotic systems for various industries.",
      icon: "🦾"
    },
    {
      id: 4,
      title: "Data Science Convergence",
      description: "Integrate data analysis with domain-specific applications.",
      icon: "📊"
    }
  ];

  return (
    <section className="programs" id="programs">
      <div className="section-header">
        <h2>Our Integrated Programs</h2>
        <p>Interdisciplinary education for the technology leaders of tomorrow</p>
      </div>
      <div className="programs-grid">
        {programs.map(program => (
          <div className="program-card" key={program.id}>
            <div className="program-icon">{program.icon}</div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <a href="#" className="learn-more">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;