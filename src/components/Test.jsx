import React from "react";
import "./Test.css";

const generateDotPositions = (count, radius) => {
  const center = radius;
  const dotRadius = 5; // Half of 10px dot size
  const dots = [];

  for (let i = 0; i < count; i++) {
    const angle = (2 * Math.PI * i) / count;
    const x = center + radius * Math.cos(angle) - dotRadius;
    const y = center + radius * Math.sin(angle) - dotRadius;
    dots.push({ left: `${x}px`, top: `${y}px` });
  }

  return dots;
};

const DotCircle = ({ className, size }) => {
  const radius = size / 2;
  const dotPositions = generateDotPositions(8, radius - 5); // subtract 5 for padding

  return (
    <div className={`hero-black-hole-circle ${className}`} style={{ width: `${size}px`, height: `${size}px` }}>
      {dotPositions.map((pos, idx) => (
        <div key={idx} className="hero-black-hole-circle-dot" style={pos}></div>
      ))}
    </div>
  );
};

const Test = () => {
  return (
    <div className="w-full  overflow-hidden hidden  md:flex items-center justify-center text-white absolute top-16 mt-[150px] z-20">
  {/* 🟢 Only this wrapper should have the mask */}
  <div className="black-hole-circles mask-circle gradient-mask-outer">
    <DotCircle className="hero-black-hole-circle-0" size={650} />
    <DotCircle className="hero-black-hole-circle-1" size={500} />
    <DotCircle className="hero-black-hole-circle-2" size={350} />
  </div>
</div>

  );
};


export default Test;
