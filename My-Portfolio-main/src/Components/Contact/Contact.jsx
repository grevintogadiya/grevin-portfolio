import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 80,
    });
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* =================================
            HEADER
        ================================= */}

        <div className="contact-header" data-aos="fade-up">
          <p className="contact-label">GET IN TOUCH</p>

          <h2>
            Let's Grow Your <span>Business</span>
          </h2>

          <p>
            Have a project, campaign or business idea in mind? Let's discuss how
            digital marketing can help you reach more customers and grow your
            business.
          </p>
        </div>

        {/* =================================
            CONTACT CONTENT
        ================================= */}

        <div className="contact-content">
          {/* LEFT SIDE */}

          <div className="contact-info" data-aos="fade-right">
            <div className="contact-info-top">
              <span className="contact-number">01</span>

              <div className="contact-icon">✉</div>
            </div>

            <h3>
              Let's Start a
              <br />
              Conversation
            </h3>

            <p>
              Whether you need help with Meta Ads, Google Ads, SEO, social media
              or a complete digital marketing strategy, I'm ready to help.
            </p>

            {/* Contact Details */}

            <div className="contact-details">
              <a
                href="mailto:grevintogadiya791@gmail.com"
                className="contact-detail"
              >
                <span className="detail-icon">✉</span>

                <div>
                  <small>Email</small>
                  <strong>grevintogadiya791@gmail.com</strong>
                </div>
              </a>

              <a href="tel:+919016441913" className="contact-detail">
                <span className="detail-icon">☎</span>

                <div>
                  <small>Phone</small>
                  <strong>+91 90164 41913</strong>
                </div>
              </a>

              <div className="contact-detail">
                <span className="detail-icon">⌖</span>

                <div>
                  <small>Location</small>
                  <strong>India</strong>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}

          <div className="contact-form-wrapper" data-aos="fade-left">
            <div className="form-heading">
              <h3>Send Me a Message</h3>

              <p>
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
            </div>

            <form
              action="https://formspree.io/f/xzzdnjra"
              method="POST"
              className="contact-form"
            >
              {/* Name */}

              <div className="form-field">
                <label htmlFor="name">Your Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}

              <div className="form-field">
                <label htmlFor="email">Email Address</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone */}

              <div className="form-field">
                <label htmlFor="phone">Phone Number</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}

              <div className="form-field">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              {/* Submit */}

              <button type="submit" className="contact-submit">
                Send Message
                <span>↗</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
