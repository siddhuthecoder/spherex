import React from "react";

const FlexibleDevelopment = () => {
    return (
        <div className="p-8 w-full min-h-screen relative font-jost z-10 bg-[black]">
            {/* Main Heading */}
            <h1 className="md:text-5xl text-[30px] font-extrabold mb-12 flex items-center justify-center text-center bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent animate-scale-in tracking-tight drop-shadow-lg transition-all duration-500 hover:scale-105">
                <span className="md:mr-1 text-[30px] md:text-4xl text-purple-400 transition-transform duration-500 hover:rotate-12">🚀</span> Why Flexible Development is Better Than Full-Time Hiring?
            </h1>
            <div className="relative group grid grid-cols-1 md:grid-cols-2 gap-6
                after:content-[''] after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:pointer-events-none 
                after:duration-700 after:ease-[cubic-bezier(0.3,0.8,0,1)] 
                after:bg-gradient-to-t after:from-[rgba(255,255,255,0)] after:to-[rgba(124,95,95,0.3)]
                before:content-[''] before:absolute before:bottom-1/2 before:left-0 before:w-full before:h-[1px] before:pointer-events-none 
                before:duration-700 before:ease-[cubic-bezier(0.3,0.8,0,1)] 
                before:bg-gradient-to-r before:from-[rgba(255,255,255,0)] before:via-[rgba(255,255,255,0.3)] before:to-[rgba(255,255,255,0)]">
                {/* The Problem Section */}
                <div className="relative animate-fade-in border-l-4 border-l-[#ffffff3d] p-8 backdrop-blur-md bg-[#100D20]/40 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer 
                    hover:bg-gradient-to-b from-[#030115] via-[#100D20] to-[#2C2A3D]
                    before:content-[''] before:absolute before:w-[4px] before:h-[20px] before:left-[-2px] before:top-[100px] before:bg-[#ffffff3d] before:rounded">
                    <h2 className="text-3xl font-bold mb-6 text-white animate-slide-in tracking-wide drop-shadow-md">THE PROBLEM</h2>
                    <ul className="space-y-4 text-xl">
                        {[
                            "Managing in-house development teams is costly and inefficient.",
                            "Freelancers can be unreliable, causing delays and inconsistencies.",
                            "Scaling up or down based on project needs is difficult.",
                            "Hiring full-time developers when you only need specialized work wastes resources."
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="flex items-start animate-slide-in text-gray-300 transition-all duration-300 hover:translate-x-2 hover:text-purple-300"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <span className="text-purple-400 mr-3 text-2xl transition-transform duration-300 hover:scale-110">✔</span>
                                <span className="leading-relaxed tracking-wide">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* The Solution Section */}
                <div className="relative animate-fade-in border-l-4 border-l-[#ffffff3d] p-8 backdrop-blur-md bg-[#100D20]/40 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer 
                    hover:bg-gradient-to-t from-[#030115] via-[#100D20] to-[#2C2A3D]
                    before:content-[''] before:absolute before:w-[4px] before:h-[20px] before:left-[-2px] before:top-[100px] before:bg-[#ffffff3d] before:rounded">
                    <h2 className="text-3xl font-bold mb-6 text-white animate-slide-in tracking-wide drop-shadow-md">THE SOLUTION</h2>
                    <ul className="space-y-4 text-xl">
                        {[
                            "Pixels and Grids provides expert development on demand, without long-term hiring headaches.",
                            "We specialize in API integration, automation, and dynamic dashboards and SaaS to streamline your business.",
                            "Scale your development needs flexibly—no unnecessary overhead costs.",
                            "Get high-quality, reliable solutions without the hassle of managing a full team."
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="flex items-start animate-slide-in text-gray-300 transition-all duration-300 hover:translate-x-2 hover:text-purple-300"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <span className="text-purple-400 mr-3 text-2xl transition-transform duration-300 hover:scale-110">✔</span>
                                <span className="leading-relaxed tracking-wide">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FlexibleDevelopment;