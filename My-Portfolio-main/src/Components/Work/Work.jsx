import React from "react";
import "./Work.css";

function Work() {
  const projects = [
    {
      number: "01",
      category: "META ADS",
      title: "Lead Generation Campaign",
      description:
        "A performance-focused Meta Ads campaign designed to reach the right audience and generate quality business leads.",
      tags: ["Meta Ads", "Lead Generation", "Audience Targeting"],
      result: "Lead Generation",
      link: "#/projects/lead-generation",
    },
    {
      number: "02",
      category: "SOCIAL MEDIA",
      title: "Brand Growth Strategy",
      description:
        "A complete social media strategy focused on improving brand visibility, engagement and consistent online presence.",
      tags: ["Instagram", "Content Strategy", "Engagement"],
      result: "Brand Growth",
      link: "#/projects/brand-growth",
    },
    {
      number: "03",
      category: "WEBSITE DEVELOPMENT",
      title: "SEO-Optimized Website Development",
      description:
        "Modern, responsive and SEO-optimized websites designed to improve online visibility, deliver a seamless user experience and support long-term business growth.",
      tags: ["Web Development", "SEO", "Responsive Design"],
      result: "SEO-Optimized Website",
      link: "http://www.bharattradeinternational.com/",
    },
    {
      number: "04",
      category: "PERFORMANCE MARKETING",
      title: "Conversion Campaign",
      description:
        "A conversion-oriented campaign combining audience research, creative testing and continuous performance optimization.",
      tags: ["Performance Ads", "A/B Testing", "Optimization"],
      result: "Conversions",
      link: "#/projects/conversion-campaign",
    },
  ];

  return (
    <section className="work-section" id="project">
      <div className="work-container">
        {/* Header */}
        <div className="work-header" data-aos="fade-up">
          <p className="work-label">MY WORK</p>

          <h2>
            Selected <span>Projects</span>
          </h2>

          <p className="work-intro">
            A selection of digital marketing projects, campaigns and strategies
            focused on building visibility, generating leads and driving
            measurable business growth.
          </p>
        </div>

        {/* Projects */}
        <div className="work-grid">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target={project.link !== "#" ? "_blank" : undefined}
              rel={project.link !== "#" ? "noopener noreferrer" : undefined}
              className="work-card-link"
              key={project.number}
              aria-label={`View ${project.title}`}
            >
              <article
                className="work-card"
                data-aos="fade-up"
                data-aos-delay={index * 180}
                data-aos-duration="700"
              >
                <div className="work-card-top">
                  <span className="work-number">{project.number}</span>

                  <span className="work-category">{project.category}</span>
                </div>

                <div className="work-card-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="work-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="work-card-bottom">
                  <div>
                    <small>Focus</small>

                    <strong>{project.result}</strong>
                  </div>

                  <span className="view-project">
                    View Project <span>↗</span>
                  </span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
