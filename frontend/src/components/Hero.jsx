import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-[#69b4ff]">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#0085ff]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#e1ffff]"></p>
            <p className=" font-medium text-sm md:text-base">
              NUESTROS MÁS VENDIDOS
            </p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Ultimos Articulos
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">COMPRA AHORA</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#e1ffff]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img className="w-full sm:w-1/2" src={assets.hero_img} alt="" />
    </div>
  );
};

export default Hero;
