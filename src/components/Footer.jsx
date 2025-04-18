import React from 'react'
const  Footer = () => {
  return (
    <footer className="bg-[#0f0c1d] text-white py-12 px-[20px] md:px-[100px]">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Reflect Logo" className="w-6 h-6" />
              <span className="text-xl font-semibold">Reflect</span>
            </div>
            <div className="flex gap-4 mt-6 text-2xl">
              <i className="fa-brands fa-discord"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>

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

        <div className="border-t border-[#2c254a] mt-12 pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-500">
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