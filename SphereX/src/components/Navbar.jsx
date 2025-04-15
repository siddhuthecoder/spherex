import React from 'react';
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-3 md:px-10 py-5  backdrop-blur-md border-b border-[#1a1332] sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full "><img src="logo.png" alt="" /></div>
        <span className="text-lg font-semibold  ">Reflect</span>
      </div>
      <div className="hidden md:flex gap-6 text-sm items-center border-[1px] p-3 px-6 rounded-full  border-[#ffffff3d] bg-[rgba(255, 255, 255, .02)]">
        <a href="#" className="hover:text-purple-400">Product</a>
        <a href="#" className="hover:text-purple-400">Pricing</a>
        <a href="#" className="hover:text-purple-400">Company</a>
        <a href="#" className="hover:text-purple-400">Blog</a>
        <a href="#" className="hover:text-purple-400">Changelog</a>
       
      </div>
      <div className='flex gap-6'>
      <button className="text-white hover:text-purple-400">Login</button>
      <button className="border-purple-600 border-[1px] text-white px-3 py-1 rounded-md md:hidden">SignUp</button>

      <div className='lg:hidden text-white text-3xl'><IoMenu />
      </div>
      
      <button className="border-purple-600 border-[1px] text-white px-4 py-2 rounded-md hidden md:block">Start free trial</button>
      </div>
    </nav>
  );
}