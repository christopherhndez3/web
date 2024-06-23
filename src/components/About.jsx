// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <video autoPlay loop muted id="background-video">
        <source src="/src/assets/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h2>About Me</h2>
        <p>Hello! I'm Christopher Hernandez, a Software Engineer specializing in backend development and ethical hacking.</p>
       
      </div>
    </section>
  );
};

export default About;
