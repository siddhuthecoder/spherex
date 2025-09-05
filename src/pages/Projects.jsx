import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/layout/Footer';

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
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  useEffect(() => {
    if (projectId) {
      const project = projects.find(p => p.id === parseInt(projectId));
      setSelectedProject(project || null);
    } else {
      setSelectedProject(null);
    }
  }, [projectId]);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  if (selectedProject) {
    // Get category display name
    const categoryName = categories.find(cat => cat.id === selectedProject.category)?.name || selectedProject.category;
    
    // Get category icon based on project type
    const getCategoryIcon = (category) => {
      switch(category) {
        case 'web': return '🌐';
        case 'mobile': return '📱';
        case 'ai': return '🤖';
        case 'blockchain': return '⛓️';
        case 'iot': return '🔌';
        default: return '🚀';
      }
    };
    
    return (
      <div className="min-h-screen">
          {/* Backdrop Pattern */}
          <div className="fixed inset-0 "></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* Back Button */}
          <motion.button 
            onClick={() => navigate('/projects')}
            className="group flex items-center text-gray-600 hover:text-gray-900 my-16 transition-colors duration-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">Back to Projects</span>
          </motion.button>
          
          {/* Project Header */}
          <motion.header
      className="relative mb-24 text-center py-12 px-4 bg-gradient-to-b from-gray-50 to-white rounded-3xl shadow-xl border border-gray-100/50 backdrop-blur-sm max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1], delay: 0.1 }}
    >
      {/* Background decorative element */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30 opacity-50" />
      </div>

      {/* Icon Container */}
      <motion.div
        className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl  /90 shadow-md border border-gray-100/50 mb-8 backdrop-blur-sm"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
      >
        <span className="text-2xl md:text-3xl text-blue-600">{getCategoryIcon(selectedProject.category)}</span>
      </motion.div>

      {/* Category Tag */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase bg-blue-100/80 text-blue-800 shadow-sm hover:bg-blue-200/80 transition-colors duration-300">
          {categoryName}
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-700 to-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {selectedProject.title}
      </motion.h1>

      {/* Description and Metadata */}
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          {selectedProject.description}
        </p>
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
          <span>
            <span className="font-semibold text-gray-700">Client:</span> Confidential
          </span>
          <span className="text-gray-300">•</span>
          <span>
            <span className="font-semibold text-gray-700">Year:</span> 2023
          </span>
        </div>
      </motion.div>

      {/* Decorative underline effect */}
      <motion.div
        className="mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      />
    </motion.header>

          {/* Project Hero Image */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className="relative   rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-auto max-h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* Project Details */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <motion.div 
                className="md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                  <div className="space-y-6 text-gray-700">
                    <p>
                      This project was designed to address specific challenges in the {categoryName} space, 
                      providing innovative solutions through cutting-edge technology and thoughtful design. 
                      Our approach combined technical excellence with user-centered design principles to 
                      deliver a seamless and impactful experience.
                    </p>
                    <p>
                      {selectedProject.description} The implementation leveraged modern development 
                      practices and a robust technology stack to ensure scalability, performance, 
                      and maintainability.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="  rounded-xl shadow-sm border border-gray-100 p-6 sticky top-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Category</dt>
                      <dd className="mt-1 text-gray-900">{categoryName}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Type</dt>
                      <dd className="mt-1 text-gray-900">Custom Development</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Technologies</dt>
                      <dd className="mt-1">
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag, i) => (
                            <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </dd>
                    </div>
                  </dl>
                </div>
              </motion.div>
            </div>

            {/* Technology Stack */}
            <motion.section 
              className="mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Built with Modern Technologies
                </h2>
                <p className="text-gray-600">
                  We leveraged a powerful technology stack to ensure optimal performance, 
                  scalability, and maintainability for this project.
                </p>
              </div>
              
              <div className="  rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {selectedProject.tags.map((tech, index) => {
                    const techLogos = {
                      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                      'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
                      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                      'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
                      'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                      'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
                      'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
                      'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
                      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
                      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                      'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
                      'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
                      'OpenAI': 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
                      'Ethereum': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg',
                      'Solidity': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg',
                      'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
                      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                      'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
                      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                      'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                      'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
                      'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
                      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
                      'Spring': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
                      'Go': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
                      'Rust': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
                      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                      'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
                      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                      'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
                      'GitLab': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
                    };

                    return (
                      <motion.div 
                        key={index}
                        className="group flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex-shrink-0 w-8 h-8   rounded-md flex items-center justify-center shadow-sm border border-gray-100">
                          <img 
                            src={techLogos[tech] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg'} 
                            alt={tech}
                            className="w-5 h-5 object-contain"
                            onError={(e) => {
                              e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg';
                            }}
                          />
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                          {tech}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div 
              className="relative bg-gray-900 rounded-2xl overflow-hidden py-16 px-6 sm:py-20 sm:px-12 lg:px-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
              
              <div className="relative max-w-3xl mx-auto text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Have a project in mind?
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help bring your ideas to life with our expertise and innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900   hover:bg-gray-50 shadow-sm transition-colors duration-200"
                    whileHover={{ y: -2, boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.1)' }}
                  >
                    Get in Touch
                  </motion.a>
                  <motion.button
                    onClick={() => navigate('/projects')}
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-white bg-transparent hover: /10 transition-colors duration-200"
                    whileHover={{ y: -2 }}
                  >
                    View All Projects
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
     );
   }

  return (
    <div className="min-h-screen relative">
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
      <section className="pt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio across different technologies and industries
            </p>
          </div>
        </div>
      </section>

      {/* Design Separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="  px-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Filter Tabs */}
      <div className="sticky top-14 z-50  backdrop-blur-sm  py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setVisibleProjects(6);
                }}
                className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

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
                    className="  rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                      <button 
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className="inline-flex items-center text-primary font-medium group"
                      >
                        View Case Study
                        <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
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
      <section className="py-20 bg-gradient-to-r from-primary to-primary-white text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you bring your ideas to life with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn   text-primary hover:bg-gray-100">
              Get a Free Quote
            </button>
            <button className="btn border-2 border-white text-white hover: /10">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Projects;
