import React from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      year: "2025 — Present",
      role: "Digital Marketing Specialist",
      company: "Freelance / Independent",
      description:
        "Planning and managing digital marketing campaigns for businesses with a focus on lead generation, paid advertising, social media and online growth.",
      skills: ["Meta Ads", "Google Ads", "SEO", "Lead Generation"],
    },
    {
      year: "2024 — 2025",
      role: "Performance Marketing",
      company: "Digital Marketing Projects",
      description:
        "Worked on performance-focused campaigns including audience research, campaign setup, creative strategy, optimization and performance analysis.",
      skills: [
        "Performance Marketing",
        "Audience Research",
        "Campaign Optimization",
        "Analytics",
      ],
    },
    {
      year: "2023 — 2024",
      role: "Social Media & Marketing",
      company: "Freelance Projects",
      description:
        "Created social media strategies and marketing campaigns to improve brand visibility, audience engagement and digital presence.",
      skills: [
        "Social Media",
        "Content Strategy",
        "Instagram Marketing",
        "Brand Growth",
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        {/* Header */}
        <div className="experience-header" data-aos="fade-up">
          <p className="experience-label">MY EXPERIENCE</p>

          <h2>
            Professional <span>Journey</span>
          </h2>

          <p className="experience-intro">
            My experience across digital marketing, performance campaigns and
            social media has helped me develop a result-oriented approach to
            online growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div
              className="experience-item"
              key={experience.year}
              data-aos="fade-up"
              data-aos-delay={index * 220}
              data-aos-duration="700"
            >
              {/* Timeline */}
              <div className="timeline-side">
                <span className="timeline-dot"></span>

                {index !== experiences.length - 1 && (
                  <span className="timeline-line"></span>
                )}
              </div>

              {/* Content */}
              <div className="experience-card">
                <div className="experience-top">
                  <span className="experience-year">{experience.year}</span>

                  <span className="experience-index">0{index + 1}</span>
                </div>

                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <p>{experience.description}</p>

                <div className="experience-skills">
                  {experience.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
