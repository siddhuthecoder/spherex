import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="relative w-full md:h-[180vh]  mx-auto  rounded-xl  text-white md:mt-0 mt-[550px] md:overflow-hidden flex flex-col-reverse md:flex-col items-center  font-jost">
      <div className="max-w-100vw overflow-hidden">
              <img src="PRICING.png" alt="" className="md:scale-[0.6] scale-[1.4] w-full " />

      </div>
      <div className="absolute bottom-[260px] md:top-[70px]  ">
        <div className="text-center ">
          <div className="px-2 py-1 rounded-full text-md font-medium border border-violet-400  hover:text-white transition-all duration-300 shadow-[inset_0_0_15px_rgba(168,85,247,0.7)] w-[120px] mx-auto">
            Get Access
          </div>
          <p className="text-gray-300 text-2xl m-0 md:text-5xl font-semibold   ">
            We like keeping things simple
          </p>
          <p className="text-gray-300 text-2xl m-0 md:text-5xl font-semibold ">
            One plan one price.
          </p>
        </div>

        <div className=" flex  justify-center items-center ">
          <p
            className="text-3xl md:text-7xl font-bold  "
           
          >
            $10
          </p>
          <p className="text-gray-400 text-sm ">
            /month <br />
            (billed annually)
          </p>
        </div>

        <div className="flex flex-col px-10  md:flex-row md:justify-around  text-lg md:px-0 ">
          <div className="flex flex-col gap-0 items-start ">
            <div className="flex flex-row items-center ">
              <span className="  text-lg">
                <FaRegDotCircle />
              </span>
              <p className=" m-0">Networked note-taking</p>
            </div>
            <div className="flex flex-row items-center ">
              <span className=" text-lg">
                <FaRegDotCircle />
              </span>
              <p className="m-0">End to end encryption</p>
            </div>
            <div className="flex flex-row items-center">
              <span className=" text-lg">
                <FaRegDotCircle />
              </span>
              <p className="m-0">Chrome and Safari web clipper</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start mt-2 md:mt-0">
            <div className="flex flex-row items-center">
              <span className="text-lg">
                <FaRegDotCircle />
              </span>
              <p className="m-0">Kindle highlights sync</p>
            </div>
            <div className="flex flex-row items-center">
              <span className=" text-lg">
                <FaRegDotCircle />
              </span>
              <p className="m-0">Kindle offline sync</p>
            </div>
            <div className="flex flex-row items-center">
              <span className=" text-lg">
                <FaRegDotCircle />
              </span>
              <p className="m-0">iOS app</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button className="w-[170px] px-2 py-1 rounded-full text-md font-medium border border-violet-400  hover:text-white transition-all duration-300 shadow-[inset_0_0_15px_rgba(168,85,247,0.7)]  mx-auto">
            Start Your Free Trail
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Pricing;