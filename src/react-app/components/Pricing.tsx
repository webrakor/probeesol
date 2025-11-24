import { Check, X, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const ComparisonTable = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const plans = [
    {
      name: '8-Day Campaign',
      price: '₹7,999',
      description: 'Quick local visibility, ideal for short-term promotions',
      badge: null,
    },
    {
      name: '21-Day Campaign',
      price: '₹19,999',
      description: 'Improved brand awareness & consistent reach',
      badge: 'Most Popular',
    },
    {
      name: '31-Day Campaign',
      price: '₹24,999',
      description: 'Strong visibility with long-term brand impact',
      badge: null,
    }
  ];

  const features = [
    {
      category: 'Campaign Scope',
      items: [
        {
          name: 'Campaign Duration',
          plan1: '8 days',
          plan2: '21 days',
          plan3: '31 days'
        },
        {
          name: 'Estimated Impressions',
          plan1: '6,000-10,000',
          plan2: '20,000-30,000',
          plan3: '30,000-50,000'
        },
        {
          name: 'Target Coverage',
          plan1: '1-2 prime areas',
          plan2: '3-5 strategic areas',
          plan3: 'City-wide coverage'
        }
      ]
    },
    {
      category: 'Design & Production',
      items: [
        {
          name: 'Design Cost',
          plan1: '₹1,000',
          plan2: 'Included',
          plan3: 'Included'
        },
        {
          name: 'Printing Cost',
          plan1: '₹3,000',
          plan2: 'Included',
          plan3: 'Included'
        },
        {
          name: 'Installation Cost',
          plan1: '₹1,000',
          plan2: 'Included',
          plan3: 'Included'
        },
        {
          name: 'Design Concepts',
          plan1: '1 concept',
          plan2: '3 concepts',
          plan3: 'Unlimited concepts'
        },
        {
          name: 'Design Revisions',
          plan1: '2 revisions',
          plan2: '5 revisions',
          plan3: 'Unlimited revisions'
        }
      ]
    },
    {
      category: 'Features & Support',
      items: [
        {
          name: 'Basic Design Support',
          plan1: <Check className="h-5 w-5 text-green-500" />,
          plan2: <Check className="h-5 w-5 text-green-500" />,
          plan3: <Check className="h-5 w-5 text-green-500" />
        },
        {
          name: 'Performance Reports',
          plan1: <Check className="h-5 w-5 text-green-500" />,
          plan2: <Check className="h-5 w-5 text-green-500" />,
          plan3: <Check className="h-5 w-5 text-green-500" />
        },
        {
          name: 'Weekly Updates',
          plan1: <X className="h-5 w-5 text-red-400" />,
          plan2: <Check className="h-5 w-5 text-green-500" />,
          plan3: <Check className="h-5 w-5 text-green-500" />
        },
        {
          name: 'Custom Placement',
          plan1: <X className="h-5 w-5 text-red-400" />,
          plan2: <Check className="h-5 w-5 text-green-500" />,
          plan3: <Check className="h-5 w-5 text-green-500" />
        }
      ]
    },
    {
      category: 'Business Impact',
      items: [
        {
          name: 'Best For',
          plan1: 'Short-term promotions, event awareness',
          plan2: 'Medium-duration promotions, brand building',
          plan3: 'Long-term campaigns, established brands'
        },
        {
          name: 'Brand Recall',
          plan1: 'Short-term',
          plan2: 'Medium-term',
          plan3: 'Long-term'
        },
        {
          name: 'ROI Potential',
          plan1: 'Quick wins',
          plan2: 'Balanced growth',
          plan3: 'Maximum impact'
        }
      ]
    }
  ];

  const handleGetInTouch = (planName: string) => {
    setSelectedPlan(planName);
    setShowPopup(true);
  };

  const redirectToWhatsApp = () => {
    if (!selectedPlan) return;

    const selectedPlanData = plans.find(plan => plan.name === selectedPlan);
    if (!selectedPlanData) return;

    // Create default WhatsApp message
    const whatsappMessage = `Hello ProBee Solutions!%0A%0AI am interested in the *${selectedPlan}* and would like to get more details about this plan. Please share the complete information.%0A%0A*Plan Details:*%0A- Plan: ${selectedPlan}%0A- Price: ${selectedPlanData.price}%0A- Description: ${selectedPlanData.description}%0A%0ALooking forward to your response!`;

    // WhatsApp API URL 
    const whatsappUrl = `https://wa.me/8179152472?text=${whatsappMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    // Close popup
    setShowPopup(false);
    setSelectedPlan(null);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedPlan(null);
  };

  // Get features for selected plan
  const getSelectedPlanFeatures = () => {
    if (!selectedPlan) return [];

    const planIndex = plans.findIndex(plan => plan.name === selectedPlan);
    if (planIndex === -1) return [];

    const planKey = `plan${planIndex + 1}` as keyof typeof features[0]['items'][0];

    return features.map(section => ({
      category: section.category,
      items: section.items.map(item => ({
        name: item.name,
        value: item[planKey]
      }))
    }));
  };

  const renderValue = (value: any) => {
    if (typeof value === 'string') {
      return <span className="text-gray-700 dark:text-gray-300 text-sm">{value}</span>;
    }
    return value;
  };

  const PlanHeaderCell = ({ plan, index, children }: { plan: typeof plans[0], index: number, children: React.ReactNode }) => (
    <div
      key={index}
      className={`p-4 md:p-6 text-center w-[100px] md:w-auto flex-shrink-0 ${plan.badge ? 'bg-[#3b82f6]/5 dark:bg-[#60a5fa]/10' : 'bg-white dark:bg-gray-800'
        }`}
    >
      {children}
    </div>
  );

  const FeatureRowCell = ({ item, index, isPlan2 }: { item: any, index: number, isPlan2: boolean }) => (
    <div
      key={index}
      className={`p-3 md:p-4 flex items-center justify-center w-[100px] md:w-auto flex-shrink-0 ${isPlan2 ? 'bg-blue-50/30 dark:bg-blue-950/10' : ''}`}
    >
      {renderValue(item)}
    </div>
  );

  const selectedPlanFeatures = getSelectedPlanFeatures();

  return (
    <>
      <section className="px-4 py-20 md:px-12 lg:px-20 bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#111111] dark:text-white">
              Compare{' '}
              <span className="block text-[#3b82f6] dark:text-[#60a5fa]">
                Marketing Plans
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-xs md:text-lg">
              Choose the perfect plan for your business goals. All plans include free consultation and basic design support.
            </p>
          </div>

          {/* Scroll Hint for Mobile Plans */}
          <div className="text-center mb-4 md:hidden">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              ← Scroll to see all plans →
            </p>
          </div>

          {/* Minimal Plan Cards Container */}
          <div className="flex overflow-x-auto flex-nowrap md:grid md:grid-cols-3 md:overflow-x-visible gap-4 md:gap-8 mb-12 pb-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`min-w-[120px] md:min-w-0 flex-shrink-0 md:w-auto bg-white dark:bg-gray-800 rounded-xl border-2 p-4 md:p-8 text-center ${plan.badge
                  ? 'border-[#3b82f6] dark:border-[#60a5fa] shadow-lg md:shadow-xl'
                  : 'border-gray-200 dark:border-gray-700'
                  }`}
              >
                {plan.badge && (
                  <div className="mb-3 md:mb-6">
                    <span className="bg-[#3b82f6] dark:bg-[#60a5fa] text-white text-xs md:text-sm font-medium py-1 px-3 md:py-2 md:px-5 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-sm md:text-2xl font-bold text-[#111111] dark:text-white mb-2 md:mb-4">
                  {plan.name}
                </h3>
                <div className="mb-2 md:mb-6">
                  <span className="text-base md:text-4xl font-bold text-[#111111] dark:text-white">
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-base mb-4 md:mb-8 leading-tight">
                  {plan.description}
                </p>
                <button
                  onClick={() => handleGetInTouch(plan.name)}
                  className={`w-full py-1.5 md:py-4 px-3 md:px-6 rounded-lg font-semibold text-xs md:text-lg transition-colors ${plan.badge
                    ? 'bg-[#3b82f6] hover:bg-[#2563eb] text-white'
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-[#111111] dark:text-white'
                    }`}
                >
                  Get in touch
                </button>
              </div>
            ))}
          </div>

          {/* Comparison Table Container */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm mb-8">
            <div className="w-full overflow-x-auto md:overflow-x-visible">
              <div className="min-w-[450px] md:min-w-full">
                {/* Table Header Row */}
                <div className="flex md:grid md:grid-cols-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-900/50 sticky left-0 z-20 w-[150px] md:w-auto flex-shrink-0 border-r border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-[#111111] dark:text-white text-sm md:text-base">Features</h3>
                  </div>
                  {plans.map((plan, index) => (
                    <PlanHeaderCell key={index} plan={plan} index={index}>
                      <h4 className="font-bold text-sm md:text-xl text-[#111111] dark:text-white mb-0 md:mb-2">
                        {plan.name.split('-')[0]}
                      </h4>
                      <p className="text-xs md:text-2xl font-bold text-[#3b82f6] dark:text-[#60a5fa]">
                        {plan.price}
                      </p>
                    </PlanHeaderCell>
                  ))}
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {features.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      {/* Section Header */}
                      <div className="flex md:grid md:grid-cols-4 bg-gray-50 dark:bg-gray-900/50">
                        <div className="p-3 md:p-4 sticky left-0 z-20 w-[150px] md:w-auto flex-shrink-0 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                          <h4 className="font-semibold text-[#111111] dark:text-white text-xs md:text-sm">
                            {section.category}
                          </h4>
                        </div>
                        {plans.map((plan, planIndex) => (
                          <div
                            key={planIndex}
                            className={`p-3 md:p-4 w-[100px] md:w-auto flex-shrink-0 ${plan.badge ? 'bg-[#3b82f6]/5 dark:bg-[#60a5fa]/10' : 'bg-white dark:bg-gray-800'
                              }`}
                          ></div>
                        ))}
                      </div>

                      {/* Section Items */}
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex md:grid md:grid-cols-4 hover:bg-gray-50 dark:hover:bg-gray-900/20 transition-colors"
                        >
                          <div className="p-3 md:p-4 border-r border-gray-200 dark:border-gray-700 sticky left-0 z-20 w-[150px] md:w-auto flex-shrink-0 bg-white dark:bg-gray-800">
                            <div className="flex items-center gap-1 md:gap-2">
                              <span className="text-gray-700 dark:text-gray-300 text-xs md:text-sm font-medium">
                                {item.name}
                              </span>
                              <HelpCircle className="h-3 w-3 md:h-4 md:w-4 text-gray-400 cursor-help" />
                            </div>
                          </div>

                          <FeatureRowCell item={item.plan1} index={0} isPlan2={false} />
                          <FeatureRowCell item={item.plan2} index={1} isPlan2={true} />
                          <FeatureRowCell item={item.plan3} index={2} isPlan2={false} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Website Services Banner */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 md:p-8 text-center text-white mb-8">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
                Need Website Services?
              </h3>
              <p className="text-green-100 text-sm md:text-lg mb-4 md:mb-6">
                Professional website design, development, and digital marketing solutions tailored to your business needs.
              </p>
              <button
                onClick={() => handleGetInTouch('Website Services')}
                className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-colors text-sm md:text-lg"
              >
                Contact for Website Services Details
              </button>
            </div>
          </div>

          {/* Payment Info */}
          <div className="text-center mt-8 mb-3">
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-base">
              Design + Printing + Fixing = ₹5,000 total • 50% advance, 50% after installation • All prices exclude GST
            </p>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-0">
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-base">
              <strong>Need Digital Marketing or Printing Services?</strong>{' '}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=probbeesolutions@gmail.com&su=Custom%20Marketing%20Solution&body=Hi%20ProBee,%0A%0AI%20would%20like%20to%20discuss%20a%20custom%20marketing%20solution."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3b82f6] dark:text-[#60a5fa] font-medium hover:underline"
              >
                Contact us for pricing
              </a>{' '}
              and customized solutions.
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            className="
    bg-white dark:bg-gray-800 rounded-xl 
    w-full max-w-[90%] md:max-w-2xl 
    max-h-[80vh] md:max-h-[90vh]
    overflow-hidden flex flex-col
    p-2 md:p-0
  "
          >

            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg md:text-xl font-bold text-[#111111] dark:text-white">
                {selectedPlan} - Plan Features
              </h3>

              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Features Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                  ✓ You've selected the <strong>{selectedPlan}</strong> plan. Here are the features included in this plan:
                </p>
              </div>

              <div className="space-y-6">
                {selectedPlanFeatures.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 dark:bg-gray-900/50 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-[#111111] dark:text-white text-sm">
                        {section.category}
                      </h4>
                    </div>
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="px-4 py-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-900/20">
                          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            {item.name}
                          </span>
                          <div className="text-right">
                            {renderValue(item.value)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
              <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mb-4">
                Ready to proceed? Click the button below to send a message on WhatsApp and we'll get back to you with more details.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={closePopup}
                  className="flex-1 py-2 md:py-3 px-3 md:px-4 
               text-xs md:text-sm 
               bg-gray-300 hover:bg-gray-400 
               dark:bg-gray-600 dark:hover:bg-gray-500 
               text-gray-700 dark:text-gray-300 
               rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>

                <button
                  onClick={redirectToWhatsApp}
                  className="flex-1 py-2 md:py-3 px-3 md:px-4 
               text-xs md:text-sm 
               bg-green-600 hover:bg-green-700 
               text-white rounded-lg font-semibold transition-colors 
               flex items-center justify-center gap-2"
                >
                  <span>Proceed</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ComparisonTable;