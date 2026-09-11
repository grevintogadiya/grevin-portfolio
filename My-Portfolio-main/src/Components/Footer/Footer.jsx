import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* =================================
            BRAND
        ================================= */}

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            Grevin<span>.</span>
          </a>

          <p>
            Helping businesses grow online through strategic digital marketing,
            performance campaigns, SEO and social media.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/grevin-togadiya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href="https://www.instagram.com/grevin_5300_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100081141601564"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://wa.me/+919016441913"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* =================================
            QUICK LINKS
        ================================= */}

        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#home">
            <i className="fas fa-arrow-right"></i>
            Home
          </a>

          <a href="#about">
            <i className="fas fa-arrow-right"></i>
            About
          </a>

          <a href="#services">
            <i className="fas fa-arrow-right"></i>
            Services
          </a>

          <a href="#skills">
            <i className="fas fa-arrow-right"></i>
            Skills
          </a>

          <a href="#project">
            <i className="fas fa-arrow-right"></i>
            Work
          </a>

          <a href="#experience">
            <i className="fas fa-arrow-right"></i>
            Experience
          </a>

          <a href="#contact">
            <i className="fas fa-arrow-right"></i>
            Contact
          </a>
        </div>

        {/* =================================
            SERVICES
        ================================= */}

        <div className="footer-column">
          <h3>Services</h3>

          <a href="#services">
            <i className="fas fa-arrow-right"></i>
            Meta Ads
          </a>

          <a href="#services">
            <i className="fas fa-arrow-right"></i>
            Google Ads
          </a>

          <a href="#services">
            <i className="fas fa-arrow-right"></i>
            SEO
          </a>

          <a href="#services">
            <i className="fas fa-arrow-right"></i>
            Performance Marketing
          </a>

          <a href="#services">
            <i className="fas fa-arrow-right"></i>
            Social Media Marketing
          </a>

          <a href="#services">
            <i className="fas fa-arrow-right"></i>
            Lead Generation
          </a>
        </div>

        {/* =================================
            CONTACT
        ================================= */}

        <div className="footer-column footer-contact">
          <h3>Let's Connect</h3>

          <p>
            <i className="fas fa-envelope"></i>

            <a href="mailto:grevintogadiya791@gmail.com">
              grevintogadiya791@gmail.com
            </a>
          </p>

          <p>
            <i className="fas fa-phone"></i>

            <a href="tel:+91 9016441913">+91 9016441913</a>
          </p>

          <p>
            <i className="fas fa-location-dot"></i>
            India
          </p>

          <p>
            <i className="fas fa-circle-check"></i>
            Available for freelance
          </p>
        </div>
      </div>

      {/* =================================
          FOOTER BOTTOM
      ================================= */}

      <div className="footer-bottom">
        <p>
          © {currentYear} Grevin Togadiya.
          <span> All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
