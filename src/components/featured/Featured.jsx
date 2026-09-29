import React from 'react';
import featuredPhotos from '../../constants/featuredPhotos';
import './Featured.css';
import { Link } from 'react-router-dom';

function Featured() {
  return (
    <div className="featured-container">
      <div className="featured-grid">
        {featuredPhotos.slice(0, 3).map((work) => (
          <div key={work.id} className="featured-card-premium">
            <div className="featured-image-wrapper">
              <img 
                src={work.image} 
                alt={work.title} 
                className="featured-img"
                onError={(e) => {
                  e.target.src = `https://picsum.photos/seed/${work.id}/600/400`;
                }}
              />
              <div className="featured-overlay">
                <div className="overlay-top">
                  <span className="category-pill">{work.category || 'Branding'}</span>
                  <span className="year-pill">2026</span>
                </div>
                <div className="overlay-bottom">
                  <Link to="/works" className="view-project-btn">View Project →</Link>
                </div>
              </div>
            </div>
            <div className="featured-info-premium">
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;