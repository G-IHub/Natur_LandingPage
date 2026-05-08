import React from 'react';

const BottomCTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#EDFFEE]">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="relative rounded-[20px] overflow-hidden bg-gradient-to-br from-[#0cba1e] to-[#055e0c] shadow-2xl py-20 px-8 lg:px-16 text-center">
          {/* Abstract wavy background shapes */}
          <div
            className="absolute top-0 right-0 w-[80%] h-full opacity-60 mix-blend-overlay"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)",
              clipPath: "polygon(100% 0, 100% 100%, 0 100%, 20% 40%, 0 0)",
            }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-[60%] h-[150%] opacity-30 mix-blend-overlay rounded-[100%]"
            style={{
              background:
                "radial-gradient(circle at 20% 80%, #ffffff 0%, transparent 60%)",
              transform: "translate(-30%, 20%)",
            }}
          ></div>

          <div className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center">
            <h2 className="text-3xl lg:text-[3rem] font-bold text-white mb-6 leading-tight tracking-tight">
              Your body deserves answers rooted in nature — not guesswork.
            </h2>
            <p className="text-white/90 text-[1rem] lg:text-[1.1rem] leading-relaxed mb-10 max-w-[700px]">
              African herbal wisdom, modern diagnostics, and G-Natures certified
              specialists — all in one WhatsApp conversation. Start now and get
              your personalized remedy plan in minutes.
            </p>
            <button className="flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-[0.95rem] hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer">
              Talk to Natur today
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
      </div>
    </section>
  );
};

export default BottomCTA;
