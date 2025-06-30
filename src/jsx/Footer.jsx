import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3 className="footer-title">Awais Dev</h3>
          <p className="footer-intro">
            Passionate MERN & WordPress developer delivering responsive, modern websites with strong design and scalable code.
          </p>
        </div>

        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Information</h4>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> Mughal Pura, Faisalabad</li>
            <li><FaPhoneAlt /> +92 326 6269845</li>
            <li><FaEnvelope /> awaismughal69000@gmail.com</li>
            <li>
              <a
                href="https://www.instagram.com/mirzabrand009680"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#cccccc', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <FaInstagram /> @mirzabrand009680
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Awais Dev. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
