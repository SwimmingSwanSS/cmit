// src/components/Faculty.jsx
import React from 'react';
import '../styles/theme.css';
import '../styles/faculty.css';

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Elena Rodriguez",
      position: "Director of Integrated Technologies",
      expertise: "AI & Systems Integration",
      image: "faculty1.jpg"
    },
    {
      id: 2,
      name: "Prof. James Chen",
      position: "Head of Robotics",
      expertise: "Autonomous Systems",
      image: "faculty2.jpg"
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      position: "Lead Data Scientist",
      expertise: "Convergent Data Systems",
      image: "faculty3.jpg"
    }
  ];

  return (
    <section className="faculty" id="faculty">
      <div className="section-header">
        <h2>World-Class Faculty</h2>
        <p>Learn from industry pioneers and academic leaders</p>
      </div>
      <div className="faculty-grid">
        {facultyMembers.map(member => (
          <div className="faculty-card" key={member.id}>
            <div className="faculty-image">
              <img src={`/images/${member.image}`} alt={member.name} />
              <div className="expertise-badge">{member.expertise}</div>
            </div>
            <h3>{member.name}</h3>
            <p className="position">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faculty;