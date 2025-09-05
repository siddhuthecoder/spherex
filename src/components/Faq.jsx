import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

/* ----------------------------
   FAQItem + FAQList Component
   - Exported as named export: FAQList
   - Accepts `faqs` prop (array of {question, answer})
   - If no `faqs` prop is provided it falls back to a default list
   ----------------------------*/
export const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div 
      className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 mb-6 overflow-hidden"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/50 transition-all duration-500"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100/20 to-pink-100/20 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
      
      <button
        className="relative z-10 flex border-b-[6px] justify-between items-center w-full text-left p-4 focus:outline-none"
        onClick={onClick}
      >
        <div className="flex-1 pr-6">
          <h3 className="text-lg font-semibold  text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-relaxed">
            {question}
          </h3>
        </div>
        
        <motion.div 
          className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
          animate={{ 
            rotate: isOpen ? 45 : 0,
            scale: isOpen ? 1.1 : 1
          }} 
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? (
            <MinusIcon className="w-5 h-5 text-white" />
          ) : (
            <PlusIcon className="w-5 h-5 text-white" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden relative z-10"
          >
            <div className="px-8 pb-8 pt-0">
              <div className="border-t border-gray-100 ">
                <p className="text-gray-600 leading-relaxed text-base">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQList = ({ faqs: propFaqs }) => {
  const defaultFaqs = [
    {
      question: "Who's behind SphereX?",
      answer: "SphereX (pxlsgrds) was founded by Tejas GK. We specialize in website and mobile app design, development, and user experience optimization. Our goal is to deliver high-quality, tailored solutions to businesses looking for top-notch digital experiences.",
    },
    {
      question: 'How does your process work?',
      answer: "First, we'll start with a call to fully understand your needs and answer any questions. Then, we begin working on your project, providing updates every 48 hours. This ensures you stay in the loop and can give feedback at every stage. We refine until you are completely satisfied.",
    },
    {
      question: 'How does the delivery process work?',
      answer: 'For businesses looking for an easy setup, we handle everything and ensure the project is ready to use. For tech-savvy clients, we can deliver the project through your preferred method, whether a shared link, direct file transfer, or repository access.',
    },
    {
      question: "What if I don't like the website or app?",
      answer: "No worries! We work iteratively, refining the project based on your feedback until you're 100% satisfied.",
    },
    {
      question: 'How will I pay?',
      answer: 'Payments are handled through bank transfers, giving you complete control over transactions.',
    },
    {
      question: 'How will we communicate?',
      answer: 'We primarily communicate via WhatsApp, Telegram, or email—whatever works best for you. Additionally, we provide a shared dashboard to track progress and updates. If needed, we can schedule weekly meetings for deeper discussions.',
    },
    {
      question: 'How does maintenance work?',
      answer: 'All projects include 30 days of free maintenance, covering bug fixes, text updates, and one feature request. After that, you can extend maintenance with a fixed monthly fee. You can pause or cancel anytime, offering a flexible approach to ongoing support.',
    },
    {
      question: 'Can I have maintenance for just one month?',
      answer: 'Yes! You can opt for maintenance for any duration that suits your needs, whether a month or longer. You can also resume it later if needed.',
    },
    {
      question: 'Why choose SphereX over freelancers?',
      answer: 'Unlike working with freelancers, we offer a streamlined experience without the hassle of managing multiple people. Our team ensures consistency, high-quality results, and a seamless development process from start to finish.',
    },
    {
      question: 'Why choose SphereX over hiring a full-time developer?',
      answer: 'Hiring a full-time developer comes with recruitment, onboarding, and long-term costs. With us, you get expert development ready to start within a week—no extra costs, no delays. We deliver high-quality solutions efficiently and affordably.',
    },
    {
      question: 'How quickly can you get started?',
      answer: 'We typically begin within a week. After an initial call to align on goals, we start immediately.',
    },
    {
      question: 'Are there any refunds?',
      answer: 'Due to the high-quality nature of our work, we offer a 75% refund within the first week of service. No refunds are available for completed projects.',
    },
    {
      question: 'What does it mean to pause or cancel maintenance?',
      answer: "You can pause your maintenance plan at any time by notifying us via WhatsApp, Telegram, or email. While paused, you won't be charged, and your spot in the queue is reserved. If you cancel, you'll lose your spot, but you can always return later if needed.",
    },
  ];

  const faqs = propFaqs && propFaqs.length ? propFaqs : defaultFaqs;
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-100/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Frequently Asked Questions
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Did you have other{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              questions?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We answered some of the most common questions we get asked about our services, process, and how we work with our clients.
          </p>
        </motion.div>

        {/* FAQ Accordion with Border */}
        <motion.div 
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Dashed Border Container */}
          <div className="relative border-2 border-dashed border-gray-300 rounded-3xl p-8 md:p-12 bg-white/50 backdrop-blur-sm">
            {/* Animated border elements */}
            <motion.div 
              className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500/20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut'
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-indigo-500/20"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: 1
              }}
            />
            
            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};


export default FAQList;