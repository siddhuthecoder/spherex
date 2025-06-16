

import React from "react";
import { InfiniteMovingCards } from "./testimonials";
import AnimatedText from "../utils/cn";
import person from "../assets/person.png"
const Testimonals = () => {
  const testimonialItems = [
    {
      name: "Demetria Giles",
      title: "@drosewritings",
     description: "Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background.",
      person:person,
    },
    {
      name: "Demetria Giles",
      title: "@drosewritings",
     description: "Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background.",
      person:person,
    },
    {
      name: "Demetria Giles",
      title: "@drosewritings",
     description: "Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background.",
      person:person,
    },
    {
      name: "Demetria Giles",
      title: "@drosewritings",
     description: "Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background.",
      person:person,
    },
    {
      name: "Demetria Giles",
      title: "@drosewritings",
     description: "Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background.",
      person:person,
    },
    {
      name: "Demetria Giles",
      title: "@drosewritings",
     description: "Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background.",
      person:person,
    },
    {
      name: "Demetria Giles",
      title: "@drosewritings",
     description: "Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background.",
      person:person,
    },
    {
      name: "Demetria Giles",
      title: "@drosewritings",
     description: "Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background.",
      person:person,
    },
  ];

  return (
    <div className="w-full md:w-[90%] mx-auto mt-[5px] md:mt-18 pt-4 md:pt-10 relative " id="testimonials" 
  >
    <div className="heart-image flex justify-center overflow-hidden">
      <img src="heart.png" alt="heart" className="md:h-[557px] absolute top-[72x] md:w-[602px] overflow-hidden md:transform md:translate-1/2" />
    </div>
      <h1 className='text-center text-[56px]  font-medium  bg-gradient-to-b mt-[50px] from-white to-white/70 bg-clip-text text-transparent block font-jost'>
      Loved by thinkers
      </h1>
      <p className="text-[#efedfdb3] text-center">Here's what people are saying about us

</p>
      &nbsp;
      <p className="text-gray-400 mt-1 max-w-[1024px] px-2 text-lg sm:text-3xl">
       
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
