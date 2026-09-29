import React from 'react';
import Hero from '../../components/hero/Hero';
import Featured from '../../components/featured/Featured';
import ServicesList from '../../components/services/ServicesList';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      {/* Premium Hero - From our Hero component */}
      <Hero />

      {/* Featured Works Section - Premium Wrapper */}
      <section className="works-preview" id="works">
        <div className="section-header">
          <div className="section-badge">Selected Work</div>
          <h2>Featured projects that <span>pop.</span></h2>
          <p>Real work from my public folder - coffee brands, festivals & packaging that clients loved.</p>
        </div>
        
        <Featured />
        
        <div className="center-btn">
          <Link to="/works" className="premium-link">
            Explore all works <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* Services Section - Premium Wrapper */}
      <section className="services-preview">
        <div className="section-header dark">
          <div className="section-badge light">What I Do</div>
          <h2>Services designed to make you <span>money.</span></h2>
          <p>Not just pretty pixels. I build brands that sell.</p>
        </div>
        
        <ServicesList limit={3} />

        <div className="center-btn">
          <Link to="/services" className="premium-link light">
            View all services <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* Action Section - Premium CTA */}
      <section className="action-section">
        <div className="action-card">
          <div className="action-content">
            <h2>Have an idea? <br/> Let's make it <span>real.</span></h2>
            <p>I'm available for freelance. Email me and get a reply in 2 hours.</p>
            <div className="action-btns">
              <Link to="/contact" className="action-primary">Start a Project →</Link>
              <a href="mailto:hello@maxendry.com" className="action-secondary">hello@maxendry.com</a>
            </div>
          </div>
          <div className="action-visual">
            <div className="visual-circle"></div>
            <div className="visual-emoji">✦</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;