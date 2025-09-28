"use client";
import SplitText from "@/components/animations/SplitTextAnimation";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const font = Inter({});

const RotatingTitle = () => {
  const titles = [
    "Full-stack Developer",
    "MERN-stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4000); // change every 4s (3–5s range)

    return () => clearInterval(interval); // cleanup
  }, [titles.length]);

  return (
    <SplitText
      key={titles[index]}
      text={titles[index]}
      className={`text-primary font-semibold ${font.className} text-[50px]`}
    />
  );
};

export default RotatingTitle;
