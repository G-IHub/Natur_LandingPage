import React from "react";

const Partnership: React.FC = () => {
  return (
    <section className="py-16 md:py-30 px-2 md:px-20 bg-[#EDFFEE] font-[Inter]">
      <div className="relative rounded-4xl overflow-hidden bg-linear-to-br from-[#0cba1e] to-[#055e0c]">
        {/* Abstract wavy background shape */}
        {/* <div
            className="absolute top-0 right-0 w-[80%] h-full opacity-60 mix-blend-overlay"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)",
              clipPath: "polygon(100% 0, 100% 100%, 0 100%, 30% 50%, 0 0)",
            }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-[50%] h-[150%] opacity-30 mix-blend-overlay rounded-[100%]"
            style={{
              background:
                "radial-gradient(circle at 30% 70%, #ffffff 0%, transparent 60%)",
              transform: "translate(-20%, 10%)",
            }}
          ></div> */}

        <svg
          className="absolute inset-0 w-full h-full hidden lg:block"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 120 C 250 -20, 700 280, 1300 120 L 1300 350 L -100 350 Z"
            fill="#006400"
          />
        </svg>

        <div className="relative z-10 px-4 py-8 md:px-20 md:py-24 md:max-w-200 space-y-4 md:space-y-8">
          <h2 className="text-3xl lg:text-[3rem] font-bold text-white leading-tight tracking-tight">
            How to work together <span className="opacity-90">.</span>
          </h2>
          <p className="text-white/90 text-base font-medium lg:text-lg leading-relaxed max-w-162.5">
            We're open to partnerships with organizations, wellness brands,
            herbal companies, and health-focused communities across the natural
            health and wellness space. If your mission aligns with ours, we'd
            love to connect.
          </p>
          <button className="flex items-center gap-3 bg-white text-primary px-6 py-3 lg:px-8 lg:py-3.5 rounded-full font-bold text-[0.95rem] hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer">
            <a href="https://wa.me/2349059575287?text=Hi%2C%20I'd%20like%20to%20check%20my%20symptoms">
              Get in Touch
            </a>
            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-primary ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
