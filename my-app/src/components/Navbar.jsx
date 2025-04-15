import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5  backdrop-blur-md border-b border-[#1a1332] sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500"></div>
        <span className="text-lg font-semibold">Reflect</span>
      </div>
      <div className="flex gap-6 text-sm items-center border-[1px] p-3 px-6 rounded-full  border-[#ffffff3d] bg-[rgba(255, 255, 255, .02)]">
        <a href="#" className="hover:text-purple-400">Product</a>
        <a href="#" className="hover:text-purple-400">Pricing</a>
        <a href="#" className="hover:text-purple-400">Company</a>
        <a href="#" className="hover:text-purple-400">Blog</a>
        <a href="#" className="hover:text-purple-400">Changelog</a>
       
      </div>
      <div className='flex gap-6'>
      <button className="text-white hover:underline">Login</button>
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">Start free trial</button>
      </div>
    </nav>
  );
}