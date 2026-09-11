import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      icon: "📊",
      title: "Performance Marketing",
      description:
        "Data-driven campaigns focused on generating leads, conversions and measurable business growth.",
    },
    {
      number: "02",
      icon: "📱",
      title: "Meta Ads",
      description:
        "Strategic Facebook and Instagram advertising to reach the right audience and generate quality leads.",
    },
    {
      number: "03",
      icon: "🔎",
      title: "SEO",
      description:
        "Search engine optimization strategies to improve visibility, rankings and organic traffic.",
    },
    {
      number: "04",
      icon: "🌐",
      title: "Google Ads",
      description:
        "Targeted Google advertising campaigns designed to attract high-intent customers and increase conversions.",
    },
    {
      number: "05",
      icon: "📣",
      title: "Social Media Marketing",
      description:
        "Creative social media strategies that build brand awareness, engagement and a strong online presence.",
    },
    {
      number: "06",
      icon: "🎯",
      title: "Lead Generation",
      description:
        "Conversion-focused campaigns that help businesses attract qualified leads and grow their customer base.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header" data-aos="fade-up">
          <p className="services-label">MY SERVICES</p>

          <h2>
            Digital Solutions That
            <br />
            <span>Drive Results</span>
          </h2>

          <p className="services-intro">
            I provide result-oriented digital marketing solutions designed to
            help businesses grow, reach the right audience and generate
            meaningful results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={service.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-top">
                <span className="service-number">{service.number}</span>

                <div className="service-icon">{service.icon}</div>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-line"></div>

              <a href="#contact" className="service-link">
                Let's Talk <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
