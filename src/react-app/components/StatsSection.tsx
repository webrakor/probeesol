import { useEffect, useRef } from 'react';

const TrustedBrandsSection = () => {
  const brands = [
    { name: "Webrakor & Co." },
    { name: "PrintSmart Sol." },
    { name: "Tricine Media" },
    { name: "Amarjeet Music" },
    { name: "WordOKart" },
    { name: "Unacademy" },
    { name: "Unique B.T.I" },
  ];

  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Clone brands for seamless loop
    const content = Array.from(scroller.children);
    content.forEach((item: Element) => {
      const duplicate = item.cloneNode(true) as Element;
      duplicate.setAttribute('aria-hidden', 'true');
      scroller.appendChild(duplicate);
    });

    // Auto-scroll animation
    let animationId: number | undefined;

    const animateScroll = () => {
      if (!scroller) return;
      
      if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
        scroller.scrollLeft = 0;
      } else {
        scroller.scrollLeft += 1;
      }
      animationId = requestAnimationFrame(animateScroll);
    };

    // Start animation
    animationId = requestAnimationFrame(animateScroll);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animateScroll);
    };

    scroller.addEventListener('mouseenter', handleMouseEnter);
    scroller.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      scroller.removeEventListener('mouseenter', handleMouseEnter);
      scroller.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-full bg-white dark:bg-gray-900 py-8 md:py-20 transition-colors duration-300 overflow-hidden">

      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight sm:leading-snug">
          Trusted by {" "} 
          <span className="relative inline-block">
            <span className="relative z-10 dark:text-blue-400" style={{ color: '#3b82f6' }}>
              500+
            </span> 
          </span>{" "}
          Businesses Across India
        </h2>

        {/* Sub-description */}
        <p className="mt-4 sm:mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Leading organizations choose ProBee to transform their marketing operations, 
          drive measurable results, and accelerate business growth.
        </p>

        {/* Auto-scrolling Brands Marquee */}
        <div className="mt-12 md:mt-16 relative">
          <div 
            ref={scrollerRef}
            className="flex overflow-x-hidden gap-8 md:gap-12 py-4"
            style={{ 
              mask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
              WebkitMask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)'
            }}
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-gray-700 dark:text-gray-300 text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 min-w-max"
              >
                {brand.name}
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for better visual effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;