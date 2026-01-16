import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
  delay?: number;
}

export const ScrollReveal = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: ScrollRevealProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const animations = {
    "fade-up": {
      initial: "opacity-0 translate-y-8",
      animate: "opacity-100 translate-y-0",
    },
    "fade-in": {
      initial: "opacity-0",
      animate: "opacity-100",
    },
    "slide-left": {
      initial: "opacity-0 -translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    "slide-right": {
      initial: "opacity-0 translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    "scale": {
      initial: "opacity-0 scale-95",
      animate: "opacity-100 scale-100",
    },
  };

  const { initial, animate } = animations[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isInView ? animate : initial,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
