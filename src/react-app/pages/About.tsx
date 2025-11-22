import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const [currentService, setCurrentService] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const services = [
    {
      title: "Digital Marketing Services",
      content: "Strategic digital marketing solutions designed to increase brand visibility and drive business growth through targeted campaigns and data-driven optimization.",
      items: [
        "Search Engine Optimization (SEO) & SEM",
        "Social Media Strategy & Management",
        "Content Marketing & Strategy Development",
        "Email Marketing Automation",
        "Pay-Per-Click Advertising Management",
        "Analytics & Performance Reporting",
        "Conversion Rate Optimization",
        "Digital Brand Strategy"
      ]
    },
    {
      title: "Website Development",
      content: "Custom web development solutions that combine technical excellence with user-centric design to create powerful digital experiences.",
      items: [
        "Custom Website Design & Development",
        "E-commerce Platform Integration",
        "Responsive Mobile-First Development",
        "Website Maintenance & Support",
        "Performance Optimization",
        "Security Implementation",
        "CMS Development & Training",
        "API Integration Services"
      ]
    },
    {
      title: "Printing Services",
      content: "High-quality print solutions that maintain brand integrity across all physical materials and corporate collateral.",
      items: [
        "Corporate Stationery & Business Cards",
        "Marketing Brochures & Catalogues",
        "Presentation Folders & Reports",
        "Banner & Signage Production",
        "Promotional Material Printing",
        "Large Format Printing",
        "Premium Finishing Services",
        "Brand Guideline Compliance"
      ]
    }
  ];

  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        setCurrentService((prev) => (prev + 1) % services.length);
      }, 4000);
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };

    // Check if mobile device
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      startAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [services.length]);


  return (
    <section className="bg-white dark:bg-gray-900 transition-colors duration-300 py-8 md:py-12">
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
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                ProBee Solutions delivers comprehensive digital and print services designed to drive business growth and market leadership. 
                Our integrated approach combines strategic digital marketing with premium print solutions to create cohesive brand experiences.
              </p>
              
              <div className="space-y-4 mt-6 md:mt-8">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                  Strategic Partnership Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  We operate as an extension of your team, providing strategic guidance and execution excellence across digital 
                  and print channels. Our methodology ensures brand consistency while optimizing for performance and ROI.
                </p>
              </div>
            </div>

            {/* Right Column - Service Highlights */}
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4 md:pl-6">
                <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-base md:text-lg mb-2 md:mb-3">DIGITAL MARKETING EXCELLENCE</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Comprehensive digital strategies including SEO, social media management, content marketing, and data-driven 
                  analytics to enhance online presence.
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 dark:border-green-500 pl-4 md:pl-6">
                <h3 className="text-green-600 dark:text-green-400 font-semibold text-base md:text-lg mb-2 md:mb-3">WEB DEVELOPMENT SOLUTIONS</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Enterprise-grade website development with responsive design, e-commerce integration, and performance 
                  optimization to ensure superior user experiences.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 dark:border-purple-500 pl-4 md:pl-6">
                <h3 className="text-purple-600 dark:text-purple-400 font-semibold text-base md:text-lg mb-2 md:mb-3">PRINT & BRAND COLLATERAL</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Professional printing services including corporate stationery, marketing collateral, promotional materials, 
                  and large-format printing with premium finishes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Auto-scroll Services Section */}
        <div className="mb-12 md:mb-16">
          {/* Left Aligned Services Header */}
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Service Offerings
            </h2>
          </div>
          
          {/* Mobile Auto-scroll View */}
          <div className="md:hidden">
            <div 
              ref={servicesRef}
              className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentService * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{service.content}</p>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-xs">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Service Indicators */}
              <div className="flex justify-center space-x-2 pb-4">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentService(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentService 
                        ? 'bg-blue-600' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.content}</p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Team Section */}
        <div className="mb-12 md:mb-16">
          {/* Left Aligned Team Header */}
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Executive Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-2 md:mb-4 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-bold">AP</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-lg mb-1">Alex Parker</h3>
              <p className="text-blue-600 text-xs md:text-sm mb-1">Chief Digital Officer</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs hidden md:block">
                15+ years in digital strategy and business transformation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-2 md:mb-4 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-bold">CT</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-lg mb-1">Casey Taylor</h3>
              <p className="text-blue-600 text-xs md:text-sm mb-1">Marketing Director</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs hidden md:block">
                Expert in integrated marketing strategies and brand management.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-2 md:mb-4 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-bold">MP</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-lg mb-1">Morgan Powell</h3>
              <p className="text-blue-600 text-xs md:text-sm mb-1">Tech Director</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs hidden md:block">
                Technology leadership in enterprise solutions and infrastructure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-2 md:mb-4 flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-bold">YL</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-lg mb-1">Yoon Lee</h3>
              <p className="text-blue-600 text-xs md:text-sm mb-1">Creative Director</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs hidden md:block">
                Award-winning creative director and brand development expert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;