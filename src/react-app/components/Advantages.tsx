const AdvantagesSection = () => {
  return (
    <section className="px-6 pt-4 pb-24 md:pt-24 md:px-12 lg:px-20 bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - BIGGER IMAGE */}
        <div className="relative flex justify-center md:justify-start">
          {/* Decorative circles */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-300 to-blue-400 dark:from-blue-600 dark:to-blue-700 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r from-blue-300 to-blue-400 dark:from-blue-600 dark:to-blue-700 rounded-full blur-2xl opacity-30"></div>

          {/* Main image (bigger, aesthetic) */}
          <div className="relative w-[90%] md:w-[480px] lg:w-[630px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 z-10">
            <img
              src="https://plus.unsplash.com/premium_photo-1661693870771-dbbd8b95b2b1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Entrepreneur working on laptop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] dark:text-white mb-6 leading-snug">
            Helping Entrepreneurs <br />
            <span className="text-[#3b82f6] dark:text-[#60a5fa]">Grow Smarter</span>
          </h2>

          {/* Tag buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            {["Digital Marketing", "Offline Ads", "Brand Growth"].map((tag) => (
              <button
                key={tag}
                className="px-4 py-1 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            At ProBee Solutions, we combine creativity and data-driven strategy to
            empower small businesses. Our team delivers tailored marketing plans,
            affordable pricing, and consistent results, helping your brand get noticed,
            build trust, and grow faster both online and offline.
          </p>

          {/* CTA Button */}
          <button className="px-8 py-3 bg-[#3b82f6] text-white rounded-lg font-semibold shadow-md hover:bg-[#2563eb] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
