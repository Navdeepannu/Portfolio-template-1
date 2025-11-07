"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CTAProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

export function CTA({ href, label, icon }: CTAProps) {
  return (
    <motion.div
      className="relative inline-block rounded-full"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <Link
        href={href}
        className={cn(
          "relative inline-flex items-center gap-2 rounded-full px-6 py-2",
          "text-sm font-medium text-black/80 dark:text-neutral-200",
          "border border-black/10 dark:border-white/10",
        )}
      >
        {icon && <span className="h-4 w-4">{icon}</span>}
        <span>{label}</span>
      </Link>

      {/* Animated border ring */}
      <motion.span
        variants={{
          rest: { pathLength: 0 },
          hover: { pathLength: 1 },
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: 0,
        }}
        className="pointer-events-none absolute inset-0 rounded-full"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="48"
            fill="transparent"
            stroke="url(#cyanGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="300"
            strokeDashoffset="300"
            variants={{
              rest: { strokeDashoffset: 300 },
              hover: { strokeDashoffset: 0 },
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="cyanGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </motion.span>
    </motion.div>
  );
}
