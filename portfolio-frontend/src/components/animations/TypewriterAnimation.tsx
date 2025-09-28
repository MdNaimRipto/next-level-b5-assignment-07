"use client";
import React, { useState, useEffect, useRef } from "react";

const TypewriterAnimation = ({
  text,
  speed = 50,
  className,
  design = "_", // blinking cursor / design
}: {
  text: string;
  speed?: number; // typing speed in ms
  className?: string;
  design?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showDesign, setShowDesign] = useState(true);
  const [startTyping, setStartTyping] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  // Intersection Observer to trigger animation when visible
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.disconnect(); // stop observing once triggered
        }
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!startTyping) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setTimeout(() => setShowDesign(false), 300); // hide design after done
      }
    }, speed);

    return () => clearInterval(interval);
  }, [startTyping, text, speed]);

  return (
    <p ref={ref} className={className}>
      {displayedText}
      {showDesign && <span className="animate-pulse">{design}</span>}
    </p>
  );
};

export default TypewriterAnimation;
