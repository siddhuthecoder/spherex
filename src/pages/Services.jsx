import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  CpuChipIcon, 
  CubeIcon, 
  PaintBrushIcon, 
  CloudIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    id: 'product-redesign',
    title: 'Product Redesign',
    description: 'Revamp existing products',
    icon: PaintBrushIcon,
    featured: true,
    keywords: ['UX Improvement', 'Visual Refresh', 'Performance Optimization', 'Feature Enhancement'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    details: {
      overview: 'We create responsive, scalable, and secure web applications tailored to your business needs. Our full-stack development expertise ensures seamless integration with your existing systems.',
      features: [
        'Custom web application development',
        'E-commerce solutions',
        'Progressive Web Apps (PWAs)',
        'API development & integration',
        'CMS implementation',
        'Performance optimization'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL']
    }
  },
  {
    id: 'product-discovery',
    title: 'Product Discovery',
    description: 'Define your product strategy',
    icon: CpuChipIcon,
    featured: true,
    keywords: ['Market Research', 'User Research', 'Product Strategy', 'Requirements Definition'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    details: {
      overview: 'We build high-performance mobile applications that deliver exceptional user experiences across both iOS and Android platforms.',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Backend integration',
        'Maintenance & support'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    }
  },
  {
    id: 'concept-creation',
    title: 'Concept Creation',
    description: 'Transform ideas into reality',
    icon: CodeBracketIcon,
    featured: true,
    keywords: ['Ideation', 'Concept Development', 'Innovation', 'Strategic Planning'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    details: {
      overview: 'We implement cutting-edge AI solutions to automate processes, gain insights from data, and enhance decision-making.',
      features: [
        'Machine learning models',
        'Natural language processing',
        'Computer vision',
        'Predictive analytics',
        'Chatbots & virtual assistants',
        'AI strategy consulting'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Computer Vision', 'NLP']
    }
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
    icon: CodeBracketIcon,
    featured: true,
    keywords: ['Custom Development', 'E-commerce', 'Progressive Web Apps', 'API Integration'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    details: {
      overview: 'We create responsive, scalable, and secure web applications tailored to your business needs. Our full-stack development expertise ensures seamless integration with your existing systems.',
      features: [
        'Custom web application development',
        'E-commerce solutions',
        'Progressive Web Apps (PWAs)',
        'API development & integration',
        'CMS implementation',
        'Performance optimization'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL']
    }
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    icon: DevicePhoneMobileIcon,
    featured: true,
    keywords: ['Native Development', 'Cross-platform', 'UI/UX Design', 'App Store Optimization'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    details: {
      overview: 'We build high-performance mobile applications that deliver exceptional user experiences across both iOS and Android platforms.',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Backend integration',
        'Maintenance & support'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    }
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Leverage the power of artificial intelligence to transform your business operations.',
    icon: CpuChipIcon,
    featured: true,
    keywords: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    details: {
      overview: 'We implement cutting-edge AI solutions to automate processes, gain insights from data, and enhance decision-making.',
      features: [
        'Machine learning models',
        'Natural language processing',
        'Computer vision',
        'Predictive analytics',
        'Chatbots & virtual assistants',
        'AI strategy consulting'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Computer Vision', 'NLP']
    }
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    description: 'Secure and transparent blockchain solutions for various industries.',
    icon: CubeIcon,
    featured: true,
    keywords: ['Smart Contracts', 'DApp Development', 'Tokenization', 'DeFi Solutions'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    details: {
      overview: 'We develop decentralized applications and smart contracts on leading blockchain platforms.',
      features: [
        'Smart contract development',
        'DApp development',
        'Tokenization',
        'Blockchain consulting',
        'NFT marketplaces',
        'DeFi solutions'
      ],
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'Polygon', 'Binance Smart Chain']
    }
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience.',
    icon: PaintBrushIcon,
    featured: false,
    keywords: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    details: {
      overview: 'We create user-centered designs that are not only visually appealing but also highly functional and intuitive.',
      features: [
        'User research & testing',
        'Wireframing & prototyping',
        'UI/UX design',
        'Design systems',
        'Usability audits',
        'Interaction design'
      ],
      technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Framer']
    }
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services for your applications.',
    icon: CloudIcon,
    featured: false,
    keywords: ['Cloud Migration', 'Serverless Architecture', 'Containerization', 'DevOps Automation'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    details: {
      overview: 'We help businesses migrate to the cloud and optimize their cloud infrastructure for performance and cost-efficiency.',
      features: [
        'Cloud migration',
        'Serverless architecture',
        'Containerization',
        'DevOps automation',
        'Cloud security',
        'Cost optimization'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
    }
  },
];

const Services = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [showAllServices, setShowAllServices] = useState(false);
  useEffect(() => {
    if (serviceId) {
      const service = services.find(s => s.id === serviceId);
      setSelectedService(service || null);
    } else {
      setSelectedService(null);
    }
  }, [serviceId]);

  // Force re-render when component mounts
  useEffect(() => {
    // This ensures the component properly initializes when navigating to /services
    if (!serviceId) {
      setSelectedService(null);
      setShowAllServices(false);
    }
  }, []);

  const displayedServices = showAllServices ? services : services.filter(service => service.featured);

  if (selectedService) {
    const Icon = selectedService.icon;
    
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          {/* Back Button */}
          <motion.button 
            onClick={() => navigate('/services')}
            className="flex items-center text-gray-600 hover:text-gray-900 my-12 group transition-colors duration-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Services
          </motion.button>
          
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-8 shadow-lg">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {selectedService.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {selectedService.description}
            </p>
          </motion.div>

          {/* Overview Section */}
          <motion.div 
            className="max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="  rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-indigo-500 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Overview</h2>
                <p className="text-gray-600 text-xl leading-relaxed text-center max-w-3xl mx-auto mb-12">
                  {selectedService.details.overview}
                </p>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedService.details.features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <CheckCircleIcon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technology Stack Section */}
          <motion.div 
            className="max-w-6xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-yellow-500">Toolkit</span>
              </h2>
              <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We use cutting-edge technologies and tools to deliver exceptional results
              </p>
            </div>
            
            <div className="  rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {selectedService.details.technologies.map((tech, index) => {
                    // Technology logos mapping
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
                      'Computer Vision': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
                      'NLP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                      'Ethereum': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg',
                      'Solidity': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg',
                      'Web3.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/web3js/web3js-original.svg',
                      'IPFS': 'https://upload.wikimedia.org/wikipedia/commons/1/10/IPFS-logo-1024-ice-text.png',
                      'Polygon': 'https://cryptologos.cc/logos/polygon-matic-logo.png',
                      'Binance Smart Chain': 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
                      'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
                      'Sketch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg',
                      'Adobe XD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg',
                      'InVision': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/invision/invision-original.svg',
                      'Framer': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg',
                      'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
                      'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
                      'Google Cloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
                      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                      'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
                      'Terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg'
                    };

                    return (
                      <motion.div 
                        key={index}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="w-16 h-16   rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                          <img 
                            src={techLogos[tech] || `https://via.placeholder.com/64x64/4F46E5/FFFFFF?text=${tech.charAt(0)}`}
                            alt={tech}
                            className="w-10 h-10 object-contain"
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/64x64/4F46E5/FFFFFF?text=${tech.charAt(0)}`;
                            }}
                          />
                        </div>
                        <h3 className="text-gray-800 font-semibold text-sm">
                          {tech}
                        </h3>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="  rounded-3xl p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to get started with <span className="text-yellow-500">{selectedService.title}</span>?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project and how we can help you achieve your goals with our {selectedService.title.toLowerCase()} services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a Free Quote
                </motion.button>
                <motion.button 
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:text-gray-900 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Our Team
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl">
              We offer a comprehensive range of digital solutions to help your business grow and thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="space-y-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            {displayedServices.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={service.id}
                  className="  rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className={`flex flex-col lg:flex-row ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content Side */}
                    <motion.div 
                      className="lg:w-1/2 p-12 flex flex-col justify-center"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    >
                      <motion.h2 
                        className="text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                      >
                        {service.title}
                      </motion.h2>
                      <motion.p 
                        className="text-gray-600 text-lg mb-8"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                      >
                        {service.description}
                      </motion.p>
                      
                      {/* Keywords */}
                      <motion.div 
                        className="flex flex-wrap gap-3 mb-8"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                      >
                        {service.keywords.map((keyword, keywordIndex) => (
                          <motion.span 
                            key={keywordIndex}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ 
                              duration: 0.2, 
                              delay: index * 0.1 + 0.6 + keywordIndex * 0.05 
                            }}
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "#fef3c7",
                              transition: { duration: 0.15 }
                            }}
                          >
                            {keyword}
                          </motion.span>
                        ))}
                      </motion.div>
                      
                      {/* Learn More Link */}
                      <motion.button 
                        onClick={() => navigate(`/services/${service.id}`)}
                        className="inline-flex items-center text-yellow-500 font-medium text-lg group"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.7 }}
                        whileHover={{ 
                          x: 5,
                          transition: { duration: 0.15 }
                        }}
                      >
                        Learn more
                        <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </motion.button>
                    </motion.div>
                    
                    {/* Image Side */}
                    <motion.div 
                      className="lg:w-1/2 h-[400px]"
                      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    >
                      <div className="h-80 lg:h-full overflow-hidden rounded-r-2xl lg:rounded-r-2xl lg:rounded-l-none">
                        <motion.img 
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.05 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {!showAllServices && (
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.button 
                onClick={() => setShowAllServices(true)}
                className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium group transition-colors duration-200"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.15 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                View all services
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24  ">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Have a project in mind?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Let's discuss how we can help you bring your ideas to life with our expert services.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.button 
                className="px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.15 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Consultation
              </motion.button>
              <motion.button 
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors duration-200"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.15 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
