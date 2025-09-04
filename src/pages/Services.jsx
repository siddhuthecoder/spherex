import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
    icon: CodeBracketIcon,
    featured: true,
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

  const displayedServices = showAllServices ? services : services.filter(service => service.featured);

  if (selectedService) {
    const Icon = selectedService.icon;
    
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => setSelectedService(null)}
            className="flex items-center text-primary mb-8 hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Services
          </button>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-primary to-primary-dark p-8 text-white flex flex-col justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold mb-4">{selectedService.title}</h1>
                <p className="text-white/90 mb-6">{selectedService.description}</p>
                <button className="btn bg-white text-primary hover:bg-gray-100 w-full md:w-auto">
                  Get a Free Consultation
                </button>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <p className="text-gray-600">{selectedService.details.overview}</p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.details.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Technologies We Use</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.details.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 border-t">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to get started with {selectedService.title}?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today to discuss your project and how we can help you achieve your goals with our {selectedService.title.toLowerCase()} services.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="btn btn-primary">
                    Get a Free Quote
                  </button>
                  <button className="btn btn-secondary">
                    Contact Our Team
                  </button>
                </div>
              </div>
            </div>
          </div>
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

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={service.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <a 
                      href={`/services/${service.id}`}
                      className="inline-flex items-center text-primary font-medium group"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedService(service);
                        window.history.pushState({}, '', `/services/${service.id}`);
                      }}
                    >
                      Learn more
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {!showAllServices && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setShowAllServices(true)}
                className="inline-flex items-center text-primary font-medium group"
              >
                View all services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you bring your ideas to life with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn btn-primary">
              Get a Free Consultation
            </button>
            <button className="btn btn-secondary">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
