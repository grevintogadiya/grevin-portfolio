import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      title: "Meta Ads",
      level: "Advanced",
      percentage: "90%",
    },
    {
      title: "Google Ads",
      level: "Advanced",
      percentage: "85%",
    },
    {
      title: "SEO",
      level: "Advanced",
      percentage: "85%",
    },
    {
      title: "Social Media Marketing",
      level: "Advanced",
      percentage: "90%",
    },
    {
      title: "Performance Marketing",
      level: "Advanced",
      percentage: "88%",
    },
    {
      title: "Lead Generation",
      level: "Advanced",
      percentage: "90%",
    },
    {
      title: "Content Strategy",
      level: "Advanced",
      percentage: "85%",
    },
    {
      title: "Analytics & Reporting",
      level: "Intermediate",
      percentage: "78%",
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* =================================
            SECTION HEADER
        ================================= */}

        <div className="skills-header" data-aos="fade-up">
          <p className="skills-label">MY SKILLS</p>

          <h2>
            Skills & <span>Expertise</span>
          </h2>

          <p className="skills-description">
            A combination of marketing strategy, creative thinking and
            data-driven decision making to create campaigns that deliver
            measurable business results.
          </p>
        </div>

        {/* =================================
            SKILLS GRID
        ================================= */}

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.title}
              data-aos="fade-up"
              /*
                Cards will appear one after another.
                0ms → 250ms → 500ms → 750ms...
              */
              data-aos-delay={index * 250}
              data-aos-duration="700"
            >
              {/* Card Top */}

              <div className="skill-card-top">
                <h3>{skill.title}</h3>

                <span>{skill.level}</span>
              </div>

              {/* Progress Bar */}

              <div className="skill-progress">
                <div
                  className="skill-progress-bar"
                  style={{
                    width: skill.percentage,
                  }}
                ></div>
              </div>

              {/* Bottom */}

              <div className="skill-bottom">
                <small>Expertise</small>

                <strong>{skill.percentage}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
