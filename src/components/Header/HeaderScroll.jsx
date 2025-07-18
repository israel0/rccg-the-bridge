import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import NavigationScroll from './NavigationScroll';
import LogoDark from './LogoDark';
import ActionButtons from './ActionButtons';

const HeaderScroll = ({ isScrolledPastHero }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const shouldHide = isHome && !isScrolledPastHero;

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Add scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  if (shouldHide) return null;

  return (
    <header className={`sticky top-0 z-50 bg-white text-primary-dark transition-all duration-300 ${hasScrolled ? 'shadow-md' : ''}`}>
      <div className="container-max section-padding">
        <div className="flex items-center justify-between py-3">
          {/* Left Navigation (hidden on mobile) */}
          <div className="hidden md:flex flex-1">
            <NavigationScroll />
          </div>

           <Link to="/" className="block lg:hidden focus:outline-none focus:ring-2 focus:ring-primary rounded-md">
              <LogoDark />
            </Link>
          
          {/* Centered Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="hidden md:flex focus:outline-none focus:ring-2 focus:ring-primary rounded-md">
              <LogoDark />
            </Link>
          </div>
          
          {/* Right Action Buttons (hidden on mobile) */}
          <div className="hidden md:flex flex-1 justify-end">
            <ActionButtons />
          </div>
          
          {/* Mobile Hamburger Menu */}
          <button 
            className={`md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md transition-all ${isMenuOpen ? 'bg-gray-100' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="space-y-2">
              <span className={`block h-0.5 w-6 bg-primary-dark transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-primary-dark transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-primary-dark transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
        role="presentation"
      />
      
      {/* Mobile Menu Content */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-modal="true"
      >
        <div className="p-6 h-full flex flex-col">
         <div className="flex justify-between items-center mb-8">
  <div className="flex-1">
    <Link 
      to="/" 
      className="inline-block focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
      onClick={() => setIsMenuOpen(false)}
    >
      <LogoDark />
    </Link>
  </div>
  
  <button 
    className="p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md hover:bg-gray-100 transition-colors"
    onClick={() => setIsMenuOpen(false)}
    aria-label="Close menu"
  >
    <svg 
      className="w-6 h-6 text-primary-dark" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M6 18L18 6M6 6l12 12" 
      />
    </svg>
  </button>
</div>
          
          <nav className="flex-1">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="block py-3 px-4 text-lg font-medium text-primary-dark hover:bg-gray-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/branches"
                  className="block py-3 px-4 text-lg font-medium text-primary-dark hover:bg-gray-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Branches
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-3 px-4 text-lg font-medium text-primary-dark hover:bg-gray-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connect
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="mt-auto space-y-4 pt-8">
            <ActionButtons mobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderScroll;