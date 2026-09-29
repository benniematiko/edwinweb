import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2 className="footer-logo">Maxendry Graphics</h2>
          <p className="footer-desc">
            Turning your ideas into beautiful visual stories. Let's build your dream brand together like LEGOs!
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/works">Works</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Logo Design</li>
            <li>Branding</li>
            <li>Print Design</li>
            <li>Packaging</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: hello@maxendry.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="social-icons">
            <span>📷</span>
            <span>🐦</span>
            <span>💼</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Maxendry Graphics. All rights reserved. Built with ❤️ and LEGOs.</p>
      </div>
    </footer>
  );
}

export default Footer;