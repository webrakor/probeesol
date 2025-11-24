import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => setShowFullContent((prev) => !prev);

  useEffect(() => {
    if (location.state?.scrollToSection) {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <section id="about" className="bg-white dark:bg-gray-900 transition-colors duration-300 py-8 md:py-12">
      {/* MODIFIED: Increased responsive padding (px- classes) for larger gaps on left and right */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Page Title */}
        <div className="text-left mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Us
          </h1>
        </div>

        {/* Hero Section */}
        <div className="mb-12 md:mb-16">
          {/* Left Aligned Header */}
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight">
              Complete <span className="text-blue-600 dark:text-blue-500">Digital & Print Solutions</span><br />
              for Modern Business Excellence
            </h2>
          </div>

          {/* Content Grid - Aligned with header */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Left Column - Main Content */}
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                ProBee Solutions delivers comprehensive digital and print services designed to drive business growth and market leadership.
                Our integrated approach combines strategic digital marketing with premium print solutions to create cohesive brand experiences.
              </p>

              <div className="space-y-4 mt-6 md:mt-8">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                  Strategic Partnership Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base text-justify">
                  We operate as an extension of your team, providing strategic guidance and execution excellence across digital
                  and print channels. Our methodology ensures brand consistency while optimizing for performance and ROI.
                </p>
              </div>
            </div>

            {/* Right Column - Service Highlights */}
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4 md:pl-6">
                <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-base md:text-lg mb-2 md:mb-3">DIGITAL MARKETING EXCELLENCE</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base text-justify">
                  Comprehensive digital strategies to enhance your online presence and drive measurable business results.
                </p>
              </div>

              <div className="border-l-4 border-green-600 dark:border-green-500 pl-4 md:pl-6">
                <h3 className="text-green-600 dark:text-green-400 font-semibold text-base md:text-lg mb-2 md:mb-3">WEB DEVELOPMENT SOLUTIONS</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base text-justify">
                  Enterprise-grade website development to ensure superior user experiences and digital performance.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 dark:border-purple-500 pl-4 md:pl-6">
                <h3 className="text-purple-600 dark:text-purple-400 font-semibold text-base md:text-lg mb-2 md:mb-3">PRINT & BRAND COLLATERAL</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base text-justify">
                  Professional printing services to maintain brand integrity across all physical materials and corporate collateral.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About the Founder Section */}
        <div className="mb-12 md:mb-16">
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
              About the Founder — Bhargav Poludasu
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Founder Image/Profile */}
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 md:mb-0">
                <span className="text-white text-2xl md:text-3xl font-bold">BP</span>
              </div>
            </div>

            {/* Founder Content */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                Bhargav Poludasu is a Digital Marketing Consultant, Artist, and Content Creator known for generating millions of views and consistently driving 100k+ monthly engagement across platforms. As the founder of ProBee Solutions, he blends creativity, strategy, and innovation to deliver impactful digital experiences that help brands grow.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                With deep experience in the marketing and advertising industry, Bhargav has led teams and executed end-to-end marketing initiatives across multiple domains. His expertise spans digital marketing, brand consulting, content strategy, SEO, SEM, advertising, and design.
              </p>

              {showFullContent && (
                <>
                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                    He began his academic journey at Loyola Academy Junior College, specializing in MPC, and later earned a Bachelor of Business Administration (Marketing) from Avinash College of Commerce. Alongside his entrepreneurial work, Bhargav has also contributed to PwC as an RCMS Specialist, further strengthening his experience in business, management, and operations.
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                    Driven by creativity and backed by a strong foundation in marketing and leadership, Bhargav continues to help brands turn ideas into measurable results.
                  </p>
                </>
              )}

              <button
                onClick={toggleContent}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200 text-sm md:text-base"
              >
                {showFullContent ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>

        {/* Compact Team Section */}
        <div className="mb-12 md:mb-16">
          {/* Left Aligned Team Header */}
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Our Core Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Founder - Digital Marketer */}
            <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-lg md:text-xl font-bold">BP</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg md:text-xl mb-2">Bhargav Poludasu</h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm md:text-base mb-2">Digital Marketing Expert</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                Driving brand growth through innovative digital strategies and content creation.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/bhargav-poludasu-b2b0871b9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Developer */}
            <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-bold">SC</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg md:text-xl mb-2">Sai Charan Puduthala</h3>
              <p className="text-green-600 dark:text-green-400 text-sm md:text-base mb-2">Lead Developer</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                Crafting robust digital solutions and seamless user experiences with cutting-edge technology.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/wisecharan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Printing Specialist */}
            <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-bold">JR</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg md:text-xl mb-2">Jai Ram</h3>
              <p className="text-purple-600 dark:text-purple-400 text-sm md:text-base mb-2">Printing Specialist</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                Expert in premium print solutions and brand collateral ensuring quality and consistency.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/jayaram-reddy-144480267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
