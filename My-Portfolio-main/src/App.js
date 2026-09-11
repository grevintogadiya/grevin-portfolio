import "./App.css";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Work from "./Components/Work/Work";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
// import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Services />
      <Work />
      {/* <Project /> */}
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
