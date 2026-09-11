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
    },
    {
      number: "02",
      category: "SOCIAL MEDIA",
      title: "Brand Growth Strategy",
      description:
        "A complete social media strategy focused on improving brand visibility, engagement and consistent online presence.",
      tags: ["Instagram", "Content Strategy", "Engagement"],
      result: "Brand Growth",
    },
    {
      number: "03",
      category: "SEO",
      title: "Organic Growth Campaign",
      description:
        "SEO strategy focused on improving search visibility, organic traffic and long-term online discoverability.",
      tags: ["SEO", "Keyword Research", "On-Page SEO"],
      result: "Organic Growth",
    },
    {
      number: "04",
      category: "PERFORMANCE MARKETING",
      title: "Conversion Campaign",
      description:
        "A conversion-oriented campaign combining audience research, creative testing and continuous performance optimization.",
      tags: ["Performance Ads", "A/B Testing", "Optimization"],
      result: "Conversions",
    },
    {
      number: "05",
      category: "GOOGLE ADS",
      title: "Search Advertising Campaign",
      description:
        "Targeted Google Ads campaign built to connect businesses with high-intent users actively searching for their services.",
      tags: ["Google Ads", "Search Ads", "Keyword Strategy"],
      result: "Qualified Traffic",
    },
    {
      number: "06",
      category: "DIGITAL MARKETING",
      title: "Full Marketing Strategy",
      description:
        "An integrated digital marketing approach combining paid advertising, social media, SEO and lead generation.",
      tags: ["Digital Marketing", "Strategy", "Analytics"],
      result: "Business Growth",
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
            <article
              className="work-card"
              key={project.number}
              data-aos="fade-up"
              data-aos-delay={index * 180}
              data-aos-duration="700"
            >
              {/* Top */}
              <div className="work-card-top">
                <span className="work-number">{project.number}</span>

                <span className="work-category">{project.category}</span>
              </div>

              {/* Main */}
              <div className="work-card-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="work-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Bottom */}
              <div className="work-card-bottom">
                <div>
                  <small>Focus</small>
                  <strong>{project.result}</strong>
                </div>

                <a href="#contact" aria-label={`Discuss ${project.title}`}>
                  View Project
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
