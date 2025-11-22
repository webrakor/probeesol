import { useState } from 'react';
import { Check, Send } from 'lucide-react';

interface ContactFormProps {
  onClose: () => void;
}

// Define the services list for the dropdown
const servicesList = [
  'Digital Marketing Services (SEO, Social, Ads)',
  'Website Development & Design',
  'Printing & Brand Collateral',
  'Offline Advertising & Promotions',
  'General Inquiry / Not Sure',
];

// Define the WhatsApp number (REPLACE THIS WITH YOUR ACTUAL NUMBER)
const ContactForm = ({ onClose }: ContactFormProps) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: servicesList[0], // Default selected service
  });
  
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
  }>({});
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Utility Functions ---

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
    } = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Your name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const generateWhatsAppLink = () => {
    // MODIFIED MESSAGE CONTENT: Focused, professional, and directly states the need.
    const message = `*NEW SERVICE INQUIRY*

Hello ProBee Solutions Team,

I am writing to initiate a discussion regarding the following service:
*Service:* ${formState.service}

*Client Contact Details:*
Name: ${formState.name}
Email: ${formState.email}

I am ready to proceed with a professional partnership. Please advise on the next steps to get started.

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/8179152472?text=${encodedMessage}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Step 1: Generate the link and redirect immediately
    const whatsappLink = generateWhatsAppLink();
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');

    // Step 2: Show success state and close modal
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Close modal after showing success message
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 500); // Shorter timeout for quick redirect
  };

  // --- JSX Rendering (mobile minimal design is retained) ---

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 px-2 text-center"> 
        <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 mb-3"> 
          <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Redirecting to WhatsApp...</h3> 
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4"> 
          Your details are ready! A chat window should open momentarily.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="py-4 px-4 sm:px-8">
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"> 
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          className={`w-full px-3 py-1.5 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm ${
            errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
          } border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 dark:focus:ring-[#60a5fa]/50`}
          placeholder="John Doe"
        />
        {errors.name && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.name}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"> 
          Business Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          className={`w-full px-3 py-1.5 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm ${
            errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
          } border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 dark:focus:ring-[#60a5fa]/50`}
          placeholder="you@yourbusiness.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="service" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"> 
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={formState.service}
          onChange={handleChange}
          className={`w-full px-3 py-1.5 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 dark:focus:ring-[#60a5fa]/50`}
        >
          {servicesList.map((service, index) => (
            <option key={index} value={service}>{service}</option>
          ))}
        </select>
      </div>
      
      <div className="flex justify-end mt-4"> 
        <button
          type="button"
          onClick={onClose}
          className="mr-3 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-600 text-white py-1.5 px-4 rounded-md font-medium text-sm hover:bg-green-700 transition flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Send className="animate-spin mr-1 h-3 w-3" />
              ...
            </>
          ) : (
            <>
              <Send className="mr-1 h-3 w-3" />
              Chat
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;