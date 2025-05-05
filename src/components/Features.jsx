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
    <div className='px-[10px] md:px-[100px] py-[50px] relative  '>
      <h3 className='text-center text-4xl font-bold my-[50px]'>Our Services</h3>
  <div className="relative group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]
  after:content-[''] after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:pointer-events-none 
  after:duration-500 after:ease-[cubic-bezier(0.3,0.8,0,1)] 
  after:bg-gradient-to-t after:from-[rgba(255,255,255,0)] after:to-[rgba(124,95,95,0.2)]

  before:content-[''] before:absolute before:bottom-1/2 before:left-0 before:w-full before:h-[1px] before:pointer-events-none 
  before:duration-500 before:ease-[cubic-bezier(0.3,0.8,0,1)] 
  before:bg-gradient-to-r before:from-[rgba(255,255,255,0)] before:via-[rgba(255,255,255,0.2)] before:to-[rgba(255,255,255,0)]"
>

  {features.slice(0,4).map((feature, index) => (
    <div
    key={index}
    className="relative animate-fade-in border-l border-l-[#ffffff3d] p-[24px_32px_36px] backdrop-blur-sm transition-all duration-300  cursor-pointer 
      hover:shadow-xl hover:bg-gradient-to-b from-[#030115] via-[#100D20] to-[#2C2A3D]
      before:content-[''] before:absolute before:w-[3px] before:h-[16px] before:left-[-2px] before:top-[80px] before:bg-[#ffffff3d]"
  >
      <div className="mb-4 text-purple-400">{feature.icon}</div>
      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
      <p className="text-lg text-gray-300">{feature.desc}</p>
    </div>
  ))}
  {features.slice(4,8).map((feature, index) => (
    <div
    key={index}
    className="relative animate-fade-in border-l border-l-[#ffffff3d] p-[24px_32px_36px] backdrop-blur-sm transition-all duration-300  cursor-pointer 
      hover:shadow-xl hover:bg-gradient-to-t from-[#030115] via-[#100D20] to-[#2C2A3D]
      before:content-[''] before:absolute before:w-[3px] before:h-[16px] before:left-[-2px] before:top-[80px] before:bg-[#ffffff3d]"
  >
      <div className="mb-4 text-purple-400">{feature.icon}</div>
      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
      <p className="text-lg text-gray-300">{feature.desc}</p>
    </div>
  ))}
</div>

   
 
  
  


    </div>
  );
}

  




