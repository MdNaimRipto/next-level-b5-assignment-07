"use client";
import { animate } from "framer-motion";
import { ReactNode } from "react";

const ScrollDownAnimation = ({ children }: { children: ReactNode }) => {
  const handleScroll = () => {
    const start = window.scrollY;
    const target = start + window.innerHeight; // scroll down 100vh

    animate(start, target, {
      duration: 1,
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  return (
    <div
      onWheel={(e) => {
        if (e.deltaY > 0) handleScroll();
      }}
    >
      {children}
    </div>
  );
};

export default ScrollDownAnimation;
