import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Features from "../components/Features";
import ReflectFeatures from "../components/ReflectFeatures";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "./About";
import Pricing from "../components/Pricing";
import ContactUs from "../components/ContactUs";
import Testimonals from "../accernity/Testimonals";
import Otherapps from "../components/Otherapps"
const Home = () => {
  const location = useLocation();

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  useEffect(() => {
    const hash = location.hash;

    setTimeout(() => {
      if (hash === "#home")
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
      else if (hash === "#about")
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      else if (hash === "#projects")
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
      else if (hash === "#services")
        servicesRef.current?.scrollIntoView({ behavior: "smooth" });
      else if (hash === "#contact")
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // slight delay ensures the DOM is loaded
  }, [location]);

  return (
    <div className="bg-[#020012] min-h-screen w-full text-white  scroll-smooth font-jost">
      <Navbar />
      <div ref={homeRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={servicesRef}>
        <Features />
      </div>
      <div ref={projectsRef}>
        <ReflectFeatures />
      </div>
      <div>
        <Otherapps />
      </div>
      <div>
        <Pricing />
      </div>
      <div>
        <Testimonals/>
      </div>
      <div ref={contactRef} className="py-20 text-center">
       
        <ContactUs/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
