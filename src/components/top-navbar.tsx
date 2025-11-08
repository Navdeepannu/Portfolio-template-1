"use client";

import React from "react";

const TopNavbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-transparent backdrop-blur-md">
      <div className="mx-auto flex w-full items-end justify-end px-6 py-4 md:px-8 lg:px-12">
        {/* Right: Status with Blue Glow Effect */}
        <div className="relative flex items-center gap-2">
          {/* Blue glow effect behind the CTA */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-blue-500/20 blur-xl" />
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-blue-400/10 blur-2xl" />

          <div className="hidden h-2 w-2 animate-pulse rounded-full bg-green-500 md:flex" />
          <span className="hidden text-sm font-medium text-neutral-700 md:flex dark:text-neutral-300">
            accepting new projects
          </span>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
