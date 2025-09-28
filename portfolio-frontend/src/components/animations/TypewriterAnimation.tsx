"use client";
import React, { useState, useEffect } from "react";

const TypewriterAnimation = ({
  text,
  speed = 50,
  className,
  design = "_", // the blinking cursor / design
}: {
  text: string;
  speed?: number; // typing speed in ms
  className?: string;
  design?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showDesign, setShowDesign] = useState(true);

  useEffect(() => {
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
  }, [text, speed]);

  return (
    <p className={className}>
      {displayedText}
      {showDesign && <span className="animate-pulse">{design}</span>}
    </p>
  );
};

export default TypewriterAnimation;
