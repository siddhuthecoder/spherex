import React, { useState } from "react";

const packages = [
  {
    title: "Basic Package",
    description: "Perfect for small projects with clear requirements",
    price: "$2,500",
    features: ["Up to 5 pages/screens", "2 rounds of revisions", "2-3 week delivery", "Basic support"],
    missing: ["Priority support", "Rush delivery"],
    button: "GET STARTED",
  },
  {
    title: "Standard Package",
    description: "Ideal for medium-sized projects",
    price: "$5,000",
    features: ["Up to 15 pages/screens", "3 rounds of revisions", "1-2 week delivery", "Priority support", "Advanced integrations"],
    missing: ["Rush delivery available"],
    button: "GET STARTED",
    highlight: true,
  },
  {
    title: "Premium Package",
    description: "For complex projects with premium service",
    price: "$10,000",
    features: ["Unlimited pages/screens", "Unlimited revisions", "1 week delivery", "24/7 priority support", "Custom integrations", "Rush delivery included"],
    missing: [],
    button: "GET STARTED",
  },
];

const retainerTiers = [
  { name: "Zen Pace", icon: "🎌️", desc: "Relaxed timeline", price: "$1,000", features: ["40-50 hours included", "Priority support", "Business hours", "Unlimited revisions"] },
  { name: "Standard Flow", icon: "⏳", desc: "Balanced speed", price: "$2,000", features: ["30-40 hours included", "Priority support", "Business hours", "Unlimited revisions"] },
  { name: "Express Lane", icon: "🏋️", desc: "Faster delivery", price: "$3,000", features: ["20-30 hours included", "Priority support", "Business hours", "Unlimited revisions"] },
  { name: "Turbo Boost", icon: "🏎️", desc: "Priority handling", price: "$4,000", features: ["15-20 hours included", "Dedicated manager + VIP line", "24/7 access", "Unlimited revisions"] },
  { name: "Lightspeed", icon: "✨", desc: "Immediate focus", price: "$5,000", features: ["10-15 hours included", "Executive priority support", "24/7 with 1hr response", "Unlimited revisions"] },
];

const steps = [
  "Choose your speed tier based on project urgency",
  "Pay the monthly retainer fee to reserve capacity",
  "Submit requests through our dedicated portal",
  "Receive deliverables within your chosen timeframe",
  "Adjust your tier month-to-month as needed",
  "Unlimited Projects: Work on multiple projects simultaneously",
  "Priority Support: Get faster responses and dedicated resources",
  "Scalable: Increase or decrease your retainer as your needs change",
];

const Pricing = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewMode, setViewMode] = useState("fixed");

  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-6xl font-extrabold text-center mb-6 text-purple-300 drop-shadow-[0_2px_5px_rgba(168,85,247,0.9)]">
        Pricing Models
      </div>
      <h2 className="text-lg text-center mb-4 text-purple-200 drop-shadow-sm">
        Choose between our fixed pricing packages or flexible retainer model
      </h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
        {["fixed", "retainer"].map((mode, i) => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            className={`px-6 py-2 font-semibold transition-all duration-300 backdrop-blur-md border border-purple-300/40
              ${viewMode === mode
                ? "bg-gradient-to-r from-purple-400/30 to-purple-600/40 shadow-lg ring-1 ring-white/20 scale-105 text-white"
                : "bg-gradient-to-r from-purple-200/20 to-purple-400/20 text-purple-100"
              }
              ${i === 0 ? "rounded-l-xl" : "rounded-r-xl"}`}
          >
            {mode === "fixed" ? "$ Fixed Pricing" : "Retainer Model"}
          </button>
        ))}
      </div>

      {/* Fixed Pricing Section */}
      {viewMode === "fixed" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="border rounded-xl p-6 shadow-xl bg-black bg-opacity-40 border-gray-600"
            >
              {pkg.highlight && (
                <div className="mb-2">
                  <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold mb-1 drop-shadow-sm">{pkg.title}</h3>
              <p className="text-purple-200 mb-4">{pkg.description}</p>
              <p className="text-4xl font-extrabold mb-4 text-purple-300 drop-shadow-[0_1px_3px_rgba(168,85,247,0.8)]">
                {pkg.price} <span className="text-base font-normal">one-time</span>
              </p>
              <ul className="mb-4 space-y-2">
                {pkg.features.map((f, i) => (
                  <li key={i} className="text-white">✔ {f}</li>
                ))}
                {pkg.missing.map((m, i) => (
                  <li key={i} className="text-gray-400">✘ {m}</li>
                ))}
              </ul>
              <button className="flex justify-center items-center w-full 
  bg-purple-900 backdrop-blur-md border border-purple-300/30 
  text-white py-2 rounded-md font-semibold 
  shadow-md hover:bg-purple-300/20 transition-all duration-300">
  {pkg.button}
</button>

            </div>
          ))}
        </div>
      )}

      {/* Retainer Model Section */}
      {viewMode === "retainer" && (
        <>
          <div className="relative bg-gradient-to-br from-purple-400/20 via-white/10 to-purple-800/10 backdrop-blur-xl text-white rounded-2xl shadow-2xl p-6 max-w-5xl mx-auto mb-12 border border-purple-300/30 ring-1 ring-white/10">
            <h3 className="text-3xl font-extrabold text-center text-purple-100 drop-shadow-md">
              Retainer Model
            </h3>
            <p className="text-center text-purple-200 mb-6">Select your preferred speed tier for monthly services</p>

            {/* Speed Tiers */}
            <div className="flex justify-around flex-wrap gap-3 mb-4">
              {retainerTiers.map((tier, index) => (
                <div
                  key={tier.name}
                  onClick={() => setSelectedIndex(index)}
                  className={`cursor-pointer border rounded-xl px-4 py-2 md:w-40 text-center transition-transform duration-300 ${selectedIndex === index
                    ? "bg-purple-700/70 border-purple-300 scale-105 shadow-xl"
                    : "bg-purple-900/30 border-purple-500"
                    }`}
                >
                  <div className="text-2xl">{tier.icon}</div>
                  <div className="font-semibold mt-1 drop-shadow-sm">{tier.name}</div>
                  <div className="text-xs text-purple-200">{tier.desc}</div>
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="relative w-full h-2 bg-purple-700/60 rounded-full mb-6 cursor-pointer"
              onClick={(e) => {
                const bar = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - bar.left;
                const newIndex = Math.floor((clickX / bar.width) * retainerTiers.length);
                setSelectedIndex(newIndex);
              }}>
              <div
                className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-300"
                style={{ left: `calc(${selectedIndex * 25}% - 6px)` }}
              >
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg ring-2 ring-white/40"></div>
              </div>
            </div>

            {/* Tier Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-900/20 backdrop-blur-md p-4 rounded-2xl border border-purple-300/30 shadow-inner">
                <h4 className="font-semibold mb-2 text-white">Pricing Details</h4>
                <p className="mb-2 text-purple-100">
                  Monthly Retainer: <strong>{retainerTiers[selectedIndex].price}</strong>
                </p>
                <p className="text-sm text-purple-200">
                  Our pricing starts at $1,000/month. Higher budgets enable faster delivery and greater flexibility.
You can scale up or down anytime based on your evolving requirements , we're here to support your growth.
Please note: We only accept work within our areas of expertise. We ensure quality over quantity.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-900/20 backdrop-blur-md p-4 rounded-2xl border border-purple-300/30 shadow-inner">
                <h4 className="font-semibold mb-2 text-white">Features</h4>
                <ul className="space-y-2 text-white">
                  {retainerTiers[selectedIndex].features.map((feature, idx) => (
                    <li key={idx}>✔ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Start Button */}
            <div className="text-center mt-6">
              <button className="px-6 py-2 rounded-xl font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-400/30 to-purple-700/30 backdrop-blur-md border border-purple-300/30 shadow-md hover:shadow-xl hover:scale-105 ring-1 ring-white/10">
                Start {retainerTiers[selectedIndex].name} Retainer
              </button>
            </div>
          </div>

          {/* Steps */}
          <section className="text-white px-6 sm:px-8 lg:px-20 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4 text-purple-300 lg:ml-[230px] drop-shadow-md">
              How Our Retainer Works
            </h2>
            <div className="flex flex-col lg:ml-[230px] gap-y-1">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="lg:mt-[-27px] bg-violet-700 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-3 shadow-md ring-2 ring-white/20">
                    {idx + 1}
                  </div>
                  <p className="text-purple-100 text-[17px] leading-tight lg:mt-[-10px] drop-shadow-sm">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Pricing;
