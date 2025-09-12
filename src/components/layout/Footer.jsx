import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const product = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile Apps', path: '/services/mobile-app' },
    { name: 'AI Solutions', path: '/services/ai' },
    { name: 'Blockchain', path: '/services/blockchain' },
    { name: 'UI/UX Design', path: '/services/ui-ux' },
    { name: 'Cloud Solutions', path: '/services/cloud' },
    { name: 'Consulting', path: '/services/consulting' },
    { name: 'Maintenance', path: '/services/maintenance' },
  ];

  const solutions = [
    { name: 'E-commerce', path: '/solutions/ecommerce' },
    { name: 'SaaS Platforms', path: '/solutions/saas' },
    { name: 'Enterprise Apps', path: '/solutions/enterprise' },
    { name: 'Startup Solutions', path: '/solutions/startup' },
    { name: 'Digital Transformation', path: '/solutions/digital-transformation' },
    { name: 'API Development', path: '/solutions/api' },
    { name: 'Database Design', path: '/solutions/database' },
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about#team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const resources = [
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/docs/api' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Best Practices', path: '/best-practices' },
    { name: 'Community', path: '/community' },
    { name: 'Support', path: '/support' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Security', path: '/security' },
    { name: 'Compliance', path: '/compliance' },
  ];


  return (
    <footer className="bg-[#141413] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - Product */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-black font-bold text-sm">SX</span>
              </div>
              <span className="text-xl font-bold">SphereX</span>
            </div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Product</h3>
            <ul className="space-y-3">
              {product.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Solutions */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company & Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Legal & Support */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} SphereX. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Status</span>
              <span className="text-gray-400 text-sm">Support</span>
              <span className="text-gray-400 text-sm">Security</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
