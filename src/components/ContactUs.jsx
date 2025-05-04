import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mt-0 mt-[-100px]  px-4 font-nanum">
        <p className="text-4xl text-left mx-4  font-bold mb-12">Contact Us</p>
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 items-center">

        {/* Left Side */}
        <div className="flex flex-col mx-8 justify-center ">
          
          <p className="text-gray-400 text-left mb-8">
            We are committed to processing the information in order to contact you and talk about your project.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <span role="img" aria-label="email">📧</span>
              <span className="text-gray-400">example@teamwebflow.com</span>
            </div>

            <div className="flex items-center gap-3">
              <span role="img" aria-label="address">📍</span>
              <span className="text-gray-400">4074 Ebert Summit Suite 375<br/>Lake Leonardschester</span>
            </div>

            <div className="flex items-center gap-3">
              <span role="img" aria-label="phone">📱</span>
              <span className="text-gray-400">+44 123 654 7890</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className=" space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="md:w-[70%] w-[85%] border border-gray-600 px-4 bg-transparent py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="md:w-[70%] w-[85%] border border-gray-600 px-4 bg-transparent py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400"
          />
          <input
            type="text"
            placeholder="Website"
            className="md:w-[70%] w-[85%] border border-gray-600 px-4 bg-transparent py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="md:w-[70%] w-[85%] border border-gray-600 px-4 bg-transparent py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400"
          ></textarea>

          <button
            type="submit"
            className="md:w-[70%] w-[85%] py-2 text-white font-semibold rounded-xl border border-violet-400  hover:text-white transition-all duration-300 shadow-[inset_0_0_15px_rgba(168,85,247,0.7)]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
