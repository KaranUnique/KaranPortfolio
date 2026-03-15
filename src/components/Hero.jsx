import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <h1 className="hero-title">
        SOFTWARE <br />
        <span className="stroke-text">ENGINEER</span>
      </h1>
      <p className="hero-description">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>

      <div className="stats-grid">
        <div className="stat-item">
          <h2 className="stat-number">3+</h2>
          <p className="stat-label">
            YEARS
            <br />
            CODING
          </p>
        </div>
        <div className="stat-item">
          <h2 className="stat-number">200+</h2>
          <p className="stat-label">
            MERGED
            <br />
            PULL REQUESTS
          </p>
        </div>
        <div className="stat-item">
          <h2 className="stat-number">300+</h2>
          <p className="stat-label">
            DSA PROBLEMS
            <br />
            SOLVED
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
