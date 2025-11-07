import React from "react";
import Container from "./container";
import { CTA } from "./animated-cta";
type WorkExperience = {
  role: string;
  company: string;
  start: string;
  end: string;
  summary: string;
  tech: string[];
};

export const workExperience: WorkExperience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Lumenary Labs",
    start: "Jun 2022",
    end: "Aug 2024",
    summary:
      "Led frontend for a B2B analytics app. Cut load time by 48% and built a shared component library.",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
  },
  {
    role: "UI Library Founder",
    company: "HexUI (Open Source)",
    start: "Jan 2021",
    end: "Present",
    summary:
      "Created and maintained a lightweight UI library with 30+ accessible components and 1k+ npm installs/month.",
    tech: ["TypeScript", "Rollup", "Tailwind"],
  },
  {
    role: "Frontend Lead",
    company: "Atlas Health",
    start: "Sep 2019",
    end: "May 2022",
    summary:
      "Shipped core telehealth features, increased active users 3×, and mentored junior developers.",
    tech: ["Next.js", "React Query", "Tailwind"],
  },
];

export default function WorkExperience() {
  return (
    <div className="pt-40">
      <div className="bg-gradient-to-b from-neutral-100 to-[#f4f4f4] md:mx-auto md:max-w-2xl md:pr-20">
        <Container>
          <h1>Skills and Expertise</h1>
          <CTA href="/" label="hello" />
        </Container>
      </div>
    </div>
  );
}
