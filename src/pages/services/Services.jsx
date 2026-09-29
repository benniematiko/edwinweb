import React from 'react';
import './Services.css';

const Services = () => {
  // This is our data - like the list of foods in the kitchen fridge
  // We use an Array of Objects. An Array is like a lunchbox with many compartments.
  const myServices = [
    {
      id: 1,
      icon: '🎨',
      title: 'Logo Design',
      description: 'I will make a super cool and memorable logo for your brand, like a superhero badge for your company.'
    },
    {
      id: 2,
      icon: '📦',
      title: 'Brand Identity',
      description: 'I create the full look for your brand - colors, fonts, and style, so everything matches perfectly like a LEGO set.'
    },
    {
      id: 3,
      icon: '📱',
      title: 'Social Media Design',
      description: 'Eye-catching posts and stories for Instagram and Facebook that make people stop scrolling and look.'
    },
    {
      id: 4,
      icon: '📖',
      title: 'Poster & Flyer Design',
      description: 'Awesome posters for events, schools, or parties that people will want to read and keep.'
    },
    {
      id: 5,
      icon: '📚',
      title: 'Business Card Design',
      description: 'Professional and creative business cards that make you look super professional when you meet someone.'
    },
    {
      id: 6,
      icon: '🌐',
      title: 'UI Design',
      description: 'I design the look of websites and apps to make them beautiful and easy to use, like arranging a clean room.'
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h1 className="services-title">My Services</h1>
        <p className="services-subtitle">Here is what I can create for you - like a menu of my best dishes!</p>
      </div>

      <div className="services-grid">
        {myServices.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.description}</p>
            <button className="service-button">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;