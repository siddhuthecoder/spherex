import React from "react";
import "../App.css";

const ReflectAnimation = () => {
  return (
    <div className="radar-container relative w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="/circles.png"
        alt="Radar"
        className="radar-circle absolute h-[600px] w-[600px] object-contain z-0 pointer-events-none rounded-full scale-[1.4]"
      />

      {/* Radar sector wipe */}
      <div className="radar-sweep absolute z-10 rounded-full" >
      <div class="sweep-sector"></div>
        </div>
      <div className="z-30">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full"
        />
      </div>
    </div>
   
  );
};

export default ReflectAnimation;
