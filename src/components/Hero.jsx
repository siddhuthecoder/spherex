import React from "react";
import StarsCanvas from "./StarCanvas";

const Hero = () => {
  const generateRandomDivs = (count = 99) => {
    return Array.from({ length: count }, (_, i) => {
      const duration = `${(Math.random() * 4 + 10).toFixed(3)}s`; // 10s–14s
      const delay = `${(Math.random() * 5).toFixed(3)}s`; // 0s–5s
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;
      const translateX = `${(Math.random() * 600 - 300).toFixed(2)}px`;
      const translateY = `${(Math.random() * 600 - 300).toFixed(2)}px`;

      return (
        <div
          key={i}
          style={{
            animationDuration: duration,
            animationDelay: delay,
            top,
            left,
            "--transform": `translate(${translateX}, ${translateY})`,
            position: "absolute",
          }}
        ></div>
      );
    });
  };

  return (
    <div className="hero relative w-full min-h-screen font-jost ">
      {/* Centered Heading */}
      <div className="hero-content absolute md:top-[140px] w-full flex justify-center items-center flex-col text-center px-4 z-10 mt-[100px] md:mt-0">
        <h2 className="text-[44px] md:text-5xl lg:text-[70px]  font-medium leading-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent block font-jost">

          Think better with SphereX
        </h2>
        <p className="text-base md:text-lg text-[#efedfdb3] mt-2">
          Never miss a note, idea or connection.
        </p>
      </div>
      {/* Video Background with Mask */}

      <div className="hero-black-hole">
        <div className="hero-video w-full h-full absolute bottom-0 inset-0 z-0 mt-[120px] md:mt-[180px]">
          <video
            src="blackhole.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover "
            style={{
              maskImage:
                "radial-gradient(50% 50% at 50% 50%, #fff 80.94%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(50% 50% at 50% 50%, #fff 80.94%, transparent 100%)",
              maskSize: "cover",
              WebkitMaskSize: "cover",
              position: "absolute",
            }}
          ></video>
        </div>
        <div className="hero-black-hole-circles">
          <div className="hero-black-hole-circle hero-black-hole-circle-0">
            <div className="hero-black-hole-circle-dot"></div>
            <div className="hero-black-hole-circle-dot"></div>
            <div className="hero-black-hole-circle-dot"></div>
            <div className="hero-black-hole-circle-dot"></div>
            <div className="hero-black-hole-circle-dot"></div>
            <div className="hero-black-hole-circle-dot"></div>
            <div className="hero-black-hole-circle-dot"></div>
          </div>
        </div>
     

        <StarsCanvas/>
      </div>
    </div>
  );
};

export default Hero;




