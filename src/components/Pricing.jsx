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
  { name: "Zen Pace", icon: "🎌️", desc: "Relaxed timeline" },
  { name: "Standard Flow", icon: "⏳", desc: "Balanced speed" },
  { name: "Express Lane", icon: "🏋️", desc: "Faster delivery" },
  { name: "Turbo Boost", icon: "🏎️", desc: "Priority handling" },
  { name: "Lightspeed", icon: "✨", desc: "Immediate focus" },
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

const Pricing=()=> {
  const [selectedTier, setSelectedTier] = useState("Zen Pace");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewMode, setViewMode] = useState("fixed");

  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-6xl  flex justify-center items-center mb-6">Pricing Models</div>
      <h2 className="text-lg  text-center mb-4">
        Choose between our fixed pricing packages or flexible retainer model
      </h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 ${viewMode === "fixed" ? "bg-purple-700" : "bg-purple-500"} text-white rounded-l font-semibold`}
          onClick={() => setViewMode("fixed")}
        >
          $ Fixed Pricing
        </button>
        <button
          className={`px-4 py-2 ${viewMode === "retainer" ? "bg-purple-700" : "bg-purple-500"} text-white rounded-r font-semibold`}
          onClick={() => setViewMode("retainer")}
        >
          Retainer Model
        </button>
      </div>

      {/* Fixed Pricing Section */}
      {viewMode === "fixed" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`border rounded-xl p-6 shadow-md flex flex-col justify-between bg-black bg-opacity-40 ${
                pkg.highlight ? "border-gray-600" : "border-gray-600"
              }`}
            >
              {pkg.highlight && (
                <div className="mb-2">
                  <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
              <p className="text-purple-200 mb-4">{pkg.description}</p>
              <p className="text-4xl font-bold mb-4">
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
              <button className="bg-purple-700 text-white py-2 rounded-md font-semibold hover:bg-purple-600">
                {pkg.button}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Retainer Model Section */}
      {viewMode === "retainer" && (
        <>
          <div className="bg-black bg-opacity-60 text-white rounded-xl shadow-xl p-6 max-w-5xl mx-auto mb-12 border border-purple-700">
            <h3 className="text-2xl font-bold text-center">Retainer Model</h3>
            <p className="text-center text-purple-300 mb-6">
              Select your preferred speed tier for monthly services
            </p>

            {/* Speed Tier Cards */}
            <div className="flex justify-around flex-wrap gap-3 mb-4">
              {retainerTiers.map((tier, index) => (
                <div
                  key={tier.name}
                  onClick={() => {
                    setSelectedIndex(index);
                    setSelectedTier(tier.name);
                  }}
                  className={`cursor-pointer border rounded-xl px-4 py-2  md:w-40 text-center shadow-md transition-transform duration-300  ${
                    selectedIndex === index
                      ? "border-red-500 bg-purple-800 scale-105"
                      : "border-purple-600 bg-purple-950"
                  }`}
                >
                  <div className="text-2xl">{tier.icon}</div>
                  <div className="font-semibold mt-1">{tier.name}</div>
                  <div className="text-xs text-purple-300">{tier.desc}</div>
                </div>
              ))}
            </div>

            {/* Dot Progress Bar */}
            <div
              className="relative w-full h-2 bg-purple-700 rounded-full mb-6 cursor-pointer"
              onClick={(e) => {
                const bar = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - bar.left;
                const newIndex = Math.floor((clickX / bar.width) * retainerTiers.length);
                setSelectedIndex(newIndex);
                setSelectedTier(retainerTiers[newIndex].name);
              }}
            >
              <div
                className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-300"
                style={{ left: `calc(${selectedIndex * 25}% - 6px)` }}
              >
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
              </div>
            </div>

            {/* Details Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-950 p-4 rounded-xl border border-purple-700">
                <h4 className="font-semibold mb-2 text-white">Pricing Details</h4>
                <p className="mb-2 text-purple-100">
                  Minimum Monthly Retainer <strong>$1,000</strong>
                </p>
                <p className="text-sm text-purple-300">
                  Our pricing starts at <strong>$1,000/month</strong>. Higher budgets enable faster delivery and greater flexibility.
                  <br /><br />
                  You can scale up or down anytime based on your evolving requirements. We’re here to support your growth.
                  <br /><br />
                  Please note: We only accept work within our areas of expertise. We ensure quality over quantity.
                </p>
              </div>
              <div className="bg-purple-950 p-4 rounded-xl border border-purple-700">
                <h4 className="font-semibold mb-2 text-white">Features</h4>
                <ul className="space-y-2 text-white">
                  <li>✔ 40-50 hours included</li>
                  <li>✔ Priority support</li>
                  <li>✔ Business hours</li>
                  <li>✔ Unlimited revisions</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-6">
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-500">
                Start {retainerTiers[selectedIndex].name} Retainer
              </button>
            </div>
          </div>

          {/* How It Works Section */}
          <section className="bg-black text-white py-4 px-4 sm:px-8 lg:px-20">
            <h2 className="text-3xl font-bold mb-2 text-purple-400 lg:ml-[130px]">How Our Retainer Works</h2>
            <div className="flex flex-col lg:ml-[130px]">
              {steps.map((step, idx) => (
                <div key={idx} className="flex">
                  <div className="w-6 md:h-6 flex  text-white  w-full">
                    <p className="bg-violet-700 w-4 h-4 rounded-full flex items-center justify-center text-sm">{idx + 1}</p><span> <p className="text-purple-100  text-lg mt-[-0.5px]">{step}</p></span>
                  </div>
                 
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
export default Pricing
