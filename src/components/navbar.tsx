"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { title: string; link: string; cta: boolean };

const navlinks: NavLink[] = [
  { title: "Home", link: "/", cta: false },
  { title: "Projects", link: "/#projects", cta: false },
  { title: "Services", link: "/#services", cta: false },
  { title: "Contact", link: "/#contact", cta: false },
  // Optional CTA style link (not counted toward the requested 3 more basic links)
  { title: "Get Now", link: "/#get", cta: true },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 select-none md:bottom-5 lg:bottom-6"
    >
      <ul className="flex items-center gap-1 rounded-full bg-gradient-to-b from-neutral-700/60 via-neutral-700 to-neutral-950 px-3 py-2 shadow-md shadow-neutral-900/50 dark:border-white/10 dark:bg-neutral-900/60 md:gap-0.5 md:px-2.5 md:py-1.5 lg:gap-1 lg:px-3 lg:py-2">
        {navlinks.map((item) => {
          const isActive =
            item.link === "/"
              ? pathname === "/"
              : pathname.startsWith(item.link.replace(/#.*/g, ""));

          return (
            <li key={item.title} className="relative">
              <Link
                href={item.link}
                className={
                  "group text-md relative flex items-center gap-1 rounded-full px-4 py-2 font-medium transition-colors md:px-3 md:py-1.5 md:text-[13px] lg:px-4 lg:py-2 lg:text-base " +
                  (item.cta
                    ? "bg-gradient-to-b from-neutral-950 via-neutral-700 to-neutral-700/60 text-white"
                    : " text-neutral-300 transition-transform duration-300 ease-out hover:scale-105 hover:text-white")
                }
              >
                {/* Active indicator background */}
                {!item.cta && (
                  <span
                    className={"absolute " + (isActive ? " text-white" : "")}
                  />
                )}
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
