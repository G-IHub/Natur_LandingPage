import React from "react";
import Navbar from "../components/Navbar";
import Centerpiece from "../components/Centerpiece";
import HowItWorks from "../components/HowItWorks";
import Privacy from "../components/Privacy";
import Partnership from "../components/Partnership";
import Testimonials from "../components/Testimonials";
import BottomCTA from "../components/BottomCTA";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Wrapper with Wavy Background */}
      <div className="relative w-full overflow-hidden">
        <div className="relative z-10">
          <Navbar />

          <main className="pt-28 lg:pt-37 bg-[#F8FFF8] text-center px-4 lg:px-0 space-y-4">
            <div className="max-w-7xl mx-auto">
              {/* Hero Content */}
              <div className="flex flex-col gap-4 lg:gap-8">
                <h1 className="text-2xl lg:text-5xl font-bold font-[Arial] max-w-220 mx-auto leading-[1.2] text-black animate-[fadeIn_1s_ease-out_forwards] [animation-delay:0.2s] opacity-0">
                  <span className="text-primary">24/7</span> Personalized
                  Natural Wellness via WhatsApp, Powered by AI.
                </h1>
                <p className="text-xs lg:text-sm font-[Inter] text-[#001621] text-text-muted max-w-175 mx-auto leading-[1.6] animate-[fadeIn_1s_ease-out_forwards] [animation-delay:0.4s] opacity-0">
                  Discover your custom natural remedy using African medicinal
                  wisdom and modern diagnostics.  <br className="hidden lg:block" />Overcome generic health
                  solutions. Access personalized wellness guidance instantly.
                </p>
                <div className="flex justify-center font-[Inter] animate-[fadeIn_1s_ease-out_forwards] [animation-delay:0.6s] opacity-0">
                  <button className="flex items-center justify-center gap-3 px-4 py-2 lg:px-10 lg:py-4 rounded-full font-semibold text-xs lg:text-[0.7rem] bg-primary text-white shadow-[0_4px_15px_rgba(21,186,36,0.3)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(21,186,36,0.4)] transition-all duration-300">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <a href="https://wa.me/2349059575287?text=Hi%2C%20I'd%20like%20to%20check%20my%20symptoms">
                      Start Your Wellness Journey
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="-mt-16 flex justify-center items-end w-full">
              <Centerpiece />
            </div>
          </main>
        </div>
      </div>

      <div className="relative z-10 bg-white">
        <HowItWorks />
        <Privacy />
        <Partnership />
        <Testimonials />
        <BottomCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
