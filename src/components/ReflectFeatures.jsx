// src/components/ReflectFeatures.jsx
import {
  Mic,
  NotebookPen,
  CheckCheck,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

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
    <div className="bg-[#020012] text-white py-16 px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold my-12">
        What can you do with Reflect AI?
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-y-12  max-w-5xl mx-auto before:content-[''] relative group before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:pointer-events-none 
        before:duration-500 before:ease-[cubic-bezier(0.3,0.8,0,1)] 
        before:bg-gradient-to-r before:from-[rgba(255,255,255,0)] before:via-[rgba(255,255,255,0.2)] before:to-[rgba(255,255,255,0)]"
      >
        {features.slice(0, 3).map((feature, idx) => (
          <div
            key={idx}
            className="p-[24px_0_32px] relative group gap-[2px]
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
            className="p-[24px_0_32px]  border-b-[#ffffff3d] relative group 
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
  );
}