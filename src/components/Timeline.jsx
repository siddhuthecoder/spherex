import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { 
  RocketLaunchIcon, 
  ArrowPathIcon, 
  CheckCircleIcon, 
  PlayIcon, 
  CurrencyDollarIcon,
  XMarkIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon,
  LifebuoyIcon
} from '@heroicons/react/24/outline';

const Timeline = () => {
  const containerRef = useRef(null);
  const [currentStage, setCurrentStage] = useState(2); // Start at Design stage
  const [isVisible, setIsVisible] = useState(false);
  
  const stages = [
    {
      id: 1,
      title: "Analysis",
      description: "Translating your business goals into actionable technical requirements and strategic project roadmaps.",
      icon: MagnifyingGlassIcon,
      step: "01"
    },
    {
      id: 2,
      title: "Design",
      description: "Architecting scalable solutions aligned with your business objectives and future growth plans.",
      icon: PencilSquareIcon,
      step: "02"
    },
    {
      id: 3,
      title: "Development",
      description: "Building your solution using proven technologies for rapid market delivery and business agility.",
      icon: CodeBracketIcon,
      step: "03"
    },
    {
      id: 4,
      title: "Quality Assurance",
      description: "Rigorously validating every feature to ensure flawless performance in real-world business scenarios.",
      icon: ShieldCheckIcon,
      step: "04"
    },
    {
      id: 5,
      title: "Deployment",
      description: "Ensuring seamless transition to production with zero disruption to your business operations.",
      icon: CloudArrowUpIcon,
      step: "05"
    },
    {
      id: 6,
      title: "Support",
      description: "Proactively maintaining and optimizing your solution to maximize business value and ROI.",
      icon: LifebuoyIcon,
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

  // Check if timeline is in view
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const getStageIcon = (stage, index) => {
    const IconComponent = stage.icon;
    
    if (stage.id < currentStage) {
      // Completed stages - Black with enhanced styling
      return (
        <motion.div 
          className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center border-2 border-white shadow-xl relative overflow-hidden"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={isVisible ? { scale: 1, rotate: 0, opacity: 1 } : { scale: 0, rotate: -180, opacity: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15, 
            type: "spring", 
            stiffness: 200,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.1, 
            rotate: 5,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.3 }}
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: index * 0.15 + 0.4, type: "spring", stiffness: 300 }}
          >
            <CheckCircleIcon className="w-5 h-5 sm:w-7 sm:h-7 text-white relative z-10" />
          </motion.div>
        </motion.div>
      );
    } else if (stage.id === currentStage) {
      // Current stage - Cream with pulsing animation
      return (
        <motion.div 
          className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center border-2 border-black/20 shadow-xl relative overflow-hidden"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={isVisible ? { scale: 1, rotate: 0, opacity: 1 } : { scale: 0, rotate: -180, opacity: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15, 
            type: "spring", 
            stiffness: 200,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.1, 
            rotate: 5,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: index * 0.15 + 0.4, type: "spring", stiffness: 300 }}
          >
            <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 text-black/80 relative z-10" />
          </motion.div>
          <motion.div 
            className="absolute inset-0 rounded-2xl border-2 border-black/30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      );
    } else {
      // Pending stages - White with black border
      return (
        <motion.div 
          className="w-10 h-10 sm:w-14 sm:h-14 bg-white border-2 border-black/30 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={isVisible ? { scale: 1, rotate: 0, opacity: 1 } : { scale: 0, rotate: -180, opacity: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15, 
            type: "spring", 
            stiffness: 200,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.05, 
            borderColor: "rgba(0,0,0,0.5)",
            transition: { duration: 0.2 }
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: index * 0.15 + 0.4, type: "spring", stiffness: 300 }}
          >
            <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 text-black/70 group-hover:text-black transition-colors duration-300 relative z-10" />
          </motion.div>
        </motion.div>
      );
    }
  };

  const getStageTitleColor = (stage) => {
    if (stage.id === currentStage) {
      return "text-black";
    }
    return "text-black";
  };

  return (
    <div className="min-h-screen bg-[#f0eee6] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How We Work
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our proven process ensures exceptional results at every stage of your project
          </motion.p>
        </motion.div>

        {/* Timeline Stages */}
        <div className="relative" ref={containerRef}>
          {/* Enhanced Timeline Line */}
          <div className="absolute left-5 sm:left-7 lg:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-black/10 via-black/20 to-black/10 rounded-full">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-black via-gray-700 to-black rounded-full shadow-sm"
              style={{ height: progress }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
          
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {stages.map((stage, index) => (
              <motion.div 
                key={stage.id} 
                className="relative flex items-start gap-4 sm:gap-6 lg:gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                {/* Enhanced Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  {getStageIcon(stage, index)}
                </div>
                
                {/* Enhanced Stage Content */}
                <motion.div 
                  className="flex-1 bg-gray-300/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-black/10 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Background gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <motion.div 
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-black/5 rounded-2xl flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-sm sm:text-lg font-bold text-black/80">{stage.step}</span>
                        </motion.div>
                        <div className="min-w-0 flex-1">
                          <motion.h3 
                            className={`text-lg sm:text-xl lg:text-2xl font-bold ${getStageTitleColor(stage)} mb-2`}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                          >
                            {stage.title}
                          </motion.h3>
                          <AnimatePresence>
                            {stage.id === currentStage && (
                              <motion.span 
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 text-black text-xs sm:text-sm font-semibold rounded-full border border-black/20"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                              >
                                <motion.div 
                                  className="w-2 h-2 bg-black rounded-full"
                                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <span className="hidden sm:inline">Active Stage</span>
                                <span className="sm:hidden">Active</span>
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                      <motion.div 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 ml-3"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black/5 rounded-full flex items-center justify-center">
                          <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black/60" />
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.p 
                      className="text-black/70 text-sm sm:text-base lg:text-lg leading-relaxed font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      {stage.description}
                    </motion.p>
                    
                    {/* Progress indicator for current stage */}
                    <AnimatePresence>
                      {stage.id === currentStage && (
                        <motion.div 
                          className="mt-4 sm:mt-6 h-1.5 bg-gray-100 rounded-full overflow-hidden"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 6 }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <motion.div 
                            className="h-full bg-gradient-to-r from-black to-gray-700 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "70%" }}
                            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;