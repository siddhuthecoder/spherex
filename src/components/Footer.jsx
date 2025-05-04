import React from 'react'
import { FaDiscord } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const  Footer = () => {
  return (
    <footer className="bg-[#0f0c1d] text-white  py-12 px-[40px] md:px-[100px] font-bruno text-xl font-bold">
      
      <div className="md:max-w-7xl  mx-auto">
        <div className="flex md:flex-row flex-col md:justify-between  justify-center   gap-10">
          <div className='flex md:flex-col flex-row justify-between md:w-auto md:h-auto w-full items-center'>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Reflect Logo" className="w-6 h-6" />
              <span className="text-xl font-semibold">Reflect</span>
            </div>
            <div className="flex gap-4 text-2xl text-gray-700">
              <span><FaDiscord/></span>
              <span><FaTwitter/></span>
            </div>
          </div>
          <div className='flex md:flex-row md:gap-40 gap-20 flex-wrap'>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-md text-gray-300">
              <li className='cursor-pointer hover:text-purple-500'>Features</li>
              <li className='cursor-pointer hover:text-purple-500'>Integrations</li>
              <li className='cursor-pointer hover:text-purple-500'>Pricing</li>
              <li className='cursor-pointer hover:text-purple-500'>Changelog</li>
              <li className='cursor-pointer hover:text-purple-500'>Roadmap</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-md text-gray-300">
              <li className='cursor-pointer hover:text-purple-500'>Our team</li>
              <li className='cursor-pointer hover:text-purple-500'>Our values</li>
              <li className='cursor-pointer hover:text-purple-500'>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-md text-gray-300">
              <li className='cursor-pointer hover:text-purple-500'>Downloads</li>
              <li className='cursor-pointer hover:text-purple-500'>Documentation</li>
              <li className='cursor-pointer hover:text-purple-500'>Contact</li>
            </ul>
          </div>
          </div>
        </div>

        <div className="border-t border-[#2c254a] mt-12 pt-8 md:flex justify-between">
            <div>
          <h4 className="text-lg font-semibold">Get free note-taking workflows</h4>
          <p className="text-sm text-gray-400 mb-4">In our weekly newsletter.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-white bg-transparent border-[1px]  sm:w-64 w-full"
            />
            <button
              type="submit"
              className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-white"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="border-t border-[#2c254a] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-center text-sm text-gray-500">
          <div className="flex gap-4 mb-2 sm:mb-0">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Conditions</span>
          </div>
          <div>
            Reflect App, LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer