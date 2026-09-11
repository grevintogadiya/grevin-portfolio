import React from "react";
import Footer from "../Footer/Footer";
import "./LeadGeneration.css";

function LeadGeneration() {
  return (
    <div className="lead-page">
      {/* =========================================
          FIXED HEADER
      ========================================= */}

      <header className="project-header">
        <a href="/" className="project-logo">
          Grevin<span>.</span>
        </a>

        <nav className="project-nav">
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#services">Services</a>
          <a href="/#project" className="active">
            Work
          </a>
          <a href="/#experience">Experience</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      {/* =========================================
          MAIN PROJECT CONTENT
      ========================================= */}

      <main className="lead-project-content">
        <div className="lead-project-container">
          {/* BACK BUTTON */}

          <a href="/#project" className="back-projects">
            ← Back to Work
          </a>

          {/* =========================================
              PROJECT INTRO
          ========================================= */}

          <div className="project-intro-section">
            <p className="project-label">META ADS CASE STUDY</p>

            <h1>
              Lead Generation
              <span> Campaign</span>
            </h1>

            <p className="project-intro-text">
              A performance-focused Meta Ads campaign designed to reach the
              right audience, generate quality leads and improve campaign
              performance through creative testing, audience targeting and
              continuous optimization.
            </p>
          </div>

          {/* =========================================
              REPORT PREVIEW
          ========================================= */}

          <section className="report-preview">
            <div className="report-preview-header">
              <div className="report-heading">
                <span className="report-preview-label">CAMPAIGN REPORT</span>

                <h2>
                  Meta Ads <span>Performance</span>
                </h2>

                <p>Real campaign performance captured from Meta Ads Manager.</p>
              </div>

              <div className="report-period">
                <span>Campaign Period</span>

                <strong>1 Sep 2026 — 10 Sep 2026</strong>
              </div>
            </div>

            {/* =========================================
                BROWSER STYLE REPORT
            ========================================= */}

            <div className="report-image-wrapper">
              <div className="report-browser-bar">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="browser-title">
                  Meta Ads Manager — Campaign Performance
                </div>
              </div>

              <div className="report-image-container">
                <img
                  src="/images/meta-ads-report.png"
                  alt="Meta Ads Campaign Performance Report"
                  className="meta-report-image"
                />
              </div>
            </div>
          </section>

          {/* =========================================
              PERFORMANCE SECTION
          ========================================= */}

          <section className="performance-section">
            <div className="performance-header">
              <div>
                <span>KEY METRICS</span>

                <h2>
                  Campaign <strong>Performance</strong>
                </h2>
              </div>

              <p>Key results generated during the campaign period.</p>
            </div>

            <div className="performance-grid">
              {/* CARD 01 */}

              <div className="performance-card">
                <div className="metric-number">01</div>

                <small>AMOUNT SPENT</small>

                <h3>₹3,011.27</h3>

                <p>Total campaign spend</p>
              </div>

              {/* CARD 02 */}

              <div className="performance-card">
                <div className="metric-number">02</div>

                <small>REACH</small>

                <h3>51,857</h3>

                <p>People reached</p>
              </div>

              {/* CARD 03 */}

              <div className="performance-card">
                <div className="metric-number">03</div>

                <small>IMPRESSIONS</small>

                <h3>89,042</h3>

                <p>Total impressions</p>
              </div>

              {/* CARD 04 */}

              <div className="performance-card">
                <div className="metric-number">04</div>

                <small>RESULTS</small>

                <h3>177</h3>

                <p>Messaging conversations</p>
              </div>

              {/* CARD 05 */}

              <div className="performance-card highlight">
                <div className="metric-number">05</div>

                <small>COST PER RESULT</small>

                <h3>₹17.01</h3>

                <p>Average conversation cost</p>
              </div>
            </div>
          </section>

          {/* =========================================
              AD PERFORMANCE
          ========================================= */}

          <section className="ads-performance-section">
            <div className="ads-section-header">
              <div>
                <span>AD BREAKDOWN</span>

                <h2>
                  Ad <strong>Performance</strong>
                </h2>
              </div>

              <div className="ads-count">3 Active Ads</div>
            </div>

            <div className="ads-table-container">
              <div className="table-scroll">
                <table className="ads-table">
                  <thead>
                    <tr>
                      <th>Ad</th>
                      <th>Delivery</th>
                      <th>Amount Spent</th>
                      <th>Reach</th>
                      <th>Impressions</th>
                      <th>Results</th>
                      <th>Cost / Result</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* AD 01 */}

                    <tr>
                      <td>
                        <div className="ad-name">
                          <span></span>
                          Nails Class Reels
                        </div>
                      </td>

                      <td>
                        <b className="active-status">● Active</b>
                      </td>

                      <td>₹1,011.02</td>

                      <td>19,636</td>

                      <td>27,236</td>

                      <td>
                        <strong>41</strong>
                      </td>

                      <td>
                        <strong>₹24.66</strong>
                      </td>
                    </tr>

                    {/* AD 02 */}

                    <tr>
                      <td>
                        <div className="ad-name">
                          <span></span>
                          Haircut Reels
                        </div>
                      </td>

                      <td>
                        <b className="active-status">● Active</b>
                      </td>

                      <td>₹1,002.60</td>

                      <td>23,546</td>

                      <td>32,134</td>

                      <td>
                        <strong>61</strong>
                      </td>

                      <td>
                        <strong>₹16.44</strong>
                      </td>
                    </tr>

                    {/* AD 03 */}

                    <tr>
                      <td>
                        <div className="ad-name">
                          <span></span>
                          Makeup Reels
                        </div>
                      </td>

                      <td>
                        <b className="active-status">● Active</b>
                      </td>

                      <td>₹997.65</td>

                      <td>21,561</td>

                      <td>29,697</td>

                      <td>
                        <strong>75</strong>
                      </td>

                      <td>
                        <strong>₹13.30</strong>
                      </td>
                    </tr>

                    {/* TOTAL */}

                    <tr className="total-row">
                      <td>
                        <strong>Total</strong>
                      </td>

                      <td>—</td>

                      <td>
                        <strong>₹3,011.27</strong>
                      </td>

                      <td>
                        <strong>51,857</strong>
                      </td>

                      <td>
                        <strong>89,042</strong>
                      </td>

                      <td>
                        <strong>177</strong>
                      </td>

                      <td>
                        <strong>₹17.01</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* =========================================
              CAMPAIGN INSIGHTS
          ========================================= */}

          <section className="campaign-insights">
            {/* INSIGHT 01 */}

            <div className="insight-card">
              <span>01</span>

              <h3>Best Performing Ad</h3>

              <strong>Makeup Reels</strong>

              <p>
                Generated 75 messaging conversations at an average cost of
                ₹13.30 per result.
              </p>
            </div>

            {/* INSIGHT 02 */}

            <div className="insight-card">
              <span>02</span>

              <h3>Total Results</h3>

              <strong>177 Conversations</strong>

              <p>
                The campaign generated 177 messaging conversations across three
                active advertisements.
              </p>
            </div>

            {/* INSIGHT 03 */}

            <div className="insight-card">
              <span>03</span>

              <h3>Total Reach</h3>

              <strong>51,857 People</strong>

              <p>
                The campaign reached more than 51K people with approximately 89K
                total impressions.
              </p>
            </div>
          </section>

          {/* =========================================
              STRATEGY
          ========================================= */}

          <section className="strategy-section">
            <p className="project-label">CAMPAIGN STRATEGY</p>

            <h2>
              Strategy & <span>Optimization</span>
            </h2>

            <p>
              The campaign focused on audience targeting, creative testing and
              messaging-based lead generation through Facebook and Instagram.
            </p>

            <p>
              Multiple Reel creatives were tested to identify which content
              generated the strongest response. Campaign performance was
              monitored and optimized based on reach, results and cost per
              result.
            </p>
          </section>

          {/* =========================================
              BACK TO WORK
          ========================================= */}

          <div className="bottom-back">
            <div className="bottom-back">
              <a href="/#project">← Explore More Projects</a>
            </div>
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

export default LeadGeneration;
