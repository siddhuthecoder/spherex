

/* ----------------------------
   Pricing Component
   - Default export: Pricing
   - Uses the named export FAQList below
   ----------------------------*/
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, XMarkIcon, ChevronDownIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline';

const plans = [
  {
    name: 'Starter',
    price: 999,
    description: 'Perfect for small businesses getting started with digital presence',
    features: [
      '5 Pages Website',
      'Responsive Design',
      'Basic SEO',
      'Contact Form',
      '1 Year Hosting',
      'Basic Support',
      '3 Revisions',
      '1 Month Free Support',
    ],
    mostPopular: false,
  },
  {
    name: 'Professional',
    price: 2499,
    description: 'Ideal for growing businesses with more advanced needs',
    features: [
      'Up to 15 Pages Website',
      'Responsive Design',
      'Advanced SEO',
      'Contact & Newsletter Forms',
      '2 Years Hosting',
      'Priority Support',
      'Unlimited Revisions',
      '3 Months Free Support',
      'Basic E-commerce',
      'Social Media Integration',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 4999,
    description: 'Custom solutions for large businesses with complex requirements',
    features: [
      'Unlimited Pages',
      'Custom Design',
      'Advanced SEO & Analytics',
      'API Integrations',
      '3 Years Hosting',
      '24/7 Premium Support',
      'Unlimited Revisions',
      '6 Months Free Support',
      'Advanced E-commerce',
      'CRM Integration',
      'Custom Development',
      'Dedicated Account Manager',
    ],
    mostPopular: false,
  },
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
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

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
          
          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-white p-1 rounded-xl shadow-sm border border-gray-100">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'bg-black text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${billingCycle === 'yearly' ? 'bg-black text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Yearly Billing (20% off)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => {
              const isSelected = selectedPlan && selectedPlan.name === plan.name;
              const price = billingCycle === 'yearly' ? Math.floor(plan.price * 12 * 0.8) : plan.price;

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
                      <span>MOST POPULAR</span>
                    </div>
                  )}

                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-gray-500 mt-2 text-sm">{plan.description}</p>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-extrabold text-gray-900">${price}</span>
                        <span className="ml-2 text-gray-500">
                          /{billingCycle === 'yearly' ? 'year' : 'project'}
                          {billingCycle === 'yearly' && (
                            <span className="ml-1 text-xs bg-black/10 text-black px-2 py-0.5 rounded-full">20% OFF</span>
                          )}
                        </span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <div className="text-sm text-gray-400 mt-1">
                          <span className="line-through">${plan.price * 12}/year</span>
                          <span className="ml-2 text-green-600 font-medium">Save ${Math.floor(plan.price * 12 * 0.2)}</span>
                        </div>
                      )}
                    </div>

                    <button 
                      onClick={() => setSelectedPlan(plan)}
                      className={`w-full py-3.5 px-6 rounded-lg font-medium transition-all duration-300 ${
                        isSelected 
                          ? 'bg-black text-white hover:bg-gray-800 shadow-md' 
                          : plan.mostPopular 
                            ? 'bg-black text-white hover:bg-gray-800 shadow-md' 
                            : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-black'
                      }`}
                    >
                      {isSelected ? 'Selected' : 'Get Started'}
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

                      {plan.name === 'Starter' && (
                        <div className="pt-4 mt-4 border-t border-gray-100">
                          <p className="text-gray-400 text-sm mb-2">Not included:</p>
                          <div className="flex items-center text-gray-400">
                            <XMarkIcon className="w-4 h-4 mr-2 text-red-400" />
                            <span className="text-sm">E-commerce</span>
                          </div>
                          <div className="flex items-center text-gray-400 mt-1.5">
                            <XMarkIcon className="w-4 h-4 mr-2 text-red-400" />
                            <span className="text-sm">Advanced Analytics</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

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
      {(selectedPlan || selectedServices.length > 0) && (
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
      )}

      
    </div>
  );
};

export default Pricing;
