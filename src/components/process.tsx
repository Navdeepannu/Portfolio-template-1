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
    <div ref={sectionRef} className="bg-white py-24 md:py-32">
      <Container>
        {/* Section Header */}
        <div className="mb-16 md:mb-20 flex flex-col items-start gap-4">
          <p className="flex items-center gap-2 text-base">
            <span className="size-2 rounded-full bg-black" />
            Process
          </p>

          <h1 className="font-times-heading text-[36px] md:text-[42px] leading-tight max-w-2xl">
            The strategy behind exceptional results
          </h1>
        </div>

        {/* Process Cards */}
        <div className="mx-auto w-full max-w-5xl space-y-8 md:space-y-10">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`relative rounded-2xl md:rounded-3xl bg-neutral-100 p-8 md:p-10 lg:p-12 transition-all duration-500 ${
                animationProgress > index * 50
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Step Label */}
              <div className="mb-6 text-sm text-neutral-500">{step.step}</div>

              {/* Title */}
              <h2 className="mb-4 text-2xl md:text-3xl font-normal text-black">
                {step.title}
              </h2>

              {/* Description */}
              <p className="mb-12 md:mb-14 max-w-2xl text-base leading-relaxed text-neutral-700">
                {step.description}
              </p>

              {/* Icon Container */}
              <div className="flex items-end justify-between">
                <div className="text-neutral-400">{step.icon}</div>

                {/* Step Number */}
                <div className="text-sm text-neutral-400">- {step.number}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Process;
