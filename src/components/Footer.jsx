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

const Footer=()=> {
  return (
    <footer className="bg-black text-purple-200 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
        {/* Logo and Intro */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">SphereX</h2>
          <p className="mb-4 text-md">
            SphereX is a full-service digital agency specializing in web and mobile development, and cutting-edge technology solutions.
          </p>
          <div className="flex gap-4 mb-4 text-xl">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaEnvelope /></a>
            <a href="#"><FaPhone /></a>
          </div>
          <p className="text-lg mb-2">Our mission is to help businesses build exceptional web and mobile applications with expert UI/UX design and development.</p>
          <div className="text-lg space-y-1 mt-4">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt /> Mangaluru
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
        <div>
          <h3 className="font-semibold text-white mb-3">SERVICES</h3>
          <ul className="space-y-1 text-lg">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>API Integrations</li>
            <li>Custom Dashboards</li>
            <li>E-commerce Solutions</li>
            <li>Cloud Hosting</li>
            <li>No-code Development</li>
            <li>Consulting</li>
            <li>SEO & Performance Optimization</li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="font-semibold text-white mb-3">INDUSTRIES</h3>
          <ul className="space-y-1 text-lg">
            <li>Startups</li>
            <li>SaaS Companies</li>
            <li>E-commerce</li>
            <li>Real Estate</li>
            <li>Healthcare</li>
            <li>Education</li>
            <li>Fintech</li>
            <li>Marketing Agencies</li>
            <li>Enterprise Solutions</li>
            <li>Government & NGOs</li>
          </ul>
        </div>

        {/* Resources & Company */}
        <div>
          <h3 className="font-semibold text-white mb-3">RESOURCES</h3>
          <ul className="space-y-1 text-lg mb-6">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Portfolio</li>
            <li>Community</li>
          </ul>
          <h3 className="font-semibold text-white mb-3">COMPANY</h3>
          <ul className="space-y-1 text-lg">
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer