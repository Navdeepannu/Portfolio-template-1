import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Web Design",
    image: "/design.png",
    description: "Unleash Your full Potential with us",
  },
  {
    id: 2,
    title: "Web Development",
    image: "/design2.png",
    description: "Branding that you have trusted",
  },
  {
    id: 3,
    title: "Branding",
    image: "/project1.png",
    description: "Creative brand identity solutions",
  },
  {
    id: 4,
    title: "UX & UI",
    image: "/dashboard.png",
    description: "User-centered design experiences",
  },
];

const tags = [
  "Product Design",
  "UX Design",
  "UI Design",
  "Framer",
  "Branding",
  "Webflow",
];

const Services = () => {
  return (
    <div className="relative bg-white py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-12">
        {/* Section Label */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-black" />
          <span className="text-sm font-medium text-black">Services</span>
        </div>

        {/* Heading */}
        <h2 className="font-times-heading mb-20 max-w-xl text-[36px] leading-tight tracking-tight text-black md:text-[42px] md:mb-24">
          Premium services designed for impact
        </h2>

        {/* Services Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-3xl bg-neutral-100 p-8 transition-all duration-300 hover:bg-neutral-200"
            >
              {/* Service Image */}
              <div className="mb-6 flex justify-center">
                <div className="relative h-44 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-center text-xl font-medium text-black">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={cn(
                "rounded-full bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-700",
                "transition-all duration-200 hover:bg-neutral-200",
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
