import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import contactInfo from '../../constants/contactInfo';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* Top Contact Bar - Only Desktop */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-left">
            <span>✉️ {contactInfo.email}</span>
            <span>📞 {contactInfo.phone}</span>
            <span>📍 {contactInfo.location}</span>
          </div>
          <div className="top-bar-right">
            <span>Available for new projects</span>
            <div className="dot-pulse"></div>
          </div>
        </div>
      </div>

      <nav className={`navbar ${scrolled? 'scrolled' : ''} ${isOpen? 'menu-open' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <div className="logo-mark">M</div>
              <span>{contactInfo.brand}</span>
            </Link>
          </div>

          <ul className="navbar-links">
            <li className={location.pathname === '/'? 'active' : ''}><Link to="/">Home</Link></li>
            <li className={location.pathname === '/works'? 'active' : ''}><Link to="/works">Works</Link></li>
            <li className={location.pathname === '/services'? 'active' : ''}><Link to="/services">Services</Link></li>
            <li className={location.pathname === '/contact'? 'active' : ''}><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="navbar-actions">
            <Link to="/contact" className="navbar-cta">Let's Talk →</Link>
          </div>

          <button className={`hamburger ${isOpen? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div className={`menu-overlay ${isOpen? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>

      {/* Mobile menu - 80% slide */}
      <div className={`mobile-menu ${isOpen? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="logo-mark">M</div>
          <span>{contactInfo.brand}</span>
        </div>

        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}><span className="link-num">01</span> Home</Link></li>
          <li><Link to="/works" onClick={() => setIsOpen(false)}><span className="link-num">02</span> Works</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}><span className="link-num">03</span> Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}><span className="link-num">04</span> Contact</Link></li>
        </ul>

        <div className="mobile-contact">
          <p>GET IN TOUCH</p>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
          <div className="mobile-socials">
            <a href={contactInfo.instagram}>IG</a>
            <a href={contactInfo.behance}>BE</a>
            <a href={contactInfo.whatsapp}>WA</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;