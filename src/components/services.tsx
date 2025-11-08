import React from "react";
import { ServicesBento } from "./services-bento";

const Services = () => {
  return (
    <div className="relative border-t border-dashed border-neutral-200 bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-6 lg:px-12">
        {/* Section Label */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-black" />
          <span className="text-sm font-medium text-black">Services</span>
        </div>

        {/* Heading */}
        <h2 className="font-times-heading mb-12 max-w-xl text-[36px] leading-tight tracking-tight text-black md:text-[40px] lg:text-[44px]">
          What I do best
        </h2>

        {/* Bento Grid */}
        <ServicesBento />
      </div>
    </div>
  );
};

export default Services;
