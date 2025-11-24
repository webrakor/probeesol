import { useState } from 'react';
import { Check, Send } from 'lucide-react';

interface ContactFormProps {
  onClose: () => void;
}

const servicesList = [
  'Digital Marketing',
  'Website Development',
  'Printing Services',
  'General Inquiry',
];

const ContactForm = ({ onClose }: ContactFormProps) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: servicesList[0],
  });
  
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
  }>({});
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
    } = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

const generateWhatsAppLink = () => {
  const message = `Hi ProBee Team,

I found your website and I'm interested in learning more about your ${formState.service}.

Here are my details:
• Name: ${formState.name}
• Email: ${formState.email}

I'd like to connect with your team to understand your services better and explore how we can grow my business.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/8179152472?text=${encodedMessage}`;
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    const whatsappLink = generateWhatsAppLink();
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3">
          <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
          Opening WhatsApp...
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Your inquiry is ready and will open in WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-5 max-w-sm mx-auto"> 
      <div className="text-center mb-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          Start a Conversation
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Share your details and we'll connect on WhatsApp
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 bg-white dark:bg-gray-800 border ${
              errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
            } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 bg-white dark:bg-gray-800 border ${
              errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
            } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors`}
            placeholder="your.email@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formState.service}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors"
          >
            {servicesList.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>
        
        <div className="flex gap-2 pt-1">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-3 py-2 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors border border-gray-200 dark:border-gray-600 rounded-md hover:border-gray-300 dark:hover:border-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-3 py-2 bg-green-600 text-white text-xs font-medium rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-1 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Send className="h-3 w-3 animate-pulse" />
                Preparing...
              </>
            ) : (
              <>
                <Send className="h-3 w-3" />
                Continue
              </>
            )}
          </button>
        </div>
      </form>

      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          We'll redirect you to WhatsApp to continue
        </p>
      </div>
    </div>
  );
};

export default ContactForm;