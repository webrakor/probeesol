import React, { useState } from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import { Mail, Loader2, CheckCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // State for Newsletter
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle form submission (Simulated API call)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  return (
    <footer id="footer" className="px-6 pt-16 pb-10 md:px-12 lg:px-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">

        {/* TOP SECTION: Logo/Social vs. Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">

          {/* 1. Logo and social links (Left Column) */}
          <div>
            <div className="mb-6 flex items-center">
              <span className="text-[#111111] dark:text-white text-xl font-bold">ProBee Solutions</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xs text-sm">
              Creative digital and offline marketing solutions that help small businesses grow, build trust, and get noticed across India.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/probeeofficial" aria-label="Twitter" className="text-gray-500 dark:text-gray-400 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/probee.in" aria-label="Instagram" className="text-gray-500 dark:text-gray-400 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@probee_solutions" aria-label="YouTube" className="text-gray-500 dark:text-gray-400 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* 2. Newsletter Subscription (Right Column) - ADDED LEFT PADDING */}
          <div className="md:pl-6 lg:pl-10"> {/* <-- ADDED THIS CLASS: md:pl-6 lg:pl-10 */}
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">
              Get Our Insights
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-sm">
              Stay updated with the latest digital and print strategies delivered straight to your inbox.
            </p>

            {isSubscribed ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 max-w-xs flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-700 dark:text-green-400 font-medium text-sm">
                  Subscription Confirmed!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-row gap-2 max-w-sm">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm whitespace-nowrap"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="animate-spin h-4 w-4 text-white" />
                    </div>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM BAR: Copyright (MODIFIED FOR CENTERING) */}
        <div className="pt-8 flex flex-col items-center justify-center border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-0">
            © {currentYear} ProBee Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;