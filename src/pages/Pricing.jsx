

/* ----------------------------
   Pricing Component
   - Default export: Pricing
   - Uses the named export FAQList below
   ----------------------------*/
  import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

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
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero + billing toggle (same as before) */}
      <section className="relative py-24 md:py-32 overflow-hidden ">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40')] bg-cover bg-center opacity-40"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold bg-white/10 backdrop-blur-md  rounded-full mb-6 border border-white/10 shadow-sm">Pricing Plans</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Flexible Pricing for Every Business</h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto">Discover plans tailored to your needs with transparent pricing and no hidden fees.</p>

            <div className="mt-10 inline-flex items-center bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-sm">
              <button onClick={() => setBillingCycle('monthly')} className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-white text-indigo-900 shadow-md' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
                Monthly Billing
              </button>
              <button onClick={() => setBillingCycle('yearly')} className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${billingCycle === 'yearly' ? 'bg-white text-indigo-900 shadow-md' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
                Yearly Billing
                <span className="ml-2 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">Save 20%</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing plans (omitted for brevity in canvas preview) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => {
              const isSelected = selectedPlan && selectedPlan.name === plan.name;
              const price = billingCycle === 'yearly' ? Math.floor(plan.price * 12 * 0.8) : plan.price;

              return (
                <motion.div key={plan.name} className={`relative rounded-2xl overflow-hidden transition-all duration-300 bg-white border ${isSelected ? 'ring-2 ring-indigo-500 shadow-xl' : 'border-gray-100 shadow-sm'} ${plan.mostPopular ? 'md:-translate-y-4' : ''}`} whileHover={{ y: -6, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                  {plan.mostPopular && (
                    <div className="absolute  top-0 right-0 mt-2 transform -translate-x-1/2  bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold uppercase tracking-wide py-2 px-6 rounded-full shadow-md ">Most Popular</div>
                  )}

                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                      <p className="text-gray-500 mt-2 text-sm leading-relaxed">{plan.description}</p>
                    </div>

                    <div className="mb-6">
                      <div className="text-3xl font-bold text-gray-900">${price}
                        <span className="text-sm font-normal text-gray-400">{billingCycle === 'yearly' ? '/year' : '/project'}</span>
                      </div>
                      {billingCycle === 'yearly' && (<div className="text-xs text-gray-400 line-through mt-1">${plan.price * 12}/year</div>)}
                    </div>

                    <button onClick={() => setSelectedPlan(plan)} className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${isSelected ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md' : plan.mostPopular ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-md' : 'bg-gray-50 text-gray-800 hover:bg-gray-100 border border-gray-200'}`}>
                      {isSelected ? 'Selected' : 'Select Plan'}
                    </button>

                    <div className="mt-8 space-y-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <div className="bg-indigo-50 p-1 rounded-full mr-3 mt-0.5"><CheckIcon className="w-4 h-4 text-indigo-600" /></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}

                      {plan.name === 'Starter' && (
                        <div className="pt-4 mt-4 border-t border-gray-100">
                          <p className="text-gray-400 text-sm mb-2">Not included:</p>
                          <div className="flex items-start text-gray-400"><XMarkIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" /><span className="text-sm">E-commerce</span></div>
                          <div className="flex items-start text-gray-400 mt-2"><XMarkIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" /><span className="text-sm">Advanced Analytics</span></div>
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
            <button className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors group">Request a Custom Quote
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full mb-4">Add-ons</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Enhance Your Plan</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">Customize your plan with these powerful add-ons for a complete solution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {additionalServices.map((service, index) => {
              const isSelected = selectedServices.some((s) => s.name === service.name);

              return (
                <motion.div key={service.name} className={`border rounded-xl p-6 transition-all duration-300 bg-white ${isSelected ? 'border-indigo-500 bg-indigo-50/50 shadow-md' : 'border-gray-100 hover:border-indigo-200 hover:shadow-sm'}`} whileHover={{ y: -4, boxShadow: '0 6px 12px rgba(0,0,0,0.05)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                      <p className="text-gray-500 mt-1 text-sm leading-relaxed">{service.description}</p>
                    </div>
                    {service.popular && (<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">Popular</span>)}
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="text-lg font-bold text-gray-900">${service.price}<span className="text-sm font-normal text-gray-500 ml-1">/one-time</span></div>
                    <button onClick={() => toggleService(service)} className={`py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${isSelected ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm' : 'bg-gray-50 text-gray-800 hover:bg-gray-100 border border-gray-200'}`}>{isSelected ? 'Added' : 'Add'}</button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Order Summary */}
      {(selectedPlan || selectedServices.length > 0) && (
        <motion.div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-10" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
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

                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      
    </div>
  );
};

export default Pricing;
