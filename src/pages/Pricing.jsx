

/* ----------------------------
   Pricing Component
   - Default export: Pricing
   - Uses the named export FAQList below
   ----------------------------*/
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, XMarkIcon, ChevronDownIcon, ArrowRightIcon, StarIcon, BoltIcon, RocketLaunchIcon, ScaleIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';

const plans = [
  {
    name: 'Basic Package',
    price: 2500,
    description: 'Perfect for small projects with clear requirements',
    features: [
      'Up to 5 pages/screens',
      '2 rounds of revisions',
      '2-3 week delivery',
      'Basic support',
    ],
    notIncluded: [
      'Priority support',
      'Rush delivery',
    ],
    mostPopular: false,
  },
  {
    name: 'Standard Package',
    price: 5000,
    description: 'Ideal for medium-sized projects',
    features: [
      'Up to 15 pages/screens',
      '3 rounds of revisions',
      '1-2 week delivery',
      'Priority support',
      'Advanced integrations',
    ],
    notIncluded: [
      'Rush delivery available',
    ],
    mostPopular: true,
  },
  {
    name: 'Premium Package',
    price: 10000,
    description: 'For complex projects with premium service',
    features: [
      'Unlimited pages/screens',
      'Unlimited revisions',
      '1 week delivery',
      '24/7 priority support',
      'Custom integrations',
      'Rush delivery included',
    ],
    notIncluded: [],
    mostPopular: false,
  },
];

const speedTiers = [
  {
    id: 'zen',
    name: 'Zen Pace',
    description: 'Relaxed timeline',
    icon: UserIcon,
    popular: false,
    price: 1000,
    hours: '5-8 hours',
    delivery: '2-3 weeks',
    response: '24-48 hours',
  },
  {
    id: 'standard',
    name: 'Standard Flow',
    description: 'Balanced speed',
    icon: ScaleIcon,
    popular: false,
    price: 2500,
    hours: '8-12 hours',
    delivery: '1-2 weeks',
    response: '12-24 hours',
  },
  {
    id: 'express',
    name: 'Express Lane',
    description: 'Faster delivery',
    icon: RocketLaunchIcon,
    popular: false,
    price: 4000,
    hours: '12-15 hours',
    delivery: '3-5 days',
    response: '6-12 hours',
  },
  {
    id: 'turbo',
    name: 'Turbo Boost',
    description: 'Priority handling',
    icon: ClockIcon,
    popular: false,
    price: 6000,
    hours: '15-20 hours',
    delivery: '1-3 days',
    response: '2-6 hours',
  },
  {
    id: 'lightspeed',
    name: 'Lightspeed',
    description: 'Immediate focus',
    icon: BoltIcon,
    popular: true,
    price: 8000,
    hours: '20+ hours',
    delivery: 'Same day',
    response: '1 hour',
  },
];

const retainerFeatures = [
  'Dedicated project manager',
  'Unlimited revisions',
  'Priority support access',
  'Monthly strategy calls',
  'Advanced integrations',
  'Custom development',
  '24/7 emergency support',
  'Scalable team allocation',
];

const retainerSteps = [
  'Choose your speed tier based on project urgency',
  'Pay the monthly retainer fee to reserve capacity',
  'Submit requests through our dedicated portal',
  'Receive deliverables within your chosen timeframe',
  'Adjust your tier month-to-month as needed',
  'Unlimited Projects: Work on multiple projects simultaneously',
  'Priority Support: Get faster responses and dedicated resources',
  'Scalable: Increase or decrease your retainer as your needs change',
];

const additionalServices = [
  { name: 'E-commerce Integration', description: 'Add online store functionality to your website', price: 999, popular: true },
  { name: 'SEO Package', description: 'Comprehensive search engine optimization services', price: 499, popular: false },
  { name: 'Content Management System', description: 'Easy-to-use CMS for managing your website content', price: 799, popular: true },
  { name: 'Mobile App Development', description: 'Native mobile app for iOS and Android', price: 2999, popular: false },
  { name: 'Website Maintenance', description: 'Monthly maintenance and updates', price: 99, popular: true },
  { name: 'Logo & Branding', description: 'Professional logo and brand identity design', price: 499, popular: false },
];

const Pricing = () => {
  const [pricingModel, setPricingModel] = useState('fixed');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedTier, setSelectedTier] = useState('lightspeed');

  const toggleService = (service) => {
    if (selectedServices.some((s) => s.name === service.name)) {
      setSelectedServices(selectedServices.filter((s) => s.name !== service.name));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const calculateTotal = () => {
    const planPrice = selectedPlan ? selectedPlan.price : 0;
    const servicesPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);
    return planPrice + servicesPrice;
  };

  return (
    <div className="min-h-screen bg-[#f0eee6] font-sans pb-12 px-4 sm:px-6 lg:px-8">
      {/* Hero + billing toggle (same as before) */}
      {/* Pricing plans (omitted for brevity in canvas preview) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-black bg-black/5 rounded-full mb-4">
              Simple, Transparent Pricing
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Select the plan that fits your business needs. No hidden fees, cancel anytime.
            </p>
          </div>
          
          {/* Pricing Model Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-white p-1 rounded-xl shadow-sm border border-gray-100">
              <button
                onClick={() => setPricingModel('fixed')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${pricingModel === 'fixed' ? 'bg-black text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Fixed Pricing
              </button>
              <button
                onClick={() => setPricingModel('retainer')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${pricingModel === 'retainer' ? 'bg-black text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Retainer Model
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {pricingModel === 'fixed' ? (
              <motion.div 
                key="fixed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
              >
                {plans.map((plan, index) => {
                  const isSelected = selectedPlan && selectedPlan.name === plan.name;
                  const price = plan.price;

                  return (
                    <motion.div 
                      key={plan.name} 
                      className={`relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border ${isSelected ? 'ring-2 ring-black' : 'border-gray-200'} ${plan.mostPopular ? 'border-black' : ''}`}
                      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      {plan.mostPopular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-semibold tracking-wide py-1.5 px-4 rounded-full shadow-md flex items-center">
                          <StarIcon className="w-3.5 h-3.5 mr-1.5" />
                          <span>Most Popular</span>
                        </div>
                      )}

                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                          <p className="text-gray-500 mt-2 text-sm">{plan.description}</p>
                        </div>

                        <div className="mb-8">
                          <div className="flex items-baseline">
                            <span className="text-4xl font-extrabold text-gray-900">${price.toLocaleString()}</span>
                            <span className="ml-2 text-gray-500">one-time</span>
                          </div>
                        </div>

                        <button 
                          onClick={() => setSelectedPlan(plan)}
                          className={`w-full py-3.5 px-6 rounded-lg font-medium transition-all duration-300 ${
                            isSelected 
                              ? 'bg-black text-white hover:bg-gray-800 shadow-md' 
                              : plan.mostPopular 
                                ? 'bg-black text-white hover:bg-gray-800 shadow-md border-2 border-black' 
                                : 'bg-white text-black hover:bg-gray-50 border-2 border-black hover:border-gray-700 shadow-md'
                          }`}
                        >
                          {isSelected ? 'Selected' : 'GET STARTED'}
                          <ArrowRightIcon className="w-4 h-4 ml-2 inline-block" />
                        </button>

                        <div className="mt-8 space-y-3.5">
                          {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-start">
                              <div className="bg-black/10 p-0.5 rounded-full mr-3 mt-0.5">
                                <CheckIcon className="w-4 h-4 text-black" />
                              </div>
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </div>
                          ))}

                          {plan.notIncluded && plan.notIncluded.length > 0 && (
                            <div className="pt-4 mt-4 border-t border-gray-100">
                              {plan.notIncluded.map((item, i) => (
                                <div key={i} className="flex items-center text-gray-500 mb-1.5">
                                  <XMarkIcon className="w-4 h-4 mr-2 text-gray-500" />
                                  <span className="text-sm">{item}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div 
                key="retainer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-7xl mx-auto"
              >
                {/* Retainer Model Header */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Retainer Model</h2>
                  <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    Select your preferred speed tier for monthly services. Higher tiers provide faster delivery and more dedicated resources.
                  </p>
                </div>

                {/* Speed Tiers - Enhanced Layout */}
                <div className="mb-16">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 px-4 md:px-12">
                    {speedTiers.map((tier, index) => {
                      const IconComponent = tier.icon;
                      const isSelected = selectedTier === tier.id;
                      
                      return (
                        <motion.div
                          key={tier.id}
                          className={`relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 border-2 ${
                            isSelected 
                              ? 'border-black shadow-xl scale-105' 
                              : tier.popular 
                                ? 'border-red-500 shadow-lg' 
                                : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                          }`}
                          onClick={() => setSelectedTier(tier.id)}
                          whileHover={{ y: -8 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {tier.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                              Most Popular
                            </div>
                          )}
                          
                          <div className="text-center">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto ${
                              isSelected ? 'bg-black' : 'bg-gray-100'
                            }`}>
                              <IconComponent className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                            </div>
                            
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{tier.name}</h3>
                            <p className="text-sm text-gray-500 mb-4">{tier.description}</p>
                            
                            {/* <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-500">Hours:</span>
                                <span className="font-medium text-gray-900">{tier.hours}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">Delivery:</span>
                                <span className="font-medium text-gray-900">{tier.delivery}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">Response:</span>
                                <span className="font-medium text-gray-900">{tier.response}</span>
                              </div>
                            </div> */}
                            
                            {/* <div className="mt-4 pt-4 border-t border-gray-100">
                              <div className="text-2xl font-bold text-gray-900">${tier.price.toLocaleString()}</div>
                              <div className="text-xs text-gray-500">per month</div>
                            </div> */}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Pricing Spectrum - Enhanced */}
                <div className="mb-16">
                  <motion.div 
                    className="max-w-4xl mx-auto px-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-visible">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-red-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                      
                      {/* Tier indicators */}
                      {speedTiers.map((tier, index) => {
                        // Adjust positioning to ensure all indicators are visible
                        const position = index === 0 ? 0 : index === speedTiers.length - 1 ? 100 : (index / (speedTiers.length - 1)) * 100;
                        const isSelected = selectedTier === tier.id;
                        
                        return (
                          <motion.div
                            key={tier.id}
                            className={`absolute top-0 w-4 h-4 rounded-full -mt-0.5 cursor-pointer transition-all duration-300 ${
                              isSelected 
                                ? 'bg-black shadow-lg scale-125' 
                                : tier.popular 
                                  ? 'bg-red-500 shadow-md' 
                                  : 'bg-gray-400 hover:bg-gray-600'
                            }`}
                            style={{ 
                              left: index === 0 ? '0%' : index === speedTiers.length - 1 ? '100%' : `${position}%`,
                              transform: index === 0 ? 'translateX(0)' : index === speedTiers.length - 1 ? 'translateX(-100%)' : 'translateX(-50%)',
                              zIndex: isSelected ? 10 : 1
                            }}
                            onClick={() => setSelectedTier(tier.id)}
                            whileHover={{ scale: 1.2 }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                          >
                            {/* Tooltip */}
                            <div className={`absolute bottom-full mb-2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                              index === 0 ? 'left-0' : index === speedTiers.length - 1 ? 'right-0' : 'left-1/2 transform -translate-x-1/2'
                            }`}>
                              {tier.name}: {tier.delivery}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                    
                    <div className="flex justify-between mt-4 text-sm">
                      <div className="text-left">
                        <span className="font-medium text-gray-600">Most Economical</span>
                        <div className="text-xs text-gray-500">2-3 weeks delivery</div>
                      </div>
                      <div className="text-right">
                        <span className="font-medium text-gray-600">Fastest Delivery</span>
                        <div className="text-xs text-gray-500">Same day delivery</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Selected Tier Details */}
                <motion.div 
                  key={selectedTier}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-lg mb-16"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {speedTiers.find(t => t.id === selectedTier)?.name} Retainer
                    </h3>
                    <p className="text-gray-500">
                      Perfect for {speedTiers.find(t => t.id === selectedTier)?.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Pricing Info */}
                    <div className="text-center lg:text-left">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Investment</h4>
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        ${speedTiers.find(t => t.id === selectedTier)?.price.toLocaleString()}
                      </div>
                      <p className="text-gray-500 mb-4">Monthly retainer</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between lg:justify-start lg:space-x-4">
                          <span className="text-gray-500">Hours included:</span>
                          <span className="font-medium">{speedTiers.find(t => t.id === selectedTier)?.hours}</span>
                        </div>
                        <div className="flex justify-between lg:justify-start lg:space-x-4">
                          <span className="text-gray-500">Delivery time:</span>
                          <span className="font-medium">{speedTiers.find(t => t.id === selectedTier)?.delivery}</span>
                        </div>
                        <div className="flex justify-between lg:justify-start lg:space-x-4">
                          <span className="text-gray-500">Response time:</span>
                          <span className="font-medium">{speedTiers.find(t => t.id === selectedTier)?.response}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="lg:col-span-2">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {retainerFeatures.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="bg-black/10 p-1 rounded-full mr-3 flex-shrink-0">
                              <CheckIcon className="w-4 h-4 text-black" />
                            </div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-300">
                      Start {speedTiers.find(t => t.id === selectedTier)?.name} Retainer
                    </button>
                  </div>
                </motion.div>

                {/* How Our Retainer Works */}
                <div className="bg-gray-50 rounded-3xl p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Our Retainer Works</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {retainerSteps.map((step, index) => (
                      <motion.div 
                        key={index} 
                        className="bg-white rounded-2xl p-6 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                          {index + 1}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{step}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">Need a custom solution? We can tailor a package to your specific needs.</p>
            <button className="mt-4 inline-flex items-center text-black font-medium hover:text-gray-800 transition-colors group">Request a Custom Quote
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className=" bg-white rounded-2xl shadow-sm  sm:mx-8 lg:mx-auto max-w-7xl px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-black bg-black/5 rounded-full mb-4">
            Add-ons
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Enhance Your Experience</h2>
          <p className="text-gray-500 text-lg">
            Customize your plan with these powerful add-ons tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {additionalServices.map((service, index) => {
            const isSelected = selectedServices.some((s) => s.name === service.name);

            return (
              <motion.div 
                key={service.name} 
                className={`relative bg-white rounded-xl p-6 transition-all duration-300 border-2 ${
                  isSelected 
                    ? 'border-black bg-black/5 shadow-md' 
                    : 'border-gray-100 hover:border-black/20 hover:shadow-sm'
                }`} 
                whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)' }} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {service.popular && (
                  <div className="absolute -top-2 right-4 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Popular
                  </div>
                )}
                
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-gray-900">${service.price}</span>
                        <span className="text-sm text-gray-500 ml-1">one-time</span>
                      </div>
                      <button 
                        onClick={() => toggleService(service)}
                        className={`py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isSelected 
                            ? 'bg-black text-white hover:bg-gray-800 shadow-sm' 
                            : 'bg-white text-gray-800 hover:bg-gray-50 border-2 border-gray-200 hover:border-black'
                        }`}
                      >
                        {isSelected ? 'Added' : 'Add to Plan'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Order Summary */}
      {/* {(selectedPlan || selectedServices.length > 0) && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-10" 
          initial={{ y: 100 }} 
          animate={{ y: 0 }} 
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-gray-900">Order Summary</h3>
                <p className="text-sm text-gray-600">{selectedPlan ? `1 x ${selectedPlan.name} Plan` : 'No plan selected'}{selectedServices.length > 0 && ` + ${selectedServices.length} add-ons`}</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-2xl font-bold text-gray-900">${calculateTotal()}</p>
                  {billingCycle === 'yearly' && selectedPlan && (<p className="text-xs text-emerald-600 font-medium">You save ${Math.floor(selectedPlan.price * 12 * 0.2)} with annual billing</p>)}
                </div>

                <button className="px-6 py-3 bg-black text-white font-medium rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </motion.div>
      )} */}

      
    </div>
  );
};

export default Pricing;
