import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faTimes,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

import Typed from "typed.js";

import "./Navbar.css";

function Navbar() {
  /* =====================================================
     STATES
  ===================================================== */

  const [menuOpen, setMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("#home");

  /* =====================================================
     AOS INITIALIZATION
  ===================================================== */

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 80,
    });
  }, []);

  /* =====================================================
     TYPED.JS
  ===================================================== */

  useEffect(() => {
    const typed = new Typed(".typing-text", {
      strings: [
        "Digital Marketing",
        "Meta Ads",
        "Performance Marketing",
        "Social Media Marketing",
        "SEO",
        "Lead Generation",
        "Content Strategy",
        "Google Ads",
      ],

      loop: true,

      typeSpeed: 55,

      backSpeed: 30,

      backDelay: 1000,

      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  /* =====================================================
     SCROLL HANDLER
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      /* Navbar */

      if (scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      /* Scroll top button */

      /* Active section */

      const sections = document.querySelectorAll("section");

      let currentSection = "#home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;

        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     MOBILE MENU
  ===================================================== */

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =====================================================
     SCROLL TOP
  ===================================================== */

  /* =====================================================
     JSX
  ===================================================== */

  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        {/* LOGO */}

        <a href="#home" className="logo" onClick={closeMenu}>
          Grevin
        </a>

        {/* MOBILE MENU ICON */}

        <FontAwesomeIcon
          id="menu"
          icon={menuOpen ? faTimes : faBars}
          className="menu-icon"
          onClick={toggleMenu}
        />

        {/* NAVIGATION */}

        <nav className={`navbar ${menuOpen ? "nav-toggle" : ""}`}>
          <ul>
            {/* HOME */}

            <li>
              <a
                href="#home"
                className={activeSection === "#home" ? "active" : ""}
                onClick={closeMenu}
              >
                Home
              </a>
            </li>

            {/* ABOUT */}

            <li>
              <a
                href="#about"
                className={activeSection === "#about" ? "active" : ""}
                onClick={closeMenu}
              >
                About
              </a>
            </li>

            {/* SERVICES */}

            <li>
              <a
                href="#services"
                className={activeSection === "#services" ? "active" : ""}
                onClick={closeMenu}
              >
                Services
              </a>
            </li>

            {/* SKILLS */}
            <li>
              <a
                href="#skills"
                className={activeSection === "#skills" ? "active" : ""}
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>

            {/* WORK */}

            <li>
              <a
                href="#project"
                className={activeSection === "#project" ? "active" : ""}
                onClick={closeMenu}
              >
                Work
              </a>
            </li>

            {/* EXPERIENCE */}

            <li>
              <a
                href="#experience"
                className={activeSection === "#experience" ? "active" : ""}
                onClick={closeMenu}
              >
                Experience
              </a>
            </li>

            {/* CONTACT */}

            <li>
              <a
                href="#contact"
                className={activeSection === "#contact" ? "active" : ""}
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* =================================================
          HOME / HERO SECTION
      ================================================= */}

      <section className="home" id="home">
        <div className="content">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="text-content" data-aos="fade-right">
            {/* SMALL TITLE */}

            <div className="intro-text">DIGITAL MARKETER</div>

            {/* MAIN TITLE */}

            <h2>
              Hello,
              <br />
              I'm Grevin <span>Togadiya</span>
            </h2>

            {/* TYPED TEXT */}

            <p className="role-text">
              I am into <span className="typing-text"></span>
            </p>

            {/* DESCRIPTION */}

            <p className="hero-description">
              I help businesses grow online through strategic digital marketing,
              performance campaigns, SEO and social media marketing.
            </p>

            {/* ABOUT BUTTON */}

            <a href="#about" className="btn">
              <span>About Me</span>

              <FontAwesomeIcon id="button" icon={faArrowDown} />
            </a>

            {/* =================================================
                SOCIAL ICONS
            ================================================= */}

            <div className="socials">
              <ul className="social-icons">
                {/* LINKEDIN */}

                <li>
                  <a
                    href="https://www.linkedin.com/in/grevin-togadiya"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>

                {/* INSTAGRAM */}

                <li>
                  <a
                    href="https://www.instagram.com/grevin_5300_/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>

                {/* FACEBOOK */}

                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100081141601564"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>

                {/* WHATSAPP */}

                <li>
                  <a
                    href="https://wa.me/+919016441913"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="whatsapp"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </li>

                {/* X */}
              </ul>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE - SIMPLE IMAGE ONLY
          ================================================= */}

          <div className="profile-area" data-aos="fade-left">
            <img
              src="/images/grevin.png"
              alt="Grevin Togadiya - Digital Marketer"
              className="profile-image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
