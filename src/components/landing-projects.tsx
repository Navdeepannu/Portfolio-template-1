import React from "react";
import ProjectCard from "./project-card";
import projects from "@/data/projects";

const LandingProjects: React.FC = () => {
  const firstThree = projects.slice(0, 3);

  return (
    <section className="space-y-8">
      {firstThree.map((p) => (
        <ProjectCard key={p.id} title={p.name} image={p.image} link={p.link} />
      ))}
    </section>
  );
};

export default LandingProjects;
