// src/components/ReflectFeatures.jsx
import {
  Mic,
  NotebookPen,
  CheckCheck,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
import GrowingStars from "./GrowingStars";
const features = [
  {
    icon: <Mic className="w-10 h-10 mx-auto mb-2" />,
    title: "Transcribe voice notes",
    description: "with human-level accuracy",
  },
  {
    icon: <NotebookPen className="w-10 h-10 mx-auto mb-2" />,
    title: "Generate article outlines",
    description: "from your scattered thoughts",
  },
  {
    icon: <CheckCheck className="w-10 h-10 mx-auto mb-2" />,
    title: "List key takeaways and action",
    description: "items from your meeting notes",
  },
  {
    icon: <MessageSquareText className="w-10 h-10 mx-auto mb-2" />,
    title: "Chat with your notes",
    description: "to find and organize information",
  },
  {
    icon: <Sparkles className="w-10 h-10 mx-auto mb-2" />,
    title: "Save your own",
    description: "custom prompts",
  },
];

export default function ReflectFeatures() {
  return (
    <div className="bg-[#020012] text-white py-16 px-4 text-center ">
    <div class="flex flex-col items-center relative  py-12 px-4 justify-end">
       
        
        <div class="relative  w-full flex flex-col items-center ">
        <div class="absolute flex flex-col justify-center gap-5 top-[-80px] w-full max-w-4xl px-4 ">
            <div class="px-4 py-2 rounded-full text-sm font-medium border border-violet-400 text-violet-400 hover:text-white transition-all duration-300 shadow-[inset_0_0_15px_rgba(168,85,247,0.7)] w-[120px] mx-auto">
                SphereX
            </div>
            
            <h2 class="text-4xl md:text-5xl font-semibold leading-tight text-center">
                Smart Solutions for modern <br class="hidden md:block"/> Web and App Development.
            </h2>
            
            <p class="text-center text-[#efedfdb3]">
                Spherex empowers you to plan, build, and refine digital products effortlessly.<br class="hidden md:block"/> From idea to execution, it streamlines development for faster, smoother results.
            </p>
        </div>
            <img src="services.png" alt="Services" class="serviceimg"/>
            <div class="sky">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
            </div>
            <div 
      className="p-[6px] rounded-2xl mt-8 w-full max-w-2xl absolute top-[200px]"
      style={{
        background: 'rgba(255, 255, 255, 0.01)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        boxShadow: 'inset 0 0 0 8px rgba(255, 255, 255, 0.08)'
      }}
    >
      <div 
        className="flex flex-col items-start p-5 rounded-lg"
        style={{
          border: '2px solid rgba(42, 37, 70, 1)',
          borderRadius: '12px'
        }}
      >
        <p className="text-left font-medium text-lg text-white">
          How Spherex Helps You Work Smarter?
        </p>
        <p className="text-[#efedfdb3] mt-2">
          Spherex helps you plan, design, and build digital products faster and more efficiently.
        </p>
      </div>
    </div>
        </div>
        
       
    </div>
    <div className="mt-[-30px]">
      <h2 className="text-2xl sm:text-5xl font-semibold my-12">
        What can you do with SphereX ?
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-y-12  max-w-5xl mx-auto before:content-[''] relative group before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:pointer-events-none 
        before:duration-500 before:ease-[cubic-bezier(0.3,0.8,0,1)] 
        before:bg-gradient-to-r before:from-[rgba(255,255,255,0)] before:via-[rgba(255,255,255,0.2)] before:to-[rgba(255,255,255,0)]"
      >
        {features.slice(0, 3).map((feature, idx) => (
          <div
            key={idx}
            className="p-[24px_0_32px] relative group gap-[2px] hover:bg-gradient-to-b from-[#030115] via-[#100D20] to-[#2C2A3D]
            after:content-[''] after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:pointer-events-none 
            after:duration-500 after:ease-[cubic-bezier(0.3,0.8,0,1)] 
            after:bg-gradient-to-t after:from-[rgba(255,255,255,0)] after:to-[rgba(255,255,255,0.2)]"
          >
            {feature.icon}
            <h3 className="font-medium text-sm sm:text-lg text-white mt-[20px]">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-[16px] text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12  max-w-3xl mx-auto ">
        {features.slice(3).map((feature, idx) => (
          <div
            key={idx}
            className="p-[24px_0_32px]  border-b-[#ffffff3d] relative group hover:bg-gradient-to-t from-[#030115] via-[#100D20] to-[#2C2A3D]
            after:content-[''] after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:pointer-events-none 
            after:duration-500 after:ease-[cubic-bezier(0.3,0.8,0,1)] 
            after:bg-gradient-to-t after:from-[rgba(255,255,255,0)] after:to-[rgba(255,255,255,0.2)]"
          >
            {feature.icon}
            <h3 className="font-medium text-sm sm:text-base text-white mt-[20px]">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-[16px] text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}