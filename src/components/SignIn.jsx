import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const SignUpForm = () => {
  return (
    <div className="min-h-screen bg-[#0a0226] flex items-center justify-center">
      <div className="bg-[#0a0226] p-6 rounded-lg w-80 space-y-4">
        <img src="signin.png" alt="" className='w-[400px] h-[200px]' />
        <div className="flex gap-3">
          <button className="flex-1 h-[50px] flex items-center justify-center gap-2 bg-gradient-to-b from-[#7a42f4] to-[#241d8a] hover:opacity-90 text-white font-medium py-2 rounded-md">
            <FcGoogle className="text-3xl bg-white rounded-full p-0.5" />
          </button>
          <button className="flex-1 h-[50px] flex items-center justify-center gap-2 bg-gradient-to-b from-[#7a42f4] to-[#241d8a] hover:opacity-90 text-white font-medium py-2 rounded-md">
            <FaApple className="text-white text-3xl" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
          <div className="flex-1 h-px bg-gray-600"></div>
          <span>or continue with</span>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

        <input
          type="email"
          placeholder="your@email.com"
          className="w-full px-4 py-2 bg-[#0a0226] border border-[#1e1b34] text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7a42f4]"
        />

        <button className="w-full bg-gradient-to-b from-[#7a42f4] to-[#241d8a] hover:opacity-90 text-white font-medium py-2 rounded-md">
          Continue
        </button>
        <div className='text-white flex gap-[20px] mt-[50px]'>
        <div className='mt-[50px]'>Disocord</div>
        <div className='mt-[50px]'> Twitter</div>
        <div className='mt-[50px]'>Terms</div>
        <div className='mt-[50px]'>Policy</div>
      </div>
      <p className='text-gray-600'>Reflect App, LLC. All rights reserved.</p>
      </div>
     
    </div>
  );
};

export default SignUpForm;
