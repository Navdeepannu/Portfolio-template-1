import React from "react";
import Container from "./container";
import LandingProjects from "./landing-projects";
import { Button } from "./ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const Projects = () => {
  return (
    <div className="border-b border-neutral-500">
      <div className="pb-50 md:mx-auto md:max-w-2xl md:pr-20">
        <Container>
          <p className="flex items-center gap-2 text-base">
            <span className="size-2 rounded-full bg-black" />
            My Projects
          </p>
          <h1 className="font-times-heading text-[36px] leading-tight">
            Transforming Vision Into Tangible Designs
          </h1>

          <div className="flex flex-col items-start justify-between gap-6">
            <LandingProjects />

            <Button
              type="button"
              variant={"outline"}
              size="lg"
              className="relative z-10 rounded-full border-0 bg-neutral-200/80 ring-0 hover:bg-neutral-300"
            >
              {/* text */}
              <span className="flex items-center gap-2 rounded-full text-black">
                See More <IconArrowRight />
              </span>
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
