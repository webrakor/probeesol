import { Check, X, HelpCircle } from 'lucide-react';

const ComparisonTable = () => {
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
    },
    {
      name: 'Website Services',
      price: '₹19,999+',
      description: 'Professional website design and development',
      badge: 'New',
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
          plan3: '31 days',
          plan4: 'N/A'
        },
        {
          name: 'Estimated Impressions',
          plan1: '6,000-10,000',
          plan2: '20,000-30,000',
          plan3: '30,000-50,000',
          plan4: 'Digital Reach'
        },
        {
          name: 'Target Coverage',
          plan1: '1-2 prime areas',
          plan2: '3-5 strategic areas',
          plan3: 'City-wide coverage',
          plan4: 'Online presence'
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
          plan3: 'Included',
          plan4: 'Included'
        },
        {
          name: 'Printing Cost',
          plan1: '₹3,000',
          plan2: 'Included',
          plan3: 'Included',
          plan4: 'N/A'
        },
        {
          name: 'Installation Cost',
          plan1: '₹1,000',
          plan2: 'Included',
          plan3: 'Included',
          plan4: 'N/A'
        },
        {
          name: 'Design Concepts',
          plan1: '1 concept',
          plan2: '3 concepts',
          plan3: 'Unlimited concepts',
          plan4: '1 concept'
        },
        {
          name: 'Design Revisions',
          plan1: '2 revisions',
          plan2: '5 revisions',
          plan3: 'Unlimited revisions',
          plan4: '2 revisions'
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
          plan3: <Check className="h-5 w-5 text-green-500" />,
          plan4: <Check className="h-5 w-5 text-green-500" />
        },
        {
          name: 'Performance Reports',
          plan1: <Check className="h-5 w-5 text-green-500" />,
          plan2: <Check className="h-5 w-5 text-green-500" />,
          plan3: <Check className="h-5 w-5 text-green-500" />,
          plan4: <Check className="h-5 w-5 text-green-500" />
        },
        {
          name: 'Weekly Updates',
          plan1: <X className="h-5 w-5 text-red-400" />,
          plan2: <Check className="h-5 w-5 text-green-500" />,
          plan3: <Check className="h-5 w-5 text-green-500" />,
          plan4: <Check className="h-5 w-5 text-green-500" />
        },
        {
          name: 'Custom Placement',
          plan1: <X className="h-5 w-5 text-red-400" />,
          plan2: <Check className="h-5 w-5 text-green-500" />,
          plan3: <Check className="h-5 w-5 text-green-500" />,
          plan4: 'N/A'
        },
        {
          name: 'Mobile Responsive',
          plan1: 'N/A',
          plan2: 'N/A',
          plan3: 'N/A',
          plan4: <Check className="h-5 w-5 text-green-500" />
        },
        {
          name: 'SEO Setup',
          plan1: 'N/A',
          plan2: 'N/A',
          plan3: 'N/A',
          plan4: <Check className="h-5 w-5 text-green-500" />
        },
        {
          name: 'Hosting Support',
          plan1: 'N/A',
          plan2: 'N/A',
          plan3: 'N/A',
          plan4: <Check className="h-5 w-5 text-green-500" />
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
          plan3: 'Long-term campaigns, established brands',
          plan4: 'Online presence, digital transformation'
        },
        {
          name: 'Brand Recall',
          plan1: 'Short-term',
          plan2: 'Medium-term',
          plan3: 'Long-term',
          plan4: 'Continuous'
        },
        {
          name: 'ROI Potential',
          plan1: 'Quick wins',
          plan2: 'Balanced growth',
          plan3: 'Maximum impact',
          plan4: 'Digital expansion'
        }
      ]
    }
  ];

  const renderValue = (value: any) => {
    if (typeof value === 'string') {
      return <span className="text-gray-700 dark:text-gray-300 text-xs md:text-sm">{value}</span>;
    }
    return value;
  };

  // Helper component for Plan Headers inside the table (to keep CSS consistent)
  const PlanHeaderCell = ({ plan, index, children }: { plan: typeof plans[0], index: number, children: React.ReactNode }) => (
    <div
      key={index}
      className={`p-4 md:p-6 text-center w-[100px] md:w-auto flex-shrink-0 ${plan.badge ? 'bg-[#3b82f6]/5 dark:bg-[#60a5fa]/10' : 'bg-white dark:bg-gray-800'
        }`}
    >
      {children}
    </div>
  );

  // Helper component for Feature Rows inside the table
  const FeatureRowCell = ({ item, index, isPlan2 }: { item: any, index: number, isPlan2: boolean }) => (
    <div
      key={index}
      className={`p-3 md:p-4 flex items-center justify-center w-[100px] md:w-auto flex-shrink-0 ${isPlan2 ? 'bg-blue-50/30 dark:bg-blue-950/10' : ''}`}
    >
      {renderValue(item)}
    </div>
  );

  return (
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

        {/* Plan Cards Container - Mobile Scrollable, Smaller Cards */}
        <div className="flex overflow-x-auto flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-x-visible gap-4 md:gap-6 mb-12 pb-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              // Min width and square-like minimal size for mobile
              className={`min-w-[150px] md:min-w-0 flex-shrink-0 md:w-auto bg-white dark:bg-gray-800 rounded-xl border-2 p-4 md:p-6 text-center ${plan.badge
                  ? 'border-[#3b82f6] dark:border-[#60a5fa] shadow-lg'
                  : 'border-gray-200 dark:border-gray-700'
                }`}
            >
              {plan.badge && (
                <div className="mb-2 md:mb-4">
                  <span className="bg-[#3b82f6] dark:bg-[#60a5fa] text-white text-xs md:text-sm font-medium py-1 px-3 md:py-1.5 md:px-4 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}
              <h3 className="text-base md:text-xl font-bold text-[#111111] dark:text-white mb-1">
                {plan.name}
              </h3>
              <div className="mb-2 md:mb-3">
                <span className="text-xl md:text-2xl font-bold text-[#111111] dark:text-white">
                  {plan.price}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed hidden sm:block">
                {plan.description}
              </p>
              <button
                className={`w-full py-2 md:py-3 px-4 rounded-lg font-semibold text-xs md:text-sm transition-colors ${plan.badge
                    ? 'bg-[#3b82f6] hover:bg-[#2563eb] text-white'
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-[#111111] dark:text-white'
                  }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Table Container - Scrollable on Mobile */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">

          {/* Wrapper for horizontal scroll on mobile */}
          <div className="w-full overflow-x-auto md:overflow-x-visible">

            {/* Inner Container: Defines the grid layout */}
            <div className="min-w-[550px] md:min-w-full">

              {/* Table Header Row */}
              <div className="flex md:grid md:grid-cols-5 border-b border-gray-200 dark:border-gray-700">
                {/* STICKY HEADER CELL (Features) - ENSURING SOLID BACKGROUND */}
                <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-900/50 sticky left-0 z-20 w-[150px] md:w-auto flex-shrink-0 border-r border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-[#111111] dark:text-white text-sm md:text-base">Features</h3>
                </div>
                {plans.map((plan, index) => (
                  <PlanHeaderCell key={index} plan={plan} index={index}>
                    <h4 className="font-bold text-sm md:text-lg text-[#111111] dark:text-white mb-0">
                      {plan.name.split('-')[0]}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
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
                    <div className="flex md:grid md:grid-cols-5 bg-gray-50 dark:bg-gray-900/50">
                      {/* STICKY CATEGORY CELL - ENSURING SOLID BACKGROUND */}
                      <div className="p-3 md:p-4 sticky left-0 z-20 w-[150px] md:w-auto flex-shrink-0 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                        <h4 className="font-semibold text-[#111111] dark:text-white text-xs md:text-sm">
                          {section.category}
                        </h4>
                      </div>
                      {/* Empty cells for horizontal scroll alignment */}
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
                        className="flex md:grid md:grid-cols-5 hover:bg-gray-50 dark:hover:bg-gray-900/20 transition-colors"
                      >
                        {/* STICKY FEATURE NAME CELL - ENSURING SOLID BACKGROUND */}
                        <div className="p-3 md:p-4 border-r border-gray-200 dark:border-gray-700 sticky left-0 z-20 w-[150px] md:w-auto flex-shrink-0 bg-white dark:bg-gray-800">
                          <div className="flex items-center gap-1 md:gap-2">
                            <span className="text-gray-700 dark:text-gray-300 text-xs md:text-sm font-medium">
                              {item.name}
                            </span>
                            <HelpCircle className="h-3 w-3 md:h-4 md:w-4 text-gray-400 cursor-help" />
                          </div>
                        </div>

                        {/* Plan Comparison Data Columns (Scrollable) */}
                        <FeatureRowCell item={item.plan1} index={0} isPlan2={false} />
                        <FeatureRowCell item={item.plan2} index={1} isPlan2={true} />
                        <FeatureRowCell item={item.plan3} index={2} isPlan2={false} />
                        <FeatureRowCell item={item.plan4} index={3} isPlan2={false} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="text-center mt-8 mb-3">
          <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
            Design + Printing + Fixing = ₹5,000 total • 50% advance, 50% after installation • All prices exclude GST
          </p>
        </div>

{/* Footer Note */}
<div className="text-center mt-0">
  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
    <strong>Need a custom solution?</strong>{' '}
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=probbeesolutions@gmail.com&su=Custom%20Marketing%20Solution&body=Hi%20ProBee,%0A%0AI%20would%20like%20to%20discuss%20a%20custom%20marketing%20solution."
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#3b82f6] dark:text-[#60a5fa] font-medium hover:underline"
    >
      Contact our team
    </a>{' '}
    for tailored campaigns and pricing.
  </p>
</div>

      </div>
    </section>
  );
};

export default ComparisonTable;