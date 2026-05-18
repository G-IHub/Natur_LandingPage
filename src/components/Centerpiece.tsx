import React from "react";
import phoneMockup from "../assets/image2.png";
// import doc1 from "../assets/image.svg";
// import doc2 from "../assets/image1.svg";


const Centerpiece: React.FC = () => {
  return (
    <div className="relative flex justify-center mt-16 animate-[fadeIn_1s_ease-out_forwards] [animation-delay:0.8s] opacity-0 w-full border-2 border-green-100 rounded-full bg-green-50 overflow-hidden">
      <div className="relative w-full h-125 lg:h-150">
        {/* Phone Mockup */}
        <div className="absolute left-[70%] lg:left-[60%] bottom-[5%] lg:bottom-0 -translate-x-1/2 w-[250px] lg:w-[300px] z-10">
          <img
            src={phoneMockup}
            alt="WhatsApp Chat"
            className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] align-bottom"
          />
        </div>

        {/* Floating Profile Circles */}
        {/* <div className="absolute rounded-l-full rounded-tr-full overflow-hidden flex items-end justify-center shadow-md z-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2.5 hover:z-20 bg-[#FED73A] top-[10%] lg:top-[10%] left-[5%] lg:left-[-10%] w-20 h-20 lg:w-28 lg:h-28 animate-[float_5s_ease-in-out_infinite] px-2">
          <img src={doc1} alt="Doctor" className="w-full h-auto" />
        </div>
        <div className="absolute rounded-r-full rounded-tl-full overflow-hidden flex items-end justify-center shadow-md z-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2.5 hover:z-20 bg-[#897BD6] top-[10%] lg:top-[10%] right-[5%] lg:right-[20%] w-20 h-20 lg:w-28 lg:h-28 animate-[float_5s_ease-in-out_infinite] [animation-delay:-1s] px-2">
          <img src={doc2} alt="Doctor" className="w-full h-auto" />
        </div>
        <div className="absolute rounded-l-full rounded-tr-full overflow-hidden flex items-end justify-center shadow-md z-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2.5 hover:z-20 bg-[#3ADEFE] bottom-[15%] left-[-2%] lg:left-[-20%] w-20 h-20 lg:w-28 lg:h-28 animate-[float_5s_ease-in-out_infinite] [animation-delay:-2s] px-2">
          <img src={doc1} alt="Doctor" className="w-full h-auto" />
        </div>
        <div className="absolute rounded-r-full rounded-tl-full overflow-hidden flex items-end justify-center shadow-md z-20 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2.5 hover:z-20 bg-[#482BE6] bottom-[10%] right-0 lg:right-[20%] w-20 h-20 lg:w-28 lg:h-28 animate-[float_5s_ease-in-out_infinite] [animation-delay:-3s] px-2">
          <img src={doc2} alt="Doctor" className="w-full h-auto" />
        </div> */}

        {/* Floating Labels */}
        <div className="absolute bg-white py-1 px-2 lg:py-1 lg:px-4 rounded-r-full rounded-tl-full font-[Inter] font-medium text-[#505050] text-xs lg:text-xs shadow-xl z-20 whitespace-nowrap border border-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/90 top-[34%] left-[5%] lg:top-[35%] lg:left-[10%] animate-[float_5s_ease-in-out_infinite] [animation-delay:-1.5s]">
          Analyze your symptoms
        </div>
        <div className="absolute bg-white py-1 px-2 lg:py-1 lg:px-4 rounded-l-full rounded-tr-full font-[Inter] font-medium text-[#505050] text-xs lg:text-xs shadow-xl z-20 whitespace-nowrap border border-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/90 bottom-[45%] right-[5%] lg:bottom-[35%] lg:right-[18%] animate-[float_5s_ease-in-out_infinite] [animation-delay:-0.5s]">
          Get Treatment
        </div>
        <div className="absolute bg-white py-1 px-2 lg:py-1 lg:px-4 rounded-r-full rounded-tl-full font-[Inter] font-medium text-[#505050] text-xs lg:text-xs shadow-xl z-20 whitespace-nowrap border border-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/90 bottom-[33%] left-[25%] lg:bottom-[30%] lg:left-[20%] animate-[float_5s_ease-in-out_infinite] [animation-delay:-2.5s]">
          Feel better
        </div>
      </div>
    </div>
  );
};

export default Centerpiece;
