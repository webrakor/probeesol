import { useState } from 'react';
import ShinyButton from '@/react-app/components/ShinyButton';
import Modal from '@/react-app/components/Modal';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const scrollToFooter = () => {
    const footerSection = document.getElementById('footer');
    if (footerSection) {
      footerSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="px-6 pt-16 pb-8 md:pb-24 md:px-12 lg:px-20 bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900 text-[#111111] dark:text-gray-100 overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Text Content */}
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transform Your <span className="text-[#3b82f6] dark:text-[#60a5fa]">Digital Marketing</span> Strategy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-xl max-w-3xl mx-auto">
           ProBee Solutions helps small businesses get noticed, build trust, and grow faster with creative digital marketing and impactful offline advertising from social media, SEO to hoardings, events, and local promotions.
          </p>
          <div className="flex justify-center pt-4">
            <ShinyButton 
              className="w-max px-4 py-2 sm:px-6 sm:py-3 text-sm md:text-base"
              onClick={scrollToFooter}
            >
              Get a Free Consultation
            </ShinyButton>
          </div>
        </div>

        {/* Product Image */}
        <div className="mt-12 w-full max-w-4xl mx-auto relative">
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800">
            <img
              src="https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="ProBee dashboard interface"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-gradient-to-r from-blue-300 to-blue-400 dark:from-blue-600 dark:to-blue-700 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-r from-blue-300 to-blue-400 dark:from-blue-600 dark:to-blue-700 rounded-full blur-2xl opacity-30"></div>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        title="How ProBee Works"
      >
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="ProBee Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;