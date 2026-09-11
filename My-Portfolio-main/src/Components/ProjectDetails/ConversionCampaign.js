import React, { useState } from "react";
import Footer from "../Footer/Footer";
import "./ConversionCampaign.css";

function ConversionCampaign() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="conversion-page">
      {/* =========================================
          FIXED HEADER
      ========================================= */}

      <header className="conversion-project-header">
        <a href="/" className="conversion-project-logo" onClick={closeMenu}>
          Grevin
        </a>

        <nav
          className={`conversion-project-nav ${menuOpen ? "mobile-open" : ""}`}
        >
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

        <button
          type="button"
          className={`conversion-menu-button ${menuOpen ? "open" : ""}`}
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

      <main className="conversion-project-content">
        <div className="conversion-project-container">
          {/* BACK */}

          <a href="/#project" className="conversion-back-projects">
            ← Back to Work
          </a>

          {/* =========================================
              HERO / INTRO
          ========================================= */}

          <section className="conversion-intro">
            <div className="conversion-intro-label">META ADS CASE STUDY</div>

            <h1>
              Conversion
              <span> Campaign</span>
            </h1>

            <p className="conversion-intro-text">
              A conversion-focused Meta Ads campaign designed to drive
              high-intent actions through strategic audience targeting, creative
              testing and continuous performance optimization.
            </p>

            <div className="conversion-project-meta">
              <div>
                <span>PLATFORM</span>
                <strong>Meta Ads</strong>
              </div>

              <div>
                <span>CAMPAIGN TYPE</span>
                <strong>Conversion</strong>
              </div>

              <div>
                <span>CAMPAIGN PERIOD</span>
                <strong>11 Aug — 9 Sep 2026</strong>
              </div>
            </div>
          </section>

          {/* =========================================
              REPORT SECTION
          ========================================= */}

          <section className="conversion-report-section">
            <div className="conversion-section-heading">
              <div>
                <span>CAMPAIGN REPORT</span>

                <h2>
                  Meta Ads <strong>Performance</strong>
                </h2>

                <p>
                  Campaign performance captured directly from Meta Ads Manager.
                </p>
              </div>

              <div className="conversion-report-date">
                <span>REPORTING PERIOD</span>
                <strong>11 Aug 2026 — 9 Sep 2026</strong>
              </div>
            </div>

            {/* REPORT 01 */}

            <div className="conversion-report-card">
              <div className="conversion-report-browser">
                <div className="conversion-browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="conversion-browser-title">
                  Meta Ads Manager — Performance & Clicks
                </div>
              </div>

              <div className="conversion-report-image-box">
                <img
                  src="/images/conversion-report-1.png"
                  alt="Meta Ads conversion campaign performance report"
                  className="conversion-report-image"
                />
              </div>
            </div>

            {/* REPORT 02 */}

            <div className="conversion-report-card">
              <div className="conversion-report-browser">
                <div className="conversion-browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="conversion-browser-title">
                  Meta Ads Manager — CPM & Link Clicks
                </div>
              </div>

              <div className="conversion-report-image-box">
                <img
                  src="/images/conversion-report-2.png"
                  alt="Meta Ads CPM and link click performance report"
                  className="conversion-report-image"
                />
              </div>
            </div>

            {/* REPORT 03 */}

            <div className="conversion-report-card">
              <div className="conversion-report-browser">
                <div className="conversion-browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="conversion-browser-title">
                  Meta Ads Manager — Cost & Conversion Performance
                </div>
              </div>

              <div className="conversion-report-image-box">
                <img
                  src="/images/conversion-report-3.png"
                  alt="Meta Ads cost per result and conversion performance report"
                  className="conversion-report-image"
                />
              </div>
            </div>
          </section>

          {/* =========================================
              KEY METRICS
          ========================================= */}

          <section className="conversion-metrics-section">
            <div className="conversion-section-heading">
              <div>
                <span>KEY METRICS</span>

                <h2>
                  Campaign <strong>Results</strong>
                </h2>
              </div>

              <p>Core performance indicators from the campaign.</p>
            </div>

            <div className="conversion-metrics-grid">
              <div className="conversion-metric-card">
                <span className="conversion-metric-number">01</span>

                <small>AMOUNT SPENT</small>

                <h3>₹883.03</h3>

                <p>Total campaign spend</p>
              </div>

              <div className="conversion-metric-card">
                <span className="conversion-metric-number">02</span>

                <small>IMPRESSIONS</small>

                <h3>14,435</h3>

                <p>Total ad impressions</p>
              </div>

              <div className="conversion-metric-card">
                <span className="conversion-metric-number">03</span>

                <small>LINK CLICKS</small>

                <h3>179</h3>

                <p>Traffic-generating clicks</p>
              </div>

              <div className="conversion-metric-card">
                <span className="conversion-metric-number">04</span>

                <small>LINK CTR</small>

                <h3>1.24%</h3>

                <p>Overall link click-through rate</p>
              </div>

              <div className="conversion-metric-card">
                <span className="conversion-metric-number">05</span>

                <small>AVG. CPC</small>

                <h3>₹4.93</h3>

                <p>Average cost per link click</p>
              </div>

              <div className="conversion-metric-card highlight">
                <span className="conversion-metric-number">06</span>

                <small>RESULTS</small>

                <h3>34</h3>

                <p>Messaging conversations generated</p>
              </div>

              <div className="conversion-metric-card">
                <span className="conversion-metric-number">07</span>

                <small>ALL CLICKS</small>

                <h3>312</h3>

                <p>Total clicks generated</p>
              </div>

              <div className="conversion-metric-card">
                <span className="conversion-metric-number">08</span>

                <small>AVG. COST / RESULT</small>

                <h3>₹25.97</h3>

                <p>Average result cost</p>
              </div>
            </div>
          </section>

          {/* =========================================
              AD PERFORMANCE
          ========================================= */}

          <section className="conversion-ads-section">
            <div className="conversion-section-heading">
              <div>
                <span>AD BREAKDOWN</span>

                <h2>
                  Creative <strong>Performance</strong>
                </h2>
              </div>

              <div className="conversion-ads-count">3 Active Ads</div>
            </div>

            <div className="conversion-table-wrapper">
              <div className="conversion-table-scroll">
                <table className="conversion-table">
                  <thead>
                    <tr>
                      <th>Ad Creative</th>
                      <th>Impressions</th>
                      <th>Link Clicks</th>
                      <th>CPC</th>
                      <th>CTR</th>
                      <th>Amount Spent</th>
                      <th>Cost / Result</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <div className="conversion-ad-name">
                          <span></span>
                          Children Ad Reels
                        </div>
                      </td>

                      <td>4,745</td>

                      <td>
                        <strong>59</strong>
                      </td>

                      <td>₹4.77</td>

                      <td>1.24%</td>

                      <td>₹281.43</td>

                      <td>
                        <strong>₹18.76</strong>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="conversion-ad-name">
                          <span></span>
                          Kalgi Ad Reels
                        </div>
                      </td>

                      <td>4,377</td>

                      <td>
                        <strong>45</strong>
                      </td>

                      <td>₹6.79</td>

                      <td>1.03%</td>

                      <td>₹305.41</td>

                      <td>
                        <strong>₹25.45</strong>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="conversion-ad-name">
                          <span></span>
                          Offer Reels
                        </div>
                      </td>

                      <td>5,313</td>

                      <td>
                        <strong>75</strong>
                      </td>

                      <td>₹3.95</td>

                      <td>1.41%</td>

                      <td>₹296.19</td>

                      <td>
                        <strong>₹42.31</strong>
                      </td>
                    </tr>

                    <tr className="conversion-total-row">
                      <td>
                        <strong>Total</strong>
                      </td>

                      <td>
                        <strong>14,435</strong>
                      </td>

                      <td>
                        <strong>179</strong>
                      </td>

                      <td>
                        <strong>₹4.93</strong>
                      </td>

                      <td>
                        <strong>1.24%</strong>
                      </td>

                      <td>
                        <strong>₹883.03</strong>
                      </td>

                      <td>
                        <strong>₹25.97</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* =========================================
              PERFORMANCE INSIGHTS
          ========================================= */}

          <section className="conversion-insights-section">
            <div className="conversion-section-heading">
              <div>
                <span>CAMPAIGN ANALYSIS</span>

                <h2>
                  Performance <strong>Insights</strong>
                </h2>
              </div>
            </div>

            <div className="conversion-insights-grid">
              <div className="conversion-insight-card">
                <span>01</span>

                <h3>Best CTR</h3>

                <strong>Offer Reels — 1.41%</strong>

                <p>
                  Offer Reels generated the highest link click-through rate
                  among the three creatives, indicating strong click engagement.
                </p>
              </div>

              <div className="conversion-insight-card">
                <span>02</span>

                <h3>Lowest CPC</h3>

                <strong>Offer Reels — ₹3.95</strong>

                <p>
                  The Offer creative delivered the lowest cost per link click,
                  making it the most efficient traffic-driving creative.
                </p>
              </div>

              <div className="conversion-insight-card">
                <span>03</span>

                <h3>Highest Link Clicks</h3>

                <strong>Offer Reels — 75 Clicks</strong>

                <p>
                  With 75 link clicks, the Offer creative generated the highest
                  volume of traffic from the campaign.
                </p>
              </div>
            </div>
          </section>

          {/* =========================================
              STRATEGY
          ========================================= */}

          <section className="conversion-strategy-section">
            <p className="conversion-project-label">CAMPAIGN STRATEGY</p>

            <h2>
              Strategy & <span>Optimization</span>
            </h2>

            <p>
              The campaign used multiple Reel-based creatives to test different
              content angles and identify which messaging could generate
              stronger user engagement and conversion-oriented actions.
            </p>

            <div className="conversion-strategy-grid">
              <div>
                <span>01</span>
                <h3>Creative Testing</h3>
                <p>
                  Tested children-focused, brand-focused and offer-focused Reel
                  creatives to compare audience response.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Audience Targeting</h3>
                <p>
                  Campaign delivery was structured around relevant audiences
                  with the objective of generating meaningful actions.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Performance Monitoring</h3>
                <p>
                  CPC, CTR, clicks, spend and cost per result were monitored to
                  understand creative efficiency.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>Optimization</h3>
                <p>
                  Performance data was used to identify stronger creatives and
                  improve campaign efficiency.
                </p>
              </div>
            </div>
          </section>

          {/* =========================================
              FINAL RESULT
          ========================================= */}

          <section className="conversion-final-result">
            <div className="conversion-final-content">
              <span>CAMPAIGN OUTCOME</span>

              <h2>
                Data-Driven Campaign
                <strong> Performance</strong>
              </h2>

              <p>
                The campaign generated 179 link clicks and 34 messaging
                conversations from ₹883.03 in ad spend, while testing three
                different Reel creatives to identify stronger engagement and
                traffic-driving performance.
              </p>
            </div>

            <div className="conversion-final-number">
              <strong>34</strong>

              <span>RESULTS</span>
            </div>
          </section>

          {/* =========================================
              BACK TO WORK
          ========================================= */}

          <div className="conversion-bottom-back">
            <a href="/#project">← Explore More Projects</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ConversionCampaign;
