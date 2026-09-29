import React, { useState } from 'react';
import featuredPhotos from '../../constants/featuredPhotos';
import './Works.css';

// Add more projects to make gallery full
const allWorks = [
  ...featuredPhotos,
  {
    id: 4,
    image: '/project4.jpg',
    title: 'Nairobi Apparel Drop',
    description: 'Streetwear brand lookbook & IG kit',
    category: 'Social'
  },
  {
    id: 5,
    image: '/project1.jpg',
    title: 'Bloom Beauty Logo',
    description: 'Minimal logo for skincare startup',
    category: 'Branding'
  },
  {
    id: 6,
    image: '/project2.jpg',
    title: 'Tech Summit Kenya',
    description: 'Conference branding & stage design',
    category: 'Print'
  }
];

function Works() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Branding', 'Print', 'Packaging', 'Social'];

  const filteredWorks = activeFilter === 'All' 
    ? allWorks 
    : allWorks.filter(work => work.category === activeFilter);

  return (
    <div className="works-page-premium">
      <div className="works-header-premium">
        <div className="works-badge">Portfolio 2024 — 2026</div>
        <h1>We design things that <span>make people stare.</span></h1>
        <p>6 selected projects. No mockups. Real clients, real prints, real results from Nairobi to the world.</p>
        
        <div className="filter-pills">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`pill ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="works-masonry">
        {filteredWorks.map((work) => (
          <div key={work.id} className="work-item-premium">
            <div className="work-img-wrap">
              <img 
                src={work.image} 
                alt={work.title}
                onError={(e) => e.target.src = `https://picsum.photos/seed/${work.id}99/600/700`}
              />
              <div className="work-hover">
                <div className="hover-content">
                  <span className="hover-category">{work.category}</span>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <div className="hover-arrow">↗</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;