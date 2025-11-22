const RetentionSection = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-12 md:py-24 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE - HEADING */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-snug">
            Buzz Bigger<br/>with{" "}
            <span
              className="dark:text-blue-400"
              style={{ color: '#3b82f6' }}
            >
              ProBee
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
            Our creative marketing and data-backed strategies help Indian businesses
            attract more customers, grow visibility, and build long-term brand trust.
          </p>
        </div>

        {/* RIGHT SIDE - STATS */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
          {/* Stat 1 */}
          <div>
            <p
              className="text-5xl font-extrabold dark:text-blue-400 mb-2"
              style={{ color: '#3b82f6' }}
            >
              94%
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Average satisfaction from local clients for our branding and campaigns
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-20 w-px bg-gray-300 dark:bg-gray-700" />

          {/* Stat 2 */}
          <div>
            <p
              className="text-5xl font-extrabold dark:text-blue-400 mb-2"
              style={{ color: '#3b82f6' }}
            >
              4.1x
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Boost in ad engagement and lead conversion through strategic local reach
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetentionSection;
