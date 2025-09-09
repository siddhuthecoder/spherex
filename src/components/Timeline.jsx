import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  RocketLaunchIcon, 
  ArrowPathIcon, 
  CheckCircleIcon, 
  PlayIcon, 
  CurrencyDollarIcon,
  XMarkIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Timeline = () => {
  const containerRef = useRef(null);
  const [currentStage, setCurrentStage] = useState(2); // Start at Design stage
  
  const stages = [
    {
      id: 1,
      title: "Analysis",
      description: "Translating your business goals into actionable technical requirements and strategic project roadmaps.",
      icon: CheckCircleIcon,
      step: "01"
    },
    {
      id: 2,
      title: "Design",
      description: "Architecting scalable solutions aligned with your business objectives and future growth plans.",
      icon: PlayIcon,
      step: "02"
    },
    {
      id: 3,
      title: "Development",
      description: "Building your solution using proven technologies for rapid market delivery and business agility.",
      icon: PlayIcon,
      step: "03"
    },
    {
      id: 4,
      title: "Quality Assurance",
      description: "Rigorously validating every feature to ensure flawless performance in real-world business scenarios.",
      icon: CheckCircleIcon,
      step: "04"
    },
    {
      id: 5,
      title: "Deployment",
      description: "Ensuring seamless transition to production with zero disruption to your business operations.",
      icon: PlayIcon,
      step: "05"
    },
    {
      id: 6,
      title: "Support",
      description: "Proactively maintaining and optimizing your solution to maximize business value and ROI.",
      icon: CheckCircleIcon,
      step: "06"
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate progress based on scroll
  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  // Update current stage based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const stageIndex = Math.floor(value * stages.length);
      setCurrentStage(Math.min(stageIndex + 1, stages.length));
    });
    
    return () => unsubscribe();
  }, [scrollYProgress, stages.length]);

  const getStageIcon = (stage, index) => {
    const IconComponent = stage.icon;
    
    if (stage.id < currentStage) {
      // Completed stages - Green with enhanced styling
      return (
        <motion.div 
          className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center border-2 border-white shadow-xl relative overflow-hidden"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          <CheckCircleIcon className="w-6 h-6 text-white relative z-10" />
        </motion.div>
      );
    } else if (stage.id === currentStage) {
      // Current stage - Blue with pulsing animation
      return (
        <motion.div 
          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center border-2 border-white shadow-xl relative overflow-hidden"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <IconComponent className="w-6 h-6 text-white relative z-10" />
          <motion.div 
            className="absolute inset-0 rounded-2xl border-2 border-blue-300"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      );
    } else {
      // Pending stages - Enhanced gray styling
      return (
        <motion.div 
          className="w-12 h-12 bg-white border-2 border-black/20 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05, borderColor: "rgba(0,0,0,0.3)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <IconComponent className="w-6 h-6 text-black/60 group-hover:text-black transition-colors duration-300 relative z-10" />
        </motion.div>
      );
    }
  };

  const getStageTitleColor = (stage) => {
    if (stage.id === currentStage) {
      return "text-blue-600";
    }
    return "text-black";
  };

  return (
    <div className="min-h-screen bg-[#f0eee6] py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
       

        {/* Timeline Stages */}
        <div className="relative" ref={containerRef}>
          {/* Enhanced Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-black/10 via-black/20 to-black/10 rounded-full">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-black via-gray-700 to-black rounded-full shadow-sm"
              style={{ height: progress }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
          
          <div className="space-y-10">
            {stages.map((stage, index) => (
              <motion.div 
                key={stage.id} 
                className="relative flex items-start gap-2 md:gap-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Enhanced Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  {getStageIcon(stage, index)}
                </div>
                
                {/* Enhanced Stage Content */}
                <motion.div 
                  className="flex-1 bg-white rounded-3xl p-4 md:p-8 border border-black/5 shadow-md hover:shadow-xl transition-all duration-500 group"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center">
                        <span className="text-lg font-bold text-black/80">{stage.step}</span>
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${getStageTitleColor(stage)} mb-1`}>
                          {stage.title}
                        </h3>
                        {stage.id === currentStage && (
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            Active Stage
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center">
                        <ArrowRightIcon className="w-4 h-4 text-black/60" />
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-black/70 text-base leading-relaxed font-medium">
                    {stage.description}
                  </p>
                  
                  {/* Progress indicator for current stage */}
                  {stage.id === currentStage && (
                    <motion.div 
                      className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "60%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Footer Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-4">Ready to Get Started?</h3>
            <p className="text-black/70 text-base mb-6 max-w-2xl mx-auto">
              Let's bring your vision to life with our proven development process. 
              From concept to deployment, we'll guide you through every step.
            </p>
            <motion.button 
              className="inline-flex items-center gap-3 px-8 py-4 bg-black hover:bg-gray-800 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <RocketLaunchIcon className="w-5 h-5" />
              Start Your Project
              <ArrowRightIcon className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;