import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Database, ThumbsUp, Headphones, Workflow } from "lucide-react";

const approaches = [
  {
    icon: <Users className="w-10 h-10 text-black" />,
    title: "Open and Honest Dialogue",
    desc: "We build lasting partnerships through transparent communication. No hidden agendas – just clear, straightforward discussions about your needs and our capabilities.",
  },
  {
    icon: <Target className="w-10 h-10 text-black" />,
    title: "Strategic Vision",
    desc: "Before writing any code, we analyze your workflow, users, and market position. This foundation helps us create solutions that truly serve your business needs.",
  },
  {
    icon: <Database className="w-10 h-10 text-black" />,
    title: "Active Management",
    desc: "Our leadership team stays involved throughout your project. From kickoff to delivery, you’ll have direct access to decision-makers who guide your project’s success.",
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-black" />,
    title: "Simplicity First",
    desc: "Complex technology doesn’t mean complicated processes. We keep communication clear, documentation accessible, and progress transparent.",
  },
  {
    icon: <Headphones className="w-10 h-10 text-black" />,
    title: "Post-launch Support",
    desc: "We stay with you after your project goes live. We provide training, maintenance, and quick responses when you need help or want to make changes.",
  },
  {
    icon: <Workflow className="w-10 h-10 text-black" />,
    title: "Deep Testing",
    desc: "Users get a smooth experience from day one. We test on real devices to catch problems before launch, so there won’t be any “surprises” waiting for you.",
  },
];

const OurApproach = () => {
  return (
    <section className="py-16 bg-[#f0eee6] px-4 ">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Approach
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-orange-500 mx-auto my-4 rounded"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-gray-600 text-[18px] max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            What sets us apart is how we work with clients. We combine technical excellence
            with business understanding to create lasting partnerships. Our transparent
            communication and collaborative mindset ensure solutions that deliver ongoing value.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {approaches.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#E6DFCD] shadow-md rounded-2xl p-6 text-left border hover:shadow-lg transition md:p-8"
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="mb-4"
                whileHover={{ 
                  rotate: 5, 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                {item.icon}
              </motion.div>
              <motion.h3 
                className="text-lg font-semibold text-gray-900 mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproach;
