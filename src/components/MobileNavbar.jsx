import React from 'react'
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const MobileNavbar = ({isOpen,setIsOpen}) => {
  return (
    <div className="relative">
     

    {/* Sidebar Menu */}
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 
        text-white transition-all duration-500 ease-in-out 
        ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} 
        backdrop-blur-lg`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 py-6 border-b border-[#ffffff15]">
        <div className="flex items-center gap-2">
          <img
            src="logo.png"
            alt="logo"
            className="w-6 h-6"
          />
          <span className="text-lg font-semibold">Reflect</span>
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-md font-medium">Login</button>
          <button
            className="px-2 py-1 rounded-lg text-sm font-medium 
              border border-violet-400 text-violet-400 
              hover:text-white hover:border-white 
              transition-all duration-300
              shadow-[inset_0_0_15px_rgba(168,85,247,0.7)]"
          >
            Sign up
          </button>
          <button className={`text-white ${isOpen?"block":"hidden"} text-2xl`} onClick={()=>setIsOpen(false)}>
            <IoMdClose />
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-6 mt-6 ">
      <Link to='/#home' className="hover:text-purple-400 border-b-[1px] p-3 text-2xl">Home</Link>
      <Link to='/#about' className="hover:text-purple-400 border-b-[1px] p-3 text-2xl">About Us</Link>
      <Link to='/#services' className="hover:text-purple-400 border-b-[1px] p-3 text-2xl">Services</Link>
      <Link to='/#projects' className="hover:text-purple-400 border-b-[1px] p-3 text-2xl">Projects</Link>
      <Link to='/#contact' className="hover:text-purple-400 border-b-[1px] p-3 text-2xl">Contact</Link>
      </div>
    </div>
  </div>
  )
}

export default MobileNavbar