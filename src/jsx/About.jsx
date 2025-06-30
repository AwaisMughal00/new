import React from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css';

const About = () => {
  return (
    <section className="about">
      {/* Banner Image */}
      <img src="/About.jpg" alt="About Banner" className="about-banner" />

      <div className="about-container">
        <h1 className="about-title">About Me</h1>

        <p className="about-intro">
          Hi, I'm <span className="highlight">Awais Mughal</span>, a dedicated <strong>MERN Stack Developer</strong> and <strong>WordPress Expert</strong>.
          I love building responsive, secure, and modern websites using both custom code and CMS platforms.
        </p>

        <div className="about-section">
          <h2 className="section-heading">🌟 My Philosophy</h2>
          <p>
            I believe that clean, scalable code and thoughtful UI/UX design are at the heart of every great digital product. Whether working on a full-stack JavaScript application or a CMS-driven website, my focus is always on delivering professional-grade solutions that exceed expectations.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-heading">💻 MERN Stack Development</h2>
          <p>
            As a MERN stack developer, I build modern, robust web applications using MongoDB, Express.js, React.js, and Node.js. My goal is to write efficient backend APIs, craft beautiful frontends, and ensure data flows seamlessly between them.
          </p>
          <p>
            From user authentication and RESTful APIs to interactive UIs and real-time features — I handle it all with a focus on performance and scalability.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-heading">🧩 WordPress Development</h2>
          <p>
            WordPress gives businesses the power to manage their own content with ease. I help clients harness that power by designing custom themes, integrating advanced plugins, and building responsive, SEO-optimized sites that drive engagement.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-heading">🎯 Why Work With Me?</h2>
          <ul className="about-list">
            <li><strong>✅ Professional Communication:</strong> Clear, timely updates and respect for deadlines.</li>
            <li><strong>✅ Modern Tech Stack:</strong> Proficient in the latest tools and technologies for scalable web development.</li>
            <li><strong>✅ Custom Solutions:</strong> I don’t believe in one-size-fits-all. Your site/app is built to suit your goals.</li>
            <li><strong>✅ UI/UX Focused:</strong> Intuitive and visually appealing interfaces that users love.</li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="about-cta">
          <p>Want to discuss your next project?</p>
          <Link to="/contact" className="cta-btn">Talk with Us</Link>
        </div>
      </div>
    </section>
  );
};

export default About;