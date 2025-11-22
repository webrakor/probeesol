import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ShinyButton from '../components/ShinyButton';
import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  // WhatsApp booking function
  const bookCall = () => {
    const message = "Hello, I want to book a call";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // For mobile menu
      if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }

      // For desktop services dropdown
      if (servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(target) &&
        !target.closest('.services-button')) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    // Close menus first
    setIsMenuOpen(false);
    setIsServicesOpen(false);

    // If we're not on home page, navigate to home with hash
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }

    // If we're on home page, scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback: wait a bit for components to load then try again
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleDesktopServiceClick = (id: string) => {
    // Don't close dropdown immediately on desktop
    setTimeout(() => {
      setIsServicesOpen(false);
    }, 100);
    scrollToSection(id);
  };

  return (
    <header className="px-4 py-4 bg-white dark:bg-gray-900 text-[#111111] dark:text-gray-100 relative z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="ProBee Icon Black"
              className="h-8 w-auto dark:hidden"
            />
            <img
              src="/images/logo-1.png"
              alt="ProBee Icon White"
              className="h-8 w-auto hidden dark:block"
            />
            <span className="text-[#111111] dark:text-white text-2xl font-bold">
              ProBee
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative" ref={servicesDropdownRef}>
            <button
              className="services-button text-gray-700 dark:text-gray-300 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition flex items-center gap-1"
              onClick={toggleServices}
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                <button
                  onClick={() => handleDesktopServiceClick('advantages')}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition hover:text-[#3b82f6] dark:hover:text-[#60a5fa]"
                >
                  Features
                </button>
                <button
                  onClick={() => handleDesktopServiceClick('pricing')}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition hover:text-[#3b82f6] dark:hover:text-[#60a5fa]"
                >
                  Pricing Plans
                </button>
                <button
                  onClick={() => handleDesktopServiceClick('quote')}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition hover:text-[#3b82f6] dark:hover:text-[#60a5fa]"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => handleDesktopServiceClick('faq')}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition hover:text-[#3b82f6] dark:hover:text-[#60a5fa]"
                >
                  FAQ
                </button>
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition">About</Link>
          <Link to="/blog" className="text-gray-700 dark:text-gray-300 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition">Blog</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <ShinyButton onClick={bookCall}>Book Call</ShinyButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button className="menu-button text-gray-700 dark:text-gray-300 p-1" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Simple Dropdown */}
      <div className={`mobile-menu md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="px-4 py-4 space-y-4">

          {/* Services Dropdown */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
            <button
              className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition py-2"
              onClick={toggleServices}
            >
              <span className="font-medium">Services</span>
              <ChevronDown size={18} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isServicesOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
              <div className="ml-4 space-y-2 mt-2">
                <button
                  onClick={() => scrollToSection('advantages')}
                  className="block w-full text-left py-2 text-gray-600 dark:text-gray-400 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full text-left py-2 text-gray-600 dark:text-gray-400 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection('quote')}
                  className="block w-full text-left py-2 text-gray-600 dark:text-gray-400 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="block w-full text-left py-2 text-gray-600 dark:text-gray-400 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition"
                >
                  FAQ
                </button>
              </div>
            </div>
          </div>

          {/* Simple Links */}
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition font-medium border-b border-gray-200 dark:border-gray-700"
          >
            About
          </Link>

          <Link
            to="/blog"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition font-medium border-b border-gray-200 dark:border-gray-700"
          >
            Blog
          </Link>

          {/* CTA Button */}
          <div className="pt-4">
            <ShinyButton
              className="w-full justify-center"
              onClick={() => {
                setIsMenuOpen(false);
                bookCall();
              }}
            >
              Get Free Consultation
            </ShinyButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;