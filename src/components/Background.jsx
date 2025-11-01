import React from "react";
import bgDesign from "../assets/bg-design.png";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={bgDesign}
          alt="Background Design"
          className="
            w-[95%] sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[40%]
            object-contain opacity-90
            translate-y-8 md:translate-y-12 lg:translate-y-16
            transition-all duration-700
          "
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#053537]/50 to-[#A6BFBF]/70"></div>

      <div className="absolute inset-0 text-white/10 font-mono select-none">
        <span className="absolute top-[10%] left-[8%] text-3xl sm:text-4xl md:text-5xl">&lt;/&gt;</span>
        <span className="absolute top-[30%] right-[10%] text-3xl sm:text-4xl md:text-5xl">&lt;/&gt;</span>
        <span className="absolute bottom-[25%] left-[20%] text-4xl sm:text-5xl md:text-6xl">&lt;/&gt;</span>
        <span className="absolute bottom-[45%] right-[15%] text-3xl sm:text-4xl md:text-5xl">&lt;/&gt;</span>
      </div>
    </div>
  );
};

export default Background;
