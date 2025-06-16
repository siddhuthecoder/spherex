import React from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
export default function Navbar() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className=''>
    <nav className="flex justify-between items-center  px-6 md:px-[34px] py-[20px]  md:py-[25px] backdrop-blur-md fixed top-0 z-50 w-full  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:pointer-events-none 
    before:duration-500 before:ease-[cubic-bezier(0.3,0.8,0,1)] 
    before:bg-gradient-to-r before:from-[rgba(255,255,255,0)] before:via-[rgba(255,255,255,0.09)] before:to-[rgba(255,255,255,0)]">
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <div className="h-9 w-9 rounded-full "><img src="logo.png" alt="" /></div>
        <span className=" text-[16px] font-medium">SphereX</span>
      </div>
   <div className="hidden absolute md:flex font-normal gap-6 text-[16px] items-center py-[8px]  px-[24px] rounded-full border border-white/10 bg-[rgba(255,255,255,0.04)] left-1/2 transform -translate-x-1/2 m-auto">

        <Link to='/#home' className="hover:text-purple-400 header-nav-link">Home</Link>
        <Link to='/#about' className="hover:text-purple-400 header-nav-link">AboutUs</Link>
        <Link to='/#services' className="hover:text-purple-400 header-nav-link">Services</Link>
        <Link to='/#projects' className="hover:text-purple-400 header-nav-link">Projects</Link>
        <Link to='/#contact' className="hover:text-purple-400 header-nav-link">Contact</Link> 
      </div>
      <div className='flex items-center gap-4  text-[16px]'>
      <Link to='/sigin'>   <button className=" text-white font-medium  hover:text-purple-400 ">Login</button></Link>
    <Link to='/signup'>  <button className="border-[1px] block md:hidden border-purple-600 text-white rounded-md px-[10px] py-1  relative items-center justify-center  bg-gradient-to-b from-purple-400/30 to-purple-400/10 shadow-inner shadow-purple-500/30 hover:shadow-purple-500/60 transition duration-300">
  <span className="relative z-10">Signup</span>
  <span className="absolute inset-0 rounded-md bg-gradient-to-t from-purple-700/10 to-purple-800/30 blur-md opacity-70 animate-pulse"></span>
</button></Link>

      <div className='lg:hidden text-white text-3xl' onClick={()=>{setIsOpen(true)}}><IoMenu />
      </div>
      
      <button className="border-[1px] border-purple-600 text-white rounded-md hidden md:block h-[36px] w-[125px] relative items-center justify-center  bg-gradient-to-b from-purple-400/30 to-purple-400/10 shadow-inner shadow-purple-500/30 hover:shadow-purple-500/60 transition duration-300">
  <span className="relative z-10">Start free trial</span>
  <span className="absolute inset-0 rounded-md bg-gradient-to-t from-purple-700/10 to-purple-800/30 blur-md opacity-70 animate-pulse"></span>
</button>
      </div>
    </nav>
   <div>
  <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen}/>
   </div>
    </div>
  );
}