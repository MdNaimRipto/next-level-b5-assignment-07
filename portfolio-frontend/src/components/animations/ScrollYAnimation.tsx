"use client";
import { animate } from "framer-motion";
import { ReactNode, useRef } from "react";

const ScrollYAnimation = ({ children }: { children: ReactNode }) => {
  const isAnimating = useRef(false); // prevent overlapping scrolls

  const handleScroll = (e: WheelEvent) => {
    if (isAnimating.current) return;

    const direction = e.deltaY > 0 ? 1 : -1; // down = 1, up = -1
    const start = window.scrollY;
    const target = start + window.innerHeight * direction;

    isAnimating.current = true;

    animate(start, target, {
      duration: 1,
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest),
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  return (
    <div onWheel={(e) => handleScroll(e as unknown as WheelEvent)}>
      {children}
    </div>
  );
};

export default ScrollYAnimation;
