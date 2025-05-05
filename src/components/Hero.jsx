import React from "react";
import StarsCanvas from "./StarCanvas";
import Background from "three/src/renderers/common/Background.js";
const Hero = () => {
  return (
    <div className="relative w-full min-h-screen font-josefin ">
      {/* Centered Heading */}
      <div className="absolute md:top-[140px] w-full flex justify-center items-center flex-col text-center px-4 z-10 mt-[100px] md:mt-0">
        <h2 className="text-[43px] md:text-5xl lg:text-6xl  text-white leading-tight">
          Think better with SphereX
        </h2>
        <p className="text-base md:text-lg text-[#efedfdb3] mt-2">
          Never miss a note, idea or connection.
        </p>
      </div>
      {/* Video Background with Mask */}
      
      <div className="w-full h-full absolute bottom-0 inset-0 z-0 mt-[120px] md:mt-[180px]">
        
        <div className="flex justify-center">
        <img src="circles.png" className="md:h-[700px] h-[300px] w-[300px] md:w-[700px] absolute bottom-1/3 md:bottom-2" />
        </div>

        <video
          src="blackhole.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            maskImage:
              "radial-gradient(50% 50% at 50% 50%, #fff 60.94%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(50% 50% at 50% 50%, #fff 60.94%, transparent 100%)",
            maskSize: "cover",
            WebkitMaskSize: "cover",
            position: "absolute",
          }}
        ></video>
      </div>
      <StarsCanvas/>

    
    </div>
  );
};

export default Hero;