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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[black]">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase mb-4">
          How We Work
        </h2>

        {/* Description */}
        <p className="text-white text-base sm:text-lg mb-12">
          <span className="text-purple-700 font-medium">
            Our structured development process delivers consistent results through clear phases and transparent collaboration.
          </span>{" "}
          We break complex projects into manageable steps, ensuring quality at every stage while maintaining open communication throughout.
        </p>

        {/* Steps */}
        <div className="relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-start mb-12 last:mb-0 relative"
            >
              {/* Timeline Circle and Line */}
              <div className="flex flex-col items-center mr-6">
                {/* Circle with Number */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-purple-700 bg-purple-700 text-white font-bold text-lg z-10">
                  {step.number}
                </div>
                {/* Connecting Line (not for the last step) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-10 left-5 w-0.5 h-[calc(100%-2.5rem)] bg-purple-500" />
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-white text-base sm:text-lg">
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