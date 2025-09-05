import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import HowWeWork from '../components/HowWeWork';
import OurApproach from '../components/OurApproach';
import Pricing from '../pages/Pricing';
import FAQList from '../components/Faq';
import IntegrationsHero from '../components/IntegrationHero';
import HeroSection from '../components/HeroSection';
// Sample data - replace with actual data
const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance.',
    icon: '👨‍💻',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
  },
  {
    title: 'AI Solutions',
    description: 'Leverage the power of artificial intelligence for your business needs.',
    icon: '🤖',
  },
  {
    title: 'Blockchain',
    description: 'Secure and transparent blockchain solutions for various industries.',
    icon: '⛓️',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience.',
    icon: '🎨',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services for your applications.',
    icon: '☁️',
  },
];

// const approachSteps = [
//   {
//     step: '01',
//     title: 'Discovery',
//     lottie: 'https://lottie.host/21ffa21c-a6e5-4d1a-8194-e69c14312618/Zre31harid.lottie',
//     description: 'We start by understanding your business goals, target audience, and project requirements through in-depth discussions and research.',
//   },
//   {
//     step: '02',
//     title: 'Planning',
//     lottie: 'https://lottie.host/21ffa21c-a6e5-4d1a-8194-e69c14312618/Zre31harid.lottie',
//     description: 'Our team creates a detailed project plan, including timelines, milestones, and technology stack recommendations.',
//   },
//   {
//     step: '03',
//     title: 'Design',
//     lottie: 'https://lottie.host/21ffa21c-a6e5-4d1a-8194-e69c14312618/Zre31harid.lottie',
//     description: 'We design intuitive user interfaces and experiences that align with your brand and engage your users.',
//   },
//   {
//     step: '04',
//     title: 'Development',
//     lottie: 'https://lottie.host/21ffa21c-a6e5-4d1a-8194-e69c14312618/Zre31harid.lottie',
//     description: 'Our developers bring the design to life using best practices and modern technologies.',
//   },
//   {
//     step: '05',
//     title: 'Testing',
//     lottie: 'https://lottie.host/21ffa21c-a6e5-4d1a-8194-e69c14312618/Zre31harid.lottie',
//     description: 'We conduct thorough testing to ensure the application is bug-free and performs optimally across devices.',
//   },
//   {
//     step: '06',
//     title: 'Launch & Support',
//     lottie: 'https://lottie.host/21ffa21c-a6e5-4d1a-8194-e69c14312618/Zre31harid.lottie',
//     description: 'We deploy your application and provide ongoing support and maintenance as needed.',
//   },
// ];

const Home = () => {
  return (
    <div className="min-h-screen u-display-s ">
      <HeroSection/>
   

      {/* Trusted By */}
      <section className="py-12 bg-[#f0eee6] ">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {['TechCorp', 'InnoVate', 'DigitalPlus', 'Nexus', 'Vertex'].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-700">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-20 bg-[#f0eee6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Digital Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-[18px]">
              We offer a wide range of services to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="  rounded-xl p-8 border-b-[6px] border-b-black/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-3xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-[18px]">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-primary font-medium group">
                  Learn more
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center text-primary font-medium group">
              View all services
              <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures we deliver high-quality solutions that meet your business objectives.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 to-transparent -ml-px"></div>

            {approachSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative mb-12 lg:mb-20 flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="lg:w-1/2 lg:px-8 mb-6 lg:mb-0">
                  <div className="  rounded-xl p-8 shadow-lg h-full">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:px-8">
                  <div className="  rounded-xl overflow-hidden shadow-lg">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center text-gray-400">
                   
                         <Lottie animationData={step.lottie} loop autoplay />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <OurApproach/>
      <HowWeWork/>
      <FAQList/>
      <Pricing/>
      <IntegrationsHero/>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#e7e3d2] to-primary-white ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our expert solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn   text-primary hover:bg-gray-100">
              Get in Touch
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/pricing" className="btn border-2 border-white  hover: /10">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;