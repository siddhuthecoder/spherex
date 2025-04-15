



// components/Features.jsx
import React from 'react';
import { FaCloudUploadAlt, FaNetworkWired, FaMobileAlt, FaLock, FaCalendarAlt, FaPenNib, FaBolt, FaSearch } from 'react-icons/fa';

const features = [
  { icon: <FaCloudUploadAlt size={24} />, title: "Built for speed", desc: "Instantly sync your notes across devices" },
  { icon: <FaNetworkWired size={24} />, title: "Networked notes", desc: "Form a graph of ideas with backlinked notes" },
  { icon: <FaMobileAlt size={24} />, title: "iOS app", desc: "Capture ideas on the go, online or offline" },
  { icon: <FaLock size={24} />, title: "End-to-end encryption", desc: "Only you can access your notes" },
  { icon: <FaCalendarAlt size={24} />, title: "Calendar integration", desc: "Keep track of meetings and agendas" },
  { icon: <FaPenNib size={24} />, title: "Publishing", desc: "Share anything you write with one click" },
  { icon: <FaBolt size={24} />, title: "Instant capture", desc: "Save snippets from your browser and Kindle" },
  { icon: <FaSearch size={24} />, title: "Frictionless search", desc: "Easily recall and index past notes and ideas" },
];

export default function Features() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  px-[100px] py-[50px]">
      {features.map((feature, index) => (
        <div
          key={index}
          className=" border-l-[1px] border-l-[#ffffff3d]  p-[24px_32px_36px]  backdrop-blur-sm shadow-md hover:shadow-lg hover:border-purple-600 transition-all duration-300
          before:bg-[#ffffff3d] before:block before:h-[16px] before:left-[-2px] before:absolute before:w-[3px] before:top-[80px] before:content-[''] 
          "
        >

          <div className="mb-4 text-purple-400">{feature.icon}</div>
          <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
          <p className="text-lg text-gray-300">{feature.desc}</p>
          <div class="tapered-line"></div>

        </div>
      ))}
    </section>
  );
}





