import React from 'react';
import { Link } from 'react-router-dom';
import contactInfo from '../../constants/contactInfo';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-premium">
      <div className="footer-top">
        <div className="footer-cta">
          <h2>Let's make something <span>cool together.</span></h2>
          <a href={`mailto:${contactInfo.email}`} className="footer-email">
            {contactInfo.email}
          </a>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/works">Works</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <span>Logo Design</span>
            <span>Brand Identity</span>
            <span>Packaging</span>
            <span>Print Design</span>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <span>{contactInfo.location}</span>
            <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            <span>Available 9am - 6pm EAT</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div className="logo-mark">M</div>
          <span>© 2026 {contactInfo.brand}. Made with ♥ in Nairobi.</span>
        </div>
        <div className="footer-bottom-right">
          <a href={contactInfo.instagram}>Instagram</a>
          <a href={contactInfo.behance}>Behance</a>
          <a href={contactInfo.whatsapp}>WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;