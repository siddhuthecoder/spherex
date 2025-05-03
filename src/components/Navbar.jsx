import React from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
export default function Navbar() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div>
    <nav className="flex justify-between items-center font-bruno px-3 md:px-10 py-5  backdrop-blur-md border-b border-[#1a1332] fixed top-0 z-50 w-full">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full "><img src="logo.png" alt="" /></div>
        <span className="text-4xl font-bruno  font-bold ">Reflect</span>
      </div>
      <div className="hidden md:flex gap-6 text-md  items-center border-[1px] p-3 px-6 rounded-full  border-[#ffffff3d] bg-[rgba(255, 255, 255, .02)]">
        <Link to='/#home' className="hover:text-purple-400">Home</Link>
        <Link to='/#about' className="hover:text-purple-400">AboutUs</Link>
        <Link to='/#services' className="hover:text-purple-400">Services</Link>
        <Link to='/#projects' className="hover:text-purple-400">Projects</Link>
        <Link to='/#contact' className="hover:text-purple-400">Contact</Link>
       
      </div>
      <div className='flex gap-6 text-lg'>
      <Link to='/sigin'>   <button className="text-white hover:text-purple-400 mt-3">Login</button></Link>
    <Link to='/signup'>  <button className="border-purple-600 border-[1px] text-white px-3 py-1 rounded-md md:hidden">SignUp</button></Link>

      <div className='lg:hidden text-white text-3xl' onClick={()=>{setIsOpen(true)}}><IoMenu />
      </div>
      
      <button className="border-purple-600 border-[1px] text-white px-4 py-2 rounded-md hidden md:block">Start free trial</button>
      </div>
    </nav>
   <div>
  <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen}/>
   </div>
    </div>
  );
}