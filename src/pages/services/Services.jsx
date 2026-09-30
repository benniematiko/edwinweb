import React from 'react';
import ServicesList from '../../components/services/ServicesList';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1>My <span>Services</span></h1>
        <p>Here is what I can create for you - like a menu of my best dishes! Choose what your brand needs.</p>
      </div>

      <ServicesList />

      <div className="services-action">
        <h2>Not sure what you need?</h2>
        <p>Let's talk about your idea and I will help you pick the perfect service!</p>
        <Link to="/contact" className="cta-button">Contact Me →</Link>
      </div>
    </div>
  );
}

export default Services;