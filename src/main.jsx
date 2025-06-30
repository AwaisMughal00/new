import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./jsx/Navbar";
import Home from "./jsx/Home";
import About from "./jsx/About";
import Services from "./jsx/Services";
import Portfolio from "./jsx/Portfolio";
import Blogs from "./jsx/Blogs";
import Contact from "./jsx/Contact";
import Footer from "./jsx/Footer";
import PrivacyPolicy from './jsx/PrivacyPolicy';
import TermsConditions from './jsx/TermsConditions';

import ScrollToTop from './components/ScrollToTop'; // ✅ NEW

// CSS Imports
import "./css/Navbar.css";
import "./css/Home.css";
import "./css/About.css";
import "./css/Services.css";
import "./css/Portfolio.css";
import "./css/Blogs.css";
import "./css/Contact.css";
import "./css/Footer.css";
import "./css/PrivacyPolicy.css";
import "./css/TermsConditions.css";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ✅ Makes each route scroll to top */}
      <div className="page-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
export default App;
