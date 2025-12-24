import React from 'react';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h2 className="hero-title">Experience Culinary Excellence</h2>
          <p className="hero-subtitle">Fresh ingredients, masterful techniques, and unforgettable flavors</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn-primary">View Our Menu</a>
            <a href="#contact" className="btn-secondary">Book a Table</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;