"use client";

import React, { useState } from "react";
import Container from "./container";
import LandingProjects from "./landing-projects";
import { Button } from "./ui/button";
import {
  IconArrowDown,
  IconArrowUp,
} from "@tabler/icons-react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="border-b border-dashed border-neutral-200 py-8 md:py-10 lg:py-12">
      {/* Header Section */}
      <Container>
        <div className="flex flex-col items-start gap-4 md:gap-3 lg:gap-4">
          <p className="flex items-center gap-2 text-base md:text-[14px] lg:text-base">
            <span className="size-2 rounded-full bg-black md:size-1.5 lg:size-2" />
            My Work
          </p>
          <h1 className="font-times-heading text-[36px] leading-tight md:text-[36px] lg:text-[42px]">
            Transforming Vision Into Tangible Designs
          </h1>
        </div>
      </Container>

      {/* Projects Grid Section - Full width */}
      <div className="mx-auto mt-12 w-full max-w-7xl px-6 md:mt-10 md:px-6 lg:mt-12 lg:px-12">
        <LandingProjects showAll={showAll} />
      </div>

      {/* Button Section */}
      <Container className="mb-16 md:mb-12 lg:mb-16 mt-8">
        <div>
          <Button
            type="button"
            variant={"outline"}
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="relative z-10 rounded-full border-0 bg-neutral-200/80 ring-0 hover:bg-neutral-300 md:px-4 md:py-2 md:text-[13px] lg:px-6 lg:py-3 lg:text-sm"
          >
            <span className="flex items-center gap-2 rounded-full text-black md:gap-1.5 lg:gap-2">
              {showAll ? "Show Less" : "See More"}{" "}
              <span className="md:[&>svg]:h-4 md:[&>svg]:w-4 lg:[&>svg]:h-5 lg:[&>svg]:w-5">
                {showAll ? <IconArrowUp /> : <IconArrowDown />}
              </span>
            </span>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
