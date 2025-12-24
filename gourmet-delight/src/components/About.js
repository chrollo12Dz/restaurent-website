import React from 'react';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p>
              Founded in 2010, Gourmet Delight began as a small family-owned bistro with a passion for 
              exceptional food and hospitality. Today, we continue that tradition, offering a fine dining 
              experience that celebrates local ingredients and international culinary techniques.
            </p>
            <p>
              Our chefs combine traditional methods with innovative approaches to create dishes that 
              surprise and delight. We believe in sustainability, sourcing from local farms and producers 
              whenever possible.
            </p>
            <div className="about-features">
              <div className="feature">
                <h3>Fresh Ingredients</h3>
                <p>Daily deliveries from local markets and farms</p>
              </div>
              <div className="feature">
                <h3>Expert Chefs</h3>
                <p>Award-winning culinary team with international experience</p>
              </div>
              <div className="feature">
                <h3>Warm Atmosphere</h3>
                <p>Elegant yet comfortable dining environment</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>Restaurant Interior</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;