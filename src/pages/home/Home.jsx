import React from 'react';
import './Home.css';

function Home() {
  const scrollToWorks = () => {
    const worksSection = document.getElementById('works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Creative Graphic Designer</h1>
        <p>I turn ideas into beautiful visual stories</p>
        <button className="cta-button" onClick={scrollToWorks}>
          View My Work
        </button>
      </section>

      {/* Featured Works Section */}
      <section className="works-preview" id="works">
        <h2>Featured Works</h2>
        <div className="works-grid">
          <div className="work-card">
            <div className="work-image">Project 1</div>
            <h3>Brand Identity</h3>
            <p>Logo and color system for a coffee shop</p>
          </div>
          <div className="work-card">
            <div className="work-image">Project 2</div>
            <h3>Poster Design</h3>
            <p>Event poster for a music festival</p>
          </div>
          <div className="work-card">
            <div className="work-image">Project 3</div>
            <h3>Packaging</h3>
            <p>Product packaging for organic snacks</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview">
        <h2>Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>Logo Design</h3>
            <p>Unique and memorable logos that represent your brand</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📦</div>
            <h3>Branding</h3>
            <p>Complete visual identity including colors, fonts, and guidelines</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🖼️</div>
            <h3>Print Design</h3>
            <p>Posters, business cards, packaging, and marketing materials</p>
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="action-section">
        <h2>Ready to start your project?</h2>
        <p>Let’s create something amazing together. Get in touch today!</p>
        <button className="cta-button">Contact Me</button>
      </section>
    </div>
  );
}

export default Home;