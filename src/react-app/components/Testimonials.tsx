import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "Love the creativity of the ProBee team and their quick response. My brand got huge visibility in a short time, totally worth it.",
    name: "Charan",
    role: "Founder, Webrakor & Co.",
    img: "/images/charan.jpg",
  },
    {
    id: 2,
    text: "Working with ProBee felt easy and professional. They handled everything from social media to local ads smoothly for us.",
    name: "Jai Ram",
    role: "Founder, PrintSmart Solutions",
    img: "/images/jairam.png",
  },
  {
    id: 3,
    text: "ProBee has completely changed how we promote our agency. Their digital and hoarding ideas are super effective and affordable.",
    name: "Production Team",
    role: "Tricine Media",
    img: "/images/tricine.jpg",
  },
  {
  id: 4,
  text: "The ProBee team helped us run hyper-local ads that actually converted. Their strategy and execution are far better than typical marketing agencies.",
  name: "Harsha",
  role: "Owner, PixelWave Studios",
  img: "https://randomuser.me/api/portraits/men/45.jpg",
},
{
  id: 5,
  text: "Our offline marketing was completely transformed. From hoardings to local promotions, ProBee handled everything with precision and speed.",
  name: "Sindhu",
  role: "Marketing Head, UrbanCart",
  img: "https://randomuser.me/api/portraits/women/22.jpg",
},
{
  id: 6,
  text: "We saw a clear boost in enquiries within the first week. Their creative approach and quick delivery make them stand out from the rest.",
  name: "Rakesh",
  role: "Founder, HomeFix Services",
  img: "https://randomuser.me/api/portraits/men/50.jpg",
},
{
  id: 7,
  text: "ProBee’s design and campaign planning helped us position our brand more professionally. Highly recommend for small businesses getting started.",
  name: "Serena",
  role: "Founder, Craftora Boutique",
  img: "https://randomuser.me/api/portraits/women/18.jpg",
},
{
  id: 8,
  text: "Very professional team. They understood our industry well and delivered campaigns that actually brought in footfall and genuine leads.",
  name: "Manikanta",
  role: "Manager, GreenBowl Café",
  img: "https://randomuser.me/api/portraits/men/12.jpg",
},
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const { text, name, role, img } = testimonials[index];

  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background gradients */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 dark:bg-blue-900/20 rounded-full blur-3xl -z-10"
        style={{ backgroundColor: "rgba(59, 130, 246, 0.3)" }} // custom color with transparency
      ></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 dark:bg-blue-800/20 rounded-full blur-3xl -z-10"
        style={{ backgroundColor: "rgba(59, 130, 246, 0.3)" }}
      ></div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <h3
          className="font-semibold text-left mb-8 text-lg md:text-xl dark:text-blue-400"
          style={{ color: "#3b82f6" }}
        >
          What they say
        </h3>

        {/* Right Quote Mark */}
        <span
          className="absolute text-7xl md:text-8xl right-6 top-10 select-none dark:text-blue-400"
          style={{ color: "#3b82f6" }}
        >
          ”
        </span>

        {/* Quote */}
        <p className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 leading-snug max-w-3xl mb-16">
          “{text}”
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          {/* Profile Left */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white text-base">
                {name}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {role}
              </p>
            </div>
          </div>

          {/* Navigation Buttons Right */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FaArrowLeft
                className="w-4 h-4 dark:text-blue-400"
                style={{ color: "#3b82f6" }}
              />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FaArrowRight
                className="w-4 h-4 dark:text-blue-400"
                style={{ color: "#3b82f6" }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
