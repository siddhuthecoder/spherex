import React from "react";
import StarsCanvas from "./StarCanvas";
import { BsStars } from "react-icons/bs";
import Test from "./Test";
const Hero = () => {
  // const generateRandomDivs = (count = 99) => {
  //   return Array.from({ length: count }, (_, i) => {
  //     const duration = `${(Math.random() * 4 + 10).toFixed(3)}s`; // 10s–14s
  //     const delay = `${(Math.random() * 5).toFixed(3)}s`; // 0s–5s
  //     const top = `${Math.random() * 100}%`;
  //     const left = `${Math.random() * 100}%`;
  //     const translateX = `${(Math.random() * 600 - 300).toFixed(2)}px`;
  //     const translateY = `${(Math.random() * 600 - 300).toFixed(2)}px`;

  //     return (
  //       <div
  //         key={i}
  //         style={{
  //           animationDuration: duration,
  //           animationDelay: delay,
  //           top,
  //           left,
  //           "--transform": `translate(${translateX}, ${translateY})`,
  //           position: "absolute",
  //         }}
  //       ></div>
  //     );
  //   });
  // };

  return (
    <div className="hero relative w-full md:h-screen  font-jost overflow-hidden">
      {/* Centered Heading */}
      <div className="hero-content overflow-hidden w-full py-[100px]  md:py-[150px] flex justify-center items-center flex-col text-center px-4 z-40 md:mt-[50px]">
        <div className="hero-badge   flex gap-2">
         <span className="hero-badge-text"> <BsStars/></span>   
          <div class="hero-badge-text">Take notes using AI</div>
        </div>

        <h2 className="text-[44px] hidden md:block z-40 md:text-5xl lg:text-[70px]  font-semibold leading-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent  font-jost">
          Think better with SphereX
        </h2>
         <h2 className="text-[44px] md:hidden :block z-40 md:text-5xl lg:text-[70px]  font-semibold leading-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent  font-jost">
          Think better<br/>with SphereX
        </h2>
        <p className="font-normal md:text-lg z-40 text-[#efedfdb3] mt-2 mb-5">
          Never miss a note, idea or connection.
        </p>
      </div>
      {/* Video Background with Mask */}
      <Test/>
      <div className="hero-black-hole">
  
        <div className="hero-video absolute bottom-[-310px]  w-full md:h-[600px] h-[600px] mt-[-150px] md:mt-[-120px]">
         
          <video
            src="blackhole.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover z-0"
            style={{
              maskImage:
                "radial-gradient(50% 50% at 50% 50%, #fff 80.94%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(50% 50% at 50% 50%, #fff 80.94%, transparent 100%)",
              maskSize: "cover",
              WebkitMaskSize: "fit",
              position: "absolute",
            }}
          ></video>

        </div>
        

        <StarsCanvas />
      </div>
    </div>
  );
};

export default Hero;
