import React, { useState } from "react";

const faqData = [
  {
    question: "What is the difference between fixed pricing and retainer model?",
    answer: "Fixed pricing is a one-time cost for a specific deliverable. Retainer model provides ongoing services on a monthly basis for flexibility and priority.",
  },
  {
    question: "Can I switch from fixed pricing to retainer later?",
    answer: "Yes, you can transition from fixed pricing to retainer model if you find you need continuous support or faster turnaround.",
  },
  {
    question: "What if I don’t use all my hours in the retainer plan?",
    answer: "Unused hours don’t roll over, but you can always adjust your tier to better match your usage for future months.",
  },
  {
    question: "Is there a minimum commitment for the retainer?",
    answer: "Yes, we require a minimum 1-month commitment to start. However, you can cancel or adjust after that at any time.",
  },
];

const FAQ=()=> {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-12 px-4 sm:px-8 lg:px-20">
      <h2 className="text-4xl  text-center mb-8 text-purple-200">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-purple-700 rounded-xl  bg-opacity-80"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-white  rounded-t-xl transition-all duration-300"
            >
              <span className="font-semibold text-lg">{item.question}</span>
              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-3 text-purple-100 border-t border-purple-700 bg-purple-900 text-sm transition-all duration-500">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default FAQ
