import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-content" data-aos="fade-right">
          <p className="about-small-title">ABOUT ME</p>

          <h2>
            Turning <span>Ideas</span> Into
            <br />
            Digital Growth
          </h2>

          <p className="about-text">
            I'm <strong>Grevin Togadiya</strong>, a passionate Digital Marketer
            focused on helping businesses build a strong online presence and
            generate measurable results.
          </p>

          <p className="about-text">
            I specialize in performance marketing, Meta Ads, Google Ads, SEO,
            social media marketing and lead generation. My approach combines
            creativity, strategy and data to create campaigns that deliver real
            business growth.
          </p>

          {/* Stats */}
          <div className="about-stats">
            <div className="stat-box">
              <h3>10+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-box">
              <h3>5+</h3>
              <p>Clients</p>
            </div>

            <div className="stat-box">
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>
          </div>

          <a href="#contact" className="about-btn">
            Let's Work Together
          </a>
        </div>

        {/* Right Content */}
        <div className="about-card-wrapper" data-aos="fade-left">
          <div className="about-card">
            <div className="card-icon">📈</div>

            <h3>Digital Marketing</h3>

            <p>
              Strategy-driven marketing solutions designed to increase
              visibility, engagement, leads and conversions.
            </p>

            <div className="marketing-list">
              <span>✓ Meta Ads</span>
              <span>✓ Google Ads</span>
              <span>✓ SEO</span>
              <span>✓ Lead Generation</span>
              <span>✓ Social Media</span>
              <span>✓ Performance Marketing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
