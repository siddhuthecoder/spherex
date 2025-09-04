import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'web',
    description: 'A full-featured e-commerce platform with payment integration and inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '/projects/ecommerce-platform'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'mobile',
    description: 'A secure mobile banking application with biometric authentication and real-time transactions.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    link: '/projects/banking-app'
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    category: 'ai',
    description: 'A data visualization dashboard with AI-powered insights and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', 'D3.js', 'Python', 'TensorFlow'],
    link: '/projects/analytics-dashboard'
  },
  {
    id: 4,
    title: 'Blockchain Supply Chain',
    category: 'blockchain',
    description: 'A transparent supply chain solution built on blockchain technology.',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2028&q=80',
    tags: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS'],
    link: '/projects/supply-chain'
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    category: 'mobile',
    description: 'A comprehensive fitness tracking application with workout plans and nutrition guidance.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['Flutter', 'Firebase', 'Google Fit API'],
    link: '/projects/fitness-app'
  },
  {
    id: 6,
    title: 'Smart Home Control System',
    category: 'iot',
    description: 'An IoT-based smart home control system with mobile and voice control.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['React Native', 'Node.js', 'MQTT', 'Raspberry Pi'],
    link: '/projects/smart-home'
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'ai', name: 'AI & ML' },
  { id: 'blockchain', name: 'Blockchain' },
  { id: 'iot', name: 'IoT' },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 ">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl font-semibold">
              Explore our portfolio of successful projects and see how we've helped businesses transform their ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setVisibleProjects(6);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No projects found in this category</h3>
              <p className="text-gray-500">Check back later or browse our other categories.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                  <motion.div 
                    key={project.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 % 3 }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <a 
                        href={project.link} 
                        className="inline-flex items-center text-primary font-medium group"
                        onClick={(e) => {
                          e.preventDefault();
                          // Here you would typically navigate to the project detail page
                          alert(`Viewing details for ${project.title}`);
                        }}
                      >
                        View Case Study
                        <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {visibleProjects < filteredProjects.length && (
                <div className="text-center mt-12">
                  <button 
                    onClick={loadMore}
                    className="btn btn-primary"
                  >
                    Load More Projects
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you bring your ideas to life with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn bg-white text-primary hover:bg-gray-100">
              Get a Free Quote
            </button>
            <button className="btn border-2 border-white text-white hover:bg-white/10">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
