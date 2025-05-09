import React from 'react';
import { FaRegDotCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="relative w-full md:h-[180vh]  mx-auto p-8 rounded-xl text-white md:mt-0 mt-[500px] md:overflow-hidden flex flex-col-reverse md:flex-col items-center  font-jost"
      >
        <img src="PRICING.png" alt="" className='md:scale-[0.6]  w-full ' />
        <div className='absolute bottom-[260px] md:top-[70px] '>
      <div className="text-center mb-8">
      <div class="px-2 py-1 rounded-full text-md font-medium border border-violet-400  hover:text-white transition-all duration-300 shadow-[inset_0_0_15px_rgba(168,85,247,0.7)] w-[120px] mx-auto">
                Get Access
            </div>
                    <p className="text-gray-300 text-2xl md:text-5xl font-semibold mt-[20px] md:leading-normal">We like keeping things simple</p>
        <p className="text-gray-300 text-2xl md:text-5xl font-semibold ">One plan one price.</p>
      </div>

      <div className=" flex gap-[20px] items-center justify-center my-[50px]">
      <p
  className="text-3xl md:text-7xl font-bold mb-1"
  style={{
    backgroundImage: `linear-gradient(90.01deg, #e59cff 0.01%, #ba9cff 50.01%, #9cb2ff 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.28) 100%)`,
    backgroundBlendMode: 'screen, normal',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginRight: '16px',
  }}
>
  $10
</p>
        <p className="text-gray-400 text-sm">/month <br />(billed annually)</p>
      </div>

      <div className="flex flex-col px-4 md:flex-row md:justify-around text-lg">
        <div className='flex flex-col gap-2 items-center' >
  <div className="flex items-center self-start px-4" >
    <span className="mr-3 text-lg"><FaRegDotCircle />
</span>
    <p className="">Networked note-taking</p>
  </div>
  <div className="flex items-center self-start px-4">
    <span className="mr-3 text-lg"><FaRegDotCircle />
</span>
    <p className="">End to end encryption</p>
  </div>
  <div className="flex items-center px-3 mr-[-3px]">
    <span className="mr-3 text-lg"><FaRegDotCircle />
</span>
    <p className="">Chrome and Safari web clipper</p>
  </div>
  </div>
  <div className='flex flex-col gap-2 items-center mt-2 md:mt-0'>
  <div className="flex items-center self-start px-[16px] ">
    <span className="mr-3 text-lg"><FaRegDotCircle />
</span>
    <p className="">Kindle highlights sync</p>
  </div>
  <div className="flex items-center self-start px-[16px]">
    <span className="mr-3 text-lg"><FaRegDotCircle />
</span>
    <p className="">Kindle offline sync</p>
  </div>
  <div className="flex items-center self-start px-[16px]">
    <span className="mr-3 text-lg"><FaRegDotCircle />
</span>
    <p className="">iOS app</p>
  </div>
  </div>
</div>
<div className='flex justify-center mt-[30px]'>
<button class="w-[170px] px-2 py-1 rounded-full text-md font-medium border border-violet-400  hover:text-white transition-all duration-300 shadow-[inset_0_0_15px_rgba(168,85,247,0.7)]  mx-auto">
                Start Your Free Trail
            </button>
      </div>
      </div>
    </div>
  );
};

export default Pricing;