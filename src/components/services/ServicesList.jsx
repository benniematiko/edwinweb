import React from 'react';
import servicesData from '../../constants/servicesData';
import './ServicesList.css';

function ServicesList({ limit }) {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <div className="services-list-grid-premium">
      {displayedServices.map((service, index) => (
        <div key={service.id} className="service-card-premium">
          <div className="service-number">0{index + 1}</div>
          <div className="service-icon-premium">{service.icon}</div>
          <h3>{service.title}</h3>
          <p className="service-desc-premium">{service.description}</p>
          <div className="service-footer">
            <span className="service-price-premium">{service.price}</span>
            <span className="service-arrow">→</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesList;