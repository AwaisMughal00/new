import React from 'react';
import '../css/Services.css';

const Services = () => {
  return (
    <section className="services">
      {/* Banner */}
      <img src="/Services.jpg" alt="Services Banner" className="services-banner" />

      <div className="services-container">
        <h1 className="services-title">My Development Services</h1>
        <p className="services-intro">
          I offer expert-level development in both custom-coded and CMS-based platforms.
          Explore my specialized skills below.
        </p>

        {/* Frontend Development */}
        <div className="service-section">
          <h2 className="section-heading">🎨 Frontend Development (MERN)</h2>
          <p>
            I craft interactive and responsive user interfaces using modern technologies that provide fast,
            smooth, and accessible web experiences.
          </p>
          <ul className="tech-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Tailwind CSS / Bootstrap</li>
          </ul>
        </div>

        {/* Backend Development */}
        <div className="service-section">
          <h2 className="section-heading">🧠 Backend Development (MERN)</h2>
          <p>
            On the backend, I create secure, scalable APIs, handle authentication,
            connect databases, and ensure your app runs reliably.
          </p>
          <ul className="tech-list">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>JWT Authentication</li>
            <li>REST API Design</li>
          </ul>
        </div>

        {/* WordPress Development */}
        <div className="service-section">
          <h2 className="section-heading">🧩 WordPress Development</h2>
          <p>
            I specialize in building user-friendly WordPress websites using powerful page builders
            and custom themes for blogs, portfolios, or businesses.
          </p>
          <ul className="tech-list">
            <li>WordPress CMS</li>
            <li>Elementor & WPBakery</li>
            <li>Custom PHP Themes</li>
            <li>WooCommerce</li>
            <li>Theme & Plugin Integration</li>
            <li>SEO & Performance Optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
