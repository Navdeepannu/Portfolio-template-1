"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowUpLeft } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="from-background via-background to-primary/5 flex min-h-screen items-center justify-center bg-gradient-to-br px-4 text-balance">
      <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-8 text-center">
        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-primary/80 text-7xl font-bold lg:text-9xl">
            404
          </h1>
          <h2 className="text-foreground text-3xl font-bold lg:text-5xl">
            I think you&apos;re lost!
          </h2>
          <p className="text-muted-foreground mx-auto max-w-md text-lg">
            Let&apos;s get you back to familiar territory.
          </p>
        </div>

        {/* Button */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            asChild
            variant="default"
            size="lg"
            className={cn(
              "group flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-b from-neutral-300/60 from-2% via-neutral-900 via-10% to-neutral-950 to-90% px-6 py-3 text-sm text-white md:px-5 md:py-2.5 md:text-[13px] lg:px-6 lg:py-3 lg:text-sm",
              "shadow-lg shadow-neutral-700/80",
              "border border-black",
              "transition duration-200 hover:scale-105",
            )}
          >
            <Link href="/">
              <IconArrowUpLeft className="size-5 stroke-2 text-neutral-200 transition-colors duration-200 group-hover:text-neutral-200/90 md:size-4 lg:size-5" />
              Go to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
