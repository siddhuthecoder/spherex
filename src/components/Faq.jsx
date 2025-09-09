import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, MinusIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

/* ----------------------------
   FAQItem + FAQList Component
   - Exported as named export: FAQList
   - Accepts `faqs` prop (array of {question, answer})
   - If no `faqs` prop is provided it falls back to a default list
   ----------------------------*/
export const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div 
      className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      <button
        className="w-full text-left p-3 md:p-6 focus:outline-none focus:ring-2 focus:ring-black/10 rounded-xl"
        onClick={onClick}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-semibold text-gray-900 leading-relaxed">
              {question}
            </h3>
          </div>
          
          <motion.div 
            className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center transition-all duration-300"
            animate={{ 
              rotate: isOpen ? 180 : 0
            }} 
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDownIcon className="w-4 h-4 text-white" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="border-t border-gray-100 pt-4">
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
      answer: "SphereX  was founded by Siddartha Yernagula. We specialize in website and mobile app design, development, and user experience optimization. Our goal is to deliver high-quality, tailored solutions to businesses looking for top-notch digital experiences.",
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
    <section className="py-20 bg-[#f0eee6]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-black/5 text-black rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Got Questions?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Find answers to the most common questions about our services, process, and how we work with our clients.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};


export default FAQList;