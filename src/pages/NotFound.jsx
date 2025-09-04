import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Page not found
          </h2>
          <p className="mt-2 text-gray-600">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2 text-gray-400 group-hover:text-gray-500" />
              Go Back
            </button>
          </div>
          
          <div className="mt-12">
            <h3 className="text-sm font-medium text-gray-500">Or try these pages</h3>
            <div className="mt-4 flex justify-center space-x-6">
              <Link to="/services" className="text-sm font-medium text-primary hover:text-primary-dark">
                Services
              </Link>
              <Link to="/projects" className="text-sm font-medium text-primary hover:text-primary-dark">
                Projects
              </Link>
              <Link to="/about" className="text-sm font-medium text-primary hover:text-primary-dark">
                About Us
              </Link>
              <Link to="/contact" className="text-sm font-medium text-primary hover:text-primary-dark">
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
