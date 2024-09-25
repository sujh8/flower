import React from 'react';
import './AboutSection.css';
import "./components/SearchResults.css"

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <img src="/images/logo.png" alt="Suha's Roses Logo" className="about-logo" />
        <h3>suha's Roses</h3>
        <p>
          suha's Roses is a family-owned and operated business that has been building long-term relationships with the community for just over 25 years! suha has grown the business from a small-town flower shop to a nationally recognized florist because of her attention to detail and timely delivery.
        </p>
        <p>Phone: (000)-000-0000</p>
        <p>Hours: Monday-Friday 8AM - 8PM | Saturday 8AM - 5PM</p>
        <p>E-mail: <a href="mailto:service@suharose.com">service@suharose.com</a></p>
      </div>
    </section>
  );
}

export default AboutSection;
