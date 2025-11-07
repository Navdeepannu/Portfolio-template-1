import React from "react";
import ProjectCard from "./project-card";
import projects from "@/data/projects";

const LandingProjects: React.FC = () => {
  const displayProjects = projects.slice(0, 6);

  return (
    <section className="w-full">
      {/* Bento Grid Layout */}
      <div className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
        {/* First card - Large (spans 2 rows on desktop) */}
        {displayProjects[0] && (
          <div className="h-[500px] md:col-span-7 md:row-span-2 md:h-auto">
            <ProjectCard
              title={displayProjects[0].name}
              image={displayProjects[0].image}
              link={displayProjects[0].link}
              variant="large"
            />
          </div>
        )}

        {/* Second card - Medium (top right) */}
        {displayProjects[1] && (
          <div className="h-[350px] md:col-span-5 md:row-span-1 md:h-auto">
            <ProjectCard
              title={displayProjects[1].name}
              image={displayProjects[1].image}
              link={displayProjects[1].link}
              variant="medium"
            />
          </div>
        )}

        {/* Third card - Medium (middle right) */}
        {displayProjects[2] && (
          <div className="h-[350px] md:col-span-5 md:row-span-1 md:h-auto">
            <ProjectCard
              title={displayProjects[2].name}
              image={displayProjects[2].image}
              link={displayProjects[2].link}
              variant="medium"
            />
          </div>
        )}

        {/* Fourth card - Small */}
        {displayProjects[3] && (
          <div className="h-[300px] md:col-span-4 md:h-auto">
            <ProjectCard
              title={displayProjects[3].name}
              image={displayProjects[3].image}
              link={displayProjects[3].link}
              variant="small"
            />
          </div>
        )}

        {/* Fifth card - Wide */}
        {displayProjects[4] && (
          <div className="h-[350px] md:col-span-8 md:h-auto">
            <ProjectCard
              title={displayProjects[4].name}
              image={displayProjects[4].image}
              link={displayProjects[4].link}
              variant="wide"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default LandingProjects;
