import React from 'react';
import ServicesList from '../../components/services/ServicesList';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1>My Services</h1>
        <p>Here is what I can create for you - like a menu of my best dishes! Choose what your brand needs.</p>
      </div>

      {/* No limit = shows all 6 services */}
      <ServicesList />

      <div className="services-action">
        <h2>Not sure what you need?</h2>
        <p>Let's talk about your idea and I will help you pick the perfect service!</p>
        <button className="cta-button">Contact Me</button>
      </div>
    </div>
  );
}

export default Services;