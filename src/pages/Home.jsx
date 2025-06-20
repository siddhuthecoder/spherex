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
import Academy from "../components/Academy";
import Otherapps from "../components/Otherapps";
import NeverLoose from "../components/NeverLoose";
import FAQ from "../components/FAQ";
import Test from "../components/Test";
import HowWeWork from "../components/HowWeWork";
import HowWeCanElevate from "../components/HowWeCanElevate";
import Approach from "../components/Approach/Approach"
import FlexibleDevelopment from "../components/FlexibleDevelopment";
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
    <div className="bg-[#030014] min-h-screen w-full text-white  scroll-smooth font-jost">
      <Navbar />
      <div ref={homeRef}>
        <Hero />
      </div>
      {/* <div ref={aboutRef}>
        <About />
      </div> */}
     
      {/*<div ref={servicesRef}><Features /></div>*/}
     <div><Approach/></div>
     {/* <div><HowWeCanElevate/></div> */}
     <div><HowWeWork/></div>
     <div><FlexibleDevelopment/></div>
      {/* <div><NeverLoose/></div> */}
      {/* <div ref={projectsRef}>
        <ReflectFeatures />
      </div> */}
      {/* <div>
        <Otherapps />
      </div> */}
      <div>
        <Pricing />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <Testimonals/>
      </div>
      {/* <div>
        <Academy/>
      </div> */}
      {/* <div ref={contactRef} className="py-20 text-center">
       
        <ContactUs/>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
