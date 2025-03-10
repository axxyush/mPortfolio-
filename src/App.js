import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { BrowserRouter as Router } from "react-router-dom";
import Stone from "./components/Stone";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Stone />
        <Footer1 />
        <Footer2 />
      </Router>
    </>
  );
}

export default App;
