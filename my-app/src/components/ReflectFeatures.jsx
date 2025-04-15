// src/components/ReflectFeatures.jsx
import { Mic, NotebookPen, CheckCheck, MessageSquareText, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Mic className="w-6 h-6 mx-auto mb-2" />,
    title: "Transcribe voice notes",
    description: "with human-level accuracy",
  },
  {
    icon: <NotebookPen className="w-6 h-6 mx-auto mb-2" />,
    title: "Generate article outlines",
    description: "from your scattered thoughts",
  },
  {
    icon: <CheckCheck className="w-6 h-6 mx-auto mb-2" />,
    title: "List key takeaways and action",
    description: "items from your meeting notes",
  },
  {
    icon: <MessageSquareText className="w-6 h-6 mx-auto mb-2" />,
    title: "Chat with your notes",
    description: "to find and organize information",
  },
  {
    icon: <Sparkles className="w-6 h-6 mx-auto mb-2" />,
    title: "Save your own",
    description: "custom prompts",
  },
];

export default function ReflectFeatures() {
  return (
    <div className="bg-[#0B0B18] text-white py-16 px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
        What can you do with Reflect AI?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-12 gap-x-6 max-w-5xl mx-auto">
        {features.slice(0, 3).map((feature, idx) => (
          <div key={idx} className="px-4">
            {feature.icon}
            <h3 className="font-medium text-sm sm:text-base text-white">{feature.title}</h3>
            <p className="text-xs sm:text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-6 mt-12 max-w-3xl mx-auto">
        {features.slice(3).map((feature, idx) => (
          <div key={idx} className="px-4">
            {feature.icon}
            <h3 className="font-medium text-sm sm:text-base text-white">{feature.title}</h3>
            <p className="text-xs sm:text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
