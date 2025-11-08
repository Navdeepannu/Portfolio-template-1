import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-col items-start gap-4 px-6 md:gap-3 md:px-6 lg:gap-4 lg:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
