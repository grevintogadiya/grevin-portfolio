import React, { useEffect, useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import LeadGeneration from "./Components/ProjectDetails/LeadGeneration";
import BrandGrowth from "./Components/ProjectDetails/BrandGrowth";

function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;

    if (
      hash &&
      hash !== "#/projects/lead-generation" &&
      hash !== "#/projects/brand-growth"
    ) {
      setTimeout(() => {
        const sectionId = hash.replace("#", "");
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  }, []);

  return (
    <>
      <Navbar />
      <About />
      <Services />
      <Skills />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  /* =========================================
     LEAD GENERATION PROJECT
  ========================================= */

  if (currentHash === "#/projects/lead-generation") {
    return <LeadGeneration />;
  }

  /* =========================================
     BRAND GROWTH PROJECT
  ========================================= */

  if (currentHash === "#/projects/brand-growth") {
    return <BrandGrowth />;
  }

  /* =========================================
     HOME
  ========================================= */

  return <HomePage />;
}

export default App;
