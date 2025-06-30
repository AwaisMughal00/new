import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
  return (
    <section className="home">
      {/* Banner */}
      <div className="banner">
        <img src="/Home.jpg" alt="Banner" className="banner-image" />
        <div className="banner-text">
          <h1>Welcome to <span className="red">Awais Dev</span></h1>
          <p>I design and build modern web experiences.</p>
          <h2 className="profession">💻 MERN Stack Developer</h2>
        </div>
      </div>

      {/* Boxes Container */}
      <div className="box-container">

        {/* About Box */}
        <div className="home-section box">
          <h2 className="section-title red">About Me</h2>
          <p>
            I’m a passionate MERN Stack Developer focused on creating responsive, high-performance
            web apps using MongoDB, Express.js, React, and Node.js. With several real-world projects,
            I bring both frontend finesse and backend power to every line of code.
          </p>
        </div>

        {/* Skills Box */}
        <div className="home-section box">
          <h2 className="section-title red">What I Do</h2>
          <ul className="skills-list">
            <li>💻 MERN Stack Development</li>
            <li>⚙️ REST APIs & Backend with Node.js</li>
            <li>🎨 Responsive Frontend using React</li>
            <li>🔐 Authentication & Security (JWT, OAuth)</li>
            <li>🚀 Deployment (Vercel, Netlify, Heroku)</li>
          </ul>
        </div>

        {/* CTA Box */}
        <div className="home-section box cta">
          <h2 className="section-title red">Let’s Build Something Together</h2>
          <p>Have a project or an idea? I'd love to help you bring it to life.</p>
          <Link to="/contact" className="cta-btn">Contact With Us</Link>
        </div>
        
      </div>
    </section>
  );
};

export default Home;
