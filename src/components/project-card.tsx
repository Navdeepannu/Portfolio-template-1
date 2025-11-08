import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  title: string;
  image: string;
  link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
}) => {
  return (
    <article className="shadow-input group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl bg-white ring-1 ring-neutral-200 transition-all duration-300 hover:bg-neutral-200/80 hover:shadow-lg md:rounded-lg lg:rounded-xl">
      <div className="flex flex-1 flex-col p-3 md:p-2.5 lg:p-4">
        {/* Full image - takes up remaining space */}
        <div className="relative w-full flex-1 overflow-hidden rounded-lg shadow-lg shadow-neutral-500/70 transition-transform duration-300 group-hover:scale-[1.02] md:rounded-md lg:rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
          />
        </div>

        {/* Title row with arrow */}
        <div className="mt-3 flex flex-shrink-0 items-center justify-between px-2 py-2 md:mt-2.5 md:px-3 md:py-2 lg:mt-4 lg:px-4 lg:py-3">
          <h3 className="text-lg font-medium text-neutral-900 md:text-base lg:text-xl">
            {title}
          </h3>
          <span className="text-neutral-400 transition-colors group-hover:text-neutral-600">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right md:h-5 md:w-5 lg:h-6 lg:w-6"
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
