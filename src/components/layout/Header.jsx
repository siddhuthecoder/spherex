import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  // Function to check if a link is active
  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? ' /95 backdrop-blur-md shadow-md py-5' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-black bg-clip-text text-transparent">
              SphereX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`relative font-medium  text-[20px] transition-colors duration-200 ${
                  isActiveLink(link.path)
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.name}
                {isActiveLink(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
            <Link 
              to="/get-proposal" 
              className="text-[20px] bg-black hover:bg-[#490000] text-white p-2 rounded-md hover:text-white mx-8"
            >
              Get Proposal
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
          }`}
        >
          <div className="flex flex-col space-y-4 mt-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`block py-2 border-b border-gray-100 transition-colors duration-200 ${
                  isActiveLink(link.path)
                    ? 'text-primary font-semibold'
                    : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/get-proposal" 
              className=" w-full mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Proposal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
