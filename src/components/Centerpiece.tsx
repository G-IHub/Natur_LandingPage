import React from "react";
import phoneMockup from "../assets/image2.png";
import wave from "../assets/wave.svg";
import doc1 from "../assets/image.svg";
import doc2 from "../assets/image1.svg";

const Centerpiece: React.FC = () => {
  return (
    <div className="relative flex justify-center mt-16 animate-[fadeIn_1s_ease-out_forwards] [animation-delay:0.8s] opacity-0 w-full">
      <div className="relative w-full h-125 lg:h-150">
        {/* Phone Mockup */}
        <div className="absolute left-[60%] lg:left-175 -bottom-[25%] lg:-bottom-40 -translate-x-1/2 w-[350px] lg:w-125 z-10">
          <img
            src={phoneMockup}
            alt="WhatsApp Chat"
            className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] align-bottom"
          />
        </div>

        {/* Floating Profile Circles */}
        <div className="absolute rounded-l-full rounded-tr-full overflow-hidden flex items-end justify-center shadow-md z-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2.5 hover:z-20 bg-[#FED73A] top-[5%] left-[5%] lg:left-[15%] w-20 h-20 lg:w-30 lg:h-30 animate-[float_5s_ease-in-out_infinite] px-2">
          <img src={doc1} alt="Doctor" className="w-full h-auto" />
        </div>
        <div className="absolute rounded-r-full rounded-tl-full overflow-hidden flex items-end justify-center shadow-md z-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2.5 hover:z-20 bg-[#897BD6] top-[5%] right-[5%] lg:right-[10%] w-20 h-20 lg:w-30 lg:h-30 animate-[float_5s_ease-in-out_infinite] [animation-delay:-1s] px-2">
          <img src={doc2} alt="Doctor" className="w-full h-auto" />
        </div>
        <div className="absolute rounded-l-full rounded-tr-full overflow-hidden flex items-end justify-center shadow-md z-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2.5 hover:z-20 bg-[#3ADEFE] bottom-[15%] left-[0%] lg:left-[5%] w-20 h-20 lg:w-30 lg:h-30 animate-[float_5s_ease-in-out_infinite] [animation-delay:-2s] px-2">
          <img src={doc1} alt="Doctor" className="w-full h-auto" />
        </div>
        <div className="absolute rounded-r-full rounded-tl-full overflow-hidden flex items-end justify-center shadow-md z-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2.5 hover:z-20 bg-[#482BE6] bottom-[10%] right-[5%] lg:right-[10%] w-20 h-20 lg:w-30 lg:h-30 animate-[float_5s_ease-in-out_infinite] [animation-delay:-3s] px-2">
          <img src={doc2} alt="Doctor" className="w-full h-auto" />
        </div>

        {/* Floating Labels */}
        <div className="absolute bg-white px-4 py-2 lg:px-8 lg:py-2 rounded-r-full rounded-tl-full font-medium text-xs lg:text-[1.1rem] shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-20 whitespace-nowrap border border-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/90 top-[22%] left-[4%] lg:left-[22%] animate-[float_5s_ease-in-out_infinite] [animation-delay:-1.5s]">
          Analyze your symptoms
        </div>
        <div className="absolute bg-white px-4 py-2 lg:px-8 lg:py-2 rounded-l-full rounded-tr-full font-medium text-xs lg:text-[1.1rem] shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-20 whitespace-nowrap border border-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/90 bottom-[40%] right-[10%] lg:right-[27%] animate-[float_5s_ease-in-out_infinite] [animation-delay:-0.5s]">
          Get Treatment
        </div>
        <div className="absolute bg-white px-4 py-2 lg:px-8 lg:py-2 rounded-r-full rounded-tl-full font-medium text-xs lg:text-[1.1rem] shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-20 whitespace-nowrap border border-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/90 bottom-[25%] left-[22%] lg:left-[30%] animate-[float_5s_ease-in-out_infinite] [animation-delay:-2.5s]">
          Feel better
        </div>
        <div className="w-full hidden lg:block">
          <img src={wave} alt="Wave" className="absolute bottom-0" />
          <img src={wave} alt="Wave" className="absolute bottom-30" />
          <img src={wave} alt="Wave" className="absolute bottom-60" />
        </div>
      </div>
    </div>
  );
};

export default Centerpiece;
