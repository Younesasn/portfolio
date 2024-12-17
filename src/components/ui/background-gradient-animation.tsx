"use client";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(0, 0, 0)",
  gradientBackgroundEnd = "rgb(20, 25, 25)",
  children,
  className,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart,
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd,
    );
  }, []);

  return (
    <div
      className={cn(
        "relative left-0 top-0 z-0 h-screen w-screen overflow-x-hidden overflow-y-scroll bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName,
      )}
    >
      <div className={cn("", className)}>{children}</div>
    </div>
  );
};
