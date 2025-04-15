import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Centered Heading */}
      <div className="absolute md:top-[80px] w-full flex justify-center items-center flex-col text-center px-4 z-10">
        <h2 className="text-[43px] md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
          Think better with SphereX
        </h2>
        <p className="text-base md:text-lg text-[#efedfdb3] mt-2">
          Never miss a note, idea or connection.
        </p>
      </div>

      {/* Video Background with Mask */}
      <div className="w-full h-full absolute inset-0 z-0 mt-[50px] md:mt-0">
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
    </div>
  );
};

export default Hero;
