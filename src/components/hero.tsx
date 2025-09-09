import { cn } from "@/lib/utils";
import { IconArrowUpRight } from "@tabler/icons-react";
import React from "react";
import { Button } from "./ui/button";
import { ProgressiveBlur } from "./ui/scroll-blur";
import Plasma from "./ui/plasma-background";

const Hero = () => {
  return (
    <div className="relative flex items-center bg-gradient-to-b from-neutral-100 to-[#f4f4f4]">
      <ProgressiveBlur position="top" backgroundColor="#eee" />
      <ProgressiveBlur position="bottom" backgroundColor="#eee" />

      {/* left side */}
      <div className="z-10 flex flex-col items-start gap-4 px-[18px] pt-[140px] pb-[100px] md:mx-auto md:max-w-2xl md:pr-20">
        <h1 className="font-times-heading text-text w-full max-w-md text-left text-[42px] leading-tight">
          <span className="text-subtext">Hey, I'm&nbsp;</span>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Avatar"
            className="inline-block h-11 w-16 rounded-full border border-black object-cover shadow-md shadow-neutral-900"
          />
          <span>&nbsp;Nav</span>
          <br />
          <span>Product Designer&nbsp;</span>
          <img
            src="https://images.unsplash.com/photo-1642756060995-5d21113115ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzaWduJTIwcHJvZHVjdHxlbnwwfHwwfHx8Mg%3D%3D"
            alt="Design"
            className="object-fit inline-block h-11 w-16 rounded-full border border-black shadow-md shadow-neutral-600"
          />
          <br />
          <span className="text-subtext">Living in&nbsp;</span>
          <img
            src="https://images.unsplash.com/photo-1578924825042-31d14cf13c35?q=80&w=1239&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Canada"
            className="inline-block h-11 w-16 rounded-full border border-black object-cover shadow-md shadow-neutral-900"
          />
          <span>&nbsp;Canada</span>
        </h1>

        <div className="mt-1 w-full max-w-md">
          <p className="text-left text-base tracking-tight text-neutral-950/60">
            Frontend developer with 3+ years of experience building fast,
            accessible web apps using React, Tailwindcss.
          </p>
        </div>

        {/* cta */}
        <div className="mt-1 w-full max-w-md">
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

      {/* right side */}
      <div className="absolute top-0 right-0 left-60 hidden h-full w-full overflow-hidden md:block">
        {/* <video
          src="https://framerusercontent.com/assets/jVR3NbxSPx6dRPHpBXPZVTec50.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        /> */}
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
