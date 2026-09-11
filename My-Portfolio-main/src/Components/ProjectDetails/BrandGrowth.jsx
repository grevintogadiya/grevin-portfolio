import React, { useState } from "react";
import Footer from "../Footer/Footer";
import "./BrandGrowth.css";

function BrandGrowth() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="brand-page">
      {/* =========================================
          PROJECT HEADER
      ========================================= */}

      <header className="brand-project-header">
        <a href="/" className="brand-project-logo" onClick={closeMenu}>
          Grevin<span>.</span>
        </a>

        {/* DESKTOP NAV */}

        <nav className={`brand-project-nav ${menuOpen ? "mobile-open" : ""}`}>
          <a href="/#home" onClick={closeMenu}>
            Home
          </a>

          <a href="/#about" onClick={closeMenu}>
            About
          </a>

          <a href="/#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="/#services" onClick={closeMenu}>
            Services
          </a>

          <a href="/#project" className="active" onClick={closeMenu}>
            Work
          </a>

          <a href="/#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="/#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}

        <button
          className={`brand-menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* =========================================
          MAIN
      ========================================= */}

      <main className="brand-project-main">
        <div className="brand-project-container">
          {/* BACK */}

          <a href="/#project" className="brand-back-link">
            ← Back to Work
          </a>

          {/* =========================================
              HERO
          ========================================= */}

          <section className="brand-hero">
            <div className="brand-hero-left">
              <p className="brand-label">SOCIAL MEDIA CASE STUDY</p>

              <h1>
                Brand Growth
                <span> Strategy</span>
              </h1>

              <p className="brand-hero-description">
                A complete Instagram growth strategy focused on increasing brand
                visibility, reaching new audiences, improving content
                performance and building a stronger digital presence.
              </p>

              <div className="brand-project-meta">
                <div>
                  <small>PLATFORM</small>
                  <strong>Instagram</strong>
                </div>

                <div>
                  <small>OBJECTIVE</small>
                  <strong>Brand Growth</strong>
                </div>

                <div>
                  <small>FOCUS</small>
                  <strong>Organic Reach</strong>
                </div>
              </div>
            </div>

            {/* PROFILE */}

            <div className="brand-hero-right">
              <div className="instagram-profile-card">
                <div className="profile-card-top">
                  <span>INSTAGRAM PROFILE</span>

                  <span className="profile-status">● ACTIVE</span>
                </div>

                <img
                  src="/images/brand-profile.png"
                  alt="Instagram Brand Profile"
                  className="brand-profile-image"
                />

                <div className="profile-info">
                  <h3>
                    kalgi_official
                    <span>✓</span>
                  </h3>

                  <p>KALGI | Ethnic Wear Surat</p>

                  <div className="profile-stats">
                    <div>
                      <strong>81</strong>
                      <span>Posts</span>
                    </div>

                    <div>
                      <strong>852</strong>
                      <span>Followers</span>
                    </div>

                    <div>
                      <strong>8</strong>
                      <span>Following</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================
              BIG RESULT
          ========================================= */}

          <section className="brand-result-section">
            <div className="result-heading">
              <p className="brand-label">CAMPAIGN RESULT</p>

              <h2>
                Visibility That
                <span> Reached Beyond Followers</span>
              </h2>

              <p>
                The content strategy successfully reached a large percentage of
                users who were not already following the account.
              </p>
            </div>

            <div className="result-number-card">
              <span>ACCOUNT VIEWS</span>

              <strong>90,284</strong>

              <p>Total views generated through Instagram content.</p>

              <div className="result-line"></div>

              <div className="result-mini-stats">
                <div>
                  <strong>29.2%</strong>
                  <span>Followers</span>
                </div>

                <div>
                  <strong>70.8%</strong>
                  <span>Non-followers</span>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================
              INSTAGRAM INSIGHTS
          ========================================= */}

          <section className="brand-insights-section">
            <div className="section-heading">
              <div>
                <p className="brand-label">INSTAGRAM ANALYTICS</p>

                <h2>
                  Performance
                  <span> Insights</span>
                </h2>
              </div>

              <p>
                Real Instagram account insights showing reach, views and
                content-type performance.
              </p>
            </div>

            <div className="insights-image-card">
              <div className="image-card-header">
                <div>
                  <span>INSTAGRAM INSIGHTS</span>

                  <strong>Last 30 Days</strong>
                </div>

                <div className="live-dot">
                  <i></i>
                  Live Report
                </div>
              </div>

              <div className="insights-image-wrapper">
                <img
                  src="/images/brand-profile-insights.png"
                  alt="Instagram Account Insights"
                  className="brand-insights-image"
                />
              </div>
            </div>
          </section>

          {/* =========================================
              METRICS
          ========================================= */}

          <section className="brand-metrics-section">
            <div className="section-heading">
              <div>
                <p className="brand-label">KEY METRICS</p>

                <h2>
                  Growth
                  <span> Snapshot</span>
                </h2>
              </div>

              <p>
                A quick overview of the most important account performance
                indicators.
              </p>
            </div>

            <div className="brand-metrics-grid">
              <div className="brand-metric-card">
                <span>01</span>

                <small>TOTAL VIEWS</small>

                <strong>90,284</strong>

                <p>Content views generated</p>
              </div>

              <div className="brand-metric-card">
                <span>02</span>

                <small>VIEWERS</small>

                <strong>31,489</strong>

                <p>Unique viewers reached</p>
              </div>

              <div className="brand-metric-card highlight">
                <span>03</span>

                <small>NON-FOLLOWERS</small>

                <strong>70.8%</strong>

                <p>Views from new audiences</p>
              </div>

              <div className="brand-metric-card">
                <span>04</span>

                <small>FOLLOWERS</small>

                <strong>29.2%</strong>

                <p>Views from existing followers</p>
              </div>
            </div>
          </section>

          {/* =========================================
              CONTENT PERFORMANCE
          ========================================= */}

          <section className="content-performance-section">
            <div className="section-heading">
              <div>
                <p className="brand-label">CONTENT PERFORMANCE</p>

                <h2>
                  What Drove
                  <span> Reach?</span>
                </h2>
              </div>

              <p>
                Reels became the strongest content format for reaching both
                existing and new audiences.
              </p>
            </div>

            <div className="content-performance-grid">
              {/* REELS */}

              <div className="content-type-card featured">
                <div className="content-card-number">01</div>

                <div className="content-icon">▶</div>

                <small>CONTENT TYPE</small>

                <h3>Reels</h3>

                <strong>69.3%</strong>

                <p>
                  The highest-performing format, helping the brand expand its
                  reach beyond the existing follower base.
                </p>

                <div className="content-bar">
                  <span
                    style={{
                      width: "69.3%",
                    }}
                  ></span>
                </div>
              </div>

              {/* STORIES */}

              <div className="content-type-card">
                <div className="content-card-number">02</div>

                <div className="content-icon">◉</div>

                <small>CONTENT TYPE</small>

                <h3>Stories</h3>

                <strong>30.5%</strong>

                <p>
                  Stories supported regular audience engagement and maintained
                  consistent communication.
                </p>

                <div className="content-bar">
                  <span
                    style={{
                      width: "30.5%",
                    }}
                  ></span>
                </div>
              </div>

              {/* POSTS */}

              <div className="content-type-card">
                <div className="content-card-number">03</div>

                <div className="content-icon">▣</div>

                <small>CONTENT TYPE</small>

                <h3>Posts</h3>

                <strong>0.3%</strong>

                <p>
                  Static posts contributed a smaller portion of overall views
                  compared with short-form video.
                </p>

                <div className="content-bar">
                  <span
                    style={{
                      width: "0.3%",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================
              BEFORE / AFTER
          ========================================= */}

          <section className="before-after-section">
            <div className="section-heading">
              <div>
                <p className="brand-label">FOLLOWER GROWTH</p>

                <h2>
                  Before &<span> After</span>
                </h2>
              </div>

              <p>
                Instagram profile growth comparison showing the improvement in
                followers from the starting point to the current profile
                performance.
              </p>
            </div>

            <div className="before-after-single-image">
              <div className="ba-image-header">
                <div>
                  <span>INSTAGRAM GROWTH</span>

                  <strong>750 → 852 Followers</strong>
                </div>

                <div className="growth-badge">+102 Followers</div>
              </div>

              <div className="ba-full-image">
                <img
                  src="/images/brand-before-after.png"
                  alt="Instagram follower growth from 750 to 852 followers"
                />
              </div>
            </div>
          </section>

          {/* =========================================
              STRATEGY
          ========================================= */}

          <section className="brand-strategy-section">
            <div className="strategy-heading">
              <p className="brand-label">GROWTH APPROACH</p>

              <h2>
                Strategy &<span> Execution</span>
              </h2>
            </div>

            <div className="strategy-grid">
              <div className="strategy-item">
                <span>01</span>

                <div>
                  <h3>Content Strategy</h3>

                  <p>
                    Planned a consistent content mix around products, offers,
                    educational content, brand communication and engaging
                    short-form videos.
                  </p>
                </div>
              </div>

              <div className="strategy-item">
                <span>02</span>

                <div>
                  <h3>Reels First Approach</h3>

                  <p>
                    Focused on short-form video content to increase
                    discoverability and reach users outside the existing
                    follower base.
                  </p>
                </div>
              </div>

              <div className="strategy-item">
                <span>03</span>

                <div>
                  <h3>Brand Consistency</h3>

                  <p>
                    Improved visual consistency, messaging and content
                    presentation to create a recognizable digital identity.
                  </p>
                </div>
              </div>

              <div className="strategy-item">
                <span>04</span>

                <div>
                  <h3>Performance Analysis</h3>

                  <p>
                    Reviewed Instagram insights to identify high-performing
                    formats and optimize future content decisions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================
              FINAL RESULT
          ========================================= */}

          <section className="brand-final-section">
            <div className="final-content">
              <p className="brand-label">THE OUTCOME</p>

              <h2>
                Building a Stronger
                <span> Digital Presence</span>
              </h2>

              <p>
                The campaign created stronger visibility for the brand while
                reaching a significant percentage of users beyond the existing
                follower audience.
              </p>
            </div>

            <div className="final-stat">
              <strong>+102</strong>

              <span>
                follower growth
                <br />
                from 750 to 852
              </span>
            </div>
          </section>

          {/* =========================================
              BOTTOM BUTTON
          ========================================= */}

          <div className="brand-bottom-back">
            <a href="/#project">← Explore More Projects</a>
          </div>
        </div>
      </main>

      {/* =========================================
          FOOTER
      ========================================= */}

      <Footer />
    </div>
  );
}

export default BrandGrowth;
