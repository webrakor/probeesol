import React, { useState } from 'react';

const Blog: React.FC = () => {
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);

  const toggleExpand = (postId: number) => {
    setExpandedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const blogPosts = [
    {
      id: 1,
      category: 'DIGITAL MARKETING',
      title: 'Boost Your Brand with SEO & Content Marketing in 2025',
      previewContent: `
Learn how businesses can leverage SEO, Google Ads, and social media campaigns to dominate their niche. Combining analytics with creative content ensures measurable growth and higher ROI.
      `,
      fullContent: `
Learn how businesses can leverage SEO, Google Ads, and social media campaigns to dominate their niche. Combining analytics with creative content ensures measurable growth and higher ROI.

Content marketing now goes beyond simple blog posts; it involves video, podcasts, and interactive media. By creating valuable and targeted content, brands can position themselves as authorities in their field and attract high-quality leads consistently.

Additionally, monitoring KPIs, performing A/B testing, and adjusting campaigns dynamically can maximize ROI. Leveraging analytics tools enables businesses to refine their strategies continuously, ensuring that every marketing effort contributes meaningfully to growth.
      `,
      image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0',
      date: 'NOV 22, 2025',
      author: 'PROBEE SOLUTIONS',
      readTime: '6 min read'
    },
    {
      id: 2,
      category: 'WEB DEVELOPMENT',
      title: 'Modern Web Development: React, Next.js & Tailwind CSS',
      previewContent: `
Building fast, scalable websites is essential for business growth. Learn how React, Next.js, and Tailwind CSS work together to deliver responsive, high-performance websites.
      `,
      fullContent: `
Building fast, scalable websites is essential for business growth. Learn how React, Next.js, and Tailwind CSS work together to deliver responsive, high-performance websites.

React allows developers to build reusable components, enhancing productivity and consistency. Next.js provides server-side rendering and static site generation for improved SEO and load times, while Tailwind CSS enables rapid styling with utility classes and a mobile-first approach.

Combining these technologies, developers can create interactive, visually appealing, and highly optimized websites. Performance monitoring, accessibility considerations, and responsive layouts are key to delivering an excellent user experience that drives engagement and conversions.
      `,
      image: 'https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
      date: 'NOV 20, 2025',
      author: 'PROBEE SOLUTIONS',
      readTime: '7 min read'
    },
    {
      id: 3,
      category: 'DIGITAL MARKETING',
      title: 'Email Marketing That Actually Converts',
      previewContent: `
Stop spamming and start engaging. This guide dives into proven email strategies that turn leads into loyal customers through personalization and automation.
      `,
      fullContent: `
Stop spamming and start engaging. This guide dives into proven email strategies that turn leads into loyal customers through personalization and automation.

Segmenting your audience allows targeted campaigns, which increases open and click-through rates. Personalization, compelling subject lines, and effective email sequencing are key to nurturing leads through the funnel.

Automation tools enable scalable campaigns, while A/B testing and analytics ensure campaigns perform optimally. By integrating behavioral triggers and tracking conversions, businesses can maximize ROI while providing value to their subscribers.
      `,
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0',
      date: 'NOV 18, 2025',
      author: 'PROBEE SOLUTIONS',
      readTime: '5 min read'
    },
    {
      id: 4,
      category: 'WEB DEVELOPMENT',
      title: 'Optimizing Website Performance for Higher Conversions',
      previewContent: `
Page speed, accessibility, and responsive design are crucial for conversions. Learn practical strategies to improve user experience and keep visitors engaged.
      `,
      fullContent: `
Page speed, accessibility, and responsive design are crucial for conversions. Learn practical strategies to improve user experience and keep visitors engaged.

Optimizing images, using lazy loading, and implementing server-side rendering can dramatically improve loading times. Core Web Vitals metrics, caching strategies, and performance monitoring help identify bottlenecks that affect SEO and user experience.

Advanced optimization techniques, such as code splitting, minification, and efficient resource loading, contribute to faster page interactions. By maintaining high performance and accessibility standards, websites can increase retention, reduce bounce rates, and ultimately drive higher conversions.
      `,
      image: 'https://plus.unsplash.com/premium_photo-1661544807248-2786202627e8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0',
      date: 'NOV 15, 2025',
      author: 'PROBEE SOLUTIONS',
      readTime: '6 min read'
    },
    {
      id: 5,
      category: 'DIGITAL MARKETING',
      title: 'Social Media Marketing Trends You Must Follow',
      previewContent: `
Social media is constantly evolving. Stay ahead of the curve by understanding the latest trends and tools that make marketing more effective.
      `,
      fullContent: `
Social media is constantly evolving. Stay ahead of the curve by understanding the latest trends and tools that make marketing more effective.

Short-form video content, AI-powered targeting, and cross-platform engagement are shaping the current landscape. Brands must create content that resonates with their audience and adapt quickly to platform algorithm changes.

Analytics and performance measurement are essential for determining ROI and optimizing campaigns. Consistency in branding, audience interaction, and leveraging emerging platforms are key strategies for achieving long-term growth and engagement.
      `,
      image: 'https://images.unsplash.com/photo-1730337356162-19c636fda8b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
      date: 'NOV 12, 2025',
      author: 'PROBEE SOLUTIONS',
      readTime: '5 min read'
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Left Aligned Header with Subtitle */}
        <div className="text-left mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
            Insights
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-2xl">
            Latest trends, strategies, and insights from ProBee Solutions
          </p>
        </div>

        {/* Blog Posts List */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border-b border-gray-100 dark:border-gray-800 pb-8 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
                {/* Image - Slightly decreased for desktop */}
                <div className="lg:w-64 xl:w-72 flex-shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-32 md:h-36 lg:h-40 xl:h-44 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Content - Slightly decreased for desktop */}
                <div className="flex-1 min-w-0">
                  <div className="space-y-3">
                    {/* Category and Metadata */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      <span className="font-semibold">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>POST BY {post.author}</span>
                    </div>

                    {/* Title - Slightly decreased for desktop */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                      {post.title}
                    </h3>

                    {/* Description - Slightly decreased for desktop */}
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {post.previewContent}
                    </p>

                    {/* Expandable Content */}
                    {expandedPosts.includes(post.id) && (
                      <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-base">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {post.fullContent}
                        </p>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {post.readTime}
                      </span>
                      <button
                        onClick={() => toggleExpand(post.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                      >
                        {expandedPosts.includes(post.id) ? 'Show Less' : 'Read More'}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedPosts.includes(post.id) ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Maintenance Footer */}
        <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800">
          <div className="text-center">
            <span className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              More articles coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;