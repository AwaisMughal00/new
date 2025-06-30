import React, { useState } from 'react';
import '../css/Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [charCount, setCharCount] = useState(100);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Update countdown only for message field
    if (name === 'message') {
      const remaining = 100 - value.length;
      setCharCount(remaining >= 0 ? remaining : 0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.message.length < 100) {
      alert('Please write a message with at least 50 characters.');
      return;
    }
    alert('Your message has been submitted. Thank you!');
    setFormData({ name: '', email: '', message: '' });
    setCharCount(100);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          Feel free to reach out using the form below or through our contact information.
        </p>

        <div className="contact-grid">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message (min 100 characters)"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={100}
            ></textarea>
            <small style={{ color: "#ccc", marginTop: "-10px", fontSize: "0.85rem" }}>
              {charCount > 0
                ? `* ${charCount} characters remaining`
                : '* Minimum characters reached'}
            </small>
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <div className="contact-image">
              <img src="/me.png" alt="Awais Mughal" />
            </div>
            <div className="contact-text">
              <h2>Contact Information</h2>
              <p><FaMapMarkerAlt /> Mughal Pura No.2, Street 3/4, Jamilabad, Faisalabad</p>
              <p><FaPhoneAlt /> +92 326 6269845</p>
              <p><FaEnvelope /> awaismughal69000@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contact-details-extension">
          <h3>Need More Help?</h3>
          <p>We're available Monday to Saturday, 9am to 6pm. Whether you're interested in a website, need technical support, or just have a general query — we’re always ready to assist you.</p>
          <p>If you're reaching out regarding a project, please include details such as your deadline, goals, and any specific technologies you're interested in. This helps us understand your requirements faster.</p>
          <p>You can expect a response within 24–48 hours. If your matter is urgent, please mention "URGENT" in the subject line of your message.</p>
          <p>We also welcome collaboration inquiries, speaking engagements, and training/workshop opportunities for your organization or institute.</p>
          <p>Thank you for considering AWAIS Dev for your web development needs!</p>
        </div>

        <div className="google-map">
          <iframe
            src="https://maps.google.com/maps?q=31.450591, 73.113935&z=17&output=embed"
            width="100%"
            height="300"
            style={{ border: "0", borderRadius: "8px", marginTop: "2rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="My Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
