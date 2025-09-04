import { motion } from 'framer-motion';
import { BuildingOfficeIcon, RocketLaunchIcon, LightBulbIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const stats = [
  { label: 'Projects Completed', value: '250+' },
  { label: 'Happy Clients', value: '150+' },
  { label: 'Team Members', value: '50+' },
  { label: 'Years of Experience', value: '8+' },
];

const values = [
  {
    name: 'Innovation',
    description: 'We embrace change and constantly seek innovative solutions to complex problems.',
    icon: LightBulbIcon,
  },
  {
    name: 'Excellence',
    description: 'We are committed to delivering exceptional quality in everything we do.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Collaboration',
    description: 'We believe in the power of teamwork and building strong partnerships.',
    icon: UserGroupIcon,
  },
  {
    name: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and ethical practices.',
    icon: BuildingOfficeIcon,
  },
];

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'Visionary leader with over 15 years of experience in technology and business strategy.'
  },
  {
    name: 'Sarah Williams',
    role: 'CTO',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    bio: 'Technology expert specializing in software architecture and emerging technologies.'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Designer',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    bio: 'Creative designer passionate about creating intuitive and beautiful user experiences.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Senior Developer',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    bio: 'Full-stack developer with expertise in modern web technologies and cloud solutions.'
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
            <p className="text-xl text-white/90">
              We are a team of passionate technologists dedicated to helping businesses thrive in the digital age through innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
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
              <div className="bg-gray-200 rounded-xl aspect-video"></div>
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
      <section className="py-20 bg-white">
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

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The talented individuals behind our success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="h-64 bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                  <div className="flex space-x-3 mt-4">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Want to join our team?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and innovation.
            </p>
            <button className="btn btn-primary">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our expert solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn bg-white text-primary hover:bg-gray-100">
              Get in Touch
            </button>
            <button className="btn border-2 border-white text-white hover:bg-white/10">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
