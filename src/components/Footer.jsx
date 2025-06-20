import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-purple-200 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 flex-wrap">
        {/* Brand Section */}
        <div className="md:flex-1 min-w-[250px]">
          <h2 className="text-2xl font-bold text-white mb-4">SphereX</h2>
          <p className="mb-4 text-md">
            We build high-performing web and mobile applications with stunning design and powerful backend tech.
          </p>
          <div className="flex gap-4 mb-4 text-xl">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
          <div className="text-lg space-y-2">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt /> Mangaluru, India
            </div>
            <div className="flex items-center gap-2">
              <FaPhone /> +91 9480 987 928
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope /> hello@pixelsandgrids.com
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="md:flex-1 min-w-[200px]">
          <h3 className="font-semibold text-white mb-3">SERVICES</h3>
          <ul className="space-y-1 text-lg">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>UI/UX Design</li>
            <li>API Integration</li>
            <li>SEO Optimization</li>
            <li>E-commerce</li>
          </ul>
        </div>

        {/* Industries */}
        <div className="md:flex-1 min-w-[200px]">
          <h3 className="font-semibold text-white mb-3">INDUSTRIES</h3>
          <ul className="space-y-1 text-lg">
            <li>Startups</li>
            <li>E-commerce</li>
            <li>Education</li>
            <li>Fintech</li>
            <li>Healthcare</li>
          </ul>
        </div>

        {/* Resources & Company */}
        <div className="md:flex-1 min-w-[200px]">
          <h3 className="font-semibold text-white mb-3">RESOURCES</h3>
          <ul className="space-y-1 text-lg mb-6">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Portfolio</li>
          </ul>
          <h3 className="font-semibold text-white mb-3">COMPANY</h3>
          <ul className="space-y-1 text-lg">
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
