

import React from "react";
import { InfiniteMovingCards } from "./testimonials";
import AnimatedText from "../utils/cn";
import aboutteam2 from "../assets/aboutteam2.jpeg";
const Testimonals = () => {
  const testimonialItems = [
    {
      quote: "This is the best service I've ever used. Highly recommend!",
      name: "John Doe",
      title: "CEO, Company A",
      person:aboutteam2,
    },
    {
      quote: "Amazing support and features. Worth every penny.",
      name: "Jane Smith",
      title: "CTO, Company B",
      person:aboutteam2,
    },
    {
      quote: "A game-changer in the industry. Absolutely love it!",
      name: "Emily Johnson",
      title: "Founder, Company C",
      person:aboutteam2,
    },
  ];

  return (
    <div className="w-full md:w-[90%] mx-auto mt-[5px] md:mt-18 pt-4 md:pt-10" id="testimonials">
      <h1 className="text-6xl ps-0 max-md:text-3xl mb-2 text-white font-medium w-full max-w-[420px]">
        <AnimatedText text="Testimonials" />
      </h1>
      &nbsp;
      <p className="text-gray-400 mt-1 max-w-[1024px] px-2 text-lg sm:text-3xl">
        Our team provides tailored services with precision and innovation,
        ensuring impactful results that meet your unique needs.
      </p>
      &nbsp;
      <InfiniteMovingCards
        items={testimonialItems}
        direction="left" // or "right"
        speed="normal" // "fast", "normal", or "slow"
        pauseOnHover={true} // Set to false if you don't want the animation to pause on hover
      />
      <InfiniteMovingCards
        items={testimonialItems}
        direction="right" // or "right"
        speed="normal" // "fast", "normal", or "slow"
        pauseOnHover={true} // Set to false if you don't want the animation to pause on hover
      />
    </div>
  );
};

export default Testimonals;
