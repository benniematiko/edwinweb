import React from 'react';
import { Link } from 'react-router-dom';
import contactInfo from '../../constants/contactInfo';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-premium">
      <div className="hero-bg-gradient"></div>
      <div className="hero-bg-grid"></div>

      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for freelance work
          </div>

          <h1 className="hero-title">
            I craft <span className="outline-text">brands</span> that
            <br />
            <span className="gradient-text">get remembered.</span>
          </h1>

          <p className="hero-desc">
            Hi, I'm Maxendry — Graphic Designer from {contactInfo.location}.
            I turn boring ideas into bold visuals, logos and packaging that make your business look expensive.
          </p>

          <div className="hero-ctas">
            <Link to="/works" className="hero-btn primary">
              View My Works
              <span className="btn-arrow">→</span>
            </Link>
            <a href={`mailto:${contactInfo.email}`} className="hero-btn secondary">
              Email Me
            </a>
          </div>

          <div className="hero-social-proof">
            <div className="avatars">
              <div className="avatar">😊</div>
              <div className="avatar">🚀</div>
              <div className="avatar">⭐</div>
            </div>
            <div className="proof-text">
              <strong>100+ Projects</strong>
              <span>Trusted by brands in KE & beyond</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card-stack">
            <div className="hero-image-card main-card">
              <div className="card-top">
                <span className="card-label">Featured Project</span>
                <span className="card-year">2026</span>
              </div>
              <img src="/njerigacuri.jpeg" alt="Main work" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe'} />
              <div className="card-bottom">
                <h4>Coffee Brand Identity</h4>
                <p>Branding / Packaging</p>
              </div>
            </div>

            <div className="hero-image-card floating-card card-a">
              <div className="floating-icon">🎨</div>
              <div>
                <strong>Logo Design</strong>
                <p>50+ delivered</p>
              </div>
            </div>

            <div className="hero-image-card floating-card card-b">
              <div className="floating-icon dark">✨</div>
              <div>
                <strong>5.0 Rating</strong>
                <p>On Behance & IG</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-brands">
        <span>Worked with:</span>
        <div className="brands-list">
          <span>☕ Java House</span>
          <span>👕 Nairobi Apparel</span>
          <span>🎵 Groove Fest</span>
          <span>🥤 Fresh Juice Co.</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;