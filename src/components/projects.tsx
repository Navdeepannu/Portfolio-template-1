import React from "react";
import Container from "./container";
import LandingProjects from "./landing-projects";
import { Button } from "./ui/button";
import { IconArrowRight } from "@tabler/icons-react";

const Projects = () => {
  return (
    <div className="border-b border-dashed border-neutral-200 py-8">
      {/* Header Section */}
      <Container>
        <div className="flex flex-col items-start gap-4">
          <p className="flex items-center gap-2 text-base">
            <span className="size-2 rounded-full bg-black" />
            My Work
          </p>
          <h1 className="font-times-heading text-[36px] leading-tight">
            Transforming Vision Into Tangible Designs
          </h1>
        </div>
      </Container>

      {/* Bento Grid Section - Full width */}
      <div className="mx-auto mt-12 w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <LandingProjects />
      </div>

      {/* Button Section */}
      <Container>
        <div className="mt-12">
          <Button
            type="button"
            variant={"outline"}
            size="lg"
            className="relative z-10 rounded-full border-0 bg-neutral-200/80 ring-0 hover:bg-neutral-300"
          >
            <span className="flex items-center gap-2 rounded-full text-black">
              See More <IconArrowRight />
            </span>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
