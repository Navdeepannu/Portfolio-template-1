"use client";

import React from "react";
import { motion } from "motion/react";

interface IconProps {
  className?: string;
  animate?: boolean;
}

export const AnimatedCalendar: React.FC<IconProps> = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icon-tabler-calendar-bolt"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Calendar outline */}
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13.5 21h-7.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M4 11h16" />

      <motion.path
        d="M19 16l-2 3h4l-2 3"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      />
    </motion.svg>
  );
};

export const AnimatedHand: React.FC<IconProps> = () => {
  return (
    <motion.svg
      initial={{
        y: 20,
        scale: 0.5,
      }}
      whileInView={{ y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.6,
      }}
      viewport={{ once: true }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-hand-grab"
    >
      <motion.path
        initial={{
          pathLength: 0,
        }}
        whileInView={{
          pathLength: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeIn",
          delay: 0.6,
        }}
        viewport={{ once: true }}
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
      />
      <motion.path
        initial={{
          pathLength: 0,
        }}
        whileInView={{
          pathLength: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeIn",
          delay: 0.7,
        }}
        d="M8 11v-3.5a1.5 1.5 0 0 1 3 0v2.5"
      />
      <motion.path
        initial={{
          pathLength: 0,
        }}
        whileInView={{
          pathLength: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeIn",
          delay: 0.8,
        }}
        viewport={{ once: true }}
        d="M11 9.5v-3a1.5 1.5 0 0 1 3 0v3.5"
      />
      <motion.path
        initial={{
          pathLength: 0,
        }}
        whileInView={{
          pathLength: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeIn",
          delay: 0.9,
        }}
        d="M14 7.5a1.5 1.5 0 0 1 3 0v2.5"
      />
      <path d="M17 9.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
    </motion.svg>
  );
};

export const AnimatedRocket: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial={{
        opacity: 0,
        x: -20,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        ease: "easeOut",
        duration: 0.5,
        delay: 1.5,
      }}
    >
      <motion.path
        initial={{
          opacity: 0,
          z: 100,
        }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          z: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.8,
        }}
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </motion.svg>
  );
};

export const AnimatedPackageCheck: React.FC<IconProps> = ({
  className = "",
}) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
        delay: 1.9,
      }}
    >
      <motion.path
        initial={{
          pathLength: 0,
        }}
        whileInView={{
          pathLength: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 2,
        }}
        d="m16 16 2 2 4-4"
      />
      <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
      <path d="M16.5 9.4 7.55 4.24" />
      <polyline points="3.29 7 12 12 20.71 7" />
      <line x1="12" y1="22" x2="12" y2="12" />
    </motion.svg>
  );
};
