import { cn } from "@/lib/utils";
import { IconArrowUpRight } from "@tabler/icons-react";
import React from "react";
import { Button } from "./ui/button";
import { ProgressiveBlur } from "./ui/scroll-blur";
import Plasma from "./ui/plasma-background";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] bg-gradient-to-b from-neutral-100 to-[#f4f4f4]">
      <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-7xl items-center px-6 md:px-8 lg:px-12">
        {/* Left Side - Content */}
        <div className="z-10 flex w-full flex-col items-start gap-5 md:w-1/2 md:pr-12 lg:pr-20">
          {/* Main Heading */}
          <h1 className="font-times-heading text-text w-full text-left text-[34px] leading-[1.2] md:text-[38px] lg:text-[40px]">
            <span className="text-subtext">Hey, I&apos;m&nbsp;</span>
            <Image
              width={100}
              height={10}
              src="/avatar.png"
              alt="Avatar"
              className="inline-block h-[38px] w-14 translate-y-[6px] rounded-full border border-black object-cover shadow-md shadow-neutral-900 md:h-[42px] md:w-16 md:translate-y-[7px]"
            />
            <span>&nbsp;Navdeep</span>
            <br />
            <span className="tracking-tight">Designer Engineer&nbsp;</span>
            <span className="inline-flex translate-y-[6px] gap-2 md:translate-y-[7px]">
              <Image
                width={100}
                height={10}
                src="/dashboard.png"
                alt="Design"
                className="object-fit inline-block h-[38px] w-14 rounded-full border border-black shadow-md shadow-neutral-600 md:h-[42px] md:w-16"
              />
              <Image
                width={100}
                height={10}
                src="/design2.png"
                alt="Design"
                className="object-fit inline-block h-[38px] w-14 rounded-full border border-black shadow-md shadow-neutral-600 md:h-[42px] md:w-16"
              />
            </span>
            <br />
            <span className="text-subtext">Living in&nbsp;</span>
            <Image
              width={100}
              height={10}
              src="https://images.unsplash.com/photo-1578924825042-31d14cf13c35?q=80&w=1239&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Canada"
              className="inline-block h-[38px] w-14 translate-y-[6px] rounded-full border border-black object-cover shadow-md shadow-neutral-900 md:h-[42px] md:w-16 md:translate-y-[7px]"
            />
            <span>&nbsp;Canada</span>
          </h1>

          {/* Description */}
          <div className="w-full max-w-lg">
            <p className="text-left text-[15px] leading-relaxed tracking-tight text-neutral-950/60">
              I help startups and brands turn ideas into visually striking,
              conversion-focused web experiences built with precision and
              purpose.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-3">
            <Button
              variant="default"
              size="lg"
              className={cn(
                "group flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-b from-neutral-300/60 from-2% via-neutral-900 via-10% to-neutral-950 to-90% px-6 py-3 text-sm text-white",
                "shadow-lg shadow-neutral-700/80",
                "border border-black",
                "transition duration-200 hover:scale-99",
              )}
            >
              Get in Touch Today
              <IconArrowUpRight className="size-5 stroke-2 text-neutral-200 transition-colors duration-200 group-hover:text-neutral-200/90" />
            </Button>
          </div>
        </div>

        {/* Right Side - 3D Element Container */}
        <div className="relative hidden h-full w-1/2 items-center justify-center md:flex">
          {/* Placeholder for 3D element */}
          <div className="flex h-full items-center justify-center">
            {/* Add your 3D element here */}
          </div>
        </div>
      </div>
      {/* Plasma Background - Absolute positioned to cover entire hero */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <Plasma
          color="#ffffff"
          speed={0.7}
          direction="reverse"
          scale={0.9}
          opacity={0.3}
          mouseInteractive={false}
        />
      </div>
    </div>
  );
};

export default Hero;
