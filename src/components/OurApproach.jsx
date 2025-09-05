import React from "react";
import { Users, Target, Database, ThumbsUp, Headphones, Workflow } from "lucide-react";

const approaches = [
  {
    icon: <Users className="w-10 h-10 text-orange-500" />,
    title: "Open and Honest Dialogue",
    desc: "We build lasting partnerships through transparent communication. No hidden agendas – just clear, straightforward discussions about your needs and our capabilities.",
  },
  {
    icon: <Target className="w-10 h-10 text-orange-500" />,
    title: "Strategic Vision",
    desc: "Before writing any code, we analyze your workflow, users, and market position. This foundation helps us create solutions that truly serve your business needs.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Active Management",
    desc: "Our leadership team stays involved throughout your project. From kickoff to delivery, you’ll have direct access to decision-makers who guide your project’s success.",
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-orange-500" />,
    title: "Simplicity First",
    desc: "Complex technology doesn’t mean complicated processes. We keep communication clear, documentation accessible, and progress transparent.",
  },
  {
    icon: <Headphones className="w-10 h-10 text-orange-500" />,
    title: "Post-launch Support",
    desc: "We stay with you after your project goes live. We provide training, maintenance, and quick responses when you need help or want to make changes.",
  },
  {
    icon: <Workflow className="w-10 h-10 text-orange-500" />,
    title: "Deep Testing",
    desc: "Users get a smooth experience from day one. We test on real devices to catch problems before launch, so there won’t be any “surprises” waiting for you.",
  },
];

const OurApproach = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Approach
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto my-4 rounded"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          What sets us apart is how we work with clients. We combine technical excellence
          with business understanding to create lasting partnerships. Our transparent
          communication and collaborative mindset ensure solutions that deliver ongoing value.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-left border hover:shadow-lg transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
