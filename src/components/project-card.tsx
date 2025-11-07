import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  image: string;
  link?: string;
  variant?: "large" | "medium" | "small" | "wide";
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  variant = "medium",
}) => {
  const titleSizeClasses = {
    large: "text-xl md:text-2xl",
    medium: "text-lg md:text-xl",
    small: "text-base md:text-lg",
    wide: "text-lg md:text-xl",
  };

  return (
    <article className="shadow-input group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl bg-white ring-1 ring-neutral-200 transition-all duration-300 hover:bg-neutral-200/80 hover:shadow-lg">
      <div className="flex flex-1 flex-col p-3 md:p-4">
        {/* framed image - takes up remaining space */}
        <div className="relative w-full flex-1 overflow-hidden rounded-lg shadow-lg shadow-neutral-500/70 transition-transform duration-300 group-hover:scale-[1.02]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
            priority={variant === "large"}
          />
        </div>

        {/* title row */}
        <div className="mt-3 flex flex-shrink-0 items-center justify-between px-2 py-2 md:mt-4 md:px-4 md:py-3">
          <h3
            className={cn(
              "font-medium text-neutral-900",
              titleSizeClasses[variant]
            )}
          >
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
