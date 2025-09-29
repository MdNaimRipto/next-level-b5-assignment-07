"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track the "raw" scroll position
  const scrollY = useMotionValue(0);

  // Apply a spring for smoothness
  const smoothY = useSpring(scrollY, { damping: 20, stiffness: 100 });

  // Invert the motion (scroll down moves content up)
  const y = useTransform(smoothY, (val) => -val);

  useEffect(() => {
    const scrollable = scrollRef.current;
    if (!scrollable) return;

    // Match body height to content
    const contentHeight = scrollable.getBoundingClientRect().height;
    document.body.style.height = `${contentHeight}px`;

    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.height = "";
    };
  }, [scrollY]);

  return (
    <motion.div
      style={{ y }} // ✅ Corrected inverted scroll
      className="fixed top-0 left-0 w-full will-change-transform"
    >
      <div ref={scrollRef}>{children}</div>
    </motion.div>
  );
}
