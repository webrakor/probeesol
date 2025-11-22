import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react'; // Reverted to MessageSquare
import Modal from '@/react-app/components/Modal';
import ContactForm from '@/react-app/components/ContactForm';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-6">
      <button 
        className="flex justify-between items-center w-full text-left" 
        onClick={onClick}
      >
        <h3 className="text-lg md:text-xl font-medium text-[#111111] dark:text-white">{question}</h3>
        {isOpen ? <ChevronUp size={20} className="text-[#3b82f6] dark:text-[#60a5fa]" /> : <ChevronDown size={20} className="text-[#3b82f6] dark:text-[#60a5fa]" />}
      </button>
      <div 
        className={`mt-2 text-gray-600 dark:text-gray-400 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="py-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const faqItems = [
    {
      question: "What services does ProBee Solutions offer?",
      answer:
        "We provide complete marketing solutions, from digital marketing like social media management, SEO, content creation, and ad campaigns, to offline promotions such as hoardings, print materials, and event marketing. Our goal is to help small businesses grow with creative, data-driven strategies."
    },
    {
      question: "Can you customize marketing plans based on my business needs?",
      answer:
        "Absolutely. Every business is unique, and our team crafts tailored marketing strategies that align with your brand goals, audience, and budget, ensuring maximum impact both online and offline."
    },
    {
      question: "How long will it take to see results?",
      answer:
        "Results depend on your chosen marketing services. For example, social media and paid ads often show quick engagement within weeks, while SEO and brand awareness campaigns steadily build long-term visibility and trust."
    },
    {
      question: "Do you handle offline advertising and promotions?",
      answer:
        "Yes. ProBee Solutions offers offline marketing services including hoardings, event promotions, and print collateral design. We ensure your local presence is as strong as your digital one."
    },
    {
      question: "Why should I choose ProBee Solutions?",
      answer:
        "We specialize in helping small businesses grow through affordable, creative, and measurable marketing. Our combination of digital and offline strategies ensures that your brand reaches the right people with maximum visibility."
    }
  ];

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <section id="faq" className="px-6 py-20 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#111111] dark:text-white">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Everything you need to know about ProBee Solutions and how we help your business grow both online and offline.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>

        {/* MODIFIED BUTTON SECTION */}
        <div className="text-center mt-12">
          {/* New short title */}
          <p className="text-gray-600 dark:text-gray-400 mb-4">Have specific needs?</p>
          
          <button 
            onClick={openContactModal} // Still opens the modal
            // Apply green WhatsApp/chat styling and add the icon
            className="bg-green-600 text-white py-3 px-8 rounded-md font-medium hover:bg-green-700 transition inline-flex items-center justify-center gap-2"
          >
            {/* Message icon */}
            <MessageSquare size={20} /> 
            Chat with Us 
          </button>
        </div>
      </div>

      {/* Contact Modal (Remains intact) */}
      <Modal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal}
        title="Contact Support"
      >
        <ContactForm onClose={closeContactModal} />
      </Modal>
    </section>
  );
};

export default FAQ;