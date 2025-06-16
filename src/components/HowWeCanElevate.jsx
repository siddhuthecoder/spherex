import React from 'react';
import { FaMobileAlt, FaGlobe, FaChartBar, FaPlug } from 'react-icons/fa';
import circle1 from "../assets/circle1.png";
import circle2 from "../assets/circle2.png";
import circle3 from "../assets/circle3.png";
import logo from "../assets/logo.png";
import './HowWeCanElevate.css'; // Animations only

const HowWeCanElevate = () => {
  const Data = [
    {
      title: 'Mobile App Design',
      description: 'Crafting sleek and user-friendly app interfaces.',
      icon: <FaMobileAlt className="text-3xl text-white" />,
    },
    {
      title: 'Website Design',
      description: 'Designing stunning, high-converting websites.',
      icon: <FaGlobe className="text-3xl text-white" />,
    },
    {
      title: 'Dynamic Dashboards',
      description: 'Creating interactive and data-driven dashboards.',
      icon: <FaChartBar className="text-3xl text-white" />,
    },
    {
      title: 'API Integration',
      description: 'Connecting your app with third-party services.',
      icon: <FaPlug className="text-3xl text-white" />,
    },
  ];

  return (
    <div className="bg-[#030014] min-h-screen flex items-center justify-center py-16 px-8 relative">
      {/* Central Circle with Animated Waves and Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-80 h-80">
          <img src={circle1} alt="Wave 1" className="integrations-waves wave-1" />
          <img src={circle2} alt="Wave 2" className="integrations-waves wave-2" />
          <img src={circle3} alt="Wave 3" className="integrations-waves wave-3" />
          <img src={logo} alt="Logo" className="absolute left-1/2 top-1/2 h-20 w-20 transform -translate-x-1/2 -translate-y-1/2 z-20" />

          {/* X-Axis Line */}
          <div className="absolute top-1/2 left-0 md:left-[-200px] w-full md:w-[800px] h-px bg-gray-600 opacity-50 z-10"></div>

          {/* Y-Axis Line */}
          <div className="absolute left-1/2 top-0 md:top-[-50px]  h-full md:h-[500px] w-px bg-gray-600 opacity-50 z-10"></div>
        </div>
      </div>

      {/* Grid Layout for Cards positioned around the circle */}
      <section className="grid grid-cols-2 grid-rows-2 h-[600px] w-full relative max-w-5xl gap-4">
        {/* Top Left */}
        <div className="flex flex-col items-center justify-center text-center p-6 col-start-1 row-start-1">
          <div className="relative z-10 flex flex-col items-center pointer-events-none">
            <div className="mb-4">{Data[0].icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-2 hidden md:block">{Data[0].title}</h3>
            <p className="text-base text-gray-300 hidden md:block">{Data[0].description}</p>
          </div>
        </div>

        {/* Top Right */}
        <div className="flex flex-col items-center justify-center text-center p-6 col-start-2 row-start-1">
          <div className="relative z-10 flex flex-col items-center pointer-events-none">
            <div className="mb-4">{Data[1].icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-2 hidden md:block">{Data[1].title}</h3>
            <p className="text-base text-gray-300 hidden md:block">{Data[1].description}</p>
          </div>
        </div>

        {/* Bottom Left */}
        <div className="flex flex-col items-center justify-center text-center p-6 col-start-1 row-start-2">
          <div className="relative z-10 flex flex-col items-center pointer-events-none">
            <div className="mb-4">{Data[2].icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-2 hidden md:block">{Data[2].title}</h3>
            <p className="text-base text-gray-300 hidden md:block">{Data[2].description}</p>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="flex flex-col items-center justify-center text-center p-6 col-start-2 row-start-2">
          <div className="relative z-10 flex flex-col items-center pointer-events-none">
            <div className="mb-4">{Data[3].icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-2 hidden md:block">{Data[3].title}</h3>
            <p className="text-base text-gray-300 hidden md:block">{Data[3].description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeCanElevate;
