import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  title: string;
  image: string;
  link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, link }) => {
  return (
    <article className="shadow-input group mx-auto w-full max-w-2xl cursor-pointer overflow-hidden rounded-xl bg-white ring-1 ring-neutral-200 transition-colors duration-300 hover:bg-neutral-200/80">
      <div className="p-4">
        {/* framed image */}
        <div className="h-100 w-140 overflow-hidden rounded-lg shadow-lg shadow-neutral-500/70">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* title row */}
        <div className="mt-4 flex items-center justify-between px-6 py-4">
          <h3 className="text-lg font-medium text-neutral-900">{title}</h3>
          <span className="text-neutral-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 7l-10 10" />
              <path d="M8 7l9 0l0 9" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
