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
        className,

        "mx-auto mt-20 flex min-h-screen w-full max-w-3xl flex-col items-start gap-4 pl-20",
      )}
    >
      {children}
    </div>
  );
};

export default Container;
