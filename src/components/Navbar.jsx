import React from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
export default function Navbar() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className=''>
    <nav className="flex justify-between items-center  px-3 md:p-[20px_0px] py-5  backdrop-blur-md border-b border-[#1a1332] fixed top-0 z-50 w-full font-jost ">
      <div className="flex items-center gap-2 h-[36px] w-[102px] ml-[30px]">
        <div className="h-8 w-8 rounded-full "><img src="logo.png" alt="" /></div>
        <span className=" text-[16px]">Reflect</span>
      </div>
      <div className="hidden md:flex gap-6 text-[16px]  items-center border-[1px] h-[42px] p-[10px_12px] rounded-full  border-[#ffffff3d] bg-[rgba(255, 255, 255, .02)]">
        <Link to='/#home' className="hover:text-purple-400">Home</Link>
        <Link to='/#about' className="hover:text-purple-400">AboutUs</Link>
        <Link to='/#services' className="hover:text-purple-400">Services</Link>
        <Link to='/#projects' className="hover:text-purple-400">Projects</Link>
        <Link to='/#contact' className="hover:text-purple-400">Contact</Link>
       
      </div>
      <div className='flex items-center gap-4  text-[16px] mr-[50px]'>
      <Link to='/sigin'>   <button className=" text-white hover:text-purple-400 ">Login</button></Link>
    <Link to='/signup'>  <button className="md:hidden border-purple-600 border-[1px] text-white px-3 py-1 rounded-md ">SignUp</button></Link>

      <div className='lg:hidden text-white text-3xl' onClick={()=>{setIsOpen(true)}}><IoMenu />
      </div>
      
      <button className="border-[1px] border-purple-600 text-white rounded-md hidden md:block h-[36px] w-[125px] relative items-center justify-center  bg-gradient-to-b from-purple-400/30 to-purple-400/10 shadow-inner shadow-purple-500/30 hover:shadow-purple-500/60 transition duration-300">
  <span className="relative z-10">Start free trial</span>
  <span className="absolute inset-0 rounded-md bg-gradient-to-b from-purple-700/10 to-purple-800/30 blur-md opacity-70 animate-pulse"></span>
</button>
      </div>
    </nav>
   <div>
  <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen}/>
   </div>
    </div>
  );
}