import React from "react";
import ProjectCard from "./project-card";
import projects from "@/data/projects";

interface LandingProjectsProps {
  showAll?: boolean;
}

const LandingProjects: React.FC<LandingProjectsProps> = ({ showAll = false }) => {
  const displayProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="w-full">
      {/* Clean Grid Layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-5 lg:gap-10">
        {displayProjects.map((project) => (
          <div key={project.id} className="h-[400px] md:h-[380px] lg:h-[500px]">
            <ProjectCard
              title={project.name}
              image={project.image}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingProjects;
