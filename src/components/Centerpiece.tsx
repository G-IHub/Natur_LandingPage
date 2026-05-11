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
        <div className="absolute left-[70%] lg:left-175 bottom-[-25%] lg:-bottom-40 -translate-x-1/2 w-[350px] lg:w-125 z-10">
          <img
            src={phoneMockup}
            alt="WhatsApp Chat"
            className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] align-bottom"
          />
        </div>

        {/* Floating Profile Circles */}
        <div className="absolute rounded-l-full rounded-tr-full overflow-hidden flex items-end justify-center shadow-md z-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2.5 hover:z-20 bg-[#FED73A] top-[10%] lg:top-0 left-[5%] lg:left-[15%] w-20 h-20 lg:w-30 lg:h-30 animate-[float_5s_ease-in-out_infinite] px-2">
          <img src={doc1} alt="Doctor" className="w-full h-auto" />
        </div>
        <div className="absolute rounded-r-full rounded-tl-full overflow-hidden flex items-end justify-center shadow-md z-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2.5 hover:z-20 bg-[#897BD6] top-[10%] lg:top-0 right-[5%] lg:right-[20%] w-20 h-20 lg:w-30 lg:h-30 animate-[float_5s_ease-in-out_infinite] [animation-delay:-1s] px-2">
          <img src={doc2} alt="Doctor" className="w-full h-auto" />
        </div>
        <div className="absolute rounded-l-full rounded-tr-full overflow-hidden flex items-end justify-center shadow-md z-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2.5 hover:z-20 bg-[#3ADEFE] bottom-[15%] left-[-2%] lg:left-[5%] w-20 h-20 lg:w-30 lg:h-30 animate-[float_5s_ease-in-out_infinite] [animation-delay:-2s] px-2">
          <img src={doc1} alt="Doctor" className="w-full h-auto" />
        </div>
        <div className="absolute rounded-r-full rounded-tl-full overflow-hidden flex items-end justify-center shadow-md z-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2.5 hover:z-20 bg-[#482BE6] bottom-[10%] right-0 lg:right-[10%] w-20 h-20 lg:w-30 lg:h-30 animate-[float_5s_ease-in-out_infinite] [animation-delay:-3s] px-2">
          <img src={doc2} alt="Doctor" className="w-full h-auto" />
        </div>

        {/* Floating Labels */}
        <div className="absolute bg-white p-2 lg:p-2.5 rounded-r-full rounded-tl-full font-[Inter] font-medium text-[#505050] text-xs lg:text-sm shadow-xl z-20 whitespace-nowrap border border-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/90 top-[34%] left-[-2%] lg:top-[20%] lg:left-[30%] animate-[float_5s_ease-in-out_infinite] [animation-delay:-1.5s]">
          Analyze your symptoms
        </div>
        <div className="absolute bg-white p-2 lg:py-2.5 lg:px-10 rounded-l-full rounded-tr-full font-[Inter] font-medium text-[#505050] text-xs lg:text-sm shadow-xl z-20 whitespace-nowrap border border-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/90 bottom-[32%] right-[4%] lg:bottom-[42%] lg:right-[32%] animate-[float_5s_ease-in-out_infinite] [animation-delay:-0.5s]">
          Get Treatment
        </div>
        <div className="absolute bg-white p-2 lg:py-2.5 lg:px-10 rounded-r-full rounded-tl-full font-[Inter] font-medium text-[#505050] text-[9px] lg:text-sm shadow-xl z-20 whitespace-nowrap border border-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/90 bottom-[14%] left-[22%] lg:bottom-[20%] lg:left-[32%] animate-[float_5s_ease-in-out_infinite] [animation-delay:-2.5s]">
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
