import "@/react-app/index.css";

import Hero from "@/react-app/components/Hero";
import StatsSection from "@/react-app/components/StatsSection";
import Advantages from "@/react-app/components/Advantages";
import RetentionSection from "@/react-app/components/RetentionSection";
import Pricing from "@/react-app/components/Pricing";
import Quote from "@/react-app/components/Testimonials";
import FAQ from "@/react-app/components/FAQ";
import ScrollToTop from "@/react-app/components/ScrollToTop";

export function App() {
  return (
    <>
      <ScrollToTop />

      <section id="hero">
        <Hero />
      </section>

      <section id="stats">
        <StatsSection />
      </section>

      <section id="advantages">
        <Advantages />
      </section>

      <section id="retention">
        <RetentionSection />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="quote">
        <Quote />
      </section>

      <section id="faq">
        <FAQ />
      </section>
    </>
  );
}
