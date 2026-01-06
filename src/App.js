import React, { useEffect } from "react";

/* CSS */
import "./assets/css/styles.css";

/* Components */
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* ScrollReveal */
import ScrollReveal from "scrollreveal";

/* AWS Amplify */
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

/* 🔥 MUST: Configure Amplify ONLY ONCE */
Amplify.configure(awsExports);

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
      mobile: true,
      reset: false,
    });

    sr.reveal(".home-content, .heading", { origin: "top" });
    sr.reveal(
      ".home-img, .services-container, .portfolio-box, .certificate-box, .contact form",
      { origin: "bottom" }
    );
    sr.reveal(".home-content h1, .about-img", { origin: "left" });
    sr.reveal(".home-content p, .about-content", { origin: "right" });

    /* Mobile viewport fix */
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Education />
      <Services />
      <Portfolio />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
