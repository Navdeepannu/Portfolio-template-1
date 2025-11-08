"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "./container";
import { Calendar, Hand, Rocket, PackageCheck } from "lucide-react";

interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  number: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    step: "step1",
    title: "Let's Get In Touch",
    description:
      "Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas in even greater detail.",
    icon: <Calendar className="h-12 w-12 stroke-[1.5]" />,
    number: "001",
  },
  {
    id: 2,
    step: "step2",
    title: "Grab Your Designs",
    description:
      "Tell me your unique vision, and I'll create stunning, functional designs that perfectly align with your goals and bring your ideas to life seamlessly.",
    icon: <Hand className="h-12 w-12 stroke-[1.5]" />,
    number: "002",
  },
  {
    id: 3,
    step: "step3",
    title: "Kickstart Development",
    description:
      "I expertly transform your designs into a powerful, scalable solution, fully ready to launch and optimized for performance, usability, and growth.",
    icon: <Rocket className="h-12 w-12 stroke-[1.5]" />,
    number: "003",
  },
  {
    id: 4,
    step: "step4",
    title: "And Hand Over",
    description:
      "Receive a fully tested, polished, high-quality product tailored to your needs with support for seamless performance and long-term success.",
    icon: <PackageCheck className="h-12 w-12 stroke-[1.5]" />,
    number: "004",
  },
];

const Process = () => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation when section is visible
            let progress = 0;
            const interval = setInterval(() => {
              progress += 1;
              setAnimationProgress(progress);
              if (progress >= 100) {
                clearInterval(interval);
              }
            }, 20);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="border-t border-dashed border-neutral-200 bg-white py-8 md:py-10 lg:py-12">
      <Container>
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start gap-4 md:mb-12 md:gap-3 lg:mb-20 lg:gap-4">
          <p className="flex items-center gap-2 text-base md:text-[14px] lg:text-base">
            <span className="size-2 rounded-full bg-black md:size-1.5 lg:size-2" />
            Process
          </p>

          <h1 className="font-times-heading max-w-2xl text-[36px] leading-tight md:text-[36px] lg:text-[42px]">
            The strategy behind exceptional results
          </h1>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 gap-6 md:gap-5 lg:grid-cols-2 lg:gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`relative rounded-2xl bg-neutral-100 p-8 transition-all duration-500 md:rounded-2xl md:p-7 lg:rounded-3xl lg:p-12 ${
                animationProgress > index * 25
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Step Label */}
              <div className="mb-6 text-sm text-neutral-500 md:mb-4 md:text-[13px] lg:mb-6 lg:text-sm">{step.step}</div>

              {/* Title */}
              <h2 className="mb-4 text-2xl font-normal text-black md:mb-3 md:text-xl lg:mb-4 lg:text-3xl">
                {step.title}
              </h2>

              {/* Description */}
              <p className="mb-12 max-w-2xl text-base leading-relaxed text-neutral-700 md:mb-10 md:text-[15px] lg:mb-14 lg:text-base">
                {step.description}
              </p>

              {/* Icon Container */}
              <div className="flex items-end justify-between">
                <div className="text-neutral-400 [&>svg]:md:h-10 [&>svg]:md:w-10 [&>svg]:lg:h-12 [&>svg]:lg:w-12">{step.icon}</div>

                {/* Step Number */}
                <div className="text-sm text-neutral-400 md:text-[13px] lg:text-sm">- {step.number}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Process;
