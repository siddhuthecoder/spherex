import React from "react";

const Academy = () => {
  return (
    <div className="relative h-[700px] md:min-h-screen flex flex-col  items-center justify-between md:justify-center overflow-hidden font-jost mt-16 md:mt-0">
      {/* Grid Overlay */}
      <div className=" z-10 text-center absolute md:mt-0">
        <button className="border border-purple-600 text-white rounded-full h-[36px] w-[125px] bg-gradient-to-b from-purple-400/30 to-purple-400/10 shadow-inner shadow-purple-500/30 hover:shadow-purple-500/60 transition duration-300 mb-6">
          <span className="relative z-10">Academy</span>
          <span className="absolute inset-0 rounded-full bg-gradient-to-b from-purple-700/10 to-purple-800/30 blur-md opacity-70 animate-pulse"></span>
        </button>
        <h1 className="text-[56px] font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent leading-[60px] tracking-tight">
          Learn how to take great <br /> notes at our academy
        </h1>
        <p className="text-[#efedfdb3] text-lg mt-4 leading-6">
          Master the principles of note-taking in <br /> Reflect's free online Academy.
        </p>
        <div className="flex justify-center mt-6">
          <button className="backdrop-blur-lg saturate-100 rounded-md text-[#f4f0ff] border border-[#f4f0ff]/30 px-4 py-2 bg-white/5 hover:bg-white/10 transition">
            Take the course
          </button>
        </div>
      </div>
      {/* Gradient Glow */}
      <div className="mx-2 lg:mx-0">     <img src="academy.png" alt="" className=" md:scale-[0.6] z-0  mt-[400px] md:mt-0" />
      </div>
      {/* Main Content */}
     

      {/* Footer Controls */}
      {/* <div className=" flex justify-center space-x-4 py-4">
        <span className="text-white/70">Press "Controls" to play:</span>

        <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-white">←</button>
        <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-white">→</button>
        <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-white">↓</button>

        <button className="w-16 h-8 bg-gray-700 rounded flex items-center justify-center text-white">Rotate</button>
        <span className="text-white/70">Fall Faster:</span>
      </div> */}
      </div>
   
    
  );
};

export default Academy;