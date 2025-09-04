import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Import unique Lottie animations (replace with your actual animation JSON files)
import discoveryAnimation from "./animations/discover.json"; // Replace with actual paths
// import planningAnimation from "./animations/planning.json";
import designAnimation from "./animations/design.json";
// import developmentAnimation from "./animations/development.json";
// import testingAnimation from "./animations/testing.json";
// import launchAnimation from "./animations/launch.json";

const approachSteps = [
  {
    step: "01",
    title: "Discovery",
    lottie: discoveryAnimation,
    description:
      "We start by understanding your business goals, target audience, and project requirements through in-depth discussions and research.",
    color: "from-blue-500/20 to-blue-500/5",
    dotColor: "bg-blue-500",
  },
  {
    step: "02",
    title: "Planning",
    lottie: discoveryAnimation,
    description:
      "Our team creates a detailed project plan, including timelines, milestones, and technology stack recommendations.",
    color: "from-purple-500/20 to-purple-500/5",
    dotColor: "bg-purple-500",
  },
  {
    step: "03",
    title: "Design",
    lottie:designAnimation ,
    description:
      "We design intuitive user interfaces and experiences that align with your brand and engage your users.",
    color: "from-pink-500/20 to-pink-500/5",
    dotColor: "bg-pink-500",
  },
  {
    step: "04",
    title: "Development",
    lottie: discoveryAnimation,
    description:
      "Our developers bring the design to life using best practices and modern technologies.",
    color: "from-green-500/20 to-green-500/5",
    dotColor: "bg-green-500",
  },
  {
    step: "05",
    title: "Testing",
    lottie: discoveryAnimation,
    description:
      "We conduct thorough testing to ensure the application is bug-free and performs optimally across devices.",
    color: "from-yellow-500/20 to-yellow-500/5",
    dotColor: "bg-yellow-500",
  },
  {
    step: "06",
    title: "Launch & Support",
    lottie: discoveryAnimation,
    description:
      "We deploy your application and provide ongoing support and maintenance as needed.",
    color: "from-indigo-500/20 to-indigo-500/5",
    dotColor: "bg-indigo-500",
  },
];

const OurApproach = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const stepRefs = useRef([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Update progress based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setProgress(value);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  // Calculate fill height for the timeline
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a structured approach to deliver exceptional results at every stage of your project
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Vertical timeline for large screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200/50 -ml-px rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-primary/70 rounded-full"
              style={{ height: fillHeight }}
            />
          </div>

          {approachSteps.map((step, index) => {
            const stepProgress = useTransform(
              scrollYProgress,
              [index / approachSteps.length, (index + 0.5) / approachSteps.length],
              [0, 1]
            );
            
            return (
              <motion.div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`relative mb-16 lg:mb-28 flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                {/* Timeline dot for large screens */}
                <div className="hidden lg:block absolute left-1/2 -ml-3.5 top-1/2 -mt-3.5 w-7 h-7 rounded-full bg-white border-4 border-primary z-10 shadow-lg" />
                
                <div className="lg:w-1/2 lg:px-8 mb-8 lg:mb-0">
                  <motion.div 
                    className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-100"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center mb-5">
                      <div className={`w-16 h-16 rounded-full ${step.color.split(' ')[0]} flex items-center justify-center text-2xl font-bold text-gray-800 mb-0 mr-4 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br ${step.color} opacity-70"></div>
                        <span className="relative z-10">{step.step}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    
                    {/* Progress indicator for mobile */}
                    <div className="lg:hidden mt-6 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full ${step.dotColor}`}
                        style={{ width: stepProgress }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </div>
                
                <div className="lg:w-1/2 lg:px-8">
                  <motion.div 
                    className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-[280px] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                      {step.lottie ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                          className="h-full w-full"
                        >
                          <Lottie
                            animationData={step.lottie}
                            loop={true}
                            autoplay={true}
                            aria-label={`${step.title} animation`}
                            className="h-full w-full"
                          />
                        </motion.div>
                      ) : (
                        <div className="text-center p-4 text-gray-500">
                          Animation not available
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;