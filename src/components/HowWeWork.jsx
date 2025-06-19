import React from 'react';

const HowWeWork = () => {
  const steps = [
    {
      number: "1",
      title: "ANALYSIS",
      description: "Translating your business goals into actionable technical requirements and strategic project roadmaps.",
    },
    {
      number: "2",
      title: "DESIGN",
      description: "Architecting scalable solutions aligned with your business objectives and future growth plans.",
    },
    {
      number: "3",
      title: "DEVELOPMENT",
      description: "Building your solution using proven technologies to rapid market delivery and business agility.",
    },
    {
      number: "4",
      title: "QUALITY ASSURANCE",
      description: "Rigorously validating every feature to ensure flawless performance in real-world business scenarios.",
    },
    {
      number: "5",
      title: "DEPLOYMENT",
      description: "Ensuring seamless transition to production with zero disruption to your business operations.",
    },
    {
      number: "6",
      title: "SUPPORT",
      description: "Proactively maintaining and optimizing to maximize business value and ROI.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-[black] font-jost relative">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="md:text-5xl text-[30px] font-extrabold mb-12 flex items-center justify-center text-center bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent animate-scale-in tracking-tight drop-shadow-lg transition-all duration-500 hover:scale-105">
          <span className="md:mr-1 text-[30px] md:text-4xl text-purple-400 transition-transform duration-500 hover:rotate-12">🚀</span> How We Work
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg mb-12 text-center animate-fade-in transition-all duration-500 hover:text-purple-300">
          <span className="text-purple-400 font-medium">
            Our structured development process delivers consistent results through clear phases and transparent collaboration.
          </span>{" "}
          We break complex projects into manageable steps, ensuring quality at every stage while maintaining open communication throughout.
        </p>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-start relative animate-fade-in  p-6 backdrop-blur-md bg-[#100D20]/40 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer hover:bg-gradient-to-b from-[#030115] via-[#100D20] to-[#2C2A3D]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline Circle and Line */}
              <div className="flex flex-col items-center mr-6">
                {/* Circle with Number */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-purple-400 bg-purple-700 text-white font-bold text-xl z-10 transition-transform duration-300 hover:scale-110">
                  {step.number}
                </div>
                {/* Connecting Line (not for the last step) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-12 left-6 w-0.5 h-[calc(100%-3rem)] bg-gradient-to-b from-purple-500 to-transparent" />
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase mb-3 animate-slide-in tracking-wide drop-shadow-md transition-all duration-300 hover:text-purple-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed tracking-wide transition-all duration-300 hover:translate-x-2 hover:text-purple-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;