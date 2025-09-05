import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { 
  BuildingOfficeIcon, 
  RocketLaunchIcon, 
  LightBulbIcon, 
  UserGroupIcon,
  CodeBracketIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  ServerStackIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import logoAnimation from '../components/animations/logo.json';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const stats = [
  { 
    label: 'Projects Completed', 
    value: '250+',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-cyan-400'
  },
  { 
    label: 'Happy Clients', 
    value: '150+',
    icon: SparklesIcon,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    label: 'Team Members', 
    value: '50+',
    icon: UserGroupIcon,
    color: 'from-amber-500 to-yellow-400'
  },
  { 
    label: 'Years of Experience', 
    value: '8+',
    icon: ShieldCheckIcon,
    color: 'from-emerald-500 to-teal-400'
  },
];

const values = [
  {
    name: 'Innovation',
    description: 'We embrace change and constantly seek innovative solutions to complex problems.',
    icon: LightBulbIcon,
    color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
    delay: 0.1
  },
  {
    name: 'Excellence',
    description: 'We are committed to delivering exceptional quality in everything we do.',
    icon: RocketLaunchIcon,
    color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
    delay: 0.2
  },
  {
    name: 'Collaboration',
    description: 'We believe in the power of teamwork and building strong partnerships.',
    icon: UserGroupIcon,
    color: 'text-amber-500 bg-amber-50 dark:bg-amber-900/20',
    delay: 0.3
  },
  {
    name: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and ethical practices.',
    icon: BuildingOfficeIcon,
    color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20',
    delay: 0.4
  },
];



const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32  text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About SphereX</h1>
            <p className="text-xl ">
              We are a team of passionate technologists dedicated to helping businesses thrive in the digital age through innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20  ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-3 flex items-center justify-center">
                <Lottie 
                  animationData={logoAnimation}
                  loop={true}
                  autoplay={true}
                  rendererSettings={{
                    preserveAspectRatio: 'xMidYMid slice'
                  }}
                  style={{ width: '100%', height: '400px', maxWidth: '400px' }}
                  onComplete={() => {}}
                  onLoopComplete={() => {}}
                  isPaused={false}
                />
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Driven by Innovation, Powered by Technology</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, SphereX started as a small team of passionate developers with a vision to transform businesses through technology. Today, we've grown into a full-service digital agency serving clients worldwide.
              </p>
              <p className="text-gray-600 mb-8">
                Our journey has been marked by innovation, dedication, and a relentless pursuit of excellence. We take pride in our ability to understand complex business challenges and deliver solutions that drive real results.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">
                  Our Services
                </button>
                <button className="btn btn-secondary">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20  ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">These core values guide everything we do at SphereX.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={value.name}
                  className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.name}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-white text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our expert solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn   text-primary hover:bg-gray-100">
              Get in Touch
            </button>
            <button className="btn border-2 border-white text-white hover: /10">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
